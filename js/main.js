const addBtn = document.querySelector(".hero__main__btn");
const modal = document.querySelector(".hero__modal");

addBtn.addEventListener("click", () => {
  function showModel() {
    modal.classList.add("hero__modal__show");
  }

  showModel();
});
