import { getMessage, sendMessage } from "./api"

const textarea = document.getElementById('textarea')
const btn =  document.getElementById('btn-send')

 btn.addEventListener('click', async() => {
    const {value} = textarea
    try {
        const response = await sendMessage({value})
        await getMessage()

     }
     catch(error) {
        console.error('Ошибка при отправке сообщения', error)
     }
 })
 
 textarea.addEventListener('keydown', handleKeyPress)

 async function handleKeyPress(event) {
    const {value} = textarea
    if (event.key === 'Enter') {
        try {
            const response = await sendMessage({value})
            await getMessage()
    
         }
         catch(error) {
            console.error('Ошибка при отправке сообщения', error)
         }
    }
 }
