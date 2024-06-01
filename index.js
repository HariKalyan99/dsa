// Write a program to tell if a given string can be a palindrome or not?
// Input - “racecar”
// Output - True
// Input - “river”
// Output - False

// const { access } = require("fs");

// function pal(str){
//   // return str
//   let i = 0;
//   let j = str.length - 1;
//   while(i<j){
//     if(str[i] !== str[j]){
//       console.log(str[i], str[j])
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true
// }

// console.log(pal("nitin"))

// function numberArray(arr){
//   // let numberMap = new Map();
//   let ans = [];
//   for(let i = 0; i<arr.length; i++){
//     if(typeof arr[i] == "number"){
//       ans.push(arr[i])
//     }
//   }
//   return ans;
// }

// console.log(numberArray(["a", 1 ,"b", 2 ,"c","d", 3 , 4 ,"e"]))

// function pal(str){
//   let s = 0;
//   let e = str.length -1;
//   while(s < e){
//     if(str[s] !== str[e]){
//       return false;
//     }
//     s++;
//     e--;
//   }
//   return true
// }
// console.log(pal("racecar"))

// Given an array of words, write a function to find the longest word that starts with the longest common prefix shared among the words in the array. If there is no common prefix, the function should return an empty string and if there are words with common prefix and same length, return all the words with the same length.
// Input - ["flower", "flow", "flight"]
// Output - “flower”, “flight”
// Input - ["dog", "racecar", "car"]
// Output - “ “
// Input - ["test", "test", "test"]
// Output - “test”
// Input - [ ] - Empty array
// Output - “ “
// Input - ["interstellar", "internet", "internal", "intercept"]
// Output - “interstellar”

// function longestCommonPrefix(arr){
//   let n = arr.length;
//   if(n == 0){
//     return "";
//   }

//   if(n == 1){
//     return a[0];
//   }
//   arr.sort((a,b) => a.length - b.length);
//   let end = Math.min(arr[0].length , arr[n-1].length)
//   let i = 0;
//   while(i < end && arr[0][i] == arr[n-1][i]){
//     i++
//   }

//   let pre = arr[0].substring(0,i);

//   let arr1 = []
//   for(let i = 0; i<n; i++){
//     if(pre == arr[i].substring(0, pre.length)){
//       arr1.push(arr[i])
//     }
//   }

//   return arr1[arr1.length-1]
// }

// console.log(longestCommonPrefix(["interstellar", "internet", "internal", "intercept", "termiunal"]))

// Write a program to reverse a string. Any string input can be given.

// Write a function to remove all integer values from an array that contains various data types. The function should accept an array as input and return a new array that excludes any integer elements.
// Input - [1, "apple", 2.5, 3, "banana"]
// Output - ["apple", 2.5, "banana"]
// Input - [10, 20, "orange", "water", 30.1]
// Output - ["orange", "water", 30.1]

// Write a program that receives a list of words and returns a list of unique anagrams from that list. Each group of anagrams should be represented only once in the output.
// Input - ["listen", "enlist", "google", "gooegl", "inlets", "banana"]
// Output - [["listen", "enlist", "inlets"], ["google", "gooegl"],[ 'banana' ]]
// Input - ["race", "care", "dear", "dare", "read"]
// [["race", "care"], ["dear", "dare", "read"]]

// function sortword(word){
//   return word.split("").sort().join("");
// }

// function anagrams(list){
//   // return list
//   let anagramList = []
//   for(let i = 0; i<list.length; i++){
//     anagramList.push(sortword(list[i]))
//   }

//   let anagramMap = new Map();
// let ans = [];

//   for(let i = 0; i<list.length; i++){
//     if(anagramMap.has(anagramList[i])){
//       ans.push([anagramMap.get(anagramList[i])])
//     }else{
//       anagramMap.set(anagramList[i], list[i])
//     }
//   }

//   console.log(anagramList)
// }

// console.log(anagrams(["listen", "enlist", "google", "gooegl", "inlets", "banana"]))

//practie!!!
// function naturalSum(n){
//   if(n == 0){
//     return 0;
//   }
//   return n+naturalSum(n-1);
// }

// console.log(naturalSum(10))

// function leapYear(n){
//   if(n%4 == 0 && n%100 != 0 || n%400 == 0){
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(leapYear(2010))

// function findIndexOf(n, arr, x){
//   for(let i = 0; i<n; i++){
//     if(arr[i] == x){
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findIndexOf(5, [0,3,4,2,1], 10))

// function checkMagicSquare(n, matrix){
//   let commonSum = 0;
//   for(let i = 0; i<n; i++){
//     commonSum+=matrix[i][i];
//   }

//   for(let i = 0; i<n; i++){
//   let rowSum = 0;
//     for(let j = 0; j<n; j++){
//       rowSum+=matrix[i][j]
//     }
//     if(rowSum !== commonSum){
//       return false;
//     }
//   }

//   for(let i = 0; i<n; i++){
//     let colSum = 0;
//     for(let j = 0; j<n; j++){
//       colSum+=matrix[j][i]
//     }
//     if(colSum !== commonSum){
//       return false;
//     }
//   }

//   let primaryDiagonal = 0;  let secondaryDiagonal = 0;
//   for(let i = 0; i<n; i++){
//     primaryDiagonal+=matrix[i][i];
//     secondaryDiagonal+=matrix[i][n-1-i];
//   }

//   if(primaryDiagonal !== commonSum || secondaryDiagonal !== commonSum){
//     return false;
//   }

//   return true;
// }

// console.log(checkMagicSquare(3, [[4,9,2], [3,4,7], [8,1,6]]))

// function sortArr(arr){
//   return arr.sort()
// }
// console.log(sortArr(['abc','abd','ab', 'a']))

// function capitalize(str){
// let ans  = "";
//   let diff = 'a'.charCodeAt() - 'A'.charCodeAt()

//   for(let i = 0; i<str.length; i++){
//     if(i == 0 && str[i] !== " " || str[i-1] == " " && str[i] !== " "){
//       if(str[i] >= 'a' && str[i] <= 'z'){
//         ans+=String.fromCharCode(str[i].charCodeAt() - diff)
//       }else{
//         ans+=str[i]
//       }
//     }else{
//       ans+=str[i]
//     }
//   }

//   return ans
// }

// console.log(capitalize('the quick Brown .... fox jumps over The lazy dog'))

// console.log(String.fromCharCode(65));
// console.log("hello".charCodeAt(1))

// function searchTarget(N, A, X){
//   let s = 0;
//   let e = N-1;
//   while(s < e){
//     let mid = Math.floor((s+e)/2);
//     if(A[mid] < X){
//       s = mid + 1;
//     }else if(A[mid] > X){
//       e = mid - 1;
//     }else{
//       return mid;
//     }
//   }
//   return -1
// }

// console.log(searchTarget(5, [1,3,5,7,13], 7))

// function distinctNumberBasic(n, nums){
//   let set = [...new Set(nums)];
//   return set.length;
// }

// console.log(distinctNumberBasic(5, [2,3,2,2,3]))

// function intersectionOfTwoArraysBasic(n, nums1, m, nums2){
//   let map = new Map();
//   for(let i = 0; i<n; i++){
//     if(map.has(nums1[i])){
//       map.set(nums1[i], map.get(nums1[i]) + 1)
//     }else{
//       map.set(nums1[i], 1)
//     }
//   }

//   let arr = [];
//   for(let i = 0; i<m; i++){
//     if(map.has(nums2[i])){
//       arr.push(nums2[i])
//       map.set(nums2[i], map.get(nums2[i]) - 1);
//     }else{
//       map.set(nums2[i], 1)
//     }
//   }
//   return arr
// }

// console.log(intersectionOfTwoArraysBasic(4, [1,2,2,1], 3, [2,2,1]))

// function uniqueWords(n, s){
//   let set = [...new Set(s)]
//   return set.length;
// }

// console.log(uniqueWords(7, ['Java', 'is', 'great', "Grails", 'is', 'also', "great"]))

// function mostFrequent(s){
//   let map = new Map();

//   for(let i = 0; i<s.length; i++){
//     if(map.has(s[i])){
//       map.set(s[i],map.get(s[i])+1)
//     }else{
//       map.set(s[i], 1)
//     }
//   }

//   let freqStr = "";
//   let asciiVal = 99999;
//   let maxNum = 0;
//   for(let [key,value] of map){
//     if(value > maxNum && key.charCodeAt() < asciiVal){
//       maxNum = value;
//       freqStr = key;
//       asciiVal = key.charCodeAt();
//     }
//   }

//   return ([freqStr, maxNum])
// }

// console.log(mostFrequent("StatEmEnts areeEeE unique."))

// function nthFibonacciNumber(n){
//   if(n == 0){
//     return 0;
//   }else if(n == 1 || n == 2){
//     return 1;
//   }

//   return nthFibonacciNumber(n-1) + nthFibonacciNumber(n-2) + nthFibonacciNumber(n-3)
// }

// console.log(nthFibonacciNumber(10))

// function factorial(n){
//   if(n == 0){
//     return 1
//   }
//   return factorial(n-1)*n;
// }

// console.log(factorial(3))

// function gcdBasic(a, b){
//   if(b == 0){
//     return a;
//   }

//   return gcdBasic(b, a%b)
// }

// console.log(gcdBasic(8,20))

// console.log(20%8)

// function isPrime(n){
//   for(let i = 2; i*i<=n; i++){
//     if(n%i == 0){
//       return false
//     }
//   }
//   return true;
// }

// function countPrimeBasic(n){
//   let count=0;
//   for(let i = 2; i<n; i++){
//     if(isPrime(i)){
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countPrimeBasic(10))

// function binarySearch(A, X){
//   let s = 0;
//   let e = A.length - 1;

//   while(s <= e){
//     let mid = Math.floor((s+e)/2);

//     if(A[mid] < X){
//       s = mid + 1;
//     }else if(A[mid] > X){
//       e = mid - 1;
//     }else{
//       return [A.indexOf(A[mid]), A.lastIndexOf(A[mid])];
//     }
//   }
//   return [-1,-1]
// }

