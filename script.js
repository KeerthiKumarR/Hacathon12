const form = document.querySelector('form');
const input = document.querySelector('input');
const result = document.querySelector('#result');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const username = input.value;
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Not Found') {
                result.innerHTML = 'User not found';
            } 
            else {
                result.innerHTML = `
                    <h2>${data.login}</h2>
                    <p>Followers: ${data.followers}</p>
                    <p>Following: ${data.following}</p>
                `;
            }
        })
        .catch(error => {   
            console.error('Error', error);
            result.innerHTML = 'An error occurred while fetching data';
        });
});

