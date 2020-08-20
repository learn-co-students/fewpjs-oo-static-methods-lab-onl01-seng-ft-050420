class Formatter {
  static capitalize(string) {
   let s = string.split('')
   s[0] = s[0].toUpperCase()
   return s.join('')

  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let splitString = string.split(' ')
    let firstWord = this.capitalize(splitString.shift())

    let splitStringMinusFirstWord = splitString.map( word => {
      switch (word) {
        case 'the':
          return word 
          break; 
        case 'a':
          return word
          break;
        case 'an':
          return word
          break; 
        case 'but':
          return word
          break;
        case 'of': 
        return word
          break;
        case 'and':
          return word
          break;
        case 'for':
          return word
          break;
        case 'at':
          return word
          break;
        case 'by':
          return word
          break;
        case 'from':
          return word
          break;
        default: 
          return this.capitalize(word)
      }
    })
    splitStringMinusFirstWord.unshift(firstWord)
    return splitStringMinusFirstWord.join(' ')
  }
}

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// 1.  Write a method `static capitalize` that takes in a string and capitalizes the
//     first letter.
// 2.  Write a method `static sanitize` that takes in a string and removes all
//     non-alphanumeric characters except for dashes, single quotes and spaces.
// 3.  Write a method `static titleize` that takes in a string and capitalizes all
//     words in a sentence except the, a, an, but, of, and, for, at, by, and from; and
//     always capitalizes the first word.