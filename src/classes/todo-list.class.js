export class TodoList {
    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {

    }

    //*MarcarCompletado en el curso
    alternarTodo(id) {

        for (const todo of this.todos) {
            console.log(id, todo.id);

            if (todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }
        }

    }

    eliminarCompletadoTodo() {

    }
}