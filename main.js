import { getMessage, sendMessage } from "./api";

const textarea = document.getElementById("textarea");
const btn = document.getElementById("btn-send");

btn.addEventListener("click", handleKeyPress);

textarea.addEventListener("keydown", handleKeyPress);

async function handleKeyPress(event) {
  const { value } = textarea;
  if (event.type == "click" || event.key === "Enter") {
    event.preventDefault();
    if (textarea.value.trim() === "") {
      btn.classList.add("disabled");
      return;
    }
    btn.classList.remove("disabled");
    try {
      await sendMessage({ value });
      await getMessage();
      textarea.value = "";
    } catch (error) {
      console.error("Ошибка при отправке сообщения", error);
    }
  }
}
