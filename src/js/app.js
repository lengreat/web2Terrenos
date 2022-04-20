document.addEventListener('DOMContentLoaded', function(){
    eventListeners();

    darkMode();
}

);
function darkMode(){

  //obtener preferencias del usuario
  const prefiereDarkMode=window.matchMedia('(prefers-color-scheme:dark)');

  if(prefiereDarkMode.matches){
      document.body.classList.add('dark-mode');
  }else{
      document.body.classList.remove('dark-mode')
  }
  prefiereDarkMode.addEventListener('change', function(){
    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode')
    }
  }

  );

  const botonDarkMode = document.querySelector('.dark-mode-boton');
  botonDarkMode.addEventListener('click', function(){
      document.body.classList.toggle('dark-mode');//crea o remueve la clase dark-mode en el body
  }

  );
}
function eventListeners(){
    const mobileMenu=document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click',navegacionResponsive);
}

function navegacionResponsive(){
    const navegacion=document.querySelector('.navegacion');
    console.log('dfdfs ifla');

    if(navegacion.classList.contains('mostrar')){//agrega la clase mostrar o la remueve
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }
    //navegacion.classList.toggle('mostrar');//hace lo de arrriba
}