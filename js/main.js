const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputText = document.querySelector("#text");
const inputImg = document.querySelector("#img");
const message = document.querySelector("#message");
const form = document.querySelector(".form");
const cards = document.querySelector(".cards");

let DATA = [
  {
    id: "id-1",
    image: "../images/img-1.png",
    name: "Json watson",
    email: "CEO & Founder",
    text: "Oxford university",
    message: "I am from Canada",
  },
  {
    id: "id-2",
    image: "../images/img-2.png",
    name: "Jon watson",
    email: "CEO & Founder",
    text: "Oxford university",
    message: "I am from Canada",
  },
  {
    id: "id-3",
    image: "../images/img-3.png",
    name: "Nick watson",
    email: "CEO & Founder",
    text: "Oxford university",
    message: "I am from Canada",
  },
  {
    id: "id-4",
    image: "../images/img-4.png",
    name: "Joy watson",
    email: "CEO & Founder",
    text: "Oxford university",
    message: "I am from Canada",
  },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newUser = {
    id: `id-${new Date().getTime()}`,
    image: inputImg.value,
    name: inputName.value,
    email: inputEmail.value,
    text: inputText.value,
    message: message.value,
  };
  DATA.push(newUser);
  createCard(DATA);
  inputImg.value = "";
  inputName.value = "";
  inputEmail.value = "";
  inputText.value = "";
  message.value = "";
});

function createCard(data) {
  while (cards.firstChild) {
    cards.firstChild.remove();
  }
  data.forEach((user, index) => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <div class="img">
    <div class="imgg">
    <img src="${user.image}">
    </div>      
    
    </div>
    <i>${index + 1}</i>
    <h1>${user.name}</h1>
    <h4>${user.email}</h4>
    <b>${user.text}</b>
    <p class='mes'>${user.message}</p>
    <button onclick="deleteUser(${index})" class="btn-delete">Delete</button>`;
    cards.appendChild(card);
  });
}

createCard(DATA);

function deleteUser(index) {
  DATA.splice(index, 1);
  createCard(DATA);
}
