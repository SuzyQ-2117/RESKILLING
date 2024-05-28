import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti()
const AddConfetti = ({ text }) => {
    jsConfetti.addConfetti({
        emojis:[text],
        confettiNumber:12,
        emojiSize:50,
    })
}

export default AddConfetti;