document.addEventListener('DOMContentLoaded', () => {
  const lupaIcon = document.querySelector('.lupa-icon');
  const dropdownSearch = document.querySelector('.dropdown-search');

  lupaIcon.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownSearch.classList.toggle('active');
  })

  document.addEventListener('click', (event) => {
    if (!lupaIcon.contains(event.target) && !dropdownSearch.contains(event.target)) {
      dropdownSearch.classList.remove('active');
    }
  })
})

// dropdown com clique carrinho de compras
document.addEventListener('DOMContentLoaded', () => {
  const carIcon = document.querySelector('.car-icon');
  const dropdownCompras = document.querySelector('.dropdown-shopping');

  carIcon.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownCompras.classList.toggle('active');
  })

  document.addEventListener('click', (event) => {
    if (!carIcon.contains(event.target) && !dropdownCompras.contains(event.target)) {
      dropdownCompras.classList.remove('active');
    }
  })
})

// dropdown com clique menu
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  menuIcon.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownMenu.classList.toggle('active');
  })

  document.addEventListener('click', (event) => {
    if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove('active');
    }
  })
})

// carrossel
const slider = document.querySelectorAll('.carrossel-images');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');

let currentSlide = 0;

function hideSlider() {
  slider.forEach((item) => {
      item.classList.remove('on');
  });
}

function showSlider(index) {
      slider[currentSlide].classList.add('on');
}

btnNext.addEventListener('click', () => {
  console.log('clique');
  nextSlider();
})

btnPrev.addEventListener('click', () => {
  console.log('clique');
  prevSlider()
})

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length -1) {
    currentSlide = 0;
  } else {
    currentSlide ++;
  }
  showSlider();
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length -1;
  } else {
    currentSlide --;
  }
  showSlider();
}