const modechange = function (target) {
  let html = document.documentElement
    , txt = document.querySelector('.txt');
  if( target.getAttribute('data-mode') === 'dark' ) {
    html.classList.add('dark');
    txt.textContent = 'Dark';
  } else {
    html.classList.remove('dark');
    txt.textContent = 'Light';
  }
}