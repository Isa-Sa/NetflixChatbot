const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const form = document.getElementById("name-form");
const nameInput = document.getElementById("name-input")


const showMessage = (message, sender) => {

  if (sender === 'user') {
    
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `

  } else if (sender === 'bot') {
    
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  chat.scrollTop = chat.scrollHeight;
}

const greeting = () => {
  showMessage("Hello Friend, what is your name?", 'bot');
}
const handleNameInput = (event) => {
  event.preventDefault()
  
  const name = nameInput.value
  showMessage(name, 'user')
  showMessage(`Hello ${nameInput.value}, I understand, you are done watching a show and now you are looking for something new to watch?`, 'bot') 
  nameInput.value = ''
  inputWrapper.innerHTML = 
    `<button id="yesBtn" type="submit">Yes</button>
    <button id="noBtn" type="submit">No</button>`

    document
    .getElementById('yesBtn')
    .addEventListener('click', () => {
      showMessage('Yes', 'user');
      showMessage('What kind of series would you like to see?', 'bot');
      askForGenre() 
    })

    document
    .getElementById('noBtn')
    .addEventListener('click', () => {
      showMessage('No', 'user')
      showMessage('Come back if you would like a suggestion!', 'bot')
      
    yesBtn.remove();
    noBtn.remove(); 
    })
      
const askForGenre = () => {      
  inputWrapper.innerHTML = // add genre buttons
   `<button id="drama" type="submit">Drama</button>
    <button id="thriller" type="submit">Thriller</button>
    <button id="comedy" type="submit">Comedy</button>`
    document
      .getElementById('drama')
      .addEventListener('click', () => {
        showMessage('Drama', 'user')
        showMessage(`Okay, then I would suggest: <a href="https://www.imdb.com/title/tt4786824/">The Crown</a>`, 'bot');
        setTimeout(() => showMessage('Are you happy with my suggestion?', 'bot'), 2000);
        askForLastUserAnswer()
      
      })
    document
      .getElementById('thriller')
      .addEventListener('click', () => {
        showMessage('Thriller', 'user')
        showMessage(`Okay, then I would suggest: <a href="https://www.imdb.com/title/tt10574558/">Midnight Mass</a>`, 'bot')
        setTimeout(() => showMessage('Are you happy with my suggestion?', 'bot'), 2000);
        askForLastUserAnswer()
      
      })

      document
      .getElementById('comedy')
      .addEventListener('click', () => {
        showMessage('Comedy', 'user')
        showMessage(`Okay, then I would suggest: <a href="https://www.imdb.com/title/tt10062292/?ref_=fn_al_tt_1">Never Have I Ever</a>`, 'bot')
        setTimeout(() => showMessage('Are you happy with my suggestion?', 'bot'), 2000)
        askForLastUserAnswer()
        
      })
    }
// setTimeout for YES/NO buttons 
    const askForLastUserAnswer = () => {
    inputWrapper.innerHTML = 
    `<button id="yesBtn" type="submit">Yes</button>
    <button id="noBtn" type="submit">No</button>`

    
    document
    .getElementById('yesBtn')
    .addEventListener('click', () => {
      showMessage('Yes', 'user');
      showMessage('Great! Get some snacks ready and enjoy!', 'bot');
    yesBtn.remove();
    noBtn.remove();
   
    })

    document
    .getElementById('noBtn')
    .addEventListener('click', () => {
      showMessage('No', 'user')
      showMessage(`Oh no! Check out this list of the best shows on Netflix right now: <a href="https://www.digitaltrends.com/movies/best-shows-on-netflix/">List</a>`, 'bot')
    yesBtn.remove();
    noBtn.remove();
    }) 
      
    } 
}


form.addEventListener('submit', handleNameInput);

setTimeout(greeting, 1000);

