const div = function(a, b) {
    if (b === 0) {
        return "b must not be 0"
    }
    return a / b;
}

module.exports = div;