function solution(s) {
    let result = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            result += ' ' + s[i]
        } else {
            result += s[i]
        }
    }
    return result
}
