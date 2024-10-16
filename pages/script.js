



    //*****navbar*****
    // Sélectionner tous les éléments du menu
  const navLinks = document.querySelectorAll('nav ul li');

// Ajouter un événement de clic à chaque élément du menu
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Supprimer la classe "selected" de tous les liens
    navLinks.forEach(item => item.classList.remove('selected'));

    // Ajouter la classe "selected" à l'élément cliqué
    this.classList.add('selected');
  });
});
//mobile nav
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    //*****Carousel******
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length; // Boucle autour
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Défilement automatique toutes les 2 secondes (2000 ms)
    setInterval(nextSlide, 2000);
/****************** */
    // Fonction pour incrémenter un compteur jusqu'à une valeur cible
    function incrementCounter(elementId, targetValue) {
      let counter = 0;
      const interval = setInterval(() => {
        if (counter < targetValue) {
          counter++;
          document.getElementById(elementId).innerText = counter;
        } else {
          clearInterval(interval);
        }
      }, 20); // Intervalle de 200ms
    }
  
    // Lancer les compteurs avec les valeurs cibles
    window.onload = function() {
      incrementCounter('counter1', 345);  // Compteur 1 : jusqu'à 95
      incrementCounter('counter2', 255); // Compteur 2 : jusqu'à 150
      incrementCounter('counter3', 280); // Compteur 3 : jusqu'à 200
      incrementCounter('counter4', 370); // Compteur 4 : jusqu'à 170
    };
/**********************/
    // Play button click event to show the video modal
    document.getElementById('play-btn').addEventListener('click', function() {
      const modal = document.getElementById('video-modal');
      const iframe = document.getElementById('video-iframe');
      iframe.src = "https://www.youtube.com/embed/grY2AoAgI58?autoplay=1"; // Add autoplay to start video automatically
      modal.classList.add('active');
    });

    // Close button event to hide the video modal
    document.getElementById('close-btn').addEventListener('click', function() {
      const modal = document.getElementById('video-modal');
      const iframe = document.getElementById('video-iframe');
      iframe.src = ""; // Stop the video by resetting the src
      modal.classList.remove('active');
    });
//**************

const cardContainer = document.getElementById('card-container'); 
const dotsContainer = document.getElementById('dots-container');
const cards = document.querySelectorAll('#card-container > div');

// Function to determine the number of cards to show based on screen width
function getCardsPerPage() {
  return window.innerWidth < 768 ? 1 : 3; // 1 card on mobile, 3 on larger screens
}

// Function to calculate the number of dots needed
function getNumberOfDots() {
  const totalCards = cards.length;
  const cardsPerPage = getCardsPerPage();
  return Math.ceil(totalCards / cardsPerPage);
}

// Function to update visible cards
function updateVisibleCards(index) {
  const cardsPerPage = getCardsPerPage();
  const start = index * cardsPerPage;
  const end = start + cardsPerPage;

  // Show or hide cards based on the current index
  cards.forEach((card, idx) => {
    card.style.display = idx >= start && idx < end ? 'flex' : 'none';
  });

  // Scroll to the first card of the current set
  cardContainer.scrollTo({
    left: 0,
    behavior: 'smooth',
  });

  // Update the dots visibility
  updateDots(index);
}

// Function to update active dot
function updateDots(activeIndex) {
  const numberOfDots = getNumberOfDots();
  dotsContainer.innerHTML = ''; // Clear previous dots

  for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot' + (i === activeIndex ? ' active' : '');
    dot.addEventListener('click', () => {
      updateVisibleCards(i);
    });
    dotsContainer.appendChild(dot);
  }
}

// Initial load
updateVisibleCards(0);

// Add event listener to handle window resize
window.addEventListener('resize', () => {
  updateVisibleCards(0); // Reset to the first set of cards on resize
});


//boton read more 

  function toggleContent() {
    const content = document.getElementById('hidden-content');
    // Basculer l'affichage
    content.classList.toggle('hidden');
  }
