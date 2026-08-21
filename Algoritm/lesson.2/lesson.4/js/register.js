const ism = document.querySelector("#ism");
const email = document.querySelector("#email");
const parol = document.querySelector("#parol");
const parolCheck = document.querySelector("#parol__check");
const button = document.querySelector("button");
const eye = document.querySelector(".eye");
const eyeSlash = document.querySelector(".eye__slash");
const eye2 = document.querySelector(".eye2");
const eyeSlash2 = document.querySelector(".eye__slash2");

eye.addEventListener("click", function () {
  eye.style.cssText = `
    display: none;
  `;
  eyeSlash.style.cssText = `
    display: block;
  `;
  parol.type = "password";
});

eyeSlash.addEventListener("click", function () {
  eye.style.cssText = `
    display: block;
  `;
  eyeSlash.style.cssText = `
    display: none;
  `;
  parol.type = "text";
});

eye2.addEventListener("click", function () {
  eye2.style.cssText = `
    display: none;
  `;
  eyeSlash2.style.cssText = `
    display: block;
  `;
  parolCheck.type = "password";
});

eyeSlash2.addEventListener("click", function () {
  eye2.style.cssText = `
    display: block;
  `;
  eyeSlash2.style.cssText = `
    display: none;
  `;
  parolCheck.type = "text";
});
 

email.addEventListener("blur", function (e) {
    let value = e.target.value;
    if (value) {
        email.style.cssText = `
        border: 1px solid rgba(0, 0, 0, 0.1);
        `;
    } else {
        email.style.cssText = `
        border: 1px solid #da3633;
        `;
    }

    checkEmail(e);
});

parol.addEventListener("blur", function (e) {
    let value = e.target.value;
    if (value) {
        parol.style.cssText = `
        border: 1px solid rgba(0, 0, 0, 0.1);
        `;
    } else {
        parol.style.cssText = `
        border: 1px solid #da3633;
        `;
    }

    checkParol(e);
});

ism.addEventListener("blur", function (e) {
    let value = e.target.value;
    if (value) {
        ism.style.cssText = `
        border: 1px solid rgba(0, 0, 0, 0.1);
        `;
    } else {
        ism.style.cssText = `
        border: 1px solid #da3633;
        `;
    }

    checkIsm(e);
});

parolCheck.addEventListener("blur", function (e) {
    let value = e.target.value;
    if (value) {
        parolCheck.style.cssText = `
        border: 1px solid rgba(0, 0, 0, 0.1);
        `;
    } else {
        parolCheck.style.cssText = `
        border: 1px solid #da3633;
        `;
    }

    checkParolCheck(e);
});

function checkParolCheck(e) {
    let value = e.target.value;
    if (value && value === parol.value) {
        parolCheck.style.cssText = `
        border: 1px solid #238636;
        `;
    } else {
        parolCheck.style.cssText = `
        border: 1px solid #da3633;
        `;
    }
}

parolCheck.addEventListener("input", function (e) {
    checkParolCheck(e);
});

function checkIsm(e) {
    let value = e.target.value;
    let arr = value.split(" ");

    if (
        value.length >= 3 &&
        arr.length === 1 &&
        value[0] === value[0].toUpperCase()
    ) {
        ism.style.cssText = `
        border: 1px solid #238636;
        `;
    } else {
        ism.style.cssText = `
        border: 1px solid #da3633;
        `;
    }
}

ism.addEventListener("input", function (e) {
    checkIsm(e);
});

function checkEmail(e) {
    let value = e.target.value;
    let isCheckGmail = 
        value.endsWith("@gmail.com") || value.endsWith("@yandex.ru");
    let startValue = value.split("@")[0];
    let isCheckLength = startValue.length >= 5;
    let isCheckLowerCase = startValue
        .split("")
        .every((v) => v === v.toLowerCase());

    if (isCheckGmail && isCheckLength && isCheckLowerCase) {
        email.style.cssText = `
        border: 1px solid #238636;
        `;
    } else {
        email.style.cssText = `
        border: 1px solid #da3633;
        `;
    }
}

email.addEventListener("input", function (e) {
    checkEmail(e);
});

function checkParol(e) {
    let value = e.target.value;
    let isCheckLength = value.length >= 8;
    let isCheckUpperCase = value
        .split("")
        .some((v) => v === v.toUpperCase() && v !== v.toLowerCase());
    let isCheckLowerCase = value
        .split("")
        .some((v) => v === v.toLowerCase() && v !== v.toUpperCase());
    let isCheckNumber = value.split("").some((v) => Number.isInteger(+v));

    if (isCheckLength && isCheckUpperCase && isCheckLowerCase && isCheckNumber) {
        parol.style.cssText = `
        border: 1px solid #238636;
        `;
    } else {
        parol.style.cssText = `
        border: 1px solid #da3633;
        `;
    }
}

parol.addEventListener("input", function (e) {
    checkParol(e);
});

let  api1 = "https:6a1a7b7abc2f944754924a54.mockapi.io/api/v1/register";

button.addEventListener("click", function (e) {
    e.preventDefault();

    let obj = {
        ism: ism.value,
        email: email.value,
        parol: parol.value,
        parol_check: parolCheck.value,
    };

    let ismCheck = ism.getAttribute("style").endsWith("rgb(35, 134, 54);");
    let emailCheck = email.getAttribute("style").endsWith("rgb(35, 134, 54);");
    let parolCheck1 = parol.getAttribute("style").endsWith("rgb(35, 134, 54);");
    let parolCheck2 = parolCheck
        .getAttribute("style")
        .endsWith("rgb(35, 134, 54);");

    if (ismCheck && emailCheck && parolCheck1 && parolCheck2) {
        fetch(api1, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        })
        .then((res) => {
            if (res.status >= 200 && res.status < 300)
                window.location.href = "./index.html";
            else alert("Ma'lumot saqlanmadi.");
        })
        .catch((error) => alert(`! ${error.message}`));
    } else {
        alert("Ma'lumotni noto'g'ri to'ldirmoqdasiz.");
    }
});
