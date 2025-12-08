// --- Seleção de Elementos do DOM ---
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const menuBtn = document.getElementById('menu-btn');
const navList = document.querySelector('#navbar ul');
const contactForm = document.getElementById('contactForm');

// --- Funcionalidade: Alternar Tema (Claro/Escuro) ---
themeToggleBtn.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no corpo do site
    body.classList.toggle('dark-mode');

    // Atualiza o texto do botão conforme o tema
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.innerText = '☀️ Tema Claro';
    } else {
        themeToggleBtn.innerText = '🌙 Tema Escuro';
    }
});

// --- Funcionalidade: Menu Responsivo ---
menuBtn.addEventListener('click', () => {
    // Alterna a classe 'show' na lista de navegação
    navList.classList.toggle('show');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('show');
    });
});

// --- Validação e Simulação de Envio do Formulário ---
contactForm.addEventListener('submit', function(event) {
    // Previne o envio padrão do formulário (recarregar a página)
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Seleciona áreas para mensagens de erro
    const errorNome = document.getElementById('error-nome');
    const errorEmail = document.getElementById('error-email');
    const errorMsg = document.getElementById('error-msg');

    // Reseta mensagens de erro anteriores
    errorNome.textContent = '';
    errorEmail.textContent = '';
    errorMsg.textContent = '';

    let isValid = true;

    // --- Validação: Nome ---
    if (nome === '') {
        errorNome.textContent = 'Por favor, preencha seu nome.';
        isValid = false;
    }

    // --- Validação: E-mail (Regex Simples) ---
    // Verifica formato usuario@dominio.com
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        errorEmail.textContent = 'Por favor, preencha seu e-mail.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        errorEmail.textContent = 'Insira um e-mail válido (ex: nome@dominio.com).';
        isValid = false;
    }

    // --- Validação: Mensagem ---
    if (mensagem === '') {
        errorMsg.textContent = 'Por favor, escreva sua mensagem.';
        isValid = false;
    }

    // --- Simulação de Envio ---
    if (isValid) {
        // Simula um tempo de processamento (opcional, apenas visual)
        const btnSubmit = document.querySelector('.btn-submit');
        const textoOriginal = btnSubmit.innerText;
        btnSubmit.innerText = 'Enviando...';
        btnSubmit.disabled = true;

        setTimeout(() => {
            // Ação de sucesso
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
            
            // Limpa o formulário
            contactForm.reset();
            
            // Restaura o botão
            btnSubmit.innerText = textoOriginal;
            btnSubmit.disabled = false;
        }, 1500); // 1.5 segundos de delay simulado
    }
});