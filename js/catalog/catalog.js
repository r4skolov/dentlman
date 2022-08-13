// открыть фильтры
function filterOpen() {
    let filtersMenu = document.querySelector(".filters");
    if (filtersMenu) {
      let closeFilters = document.querySelector(".filters__close-btn");
      let filtersButtons = document.querySelector(".filters__buttons");
      let filterWrapper = document.querySelector(".filter-wrapper");
      document.addEventListener("click", (e) => {
        if (e.target.closest(".js-filters-open")) {
          filterWrapper.classList.add("overlay-filter");
          filtersMenu.classList.add("filters-visible");
          document.body.classList.add("scroll");
          filtersButtons.classList.add("fixed");
  
        }
        if ((!e.target.closest(".filters__top")) && (e.target.closest(".filters")) && !e.target.closest(".filters__wrapper")) {
          filterWrapper.classList.remove("overlay-filter");
          filtersMenu.classList.remove("filters-visible");
          document.body.classList.remove("scroll");
          filtersButtons.classList.remove("fixed");
        }
      });
  
      closeFilters.addEventListener("click", () => {
        filtersMenu.classList.remove("filters-visible");
        document.body.classList.remove("scroll");
        filtersButtons.classList.remove("fixed");
        filterWrapper.classList.remove("overlay-filter");
      })
    }
  
  
  
}

filterOpen();
// =====================================
  
// ренжслайдер для фильтров
const rangeSlider = document.getElementById('range-slider');
    

if(rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0, 100000],
        connect: true,
        step:1,
        range: {
            'min': [0],
            'max': [500000]
        }
    });

const input0 = document.getElementById('input-0');
const input1 = document.getElementById('input-1');
const inputs = [input0, input1];

rangeSlider.noUiSlider.on('update', function(values, handle){
    inputs[handle].value = Math.round(values[handle]);
});

const setRangeSlider = (i, value) => {
    let arr = [null, null]
    arr[i] = value;

    console.log(arr);

    rangeSlider.noUiSlider.set(arr);
};

inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
        console.log(index);
        setRangeSlider(index, e.currentTarget.value);
    });
});
}
// =====================================

// слайдер категории
const swiperCategory = new Swiper('.category-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 300,
    loop: true,
    navigation: {
      nextEl: '.category-swiper__next',
      prevEl: '.category-swiper__prev',
    },
  });
// =====================================