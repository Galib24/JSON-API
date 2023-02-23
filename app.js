function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(galib => console.log(galib))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(galib2 => displayUsers(galib2))
}

function displayUsers(galib2){
    console.log(galib2)
}