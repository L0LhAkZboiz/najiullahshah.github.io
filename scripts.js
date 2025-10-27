// Wait until the page content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select all skill option links
  const skillOptions = document.querySelectorAll(".skills .left-side .options a");
  // Select the text div
  const skillText = document.querySelector(".skills .text p");

  // Store the default text so we can reset it when not hovering
  const defaultText = "Hover over the buttons on the right to see how amazing I am!";
  skillText.textContent = defaultText;

  // Loop through each button and add hover listeners
  skillOptions.forEach(option => {
    option.addEventListener("mouseenter", () => {
      // When hovered, set the text to the data-text value
      skillText.textContent = option.getAttribute("data-text");
      console.log(option.getAttribute("data-text"));
    });

    option.addEventListener("mouseleave", () => {
      // When hover ends, restore the default text
      skillText.textContent = defaultText;
    });
  });
});