var id_g=3
var total_tareas=3
var total_realizadas=0


const tareas = [
    {
        id: 1,
        descripcion: "Hacer la maleta",
        completado: false,  
    },
    {
        id: 2,
        descripcion: "Reservar el hotel",
        completado: false,      
    },
    {
        id: 3,
        descripcion: "Reservar el Tour guiado",
        completado: false,      
    }
]

let filas_tareas=document.querySelector("#filas_tareas")

var eliminar = document.getElementsByTagName('i');
var boton =document.querySelector("#btn_agregar")
var input =document.querySelector("#entrada")
var res_total=document.querySelector("#ntotal")
var res_realizadas=document.querySelector("#nrealizadas")

res_total.innerHTML=`${total_tareas}`
res_realizadas.innerHTML=`${total_realizadas}`

boton.addEventListener("click", Agregar)

function Eliminar(id){
    total_tareas-=1
    res_total.innerHTML=`${total_tareas}`
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    filas_tareas.innerHTML=''
    let completados=0


    
    for (tarea of tareas){

        html=''
        html+=`
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.descripcion}</td>` 
        
        if(tarea.completado==true){
            html+=`
                    <td><input id="check${tarea.id}" checked="checked" class="check" type="checkbox" onclick="Check(${tarea.id});"></td>
                    `
        }else{
            html+=`
                    <td><input id="check${tarea.id}" class="check" type="checkbox" onclick="Check(${tarea.id});"></td>
                    `
        }
        html+=`<td><i id="${tarea.id}" class="fa-sharp fa-solid fa-xmark fa-flip-horizontal fa-xl cruz" onclick="Eliminar(${tarea.id});"></i></td>
            </tr>
            ` 
        filas_tareas.innerHTML+=html  

       
        if (tarea.completado==true){
            completados+=1
        }
        
        
    }
    total_realizadas=completados
    res_realizadas.innerHTML=`${total_realizadas}`
    
        
}

function Check(id){
    console.log(id)
    const index = tareas.findIndex((ele) => ele.id == id)

    if(tareas[index].completado==true){
        tareas[index].completado=false
    }else{
        tareas[index].completado=true
    }

    let completados=0
    for (tarea of tareas){
        if (tarea.completado==true){
            completados+=1
        }
    }
    total_realizadas=completados
    res_realizadas.innerHTML=`${total_realizadas}`
}

function Agregar(){
    if(input.value==''){
        alert("Escriba una nueva tarea")
    }else{
    
    id_g=id_g+1
    total_tareas+=1
    res_total.innerHTML=`${total_tareas}`
    tareas.push(
        {
            id:id_g,
            descripcion: input.value,
            completado: false,      
        }
    )

    filas_tareas.innerHTML=''
    for (tarea of tareas){
        html=''
        html+=`
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.descripcion}</td>` 
        
        if(tarea.completado==true){
            html+=`
                    <td><input id="check${tarea.id}" checked="checked" class="check" type="checkbox" onclick="Check(${tarea.id});"></td>
                    `
        }else{
            html+=`
                    <td><input id="check${tarea.id}" class="check" type="checkbox" onclick="Check(${tarea.id});"></td>
                    `
        }
        html+=`<td><i id="${tarea.id}" class="fa-sharp fa-solid fa-xmark fa-flip-horizontal fa-xl cruz" onclick="Eliminar(${tarea.id});"></i></td>
            </tr>
            ` 
        filas_tareas.innerHTML+=html  
        
    }
 
    input.value=''
    }
}

for (tarea of tareas){
    filas_tareas.innerHTML+=`
        <tr>
            <td>${tarea.id}</td>
            <td>${tarea.descripcion}</td>
            <td><input id="check${tarea.id}" class="check" type="checkbox" onclick="Check(${tarea.id});"></td>
            <td><i id="${tarea.id}" class="fa-sharp fa-solid fa-xmark fa-flip-horizontal fa-xl cruz" onclick="Eliminar(${tarea.id});"></i></td>
        </tr>
        
        `   
}