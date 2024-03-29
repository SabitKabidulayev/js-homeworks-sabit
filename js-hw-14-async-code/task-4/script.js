const list = document.querySelector('#list')

const taskHeaderDiv = document.querySelector('#task-header-div')

let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos')

xhr.send()

xhr.onload = function() {
    const response = xhr.response
    data = JSON.parse(response).slice(0, 20)
    data.forEach(element => {
        const liElement = document.createElement('li')
        liElement.innerText = element.title
        list.appendChild(liElement)
    });  
}