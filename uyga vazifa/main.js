// 1-task 


// var searchMatrix = function(matrix, target) {
//     let result = "false"
//     for (let i = 0; i < matrix.length; i++) {
//         if (matrix[i].includes(target)) {
//             result = "true"
//         }
//     }
//     return result
// };
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3));


// 2-task 



// let input = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
// let arr = input.split("");
// let word = "NAJOT ta'lim is the best";
// let new_arr = word.split("");
// let result = [];
// console.log(arr,new_arr);
// for (let i = 0; i < new_arr.length; i++) {
//     if (new_arr[i] === " ") {
//         result.push(" ");
//     } else if (arr.includes(new_arr[i])) {
//         result.push(new_arr[i]);
//     }
// }
// if (result.join("") == word) {
//     console.log(result.join(""));
    
// }
// else {
//     console.log(word , "  Bunday so'z  " , input , "  ichida mavjud emas");
// }


// 2-task mukammal usul 


// let input = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest";
// let word = "NAJOT ta'lim is the best";
// let result = []
// let arr = input.slice(19,24)
// result.push(arr)
// arr = input.slice(3,9)
// result.push(arr)
// arr = input.slice(49,51)
// result.push(arr)
// arr = input.slice(44,47)
// result.push(arr)
// arr = input.slice(60,64)
// result.push(arr)
// console.log(result);


// 3-task 


// let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// let array = []
// if (array.length == 4) {
//     array = [[],[],[],[]]
//     for (let i = 0; i < matrix.length; i++) {
//         matrix[0][0]
//     }
// }


// function rotateMatrix(matrix) {
//     const n = matrix.length;
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//         }
//     }
//     for (let i = 0; i < n; i++) {
//         matrix[i].reverse();
//     }
//     return matrix;
// }

// const matrix1 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
// const rotatedMatrix1 = rotateMatrix(matrix1);
// console.log(rotatedMatrix1);

// const matrix2 = [[1,2,3],[4,5,6],[7,8,9]];
// const rotatedMatrix2 = rotateMatrix(matrix2);
// console.log(rotatedMatrix2);


// 4-task 


// let word = "Najot ta'lim is the best"
// let array = word.split(" ")
// console.log(array[array.length - 1].length);


// 5-task 


// let array_1 = [1,2]
// let array_2 = [1,null,3]
// let result = "false"
// let count = 0
// if (array_1.length == array_2.length) {
//     for (let i = 0; i < array_1.length; i++) {
//         if (array_1[i] === array_2 [i]) {
//             count ++
//         }        
//     }
//     if (array_1.length === count) {
//         result = "true"
//     }
// }
// console.log(result);


// 6-task 1-usul


// let obj = {a: 2, b: 5, c: 7}
// let arr = Object.entries(obj)
// let new_arr = arr.map(([key,value])=> `${key}${value}`)
// console.log(new_arr);


// 6-task 2-usul 


// let obj = {a: 2, b: 5, c: 7}
// let arr = []
// for (const key in obj) {
//     arr.push(key + obj[key])
// }
// console.log(
//     arr
// );


// 7-task 


// var findMedianSortedArrays = function(nums1, nums2) {
//     let arr = [...nums1,...nums2]
//     let middleNumber = 0
//     let number1 =  0
//     let number2 =  0
//     if (arr.length % 2 == 1) {
//             middleNumber = (arr.length / 2 ) - 0.5
//             return(arr[middleNumber]);
//         }
//         else{
//             number1 = (arr.length / 2 )
//             number2 = (arr.length / 2 ) - 1
//             middleNumber = (arr[number1] + arr[number2]) / 2
//             return middleNumber
//     }
// };
// console.log(findMedianSortedArrays(nums1 = [1,2], nums2 = [3,4]));


// 8-task 


// var singleNumber = function(nums) {
//     let arr = [...nums]
//     let lastIndex = 0
//     let index = 0
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         lastIndex = arr.indexOf(arr[i])
//         index = arr.lastIndexOf(arr[i])
//         if (lastIndex === index) {
//             result.push(arr[i])
//         }
//         else {
//         }
//     }
//     console.log(result);
// };
// singleNumber( [4,1,2,4,5,63,2,1,3] )



// 8-task 2-usul


// const search = function(nums) {
//     let massiv = [...nums]
//     let new_arr = []
//     let total = []
//     let index = 0
//     for (let i = 0; i < massiv.length; i++) {
//         if(!new_arr.includes(massiv[i])){
//             new_arr.push(massiv[i])
//         }
//         else {
//             total.push(massiv[i])
//         }
//     }
//     for (let g = 0; g < total.length; g++) {
//         index = new_arr.indexOf(total[g])
//         new_arr.splice(index,1)
//     }
//     console.log(new_arr);
// };
// search([4,1,2,1,2,9,5,8,7])