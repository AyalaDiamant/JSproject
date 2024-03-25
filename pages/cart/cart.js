
// התעדכנות המחיר לפי הפריטים
const priceProduct = document.getElementById("price");
priceProduct.innerHTML += JSON.parse(localStorage.getItem("price"));
console.log(priceProduct);

window.onload = function () {
  const priceProduct = document.getElementById("price");
  let storedPrice = JSON.parse(localStorage.getItem("price"));

  if (!storedPrice) {
    storedPrice = 0;
  }
  priceProduct.innerHTML = storedPrice;
};





// מחיקת פריט מהסל
const div = document.getElementById("div");

div.addEventListener("click", (event) => {
  const button = event.target.closest(".button2");
  if (button) {
    const productId = button.closest(".style").dataset.productId;
    console.log("Button clicked, Product ID:", productId);
    deleteItem(productId);
  }
});

const deleteItem = (productId) => {
  const confirmDelete = confirm("האם אתה בטוח שברצונך למחוק פריט זה מהסל?");
  if (confirmDelete) {
    removeItemFromPage(productId);
    updatePrice();
  }
};

const removeItemFromPage = (productId) => {
  const productElement = document.querySelector(`[data-product-id="${productId}"]`);
  if (productElement) {
    productElement.remove();
  }
  // עובר על כל המערכים ומוחק מהמערכים שקיים בהם את המוצר
  removeItemFromCart(storedCartAll, productId);
  removeItemFromCart(storedCartAnanas, productId);
  removeItemFromCart(storedCartArtist, productId);
  removeItemFromCart(storedCartBarbur, productId);
  removeItemFromCart(storedClasic, productId);
  removeItemFromCart(storedCartGold, productId);
  removeItemFromCart(storedCartWeddingDay, productId);
  removeItemFromCart(storedCartOunYear, productId);
  removeItemFromCart(storedCartSilver, productId);
  removeItemFromCart(storedCartRebbit, productId);
  removeItemFromCart(storedCartSearch, productId);
  updatePrice();
};

// פונקציה למחיקה מהמערך

