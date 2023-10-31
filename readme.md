# JS Practice Question



- [JS Practice Question](#js-practice-question)
  - [Q.no1](#qno1)
  - [Q.no2](#qno2)
  - [Q.no3](#qno3)



## Q.no1

 <p> 

 Write a javaScript function to check whether an `input` is `array or not`
 </p>





```
function checkArray(inp) {
   return Array.isArray(inp);
}

checkArray(1)

```

<b> Syntax</b>

```
Array.isArray(value)
```

## Q.no2

<p> 
Write a javaScript Function to clone an array 
</p>
<hr/>

<p> 
The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

</p>



`````
const originalArray = [1, 2, 3];
const clonedArray = originalArray.slice();
console.log(clonedArray);
  
`````



<b> Syntax</b>
```
slice()
slice(start)
slice(start, end)
```


## Q.no3



Write a function that ` calculates the sum of ` all `elements `in an array `using a loop`.

```
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

```