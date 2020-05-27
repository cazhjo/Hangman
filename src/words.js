let words = ['päron', 'äpple', 'åsna', 'google', 'trollkarl'];

const getRandomWord = () =>{
    var index = getRndInteger(0, words.length - 1);
    return words[index];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

export default getRandomWord;