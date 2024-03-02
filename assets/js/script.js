const mode = document.getElementsById("mode_icon");

//SE A VARIAVEL MODE FOR = MODE_ICON FAÇA
mode.addEventListener('click', () =>{
  if(mode.classList.constains('fa-moon')){
    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');

    return
  }

  mode.classList.add('fa-moon');
  mode.classList.remove('fa-sun');
});
