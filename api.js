import axios from "axios";

export async function sendMessage(text) {
  try {
    const response = await axios.post("http://localhost:3000/message", text);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const img = document.querySelector(".section__content-chat img");
const span = document.querySelector(".section__content-chat span");
const chatContainer = document.querySelector(".section__content-chat");

export async function getMessage() {
  try {
    const response = await axios.get("http://localhost:3000/message");
    img.style.display = "none";
    span.style.display = "none";
    chatContainer.style.alignItems = "end";

    response.data.forEach((item) => {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.textContent = item.value;
      chatContainer.appendChild(messageElement);
    });
  } catch (e) {
    console.log(e);
  }
}
