// animasi running brand-img
document.querySelector('.container-brand').addEventListener('mouseleave', function() {
    document.querySelector('.brand-img').style.animationPlayState = 'running';
});

// galeri
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-galeri");
  let dots = document.getElementsByClassName("demo-galeri");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
    dots[i].style.filter = "grayscale(100%)";
  }
  
  // Set warna thumbnail
  dots[slideIndex-1].classList.add("active");
  dots[slideIndex-1].style.filter = "grayscale(0)";
  
  slides[slideIndex-1].style.display = "block";
}

// artikel button
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-group .btn");

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (btn) {
          btn.classList.remove("active");
        });

        this.classList.add("active");
      });
    });
  });


// function show label
var allLabels = document.querySelectorAll('.label-top-right');
allLabels.forEach(function(label) {
  label.style.display = 'none';
});

function showText(contentType) {
  // hide all label
  allLabels.forEach(function(label) {
    label.style.display = 'none';
  });

  //menampilkan label sesuai tombol yang di klik
  if (contentType === 'foto') {
    for (var i = 1; i <= 6; i++) {
      document.querySelector('.label-top-right' + i).style.display = 'block';
      document.querySelector('.label-top-right' + i + ' p').innerText = '5 Foto';
    }
  } else if (contentType === 'video') {
    for (var i = 1; i <= 6; i++) {
      document.querySelector('.label-top-right' + i).style.display = 'block';
      document.querySelector('.label-top-right' + i + ' p').innerText = '5 Video';
    }
  } else if (contentType === 'artikel') {
    for (var i = 1; i <= 6; i++) {
      document.querySelector('.label-top-right' + i).style.display = 'none';
    }
  }
}
  
// function onclick button Register dan Daftar Sekarang
function openArtikel(){
  window.open('https://www.detik.com/search/searchall?query=fun+run&siteid=2', '_blank');
}

function openEvent(){
  window.open('https://event.detik.com/', '_blank');
}

