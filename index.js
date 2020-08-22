class Formatter {
  static capitalize(string){
   // console.log(/^\w/)
    //string[0].toUppercase()
    return string.replace(/^\w/, (c) => c.toUpperCase());
  }
  static sanitize(string){
      return string.replace(/[^a-zA-Z-,', ]/g,"") // global looks at all symbols that DO NOT match with carrot
      
  }
   
  static titleize(string){
    let unless = (condition)=>{!condition}
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let split = string.split(" ")
    let array = []
   
    for(let i=0; i<split.length; i++){
      if (i == 0){
        array.push(split[0].charAt(0).toUpperCase() + split[0].slice(1))
      } else{
        if (exceptions.includes(split[i] )){// if exceptions words include the first letter of split
          console.log("split i element", split[i])
                //return split[i].slice(1) + split[i].slice(1).toLowerCase() + split.slice(1)
                console.log(split[0].toLowerCase())
                //return split[i].toLowerCase() + split.slice(1).join(" ")
                array.push(split[i])
               
              } else { // if it is not included with the exceptions
                array.push(split[i].charAt(0).toUpperCase() + split[i].slice(1)) // array of things is getting an uppercased version plus rest of the word
              }
              
      }
    
    //console.log(split[0]) // was returning first letter
    

  }return array.join(" ")}}
