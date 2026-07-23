/* ==========================================================================
   RCORETECH - INTERACTIVE SPA JAVASCRIPT
   Features: Multi-language (PT/EN), Typing Animation, Portfolio Carousel,
   Glassmorphism Cards Touch/Flip, Modals, Lead Form Validation.
   ========================================================================== */

// 1. DICIONÁRIO DE TRADUÇÕES (PT / EN)
const i18n = {
    pt: {
        nav_home: "Início",
        nav_services: "Serviços",
        nav_portfolio: "Portefólio",
        nav_testimonials: "Testemunhos",
        nav_contact: "Contacto",
        btn_remote_support: "Suporte Remoto",
        hero_badge: "TECNOLOGIA & INOVAÇÃO 360º",
        hero_title_prefix: "A Sua Parceira em",
        hero_subtitle: "Soluções informáticas 360º para particulares e empresas, do Algarve para todo o país.",
        hero_cta_primary: "Pedir Orçamento Grátis",
        hero_cta_secondary: "Ver Serviços",
        stat_1: "Cobertura Tecnológica",
        stat_2: "Suporte Personalizado",
        stat_3: "Atendimento Presencial",
        services_tag: "O QUE FAZEMOS",
        services_title: "Os Nossos Serviços Especiais",
        services_subtitle: "Passe o rato (ou toque) sobre cada cartão para explorar o detalhe das nossas soluções informáticas.",
        card_hover_hint: "Passe o rato para ver mais →",
        s1_title: "Serviços de Presença Digital",
        s1_desc: "Desenvolvimento de websites modernos, registo de domínios e configuração de e-mails corporativos.",
        s1_back_title: "O que está incluído:",
        s1_i1: "Criação & Registo de Domínios (.pt, .com)",
        s1_i2: "Websites One Page & Multi-página",
        s1_i3: "E-mails Institucionais Personalizados",
        s1_i4: "Otimização SEO & Segurança SSL",

        s2_title: "Suporte Técnico 360º",
        s2_desc: "Assistência completa a hardware e software com apoio presencial no Sotavento Algarvio e remoto nacional.",
        s2_back_title: "O que está incluído:",
        s2_i1: "Diagnóstico & Manutenção de PC/Mac",
        s2_i2: "Instalação & Configuração de Software",
        s2_i3: "Apoio Remoto & Intervenção Presencial",
        s2_i4: "Limpeza Física & Troca de Componentes",

        s3_title: "Infraestrutura de Redes",
        s3_desc: "Planeamento, montagem de bastidores, routers, firewalls e passagem de cablagem para escritórios.",
        s3_back_title: "O que está incluído:",
        s3_i1: "Instalação de Bastidores & Racks",
        s3_i2: "Configuração de Routers / Firewalls",
        s3_i3: "Passagem & Organização de Cabos",
        s3_i4: "Implementação de Wi-Fi de Alta Velocidade",

        s4_title: "Venda & Licenciamento",
        s4_desc: "Seleção e fornecimento do melhor hardware e licenças de software adequadas ao seu negócio.",
        s4_back_title: "O que está incluído:",
        s4_i1: "Hardware (Computadores, Impressoras)",
        s4_i2: "Licenciamento Office & Antivírus",
        s4_i3: "Software de Faturação Empresarial",
        s4_i4: "Aconselhamento Técnico Personalizado",

        btn_full_services: "Ver Lista Completa de Serviços",
        portfolio_tag: "PROJETOS EM DESTAQUE",
        portfolio_title: "Portefólio / Trabalhos Realizados",
        portfolio_subtitle: "Conheça alguns dos projetos executados pela RCoreTech, demonstrando o nosso domínio 360º.",
        p1_badge: "Hardware & Manutenção",
        p1_title: "Montagem & Otimização de Workstations",
        p1_desc: "Configuração de equipamentos de elevada performance com gestão rigorosa de cabos, refrigeração eficiente e testes de estabilidade.",

        p2_badge: "Presença Digital",
        p2_title: "Desenvolvimento de Plataforma Web Corporate",
        p2_desc: "Criação de website moderno em formato One Page expansível, com otimização SEO avançada e compatibilidade mobile total.",

        p3_badge: "Infraestrutura de Redes",
        p3_title: "Instalação de Bastidor & Rede Estruturada",
        p3_desc: "Implementação de infraestrutura de rede completa para escritório corporativo, incluindo cablagem Cat6 e switch gerido.",

        p4_badge: "Suporte Remoto & Monitorização",
        p4_title: "Central de Apoio & Diagnóstico Remoto",
        p4_desc: "Monitorização contínua e assistência em tempo real para prevenção de falhas e manutenção de sistemas informáticos.",

        trust_banner_title: "EMPRESAS QUE CONFIAM NA RCORETECH",
        testimonials_tag: "PROVA SOCIAL",
        testimonials_title: "O Que Dizem os Nossos Clientes",
        t1_quote: '"A RCoreTech reformulou toda a rede informática do nosso escritório em Faro. A rapidez e a transparência no diagnóstico foram excecionais!"',
        t1_role: "Diretor de Operações | Faro Logistics",
        t2_quote: '"O nosso novo website e a configuração dos emails institucionais ficaram impecáveis. Sempre disponíveis para suporte remoto quando precisamos."',
        t2_role: "Sócia-Gerente | Sotavento Health",
        t3_quote: '"Assistência técnica fantástica para o nosso restaurante. Resolveram a avaria nos nossos computadores no próprio dia."',
        t3_role: "Proprietário | Tavira Gourmet",

        contact_tag: "FALE CONNOSCO",
        contact_title: "Solicite o Seu Orçamento Grátis",
        contact_subtitle: "Estamos prontos para impulsionar a tecnologia do seu negócio. Preencha o formulário ou entre em contacto direto.",
        info_title: "Contactos Diretos",
        lbl_email: "Email Corporativo",
        lbl_phone: "Telefone / WhatsApp",
        lbl_hours: "Horário de Funcionamento",
        val_hours: "Segunda a Sexta: 09:00 - 18:00",
        lbl_area: "Área de Atuação",
        val_area: "Presencial: Sotavento Algarvio | Remoto: Todo o País",
        map_title: "Cobertura Sotavento Algarvio (Faro, Olhão, Tavira, VRSA)",
        form_title: "Enviar Mensagem",
        lbl_name: "Nome Completo *",
        lbl_form_email: "Email *",
        lbl_form_phone: "Telefone *",
        lbl_service_type: "Tipo de Serviço Pretendido *",
        opt_select: "Selecione uma opção...",
        opt_web: "Web & Presença Digital",
        opt_redes: "Infraestrutura de Redes",
        opt_suporte: "Suporte Técnico a Equipamentos",
        opt_venda: "Venda de Equipamento & Licenciamento",
        opt_outro: "Outro Assunto",
        lbl_message: "Mensagem / Detalhes do Pedido *",
        btn_submit: "Enviar Pedido de Orçamento",
        whatsapp_tooltip: "Fale connosco no WhatsApp",
        footer_desc: "Soluções informáticas 360º para particulares e empresas. Excelência, rapidez e proximidade tecnológica do Algarve para todo o país.",
        footer_links: "Links Rápidos",
        footer_services: "Serviços",
        footer_contact: "Contactos",
        footer_loc: "Sotavento Algarvio, Portugal",
        legal_privacy: "Política de Privacidade",
        legal_terms: "Termos de Serviço",
        modal_services_title: "Catálogo Completo de Serviços RCoreTech 360º",
        modal_remote_title: "Assistência Técnica Remota Instantânea",
        modal_remote_desc: "O nosso serviço de Suporte Remoto permite-nos resolver problemas no seu equipamento em tempo real, sem necessidade de deslocação."
    },
    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_testimonials: "Testimonials",
        nav_contact: "Contact",
        btn_remote_support: "Remote Support",
        hero_badge: "360º TECHNOLOGY & INNOVATION",
        hero_title_prefix: "Your Partner in",
        hero_subtitle: "360º IT solutions for individuals and businesses, from the Algarve to nationwide.",
        hero_cta_primary: "Get Free Quote",
        hero_cta_secondary: "View Services",
        stat_1: "Tech Coverage",
        stat_2: "Custom Support",
        stat_3: "On-site Service",
        services_tag: "WHAT WE DO",
        services_title: "Our Specialized Services",
        services_subtitle: "Hover (or tap) over each card to explore details of our IT solutions.",
        card_hover_hint: "Hover to see details →",
        s1_title: "Digital Presence Services",
        s1_desc: "Development of modern websites, domain registration, and custom corporate email setup.",
        s1_back_title: "What is included:",
        s1_i1: "Domain Registration (.pt, .com)",
        s1_i2: "One Page & Multi-page Websites",
        s1_i3: "Custom Institutional Email Accounts",
        s1_i4: "SEO Optimization & SSL Security",

        s2_title: "360º Technical Support",
        s2_desc: "Full hardware and software support with on-site assistance in Eastern Algarve and nationwide remote help.",
        s2_back_title: "What is included:",
        s2_i1: "PC/Mac Repair & Diagnostics",
        s2_i2: "Software Installation & Setup",
        s2_i3: "Remote & On-site Technical Help",
        s2_i4: "Hardware Cleaning & Upgrades",

        s3_title: "Network Infrastructure",
        s3_desc: "Planning, rack cabinet installation, router & firewall configuration, and office cabling.",
        s3_back_title: "What is included:",
        s3_i1: "Rack & Cabinet Setup",
        s3_i2: "Router / Firewall Configuration",
        s3_i3: "Structured Cabling & Cable Run",
        s3_i4: "High-Speed Business Wi-Fi Setup",

        s4_title: "Sales & Licensing",
        s4_desc: "Selection and supply of high-grade hardware and software licenses tailored to your business.",
        s4_back_title: "What is included:",
        s4_i1: "Custom Computers & Peripherals",
        s4_i2: "Office & Antivirus Licensing",
        s4_i3: "Business Invoicing Software",
        s4_i4: "Expert Technical Procurement Advice",

        btn_full_services: "View Complete Services List",
        portfolio_tag: "FEATURED PROJECTS",
        portfolio_title: "Portfolio / Practical Work",
        portfolio_subtitle: "Discover real-world projects executed by RCoreTech demonstrating our 360º expertise.",
        p1_badge: "Hardware & Maintenance",
        p1_title: "Workstation Build & Optimization",
        p1_desc: "High-performance PC assembly with neat cable management, efficient cooling, and stability testing.",

        p2_badge: "Digital Presence",
        p2_title: "Corporate Web Platform Development",
        p2_desc: "Creation of a modern responsive corporate website with advanced SEO and mobile compatibility.",

        p3_badge: "Network Infrastructure",
        p3_title: "Rack Cabinet & Structured Cabling Setup",
        p3_desc: "Full office network implementation including Cat6 cabling and managed switch configuration.",

        p4_badge: "Remote Support & Monitoring",
        p4_title: "Remote Monitoring & Helpdesk Station",
        p4_desc: "Continuous system health monitoring and real-time support to prevent IT downtime.",

        trust_banner_title: "COMPANIES THAT TRUST RCORETECH",
        testimonials_tag: "SOCIAL PROOF",
        testimonials_title: "What Our Clients Say",
        t1_quote: '"RCoreTech upgraded our entire office network in Faro. Their speed and transparent diagnostics were exceptional!"',
        t1_role: "Operations Director | Faro Logistics",
        t2_quote: '"Our new website and email configuration are flawless. Always available for fast remote support when needed."',
        t2_role: "Managing Partner | Sotavento Health",
        t3_quote: '"Fantastic technical assistance for our restaurant. They fixed our computer issues on the very same day."',
        t3_role: "Owner | Tavira Gourmet",

        contact_tag: "GET IN TOUCH",
        contact_title: "Request Your Free Quote",
        contact_subtitle: "We are ready to boost your business technology. Fill in the form or contact us directly.",
        info_title: "Direct Contacts",
        lbl_email: "Corporate Email",
        lbl_phone: "Phone / WhatsApp",
        lbl_hours: "Business Hours",
        val_hours: "Monday to Friday: 09:00 - 18:00",
        lbl_area: "Service Area",
        val_area: "On-site: Eastern Algarve | Remote: Nationwide",
        map_title: "Eastern Algarve Coverage (Faro, Olhão, Tavira, VRSA)",
        form_title: "Send a Message",
        lbl_name: "Full Name *",
        lbl_form_email: "Email *",
        lbl_form_phone: "Phone *",
        lbl_service_type: "Requested Service *",
        opt_select: "Select an option...",
        opt_web: "Web & Digital Presence",
        opt_redes: "Network Infrastructure",
        opt_suporte: "Technical Support",
        opt_venda: "Sales & Software Licensing",
        opt_outro: "Other Topic",
        lbl_message: "Message / Project Details *",
        btn_submit: "Send Quote Request",
        whatsapp_tooltip: "Chat with us on WhatsApp",
        footer_desc: "360º IT solutions for individuals and businesses. Excellence, speed, and tech proximity from the Algarve to nationwide.",
        footer_links: "Quick Links",
        footer_services: "Services",
        footer_contact: "Contacts",
        footer_loc: "Eastern Algarve, Portugal",
        legal_privacy: "Privacy Policy",
        legal_terms: "Terms of Service",
        modal_services_title: "Complete RCoreTech 360º Service Catalog",
        modal_remote_title: "Instant Remote Technical Support",
        modal_remote_desc: "Our Remote Support service allows us to diagnose and fix issues on your device in real-time."
    }
};