// console.log(binarySearch([1,2,2,2,5,6], 2))

// function firstOccurences(A,L,H, X,N){
//       console.log("firstOccurences", "A:" + A,"L:"+L,"H:"+H, "X:"+X,"N:"+N)
//       if(H >= L){
//             let mid = L + Math.floor((H-L)/2);
//               console.log(mid)
//             if((mid == 0 || X > A[mid - 1]) && A[mid] == X){
//               console.log(mid , X , A[mid - 1] , A[mid])
//                   return mid;
//             }else if(X > A[mid]){
//               console.log(X , A[mid])
//                   return firstOccurences(A, (mid + 1), H, X, N);
//             }else{
//                   return firstOccurences(A, L, (mid - 1), X, N)
//             }
//       }
//       return -1;
// }
// function lastOccurences(A,L,H, X,N){
//   console.log("lastOccurences", "A:" + A,"L:"+L,"H:"+H, "X:"+X,"N:"+N)
//       if(H >= L){
//             let mid = L + Math.floor((H - L)/2);
//         console.log(mid)
//             if((mid == N-1 || X < A[mid + 1]) && A[mid] == X){
//               console.log(mid , X , A[mid - 1] , A[mid])
//                   return mid;
//             }else if(X < A[mid]){
//               console.log(X , A[mid])
//                   return lastOccurences(A, L, (mid - 1), X, N)
//             }else{
//                   return lastOccurences(A, (mid + 1), H, X, N)
//             }
//       }
//       return -1;
// }

// function findFirstAndLastPositionOfElementInSortedArray(nums, target) {
//       let low = 0;
//       let high = nums.length - 1;
//       let n = nums.length
//       return [firstOccurences(nums, low, high, target, n), lastOccurences(nums, low, high, target, n)];
// }

// console.log(findFirstAndLastPositionOfElementInSortedArray([1 ,2 ,2 ,3 ,4, 4], 4))

// function mergeStrings(str1, str2){
//       let i = 0;
//       let j = 0;

//       let ans = "";
//       while(i < str1.length && j < str2.length){
//             ans+=str1[i];
//             ans+=str2[j];
//             i++;
//             j++;
//       }

//       while(i < str1.length){
//             ans+=str1[j];
//             i++
//       }

//       while(j < str2.length){
//             ans+=str2[j];
//             j++;
//       }

//       console.log(ans)
// }

// console.log(mergeStrings("hello", "worldbaby"))

//  Create a JavaScript function that rearranges a given string so that all vowels are at the start and all consonants are at the end.

// console.log(rearranged); // Output: aebcd

// function rearrangeString(str) {

//     let vowels = 0; 
      
//       for(let i = 0; i<str.length; i++){
//             if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//                   vowels++
//             }
//       }
//       return vowels
// }
// let inputString = "bcade";
// let rearranged = rearrangeString(inputString);

// console.log(rearranged);

// function kadaneAlgo(arr) {
//   let currentSum = arr[0];
//   let maxSum = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//   currentSum = Math.max(arr[i], currentSum+arr[i]);
//   maxSum = Math.max(currentSum, maxSum)
//   }
//   return maxSum;
// }

// console.log(kadaneAlgo([-2,1, -3, 4, -1, 2, 1, -5, 4]));

// 1
// 0 1
// 1 0 1
// 0 1 0 1

// Given n = 4;

// function pattern(n) {
//       let start = 1;
//       for (let i = 0; i <= n; i++) {
//             i % 2 === 0 ? (start = 0) : (start = 1);
//             let row = "";
//             for (let j = 1; j <= i; j++) {
//                   row += start;
//                   start = 1 - start;
//             }
//             console.log(row);
//       }
// }

// pattern(4);
// console.log(1%2)


// encoded string


// function decodeStr(str) {
//       let result = "";
//       for(let i = 0; i<str.length; i++){
//             if(str[i] !== "]"){
//                   result+=str[i];
//             }else{
//                   let temp = "";
//                   while(result.length > 0 && result[result.length-1] !== "["){
//                         temp = result[result.length-1] + temp;
//                         result = result.slice(0, -1);
//                   }

//                   result = result.slice(0, -1);

//                   let num = "";
//                   while(result.length > 0 && !isNaN(result[result.length-1])){
//                         num = result[result.length - 1] + num;
//                         result = result.slice(0, -1)
//                   }

//                   let intNum = parseInt(num);
//                   while(intNum--){
//                         result+=temp;
//                   }
//             }
//       }
//             return result;
      
            
      
// }

// console.log(decodeStr("3[a2[bc]]"))

// function remix(str, arr){
//       let res = [];

//       for(let i = 0; i<arr.length; i++){
//             res[arr[i]] = str[i];
//       }
//       return res
// }

// console.log(remix("abcd", [0, 3, 1, 2]));



// 3) You are given a string S, and a list of words L i.e array/vector of strings (Words in list L are all of the same length). Find the starting indices of the substrings in string S, which contains all the words present in list L. The order of words of list L appearing inside string S does not matter i.e if string S is “barfooapplefoobar” and list of words (L) is [“foo”, “bar”] then we have to look for substrings “foobar”, “barfoo” in string S. Note : Words inside the list L can repeat. 

// // Example usage:
// const S = "barfooapplefoobar";  
// const L = ["foo", "bar"];
// console.log(findSubstringIndices(S, L));   //Output: [0,11]
// let ans = S.includes("barfoo")
// console.log(S.substring(0, L[0].length*L.length))





// function findSubstringIndices(S, L) {
//     let wordLength = L[0].length;
//       let noOfWords = L.length;
//       let indices = [];

//       for(let i = 0; i<=S.length - wordLength*noOfWords; i++){
//             const substring = S.substr(i, wordLength*noOfWords);
//             console.log(substring);
//             let temp = [];

//             for(let j = 0; j<noOfWords; j++){
//                   temp.push(substring.substr(j*wordLength, wordLength));
//             }

//             const sortedL = L.slice().sort();
//             const sortedTemp = temp.slice().sort();

//             if(sortedL.join('') === sortedTemp.join('')){
//                   indices.push(i)
//             }
//       }

//       return indices;
// }




// const S = "barfooapplefoobar";  
// const L = ["foo", "bar"];
// console.log(findSubstringIndices(S, L)); 

// function decodeString(str){
//       let result = "";
//       for(let i = 0; i<str.length; i++){
            
//             if(str[i] !== "]"){
//                   result+=str[i]
//             }else{
//                   let temp = "";
//                   console.log(result)
//                   while(result.length > 0 && result[result.length - 1] !== "["){
//                         temp = result[result.length - 1] + temp;
//                         result = result.slice(0, -1);
//                   }

//                   result = result.slice(0, -1);
//                   let num = "";
//                   while(result.length > 0 && !isNaN(result[result.length - 1])){
//                         num = result[result.length - 1] + num;
//                         result = result.slice(0, -1);
//                   }

//                   let intNumber = parseInt(num);

//                   while(intNumber--){
//                         result+=temp;
//                   }
//             }
//       }

//       return result;
// }

// console.log(decodeString("3[a2[bc]]"))


// function allVowelsAtStart(str){
//       let vowels = "";
//       let consonants = "";

//       for(let i = 0; i<str.length; i++){
//             if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//                   vowels+=str[i];
//             }else{
//                   consonants+=str[i]
//             }
//       }

//       return vowels.concat(consonants)
// }
// console.log(allVowelsAtStart("bcade"))


// function ipAddress(ip){
      
//       let ips = [];
//       if(ip.length === 10){
//             ips.push(`${ip.slice(0, 3)}.${ip.slice(3, 7)}.${ip.slice(7)}`);                       ips.push(`${ip.slice(0, 3)}.${ip.slice(3, 6)}.${ip.slice(6)}`);
//             ips.push(`${ip.slice(0, 4)}.${ip.slice(4, 7)}.${ip.slice(7)}`);

//       }
//       return ips;
// }

// console.log(ipAddress("1234878012"))

// function pattern(n){
//       let start = 0;
//       for(let i = 0; i<=n; i++){
//             i%2 === 0 ? start = 0 : start = 1;
//             let row = "";
//             for(let j = 1; j<=i; j++){
//                   row+=start + " ";
//                   start = 1 - start;
//             }
//             console.log(row);
//       }   

      
// }

// console.log(pattern(4))

// function abcde(str){
//       for(let i = 0; i<str.length; i++){
//             let firstLetter = str[i];
//             let row = "";
//             for(let j = 0; j<=i; j++){
//                   row+=firstLetter;
//             }
//             console.log(row)
//       }
// }

// console.log(abcde("ABCDE"))

// function star(s){
//       for(let i = 0; i<5; i++){
//             let st = s;
//             let row = "";
//             for(let j = 0; j<=i; j++){
//                   row+=st
//             }
//             console.log(row)
//       }

//       for(let i = 4; i>=0; i--){
//             let st = s;
//             let row = "";
//             for(let j = 0; j<=i; j++){
//                   row+=st;
//             }
//             console.log(row)
//       }
// }

// console.log(star('*'))


// function numPattern(n){
//       for(let i = n; i>=1; i--){
//             let num = i;
//             let row = "";
//             for(let j = 1; j<=i; j++){
//                   num = j;
//                   row+=num
//                   num--
//             }

//             console.log(row)
//       }
// }

// console.log(numPattern(5))


// function trianglePattern(s){
//       let n = 5;
//       let rows = "";

//       for(let i = 1; i<=n; i++){
//             for(let space = 1; space<=n-i; space++){
//                   rows+=" ";
//             }

//             for(let num = 1; num <= 2*i - 1; num++){
//                   rows+=num
//             }

//             rows+="\n"
//       }

//       console.log(rows)
// }

// console.log(trianglePattern("ABCDE"))

// console.log(0%2)


// function maxProfit(money, buyPrices, sellPrices){
//      let maxProfit = 0;
//       for(let i = 0; i<buyPrices.length; i++){
//             if(buyPrices[i] <= money){
//                   let profit = sellPrices[i] - buyPrices[i]  ;
//                   maxProfit = Math.max(profit, maxProfit)
//             }
//       }
//       return maxProfit
// }

