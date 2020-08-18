class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^0-9a-zA-Z '-]/g, '');
  }

  static titleize(sentence) {
    const badWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return sentence.split(' ').map((word, i) => {
      if (i === 0) return this.capitalize(word);
      else if (badWords.includes(word)) return word;
      else return this.capitalize(word);
    }).join(' ')
  }

}