// Comment handling
function addComment(event, commentBoxId) {
  event.preventDefault();

  const form = event.target;
  const name = form.querySelector('input').value;
  const message = form.querySelector('textarea').value;
  const commentBox = document.getElementById(commentBoxId);

  const comment = document.createElement('p');
  comment.innerHTML = `<strong>${name}:</strong> ${message}`;
  commentBox.appendChild(comment);

  form.reset();
}

// Blog search feature
function searchPosts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const posts = document.getElementsByClassName('blog-post');

  for (let post of posts) {
    const title = post.querySelector('h2').textContent.toLowerCase();
    const content = post.querySelector('p').textContent.toLowerCase();
    if (title.includes(input) || content.includes(input)) {
      post.style.display = '';
    } else {
      post.style.display = 'none';
    }
  }
}