let currentLang = 'pt';

// 2. DYNAMIC TYPING ANIMATION IN HERO
const typingWords = {
    pt: ['Redes', 'Web', 'Suporte', 'Software'],
    en: ['Networks', 'Web', 'Support', 'Software']
};

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;

function typeEffect() {
    const textElement = document.getElementById('typed-text');
    if (!textElement) return;

    const words = typingWords[currentLang];
    const currentWord = words[wordIndex % words.length];

    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 2200; // Pause at full word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        speed = 400; // Pause before next word
    }

    typingTimeout = setTimeout(typeEffect, speed);
}

// 3. LANGUAGE SWITCHER
function switchLanguage(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;

    // Update active button classes
    document.getElementById('lang-pt').classList.toggle('active', lang === 'pt');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');

    // Update all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = i18n[lang][key];
            } else {
                el.textContent = i18n[lang][key];
            }
        }
    });

    // Reset typing animation
    clearTimeout(typingTimeout);
    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typeEffect();
}

// 4. PORTFOLIO CAROUSEL
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.getElementById('carousel-dots');
let autoSlideInterval = null;

function initCarousel() {
    if (!slides.length || !dotsContainer) return;

    // Create indicator dots
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    document.getElementById('carousel-prev')?.addEventListener('click', prevSlide);
    document.getElementById('carousel-next')?.addEventListener('click', nextSlide);

    startAutoSlide();

    // Pause auto slide on hover
    const carouselEl = document.getElementById('portfolio-carousel');
    if (carouselEl) {
        carouselEl.addEventListener('mouseenter', stopAutoSlide);
        carouselEl.addEventListener('mouseleave', startAutoSlide);
    }
}

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update active slide class
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
}

