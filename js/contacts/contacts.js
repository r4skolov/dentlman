// карта
function init2() {
  let center = [48.8866527839977, 2.34310679732974];
  let contactsMap = document.querySelector('.contacts-map');

  if (contactsMap) {
    let map = new ymaps.Map('contacs-map', {
      center: center,
      zoom: 17
    });
  }
}

ymaps.ready(init2);
// =======================================