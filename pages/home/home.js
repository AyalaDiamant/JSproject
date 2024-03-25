if (!((window.location.pathname === "/pages/home/all.html")  || (window.location.pathname === "/pages/cart/cart.html"))) {

  // בידקה אם יש משתמש מחובר
  if ((window.location.pathname === "/pages/home/home.html")
    || (window.location.pathname === "/pages/produce/ex-category.html/category.html")
    || (window.location.pathname === "/pages/produce/ex-category.html/category2.html")
    || (window.location.pathname === "/pages/produce/ex-category.html/category3.html")
    || (window.location.pathname === "/pages/search/search.html")) {
    user.onclick = () => {
      let check = localStorage.getItem("userName");
      console.log(check);

      if (check !== null) {
        if (confirm("המשתמש " + check + " עדיין מחובר. האם ברצונך להתנתק?")) {
          link.remove();
          localStorage.removeItem("userName");
          console.log(localStorage.user, "localStorage.user");
          let userHelp = [];
          userHelp = localStorage.users;
          console.log(userHelp, "userHelp");
          localStorage.clear();
          localStorage.setItem("users", userHelp);
          window.location.href = "../login/login.html";
        }
      }
      else {
        window.location.href = "../login/login.html";
      }
    }
  }
  else {
    user1.onclick = () => {
      let check = localStorage.getItem("userName");
      console.log(check);

      if (check !== null) {
        if (confirm("המשתמש " + check + " עדיין מחובר. האם ברצונך להתנתק?")) {
          link.remove();
          localStorage.removeItem("userName");
          console.log(localStorage.user, "localStorage.user");
          let userHelp = [];
          userHelp = localStorage.users;
          console.log(userHelp, "userHelp");
          localStorage.clear();
          localStorage.setItem("users", userHelp);
          window.location.href = "../../login/login.html";
        }
      }
      else {
        window.location.href = "../../login/login.html";
      }
    }
  }


  // דיב נסתר
  const icon = document.getElementById('icon');
  const coteretSide = document.getElementById('coteret-side');


  if (icon !== null) {
    icon.addEventListener('click', function () {
      if (coteretSide.style.display === 'none') {
        coteretSide.style.display = 'block';
      }
      else {
        coteretSide.style.display = 'none';
      }
    });
    icon.addEventListener('click', function () {
      coteretSide.classList.toggle('visible');
    });

  }
}



// כותב את שם המשתמש ונותן לו כפתור התנתקות
const userNameP = document.getElementById("userNameP");
const storedUserName = localStorage.getItem("userName");

if (storedUserName !== null && userNameP !== null) {
  const parsedUserName = JSON.parse(storedUserName);
  userNameP.innerHTML = parsedUserName;
  const div = document.getElementById("connected");
  const link = document.createElement("button");
  link.innerHTML = "Logout";
  link.id = "disconnectLink";
  div.appendChild(link);

  link.addEventListener("click", function (event) {
    event.preventDefault();
    userNameP.innerHTML = "not connected";
    link.remove();
    localStorage.removeItem("userName");
    console.log(localStorage.user, "localStorage.user");
    let userHelp = [];
    userHelp = localStorage.users;
    console.log(userHelp, "userHelp");
    localStorage.clear();
    localStorage.setItem("users", userHelp);
  });
}

// חיפוש

const buttonSearch = document.getElementById("buttonSearch");

if (buttonSearch !== null) {
  buttonSearch.onclick = () => {
    let search = document.getElementById("search").value;
    console.log(search);
    localStorage.setItem("search", JSON.stringify(search));
    window.location.href = "../search/search.html";
  }
}


//טיימר-פרסומת

setTimeout(function () {
  const closeButton = document.getElementsByClassName("closee")[0];
  if (document.getElementById('timerModal')) {
    timerModal.style.display = "block";
    setTimeout(function () {
      timerModal.classList.add("show");
    }, 10);


    closeButton.addEventListener("click", function () {
      timerModal.classList.remove("show");
      setTimeout(function () {
        timerModal.style.display = "none";
      }, 300);
    });
  }
}, 3000);

// עמוד אודות

const aboutButton = document.getElementById("aboutButton");
// const aboutButton2 = document.getElementById("aboutButton2");
const aboutModal = document.getElementById("aboutModal");
const closeButton = document.getElementsByClassName("close")[0];

// aboutButton2.onclick = () => {
//   aboutModal.style.display = "block";
// }

if ((aboutButton !== null)) {

  aboutButton.addEventListener("click", function () {
    aboutModal.style.display = "block";
    setTimeout(function () {
      aboutModal.classList.add("show");
    }, 10);
  });

  // aboutButton2.addEventListener("click", function () {
  //   aboutModal.style.display = "block";
  //   setTimeout(function () {
  //     aboutModal.classList.add("show");
  //   }, 10);
  // });

  closeButton.addEventListener("click", function () {
    aboutModal.classList.remove("show");
    setTimeout(function () {
      aboutModal.style.display = "none";
    }, 300);
  });

  window.addEventListener("click", function (event) {
    if (event.target === aboutModal) {
      aboutModal.classList.remove("show");
      setTimeout(function () {
        aboutModal.style.display = "none";
      }, 300);
    }
  });
}









