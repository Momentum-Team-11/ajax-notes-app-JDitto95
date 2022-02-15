const url = 'http://localhost:3000/notes'
const NOTES = document.getElementById('NOTES')
const form = document.getElementById('form')


form.addEventListener('submit', function()) {
    event.preventDefault()
    const todoText = document.querySelector('#todo-text').value
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            item: todoText,
        }),
    })
}

// function(){
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) =>{
//         for (let)
//     })
// }