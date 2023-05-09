function removeChar(str){
    if (str.length >= 3){
        str = str.slice(1,-1)
        return str
    }
    return ""
}
