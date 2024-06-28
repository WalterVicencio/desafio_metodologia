var id_g=3
var total_tareas=3
var total_realizadas=0


const tareas = [
    {
        id: 1,
        descripcion: "1111111111111",
        completado: false,  
    },
    {
        id: 2,
        descripcion: "11111111111",
        completado: false,      
    },
    {
        id: 3,
        descripcion: "11111111111",
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
        filas_tareas.innerHTML+=`
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.descripcion}</td>
                <td><input id="check2${tarea.id}" class="check" type="checkbox"></td>
                <td><i id="${tarea.id}" class="fa-sharp fa-solid fa-xmark fa-flip-horizontal fa-xl cruz" onclick="Eliminar(${tarea.id});"></i></td>
            </tr>
            
            `   
        if (tarea.completado==true){
            completados+=1
        }
        
        total_realizadas=completados
        res_realizadas.innerHTML=`${total_realizadas}`
    }
    
    
        
}

function Check(id){
    console.log(input.id.checked)
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas[index].completado=!(tareas[index].completado.value)
    console.log(tareas)

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
    id_g=id_g+1
    total_tareas+=1
    res_total.innerHTML=`${total_tareas}`
    tareas.push(
        {
            id:id_g,
            descripcion: input.value,
            completado: true,      
        }
    )
    filas_tareas.innerHTML=''
    for (tarea of tareas){
        filas_tareas.innerHTML+=`
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.descripcion}</td>
                <td><input id="check2${tarea.id}" class="check" type="checkbox" onclick="Check(${tarea.id});"></td>
                <td><i id="${tarea.id}" class="fa-sharp fa-solid fa-xmark fa-flip-horizontal fa-xl cruz" onclick="Eliminar(${tarea.id});"></i></td>
            </tr>
            
            `   
    }
}

for (tarea of tareas){
    filas_tareas.innerHTML+=`
        <tr>
            <td>${tarea.id}</td>
            <td>${tarea.descripcion}</td>
            <td><input id="check2${tarea.id}" class="check" type="checkbox" onclick="Check(${tarea.id});"></td>
            <td><i id="${tarea.id}" class="fa-sharp fa-solid fa-xmark fa-flip-horizontal fa-xl cruz" onclick="Eliminar(${tarea.id});"></i></td>
        </tr>
        
        `   
}