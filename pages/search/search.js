// חיפוש

let isFind = false;

const searchProducts = (search) => {
  console.log("Calling products for category:", search);
  $.ajax({
    url: "../../data/data.json",
    success: (result) => {
      showPicture(result, search);
    }
  });
}

const showPicture = (result, search) => {
  const div = document.getElementById("div");
  console.log("Showing pictures for category:", search);
  result.forEach(item => {

    if (item.name.includes(search)) {
      isFind = true;
      console.log("שלום");
      div.innerHTML += `<div class="style" data-product-id="${item.id}">
              <img class="img-styile" src="../../../assets/picture/${item.img}" width="200px"  display="flex"/>
              <h3 class="name">${item.name}</h3>
              <p class="price" > מחיר ${item.price} ש"ח</p>
              <p class="count" > יחי' ${item.count} </p>
              <button class="button" ><i class="fas fa-shopping-cart">  הוסף לסל</i></button>
          </div>`
    }
  })
  if (!isFind) {
    const div = document.getElementById("FindContent");
    div.innerHTML += "אופסססס";
    div.innerHTML += `<i  id="iconFind" class="fas fa-meh-rolling-eyes"></i>`
    div.innerHTML += `<br/>`;
    div.innerHTML += "לא נמצאו פריטים";
    div.innerHTML += `<br/>`;
    div.innerHTML += "........חפש מוצר אחר";

  }
}


const search = localStorage.getItem("search");
console.log(search);
const search2 = JSON.parse(search);
console.log(search2);
searchProducts(search2);


let flag = false;
const cartSearch = [];

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
      cartSearch.push(productId);

      floatingWindow.style.display = "flex";

      setTimeout(() => {
        floatingWindow.style.display = "none";
      }, 3000);
    }
    else {
      flag = false;
      const confirmDelete = confirm("לא מחובר. התחבר עכשיו---");
      if (confirmDelete) {
        window.location.href = "../login/login.html";
      }
    }
  }
  if (flag) {
    localStorage.setItem("cartSearch", JSON.stringify(cartSearch));
    console.log(cartSearch);
  }

});


