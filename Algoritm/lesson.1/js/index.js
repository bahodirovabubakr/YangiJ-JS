const inputs = document.querySelectorAll(".box");
const arr = Array.from(inputs).slice(0, 2);

arr.forEach((box) => {
  let inp = box.children[1];

  inp.addEventListener("blur", function () {
    if (inp.value) {
      if (inp.name === "text") {
        let isGmail = inp.value.endsWith("@gmail.com");
        let isEmail = inp.value.split("@")[0].length > 4;
        let isLower = inp.value
          .split("@")[0]
          .split("")
          .every((s) => s !== s.toUpperCase());

        if (isGmail && isEmail && isLower) {
          inp.style.cssText = `
          border: 2px solid #238636;
        `;
        } else {
          inp.style.cssText = `
          border: 2px solid red;
        `;
        }
      } else if (inp.name === "password") {
        let len = inp.value.length > 7;
        let isLower = inp.value.split("").some((s) => s !== s.toUpperCase());
        let isUpper = inp.value.split("").some((s) => s !== s.toLowerCase());
        let isIntager = inp.value.split("").some((s) => !isNaN(s));

        if (len && isLower && isUpper && isIntager) {
          inp.style.cssText = `
          border: 2px solid #238636;
        `;
        } else {
          inp.style.cssText = `
          border: 2px solid red;
        `;
        }
      } else {
        alert("Siz noto'g'ri Event ishlatmoqdasiz. 🥲");
      }
    } else {
      inp.style.cssText = `
          border: 2px solid red;
        `;
    }
  });

  inp.addEventListener("input", function () {
    if (inp.name === "text") {
      let isGmail = inp.value.endsWith("@gmail.com");
      let isEmail = inp.value.split("@")[0].length > 4;
      let isLower = inp.value
        .split("@")[0]
        .split("")
        .every((s) => s !== s.toUpperCase());

      if (isGmail && isEmail && isLower) {
        inp.style.cssText = `
          border: 2px solid #238636;
        `;
      } else {
        inp.style.cssText = `
          border: 2px solid red;
        `;
      }
    } else if (inp.name === "password") {
      let len = inp.value.length > 7;
      let isLower = inp.value.split("").some((s) => s !== s.toUpperCase());
      let isUpper = inp.value.split("").some((s) => s !== s.toLowerCase());
      let isIntager = inp.value.split("").some((s) => !isNaN(s));

      if (len && isLower && isUpper && isIntager) {
        inp.style.cssText = `
          border: 2px solid #238636;
        `;
      } else {
        inp.style.cssText = `
          border: 2px solid red;
        `;
      }
    } else {
      alert("Siz noto'g'ri Event ishlatmoqdasiz. 🥲");
    }
  });
});

const eye = document.querySelector(".eye");
const eye_slash = document.querySelector(".eye-slash");
eye.addEventListener("click", function () {
  let inp = eye.parentElement.children[1];
  inp.type = "text";
  eye_slash.style.cssText = `
    display: block;
  `;
  eye.style.cssText = `
    display: none;
  `;
});
eye_slash.addEventListener("click", function () {
  let inp = eye_slash.parentElement.children[1];
  inp.type = "password";
  eye_slash.style.cssText = `
    display: none;
  `;
  eye.style.cssText = `
    display: block;
  `;
});

let email = document.getElementsByName("text")[0];
let password = document.getElementsByName("password")[0];
let btn = document.getElementsByTagName("button")[0];

let api = "https://6a1a7b7abc2f944754924a54.mockapi.io/api/v1/Sing_up";

async function getFetchData(e, p) {
  let res = await fetch(api);
  res = await res.json();
  let obj = res.find((obj) => obj.email === e && obj.password === p);
  if (obj) {
    window.location.href = "home.html";
  } else {
    alert("404 Not Found");
    email.value = "";
    password.value = "";
    email.style.cssText = `border: 2px solid red;`;
    password.style.cssText = `border: 2px solid red;`;
  }
}

btn.addEventListener("click", function (e) {
  e.preventDefault();

  getFetchData(email.value, password.value);
});
