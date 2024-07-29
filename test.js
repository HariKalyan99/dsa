// //palindrome

// function pal(val){
//     if(typeof(val) === 'number'){
//         let reverse = 0;
//         let temp = val;
    
//         while(temp !== 0){
//             reverse = reverse*10 + temp%10;
//             temp = Math.floor(temp/10);
//         }
//         return reverse === val;
//     }else{
//         let i = 0;
//         let j = val.length - 1;
//         while(i < j){
//             if(val[i] !== val[j]){
//                 return false;
//             }
//             i++;
//             j--;
//         }
//         return true;
//     }
// }


// console.log(pal(10001))


// function numberArray(arr){
//     let res = [];
//     for(let i = 0; i<arr.length; i++){
//         if(typeof(arr[i]) === 'number'){
//             res.push(arr[i])
//         }
//     }
//     return res.sort((a,b) => a - b);
// }


// console.log(numberArray(["a", 3 ,"b", 2 ,"c","d", 1 , 4 ,"e"]))


function longestCommonPrefix(arr){
    let n = arr.length;
    if(n == 0){
        return "";
    }

    if(n == 1){
        return a[0]
    }

    arr.sort((a,b) => a.length - b.length);
    
    let end = Math.min(arr[0].length, arr[n-1].length);
    let i = 0;
    while(i < end && arr[0][i] === arr[n-1][i]){
        i++;
    }

    let res = arr[0].substring(0, i)
    
    return arr[n-1]
}

console.log(longestCommonPrefix(["interstellar", "internet", "internal", "intercept", "termiunal"]))