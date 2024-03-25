const category = "batmitzva-barbur";
callProducts( category);

let flag = false;
const cartBarbur = [];

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
      cartBarbur.push(productId);
      // const floatingWindow = document.getElementById("floatingWindow");
      floatingWindow.style.display = "flex";
      
      setTimeout(() => {
        floatingWindow.style.display = "none";
      }, 3000);
    } else {
      flag = false;
      const confirmDelete = confirm("לא מחובר, התחבר עכשיו---");
      if (confirmDelete) {
        window.location.href = "../../login/login.html";
      }
    }
  }
  
  if (flag) {
    localStorage.setItem("cartBarbur", JSON.stringify(cartBarbur));
    console.log(cartBarbur);
  }
});