
const cards = document.querySelectorAll('.location-card');

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const animateCards = () => {
        cards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('animate');
            }
        });
    };

    // При прокрутке страницы проверяем, вошла ли карточка в видимую область
    window.addEventListener('scroll', animateCards);
    
    // Запускаем сразу при загрузке страницы
    animateCards();
    let currentSlide = 0;
    const slides = document.querySelectorAll('.location-card');
    const totalSlides = slides.length;

    const nextSlide = () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides; // Обновляем индекс слайдера
        slides[currentSlide].classList.add('active');
    };

    setInterval(nextSlide, 5000); // Каждые 5 секунд переключать слайд

    // Инициализируем первый слайд как активный
    slides[currentSlide].classList.add('active');

    const backToTopButton = document.getElementById('backToTop');

    // Показать кнопку, когда прокручено 100px
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    // Прокрутить страницу наверх при клике на кнопку
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });