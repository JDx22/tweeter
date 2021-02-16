
let Renderer = function () {
    let renderPosts= function(posts) {
         $('#posts').empty();   
            for (let post of posts) 
            {
                let $postHtml = $(`<div class="post" data-id="${post.id}" >${post.text}</div>`)
                $('#posts').append(($postHtml));
                for (let comment of post.comments)
                {
                    let $commentHtml = $(`<div class="comments" data-id="${comment.id}">${comment.text}</div>`);
                    $postHtml.append($commentHtml);
                }
            }
    
    
        }

    return {renderPosts: renderPosts};
}