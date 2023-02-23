function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}


// 1. get the container element where you want to add the new elements
// 2. create child element
// 3. set innerText or innerHTML
// 4. append child

function displayPost(posts){
// console.log(post)
const postContainer = document.getElementById('posts-container')
for(const post of posts){
  const PostDiv = document.createElement('div');
 PostDiv.classList.add('post')
  PostDiv.innerHTML = `
  <h4>user${post.userId}</h4>
  <h3>user${post.id}</h3>
  <h5>post: ${post.title}</h5>
  <p>post Description ${post.body}</p>  
  `;
    postContainer.appendChild(PostDiv);
}
}
loadPost();