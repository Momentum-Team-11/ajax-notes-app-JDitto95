const url = 'http://localhost:3000/notes'
const NOTES = document.getElementById('NOTES')
const form = document.getElementById('form')
const notesOutput = document.getElementById('notesOutput')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    const todoText = document.querySelector('#todo-text').value
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            item: todoText,
        }),
    })
    .then((res) => res.json())
    .then((data) =>{

    })
})

function listNote(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for (let noteObj of data){
            renderNoteItem(noteObj)
        }
    })
}
function renderNoteItem(noteObj) {
    const itemEl = document.createElement('p')
    itemEl.p = noteObj.id
    itemEl.innerHTML = `${noteObj.item}<br>${noteObj.body}`
    notesOutput.appendChild(itemEl)
}