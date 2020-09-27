import './loader.scss'
window.onload = function () {
    document.body.classList.add('loader_show');
    window.setTimeout(function () {
      document.body.classList.add('loader_hide');
      document.body.classList.remove('loader_show');
    }, 500);
  }
