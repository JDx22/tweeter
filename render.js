
let Renderer = function () {
    let renderPosts= function(posts) {
         $('#posts').empty();   
            for (let post of posts) 
            {
                let $postHtml = $(`<div class="post" data-id="${post.id}" >${post.text} <i class="delete fas fa-trash"></i></div>`)
                $('#posts').append(($postHtml));
                for (let comment of post.comments)
                {
                    let $commentHtml = $(`<div class="comments" data-id="${comment.id}">${comment.text} <i class="delete-comment fas fa-trash"></i></div>`);
                    $postHtml.append($commentHtml);
                }
                let $addCommentHtml= $(`<input type="text" class="comment-input" placeholder="Enter Comment" value=""></input><button class="post-comment">Comment</button>`)
                $postHtml.append($addCommentHtml);

            }

    
        }

    return {renderPosts: renderPosts};
}