const state = {
    view: {
        gameBox: document.querySelector('.game')
    },
    values: {
        emojis: ['🧞', '🧞', '🍄', '🍄', '🦄', '🦄', '👑', '👑', '🪷', '🪷', '🌿', '🌿'],
        openCards: []
    }
}

function shuffleCards() {
    state.values.emojis.sort(() => (Math.random() > 0.5) ? 2 : -1)
}

function setCards() {
    for (let k = 0; k < state.values.emojis.length; k++) {
        alert(`${k} - ${state.values.emojis[k]}`)
        let card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = state.values.emojis[k]
        state.view.gameBox.appendChild(card)
    }
}

function main() {
    shuffleCards()
    setCards()
}

main();