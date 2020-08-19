class Formatter {
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  };

  static sanitize(string){
    return string.replace(/[$@!#^*({]/gi, '')
  }

  static titleize(string){
    const newString = []

    const splitString = string.split(' ')

    for(let i = 0; i < splitString.length; i++){
      if ( splitString[i] !== 'the' && splitString[i] !== 'a' && splitString[i] !== 'an' && splitString[i] !== 'but' && splitString[i] !== 'of' && splitString[i] !== 'and' && splitString[i] !== 'for' && splitString[i] !== 'at' && splitString[i] !== 'by' && splitString[i] !== 'from') {
        newString.push(splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1))
      } else {
        newString.push(splitString[i])
      }
    }
    return newString.join(' ').charAt(0).toUpperCase() + newString.join(' ').slice(1)

  }
}


