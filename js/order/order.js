// фикс суммы заказа
function fixedBlock() {
    let sticky = document.querySelector('.order__info');
    if (window.innerWidth >= 1280) {
      if (sticky) {
        let footer = document.querySelector('.order__wrapper').scrollHeight;
  
        document.addEventListener('scroll', function (e) {
          if (window.scrollY >= 150) {
            sticky.classList.add('stick-top');
          } else {
            sticky.classList.remove('stick-top');
          }
          if (window.scrollY >= (footer - 370)) {
            sticky.classList.add('stick-bottom');
          } else {
            sticky.classList.remove('stick-bottom');
          }
        });
      }
    }
  
  }
  fixedBlock();
  
// ===========================



// яндекс карта 
function init() {
    let center = [48.8866527839977, 2.34310679732974];
    let mapItem = document.querySelector('.map-order');
  
    if (mapItem) {
      let map = new ymaps.Map('map', {
        center: center,
        zoom: 17
      });
    }
  
  
    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    // map.controls.remove('trafficControl'); // удаляем контроль трафика
    // map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  }
  
  ymaps.ready(init);
// ======================================