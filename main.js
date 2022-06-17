document.querySelector('button').addEventListener('click',apiRequest)

async function apiRequest(){
    const raceName = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-dnd-api.herokuapp.com/api/${raceName}`)
        const data = await response.json()
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}