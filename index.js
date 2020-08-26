class Formatter {
  //add static methods here
  
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-'\s/]+/g, '');
  }
  
  static titleize(str){
    function one(e){
      if (!exceptions.find(element => element === e)){ 
        return Formatter.capitalize(e)
      } else{
        return e }
    }
    let exceptions = ['a', 'an', 'but', 'for', 'of', 'and', 'at', 'by', 'from', 'the']
    let string = Formatter.capitalize(str);
    let split = string.split(' ')
    let titleized = split.map(element => one(element));
    return titleized.join(' ');
  }
  
  
  
}