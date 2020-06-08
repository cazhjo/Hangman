let words = ['päron', 'äpple', 'åsna', 'google', 'trollkarl'];

const getRandomWord = () =>{
    var index = Math.floor(Math.random() * words.length );
    return words[index];
}

export default getRandomWord;