// console.log(maxProfit(20, [5, 10,2], [2,1,10]))


// function maxProfitOfStock(prices){
//       let minPrice = Infinity;
//       let maxProfit = 0;

//       for(let i = 0; i<prices.length; i++){
//             minPrice = Math.min(minPrice, prices[i]);
//             maxProfit = Math.max(maxProfit, prices[i] - minPrice)
//       }

//       return maxProfit
// }

// console.log(maxProfitOfStock([7,1,5,3,6,4]))


// function kadaneAlgo(nums){
//       let currentSum = nums[0];
//       let maxSum = nums[0];
//       let arr = [];

//       for(let i = 1; i<nums.length; i++){
//             currentSum = Math.max(nums[i], currentSum + nums[i]);
//             maxSum = Math.max(currentSum, maxSum)
//       }

//       return arr;
// }

// console.log(kadaneAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// let arr = [12,10,14];
// let k = 3;
// let result = minimizeSumAfterOperations(arr, k);
// console.log("Minimized sum after", k, "operations:", result);  


// function minimizeSumAfterOperations(arr, k){
//       arr.sort((a,b) => a - b)
//       for(let i = 0; i<k; i++){
//             let largest = arr.pop();
//             let newEle = Math.ceil(largest/2);
//             insertInSortedOrder(arr, newEle);
//       }


//       return arr.reduce((acc, initial) => acc+initial, 0)
// }


// function insertInSortedOrder(arr, newEle){
//       // console.log(arr, newEle)
//       let i = 0;
//       while(i < arr.length && arr[i] < newEle){
//             i++;
//       }

//       arr.splice(i, 0, newEle)
//       console.log(arr)
// }




// function formTwoNumbers(arr){
//       let num1 = 0;
//       let num2 = 0;
//       arr.sort((a, b) => a - b)

//       for(let i = 0; i<arr.length; i++){
//             if(i%2 === 0){
//                   num1 = num1 * 10 + arr[i];
//             }else{
//                   num2 = num2 * 10 + arr[i]
//             }
//       }

//       return [num1, num2]
// }

// console.log(formTwoNumbers([6,8,4,5,2,3]))

// function root(dictionary, sentence){
//       let str = sentence.split(" ");
  
//       for(let i = 0; i<str.length; i++){
//             let word = str[i];
//             for(let j = 0; j<dictionary.length; j++){
//                   if(dictionary[j] === word.substr(0, dictionary[j].length)){
//             str[i] = word.substr(0, dictionary[j].length);
                        
                        
                        
//                   }
//             }
//       }

//       return str.join(" ");
// }

// console.log(root(["cat", "bat", "rat"], "the cattle was rattled by the battery"))

// console.log("hello".substr(0, 3))

// console.log("the".substr(0, 3))

// function countValidTriplet(arr){
//       let map = new Map();

//       for(let i = 0; i<arr.length; i++){
//             if(map.has(arr[i])){
//                   map.set(arr[i], map.get(arr[i]) + 1);
//             }else{
//                   map.set(arr[i], 1)
//             }
//       }

//       let count = 0;
//       for(let i = 0; i<arr.length; i++){
//             let num = arr[i];
//             for(let j = i+1; j<arr.length; j++){
//                   if(map.has(arr[j] + num)){
//                         count++;
//                   }
//             }
//       }

//       return count
// }

// console.log(countValidTriplet([1,2,3,4,5]))


// function canAllPeopleSit(n, m, seats){
//       let count = n;
//       for(let i = 0; i<=m-1; i++){
//             if(i == 0 && seats[i] == 1 && seats[i+1] !== 1 || seats[i] == 1 && seats[i-1] !== 1 && seats[i+1] !== 1){
//                   count > 0 ? count-- : count = 0
//             }
            
//       }
//       if(count == 0){
//             return true;
//       }else{
//             return false;
//       }


      
// }

// console.log(canAllPeopleSit(2, 7, [0,0,1,0,1,0,0]))


// function isValidBrackets(s){
//       let stack = [];

//       let openBrackets = {
//             '{': '}',
//             '[':']',
//             '(':')'
//       }

//       for(let i = 0; i<s.length; i++){
//             let char = s[i];
//             if(openBrackets[char]){
//                   stack.push(char);
//             }else{
//                   const lastOpenBrackets = stack.pop();
//                   if(openBrackets[lastOpenBrackets] !== char){
//                         return false;
//                   }
//             }
//       }

//       return stack.length === 0;
// }


// console.log(isValidBrackets("{()}[]"))


// function rotateImage(matrix, n){
//   for(let i = 0; i<n; i++){
//     for(let j = i + 1; j<n; j++){
//       let temp  = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp
//     }
//   }

//   for(let i = 0; i<n; i++){
//     let j = 0;
//     let k = n - 1;
//     while(j < k){
//       let temp = matrix[i][j];
//       console.log(matrix[i][j])
//       matrix[i][j] = matrix[i][k];
//       matrix[i][k] = temp;
//       j++;
//       k--;
//     }
//   }

//   console.log(matrix)
// }

// console.log(rotateImage([[1,2,3], [4,5,6], [7,8,9]], 3));

// function spiralMatrix(n){
//   let top = 0;
//   let right = n-1;
//   let bottom = n-1;
//   let left = 0
//   let matrix = new Array(n).fill().map(() => new Array(n).fill(0))

//   let count = 1;
//   while(top <= bottom && left <= right){
//     for(let i = left; i<=right; i++){
//       matrix[top][i] = count;
//       count++
//     }
//     top++; // 0 - 1 - 2

//     for(let i = top; i<=bottom; i++){
//       matrix[i][right] = count;
//       count++;
//     }
//     right--; //3 - 2 - 1

//     for(let i = right; i>=left; i--){
//       matrix[bottom][i] = count;
//       count++;
//     }
//     bottom--; //3-2-1

//     for(let i = bottom; i>=top; i--){
//       matrix[i][left] = count++;
//     }
//     left++ //0- 1 
//   }
//   console.log(matrix)
// }

// console.log(spiralMatrix(4))

// function incrementNumber(N, A){
//   A.reverse();
//   let carry = 1;
//   for(let i = 0; i<N; i++){
//     let sum = A[i] + carry;
//     A[i] = sum%10;
//     carry = Math.floor(sum/10);
//   }

//   if(carry){
//     A.push(carry);
//   }

//   return Number(A.reverse().join(""));
// }

// console.log(incrementNumber(3, [9,9,9]))

// console.log(Number([9,9,9].join("")) + 1)


// function makeZeros(matrix){
//   let n = matrix.length;
//   let m = matrix[0].length;

//   let zeroRows = new Set();
//   let zeroColumns = new Set();
//   for(let i = 0; i<n; i++){
//     for(let j = 0; j<m; j++){
//       let k = 0;
//       if(matrix[i][j] === 0){
//        zeroRows.add(i);
//         zeroColumns.add(j)
//       }
//     }
//   }

//   console.log(zeroColumns, zeroRows)

//   zeroRows.forEach(row => {
//     for(let i = 0; i<m; i++){
//       matrix[row][i] = 0
//     }
//   })

//   zeroColumns.forEach(col => {
//     for(let j = 0; j<n; j++){
//       matrix[j][col] = 0
//     }
//   })

//   console.log(matrix)
  
// }


// function convertZero(arr){
//   for(let i =0; i<arr.length; i++){
//     arr[i] = 0
//   }
// }
// console.log(makeZeros([[0,0,1], [1,1,1], [1,1,0]]))

// function reverseString(str){
//   let string = str.split(" ");
//   let i = 0;
//   let j = string.length - 1;
//   while(i <= j){
//     let temp = string[i];
//     string[i] = string[j];
//     string[j] = temp;
//     i++;
//     j--;
//   }
//   return string.join(" ");
// }

// console.log(reverseString("hello world friends"))


// function searchTarget(A, X, N){
//   let i = 0;
//   let j = N-1;
//   while(i <= j){
//     let mid = Math.floor((i+j)/2);
//     if(A[mid] < X){
//       i = mid + 1;
//     }else if(A[mid] > X){
//       j = mid - 1;
//     }else{
//       return mid;
//     }
//   }
//   return -1;
// }

// console.log(searchTarget([2,4,5,8,9], 20, 5

// function buyStocks(A, N){
//   let maxProfit = 0;
//   for(let i = 1; i<N; i++){
//     if(A[i] < A[i-1]){
//       let profit = A[i-1] - A[i];
//       maxProfit = Math.max(maxProfit, profit + maxProfit)
//     }
//   }
//   console.log(maxProfit);
// }

// console.log(buyStocks([7,1 ,5 ,3, 6,4], 6))


// function decodeString(str){
//   let result = "";
//   for(let i = 0; i<str.length; i++){
//     if(str[i] !== "]"){
//       result+=str[i];
//     }else{
//       let temp = "";
//       while(result.length > 0 && result[result.length - 1] !== "["){
//         temp = result[result.length - 1] + temp;
//         result = result.slice(0, -1);
//       }

//       result = result.slice(0, -1);

//       let num = "";
//       while(result.length > 0 && !isNaN(result[result.length - 1])){
//         num = result[result.length - 1] + num;
//         result = result.slice(0, -1);
//       }

//       let intNum = parseInt(num);
//       while(intNum--){
//         result+=temp;
//       }
      
//     }
//   }
//   return result;
// }

// console.log(decodeString("3[a2[bc]]"))


// console.log("hello".slice(0, -1))

// function remix(str, arr){
//   let ans = [];
//   for(let i = 0; i<str.length; i++){
//     ans[arr[i]] = str[i];
//   }

//   return ans.join("")
// }
// console.log(remix("abcd", [0, 3, 1, 2]));


