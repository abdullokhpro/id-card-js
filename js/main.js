let USERS = JSON.parse(localStorage.getItem("users")) || [
  {
    fname: "abdullox",
    lname: "rasulov",
    profession: "studentt",
    address: "Tashkent",
  },
];

const addBtn = document.querySelector(".hero__main__btn");
const cancelBtn = document.querySelector(".hero__modal__cancel");
const modal = document.querySelector(".hero__modal");
const heroCard = document.querySelector(".hero__card");

addBtn.addEventListener("click", () => {
  function showModel() {
    modal.classList.toggle("hero__modal__show");
  }

  showModel();
});

cancelBtn.addEventListener("click", () => {
  function removeModel() {
    modal.classList.remove(".hero__modal__show");
  }

  removeModel();
});

class User {
  constructor(fname, lname, profession, address) {
    this.fname = fname;
    this.lname = lname;
    this.profession = profession;
    this.address = address;
  }
}

class Admin extends User {
  constructor(fname, lname, profession, address) {
    super(fname, lname, profession, address);
  }
}

class Teacher extends User {
  constructor(fname, lname, profession, address) {
    super(fname, lname, profession, address);
  }
}

class Student extends User {
  constructor(fname, lname, profession, address) {
    super(fname, lname, profession, address);
  }
}

function CreateCardData(data) {
  data.forEach((user, index) => {
    let cardTitle = document.createElement("h2");
    cardTitle.className = ".hero__card__title";
    cardTitle.innerHTML = `${user.profession}`;

    heroCard.appendChild(cardTitle);
  });
}
