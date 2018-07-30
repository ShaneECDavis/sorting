function mergeSort(arr){





}
//split function11
function split(arr){
  let firstLength = Math.floor(arr.length / 2)
  let firstHalf = arr.slice(0, firstLength)
  let secondHalf = arr.slice(firstLength)
  return [firstHalf, secondHalf]
}

function merge(arr1,arr2){

  let rightSide = 0;
  let leftSide  = 0;
  let tempArr = [];

  let totalArrays = (arr1.length) + (arr2.length)

  for(let i=0; i<totalArrays; i++){

    if(arr1[leftSide] < arr2[rightSide]){
       tempArr.push(arr1[leftSide]);


       leftSide++

     }else{
       tempArr.push(arr2[rightSide])
       rightSide++

      //  arr2[rightSide] = arr2[rightSide] || 0
     }

  }
 return tempArr;
}

