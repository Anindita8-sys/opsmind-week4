const API = "https://opsmind-week4-4.onrender.com"

async function loadHistory() {

  const res = await fetch(API + "/api/history")
  const data = await res.json()

  const div = document.getElementById("history")
  div.innerHTML = ""

  data.forEach(chat => {
    div.innerHTML += `
      <div>
        <b>Q:</b> ${chat.question}<br>
        <b>A:</b> ${chat.answer}
        <hr>
      </div>
    `
  })
}

async function sendChat() {

  const question = document.getElementById("question").value
  const answer = document.getElementById("answer").value

  await fetch(API + "/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question, answer })
  })

  loadHistory()
}

loadHistory()