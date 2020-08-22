const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())
post = () => {
    let text = $('#input').val()
    $('#input').val('')
    tweeter.addPost(text)
    renderer.renderPosts(tweeter.getPosts())
}

$('#posts').on('click', '.delete-comment', function () {
    let commentID = $(this).closest('.comment').data().id
    let postID = $(this).closest('.post').data().id
    console.log(commentID);
    tweeter.removeComment(postID, commentID)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click', '.delete', function(){
    let postID = $(this).closest('.post').data().id
    tweeter.removePost(postID)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click', '.post-comment', function () {
    let text = $(this).closest('.post').find('.input').val()
    let postID = $(this).closest('.post').data().id
    tweeter.addComment(text, postID)
    renderer.renderPosts(tweeter.getPosts())
})
