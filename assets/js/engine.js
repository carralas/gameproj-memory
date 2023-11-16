const state = {
    view: {
        gameBox: document.querySelector('.game')
    },
    values: {
        emojis: ['🧞', '🧞', '🍄', '🍄', '🦄', '🦄', '👑', '👑', '🪷', '🪷', '🌿', '🌿', '🐚', '🐚', '🧚🏽', '🧚🏽'],
        openCards: []
    },
    actions: {
        matchChecker: setTimeout(checkMatch, 500)
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
    if (state.values.openCards.length < 2) {
        this.classList.add('flipped')
        state.values.openCards.push(this)
    }
    if (state.values.openCards.length === 2) {
        state.actions.matchChecker
    }
}

function checkMatch() {
}

function main() {
    shuffleCards()
    setCards()
}

main();