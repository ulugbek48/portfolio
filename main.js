document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.getElementById("about");

  const navbarLinks = document.querySelectorAll(".ahref");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbarLinks.forEach((link) => {
          link.classList.add("ahref-blue");
        });
      } else {
        navbarLinks.forEach((link) => {
          link.classList.remove("ahref-blue");
        });
      }
    });
  }, options);

  observer.observe(aboutSection);
});

document.addEventListener("DOMContentLoaded", function () {
  const projectSection = document.getElementById("projects");

  const navbarLinks = document.querySelectorAll(".ahref");
  const logo = document.querySelector(".logo");


  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbarLinks.forEach((link) => {
          link.classList.add("ahref-blue");
          logo.classList.add("logo-blue");
        });
      } else {
        navbarLinks.forEach((link) => {
          link.classList.remove("ahref-blue");
          logo.classList.remove("logo-blue");
        });
      }
    });
  }, options);

  observer.observe(projectSection);
});

document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.getElementById("skills");
  const contactSection = document.getElementById("contact");

  const logo = document.querySelector(".logo");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        logo.classList.add("logo-white");
      } else {
        logo.classList.remove("logo-white");
      }
    });
  }, options);

  observer.observe(skillsSection);
});
document.addEventListener("DOMContentLoaded", function () {
  const aboutSelection = document.getElementById("about");

  const logo = document.querySelector(".logo");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        logo.classList.add("logo-blue");
      } else {
        logo.classList.remove("logo-blue");
      }
    });
  }, options);

  observer.observe(aboutSelection);
});
document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.getElementById("contact");

  const logo = document.querySelector(".logo");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        logo.classList.add("logo-white");
      } else {
        logo.classList.remove("logo-white");
      }
    });
  }, options);

  observer.observe(contactSection);
});
