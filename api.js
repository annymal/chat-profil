import axios from "axios"


export async function sendMessage(text) {
    try {
        const response = await axios.post('http://localhost:3000/message',text)
        return response.data
    }
    catch (error) {
        console.error(error)
    }
}

const text = document.getElementById('text')
const img = document.querySelector('.section__content-chat img')
const span = document.querySelector('.section__content-chat span')

export async function getMessage() {
    try {
        const response = await axios.get('http://localhost:3000/message')
        img.style.display = 'none'
        span.style.display = 'none'
        response.data.map((item) => {
            text.innerHTML = item.value
        })
    }
    catch (e) {
        console.log(e)
    }
}