console.log("problem statement 2");

//  [-5,-4,-3,-2,0,2,4,6,8];


function findZeroPair(array){
  let left = 0;
  let right = array.length-1;

  while(left < right){
    
     
  let sum = array[left] + array[right];
   

   
  if(sum === 0){
    return [array[left] , array[right]]
  }

 else if(sum>0){
     right-- 
  }

   

    
else if (sum < 0){
    left++;
}    
    

}

}


 const result = findZeroPair([-5,-4,-3,-2,0,2,4,6,8]);

 console.log(result);




 
 
 // while loop is Important
 
 
 let n = 1;


 while(n < 4){
    n++;
    console.log("n")
 }