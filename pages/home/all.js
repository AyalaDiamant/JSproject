
let flag = false;
const cartAll = [];

const div = document.getElementById("div");
const floatingWindow = document.getElementById("floatingWindow");

div.addEventListener("click", (event) => {
  const button = event.target.closest(".button");
  if (button) {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName !== null) {
      flag = true;
      const productId = button.closest(".style").dataset.productId;
      console.log("Button clicked, Product ID:", productId);
      cartAll.push(productId);
      floatingWindow.style.display = "flex";
      
      setTimeout(() => {
        floatingWindow.style.display = "none";
      }, 3000);
    }
    else {
      flag = false;
      const confirmDelete = confirm("לא מחובר. התחבר עכשיו---");
      if (confirmDelete) {
        window.location.href = "../../login/login2.html";
      }
    }
  }
  if (flag) {
    localStorage.setItem("cartAll", JSON.stringify(cartAll));
    console.log(cartAll);
  }

});


