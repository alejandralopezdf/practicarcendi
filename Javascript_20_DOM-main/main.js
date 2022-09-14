// Seleccionando Elementos

// Por ID
let elementoPorId = document.getElementById('parrafo1');
elementoPorId.innerHTML = 'HTML';

// Por nombre de la clase
let elementosPorClase = document.getElementsByClassName('parrafos');
elementosPorClase[1].innerHTML = 'CSS';

// Por etiqueta
let elementosPorEtiquetas = document.getElementsByTagName('p');
elementosPorEtiquetas[2].innerHTML = 'Javascript';

// Modificando estilos
elementoPorId.style.background = 'black';
elementoPorId.style.color = 'white';
elementoPorId.style.borderRadius = '8px';
elementoPorId.style.width = '250px';
elementoPorId.style.textAlign = 'center';


elementosPorClase[1].style.background = 'black';
elementosPorClase[1].style.color = 'white';
elementosPorClase[1].style.borderRadius = '8px';
elementosPorClase[1].style.width = '250px';
elementosPorClase[1].style.textAlign = 'center';
