const storedUserName = localStorage.getItem("userName");
console.log(storedUserName);

let parsedUserName;
if (storedUserName) {
  parsedUserName = JSON.parse(storedUserName);
}

const hello = document.getElementById("hello");
hello.innerHTML += parsedUserName;