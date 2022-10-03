import { Todo, TodoList } from './classes/index.class';
import { crearTodoHtml } from './js/componentes';
import './styles.css';


export const todoList = new TodoList();

// console.log(todoList.todos);

todoList.todos.forEach(crearTodoHtml)