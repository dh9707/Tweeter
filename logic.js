const posts = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]

let postIdCounter = posts.length

const commentIdCounter = () => {
    let id = 0 
    for (comment in posts) {
        id += posts[comment].comments.length
    }
    return id
}


const getPosts = function () {
    return posts
}
const addPost = function (text) {
    const id = 'p' + (postIdCounter+1)
    const comments = []
    posts.push({text, id, comments})
}

const removePost = function (postID) {
    posts.splice(postID,1)
}
 const addComment = function (postID, text) {
     const comment = {id: 'c'+(commentIdCounter()+1), text: text}
     posts[postID].comments.push(comment)
     
 }
 const removeComent = function (postID, commentID) {
     posts[postID].comments.splice(commentID, 1)
    
 }