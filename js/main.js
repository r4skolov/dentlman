let header = document.querySelector('.header');
// ========== фикс шапки
window.onscroll = () => {
  let Y = window.scrollY;
  if (Y > 108) {
    header.classList.add('fixed-block');
    header.classList.add('header__fixed');
    document.body.style.paddingTop = 101 + 'px';
  } else if (Y < 100) {
    header.classList.remove('header__fixed');
    header.classList.remove('fixed-block');
    document.body.style.paddingTop = 0 + 'px';
  }

}
// ==============================================


//=======================попапы
const showPopupBtns = document.querySelectorAll('.js-show-popup');
const popups = document.querySelectorAll('.js-popup');
const body = document.body;
const overlay = document.querySelector('.js-overlay');

const CLASS_ACTIVE = 'active';
const CLASS_OVERFLOW = '_scroll-disabled';



const showPopup = (event) => {
  const openBtn = event.target.closest('.js-show-popup');
  const activePopup = document.querySelector('.js-popup.active');
  const targetPopup = document.querySelector(`[data-popup=${openBtn.dataset.trigger}]`);


  if (activePopup) {
    activePopup.classList.remove(CLASS_ACTIVE);

  }

  if (openBtn.dataset.tab) {
    targetPopup.querySelector(`[data-tab="${openBtn.dataset.tab}"]`).classList.add(CLASS_ACTIVE);
    targetPopup.querySelector(`[data-content="${openBtn.dataset.tab}"]`).classList.add(CLASS_ACTIVE);

  }

  targetPopup.classList.add(CLASS_ACTIVE);
  body.classList.add(CLASS_OVERFLOW);
  overlay.classList.add(CLASS_ACTIVE);

};

const hidePopup = (activePopup) => {
  if (!activePopup) {
    return;
  }
  body.classList.remove(CLASS_OVERFLOW);
  overlay.classList.remove(CLASS_ACTIVE);
  activePopup.classList.remove(CLASS_ACTIVE);
  document.body.style.paddingRight = '0px';

  if (document.querySelector('.active[data-content]') && document.querySelector('.active[data-tab]')) {
    document.querySelector('.active[data-content]').classList.remove(CLASS_ACTIVE);
    document.querySelector('.active[data-tab]').classList.remove(CLASS_ACTIVE);
  }
};

const showPopupInit = () => {
  if (showPopupBtns.length) {
    showPopupBtns.forEach((opener) => {
      opener.addEventListener('click', (event) => {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        document.body.style.paddingRight = paddingOffset;
        let headerTwo = document.querySelector('.fixed-block');
        let Y = window.scrollY;
        if (Y > 250) {
          headerTwo.style.paddingRight = paddingOffset;
        }
        showPopup(event);
      });
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      hidePopup(document.querySelector('.js-popup.active'));
      let headerTwo = document.querySelector('.fixed-block');
      let Y = window.scrollY;
      if (Y > 250) {
        headerTwo.style.paddingRight = '0px';
      }
    });
  }
  if (popups.length) {
    popups.forEach((popup) => {
      popup.addEventListener('click', (event) => {
        const closeBtn = event.target.closest('.js-popup-close');

        if (!closeBtn) {
          return;
        }
        hidePopup(popup);
        let headerTwo = document.querySelector('.fixed-block');
        let Y = window.scrollY;
        if (Y > 250) {
          headerTwo.style.paddingRight = '0px';
        }
      });
    });
  }
};

if (popups.length) {
  showPopupInit();
}
//======================================================

// счетчик карты товара

window.addEventListener('click', function (event) {

  let counter;

  if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

    const counterWrapper = event.target.closest('.counter-wrapper');

    counter = counterWrapper.querySelector('[data-action="counter"]');
  }

  if (event.target.dataset.action === 'plus') {
    counter.value = ++counter.value;
  }

  if (event.target.dataset.action === 'minus') {
    if (parseInt(counter.value) > 1) {
      counter.value = --counter.value;
    }
  }
});
//====================================================

// бургер меню - каталог 

