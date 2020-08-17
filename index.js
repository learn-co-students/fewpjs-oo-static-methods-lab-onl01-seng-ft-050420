class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str) {
    return str.replace(/[^0-9a-zA-Z '-]/g, '')
  }
  static titleize(title) {
    const arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    function capitalizeWord(word, i) {
      if (i === 0) return Formatter.capitalize(word)
      else if (arr.includes(word)) return word
      else return Formatter.capitalize(word)
    }
    return title.split(' ').map(capitalizeWord).join(' ')
  }
}
