function loadComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => commentL(data))
}

function commentL(comments){
    const commentBox = document.getElementById('comment-field');
    for(const comment of comments ){
        const commentsCr = document.createElement('div');
        commentsCr.innerHTML = `
        <h4>postId: ${comment.postId} </h4>
        <h4>Id: ${comment.id} </h4>
        <h4>Name: ${comment.name} </h4>
        <h4>Email: ${comment.email} </h4>
        <p>Body: ${comment.body} </p>
        
        
        `;
        commentBox.appendChild(commentsCr)
    }

}
loadComment()