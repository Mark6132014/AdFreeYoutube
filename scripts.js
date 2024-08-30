let btn = document.querySelector("#submit");
btn.addEventListener("click", () => {
  let input = document.querySelector("#id").value;
  location.assign(`https://www.youtube.com/embed/${input}`);
});
