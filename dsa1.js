console.log("problem statement 1");

  // cheecking the sum zero;
  // find the zero pair;
  // retuting the array which sum is zero 
  

   function getSumZeroPair(array , target){
    for(let number of array){
          

       for(let i=0 ; i<array.length; i++){
         
 
        if(number + array[i] === target ){
            return [number , array[i]]
        }
       } 
    }

   }
   const result = getSumZeroPair([-5,-4,-3,-2,0,1,2,3],3)
   console.log(result);









   
  
    
    
    






   
   
   
   

   
   