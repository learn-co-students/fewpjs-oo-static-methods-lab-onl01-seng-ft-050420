class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^\w,' -]/g, '')
  }
  static titleize(string) {
    let givenWords = string.split(" ")
    let badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titleizedSentence = givenWords.map((word, index) => {
      if (index === 0) {
        return this.capitalize(word)
      } else if (badWords.includes(word)) {
        return word
      } else {
        return this.capitalize(word)
      }
    }).join(" ")
    return titleizedSentence
  }
}