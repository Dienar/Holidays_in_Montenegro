<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Holidays in the Balkans</title>
  <link rel="icon" href="https://www.ochutnejte-cesko.cz/wp-content/uploads/2016/09/favicon.png" type="image/x-icon">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/index.css">
</head>
<body>
      <header class="header">
        <div class="nav-bar">
          <b href="#" class="brand"><i class="fa-solid fa-mountain"></i> Holidays in the Balkans</b>
          <nav class="navbar">
            <ul>
                <a href="../car_arenda/cars_tours_pick-up_points_trips_camping_equipment/cars.html">Car Rental</a>
                <a href="../car_arenda/cars_tours_pick-up_points_trips_camping_equipment/pick_up.html">Pick-Up Points</a>
                <a href="../car_arenda/cars_tours_pick-up_points_trips_camping_equipment/camping_equipment.html">Camping-Equipment</a>
                <a href="../car_arenda/cars_tours_pick-up_points_trips_camping_equipment/campings.html">Campings</a>
            </ul>
        </nav>
            <div class="Switch_theme">
            <button href="../index.html" class="brand select-style-a" id="bookButton" class="book-button">Book a tour</button>
            </div>
          </div>
        </div>
      </header>

      <!-- Booking Form Modal -->
      <div id="bookingModal" class="modal">
        <div class="modal-content">
          <span class="close-btn">&times;</span>
          <h2>Book Your Tour</h2>
          <form method="POST" action="php/send_form.php">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your full name" required>
      
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email address" required>
      
            <label for="tourDate">Tour Date Start</label>
            <input type="date" id="tourDate" name="date_start" required>
            <label for="tourDate">Tour Date End</label>
            <input type="date" id="tourDate" name="date_end" required>
            <label for="numPeople">Number of People</label>
            <input type="number" id="numPeople" name="count" min="1" max="8" required>
      
            <button type="submit" class="submit-btn">Confirm Booking</button>
          </form>
        </div>
      </div>
      <main>
        <section id="intro" class="container">
          <div class="text_and_photo">
            <div class="visit__user_text_first">
              <h2>Explore Balkans Like Never Before</h2>
              <p>Beautiful beaches, majestic mountains, and endless adventure await you. Rent a car, enjoy camping, and explore Balkans in style!</p>
            </div>
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/75/7b/2e/caption.jpg" alt="Balkan Beach">
          </div>
        </section>
    
        <section id="carousel" class="slider-wrapper">
          <div class="slider">
            <div class="slide active">
              <div class="visit__user_text">
                <h2>Car Rental for Every Adventure</h2>
                <p>Choose from a range of vehicles that suit your travel needs—compact cars for the city, or 4x4s for mountain roads.</p>
              </div>
              <img src="https://i.pinimg.com/736x/dc/fd/4d/dcfd4d6bfa3518698f6164eca6c31e92.jpg" alt="Car Rental">
            </div>
            <div class="slide">
              <div class="visit__user_text">
                <h2>Camping in Balkans</h2>
                <p>We have been camping for over 5 years now.</p>
              </div>
              <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/89208266.jpg?k=2bf72b713d44b2ce5435aaab38a14f37cdd2670a9fa9a0827bad92ec3a750b54&o=&hp=1" alt="Camping in Balkans">
            </div>
            <div class="slide">
                <div class="visit__user_text">
                  <h2>Camping in Balkans</h2>
                  <p>Get the most positive emotions from your vacation in the Balkans.</p>
                </div>
                <img src="https://avatars.mds.yandex.net/i?id=d88e6139eef21f25494716caf601137c_l-5235412-images-thumbs&n=13" alt="Camping in Balkans">
              </div>
          </div>
    
          <div class="slider-dots">
            <div class="dot active"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </section>
        <section id="intro" class="container">
            <div class="text_and_photo">
              <div class="visit__user_text_first">
                <h2>Our clients always remain in positive emotions.</h2>
                <p>Our task is to do everything possible to make you happy.</p>
              </div>
              <img src="https://cdn.tripster.ru/thumbs2/c5e0f679-936b-11e9-a166-02d82f4896e8.800x600.jpg" alt="Balkans Beach">
            </div>
          </section>
          <section id="intro" class="container">
            <div class="text_and_photo">
              <div class="visit__user_text_first">
                <img src="https://i.pinimg.com/736x/b7/4e/b8/b74eb8b9dd501af8b42dd9af0d97f7a0.jpg" alt="Balkan Beach">
              </div>
              <h2>We are always happy to welcome new people!</h2>
            </div>
          </section>
      </main>
    
      <footer class="footer">
        <div class="footer-content">
            <div class="contact-info">
                <h3 data-translate="contacts">Contact</h3>
                <p><i class="fas fa-phone"></i> +7 (000) 000-00-00</p>
                <p><i class="fas fa-envelope"></i> contact@example.ru</p>
                <div class="social-links">
                    <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-telegram"></i></a>
                    <a href="#" class="social-link"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
        <p class="copyright" style="text-align: center; margin-top: 2rem;">
            © 2023 Noname Noname. <span data-translate="rights">all rights reserved</span>
        </p>
    </footer>
  <script src="js/index.js"></script>
</body>
</html>