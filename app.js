const observer = new IntersectionObserver((en) => {
  en.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
    } else {
      entry.target.classList.add("hidden");
    }
  });
});

const hidelements = document.querySelectorAll(".title");
const hidelement2 = document.querySelectorAll(".det");
hidelements.forEach((el) => observer.observe(el));
hidelement2.forEach((el) => observer.observe(el));

const people = document.querySelectorAll(".person");
// people.forEach((per) => )
