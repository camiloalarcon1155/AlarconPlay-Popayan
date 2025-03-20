const logoMenuPrincipal = document.querySelector('.imgMenuPrincipal');

const menuPrincipalHorizontal = document.querySelector('.asideMenuPrincipal');
const menuPrincipalVertical = document.querySelector('.asideMenu2Principal');




logoMenuPrincipal.addEventListener('click', abrirMenuPricipal);


function abrirMenuPricipal() {
    menuPrincipalHorizontal.classList.toggle('inactive');
    menuPrincipalVertical.classList.toggle('inactive');

}