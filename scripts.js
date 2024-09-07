let btn = document.querySelector("#submit");
      btn.addEventListener("click", () => {
        let input = document.querySelector("#id").value;
        location.assign(`video.html#${input}`);
      });
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('ServiceWorker.js')
      .then((reg) => {
        console.log('Service worker registered:', reg);
      })
      .catch((error) => {
        console.error('Service worker registration failed:', error);
      });
  });
}
