// function bubbleSort(items) {
//   var length = items.length;
//   for (var i = 0; i < length; i++) {
//     //Number of passes
//     for (var j = 0; j < length - i - 1; j++) {
//       //Notice that j < (length - i)
//       //Compare the adjacent positions
//       if (items[j] > items[j + 1]) {
//         //Swap the numbers
//         var tmp = items[j]; //Temporary variable to hold the current number
//         items[j] = items[j + 1]; //Replace current number with adjacent number
//         items[j + 1] = tmp; //Replace adjacent number with current number
//       }
//     }
//   }
//   return items
// }


function bubbleSort(a) {
  var swapped = false;
   while (!swapped){
     swapped = true;
     for (let i = 0; i < a.length - 1; i++) {
       if (a[i] > a[i + 1]) {
         let temp = a[i];
         a[i] = a[i + 1];
         a[i + 1] = temp;
         swapped = false;
        }
      }
  } 
  return a
}