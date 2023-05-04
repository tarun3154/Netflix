var acc = document.querySelectorAll(".accordian");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// console.log(acc);
acc.forEach(value=>{
console.log(value);
let contentClick = value.querySelector('.content-click')
let content = value.querySelector('.content')
let rotate = value.querySelector('.content-click>span')
console.log(rotate);
// console.log(content);
// console.log(contentClick);
contentClick.addEventListener('click', ()=>{
  content.classList.toggle('active')
  rotate.classList.toggle('active')
})

})

