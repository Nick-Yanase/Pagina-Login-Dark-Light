/*//criar uma variavel para o botão da lua e realizar as ações co ele
const mode = document.getElementsByClassName("mode_icon");
const form = Document.getElement;
//SE A VARIAVEL MODE FOR = MODE_ICON FAÇA, evento de click
mode.addEventListener("click", () => {
  const form = document.getElementById("login_form");
  if (mode.classList.constains("fa-moon")) {
    //caso tenha a lua ou o icone da lua
    mode.classList.remove("fa-moon");
    mode.classList.add("fa-sun");

    form.classList.add("dark");
    return;
  }

  mode.classList.add("fa-moon");
  mode.classList.remove("fa-sun");
  form.classList.remove("dark");
});*/

const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return ;
    }
    
    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');

    form.classList.remove('dark');
});
