import { data } from "./hp.js";

const grid = document.querySelector(".grid");
const selectSorti = document.querySelector("#school");
const input = document.querySelector("#input");

function createCard(obj) {
  const card = document.createElement("div");
  const cardPicture = document.createElement("div");
  const cardImg = document.createElement("img");
  const biography = document.createElement("div");
  const biographyTitle = document.createElement("h2");
  const biographyActor = document.createElement("p");
  const biographyGender = document.createElement("p");
  const biographyHouse = document.createElement("p");
  const biographyWand = document.createElement("p");
  const biographyAlive = document.createElement("p");

  card.className = "card";
  cardPicture.className = "card__picture";
  cardImg.className = "card__img";
  biography.className = "biography";
  biographyTitle.className = "biography__title";

  cardImg.setAttribute("src", "https://via.placeholder.com/334x192");

  biographyTitle.textContent = obj.name;
  biographyActor.textContent = "Actor: " + obj.actor;
  biographyGender.textContent = "Gender: " + obj.gender;
  biographyHouse.textContent = "House: " + obj.house;
  biographyWand.textContent = "Wand core: " + obj.wand.core;
  biographyAlive.textContent = "Alive: " + obj.alive === true ? "yes" : "no";

  card.append(cardPicture);
  card.append(cardImg);
  card.append(biography);
  biography.append(biographyTitle);
  biography.append(biographyActor);
  biography.append(biographyGender);
  biography.append(biographyHouse);
  biography.append(biographyWand);
  biography.append(biographyAlive);

  return card;
}

function createCards() {
  data.forEach((card) => grid.append(createCard(card)));
}

createCards();

function selectSort() {
  const newData = data.filter((card) => card.house.includes(selectSorti.value));
  grid.innerHTML = "";
  return newData.forEach((card) => grid.append(createCard(card)));
}
selectSorti.addEventListener("change", selectSort);
selectSort();

function nameSearch() {
  const newData = data
    .filter((card) =>
      card.name.toLowerCase().includes(input.value.toLowerCase().trim())
    )
    .filter((card) => card.house.includes(selectSorti.value));
  grid.innerHTML = "";
  return newData.forEach((card) => grid.append(createCard(card)));
}
input.addEventListener("input", nameSearch);

nameSearch();
