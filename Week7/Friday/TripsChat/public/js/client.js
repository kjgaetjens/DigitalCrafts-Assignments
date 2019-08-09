let socket = io()

let chatbox = document.getElementById('chatbox')
let chatMessagesUL = document.getElementById('chatbox-content')
let chatInput = document.getElementById('chat-input')
let chatButton = document.getElementById('chat-button')
let usernameField = document.getElementById('usernamefield')

chatButton.addEventListener('click', () => {
    let message = chatInput.value
    socket.emit('Sent', message)
})

socket.on('Sent', message => {
    let currentDateTime = new Date().toLocaleString()
    let username = usernameField.value
    let messageLI = `<li>${username} ${currentDateTime}: ${message}</li>`
    chatMessagesUL.insertAdjacentHTML('beforeend', messageLI)
    chatbox.scrollTop = chatbox.scrollHeight
})

