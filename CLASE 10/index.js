const textarea = document.getElementById('textarea');
// const dibujar = document.getElementById('dibujar');
const btnDibujar = document.getElementById('btn-dibujar');
const dibujar = document.getElementById('div1');

// btnDibujar.onclick= function(){
//     let textoarreglado = textarea.value.replaceAll('\n','<br>');
//     console.log(textarea.value);
//     dibujar.innerHTML = textoarreglado;
// }

btnDibujar.onclick= function(){
    let textoarreglado = textarea.value.replaceAll('\n','<br>');
    console.log(textarea.value);
    let nueva = document.createElement('p')
    nueva.innerHTML = textoarreglado;
    dibujar.appendChild(nueva)
}