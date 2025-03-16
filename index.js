// const html = document.documentElement;
// const mainContainer = document.getElementById("main-container");

// const firstFramesContainer = document.getElementById("first-frames-container");

// // frame1
// const frame1 = document.getElementById("frame1");
// const companyLabelH1 = document.getElementById("company-label-h1");
// const companyLabelH3 = document.getElementById("company-label-h3");
// const buttonsContainer = document.getElementById("buttons-container");
// const migrationToMagazin = document.getElementById("migration-to-magazin");

// // frame2
// const frame2 = document.getElementById("frame2");
// const rectangle = document.getElementById("rectangle");

// if (window.matchMedia("(max-width: 768px)").matches) {
//   html.style.fontSize = "4.4444444444vw";
//   replaceClassesStartingWith(mainContainer, "width", "width-20-dot-5rem");

//   //   firstFramesContainer
//   firstFramesContainer.classList.replace(
//     "flex-direction-row",
//     "flex-direction-column"
//   );

//   //   frame1
//   replaceClassesStartingWith(frame1, "padding", "padding-1-dot-5rem");

//   //   companyLabelH1
//   companyLabelH1.innerHTML =
//     "Официальный сайт-<br>визитка магазина <br>AthleticPharma.com";
//   replaceClassesStartingWith(
//     companyLabelH1,
//     "line-height",
//     "line-height-2-dot-25rem"
//   );
//   replaceClassesStartingWith(
//     companyLabelH1,
//     "font-size",
//     "font-size-1-dot-875rem"
//   );

//   //   companyLabelH3
//   replaceClassesStartingWith(companyLabelH3, "font-size", "font-size-1rem");
//   replaceClassesStartingWith(
//     companyLabelH3,
//     "line-height",
//     "line-height-1-dot-5rem"
//   );

//   //   buttonsContainer
//   buttonsContainer.classList.replace(
//     "flex-direction-row",
//     "flex-direction-column"
//   );
//   replaceClassesStartingWith(buttonsContainer, "gap", "gap-0-dot-5rem");
//   buttonsContainer.classList.add("width-100-percent");

//   // rectangle
//   rectangle.style.width = "20.5rem";
// }

// function replaceClassesStartingWith(element, prefix, newClass) {
//   const classes = element.classList;

//   for (let i = 0; i < classes.length; i++) {
//     const className = classes[i];

//     if (className.startsWith(prefix)) {
//       element.classList.replace(className, newClass);
//     }
//   }
// }

// function removeClassesStartingWith(element, prefix) {
//   const classes = element.classList;

//   for (let i = 0; i < classes.length; i++) {
//     const className = classes[i];

//     if (className.startsWith(prefix)) {
//       element.classList.remove(className);
//     }
//   }
// }
