const submitBtn = document.getElementById('submitBtn');
const usernameInput = document.getElementById('username');
const avatar = document.getElementById('avatar');
const nameTd = document.getElementById('name');
const blogTd = document.getElementById('blog');
const createdAtTd = document.getElementById('createdAt');

submitBtn.addEventListener('click', () => {
  const username = usernameInput.value;
  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      avatar.innerHTML = `<img src="${data.avatar_url}" alt="Profile Picture">`;
      nameTd.innerText = data.name || 'N/A';
      blogTd.innerText = data.blog || 'N/A';
      createdAtTd.innerText = new Date(data.created_at).toDateString();
    })
    .catch(error => {
      console.error('There was a problem fetching the data:', error);
    });
});