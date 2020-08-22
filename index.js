class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z-' ]+/g, '');
  }

  static titleize(sentence) {
    const sentenceArr = sentence.toLowerCase().split(' ');
    const skipThisWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const titleizedArr = sentenceArr.map((word, index) => {
      if(index === 0) {
        return this.capitalize(word);
      } else if(skipThisWords.some(el => el === word)) {
        return word;
      } else {
        return this.capitalize(word);
      };
    })
    return titleizedArr.join(' ');
  }
}