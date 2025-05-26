const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
const image5 = document.getElementById("image5");

// const imgs = document.querySelectorAll("imgs");
// const gallery = document.getElementById("gallery");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        image1.classList.add("image1");
        image2.classList.add("image2");
        image3.classList.add("image3");
        image4.classList.add("image4");
        image5.classList.add("image5");
      } else {
        image1.classList.remove("image1");
        image2.classList.remove("image2");
        image3.classList.remove("image3");
        image4.classList.remove("image4");
        image5.classList.remove("image5");
      }

      // if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(image1);

// image1.onclick = () => {
//   gallery.style.overflow = "auto";
//   imgs.forEach((imgName) => {
//     imgName.style.position = "none";
//     imgName.style.height = "auto";
//   });

//   image1.classList.remove("image1");
//   image2.classList.remove("image2");
//   image3.classList.remove("image3");
//   image4.classList.remove("image4");
//   image5.classList.remove("image5");
// };
