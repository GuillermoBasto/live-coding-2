// API
let respuesta;
const API_ENDPOINT = 'https://yesno.wtf/api';

let button=document.getElementById("button");
let answer=document.getElementById("answer");

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

function getData(){
    let promesa = fetch(API_ENDPOINT).then(respuesta=>{respuesta.json().then(res2=>{recibeRespuesta(res2);})});
    return promesa;
    
}

function recibeRespuesta(res2){
    answer.insertAdjacentHTML("beforeend",
    `
    <span>    ${res2.answer}    </span>
    `
    )
}

button.addEventListener("click",(e)=>{
    e.preventDefault;
    answer.innerHTML="";
    console.log(getData());
});
