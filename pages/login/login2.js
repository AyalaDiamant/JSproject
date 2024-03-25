


let b = document.getElementById("button");

b.onclick = (event) => {
  event.preventDefault();

  const userName = document.getElementById("userName").value;
  const email = document.getElementById("Email").value;
  const code = document.getElementById("code").value;
  const confirmCode = document.getElementById("confirmCode").value;

  if (code === confirmCode && userName !== "" && email !== "" && code !== "" && confirmCode !== "") {
//     alert("הפרטים שלך נקלטו בהצלחה!");

    let users = [];
    const storedUsers = localStorage.getItem("users");
    if (storedUsers && storedUsers !== "undefined") {
      users = JSON.parse(storedUsers);
    }

    const user = { userName, email, code, confirmCode };
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    console.log(users);
    window.location.href = "./login.html";
  } else {
    if (userName === "" || email === "" || code === "" || confirmCode === "")
    alert("לא מילאת את כל הפרטים");
    else
    alert("הסיסמה וסיסמת האישור אינן תואמות. הזן שוב את פרטיך.");
  }
};
