function nameInput() {
    var userName = prompt("Please enter your name:");
    var nameSpan = document.getElementById("name");
    if (userName) {
        if (nameSpan) {
            nameSpan.innerHTML = userName;
        }
    } else {
        if (nameSpan) {
            nameSpan.innerHTML = "User";
        }
    }
}

// POP UP NAMA SAAT WEBSITE DIBUKA
window.onload = nameInput;


//Jika data belum lengkap muncul validasi
document.getElementById("userForm").addEventListener("submit", function(event) {  
    event.preventDefault(); // Prevent form submission  
  
    // Hapus pesan error sebelumnya
    var errorMessages = document.querySelectorAll(".error-message");  
    errorMessages.forEach(function(element) {  
        element.textContent = "";  
    });  
  
    var isValid = true;  
  
    // Validasi nama  
    var name = document.getElementById("sender-name").value.trim(); // Ensure the ID matches  
    if (!name) {  
        document.getElementById("name-error").textContent = "Name is required.";  
        isValid = false;  
    }  
  
    // Validasi tanggal lahir 
    var birthdate = document.getElementById("birthdate").value;  
    if (!birthdate) {  
        document.getElementById("birthdate-error").textContent = "Birthdate is required.";  
        isValid = false;  
    }  
  
    // Validasi gender  
    var genderMale = document.getElementById("male").checked;  
    var genderFemale = document.getElementById("female").checked;  
    if (!genderMale && !genderFemale) {  
        document.getElementById("gender-error").textContent = "Gender is required.";  
        isValid = false;  
    }  
  
    // Validasi pesan 
    var message = document.getElementById("message-content").value.trim();  
    if (!message) {  
        document.getElementById("message-error").textContent = "Message is required.";  
        isValid = false;  
    }  
  
    // Kalau valid, submit form  
    if (isValid) {  
        // Preview pesan 
        document.getElementById("sender-full-name").textContent = name;  
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var formattedBirthdate = new Date(birthdate).toLocaleDateString('id-ID', options);
        document.getElementById("sender-birth-date").textContent = formattedBirthdate;
        document.getElementById("sender-gender").textContent = genderMale ? "Laki-Laki" : "Perempuan";  
        document.getElementById("sender-messages").textContent = message;  

    }  
});  

// Banner Background Change Function
let indexBanner = 0;

changeBackground();

function nextBanner() {
  indexBanner = indexBanner + 1;
  changeBackground();
}

// Function to change background banner
function changeBackground() {
  let bannerList = document.getElementsByClassName("banner-image");

  if (indexBanner >= bannerList.length) {
    // Reset indexBanner
    indexBanner = 0;
  }

  // Looping to change background
  for (let i = 0; i < bannerList.length; i++) {
    bannerList[i].style.display = "none";
  }

  bannerList[indexBanner].style.display = "block";
}

setInterval(nextBanner, 3000);

// Function to change image list for slider
const slides = document.querySelector(".image-list");
const slideItems = slides.children;
const slideWidth = slideItems[0].offsetWidth;

// Duplikasi elemen pertama dan terakhir
const firstClone = slideItems[0].cloneNode(true);
const lastClone = slideItems[slideItems.length - 1].cloneNode(true);

// Tambahkan klon ke slider
slides.appendChild(firstClone);
slides.insertBefore(lastClone, slideItems[0]);

// Atur posisi awal ke elemen pertama yang asli
let currentIndex = 1;
slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

// Fungsi untuk perpindahan slider
function slideNext() {
  currentIndex++;
  slides.style.transition = "transform 0.5s ease-in-out";
  slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

  if (currentIndex === slideItems.length) {
    setTimeout(() => {
      slides.style.transition = "none";
      currentIndex = 1;
      slides.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }, 500);
  }
}

setInterval(slideNext, 3000);