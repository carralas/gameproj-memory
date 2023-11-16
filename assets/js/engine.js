const state = {
    /* views - variáveis para exibição na tela */
    view: {
        gameBox: document.querySelector('.game')
    },
    /* values - variáveis para controle interno */
    values: {
        emojis: ['🧞', '🧞', '🍄', '🍄', '🦄', '🦄', '👑', '👑', '🪷', '🪷', '🌿', '🌿', '🐚', '🐚', '🧚🏽', '🧚🏽'],
        flippedCards: [],
        matchedCards: [],
        rounds: 0
    }
}

function setCards() {
    /* função que cria cada carta */

    for (let k = 0; k < state.values.emojis.length; k++) {
        /* cria o elemento carta */
        let card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = state.values.emojis[k]
        /* determina função para executar sob clique */
        card.onclick = handleClick
        /* insere elemento carta no elemento HTML que o exibirá */
        state.view.gameBox.appendChild(card)
    }
}

function shuffleCards() {
    /* função para embaralhar as cartas */

    state.values.emojis.sort(() => (Math.random() > 0.5) ? 2 : -1)
}

function handleClick() {
    /* função que interpreta a ação após o clique na carta */

    /* checagem para evitar dois cliques na mesma carta */
    if (state.values.flippedCards[0] !== this) {
        if (state.values.flippedCards.length < 2) {
            /* transforma a carta clicada em virada e a insere na lista de cartas viradas */
            this.classList.add('flipped')
            state.values.flippedCards.push(this)
        }

        if (state.values.flippedCards.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }
}

function checkMatch() {
    /* função para conferir se há uma combinação */

    /* contador de rounds incrementa */
    state.values.rounds++

    /* confere se o emoji das cartas é compatível */
    if (state.values.flippedCards[0].innerHTML === state.values.flippedCards[1].innerHTML) {
        /* caso positivo transforma em cartas combinadas */
        state.values.flippedCards[0].classList.add('matched')
        state.values.flippedCards[1].classList.add('matched')
        state.values.matchedCards.push(state.values.flippedCards[0])
        state.values.matchedCards.push(state.values.flippedCards[1])
    } else {
        /* caso negativo vira as cartas novamente */
        state.values.flippedCards[0].classList.remove('flipped')
        state.values.flippedCards[1].classList.remove('flipped')
    }
    /* limpa a lista de cartas viradas */
    state.values.flippedCards = []

    /* caso o número de cartas combinadas seja o mesmo de cartas viradas encerra o jogo */
    if (state.values.matchedCards.length === state.values.emojis.length) {
        alert(`Você venceu com ${state.values.rounds} jogadas!`)
    }
}

function main() {
    shuffleCards()
    setCards()
}

main();