function high(words){
    const scores = words.split(' ').map(word => {
        let score = 0;
        for (let i = 0; i < word.length; i++) {
            score += word.charCodeAt(i) - 96
        }
        return score
    })

    const maxScore = Math.max(...scores)
    const maxScoreIndex = scores.indexOf(maxScore)
    return words.split(' ')[maxScoreIndex]
}
