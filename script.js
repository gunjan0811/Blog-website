function addComment(postId) {
    const name = document.getElementById(`name${postId}`).value;
    const message = document.getElementById(`message${postId}`).value;
    const commentList = document.getElementById(`comments${postId}`);
  
    if (name && message) {
      const comment = document.createElement("p");
      comment.innerHTML = `<strong>${name}:</strong> ${message}`;
      commentList.appendChild(comment);
  
      // Clear inputs
      document.getElementById(`name${postId}`).value = "";
      document.getElementById(`message${postId}`).value = "";
    } else {
      alert("Please enter your name and comment!");
    }
  }
  