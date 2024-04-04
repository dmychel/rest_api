function randomNum(value) {
    const num = Math.floor(Math.random() * value)
    return num < 1 ? randomNum(value) : num;
}

module.exports = { randomNum }