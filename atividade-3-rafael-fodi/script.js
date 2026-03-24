document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('loading').classList.add('hidden');
    }, 1000);

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(function(section) {
        observer.observe(section);
    });
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');

    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const img = item.querySelector('img');
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    document.querySelector('.back-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
