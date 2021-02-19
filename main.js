const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

let post = function(e) {
    tweeter.addPost($('#input').val());
    renderer.renderPosts(tweeter.getPosts())
}

$('#container').on('click','.delete' ,function(e) {
    tweeter.removePost($(this).closest('.post').data().id);  
    renderer.renderPosts(tweeter.getPosts())
  
})
$('#container').on('click','.post-comment',function(e){ 
    tweeter.addComment($(this).closest('.post').find('.comment-input').val(),$(this).closest('.post').data().id)
    renderer.renderPosts(tweeter.getPosts())
})
$('#container').on('click','.delete-comment',function(e){ 
    tweeter.removeComment( $(this).closest('.post').data().id,   $(this).closest('.comments').data().id);
    renderer.renderPosts(tweeter.getPosts())

})