function solution(input, markers) {
    // Split the string into lines
    let lines = input.split('\n');

    // Process each line
    for (let i = 0; i < lines.length; i++) {
        for (let marker of markers) {
            let index = lines[i].indexOf(marker);
            if (index !== -1) {
                // If marker is found, slice the string to keep only the part before the marker
                lines[i] = lines[i].slice(0, index);
            }
        }
        // Trim whitespace at the end of each line
        lines[i] = lines[i].trim();
    }

    // Join lines back into a single string
    return lines.join('\n');
}