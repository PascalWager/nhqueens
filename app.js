const size = window.innerHeight;
let index = 0;
const observer = new IntersectionObserver((en) => {
  en.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.add("hidden");
    }
  });
});
// const obsever2  = new IntersectionObserver((e)=>{
//   if (e.isIntersecting && window.scrollY > )
//   {

//   }
// });
const hidelements = document.querySelectorAll(".title");
const hidelement2 = document.querySelectorAll(".det");

hidelements.forEach((el) => observer.observe(el));
hidelement2.forEach((el) => observer.observe(el));
changenav();

const people = document.querySelectorAll(".person");

function changenav() {
  // const temp = document.querySelector(".mainbar");
  const temp = document.getElementById("second");

  let y = window.scrollY;
  index = (y + 400) / size;
  if (y > size - 100) {
    temp.classList.remove("in");
  } else {
    temp.classList.add("in");
    // temp.style.display = "none";
  }
  const navlinks2 = document.querySelectorAll(".navbar2");
  navlinks2.forEach((entry) => {
    entry.classList.remove("selected");
  });
  let x = Math.floor(index);
  const tempadd = document.getElementById(`el${x}`);
  if (tempadd != null) tempadd.classList.add("selected");
  window.requestAnimationFrame(changenav);
}
const navlinks = document.querySelectorAll(".navbar");
navlinks.forEach((entry) => {
  entry.addEventListener("click", (e) => {
    if (e.target.innerHTML == "Our Services") Sto(1);
    if (e.target.innerHTML == "Our Work") Sto(2);
    if (e.target.innerHTML == "Team") Sto(3);
    if (e.target.innerHTML == "About Us") Sto(4);
  });
});
const navlinks2 = document.querySelectorAll(".navbar2");
navlinks2.forEach((entry) => {
  entry.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.innerHTML == "Our Services") Stod(1);
    if (e.target.innerHTML == "Our Work") Stod(2);
    if (e.target.innerHTML == "Team") Stod(3);
    if (e.target.innerHTML == "About Us") Stod(4);
  });
});
function Sto(inde) {
  const el = document.getElementById(`card${inde}`);
  console.log(el);
  el.scrollIntoView({ behavior: "smooth" });
}
function Stod(inde) {
  const el = document.getElementById(`card${inde}`);
  const thing = document.querySelector(".bar");
  // window.scrollTo(0, el.offsetTop - thing.offsetHeight);
  // window.scrollTo(0, window.scrollY - el.offsetTop * inde);
  window.scrollTo(0, size * inde);
  // console.log(el.offsetTop);
  // console.log("thing\n" + size * inde);
}
// people.forEach((per) => )
