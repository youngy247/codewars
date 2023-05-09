function spinWords(str){


    const words = str.split(' ')


    const reversedWords = words.map((word) => {
        if (word.length >= 5) {
            return word.split('').reverse().join('')
        }
        return word
    })


    const reversedString = reversedWords.join(' ')


    return reversedString
}
