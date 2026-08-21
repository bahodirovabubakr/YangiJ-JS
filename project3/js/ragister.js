const api = "https://6a1a7b7abc2f944754924a54.mockapi.io/api/v1/register";

let fullName = document.querySelector("#fullName")
let tel = document.querySelector("#tel")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let btn = document.querySelector("#btn")


btn.addEventListener("click", function (e) {
    e.preventDefault();

    let obj = {
        fullname: fullName.value,
        phone: tel.value,
        email: email.value,
        password: password.value
    }

    if (fullName.value && tel.value && email.value && password.value) {
        fetch(api, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(obj)
        }).then((res) => {
            if(res.status >= 201 && res.status <= 300) {
                window.location.href ="./index.html";
            } else {
                alert("Xato bo'lyapti.")
            }
        })

    } else alert("🥲 `Maydoni to'liq to'ldiring.");
});
