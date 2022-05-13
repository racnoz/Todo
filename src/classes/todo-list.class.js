

export class TodoList {
    constructor(){
        this.todos = [];
    }

    nuevoTodo( todo ){
        this.todos.push( todo );
    }

    eliminarTodo( id ){
        this.todos = this.todos.filter( todo => todo.id != id ) /*  regresa un nuevo arreglo excluyendo en que tiene el id que quiero eliminar (el completado) 
        y este nuevo arreglo se almacena en this.todos */
        
    }

    marcarCompletado( id ){

        for ( const todo of this.todos ){
            if ( todo.id == id ){
                todo.completado = !todo.completado;
                break;
            }
        }

    }

    eliminarCompletados(){
        
    }
}