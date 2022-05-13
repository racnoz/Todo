import { Todo } from "../classes";
import { todoList } from "../index";
// Referncias en el HTML
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo')

export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''}" data-id=" ${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild  ); 
/* Se usa div.firstElementChild para insertar el primer hijo (el li), 
dado que como es lista ordenada no debe tener div y como el componente se creó
En un div, por eso se hace necesario insertar únicamente el primer hijo*/
    return div.firstElementChild;

}


//Eventos

txtInput.addEventListener('keyup', ( event ) => {

    if ( event.keyCode === 13 && txtInput.value.length > 0){
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo ( nuevoTodo );

        crearTodoHtml ( nuevoTodo );
        txtInput.value = '';
    }
});

divTodoList.addEventListener ( 'click', (event) =>{
    const nombreElemento = event.target.localName; /* event = al evento de dar clic
    con el mouse, target= en que componente HTML se le dio clic, 
    localName= el nombre del elemento (input, label, button)*/
    const todoElemento = event.target.parentElement.parentElement; //referencia al HTML
    const todoId = todoElemento.getAttribute('data-id');

    console.log( nombreElemento );

    if ( nombreElemento.includes ( 'input')){ //Si se hace clic en el check de la tarea
        todoList.marcarCompletado ( todoId );
        todoElemento.classList.toggle('completed');

    } else if ( nombreElemento.includes ( 'button ') ) { // si se selecciona el boton de eliminar
        
        todoList.eliminarTodo ( todoId ); // se llama al método para eliminar la tarea del arreglo
        divTodoList.removeChild ( todoElemento ); // Se borra el elemento html de la tarea eliminada
    }
    console.log( todoList );
});





                                         