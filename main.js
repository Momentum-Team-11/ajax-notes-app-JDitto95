const url = 'http://localhost:3000/notes'
const form = document.getElementById('form')
const notesOutput = document.getElementById('notesOutput')

function listNote(){
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        for (let noteObj of data){
            renderNoteItem(noteObj)
            console.log(data)
        }
    })
    }
form.addEventListener('submit', function(event) {
    event.preventDefault()
    const todoText = document.querySelector('#todo-text').value
    const body = document.querySelector('#todo-body').value
    fetch(url, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: todoText, 
            body: body,
        }),
    })
    .then((res) => res.json())
    .then((data) =>{
        renderNoteItem(data)
    })
})

function renderNoteItem(noteObj) {
    const itemEl = document.createElement('p')
    itemEl.p = noteObj.id
    itemEl.innerHTML = `${noteObj.title}<br>${noteObj.body}<p delete>delete<p> <p edit> Edit<p>
    // <span class="material-icons-outlined"></span>`
    notesOutput.appendChild(itemEl)
}