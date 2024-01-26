/* splice(start,count,add) */
/* slice(start,end) */
/* reverse() */
/* sort() */
/* conact() */
/* join() */
/* == != > >= < <= */
let toggleBtn = document.querySelector(".toggleBtn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
  if(document.body.classList.contains('darkMode')) {
    document.querySelector(".icon").classList.remove("fa-sun");
    document.querySelector(".icon").classList.add("fa-moon");
  }
  else {
    document.querySelector(".icon").classList.remove("fa-moon");
    document.querySelector(".icon").classList.add("fa-sun");
  }
});
