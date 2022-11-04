const name_estu = document.querySelector(".name_estudiante");
const na_estu = document.querySelector(".na_estudiante");
const name_tex = document.getElementById("name_text");
const note_1 = document.getElementById("date_1");
const note_2 = document.getElementById("date_2");
const note_3 = document.getElementById("date_3");
const calcular = document.querySelector(".btn_calcular");
const resultado = document.querySelector(".resuesta");

name_tex.addEventListener("keyup", (event)=>{
    if(event.code === "Enter"){
        na_estu.textContent = name_tex.value.trim().charAt(0).toUpperCase();
        name_estu.textContent = name_tex.value;
    }
});

calcular.addEventListener("click", nota);

function nota(){
    let nombre = name_tex.value;
    let nota_1 = parseFloat(note_1.value);
    let nota_2 = parseFloat(note_2.value);
    let nota_3 = parseFloat(note_3.value);

    let suma = nota_1 + nota_2 + nota_3;

    if( suma > 4.5 ){
        resultado.textContent = `El estudiante: ${nombre} pasa con una  Excelente nota de: ${suma} y su nota final es de: ${parseInt(suma)} `
        resultado.style.color = "green";
    }
    else if( suma >= 3.5 && suma < 4.5){
        resultado.textContent = `El estudiante: ${nombre} pasa con una   Buena nota de: ${suma} y su nota final es de: ${parseInt(suma)} `
        resultado.style.color = "#ffff";
    }
    else if( suma > 2 && suma < 3.4){
        resultado.textContent = `El estudiante: ${nombre} perdio la materia con una nota de: ${suma} por lo cual su nota final es: ${parseInt(suma)} pero cuenta con la oportunidad de recuperar.`
        resultado.style.color = "yellow";
    }
    else if( suma <= 2){
        resultado.textContent = `El estudiante: ${nombre} perdio la materia por nota definitiva debajo de 2 por lo cual tendra que repetir. `
        resultado.style.color = "red"; 
    }
    else{
        resultado.textContent = `No se tienen Notas del estudiante.`
        resultado.style.color = "red"; 
    }
        
    

}