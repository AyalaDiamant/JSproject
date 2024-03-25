const category = "one year birthday";
callProducts(category);

let flag = false;
const cartArtist = [];

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
      cartArtist.push(productId);
      floatingWindow.style.display = "flex";

      setTimeout(() => {
        floatingWindow.style.display = "none";
      }, 3000);
    }
    else {
      flag = false;
      const confirmDelete = confirm("לא מחובר. התחבר עכשיו---");
      if (confirmDelete) {
        window.location.href = "../../login/login.html";
      }
    }
  }
  if (flag) {
    localStorage.setItem("cartArtist", JSON.stringify(cartArtist));
    console.log(cartArtist);
  }

});
