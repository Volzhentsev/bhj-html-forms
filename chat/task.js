function botAnswer() {
    answers = ['Ага', 'Что?', 'Отвалите', 'Не звоните нам больше', 'Я устал, я ухожу']
    return answer = answers[Math.floor(Math.random()*answers.length)];
}

function chat() {
    const start = document.getElementsByClassName('chat-widget');

    start[0].addEventListener('click', (e) => {
        start[0].classList.add("chat-widget_active");
    }) 
    
    start[0].addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {
            const inputVal = document.querySelector('.chat-widget__input');
            console.log(inputVal.value)
            if (inputVal.value != '') {
                let date = new Date();
        
                let timeNow = date.getHours() + ":" + date.getMinutes();
    
                const messages = document.querySelector( '.chat-widget__messages' );
    
                messages.innerHTML += `
                  <div class="message message_client">
                    <div class="message__time">${timeNow}</div>
                    <div class="message__text">
                    ${inputVal.value}
                    </div>
                  </div>
                `;
    
                messages.innerHTML += `
                  <div class="message">
                    <div class="message__time">${timeNow}</div>
                    <div class="message__text">
                    ${botAnswer()}
                    </div>
                  </div>
                `;
            }
    
            inputVal.value = '';
        }
    })    
}

chat();
