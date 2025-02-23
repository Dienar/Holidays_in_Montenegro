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

    // Open the modal
document.getElementById("bookButton").onclick = function() {
  document.getElementById("bookingModal").style.display = "block";
}

// Close the modal
document.getElementsByClassName("close-btn")[0].onclick = function() {
  document.getElementById("bookingModal").style.display = "none";
}

// Close modal if clicked outside of it
window.onclick = function(event) {
  if (event.target == document.getElementById("bookingModal")) {
    document.getElementById("bookingModal").style.display = "none";
  }
}

// Form Submission - Example validation and logging
document.getElementById("bookingForm").onsubmit = function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let tourDate = document.getElementById("tourDate").value;
  let numPeople = document.getElementById("numPeople").value;

  // Simple form validation
  if (name && email && tourDate && numPeople) {
    console.log("Booking Details:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Tour Date:", tourDate);
    console.log("Number of People:", numPeople);
    alert("Your tour has been successfully booked!");
    document.getElementById("bookingModal").style.display = "none";
  } else {
    alert("Please fill all fields!");
  }
}
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