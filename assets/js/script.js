document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("dark-mode-toggle");
  const darkModeIcon = toggleButton.querySelector(".dark-mode-icon");
  const body = document.body;

  // Paths to the icons
  const lightModeIconPath = "assets/images/light-mode-icon.svg";
  const darkModeIconPath = "assets/images/dark-mode-icon.svg";

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
    darkModeIcon.src =
      savedTheme === "dark-mode" ? lightModeIconPath : darkModeIconPath;
  }

  // Toggle dark mode on button click
  toggleButton.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      darkModeIcon.src = darkModeIconPath; // Switch to dark mode icon
      localStorage.setItem("theme", "light-mode");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      darkModeIcon.src = lightModeIconPath; // Switch to light mode icon
      localStorage.setItem("theme", "dark-mode");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.getElementById("download-cv-btn");
  const languageButtons = document.querySelectorAll(".dropdown-item");

  // Default language is English
  let selectedLanguage = "en";

  // Update the download link based on the selected language
  const updateDownloadLink = () => {
    if (selectedLanguage === "en") {
      downloadButton.setAttribute("data-href", "assets/images/CV-en.pdf");
    } else if (selectedLanguage === "fr") {
      downloadButton.setAttribute("data-href", "assets/images/CV-fr.pdf");
    }
  };

  // Add event listeners to language buttons
  languageButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      selectedLanguage = event.target.getAttribute("data-lang");
      updateDownloadLink();

      // Update the button text to reflect the selected language
      downloadButton.textContent = `Resume (${selectedLanguage.toUpperCase()})`;
    });
  });

  // Handle the download action when the main button is clicked
  downloadButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const href = downloadButton.getAttribute("data-href");
    if (href) {
      window.location.href = href; // Trigger the download
    } else {
      alert("Please select a language first.");
    }
  });

  // Initialize the download link
  updateDownloadLink();
});

// filepath: c:\Users\pc\Downloads\portfolio\Nouveau dossier\port\portfolio-project\assets\js\script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission

    // Send form data using Formspree
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          form.reset(); // Clear the form
        } else {
          alert("Oops! There was a problem submitting your form.");
        }
      })
      .catch(() => {
        alert("Oops! There was a problem submitting your form.");
      });
  });
});
