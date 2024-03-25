const category = "pink bunny";
callProducts(category);


let flag = false;
const cartRebbit = [];

const div = document.getElementById("div");

const floatingWindow = document.getElementById("floatingWindow"); div.addEventListener("click", (event) => {
  const button = event.target.closest(".button");
  if (button) {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName !== null) {
      flag = true;
      const productId = button.closest(".style").dataset.productId;
      console.log("Button clicked, Product ID:", productId);
      cartRebbit.push(productId);
      floatingWindow.style.display = "flex";

      setTimeout(() => {
        floatingWindow.style.display = "none";
      }, 3000);
    }
    else {
      flag = false;
      alert("לא מחובר. התחבר עכשיו---");
      window.location.href = "../../login/login.html";
    }
  }
  if (flag) {
    localStorage.setItem("cartRebbit", JSON.stringify(cartRebbit));
    console.log(cartRebbit);
  }

});