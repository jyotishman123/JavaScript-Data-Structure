console.log("problem Statement 3");


// string Anagram

// "hellow" -> "llheo"

 
 function isAnagram(string1,string2){
    if(string1.lenght!== string2.lenght){
        return false
    }
   
    let counter = {}
    for(let letter of string1){

       counter[letter] = ( counter[letter] || 0 ) + 1
         

    }
    console.log(counter)
    
    for(let items of string2){
          if(!counter[items]){
            return false
          }
          counter[items]-=1
          
         
         
     
     
    }
    return true

 }

 const chrck = isAnagram("hello","llheo")

 console.log(chrck)
 

  
  
  
  
  
  


 console.log(1 || 0)