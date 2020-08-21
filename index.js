class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
//the, a, an, but, of, and, for, at, by, and from
  static titleize(string){
    let title = [];
    let forbidden = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let cap = string[0].toUpperCase() + string.slice(1)
    
    cap.split(' ').forEach(word => {
      if (!forbidden.includes(word)) {
          title.push(word[0].toUpperCase() + word.slice(1))
      } else {
          title.push(word)
      }
    })
      return title.join(' ')
   }
}