// function findSubstringIndices(S, L){
//   let listLength = L.length;
//   let wordLength = L[0].length;
//   let ans = [];
//   for(let i = 0; i<=S.length - listLength*wordLength; i++){
//     let wordInString = S.slice(i, listLength*wordLength + i);
//     let listWordSorted = L.join("").split("").sort().join("")
//     let wordStringSorted = wordInString.split("").sort().join("");
//     if(listWordSorted == wordStringSorted){
//       ans.push(i);
//     }
//   }
//   return ans
// }


// const S = "barfooapplefoobar";  
// const L = ["foo", "bar"];
// console.log(findSubstringIndices(S, L)); 

// console.log(L.join("").split("").sort().join(""))


// function rearrangeString(str){
//   let vowels = "";
//   let consonants = "";
//   for(let i = 0; i<str.length; i++){
//     if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//       vowels+=str[i];
//     }else{
//       consonants+=str[i];
//     }
//   }

//   return vowels+consonants;
// }
// let inputString = 'bcade';
// let rearranged = rearrangeString(inputString);
// console.log(rearranged);

// function generateIPAddresses(inputString){
//   let result = [];
//     if(inputString.length === 10){
//       result.push(`${inputString.slice(0, 3)}.${inputString.slice(3, 7)}.${inputString.slice(7)}`)
//     }
//   return result
// }


// let inputString = '1234878012';
// let ipAddresses = generateIPAddresses(inputString);
// console.log(ipAddresses)


// function pattern(n){
//   let start = 1;
//   for(let i = 0; i<n; i++){
//     let row = ""
//     i%2 === 0 ? start = 1 : start = 0;
//     for(let j = 0; j<=i; j++){
//       row+=start;
//       start = 1 - start
//     }
//     console.log(row)
//   }
// }

// console.log(pattern(4))

// function pattern(ch){
//   for(let i = 0; i<ch.length; i++){
//     let  row = "";
//     for(let j = 0; j<=i; j++){
//       row+=ch[i]
//     }
//     console.log(row);
//   }
// }

// console.log(pattern("ABCDE"))

// function pattern(star){
//   for(let i = 0; i<5; i++){
//     let row = "";
//     for(let j = 0; j<=i; j++){
//       row+=star
//     }
//     console.log(row)

//   }
//     for(let i = 0; i<=4; i++){
//       let row = "";
//       for(let k = 4; k>=i; k--){
//         row+=star
//       }
//       console.log(row);
//     }
// }


// console.log(pattern("*"))

// for(let i = 5; i>=0; i--){
//   let row = "";
//   for(let j = 1; j<=i; j++){
//     row+=j
//   }
//   console.log(row)
// }
// function printPattern(n){
//   let result = '';
//   for(let i = 0; i<n; i++){
//     for(let j = 0; j<n - i - 1; j++){
//       result+=" "
//     }

//     let ch = 'A';
//     for(let j = 0; j<=i; j++){
//       result+=ch;
//       ch = String.fromCharCode(ch.charCodeAt(0) + 1);
//     }
//     ch = String.fromCharCode(ch.charCodeAt(0) - 2)


//     for(let j = 0; j<i; j++){
//       result+=ch;
//       ch = String.fromCharCode(ch.charCodeAt(0) - 1)
//     }
//     result+= '\n'
//   }
//   console.log(result)
  
// }

// console.log(printPattern(4))

// function maxProfit(M,B,S){
//   let maxProfit = 0;
//   for(let i = 0; i<B.length; i++){
//     if(B[i] <= M){
//       let profit = S[i] - B[i];
//       maxProfit = Math.max(profit, maxProfit);
//     }
//   }
//   return maxProfit
// }

// let money = 20;
// let buyPrices = [5, 1, 2];
// let sellPrices = [2, 10, 10];
// console.log(maxProfit(money, buyPrices, sellPrices));


// function maxProfit(prices){
//   let minPrice = Infinity;
  
//   let maxProfit = 0;
  
//   for(let i = 0; i<prices.length; i++){
//     minPrice =  Math.min(minPrice, prices[i]);
//     maxProfit = Math.max(maxProfit, prices[i] - minPrice);

//   }
//   return maxProfit
// }


// let prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices)); 


// function maxSubarraySum(A){
//   let currentSum = A[0];
//   let maxSum = A[0]
//   for(let i = 1; i<A.length; i++){
//     currentSum = Math.max(A[i] + currentSum, A[i]);
//     maxSum = Math.max(currentSum, maxSum);
    
//   }
//   return maxSum
// }



// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubarraySum(nums))



// function minimizeSumAfterOperations(arr, k){
//   arr.sort((a,b) => a - b);
//   for(let i = 0; i<k; i++){
//     let removed = arr.pop();
//     let smallestInt = Math.ceil(removed/2);
//     insertInSortedOrder(arr, smallestInt)
//   }

//   return arr.reduce((acc, inital) => acc + inital, 0);
// }


// function insertInSortedOrder(arr, smallestInt) {
//   let i = 0;
//   while(i < arr.length && arr[i] < smallestInt){
//     i++;
//   }
//   arr.splice(0, i, smallestInt)
  
// }

// let arr = [12,10,14];
// let k = 3;
// let result = minimizeSumAfterOperations(arr, k);
// console.log("Minimized sum after", k, "operations:", result)

// function countBinaryString(N){
//   let prevZeroCount = 1;
//   let prevOneCount = 1;
//   if(N === 1) return 2;

  
//   for(let i = 2; i<=N; i++){
//     let currentZeroCount = prevZeroCount + prevOneCount;
//     let currentOneCount = prevZeroCount;

//     prevZeroCount = currentZeroCount;
//     prevOneCount = currentOneCount;
//   }

//   return prevOneCount+prevZeroCount;
  
// }

// console.log(countBinaryString(3))

// function  minSumOfTwoNumbers(N, A){
//   A.sort((a,b) => a - b);
//   let min1 = 0;
//   let min2 = 0;
  
//   for(let i = 0; i<N; i++){
//     if(i%2 == 0){
//       min1 = min1*10 + A[i];
      
//     }else{
//       min2 = min2 *10+A[i];
//     }
//   }

//   return[min1, min2]
// }

// console.log( minSumOfTwoNumbers(6, [6, 8, 4, 5, 2, 3]))


// function replaceWords(D, S){
//   let strArr = S.split(" ");
//   for(let i =0; i<D.length; i++){
//     let word = D[i];
//     for(let j = 0; j<strArr.length; j++){
//       if(word == strArr[j].slice(0, word.length)){
//         strArr[j] = word;
//       }
//     }
//   }
//   return strArr.join(" ")
// }

// const dictionary = ["cat","bat","rat"];
// const sentence = "the cattle was rattled by the battery";
// console.log(replaceWords(dictionary, sentence))

// function countValidTriplets(A){
//   let map = new Map();
//   for(let i=0; i<A.length; i++){
//     if(map.has(A[i])){
//       map.set(A[i], map.get(A[i]) + 1)
//     }else{
//       map.set(A[i], 1)
//     }
//   }

//   let count = 0;
//   let arr = [];
//   for(let i = 0; i<A.length; i++){
//     let num = A[i];
//     for(let j = i + 1; j<A.length; j++){
//       if(map.has(num + A[j])){
//         count++
//         arr.push([num, A[j]])
//         map.set(A[j], map.get(A[j]) - 1)
//       }else{
//         map.set(A[j], 1)
//       }
//     }
//   }
//   return arr;
// }



// const A = [1, 2, 2, 4, 5];
// console.log(countValidTriplets(A));

// function canAllPeopleSit(n, m, seats){
//   let count = n;
//   for(let i = 1; i<m; i++){
//     if(seats[i-1] == 0 && seats[i + 1] == 0 && seats[i] == 1 || seats[i] == 1 && i == m-1 && seats[i-1] == 0){
//       count--
//     }
//   }
//   if(count <= 0){
//     return "Yes"
//   }

//   return "No"
// }

// const n = 3;
// const m = 7;
// const seats = [0, 0, 1, 0, 0, 0, 1];
// console.log(canAllPeopleSit(n, m, seats));


// function isValid(str){
//   let brackets = {
//     "{": "}",
//     "[":"]",
//     "(":")"
//   }
//   let stack = [];
//   for(let i = 0; i<str.length; i++){
//     if(brackets[str[i]]){
//       stack.push(str[i])
//     }else{
//       let lastOpenBrackets = stack.pop();
//       if(brackets[lastOpenBrackets] !== str[i]){
//         return false;
//       }
//     }
//   }
//     return stack.length === 0;
// }


// console.log(isValid("[(){}]")); 
// console.log(isValid("(]"))

// function pal(str){
//   let i = 0;
//   let j = str.length-1;
//   while(i < j){
//     if(str[i] !== str[j]){
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true
// }

// console.log(pal("river"))



// function makeZeros(matrix){
//   let colLength = matrix.length;
//   let rowLength = matrix[0].length;

//   let zeroRows = new Set();
//   let zeroCols = new Set();
//   for(let i = 0; i<colLength; i++){
//     for(let j = 0; j<rowLength; j++){
//       if(matrix[i][j] == 1){
//         zeroCols.add(j);
//         zeroRows.add(i);
//       }
//     }
//   }

//   zeroRows.forEach(row => {
//     for(let i = 0; i<rowLength; i++){
//       matrix[row][i] = 1;
//     }
//   })

//   zeroCols.forEach(cols => {
//     for(let i = 0; i<colLength; i++){
//       matrix[i][cols] = 1
//     }
//   })

//   console.log(matrix)
// }



// console.log(makeZeros([[0,1,0], [0,0,0], [0,0,0]]))


// function incrementNumber(N, A){
//   A.reverse();
//   let carry = 1;
//   for(let i = 0; i<N; i++){
//     let sum = A[i] + carry;
//     A[i] = sum%10;
//     carry = Math.floor(sum/10);
//   }

//   if(carry){
//     A.push(carry);
//   }
//   return A.reverse().join('')
// }

// console.log(incrementNumber(3, [1,1,1]))


// function findIntersection(A, N){
//   let prefixSum = new Array(N)
//   let suffixSum = new Array(N);

