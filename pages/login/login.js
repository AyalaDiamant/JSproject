

let b = document.getElementById("button");

b.onclick = (event) => {
  event.preventDefault();

  const email = document.getElementById("lEmail").value;
  const pass = document.getElementById("lPass").value;
  const rememberMe = document.getElementById("remember").checked;

  const storedUsers = localStorage.getItem("users");
  if (storedUsers) {
    const users = JSON.parse(storedUsers);
    const foundUser = users.find((user) => user.email === email && user.code === pass);
    if (foundUser) {
      localStorage.setItem("userName", JSON.stringify(foundUser.userName));
      // alert("התחברת בהצלחה!");
      window.location.href = "../home/home.html";
    } else {
      alert("שם האיימיל או הסיסמה שלך שגויים הירשם עכשיו---.");
    }
  } else {
    alert("לא נמצא משתמש. הירשם עכשיו---");
  }
};

