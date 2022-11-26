
window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const img = document.querySelector('.image')
  img.addEventListener('click', () => {
    img.style.transform = 'scale(2, 2)'
  })

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