//   prefixSum[0] = A[0];
//   for(let i = 1; i<=N-1; i++){
//     prefixSum[i] = prefixSum[i-1] + A[i]
//   }
  

//   suffixSum[N-1] = A[N-1];
//   for(let j = N-2; j>=0; j--){
//     suffixSum[j] = suffixSum[j+1] + A[j]
//   }

//   console.log(suffixSum ,prefixSum)
//   for(let i = 0; i<N; i++){
//     if(suffixSum[i] == prefixSum[i]){
//       return i;
//     }
//   }
// }

// console.log(findIntersection([1,2,4,7,7], 5));

// function longestSubstring(s, k){
//   let l = 0, r = 0;
//   let n = s.length;
//   let map = new Map();
//   let maxLen = 0;
//   while(r<n){
//     if(map.has(s[r])){
//       map.set(s[r] , map.get(s[r]) + 1)
//     }else{
//       map.set(s[r], 1)
//     }

//     while(l<n && map.size > k){
//       if(map.get(s[l]) == 1){
//         map.delete(s[l])
//       }else{
//         map.set(s[l], map.get(s[l]) - 1)
//       }
//       l++;
//     }

//     let len = r-l+1;
//     maxLen = Math.max(len, maxLen)
//     r++
//   }
//   return maxLen
// }

// console.log(longestSubstring("Xyyzya", 3))



// function subarraySumZero(n, arr){
//   let set = new Set();
//   let sum = 0;
//   for(let i = 0; i<n; i++){
//     sum+=arr[i];
//     if(sum == 0 || set.has(sum)){
//       return "Yes";
//     }else{
//       set.add(sum);
//     }
  
//   }

//   return "No";
// }


// console.log(subarraySumZero(4, [4,5,-5,5]))



// function largestSubarrayWithZero(n, arr){
//   let prefixSum = new Array(n);

//   prefixSum[0] = arr[0];
//   for(let i =1; i<n; i++){
//     prefixSum[i] = prefixSum[i-1] + arr[i]
//   }

//   let x = -1;
//   let y = -1;
//   let prefixMap = new Map();
//   let maxLen = 0;

//   for(let i = 0;  i<n; i++){
//     if(prefixSum[i] == 0){
//       maxLen = i + 1;
//       x = 0;
//       y = i;
//       continue;
//     }

//     if(prefixMap.has(prefixSum[i])){
//       let len = i - prefixMap.get(prefixSum[i]);
//       if(len > maxLen){
//         maxLen = len;
//         y = i;
//         x = prefixMap.get(prefixSum[i]) + 1
//       }
//     }else{
//       prefixMap.set(prefixSum[i], i)
//     }
//   }
//   if(x == -1 && y == -1){
//     return [-1];
//   }

//   let result = [];
//   for(let i = x; i<=y; i++){
//     result.push(arr[i])
//   }

//   return result;
// }

// console.log(largestSubarrayWithZero(6, [2,3,1,-4,0,6]))



// function largestSumContiguousSubArr(n, arr) {
//   let currentSum = arr[0];
//   let maxSum = arr[0];

//   for (let i = 1; i < n; i++) {
//     currentSum = Math.max(currentSum + arr[i], arr[i]);
//     maxSum = Math.max(currentSum, maxSum);
//   }

//   return maxSum;
// }

// console.log(largestSumContiguousSubArr(8, [-2, -3, 4, -1, -2, 1, 5, -3]));

// function subarraySumZero(n, arr) {
//   let sumSet = new Set();
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += arr[i];
//     if (sum === 0 || sumSet.has(sum)) {
//       return "Yes";
//     } else {
//       sumSet.add(sum);
//     }
//   }
//   return "No";
// }

// console.log(subarraySumZero(4, [4, 2, -2, 5]));

// function largestSubArray(n, arr) {
//   let prefixSum = new Array(n).fill(0);
//   prefixSum[0] = arr[0];
//   for (let i = 1; i < n; i++) {
//     prefixSum[i] = prefixSum[i - 1] + arr[i];
//   }
//   let maxLen = 0;

//   let map = new Map();
//   let x = -1;
//    let y = -1;
//   for (let i = 0; i < n; i++) {
//     if (prefixSum[i] == 0) {
//       maxLen = i + 1;
//       x = 0;
//       y = i;
//       continue;
//     }
//     if (map.has(prefixSum[i])) {
//       let len = i - map.get(prefixSum[i]);
//       if (len > maxLen) {
//         maxLen = len;
//         x = map.get(prefixSum[i]) + 1;
//         y = i;
//       }
//     } else {
//       map.set(prefixSum[i], i);
//     }
//   }

//   if (x == -1 && y == -1) {
//     return [-1];
//   }
//   let ans = [];
//   for (let i = x; i <= y; i++) {
//     ans.push(arr[i]);
//   }
//   return ans;
// }

// console.log(largestSubArray(4, [2, 3, -5, 1]));

// function lengthOfLongestSubstring(s, k){
//   let map = new Map();
//   let i = 0, j = 0;
//   let n = s.length;
//   let maxLen = 0;
//   while(i < n){
//     if(map.has(s[i])){
//       map.set(s[i], map.get(s[i]) + 1);
//     }else{
//       map.set(s[i], 1)
//     }
//     console.log(map)

//     while(j < n && map.size > k){
//       let val = map.get(s[j])
//       if(val == 1){
//         map.delete(s[j]);
//       }else{
//         map.set(s[j], map.get(s[j]) - 1)
//       }
//       j++
//     }

//     let len = i-j + 1;
//     maxLen = Math.max(maxLen, len)
//     i++;
//   }

//   return maxLen
// }

// console.log(lengthOfLongestSubstring("Xyyzya", 3))

// function maxSumSubarraySizeK(N, A, K){
//   let sum = 0;
//   for(let i = 0; i<K; i++){
//     sum+=A[i]
//   }

//   let maxSum = 0;
//   for(let j = K; j<N; j++){
//     sum = sum + A[j] - A[j-K];
//     if(sum > maxSum){
//       maxSum = sum
//     }
//   }
//   return maxSum
// }

// console.log(maxSumSubarraySizeK(8, [300,200,100,400,500,100,200,100], 3))

// function longestSubStr(s) {
//   let set = new Set();
//   let start = 0;
//   let maxLen  = 0;
//   for(let i = 0; i<s.length; i++){
//     while(set.has(s[i])){
//       set.delete(s[i]);
//       start++
//     }

//     set.add(s[i]);
//     maxLen = Math.max(maxLen, i - start + 1)
//   }
//   return maxLen
// }

// console.log(longestSubStr("cdddddd"));

// function numberArray(arr){
//   let ans = [];
//   for(let i= 0; i<arr.length; i++){
//     if(typeof arr[i] === "number"){
//       ans.push(arr[i])
//     }
//   }
//   return ans
// }

// console.log(numberArray(["a", 1 ,"b", 2 ,"c","d", 3 , 4 ,"e"]))

// function pal(str){
//   let i = 0;
//   let j = str.length-1;
//   while(i < j){
//     if(str[i] != str[j]){
//       return false;
//     }
//     i++;
//     j--;
//   }

//   return true

// }


// console.log(pal("racecar"))

// function longestCommonPrefix(arr){
//   arr.sort((a,b) => a.length - b.length);
//   let n = arr.length;
//   let end = arr[0].length;
//   let i = 0;
//   while(i < end && arr[0][i] == arr[n-1][i]){
//     i++;
//   }
//   let prefix = arr[0].substring(0, i);

//   let arr1 = [];
//   for(let i  =0; i<n; i++){
//     if(prefix === arr[i].substring(0, prefix.length)){
//       arr1.push(arr[i]);
//     }
//   }
  
//   return [arr1[arr1.length-1]];
// }

// console.log(longestCommonPrefix(["interstellar", "internet", "internal", "intercept"]))

// function sortWords(word){
//   return word.split("").sort().join("");
// }


// function groupAnagrams(arr){
//   let n = arr.length
//   let ans = []
//   for(let i = 0; i<n; i++){
//     let sortedWord = sortWords(arr[i]);
//     ans.push(sortedWord);
//   }

  

//   let obj = {
//   }
//   for(let i = 0; i<ans.length; i++){
//     if(obj[ans[i]]){
//       obj[ans[i]] = [...obj[ans[i]], ans[i]]
//     }else{
//       obj[ans[i]] = [arr[i]]
//     }
//   }
  
//   return Object.values(obj)
// }

// console.log(groupAnagrams(["listen", "enlist", "google", "gooegl", "inlets", "banana"]))

// function naturalSum(n){
//   if(n == 0){
//     return 0;
//   }

//   return naturalSum(n-1)+n 
// }

// console.log(naturalSum(5))

// function rearrangeStr(str){
//   let vowels = "";
//   let consonants = "";

//   for(let i = 0; i<str.length; i++){
//     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//       vowels+=str[i];
//     }else{
//       consonants+=str[i]
//     }
//   }

//   return vowels.concat(consonants)
// }
// console.log(rearrangeStr("bcade"))


// function kadaneAlgo(arr){
//   let currentSum = arr[0];
//   let maxSum = arr[0];
//   for(let i = 1; i<arr.length; i++){
//     currentSum = Math.max(arr[i], currentSum+arr[i]);
//     maxSum = Math.max(currentSum, maxSum)
//   }

//   return maxSum;
// }

// console.log(kadaneAlgo([-2,1, -3, 4, -1, 2, 1, -5, 4]))

// function pattern(n){
//   let start = 1;
//   for(let i = 0; i<n; i++){
//     i % 2 == 0 ? start = 0 : start = 1;
//     let row = "";
//     for(let j = 1; j<=i; j++){
//       row+= start;
//       start = 1- start
//     }
//     console.log(row)
//   }
// }
// console.log(pattern(4))


// function decodeStr(str){
//   let n = str.length;
// let result = ""
//   for(let i = 0; i<n; i++){
//     if(str[i] !== "]"){
//       result+=str[i];
//     }else{
//       let preceeding = ""
//         while(result.length > 0 && result[result.length - 1] !== "["){
//           preceeding = result[result.length - 1] + preceeding;
//           result = result.slice(0, -1);
//         }

