document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      const menu = dropdown.querySelector(".dropdown-menu");
      const behavior = dropdown.dataset.behavior;
  
      if (behavior === "click") {
        toggle.addEventListener("click", () => {
          menu.classList.toggle("visible");
        });
  
        // Close dropdown if clicking outside
        document.addEventListener("click", (e) => {
          if (!dropdown.contains(e.target)) {
            menu.classList.remove("visible");
          }
        });
      }
  
      if (behavior === "hover") {
        dropdown.addEventListener("mouseenter", () => {
          menu.classList.add("visible");
        });
  
        dropdown.addEventListener("mouseleave", () => {
          menu.classList.remove("visible");
        });
      }
    });
  });  