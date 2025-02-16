// Плавный скроллинг к секциям
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
  // Переключение темного/светлого режима
  document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.classList.toggle('dark-mode');
    });
  
    // Меняем текст на кнопке
    if (document.body.classList.contains('dark-mode')) {
      this.textContent = 'Switch to Light Mode';
    } else {
      this.textContent = 'Switch to Dark Mode';
    }
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