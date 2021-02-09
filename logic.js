const Tweeter = function () {
    let postIdCounter=2,commentIdCounter=6;
    
    let _posts = [
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
    const getPosts= function() {
        return _posts;
    }
    const addPost = function(text) {
        _posts.push({
            text: text,
            id:`p${++postIdCounter}`,
            comments:[]
        })
    } 
    const removePost = function(postId) {
        let i=0;
        for (;i<_posts.length  && _posts[i].id!==postId ;i++  ) ;
        if (i===_posts.length)
            return false;
        else
        {
            _posts.splice(i,1);
            return true;
        }
    }
    const addComment = function(text,postId) {
        let i=0;
        for (;i<_posts.length  && _posts[i].id!==postId ;i++  ) ;
        if (i===_posts.length)
            return false;
        else
        {
            _posts[i].comments.push({
                id: `c${++commentIdCounter}`,
                text:text
            })
            return true;
        }    
    }
    const removeComment= function(postId,commentId) {
        let i=0;
        for (;i<_posts.length  && _posts[i].id!==postId ;i++  ) ;
        if (i===_posts.length)
            return false;
        else
        {
            let ii=0;
            for (;ii<_posts[i].comments.length && _posts[i].comments[ii].id!==commentId;ii++);
            if (ii===_posts[i].comments.length)
                return false;
            else {
                _posts[i].comments.splice(ii,1);
                return true;
            }    
        }
    }
    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment:addComment,
        removeComment:removeComment
    }
}