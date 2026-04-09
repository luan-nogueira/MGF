document.addEventListener('DOMContentLoaded', () => {
    // Inicializar ícones
    lucide.createIcons();

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
    });

    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    // Header scroll background
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Populate Gallery mapping logic
    const galleryGrid = document.getElementById('galleryGrid');
    if(galleryGrid) {
        galleryGrid.innerHTML = `
            <div class="gallery-item"><img src="images/hero.png" alt="MGF Equipamento 1"></div>
            <div class="gallery-item"><img src="images/about.png" alt="MGF Peso Livre"></div>
            <div class="gallery-item"><img src="images/dumbbell.png" alt="MGF Halteres"></div>
            <div class="gallery-item"><img src="images/cardio.png" alt="MGF Cardio"></div>
        `;
    }

    // Scroll Animations (Reveal)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger immediately

    // Floating WhatsApp actions
    const fabMain = document.getElementById('fabMain');
    const fabOptions = document.getElementById('fabOptions');
    const icMsg = document.querySelector('.ic-msg');
    const icClose = document.querySelector('.ic-close');

    fabMain.addEventListener('click', () => {
        fabOptions.classList.toggle('active');
        
        if (fabOptions.classList.contains('active')) {
            icMsg.style.display = 'none';
            icClose.style.display = 'block';
            fabMain.style.animation = 'none';
        } else {
            icMsg.style.display = 'block';
            icClose.style.display = 'none';
            fabMain.style.animation = 'pulse 2s infinite';
        }
    });

    // Close FAB when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.floating-whatsapp-container')) {
            fabOptions.classList.remove('active');
            icMsg.style.display = 'block';
            icClose.style.display = 'none';
            fabMain.style.animation = 'pulse 2s infinite';
        }
    });
});
