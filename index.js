class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(str) {
    const noCap = ["a" , "an", "but", "of", "and", "for", "at", "by", "from", "the"];
    const words = str.split(" ");
    words[0] = this.capitalize(words[0]);
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      if (!noCap.includes(word)) words[i] = this.capitalize(word);
    }
    return words.join(" ");
  }
}