async function getData(url) {
    const result = await fetch(url)
    const json = await result.json()
    return json
}


const searchInput = document.querySelector('#search-input')
const searchButton = document.querySelector('#search-button')
const player = document.querySelector('#player')

searchButton.addEventListener('click', () => {
    searchVideo()
})

async function searchVideo() {
    try {
        const searchAPI = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCat_2WJTJcsdgIkjvuNZ8KuaVtqOyNsuk&q=${searchInput.value}&type=video`
        const data = await getData(searchAPI)
        player.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`
    } catch (error) {
        console.log(error.message)
    }
}
