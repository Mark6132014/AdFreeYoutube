let btn = document.querySelector("#submit");
btn.addEventListener("click", () => {
  let input = document.querySelector("#id").value;
  if (input.includes("youtube")) {
    alert("With the word YouTube, it is not an ID");
    alert("Please try again.");
  }
  else {
    location.assign(`https://www.youtube.com/embed/${input}`);
  }
});
