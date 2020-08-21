class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  };

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  };

  static titleize(string){
    let arr = string.split(' ');
    let arrWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newArr = arr.map(function(w){
      if(!arrWords.includes(w) || arr.indexOf(w)===0){
        return  w.charAt(0).toUpperCase() + w.slice(1)
        } 
        else {
          return w
        }
        
      }
      )
      
    
    return newArr.join(" ")

  };
}