function loadTodo(){
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => displayTodo(data))
}

function displayTodo(todos){
    // console.log(todo)
    // get the container
    const todoContainer = document.getElementById('todo-container');
    for(const todo of todos){
        // create the child element
        const todoDiv = document.createElement('div');
        // set innerText or innerHTML
        // ternary added
        todoDiv.innerHTML = `
        <h3>title: ${todo.title}</h3>
        <p>user: ${todo.userId}</p>
        <p>completed: ${todo.completed === true ? 'complete' : 'not complete' }</p> 
        
        `;
        // appendChild
        todoContainer.appendChild(todoDiv)

    }

}

loadTodo()