function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(nextSlide, 6000);
}

function stopAutoSlide() {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
}

// 5. MOBILE DRAWER NAVIGATION
const mobileToggle = document.getElementById('mobile-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');
const drawerClose = document.getElementById('drawer-close');

if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
        mobileDrawer.classList.add('open');
    });
}

if (drawerClose && mobileDrawer) {
    drawerClose.addEventListener('click', closeDrawer);
}

function closeDrawer() {
    if (mobileDrawer) {
        mobileDrawer.classList.remove('open');
    }
}

// 6. MODALS MANAGEMENT
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking on overlay background
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});

// Legal Modals Content Handler
function openLegalModal(type) {
    const titleEl = document.getElementById('legal-modal-title');
    const contentEl = document.getElementById('legal-modal-content');
    if (!titleEl || !contentEl) return;

    if (type === 'rgpd') {
        titleEl.textContent = 'RGPD - Regulamento Geral de Proteção de Dados';
        contentEl.innerHTML = `
            <p><strong>A RCoreTech garante a total privacidade e proteção dos dados dos seus utilizadores.</strong></p>
            <p>1. <strong>Recolha de Dados:</strong> Os dados recolhidos através do nosso formulário de contacto (Nome, Email, Telefone) destinam-se exclusivamente à resposta de pedidos de informação e orçamentos.</p>
            <p>2. <strong>Não Partilha:</strong> Não cedemos ou vendemos os seus dados a terceiros em nenhuma circunstância.</p>
            <p>3. <strong>Direitos do Titular:</strong> Tem o direito de solicitar a consulta, retificação ou eliminação total dos seus dados pessoais dos nossos registos através do email <code>geral@rcoretech.pt</code>.</p>
        `;
    } else if (type === 'privacidade') {
        titleEl.textContent = 'Política de Privacidade';
        contentEl.innerHTML = `
            <p>Esta Política de Privacidade estabelece como a RCoreTech utiliza e protege a informação que fornece ao navegar neste site.</p>
            <p>• <strong>Cookies:</strong> Utilizamos apenas cookies estritamente necessários para o funcionamento e desempenho da plataforma.</p>
            <p>• <strong>Segurança:</strong> Implementamos medidas de encriptação SSL e protocolos técnicos de segurança para prevenir acessos não autorizados.</p>
        `;
    } else if (type === 'termos') {
        titleEl.textContent = 'Termos de Serviço';
        contentEl.innerHTML = `
            <p>Bem-vindo ao website da RCoreTech. Ao utilizar este site, concorda com os seguintes termos:</p>
            <p>1. <strong>Serviços:</strong> As informações sobre os serviços prestados (Web, Redes, Suporte e Venda) são meramente informativas. A prestação efetiva é formalizada mediante proposta ou orçamento aceite.</p>
            <p>2. <strong>Propriedade Intelectual:</strong> Todos os conteúdos, marca, logótipo e grafismos deste site são propriedade exclusiva da RCoreTech.</p>
        `;
    }

    openModal('legal-modal');
}

// 7. FORM SUBMISSION HANDLER
function handleFormSubmit(e) {
    e.preventDefault();
    const feedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('submit-btn');

    if (!feedback || !submitBtn) return;

    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'pt' ? 'A enviar...' : 'Sending...';

    setTimeout(() => {
        feedback.style.color = '#16a34a';
        feedback.textContent = currentLang === 'pt' 
            ? '✓ Obrigado! O seu pedido de orçamento foi enviado com sucesso. Entraremos em contacto brevemente.'
            : '✓ Thank you! Your quote request has been sent successfully. We will get back to you soon.';
        
        document.getElementById('lead-form').reset();
        submitBtn.disabled = false;
        submitBtn.textContent = currentLang === 'pt' ? 'Enviar Pedido de Orçamento' : 'Send Quote Request';

        setTimeout(() => {
            feedback.textContent = '';
        }, 8000);
    }, 1200);
}

// 8. INITIALIZATION ON DOM LOADED
document.addEventListener('DOMContentLoaded', () => {
    typeEffect();
    initCarousel();

    // Active Navigation Highlight on Scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navItem = document.querySelector(`.nav-link[href*=${sectionId}]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItem?.classList.add('active');
            } else {
                navItem?.classList.remove('active');
            }
        });
    });
});
