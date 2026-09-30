document.querySelector('#postForm').addEventListener('submit', addPost)

function addPost(e) {
    e.preventDefault();

    let fName = document.querySelector('#name-fild').value
    let fage = document.querySelector('#age-fild').value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Accept": "application/json , text/plain , */*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: fName, body: fage })
    }).then((res) => res.json())
        .then((json) => console.log(json))
}