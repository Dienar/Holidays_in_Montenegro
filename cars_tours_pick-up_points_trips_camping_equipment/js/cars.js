const translations = {
    ru: {
        description1: "Роскошный седан бизнес-класса, идеальный для аренды на деловые поездки и мероприятия.",
        description2: "Элегантный и мощный автомобиль для аренды на деловые поездки и отдыха для всех.",
        description3: "Идеальный выбор для тех, кто ценит комфорт и безопасность в аренде вместе с audio.",
        description4: "Для любителей скорости и элегантности — аренда спортивного автомобиля для особых случаев.",
        description5: "Инновационный электромобиль с нулевым выбросом, идеален для аренды в долгосрочной перспективе.",
        description6: "Идеальный выбор для аренды на корпоративные поездки с максимальным комфортом.",
        description7: "Премиум-седан для тех, кто ценит комфорт, стиль и безопасность в аренде с шикарным салоном.",
        description8: "Для любителей скорости — аренда спортивного Ferrari для незабываемых впечатлений.",
        description9: "Роскошный автомобиль для аренды на важные события и корпоративы происходящие на работе.",
        description10: "Премиум-седан для аренды с элегантным дизайном и мощным двигателем.",
        description_hour: "/ Час",
        contacts: "Contact",
        rights: "Все права защищены"
    },
    en: {
        description1: "Luxury business class sedan, perfect for rent for business trips and events.",
        description2: "Elegant and powerful car for rent for business trips and leisure.",
        description3: "Perfect choice for those who value comfort and safety in a rental.",
        description4: "For speed and elegance lovers — rent a sports car for special occasions.",
        description5: "Innovative electric car with zero emissions, ideal for long-term rental.",
        description6: "Perfect choice for corporate trips with maximum comfort.",
        description7: "Premium sedan for those who value comfort, style, and safety in a rental.",
        description8: "For speed lovers — rent a Ferrari sports car for unforgettable experiences.",
        description9: "Luxurious car for rent for important events and corporate meetings.",
        description10: "Premium sedan for rent with elegant design and powerful engine.",
        description_hour: "/ Hour",
        contacts: "Contacts",
        rights: "All rights reserved"
    }
};

        // Обработчики изменений
        document.getElementById('currency').addEventListener('change', updatePrices);
        document.getElementById('language').addEventListener('change', updateContent);

        function updatePrices() {
            const currency = document.getElementById('currency').value;
            const prices = document.querySelectorAll('.car-price');
            
            prices.forEach(priceEl => {
                const rub = priceEl.dataset.priceRub;
                const usd = priceEl.dataset.priceUsd;
                const eur = priceEl.dataset.priceEur;
                
                let value = rub;
                switch(currency) {
                    case 'USD': value = usd; break;
                    case 'EUR': value = eur; break;
                }
                
                priceEl.innerHTML = `${currencySymbols[currency]} ${Number(value).toLocaleString()}`;
            });
        }

        function updateContent() {
            const lang = document.getElementById('language').value;
            document.documentElement.lang = lang;
            
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.dataset.translate;
                el.textContent = translations[lang][key];
            });
        }

        const currencySymbols = {
            RUB: '₽',
            USD: '$',
            EUR: '€'
        };

        // Инициализация
        updateContent();
        updatePrices();

        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        let autoScroll;
        let isAnimating = false; // Флаг для отслеживания анимации
        
        function updateSlider(n) {
            if(isAnimating) return; // Не выполняем новую анимацию, пока текущая не завершена
            
            isAnimating = true;
            currentSlide = (n + slides.length) % slides.length;
            
            // Анимация элементов
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
            
            // Плавная прокрутка слайдера
            document.querySelector('.slider').style.transform = 
                `translateX(-${currentSlide * 100}%)`;
                
            // Сбрасываем флаг после завершения анимации
            setTimeout(() => {
                isAnimating = false;
            }, 1000); // Время должно совпадать с длительностью CSS-анимации
        }
        
        function autoPlay() {
            clearInterval(autoScroll); // Очищаем предыдущий интервал
            autoScroll = setInterval(() => {
                if(!isAnimating) {
                    updateSlider(currentSlide + 1);
                }
            }, 4000);
        }
        
        // Инициализация
        autoPlay();
        
        // Обработчики для точек
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                if(isAnimating) return;
                clearInterval(autoScroll);
                updateSlider(index);
                autoPlay();
            });
        });
        
        // Пауза при наведении
        document.querySelector('.slider-wrapper').addEventListener('mouseenter', () => {
            clearInterval(autoScroll);
        });
        
        document.querySelector('.slider-wrapper').addEventListener('mouseleave', autoPlay);

        // Пауза при наведении

        document.querySelector('.slider-wrapper').addEventListener('mouseleave', autoPlay);

        // Инициализация
        autoPlay();


    