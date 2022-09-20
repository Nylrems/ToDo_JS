import { Todo, TodoList } from './classes/index.class';
import { crearTodoHtml } from './js/componentes';
import './styles.css';


export const todoList = new TodoList();

const tarea1 = new Todo('Cazar patos en la luna');
todoList.nuevoTodo(tarea1);

// tarea1.completado = true;
console.log(todoList);
crearTodoHtml(tarea1)