const removeItemFromCart = (cart, productId) => {
  if (cart !== null && cart === storedCartAll) {
    const index = cart.indexOf(productId);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cartAll", JSON.stringify(cart));
  }

  if (cart !== null && cart === storedCartAnanas) {
    const index = cart.indexOf(productId);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cartAnanas", JSON.stringify(cart));
  }

  if (cart !== null && cart === storedCartArtist) {
    const index = cart.indexOf(productId);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cartArtist", JSON.stringify(cart));
  }

  if (cart !== null && cart === storedCartBarbur) {
    const index = cart.indexOf(productId);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cartBarbur", JSON.stringify(cart));
  }

  if (cart !== null && cart === storedClasic) {
    const index = cart.indexOf(productId);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cartClasic", JSON.stringify(cart));
  }

  if (cart !== null && cart === storedCartGold) {
    const index = cart.indexOf(productId);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cartGold", JSON.stringify(cart));
  }

  if (cart !== null && cart === storedCartWeddingDay) {
    const index = cart.indexOf(productId);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cartWeddingDay", JSON.stringify(cart));
  }

  if (cart !== null && cart === storedCartOunYear) {
    const index = cart.indexOf(productId);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cartOunYear", JSON.stringify(cart));
  }

  if (cart !== null && cart === storedCartSilver) {
    const index = cart.indexOf(productId);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cartSilver", JSON.stringify(cart));
  }

  if (cart !== null && cart === storedCartRebbit) {
    const index = cart.indexOf(productId);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cartRebbit", JSON.stringify(cart));
  }

  if (cart !== null && cart === storedCartSearch) {
    const index = cart.indexOf(productId);
    if (index > -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem("cartSearch", JSON.stringify(cart));
  }


}



const updatePrice = () => {
  const productElements = document.querySelectorAll(".style");
  console.log(productElements);
  let totalPrice = 0;

  productElements.forEach((element) => {
    const priceElement = element.querySelector(".price");
    console.log(priceElement);
    const price = parseFloat(priceElement.textContent.replace("Price ", "").replace(" NIS", ""));
    totalPrice += price;
  });

  price = totalPrice;
  localStorage.setItem("price", JSON.stringify(price));
  priceProduct.innerHTML = price;
};

// מחיקת הסל

const deleteCartButton = document.getElementById("deleteCartButton");
if (localStorage.getItem("price") !== '0') {

  deleteCartButton.addEventListener("click", () => {
    deleteCart();
  });


  const deleteCart = () => {
    const confirmDelete = confirm("האם אתה בטוח שברצונך למחוק את הסל?");

    if (confirmDelete) {
      let userHelp = [];
      userHelp = localStorage.users;
      console.log(userHelp, "userHelp");
      const userNameHelp = localStorage.userName;
      console.log("userNameHelp", localStorage.userName)
      localStorage.clear();
      localStorage.setItem("users", userHelp);
      localStorage.setItem("userName", userNameHelp);
      removeAllItemsFromPage();
      resetPrice();
    }
  };

  const removeAllItemsFromPage = () => {
    const cartItems = document.querySelectorAll(".style");

    cartItems.forEach((item) => {
      item.remove();
    });
  };

  const resetPrice = () => {
    price = 0;
    localStorage.setItem("price", JSON.stringify(price));
    priceProduct.innerHTML = price;
  };
}

else {
  deleteCartButton.onclick = () => {
    alert("המחיר הינו 0 ש''ח אין פריטים בסל")
  }
}


// תשלום

const paymentButton = document.getElementById("paymentButton");
const paymentModal = document.getElementById("paymentModal");
const closeButtonPay = document.getElementsByClassName("close")[0];
const paymentForm = document.getElementById("paymentForm");

if (localStorage.getItem("price") !== '0') {

  paymentButton.addEventListener("click", function () {
    paymentModal.style.display = "block";
    setTimeout(function () {
      paymentModal.classList.add("show");
    }, 10);
  });

  closeButtonPay.addEventListener("click", function () {
    paymentModal.classList.remove("show");
    setTimeout(function () {
      paymentModal.style.display = "none";
    }, 300);
  });

  window.addEventListener("click", function (event) {
    if (event.target === paymentModal) {
      paymentModal.classList.remove("show");
      setTimeout(function () {
        paymentModal.style.display = "none";
      }, 300);
    }
  });

  // בדיקת תקינות מספר אשראי ו-3 ספרות בגב הכרטיס
  const isValid = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) < '0' || str.charAt(i) > '9') {
        return false;
      }
    }
    return true;
  };


  paymentForm.addEventListener("submit", function (event) {
    const form = {
      cardNumber: document.getElementById("cardNumber").value,
      cardName: document.getElementById("cardName"),
      expirationDate: document.getElementById("expirationDate"),
      cvv: document.getElementById("cvv").value,
      adress: document.getElementById("adress"),
    };
    event.preventDefault();
    if (isValid(form.cardNumber) && isValid(form.cvv)) {
      event.preventDefault();
      console.log("is", (isValid(form.cardNumber) || isValid(form.cvv)))
      // alert("!!התשלום נשלח בהצלחה")
      paymentModal.classList.remove("show");

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if ((key === 'cartBarbur') || (key !== 'user' && key !== 'userName' && key !== 'price')) {
          localStorage.removeItem(key);
        }
      }
      price = 0;
      localStorage.setItem("price", JSON.stringify(price));
      priceProduct.innerHTML = price;
      window.location.href = "../finish/finish.html";
    }
    else {
      alert("יש להכניס פרטי אשראי תקינים")
    }
  });

  const cardNumberInput = document.getElementById("cardNumber");
  const cardNameInput = document.getElementById("cardName");

  cardNumberInput.setAttribute("autocomplete", "off");
  cardNameInput.setAttribute("autocomplete", "off");
}

else {
  paymentButton.onclick = () => {
    alert("המחיר הינו 0 ש''ח אין פריטים בסל")
  }
}



// הוספה לפי קטגוריה לכל קטגוריה יש מערך משלה עם הפריטים הנבחרים
const storedCartAnanas = JSON.parse(localStorage.getItem("cartAnanas"));
cartProducts(storedCartAnanas);

const storedCartArtist = JSON.parse(localStorage.getItem("cartArtist"));
cartProducts(storedCartArtist);

const storedCartBarbur = JSON.parse(localStorage.getItem("cartBarbur"));
cartProducts(storedCartBarbur);

const storedClasic = JSON.parse(localStorage.getItem("cartClasic"));
cartProducts(storedClasic);

const storedCartGold = JSON.parse(localStorage.getItem("cartGold"));
cartProducts(storedCartGold);

const storedCartWeddingDay = JSON.parse(localStorage.getItem("cartWeddingDay"));
cartProducts(storedCartWeddingDay);

const storedCartOunYear = JSON.parse(localStorage.getItem("cartOunYear"));
cartProducts(storedCartOunYear);

const storedCartRebbit = JSON.parse(localStorage.getItem("cartRebbit"));
cartProducts(storedCartRebbit);

const storedCartSilver = JSON.parse(localStorage.getItem("cartSilver"));
cartProducts(storedCartSilver);

const storedCartSearch = JSON.parse(localStorage.getItem("cartSearch"));
cartProducts(storedCartSearch);

const storedCartAll = JSON.parse(localStorage.getItem("cartAll"));
cartProducts(storedCartAll);

// ------------

// למחיקת כל הלוקל סוטרג 
//localStorage.clear();