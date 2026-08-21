const email = document.querySelector("#email");
const parol = document.querySelector("#parol");
const button = document.querySelector("#button");
const eye = document.querySelector(".eye");
const eyeSlash = document.querySelector(".eye_slash");

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
        email.style.cssText = `x
        border: 1px solid #da3633;
        `;
    }
}

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
