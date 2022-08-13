// фиксированное меню слева

function fixedNav() {
  const stickyNav = document.querySelector('.delivery-nav');
  const stickyNavBtn = document.querySelectorAll('.delivery-nav__item-link');

  if (stickyNav) {
    let wrapper = document.querySelector('.delivery__wrapper').scrollHeight;
 
    document.addEventListener('scroll', function (e) {
      if (window.scrollY >= 150) {
        stickyNav.classList.add('nav-top');
      } else {
        stickyNav.classList.remove('nav-top');
      }
      if (window.scrollY >= wrapper) {
        stickyNav.classList.add('nav-bottom');
      } else {
        stickyNav.classList.remove('nav-bottom');
      }
    
      let scrollDistance = window.scrollY;
        document.querySelectorAll('.js-item').forEach((el, i) => {
          if (el.offsetTop <= scrollDistance) {
            document.querySelectorAll('.delivery-nav a').forEach((el) => {
              if (el.classList.contains('active')) {
                el.classList.remove('active');
              }
            });
    
            document.querySelectorAll('.delivery-nav li')[i].querySelector('a').classList.add('active');
          }
        });
      
    });
  }

  stickyNavBtn.forEach(function (item) {
    item.addEventListener("click", function () {

      stickyNavBtn.forEach(function (item) {
        item.classList.remove('active');
      });
      item.classList.add('active');
    })

  })

}
fixedNav();
// ========================================