//         result = result.slice(0, -1)
//         let num = "";
//         while(result.length > 0 && !isNaN(result[result.length - 1])){
//           num=result[result.length - 1] + num;
//           result = result.slice(0, -1)
//         }

//         let intNum = parseInt(num);
//         while(intNum--){
//           result+=preceeding
//         }

//     }

//   }

//   return result
// }

// console.log(decodeStr("3[a2[bc]]"))



// function remix(str, arr){
//   let ans = [];
//   for(let i = 0; i<arr.length; i++){
//     ans[arr[i]] = str[i]
//   }
//   return ans
// }

// console.log(remix("abcd", [0,3,1,2]))

// function findSubstringIndices(S, L) {
//   let n = S.length;
//   let wordLen = L[0].length;
//   let listLen = L.length;
//   let arr = [];
//   for(let i = 0; i<=n - wordLen*listLen; i++){
//     let sortedWord = S.substring(i, wordLen*listLen + i).split("").sort().join("");
//   let sortedList = L.join("").split("").sort().join("");

//     if(sortedList == sortedWord){
//       arr.push(i)
//     }
  
//   }
//   return arr
// }

// const S = "barfooapplefoobar";
// const L = ["foo", "bar"];
// console.log(findSubstringIndices(S, L));


// function ipAddress(ip){
//   let ips = [];
//   if(true){
//     ips.push(`${ip.slice(0, 3)}.${ip.slice(3, 7)}.${ip.slice(7)}`)
//   }
//   return ips
// }

// console.log(ipAddress("1234878012"))


// function pattern(n){
//   let start = 1;
//   for(let i = 0; i<n; i++){
//     i % 2 == 0 ? start = 0 : start = 1;
//     let row = "";
//     for(let j = 1; j<=i; j++){
//       row+=start;
//       start = 1 - start;
//     }
//     console.log(row)
//   }
// }

// console.log(pattern(5))

// function star(s){
//   let row = "";
//   for(let i = 0; i<5; i++){
//     for(let j = 0; j<=i; j++){
//       row+=s
//     }
//     row+="\n"
//   }
//   return row;
// }


// console.log(star("*"))

// function sortNum(arr){
//   return arr.sort((a,b) => a - b).join("");
// }

// function solution(matrix) {
//   let sortedArr = matrix[0].sort((a,b) => a - b).join("");

//   for(let i = 0; i<matrix[0].length; i++){
//     if(sortedArr !== sortNum([...matrix[i]])){
//       return false;
//     }
//   }

//   for(let i = 0; i<matrix.length; i++){
//     let ans = []
//     for(let j = 0; j<matrix.length; j++){
//       ans.push(matrix[j][i]);
//     }
//     if(sortedArr !== sortNum(ans)){
//       return false
//     }
//   }
//   return true
// }

// console.log(solution([[1,2,3], [1,2,3], [2,3,1]], 3))

// function maxProfit(money, buyPrices, sellPrices){
//   let maxProfit = 0;
//   let i = 0;
//   let j = 0;
//   while(i < buyPrices.length && j < sellPrices.length){
//     if(sellPrices[j] - buyPrices[i] > maxProfit && maxProfit <= money){
//       maxProfit = sellPrices[j] - buyPrices[i];
//     }
//     i++;
//     j++;
//   }
//   return maxProfit;
  
// }

// console.log(maxProfit(20, [5,1,2], [2,10,10]))


// function minimizeSumAfterOperations(arr, k){
//   arr.sort((a,b) => a - b);
//   let n = arr.length
//   for(let i = 0; i<k; i++){
//     let removedEle = arr.pop();
//     let arrEle = Math.ceil(removedEle/2);
//     insertSortInFashion(arrEle, arr);
//   }
//   return arr.reduce((acc, initiator) => acc + initiator, 0);
// }

// function insertSortInFashion(ele, arr){
//   let i = 0;
//   while(i < arr.length && arr[i] < ele){
//     i++;
//   }

//   arr.splice(i, 0, ele)
// }

// let arr = [12,10,14];
// let k = 3;
// let result = minimizeSumAfterOperations(arr, k);
// console.log("Minimized sum after", k, "operations:", result);  


// function countBinaryStrings(N){
//   let prevZeroCount = 1;
//   let prevOneCount = 1;

//   if(N == 1){
//     return 2;
//   }
  
//   for(let i = 2; i<=N; i++){
//     let currentZeroCount = prevZeroCount+prevOneCount;
//     let currentOneCount = prevZeroCount;

//     prevZeroCount = currentZeroCount;
//     prevOneCount = currentOneCount;
//   }

//   return prevZeroCount + prevOneCount
// }

// console.log(countBinaryStrings(3))


// function minSumOfTwoNumbers(N, arr){
//   arr.sort((a, b) => a - b);
//   let num1 = "";  let num2 = "";
//   for(let i = 0; i<N; i++){
//     if(i%2 == 0){
//       num1+=arr[i]
//     }else{
//       num2+=arr[i]
//     }
//   }

//   return Number(num1) + (Number(num2))
// }


// const N = 6;
// const Arr = [6, 8, 4, 5, 2, 3];
// console.log(minSumOfTwoNumbers(N, Arr))

// function replaceWords(d, s){
//   let arrStr = s.split(" ");
//   let n = arrStr.length;
//   for(let i = 0; i<n; i++){
//     let compare = d[i];
//     for(let j = 0; j<n; j++){
//       if(arrStr[j].includes(compare)){
//         console.log(arrStr[j], compare)
//         arrStr[j] = compare;
//       }
//     }
//   }
//   return arrStr
// }

// const dictionary = ["ratt", "rat", "ratt"];
// const sentence = "the cattle was rattled by the rattled";
// console.log(replaceWords(dictionary, sentence));


// function countValidTriplets(A){
//   let n = A.length;
//   let count = 0;
//   for(let i = 0; i<n; i++){ // 1
//     for(let j = i+1; j<n; j++){
//       if(A.includes(A[i] + A[j])){
//         count++;
//       }
//     }
//   }

//   return count;
// }


// const A = [1, 2, 3, 4, 5];
// console.log(countValidTriplets(A));

// function canAllPeopleSit(n, m, seats){
//   let count = n;
//   for(let i = 1; i<m; i++){
//     if(seats[i-1] == 0 && seats[i+1] == 0 && seats[i] == 1 || i == m-1 && seats[i] == 1 && seats[i-1] == 0){
//       count--;
//     }
//   }
//   if(count == 0){
//     return "Yes";
//   }
//   return "No"

// }


// const n = 3;
// const m = 7;
// const seats = [0, 0, 1, 0, 1, 0, 1];
// console.log(canAllPeopleSit(n, m, seats));


// function isValid(str){
//   let stack = [];
//   const openBrackets = {
//       '(': ')',
//       '{': '}',
//       '[': ']'
//   };
//   let i =0;
//   while(i < str.length){
//     let char = str[i];
//     if(openBrackets[char]){
//       stack.push(char);
//     }else{
//       let lastOpenBrackets = stack.pop();
//       if(openBrackets[lastOpenBrackets] !== char){
//         return false
//       }
//     }
//     i++
//   }

//   return stack.length === 0
// }


// console.log(isValid("()[]{}"));   // Output: true
// console.log(isValid("(]"));       // Output: false


//practice

// function decodeStr(str){
//   let n = str.length;
//   let result = "";

//   for(let i = 0; i<n; i++){
//     if(str[i] !== "]"){
//       result+=str[i];
//     }else{
//       let temp = "";
//       while(result.length > 0 && result[result.length - 1] !== "["){
//         temp = result[result.length - 1 ] + temp;
//         result = result.slice(0, -1);
//       }
//       result = result.slice(0, -1);
//       let num = "";
//       while(result.length > 0 && !isNaN(result[result.length - 1])){
//         num = result[result.length - 1] + num;
//         result = result.slice(0, -1);
//       }

//       let numInt = parseInt(num);

//       while(numInt--){
//         result+=temp;
//       }
//     }
//   }

//   return result
// }
// console.log(decodeStr("3[a] 2[bc]"))

// function remix(S, A){
//   let arr = [];
//   for(let i =0 ; i<A.length; i++){
//     arr[A[i]] = S[i]
//   }
//   return arr
// }




// console.log(remix("abcd", [0, 3, 1, 2]));


// function findSubstringIndices(S, L){
//   let wordLength = L[0].length;
//   let listLength = L.length;
//   let n = S.length;

//   let ans = [];
//   for(let i = 0; i<=n - wordLength*listLength; i++){
//     let sortedString = S.substring(i, wordLength*listLength + i).split("").sort().join("");
//     let compareList = L.join("").split("").sort().join("");

//     if(sortedString == compareList){
//       ans.push(i)
//     }
//   }
//   return ans
// }



// const S = "barfooapplefoobar";  
// const L = ["foo", "bar"];
// console.log(findSubstringIndices(S, L));



// function pattern(n){
//   let start = 1;
//   for(let i = 0; i<n; i++){
//     i%2 == 0 ? start = 1 : start = 0;
//     let row = "";
//     for(let j = 0; j<=i; j++){
//       row+=start;
//       start = 1 - start;
//     }
//     console.log(row)
//   }

// }


// console.log(pattern(5))

// function pattern(str){
//   for(let i = 0; i<str.length; i++){
//     let row = "";
//     for(let j = 0; j<=i; j++){
//       row+=str[i];
//     }
//     console.log(row)
//   }
// }

// console.log(pattern("ABCDE"))


// function pattern(star){
//   let row = ""
//   for(let i =0; i<5; i++){
//     for(let  j = 0; j<=i; j++){
//       row+=star
//     }
//     row+="\n"
//   }

//   for(let i = 4; i>=0; i--){
//     for(let j = 0; j<=i; j++){
//       row+=star;
//     }
//     row+="\n"
//   }
//   return row
// }

// console.log(pattern("*"))

// for(let i = 5; i>=1; i--){
//   let row = "";
//   for(let j = 1; j<=i; j++){
//     row+=j
//   }
//   console.log(row)
// }

