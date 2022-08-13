// навигация в кабинете 
function cabinetNav() {
    const cabinetBtn = document.querySelectorAll('.cabinet-nav__button');
    const cabinetItem = document.querySelectorAll('.cabinet__item');
  
    cabinetBtn.forEach(function (item) {
      item.addEventListener("click", function () {
  
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
  
  
        if (!currentBtn.classList.contains('active')) {
  
          cabinetBtn.forEach(function (item) {
            item.classList.remove('active');
          });
          currentBtn.classList.add('active');
  
          cabinetItem.forEach(function (item) {
            item.classList.remove('active');
          });
          currentTab.classList.add('active');
        }
      });
    });
  
}
  
cabinetNav();
// ========================================
  
// показать скрыть пароль
function showPass() {
    let inputShow = document.querySelectorAll(".form__btn-eye");
  
    inputShow.forEach(function (item) {
      item.addEventListener("click", function () {
        const field = this.parentNode.querySelector(".js-show");
        field.type = field.type == "password" ? "text" : "password";
        item.classList.toggle('active');
      });
    });
  
  }
showPass();
// =====================================
  
// показать историю покупок
  
function showHistory() {
    const btnTable = document.querySelectorAll('.js-show-table');
    const close = document.querySelectorAll('.js-close-table');
    btnTable.forEach(el => {
      el.addEventListener('click', (e) => {
        const self = e.currentTarget;
        let table = self.closest('.history__item').querySelector('.history__table');
        let historyWrap = self.closest('.history__item').querySelector('.history__wrap');
        table.classList.toggle('active');
        self.classList.toggle('active');
        historyWrap.classList.toggle('active');
      });
    });
  
    close.forEach(el => {
      el.addEventListener('click', (e) => {
        const self = e.currentTarget;
        let table = self.closest('.history__item').querySelector('.history__table');
        let btn = self.closest('.history__item').querySelector('.js-show-table', 'active');
        let historyWrap = self.closest('.history__item').querySelector('.history__wrap');
        table.classList.remove('active');
        btn.classList.remove('active');
        historyWrap.classList.remove('active');
      });
    });
  }
  
  showHistory();
// ===================================
  

function counterparty() {
    const main = document.querySelector('.counterparty__main');
    const add = document.querySelector('.counterparty__add');
    const edit = document.querySelector('.counterparty__edit');
    const addButton = document.querySelector('.js-counterparty-add');
    const back = document.querySelectorAll('.js-counterparty-back');
    const editButton = document.querySelectorAll('.js-counterparty-edit');
  
    if (addButton) {
      addButton.addEventListener('click', () => {
        main.classList.remove('active');
        add.classList.add('active');
      })
  
      back.forEach(function (item) {
        item.addEventListener('click', () => {
          main.classList.add('active');
          edit.classList.remove('active');
          add.classList.remove('active');
        })
      })
    }
  
    if (editButton) {
      editButton.forEach(el => {
        el.addEventListener('click', () => {
          main.classList.remove('active');
          edit.classList.add('active');
        })
      })
    }
  
  }
  
  counterparty()