function burgerMenu() {
  function disableScroll() {
    let pagePosition = window.scrollY;
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    let headerTwo = document.querySelector('.fixed-block');
    let Y = window.scrollY;
    document.body.classList.add('scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.paddingRight = paddingOffset;

    if (Y > 250) {
      headerTwo.style.paddingRight = paddingOffset;
    }
  }

  function enableScroll() {

    let headerTwo = document.querySelector('.fixed-block');
    let Y = window.scrollY;
    document.body.classList.remove('scroll');
    document.body.removeAttribute('data-position');
    document.body.style.paddingRight = '0px';
    if (Y > 250) {
      headerTwo.style.paddingRight = '0px';
    }

  }

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const menuMobile = document.querySelector('.header__top');
  const catalogMobile = document.querySelector('.js-menu-mobile');


  if (window.innerWidth >= 768) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('burger--active');
      menu.classList.toggle('menu--active');
      menu.classList.add('overlaybg');

      if (burger.classList.contains('burger--active')) {
        disableScroll();
      } else {
        enableScroll();
      }
    });

  }

  if (window.innerWidth < 768) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('burger--active');
      menuMobile.classList.toggle('active');
      if (burger.classList.contains('burger--active')) {
        disableScroll();
      } else {
        enableScroll();
      }
      if (menu.classList.contains('menu--active')) {
        menu.classList.remove('menu--active');
        catalogMobile.classList.remove('active');
      }

      catalogMobile.addEventListener('click', () => {
        catalogMobile.classList.toggle('active');
        menu.classList.toggle('menu--active');

      })
    })
  }



  const menuBtn = document.querySelectorAll('.menu__btn')
  const menuRight = document.querySelectorAll('.menu__right')
  const menuItem = document.querySelectorAll('.menu__list-item');
  const menuBack = document.querySelectorAll('.menu__back');

  menuBtn.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let rightMenu = currentBtn.closest('.menu__list-item').querySelector('.menu__right');
      let currentLi = currentBtn.closest('.menu__list-item');

      menuBtn.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('active')
        }
      });

      menuRight.forEach(el => {
        if (el !== rightMenu) {
          el.classList.remove('active')
        }
      });

      menuItem.forEach(el => {
        if (el !== currentLi) {
          el.classList.remove('active')
        }
      });

      rightMenu.classList.toggle('active');
      currentLi.classList.toggle('active');
      currentBtn.classList.toggle('active');

    })

  });

  menuBack.forEach(el => {
    el.addEventListener('click', (e) => {

      if (e.target.classList.contains('menu__back')) {
        menuRight.forEach(el => {
          el.classList.remove('active')
        });

        menuBtn.forEach(el => {
          el.classList.remove('active')
        });

        menuItem.forEach(el => {
          el.classList.remove('active')
        });
      }
    });
  });

  const menuBtnDown = document.querySelectorAll('.menu__dropdown-btn');
  const menuDropDown = document.querySelectorAll('.dropdown-list');
  const menuDropItem = document.querySelectorAll('.menu__dropdown-item');

  menuBtnDown.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let currentDrop = currentBtn.closest('.menu__dropdown-item').querySelector('.dropdown-list');
      let currentLi = currentBtn.closest('.menu__dropdown-item');



      menuBtnDown.forEach(el => {
        if (el !== currentBtn) {
          el.classList.remove('active')
        }
      });

      menuDropDown.forEach(el => {
        if (el !== currentDrop) {
          el.classList.remove('active')
        }
      });

      menuDropItem.forEach(el => {
        if (el !== currentLi) {
          el.classList.remove('active')
        }
      });


      currentLi.classList.toggle('active');
      currentDrop.classList.toggle('active');
      currentBtn.classList.toggle('active');
    })
  })

  document.addEventListener("click", (e) => {
    if ((!e.target.closest(".menu__wrapper")) && (e.target.closest(".menu"))) {
      menu.classList.remove('menu--active');
      burger.classList.remove('burger--active');
      enableScroll();
    }

    if (!e.target.closest('.menu__wrapper')) {
      menuBtn.forEach(el => {
        el.classList.remove('active');
      });

      menuRight.forEach(el => {
        el.classList.remove('active');
      });

      menuItem.forEach(el => {
        el.classList.remove('active')
      });

      menuDropDown.forEach(el => {
        el.classList.remove('active')
      });

      menuDropItem.forEach(el => {
        el.classList.remove('active')
      });

      menuBtnDown.forEach(el => {
        el.classList.remove('active')
      });

    }
  });

}
burgerMenu();

//====================================================

// кастом скролл 
function customScroll() {
  document.querySelectorAll('.js-scroll').forEach (el => {
      new SimpleBar(el, { autoHide: false });
  })
}

