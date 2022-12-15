var array = [
    {
        rollNum: "13980",
        name: "amaan",
        course: "web and Mobile",
        age: 18
    },
    {
        rollNum: "13981",
        name: "saim",
        course: "web and Mobile",
        age: 18
    },
    {
        rollNum: "13982",
        name: "ali",
        course: "web and Mobile",
        age: 18
    },
    {
        rollNum: "13983",
        name: "saif",
        course: "web and Mobile",
        age: 18
    },
    {
        rollNum: "13984",
        name: "saad",
        course: "web and Mobile",
        age: 18
    },
    {
        rollNum: "13985",
        name: "abid",
        course: "web and Mobile",
        age: 18
    },
    {
        rollNum: "13986",
        name: "ahmed",
        course: "web and Mobile",
        age: 18
    },
    {
        rollNum: "13987",
        name: "faaiz",
        course: "web and Mobile",
        age: 18
    },
    {
        rollNum: "13988",
        name: "zohaib",
        course: "web and Mobile",
        age: 18
    },
    {
        rollNum: "13989",
        name: "aleem",
        course: "web and Mobile",
        age: 18
    },
]
 var  inp = document.getElementById("inp")
 var search = document.getElementById("search");

 function addValue() {
     for ( var i = 0; i < array.length; i++) {
         if (inp.value == array[i].name) {
             console.log(array [i]);
             document.getElementById("name").innerText = array[i].name
             document.getElementById("age").innerText =array[i].age
             document.getElementById("roll").innerText = array[i].rollNum
             document.getElementById("course").innerText = array[i].course
            }
    }
  }

// var inp = document.getElementById("inp");
// var show = document.getElementById("search");
// var show = document.getElementById("out1")
// function result() {
//     for (var i = 0; i < array.length; i++) {
        
//         console.log(array[i])
//         if (inp.value == array[i].rollNum) {
//             document.getElementById("name").innerText = array[i].name
//             document.getElementById("age").innerText =array[i].age
//             document.getElementById("rollno").innerText = array[i].rollNum
//             document.getElementById("course").innerText = array[i].course
//         }
//     }
// }
