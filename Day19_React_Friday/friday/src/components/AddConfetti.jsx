import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()
const addConfetti = () => {
    jsConfetti.addConfetti({ emojis: ['🥥'], confettiNumber: 50000 })
}

export default addConfetti;