if (window.innerWidth >= 1280) {
  customScroll();
}
// ==================================================


// плашка добавить в корзину
function productAdd() {
  const productAdd = document.querySelector('.product-add');
  const productBtn = document.querySelectorAll('.js-add-product');

  productBtn.forEach(function(item) {
    item.addEventListener('click', () => {
        productAdd.classList.add('active');
      
        setTimeout(function () {
          productAdd.classList.remove('active');
        }, 2000);
    })
    
  })

 
}

productAdd();
// ==================================================


// аакордеон 
function accardion() {
  const CLASS_WRAP = 'js-accordion-wrap';
  const CLASS_ACCORDION = 'js-accordion';
  const CLASS_HEAD = 'js-accordion-head';
  const CLASS_OPENER = 'js-accordion-open';
  const CLASS_CONTENT = 'js-accordion-content';
  const CLASS_DESCRIPTION = 'js-accordion-descr';
  const CLASS_OPEN = 'js-open';

  const CLASS_ACTIVE = 'active';


  const accordionList = document.querySelectorAll(`.${CLASS_ACCORDION}`);
  const openList = document.querySelectorAll(`.${CLASS_ACCORDION}.${CLASS_OPEN}`);

  if (accordionList.length) {
    accordionList.forEach((accordion) => {
      const wrap = accordion.closest(`.${CLASS_WRAP}`);
      const open = accordion.querySelector(`.${CLASS_OPENER}`);

      open.addEventListener('click', (e) => {
        const target = e.target;
        const btn = target.closest(`.${CLASS_OPENER}`);
        const head = target.closest(`.${CLASS_HEAD}`);
        const trigger = head ? head : btn;

        if (wrap && wrap.getAttribute('data-only') != undefined) {
          const group = wrap.querySelector(`.${CLASS_ACCORDION}`).getAttribute('data-group');
          let contentList = [];

          if (group) {
            const currentAccordionList = wrap.querySelectorAll(`[data-group="${group}"]`);
            currentAccordionList.forEach((accordion) => {
              contentList.push(accordion.querySelector(`.${CLASS_CONTENT}`));
            });
          } else {
            contentList = wrap.querySelectorAll(`.${CLASS_CONTENT}`);
          }

          showAccordion(trigger, contentList, false);
        } else {
          showAccordion(trigger);
        }
      });
    });

    resize();
  }

  if (openList.length) {
    clickAccordion(openList);
  }

  function getDesctiptionHeight(currentAccordion) {
    const description = currentAccordion.querySelector(`.${CLASS_DESCRIPTION}`);
    const height = description.offsetHeight;
    const computedStyle = window.getComputedStyle(description);
    const marginTop = +computedStyle.marginTop.replace('px', '');
    const marginBottom = +computedStyle.marginBottom.replace('px', '');

    return height + marginTop + marginBottom;
  }

  function showAccordion(head, contentAccordion = [], all = true) {
    const currentContent = head.nextElementSibling;
    const parent = currentContent.closest(`.${CLASS_ACCORDION}`);

    if (head.classList.contains(CLASS_ACTIVE)) {
      head.classList.remove(CLASS_ACTIVE);
      parent.classList.remove(CLASS_ACTIVE);
      currentContent.style.maxHeight = '0';
    } else {
      if (!all && contentAccordion.length) {
        contentAccordion.forEach((content) => {
          content.previousElementSibling.classList.remove(CLASS_ACTIVE);
          content.style.maxHeight = '0';
        });
      }

      const heightDescription = getDesctiptionHeight(currentContent);

      let parentDescription;

      let paretnContent;

      function changeParent(el) {
        parentDescription = el.closest(`.${CLASS_DESCRIPTION}`);

        if (parentDescription) {
          paretnContent = parentDescription.closest(`.${CLASS_CONTENT}`);
        } else {
          paretnContent = null;
        }
      }

      changeParent(currentContent);

      if (paretnContent) {
        do {
          const oldHeight = paretnContent.scrollHeight;
          paretnContent.style.maxHeight = `${oldHeight + heightDescription}px`;

          changeParent(paretnContent);
        } while (paretnContent);
      }

      head.classList.add(CLASS_ACTIVE);
      parent.classList.add(CLASS_ACTIVE);
      currentContent.style.maxHeight = heightDescription + 'px';
    }
  }

  function updateResize() {
    const activeAccordions = document.querySelectorAll(`.${CLASS_ACCORDION}.${CLASS_ACTIVE}`);
    const activeOpeners = document.querySelectorAll(`.${CLASS_OPENER}.${CLASS_ACTIVE}`);
    const activeHeads = document.querySelectorAll(`.${CLASS_HEAD}.${CLASS_ACTIVE}`);
    const activeContents = document.querySelectorAll(`.${CLASS_CONTENT}.${CLASS_ACTIVE}`);

    if (activeOpeners.length) {
      activeOpeners.forEach((el) => el.classList.remove(`.${CLASS_ACTIVE}`));
    }
    if (activeHeads.length) {
      activeHeads.forEach((el) => el.classList.remove(`.${CLASS_ACTIVE}`));
    }
    if (activeContents.length) {
      activeContents.forEach((el) => {
        el.classList.remove(`.${CLASS_ACTIVE}`);
        el.style.maxHeight = '0';
      });
    }

    if (activeAccordions.length) {
      activeAccordions.forEach((el) => el.classList.remove(`.${CLASS_ACTIVE}`));

      clickAccordion(activeAccordions);
      clickAccordion(activeAccordions);
    }
  }

  function clickAccordion(list) {
    list.forEach((open) => {
      const btn = open.querySelector(`.${CLASS_OPENER}`);

      if (btn) {
        btn.click();
      }
    });
  }

  function resize() {
    let changed = false;
    window.addEventListener('resize', () => {
      if (changed !== false) {
        clearTimeout(changed);
      }

      changed = setTimeout(updateResize, 200);
    });
  }

}
accardion();
// ==================================================