// function pattern(n){
//   for(let i = 5; i>=1; i--){
//     let row = ""

//     for(let j = 1; j<=i; j++){
//       row+=" "
//     }
    
//     for(let k = 1; k<=n-i+1; k++){
//       row+=k + " "
//     }
//     console.log(row)

    
//   }
// }

// console.log(pattern(5))


// function maxProfit(money, buyPrices, sellPrices){
//   let i = 0;
//   let j = 0;
//   let profit = 0;
//   while(i < buyPrices.length && j < sellPrices.length && profit < money){
//     if(sellPrices[j] - buyPrices[i] > profit){
//       profit = sellPrices[j] - buyPrices[i]; 
//     }
//     i++;
//     j++
//   }
//   return profit
// }


// console.log(maxProfit(20, [5,1,2], [2,10,10]))

// function maxProfit(prices){
//   let min = prices[0];
//   let profit = 0;
//   for(let i = 1; i<prices.length; i++){
//     min = Math.min(min, prices[i]);
    
//   }
//   let index = prices.findIndex(x => x == min)
//   for(let i = index + 1; i<prices.length; i++){
//     if(prices[i] - min > profit){
//       profit = prices[i] - min;
//     }
//   }

//   return profit
// }

// let prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices));


// function maxSubArray(nums){
//   let currentSum = nums[0];
//   let maxSum = nums[0];

//   for(let i= 1; i<nums.length; i++){
//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum
// }




// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArray(nums))


// function minimizeSumAfterOperations(arr, k){
//   arr.sort((a,b) => a - b)
//   for(let i = 0; i<k; i++){
//     let removedEle = arr.pop();
//     let dividedEle = Math.ceil(removedEle/2);
//     insertInSortedFashion(dividedEle, arr);
//   }
//   return arr
// }

// function insertInSortedFashion(val, arr){
//   let i = 0;
//   while(i < arr.length && arr[i] < val){
//     i++;
//   }
//   arr.splice(i, 0, val)
// }

// let arr = [12,10,14];
// let k = 2;
// let result = minimizeSumAfterOperations(arr, k);
// console.log("Minimized sum after", k, "operations:", result);  


// function countBinaryStrings(N){
//   let prevZeroCount = 1;
//   let prevOneCount = 1;

//   if(N == 1) return 2;
//   for(let i = 2; i<=N; i++){
//     let currentZeroCount = prevZeroCount + prevOneCount;
//     let currentOneCount = prevZeroCount;

//     prevZeroCount = currentZeroCount;
//     prevOneCount = currentOneCount;
//   }

//   return prevOneCount + prevZeroCount
// }

// console.log(countBinaryStrings(3))

// function minSumOfTwoNumbers(N, arr){
//   arr.sort((a,b) => a - b);
//   let num1 = "";
//   let num2 = "";

//   for(let i = 0; i<N; i++){
//     if(i%2 == 0){
//       num1+=arr[i];
//     }else{
//       num2+=arr[i]
//     }

//   }

//   return Number(num1) + Number(num2) 
// }


// const N = 6;
// const Arr = [6, 8, 4, 5, 2, 3];
// console.log(minSumOfTwoNumbers(N, Arr))




// function replaceWords(d, s){
//   let arrStr = s.split(" ");
//   for(let i =0; i<d.length; i++){
//     let word = d[i];
//     for(let j = 0; j<arrStr.length; j++){
//       if(arrStr[j].includes(word)){
//         arrStr[j] = word
//       }
//     }
//   }

//   return arrStr.join(" ");
// }

// const dictionary = ["cat","bat","rat"];
// const sentence = "the cattle was rattled by the battery";
// console.log(replaceWords(dictionary, sentence))


// function countValidTriplets(A){
//   let count = 0;
//   for(let i = 0; i<A.length; i++){
//     for(let j = i+1; j<A.length; j++){
//       if(A.includes(A[i] + A[j])){
//         console.log(A[i], A[j])
//         count++;
//       }
//     }
//   }
//   return count;
// }



// const A = [1, 2, 3, 4, 5];
// console.log(countValidTriplets(A)); 


// function canAllPeopleSit(n, m, seats){
//   let count = n;
//   for(let i =1; i<m; i++){
//     if(seats[i-1] == 0 && seats[i+1] == 0 && seats[i] == 1 || seats[i] == 1 && seats[i-1] == 0 && i == m-1 || seats[i] == 0 && seats[i-1] == 1 && i == 1){
//       count--;
//     }
//   }

//   if(count == 0){
//     return "YES";
//   }

//   return "NO"
// }



// const n = 4;
// const m = 7;
// const seats = [1, 0, 1, 0, 1, 0, 1];
// console.log(canAllPeopleSit(n, m, seats));



// function isValid(str){

//   const openBrackets = {
//     '(': ')',
//     '{': '}',
//     '[': ']'
// };

//   let stack = [];
//   for(let i =0 ; i<str.length; i++){
//     let char = str[i];
//     if(openBrackets[char]){
//       stack.push(char);
//     }else{
//       let lastEle = stack.pop();
//       if(openBrackets[lastEle] !== char){
//         return false;
//       }
//     }
    
//   }


//   return stack.length === 0;
// }


// console.log(isValid("()[]{}"));   
// console.log(isValid("[([])]"));  


// function pal(str){
//     let i = 0;
//     let j = str.length - 1;
//     while(i < j){
//         if(str[i] !== str[j]){
//             return false;
//         }
//         i++;
//         j--;
//     }
//     return true
// }

// console.log(pal("nittin"))


// function numberArray(arr){
//     let ans = [];
//     for(let i = 0; i<arr.length; i++){
//         if(typeof arr[i] == "number"){
//             ans.push(arr[i])
//         }    
//     }
//     return ans;
// } 


// console.log(numberArray(["a", 1 ,"b", 2 ,"c","d", 3 , 4 ,"e"]))

// function longestCommonPrefix(arr){
//     arr.sort((a,b) => a.length - b.length);
//     let n = arr.length;
//     let i = 0;
//     let count = 0;
//     while(i < arr[0].length){
//         if(arr[n-1][i] == arr[0][i]){
//             count++
//         }
//         i++
//     }   

//     let prefix = arr[0].substring(0, count);

