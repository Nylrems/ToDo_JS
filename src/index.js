import { Todo, TodoList } from './classes/index.class';
import './styles.css';


const todoList = new TodoList();

const tarea1 = new Todo('Cazar patos');
const tarea2 = new Todo('Cultivar lechugas');

todoList.nuevoTodo(tarea1);
todoList.nuevoTodo(tarea2);

console.log(todoList); 