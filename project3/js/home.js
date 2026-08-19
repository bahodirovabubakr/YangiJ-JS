const api = "https://6a1a7b7abc2f944754924a54.mockapi.io/api/v1/register";

const  getData = async () => {
    let res = await fetch(api);
    res = await res.json();
    res.forEach((obj) => {
        let card = document.createElement("div");
        card.style.cssText = `
        width: 100%;
        `;
        let img = document.createElement("span");
        let span = document.createElement("span");
        let h4 = document.createElement("h4");

    })
};

getData();                         

