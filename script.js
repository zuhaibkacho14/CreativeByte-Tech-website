// Hero Section Slideshow
const slides = document.querySelectorAll('.slide');
const slideButtons = document.querySelectorAll('.slide-btn');
let currentSlide = 0;

// Function to show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  slideButtons.forEach((button, i) => {
    button.classList.toggle('active', i === index);
  });
}

// Function to switch to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Add event listeners to slide buttons
slideButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Automatically switch slides every 5 seconds
setInterval(nextSlide, 5000);

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Project Details Popup
const projectDetails = [
  {
    title: "MT-Employee Management System",
    image: ["images/mthome.png"],
    description: "Description: Developed an Employee Management System using C# in .NET WinForms with SQL Server as the database. Implemented CRUD (Create, Read, Update, Delete) operations for managing employee records. Utilized Visual Studio for development and testing, achieving a functional and user-friendly application.",
    technologies: ["C#", ".Net Framework", "MS SQL Server"],
    tools: ["Visual Studio 2022", "MS SQL Mangement Studio 20"],
    video: "https://private-user-images.githubusercontent.com/183839266/373755461-d1065e91-465c-4132-a4af-cee37f8e2cfc.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg2OTA2NjQsIm5iZiI6MTczODY5MDM2NCwicGF0aCI6Ii8xODM4MzkyNjYvMzczNzU1NDYxLWQxMDY1ZTkxLTQ2NWMtNDEzMi1hNGFmLWNlZTM3ZjhlMmNmYy5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIwNFQxNzMyNDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00OTBiNGEwMjIxNWMyMDY4ZTc5OTc5ZWVkMjJhNmM1YTJlNWFkMGFkNDE4OWEyOTcwMjdkNmQ5ZjFkNjM4MmNiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.IC3OORi6UtyRih-6ScS9LuT5nkyqpNRm-pOviLSu5UI"
  },
  {
    title: "Library Management System",
    image: "images/lib.png",
    description: "Description: Developed an Library Management System using C# in .NET WinForms with SQL Server as the database. Implemented CRUD (Create, Read, Update, Delete) operations for managing Book records. Utilized Visual Studio for development and testing, achieving a functional and user-friendly application.",
    technologies: ["C#", ".Net Framework", "MS SQL Server"],
    tools: ["Visual Studio 2022", "MS SQL Mangement Studio 20"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Anjilee Beauty Salon",
    image: "images/anju.png",
    description: "Anjilee Beauty Salon's website, built using the ASP.NET Framework 4, is a modern and user-friendly platform showcasing salon services and appointment booking. It features an elegant design, smooth navigation, and responsive layouts, ensuring a seamless experience for users. The website includes service listings, a gallery, customer testimonials, and a contact form, enhancing client engagement and accessibility.",
    technologies: ["C#", "ASP.Net 4", "MS SQL Server", "HTML", "CSS", "JavaScript"],
    tools: ["Visual Studio 2022", "MS SQL Mangement Studio 20"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "School Management System",
    image: "images/sch.png",
    description: "Description: Developed an School Management System using C# in .NET WinForms with SQL Server as the database. Implemented CRUD (Create, Read, Update, Delete) operations for managing school records. Utilized Visual Studio for development and testing, achieving a functional and user-friendly application.",
    technologies: ["C#", ".Net Framework", "MS SQL Server"],
    tools: ["Visual Studio 2022", "MS SQL Mangement Studio 20"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Currency Converstion",
    image: "images/rncy.png",
    description: "Developed a simple currency conversion system",
    technologies: ["HTML", "CSS", "JavaScript"],
    tools: ["VS Code"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

const viewDetailsButtons = document.querySelectorAll('.view-details');
const popup = document.getElementById('project-popup');
const closePopup = document.querySelector('.close-popup');
const popupTitle = document.getElementById('popup-title');
const popupImage = document.getElementById('popup-image');
const popupDescription = document.getElementById('popup-description');
const popupTechnologies = document.getElementById('popup-technologies');
const popupTools = document.getElementById('popup-tools');
const popupVideo = document.getElementById('popup-video');

viewDetailsButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const project = projectDetails[index];
    popupTitle.textContent = project.title;
    popupImage.src = project.image;
    popupDescription.textContent = project.description;
    popupTechnologies.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join('');
    popupTools.innerHTML = project.tools.map(tech => `<li>${tech}</li>`).join('');
    popupVideo.src = project.video;
    popup.style.display = 'flex';
  });
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
  popupVideo.src = ''; // Stop the video when popup is closed
});

popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    popupVideo.src = ''; // Stop the video when popup is closed
  }
});

// Testimonial Slider
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial-card");
  let currentIndex = 0;

  function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
          testimonial.classList.remove("active");
          if (i === index) {
              testimonial.classList.add("active");
          }
      });
  }

  document.getElementById("prev").addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
  });

  document.getElementById("next").addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
  });

  // Auto slide
  setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
  }, 4000);

  showTestimonial(currentIndex);
});


function toggleMenu() {
  document.querySelector("nav").classList.toggle("nav-open");
}