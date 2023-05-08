function getMiddle(word)
{
    answer = ''
    if (word.length % 2 !== 0){
        answer = word.split("").splice((word.length - 1)/2, 1).join()
    } else if (word.length % 2 === 0){
        answer = word.split("").splice((word.length / 2) - 1, 2).join("")
    }
    return answer
}
