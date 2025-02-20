document.addEventListener("DOMContentLoaded", function () {
    const currencySelect = document.getElementById("currency");
    const priceElements = document.querySelectorAll(".car-price");
  
    let exchangeRates = {
      RUB: 1,
      USD: 90,  // Временные значения (заменятся на актуальные)
      EUR: 90
    };
  
    // Функция загрузки курсов валют с API Центробанка
    async function fetchExchangeRates() {
      try {
        const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
        const data = await response.json();
        exchangeRates.USD = data.Valute.USD.Value;
        exchangeRates.EUR = data.Valute.EUR.Value;
        updatePrices(); // Обновить цены после загрузки курсов
      } catch (error) {
        console.error("Ошибка загрузки курсов валют:", error);
      }
    }
  
    // Функция обновления цен
    function updatePrices() {
      const selectedCurrency = currencySelect.value;
  
      priceElements.forEach(priceElement => {
        const rubPrice = parseFloat(priceElement.getAttribute("data-price-rub")) || 0;
  
        let newPrice = rubPrice;
        let currencySymbol = "₽";
  
        if (selectedCurrency === "USD" && exchangeRates.USD) {
          newPrice = (rubPrice / exchangeRates.USD).toFixed(0);
          currencySymbol = "$";
        } else if (selectedCurrency === "EUR" && exchangeRates.EUR) {
          newPrice = (rubPrice / exchangeRates.EUR).toFixed(0);
          currencySymbol = "€";
        }
  
        priceElement.textContent = `${ currencySymbol } ${ newPrice }`;
      });
    }
  
    // При изменении валюты пересчитываем цены
    currencySelect.addEventListener("change", updatePrices);
  
    // Загружаем курсы валют при старте
    fetchExchangeRates();
  });

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


    