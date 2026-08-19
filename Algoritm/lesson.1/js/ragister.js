const inputs = document.querySelectorAll(".box");
let arr = Array.from(inputs);

arr.forEach((box) => {
  let inp = box.children[1];

  if (inp) {
    inp.addEventListener("input", function () {
      let attr = inp.getAttribute("name");
      let value = inp.value;
      if (attr === "text") {
        if (
          value.length > 3 &&
          value.split(" ").length === 2 &&
          value.split(" ").every((str) => str)
        ) {
          inp.style.cssText = `
            border: 2px solid #238636;
          `;
        } else {
          inp.style.cssText = `
            border: 2px solid red;
          `;
        }
      } else if (attr === "tel") {
        if (value.startsWith("+998") && value.length === 17) {
          inp.style.cssText = `
            border: 2px solid #238636;
          `;
        } else {
          inp.style.cssText = `
            border: 2px solid red;
          `;
        }
      } else if (attr === "email") {
      } else if (attr === "password") {
      } else {
        alert("Siz noto'g'ri event ishlaymoqdasiz. 🥲");
      }
    });
  }
});

let full_name = document.getElementsByName("text")[0];
let phone_number = document.getElementsByName("tel")[0];
let email = document.getElementsByName("email")[0];
let password = document.getElementsByName("password")[0];
let btn = document.querySelector("button");

function setData(obj) {
  fetch("https://6a1a7b7abc2f944754924a54.mockapi.io/api/v1/Sing_up", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(obj),
  })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        window.location.href = "index.html";
      } else alert(res.status);
    })
    .catch((error) => alert(error.message));
}

btn.addEventListener("click", function (e) {
  e.preventDefault();

  let obj = {
    full_name: full_name.value,
    phone_number: phone_number.value,
    email: email.value,
    password: password.value,
  };

  let isChecked = Object.values(obj).every((value) => value);

  if (isChecked) {
    setData(obj);
  } else {
    alert("🥹 Siz ma'lumotlarni to'liq to'ldirmadingiz.");
  }
});
