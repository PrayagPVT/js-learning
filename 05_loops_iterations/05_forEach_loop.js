const coding = ["js", "ruby","java","python","cpp"]

// for each loop 
// for each me function dete hai aur wo function cal back hOTA Hai isiliye usme name nhi likhte hai 
// yaha pe val array ke andar values pe lagaya hai val ki jagah kuch bhi a skta hai jese ki num, value , val aur bhi
coding.forEach( function (val) {
    console.log(val);
} )
// output is 
// js
// ruby
// java
// python
// cpp


// yaha arrow funtion se kiya hai 
coding.forEach( (item) => {
    console.log(item);
} )
// output is 
// js
// ruby
// java
// python
// cpp

// ese bhi kr skte hai for each loop ko use 
function printMe(item){
    console.log(item);
}

coding.forEach(printMe)
// output is 
// js
// ruby
// java
// python
// cpp

coding.forEach( (item, index , arr) => {
      console.log(item,index,arr);
})
// output is 
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

const myCoding = [
    {
        languageName : "javascript",
        langauageFileNmae :"js"
    },
    {
        languageName : "python",
        langauageFileNmae :"py"
    },
    {
        languageName : "c++",
        langauageFileNmae :"cpp"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})

// output is
// javascript
// python
// c++