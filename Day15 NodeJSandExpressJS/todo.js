// this captures the commands keyed onto the CLI
// concept known as "de-structuring" -  essentially pulls out bits of an object and assigns them to their own variables
const {argv} = require('node:process');
// this is shorthand
const { getTodos, createTodo, removeTodos, completeTodo } = require('./db/db');
// const { todo } = require('node:test');

// this logs the keyed commands as an array
// console.log(argv);

//Todo Application Plan
// Add Todo
// Complete Todo 
// Remove Todo 
// View all Todos 

const handleCommand = (todoCommand, todo) => {
    switch(todoCommand){
        case 'add': 
            createTodo(todo);
            console.log('Todo item added');
            break;
        case 'complete': 
            completeTodo(todo);
            break;
        case 'remove': 
            removeTodos(todo);
            console.log('Todo item removed');
            break;
        case 'view': 
            getTodos().then(data => console.log(data));
            break;
        default: 
            console.log('Please input a valid command');
    }
}

const init = () => {
    const todoCommand =argv[2];
    const todo = argv[3];
    return handleCommand(todoCommand, todo);
};

init()