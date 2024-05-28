const {readFile, writeFile} = require('node:fs/promises');
const path = require('path');

// ensures the todos.json file can be accessed regardless of what's using it
const filePath = path.join(__dirname, 'todos.json')

const readTodos = () => {
    return readFile(filePath, 'utf-8');
};

const writeTodos = (todos) => {
    return writeFile(filePath, JSON.stringify(todos));
}

const getTodos = () => {
    return readTodos()
        .then((data) => {
            if(!data){
                return data = [];
            } else {
                return data = JSON.parse(data);
            }
        })
};

const createTodo = (todoText) => {
    // todo = { id, todoText, complete}
    // this code generates a random 4-digit string made of any combination of letters & numbers 
    const id = Math.floor((1+Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

    const newTodos = {
        id,
        todoText,
        complete: false
    };
    getTodos().then((data) => {
        data.push(newTodos);
        // the writeFile function overwrites the existing file content 
        writeTodos(data);
    })
};

const removeTodos = (id) => {
    getTodos().then((data) => {
        const filteredTodos = data.filter((todo) => todo.id !== id);
        writeTodos(filteredTodos);
    });
};

// this function actually toggles the completion status so that if you mark the wrong item as complete, you can un-complete it
const completeTodo = (id) => {
    getTodos().then((data) => {
        const todos = data.map((todo) => {
            if (todo.id === id){
                return { ...todo, complete: !todo.complete};
            } else {
                return {...todo, complete: todo.complete};
            }
        });
        writeTodos(todos);
    })
}

module.exports = {
    getTodos,
    createTodo,
    removeTodos,
    completeTodo
}