//     let ans = [];
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i].includes(prefix)){
//             ans.push(arr[i])
//         }
//     }
    
//     return ans[ans.length - 1]
// }

// console.log(longestCommonPrefix(["interstellar", "internet", "internal", "intercept", "termiunal"]))


// function reverseStr(str){
//     let rev = "";
//     for(let i = str.length-1; i>=0; i--){
//         rev+=str[i]
//     }
//     return rev;
// }

// console.log(reverseStr("apple"))


// function removeIntegers(arr){
//     let ans = []
//     for(let i = 0; i<arr.length; i++){
//         if(!Number.isInteger(arr[i])){
//             ans.push(arr[i])
//         }
//     }
//     return ans
// }

// console.log(removeIntegers([1, "apple", 2.5, 3, "banana"]))

// function sortWord(word){
//     return word.split("").sort().join("")
// }


// function groupAnagrams(arr){
//     let n = arr.length;
//     let ans = [];
//     for(let i = 0; i<n; i++){
//         ans.push(sortWord(arr[i]))
//     }
    
//     let obj = {

//     }

//     for(let i = 0; i<n; i++){
//         if(obj[ans[i]]){
//             obj[ans[i]] = [...obj[ans[i]] ,ans[i]]
//         }else{
//             obj[ans[i]] = [arr[i]]
//         }
//     }

//     return Object.values(obj)
// }


// console.log(groupAnagrams(["listen", "enlist", "google", "gooegl", "inlets", "banana"]))


// function checkMagicSquare(n, matrix){
//     let commonSum = 0;
//     for(let i = 0; i<matrix[0].length; i++){
//         commonSum+=matrix[0][i]
//     }   

    
//     for(let i = 0; i<n; i++){
//         let rowSum = 0;
//         for(let j = 0; j<n; j++){
//             rowSum+=matrix[i][j]
//         }
//         if(rowSum !== commonSum){
//             return false
//         }
//     }

//     for(let i = 0; i<n; i++){
//         let colSum = 0;
//         for(let j = 0; j<n; j++){
//             colSum+=matrix[j][i]
//         }
//         if(colSum !== commonSum){
//             return false
//         }
//     }

//     let primaryDiagonal = 0;
//     let secondaryDiagonal = 0;
//     for(let i = 0; i<n; i++){
//         primaryDiagonal+=matrix[i][i];
//         secondaryDiagonal+=matrix[i][n-1-i];
//     }   
//     if(primaryDiagonal !== commonSum && secondaryDiagonal !== commonSum){
//         return false;
//     }

//     return true
// }

// console.log(checkMagicSquare(4, [[4,14,15,1], [9,7,6,12], [5,11,10,8],[16,2,3,13]]))


// function capitalize(str){
//     let ans = "";
//     let diff = 'a'.charCodeAt() - 'A'.charCodeAt()
//     console.log(diff, 't'.charCodeAt() - 32, String.fromCharCode(84))

//     for(let i = 0; i<str.length;  i++){
//         if(i == 0 && str[i] !== "" || str[i] != "" && str[i-1] == " "){
//             if(str[i] <= 'z' && str[i] >= 'a'){
//                 ans+=String.fromCharCode(str[i].charCodeAt() - diff);
//             }else{
//                 ans+=str[i]
//             }
//         }else{
//             ans+=str[i]
//         }

//     }

//     return ans
// }

// console.log(capitalize('the quick Brown .... fox jumps over The lazy dog'))


// function searchTarget(N, A, X){
//     let start = 0;
//     let end = N-1;
//     while(start < end){
//         let mid = Math.floor((start+end)/2);
//         if(A[mid] < X){
//             start = mid + 1;
//         }else if(A[mid] > X){
//             end = mid - 1;
//         }else{
//             return mid;
//         }
//     }

//     return -1;

// }

// console.log(searchTarget(5, [1,3,5,7,13], 7))




// function intersectionOfTwoArraysBasic(n, nums1, m , nums2){
//     let arr = [];
//     let map1 = new Map();
//     for(let i = 0; i<n; i++){
//         if(map1.has(nums1[i])){
//             map1.set(nums1[i], map1.get(nums1[i]) + 1)
//         }else{
//             map1.set(nums1[i], 1);
//         }
//     }
    
//     for(let i = 0; i<m; i++){
//         if(map1.has(nums2[i])){
//             arr.push(nums2[i]);
//             map1.set(nums2[i], map1.get(nums2[i]) - 1)
//         }else{
//             map1.set(nums2[i], 1)
//         }
//     }

//     return arr;
// }

// console.log(intersectionOfTwoArraysBasic(4, [1,2,2,1], 3, [2,2,1]))


// function rearrange(str){
    
// }

// console.log(rearrange("abcdef"))

// function solution(commands){
//     let count = 0;
//     for(let i = 0; i<commands.length; i++){
//         if(commands[i] == "R"){
//             count++;
//         }else{
//             count--
//         }
//     }
    
// }


// console.log(solution("LLRRLLRRR"))

// function increase(){

// }



// function solution(arr){
//     let ans = [];
//     for(let i = 0; i<arr.length-2; i++){
//         if(arr[i]>arr[i+1]>arr[i+2] || arr[i] < arr[i+1] < arr[i+2]){
//             console.log(arr[i], arr[i+1], arr[i+2])
//             ans.push(1);
//         }else{
//             ans.push(0)
//         }
//     }
//     return ans;
// }

// console.log(solution([1,2,1,-4,5,10]))

// function swap(s) {
//     let reverseStr = "";
//     for(let i = s.length - 1; i>=0;i--){
//         reverseStr+=s[i];
//     }
//     return reverseStr;
// }

// function solution(str){
//     let ans = "";
//     for(let i = 0; i<str.length-1; i+=2){
//         ans+=(swap(str[i]+str[i+1]))
//     }
//     if(str.length%2 !== 0){
//         return ans.concat(str[str.length-1])
//     }
//     return ans
    
// }

// console.log(solution("badcfe"))


// const vowelCount = (str) => {
//     let count = 0;
//     for(let i = 0; i<str.length; i++){
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//             count++;
//         }
//     }
//     return count;
// } 

// console.log(vowelCount("hello"))


// function solution(str){
//     let ans = "";
//     let s = 0;
//     let e = str.length - 1;
//     while(s < e){
//         ans+=str[s]+str[e];
//         s++;
//         e--;
//     }
//     if(str.length%2 !== 0){
//         return ans+(str[Math.floor(str.length/2)])
//     }
//     return ans;
// }   


// console.log(solution("abcde"))


// function checkInc(arr){
//     for(let i = 2; i<arr.length; i+=2){
//         if(arr[i-2] >=arr[i]){
//             return false;
//         }
//     }
//     return true;
// }

// function checkDec(arr){
//     for(let i = 2; i<arr.length; i+=2){
//         if(arr[i-2] <= arr[i]){
//             return false;
//         }
//     }
//     return true
// }



// function solution(num){
//     if(checkInc(num)){
//         return 'increasing'
//     }else if(checkDec(num)){
//         return 'decreasing'
//     }
//     return "none"
    
// }

// console.log(solution([15, 65, 20, 72, 12, 72]))


// function solution(str){
//     let countL = 0;
//     let countR = 0;
//     for(let i = 0; i<str.length; i++){
//         if(str[i] == "L"){
//             countL++;
//         }else{
//             countR++;
//         }
//     }

//     return countL > countR ? "L" : countL < countR ? "R" : `""`
// }   

// console.log(solution("LRLRR"))

// function solution(arr){
//     let ans = [];
//     for(let i = 0; i<arr.length-2; i++){
//         if(arr[i] < arr[i+1] && arr[i+1] < arr[i+2] || arr[i] > arr[i+1] && arr[i+1] > arr[i+2]){
//             console.log(arr[i], arr[i+1], arr[i+2])
//             ans.push(1)
//         }else{
//             ans.push(0)
//         }
//     }
//     return ans
// }

// console.log(solution([1,2,1,-4,5,10]))


// function hasUniqueCharecters(str){
//     let map = new Map();
//     for(let i = 0; i<str.length; i++){
//         if(map.has(str[i])){
//             map.set(str[i], map.get(str[i]) + 1)
//         }else{
//             map.set(str[i], 1)
//         }
//     }

//     for(let [key, value] of map){
//         if(value > 1){
//             return false
//         }
//     }

//     return true
// }

// console.log(hasUniqueCharecters("helo"))


// function checkInc(arr){
//     for(let i = 2; i<=arr.length-1; i+=2){
//         if(arr[i-2] > arr[i]){
//             return false
//         }
//     }

//     return true;
// }


// function checkDec(arr){
//     for(let i = 2; i<=arr.length-1; i+=2){
//         if(arr[i-2] < arr[i]){
//             return false
//         }
//     }

//     return true;
// }


// function orderOfAliens(arr){
//     if(checkInc(arr)){
//         return "increasing"
//     }else if(checkDec(arr)){
//         return "decreasing"
//     }
//     return "none"
// }

// console.log(orderOfAliens([2,3,1,4,2]))


// function subsequence(str){
//     let i = 0; 
//     let count = 0;
//     let max = 0;
//     while(i < str.length){
//         if(str[i] == '1'){
//             count++
//         }else if(str[i] == '0'){
//             count = 0
//         }
//         i++;
//         max = Math.max(max, count);
//     }
//     return max;
// }

// console.log(subsequence("11001010111111"))

// function concatinate(arr, delimiter){
//     return arr.join(`${delimiter}`)
// }

// console.log(concatinate(["apple", "banana", "orange"], "-"))

// function findOne(arr){
//     let l = 0;
//     let r = arr.length - 1;
//     let res = -1;
//     while(l <= r){
//         let mid = Math.floor((l+r)/2);
//         if(arr[mid] == 0){
//             l = mid + 1;
//         }else{
//             r = mid - 1;
//             res = mid;
//         }
//     }

//     return res
// }

// console.log(findOne([0,0,0,1,1,1]))




// function findOne(arr){
//     let l = 0;
//     let r = arr.length - 1;
//     while(l <= r){
//         let mid = Math.floor((l+r)/2);
//         if(arr[mid] == 0){
//             if(1 !== arr[mid - 1]){
//                 return mid;
//             }else{
//                 r = mid - 1;
//             }
//         }else if(arr[mid] < 1){
//             l = mid + 1;
//         }else{
//             r = mid - 1;
//         }
//     }

//     return -1
// }

// console.log(findOne([0,0,0,1,1,1]))


// function rotatedSorted(arr){
//     let l = 0;
//     let r = arr.length - 1;
//     let start = 0;

//     while(l <= r){
//         let mid = Math.floor((l+r)/2); // 3
//         if(arr[mid] < arr[mid-1] && arr[mid] > arr[mid+1]){
//             start = mid;
//         }else if(arr[mid] > arr[l]){
//             l = mid + 1 // 4
//         }else if(arr[mid] < arr[l]){
//             r = mid - 1;
//         }
//     }
    
//     console.log(start, l, r)
// }


// console.log(rotatedSorted([4,5,6,7,8,9,1,2,3]))
// function calculateTime(arr, mid){
//     let time = 0;
//     for(let n of arr){
//         time+=Math.ceil((n/mid))
//     }

//     return time;
// }


// function bookReading(arr, h){ // o(n log max);
//     let l = 0;
//     let r = Math.max(...arr); //or 10^9 => 1000000000
//     let ans = r;

//     while(l <= r){
//         let mid = Math.floor((l+r)/2);
//         let time = calculateTime(arr, mid)
//         if(time <= h){
//             ans = mid;
//             r = mid - 1;
//         }else{
//             l = mid + 1;
//         }
//     }

//     return ans;
// }

// console.log(bookReading([3,6,7,11], 8))

// function findLessOrEqualInRow(arr, mid){
//     let count = 0;
//     for(let col = 0; col<arr.length; col++){
//         if(arr[col] > mid){
//             break
//         }else{
//             count++;
//         }
//     }

//     return count;
// }


// function countOfElementsLessOrEqual(matrix, mid){
//     let n = matrix.length;
//     let count = 0;
//     for(let row = 0; row<n; row++){
//         if(matrix[row][0] > mid){
//             break;
//         }else if(matrix[row][n-1] < mid){
//             count += n;
//         }else{
//             count += findLessOrEqualInRow(matrix[row], mid);
//         }
//     }
//     return count;
// }


// function kthSmallestElement(matrix, k){
//     let n = matrix.length;
//     let l = matrix[0][0];
//     let r = matrix[n-1][n-1];
//     let ans = r;

//     while(l <= r){
//         let mid = Math.floor((l+r)/2); // 8, 12, 14, 13
//         let count = countOfElementsLessOrEqual(matrix, mid); //8(<arr>) => 2 != k, 12(<arr>) => 6 != k, 14(<arr>) => 8 != k, 13(<arr>) => 8 != k,
//         if(count == k){
//             ans = mid;
//             r = mid - 1; // 13, 12
//         }else if(count < k){
//             l = mid + 1; // 9, 13,
//         }else if(count > k){
//             ans = mid;
//             r = mid - 1;
//         }

//     }
//     return ans;
// }

// console.log(kthSmallestElement([[1,5,9],[10,11,13], [12,13,15]], 8))



// function diffBetweenSumLeftRight(arr){
//     let ans = [];
//     let sum = 0;
//     let sum2 = 0; 
//     for(let i = 0; i<arr.length; i++){
//         sum = 0
//         for(let j = i+1; j<arr.length; j++){
//             sum+=arr[j]
//         }
//         sum2 = 0;
//         for(let j = 0; j<i; j++){
//             sum2+=arr[j]
//         }
//         ans.push(Math.abs(sum-sum2))
//     }
//     return ans;
// }
// console.log(diffBetweenSumLeftRight([1,2,3,4,10]))