// слайдер для бренодов 
const swiperBrands = new Swiper('.brands-swiper', {
  slidesPerView: 3.1,
  spaceBetween: 17,
  speed: 300,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3.5,
      spaceBetween: 17,
    },
    480: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 4.7,
      spaceBetween: 29,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 36,
    }
  }
});

// =================================================

// селекты
function select() {
  const SELECT_SELECTOR = '.js-select';
  const BTN_SELECTOR = '.js-select-btn';
  const LIST_SELECTOR = '.js-select-list';
  const OPTION_SELECTOR = '.js-select-option';

  const CLASS_ACTIVE = 'active';

  const SELECTS = document.querySelectorAll('.js-select');
  const post = document.getElementById("post");
  const post2 = document.getElementById("post2");
  const post3 = document.getElementById("post3");
  const post4 = document.getElementById("post4");

  if (!SELECTS.length) return;

  function closeAllSelect() {
    const btnList = document.querySelectorAll(BTN_SELECTOR);
    const selectList = document.querySelectorAll(LIST_SELECTOR);

    btnList.forEach((el) => el.classList.remove(CLASS_ACTIVE));
    selectList.forEach((el) => el.classList.remove(CLASS_ACTIVE));
  }

  SELECTS.forEach((select) => {
    const btn = select.querySelector(BTN_SELECTOR);
    const selectList = select.querySelector(LIST_SELECTOR);
    const optionList = selectList.querySelectorAll(OPTION_SELECTOR);

    btn.addEventListener('click', (e) => {
      const target = e.target.closest(BTN_SELECTOR);

      if (target.classList.contains(CLASS_ACTIVE)) {
        target.classList.remove(CLASS_ACTIVE);
        selectList.classList.remove(CLASS_ACTIVE);
      } else {
        closeAllSelect();
        target.classList.add(CLASS_ACTIVE);
        selectList.classList.add(CLASS_ACTIVE);
      }
    });


    selectList.addEventListener('click', (e) => {
      const target = e.target.closest(OPTION_SELECTOR);


      const selectItem = document.querySelectorAll('.select-item');
      let selectId = target.getAttribute("data-value");
      let currentItem = document.querySelector(selectId);
      if (currentItem) {

        selectItem.forEach(function (item) {
          item.classList.remove('active');
        })
        currentItem.classList.add('active');
      }



      if (target) {
        const value = target.getAttribute('data-value');
        const content = target.innerHTML;

        optionList.forEach((option) => option.classList.remove(CLASS_ACTIVE));

        target.classList.add(CLASS_ACTIVE);
        btn.classList.remove(CLASS_ACTIVE);
        btn.innerHTML = content;
        btn.setAttribute('data-value', value);
        selectList.classList.remove(CLASS_ACTIVE);


        if (btn.dataset.value === 'post') {
          post.classList.add('active');
          post2.classList.remove('active');
          post3.classList.remove('active');
          post4.classList.remove('active');
        }

        if (btn.dataset.value === 'post2') {
          post2.classList.add('active');
          post.classList.remove('active');
          post3.classList.remove('active');
          post4.classList.remove('active');
        }

        if (btn.dataset.value === 'post3') {
          post3.classList.add('active');
          post.classList.remove('active');
          post2.classList.remove('active');
          post4.classList.remove('active');
        }

        if (btn.dataset.value === 'post4') {
          post4.classList.add('active');
          post.classList.remove('active');
          post2.classList.remove('active');
          post3.classList.remove('active');
        }

      }

    });

  });



  document.addEventListener('click', (e) => {
    const target = e.target;


    if (target && !target.closest(SELECT_SELECTOR)) {
      closeAllSelect();
    }
  });
}
select();
// ================================================

