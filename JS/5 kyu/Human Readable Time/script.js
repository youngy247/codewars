function humanReadable(seconds) {
    // Calculate hours, minutes and seconds
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor((seconds % 3600) / 60)
    seconds = seconds % 60

    // Convert to 2-digit format
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    // Return human-readable time
    return hours + ':' + minutes + ':' + seconds
}
