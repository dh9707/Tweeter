const Tweeter = function () {
    let postIdCounter = 3
    let commentIdCounter = 7

    const getPosts = function () {
        return posts
    }
    const addPost = function (text) {
        const id = 'p' + postIdCounter
        const comments = []
        posts.push({ text, id, comments })
        postIdCounter++;
    }

    const removePost = function (postID) {
        for (const key in posts) {
            if (posts[key].id === postID) {
                posts.splice(key, 1)

            }
        }

    }
    const addComment = function (text, postID) {
        for (const key of posts) {
            if (key.id === postID) {
                key.comments.push({id:'c'+commentIdCounter,text})
            }
        }
        commentIdCounter++;
    }
    const removeComment = function (postID, commentID) {
        for (const i of posts) {
            if (i.id === postID) {
                const comment = i.comments
                for (const key in comment) {
                    if (comment[key].id === commentID) {
                        comment.splice(key, 1)
                    }
                }
            }
        }

    }
    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}
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


