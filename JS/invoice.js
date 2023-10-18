function change(){
    var get = document.querySelectorAll(".invoiceJS")
    get[0].classList.toggle("d-none");
    get[1].classList.toggle("d-none");
    get[2].classList.toggle("d-none");
    get[3].classList.toggle("d-none");
    get[3].classList.toggle("invoiceHeight");
    var height = document.querySelector(".invoiceTop");
    height.classList.toggle("invoiceHeight");
    var invoiceNum = document.querySelector(".invoiceNum");
    invoiceNum.classList.toggle("mt-15");
}
const invoiceRightBTN = document.querySelector(".invoiceRightBTN");
const invoiceLeftBTN = document.querySelector(".invoiceLeftBTN");
console.log(invoiceRightBTN);
invoiceRightBTN.addEventListener("click",change);
console.log(invoiceLeftBTN);
invoiceLeftBTN.addEventListener("click",change);