
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const color_classes = ['typewriter-blue', 'typewriter-green', 'typewriter-yellow', 'typewriter-red']
const phrases = ["Digital Technology", "Intuitive Interface", "AI Support"];
const el = document.getElementById("typewriter");
const caret = document.getElementById("caret");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
    while (true) {
        let curWord = phrases[curPhraseIndex];
        //let curColor = color_classes[curPhraseIndex];
        let curColor = color_classes[Math.floor(Math.random() * color_classes.length)];
        caret.classList.add(curColor);
        el.classList.add(curColor);
        for (let i = 0; i < curWord.length; i++) {

            el.innerText = curWord.substring(0, i + 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
            el.innerText = curWord.substring(0, i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);
        caret.classList.remove(curColor);
        el.classList.remove(curColor);
        if (curPhraseIndex === phrases.length - 1) {
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }
    }
};

writeLoop();