const swiperWatched = new Swiper('.watched__swiper', {
  slidesPerView: 2,
  speed: 300,
  loop: true,
  navigation: {
    nextEl: '.watched__next',
    prevEl: '.watched__prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1280: {
      slidesPerView: 4,
    }
  }
 
});

const swiperRelated = new Swiper('.related__swiper', {
  slidesPerView: 2,
  speed: 300,
  loop: true,
  navigation: {
    nextEl: '.related__next',
    prevEl: '.related__prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1280: {
      slidesPerView: 4,
    }
  }
 
});


// скролл к секции 
const smoothScroll = () => {
  const scroll = function (targetEl, duration) {
    const targets = document.querySelector(targetEl)
    const targetsPosition = targets.getBoundingClientRect().top - 100;
    const startsPosition = window.pageYOffset
    let startTime = null

    const ease = function (t, b, c, d) {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t + b
      t -= 1
      return (-c / 2) * (t * (t - 2) - 1) + b
    }

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const run = ease(timeElapsed, startsPosition, targetsPosition, duration)
      window.scrollTo(131, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }
    requestAnimationFrame(animation)
  }

  const scrollTo = function () {
    const links = document.querySelectorAll('.js-smooth-scroll')
    links.forEach((each) => {
      each.addEventListener('click', function () {
        const currentTarget = this.getAttribute('href');
        scroll(currentTarget, 1000)
      })
    })
  }
  scrollTo()
}
smoothScroll();
// ================================================

// счетчик символов в поле textarea
function textCount() {
  let textArea = document.querySelectorAll('.counter-input');
  let textCount = document.querySelectorAll('.counter-num');
  textArea.forEach(function(item) {
    
      item.addEventListener("input", function () {
          textCount.forEach(function(item2) {
              item2.innerText = item.value.length;
          })
      })
  
  })

}
textCount();
// ===============================================


// моб. кабинет пказать скрыть
function cabinet() {
  const cabinetBtn = document.querySelector('.js-show-cabinet');
  const cabinetNav = document.querySelector('.header__cabinet-wrap');
  const cabinetNavButtons = document.querySelectorAll('.cabinet-nav__button');

  cabinetBtn.addEventListener("click", () => {
    cabinetNav.classList.toggle('active');
  })
  cabinetNavButtons.forEach(function (item) {
    item.addEventListener("click", () => {
      cabinetNav.classList.remove('active');
    })
  });
  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('header__cabinet-wrap') && !e.target.closest('.header__cabinet-wrap') && !e.target.classList.contains('js-show-cabinet')) {
      cabinetNav.classList.remove('active');
    }
  });

}

cabinet();

// ==============================================


// закрыть куки

function cookie() {
  const cookieItem = document.querySelector('.cookie');
  const cookieBtn = document.querySelector('.js-cookie-btn');

  cookieBtn.addEventListener("click" , () => {
    cookieItem.classList.remove('active');
  })
}

cookie();
// =============================================

function inputMask() {
  Inputmask({
    mask: '+7 (999) 999-99-99',
  }).mask('input[type="tel"]');

  Inputmask({
    mask: '*{3,20}@*{3,20}.*{2,7}',
  }).mask('input[data-mask="email"]');

  Inputmask({
    mask: '9999 999999',
  }).mask('input[data-mask="series"]');

  Inputmask({
    mask: '99.99.9999',
  }).mask('input[data-mask="date"]');
}

inputMask();