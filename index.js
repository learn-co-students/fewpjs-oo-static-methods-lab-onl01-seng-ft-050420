class Formatter {
  static capitalize(string){
    let newArray = string.split('')
    newArray[0] = newArray[0].toUpperCase()
    return newArray.join('')
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ']+/g, '');
  }

  static titleize(string){
    let newArray = string.split(' ')
    let array = []
    const noCapList = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (const x in newArray){
      if (x === '0'){
        array.push(this.capitalize(newArray[x]))
      } else if (!noCapList.includes(newArray[x])){
        array.push(this.capitalize(newArray[x]))
      }else {
        array.push(newArray[x])
      }
    }
    return array.join(' ')
  }
}
