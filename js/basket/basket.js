// удаление из корзины
const deleteItem = () => {
    let arrBtnsClose = document.querySelectorAll(".js-basket-delete");
    let card = document.querySelectorAll('.basket__item');
    for (let btnClose of arrBtnsClose) {
      btnClose.addEventListener("click", function (el) {
        el = el.target;
        console.log(card);
        el.closest(".basket__item").remove();
      });
    }
  };
  deleteItem();
// ===============================