(function() {
  const hamburgerToggle = document.querySelector('.toggleHeader');
  const header = document.querySelector('header');
  const hambToggleClassList = hamburgerToggle.classList;
  function toggleShowMenu(event) {
    hamburgerToggle.classList.toggle('rotate');
    hambToggleClassList.toggle('show');
    hambToggleClassList.toggle('hide');
    header.classList.toggle('showBlock');
  }
  hamburgerToggle.addEventListener('click', toggleShowMenu);
})();