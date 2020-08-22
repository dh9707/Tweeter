const Renderer = function () {
    const renderPosts = function ($posts) {
        $('#posts').empty()
        for (let $post of $posts) {
            const comments = $post.comments
            $('#posts').append(`<div class= 'post' data-id = ${$post.id}>${$post.text}
                                <span class= 'delete'> Delete</span>
                                <div class="comments ${$post.id}"> 
                                    <input type="text" placeholder="Enter Your Comment!" class="input">
                                    <span class= 'post-comment'>Comment</span></div></div>`);
            for (const $comment of $(comments)) {
                $(`.comments.${$post.id}`).closest('.comments').append(`<P class= 'comment' data-id = ${$comment.id}>${$comment.text}
                <span class= 'delete-comment'> Delete</span></p>`);
            }
        }
    }
    return {renderPosts}
}


