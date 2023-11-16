const state = {
    view: {
        gameBox: document.querySelector('.game')
    },
    values: {
        emojis: ['🧞', '🧞', '🍄', '🍄', '🦄', '🦄', '👑', '👑', '🪷', '🪷', '🌿', '🌿', '🐚', '🐚', '🧚🏽', '🧚🏽'],
        flippedCards: [],
        matchedCards: [],
        rounds: 0
    }
}

function setCards() {
    for (let k = 0; k < state.values.emojis.length; k++) {
        let card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = state.values.emojis[k]
        card.onclick = handleClick
        state.view.gameBox.appendChild(card)
    }
}

function shuffleCards() {
    state.values.emojis.sort(() => (Math.random() > 0.5) ? 2 : -1)
}

function handleClick() {
    if (state.values.flippedCards[0] !== this) {
        if (state.values.flippedCards.length < 2) {
            this.classList.add('flipped')
            state.values.flippedCards.push(this)
        }
        console.log(state.values.flippedCards)
        if (state.values.flippedCards.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }
}

function checkMatch() {
    state.values.rounds++

    if (state.values.flippedCards[0].innerHTML === state.values.flippedCards[1].innerHTML) {
        state.values.flippedCards[0].classList.add('matched')
        state.values.flippedCards[1].classList.add('matched')
        state.values.matchedCards.push(state.values.flippedCards[0])
        state.values.matchedCards.push(state.values.flippedCards[1])
    } else {
        state.values.flippedCards[0].classList.remove('flipped')
        state.values.flippedCards[1].classList.remove('flipped')
    }
    state.values.flippedCards = []

    if (state.values.matchedCards.length === state.values.emojis.length) {
        alert(`Você venceu com ${state.values.rounds} jogadas!`)
    }
}

function main() {
    shuffleCards()
    setCards()
}

main();