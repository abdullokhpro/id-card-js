let USERS = JSON.parse(localStorage.getItem("users")) || [];

const addBtn = document.querySelector(".hero__main__btn");
const cancelBtn = document.querySelector(".hero__modal__cancel");
const modal = document.querySelector(".hero__modal");
const cardGeneral = document.querySelector(".hero__cards");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const select = document.querySelector(".hero__modal__select");
const address = document.querySelector("#address");

class User {
  constructor(fname, lname, profession, address) {
    this.fname = fname;
    this.lname = lname;
    this.profession = profession;
    this.address = address;
  }
}

const showModal = () => {
  modal.classList.add("hero__modal__show");
  modal.style.display = "block";
};

const hideModal = () => {
  modal.classList.remove("hero__modal__show");
  modal.style.display = "none";

  fname.value = "";
  lname.value = "";
  select.value = "";
  address.value = "";
};

addBtn.addEventListener("click", showModal);

cancelBtn.addEventListener("click", hideModal);

const CreateCardData = (data) => {
  while (cardGeneral.firstChild) {
    cardGeneral.removeChild(cardGeneral.firstChild);
  }

  let card = "";
  data.forEach((user) => {
    card += `
      <div class="hero__card">
        <h2 class="hero__card__title">${user.profession}</h2>
        <span class="hero__card__line"></span>
        <h3 class="hero__card__subtitle">IDENTITY CARD</h3>
        <div class="hero__card__bottom">
          <div class="hero__card__content">
            <p class="hero__card__text">Studies/works at</p>
            <h4 class="hero__card__headings">${user.profession}</h4>
            <p class="hero__card__text">Full name</p>
            <h4 class="hero__card__headings">${user.fname} ${user.lname}</h4>
            <p class="hero__card__text">Address</p>
            <h4 class="hero__card__headings">${user.address}</h4>
          </div>
          <img src="https://placehold.co/180x200" alt="User Image" />
        </div>
      </div>
    `;
  });

  cardGeneral.innerHTML = card;
};

CreateCardData(USERS);

modal.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const fnameValue = fname.value;
  const lnameValue = lname.value;
  const workValue = select.value;
  const addressValue = address.value;

  const userExists = USERS.some(
    (user) =>
      user.fname === fnameValue &&
      user.lname === lnameValue &&
      user.profession === workValue &&
      user.address === addressValue
  );

  if (!userExists) {
    const newUser = new User(fnameValue, lnameValue, workValue, addressValue);
    USERS.push(newUser);

    localStorage.setItem("users", JSON.stringify(USERS));

    CreateCardData(USERS);

    hideModal();
  } else {
    console.log("User already exists in the database");
  }
});
