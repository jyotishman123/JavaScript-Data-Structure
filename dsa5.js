console.log("dsa 5")
//[1,2,2,1,2,5,7,8,9,3] => Total elements 10;
// Count Largest sum of consecutive Digits

 function findlargest(array,num){
    if(num > array){
        throw new Error("num is not greater than array")
    }else{
        let max=0;
        for(let i=0; i<array.length - num +1; i++ ){
            let temp = 0
               for(let j=0; j<num; j++){
                temp += array[j ]
               }
               if(temp > max){
                max = temp
               }

        }
        return max
    }

 }

let result = findlargest([1,2,2,1,2,5,7,8,9,3],5)
console.log(result)


 
