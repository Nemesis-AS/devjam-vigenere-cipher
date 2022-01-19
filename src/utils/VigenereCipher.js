export function encrypt(text, key) {
    if (!text || !key) return "";

    const formattedKey = formatKey(key, text.length).toUpperCase();

    return text.toUpperCase().split("").map((char, idx) => {
        if (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 91) return char;
        return String.fromCharCode(((char.charCodeAt(0) + formattedKey.charCodeAt(idx) - 130) % 26)  + 65);
    }).join("");
}

export function decrypt(text, key) {
    if (!text || !key) return "";

    const formattedKey = formatKey(key, text.length).toUpperCase();

    return text.toUpperCase().split("").map((char, idx) => {
        if (char.charCodeAt(0) < 65 || char.charCodeAt(0) > 91) return char;
        return String.fromCharCode(((char.charCodeAt(0) - formattedKey.charCodeAt(idx)  + 26) % 26) + 65)
    }).join("");
}

function formatKey(key, length) {
    let times = Math.floor(length / key.length);
    let remainder = length % key.length;

    return key.repeat(times) + key.slice(0, remainder);
}