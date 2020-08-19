class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^\w,' -]/g, '')
  }
  static titleize(string) {
    const words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array = string.split(' ').map((word, index) => {
      if (index === 0) {
        return this.capitalize(word)
      } else if (words.includes(word)) {
        return word
      } else {
        return this.capitalize(word)
      }
    })
    return array.join(' ')
  }
}
