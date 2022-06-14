let contenido = document.querySelector("#hora");

let intervalo;



function play(){

    intervalo = setInterval(() => {

        let fecha=new Date();

        let hora=fecha.getHours();

        let minutos=fecha.getMinutes();

        let segundos=fecha.getSeconds();

        contenido.innerHTML=`

            ${hora}:${minutos}:${segundos}

        `

    }, 1000);

}



function stop(){

    clearInterval(intervalo);

}



//Tarea: configurar para alarma