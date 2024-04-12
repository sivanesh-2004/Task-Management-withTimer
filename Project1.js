console.log("HI THIS IS THE SIVANESH");
// function add()
// {
//     var a=10;
// }
// add();

// a=10;
// console.log(a);
// let a;
    
    // document.querySelector('.btn').addEventListener('click',()=>{

    //   let change= document.querySelector(".siva");
    //     change.textContent="Hurray THE CONTENT CHANGED";
    //     change.classList.add("color");

    // });

    // function add(a,b)
    // {
    //     alert(a*b);
    // }

    // const message=(message)=>{console.log(" Hello World "+message)};

    // message("Sivanesh");


    // callBack is a function that is passed as a argument to another Function while 
    
    // arrays 
     
    const arr=[1,2,3,4,5];

    arr.map((index)=>{console.log(index)})

    console.log(arr.slice(0,2));

    console.log(arr);
    
    console.log(arr.splice(0,2));
    
    console.log(arr);

    arr.unshift(10);
    console.log(arr);

    const student=
    {
           name:"Sivanesh",
           Class:"CSE-B"
    }
    student.place="COVAI";
    console.log(student);
  for(let key in student)
  {
    console.log(key+":"+student[key]);
  }

  const arrOfObject=[
    {
        name:"Sivanesh",
        age:19,
        dept:"CSE"
    },
    {
        name:"KarthiKeyan",
        age:21,
        dept:"CSE"
    },
    { 
        name:"KishoreB",
        age:12,
        dept:"CSE"
    },
  ]

    //filtering the arrObjects

    let f=arrOfObject.find((index)=>{ return index.age<20});

    console.log(f);

  var Task=
  [
        {
            id:1,
            category:"work",
            subCategory:"Teacher",
            duration:"12:13:00",
            Task:"Teaching for the college Students",
        },
        {
            id:2,
            category:"work",
            subCategory:"Doctor",
            duration:"00:32:34",
            Task:"Treating the Patients",
        },
        
        {
            id:3,
            category:"PersonalSpace",
            subCategory:"Movies",
            duration:"00:00:12",
            Task:"Watching Animes,Thriller Movies....",

        },
        {
            id:4,
            category:"PersonalSpace",
            subCategory:"Video Game",
            duration:"24:54:00",
            Task:"Tag team Playing",

        },
        {
            id:5,
            category:"work",
            subCategory:"Driver",
            duration:"23:1:00",
            Task:"Dropping the Children from school to home And Vice versaa..",

        }, 
        {
            id:6,
            category:"PersonalSpace",
            subCategory:"Running",
            duration:"4:00:00",
            Task:"Run in Ground",

        },
        {
            id:7,
            category:"PersonalSpace",
            subCategory:"Nil",
            duration:"5:08:07",
            Task:"-",

        },
        {
            id:8,
            category:"work",
            subCategory:"Farmer",
            duration:"00:56:8",
            Task:"Wandering around the fields",

        },
        {
            id:9,
            category:"PersonalSpace",
            subCategory:"Singing",
            duration:"77:00:00",
            Task:"Sung with freinds",

        },
        {
            id:10,
            category:"work",
            subCategory:"NIL",
            duration:"78:00:7",
            Task:"-",
        }
];

     var head=``;
   
       head+=`<tr>
        <th>Category</th>
        <th>SubCategory</th>
        <th>Duration</th>
        <th>Task</th>
       </tr>`
           
     let body=``;
    Task.map((index)=>{
       body+=` 
         <tr>
         <td>${index.category}</td>
          <td>${index.subCategory}</td>
          <td>${index.duration}</td>
          <td>${index.Task}</td>
         </tr>`;
    });
       let html=`<table>${head}` + `${body}</table>`

     document.querySelector(".main-div").innerHTML=html;
     console.log(html);
   
     let work=``;
   function Change()
   {
      var elementValue=document.getElementById('select-option');
      var k=elementValue.value;
   
         work=``;
         Task.filter((index)=>{return index.category==k}).map((index)=>{
         work+=` 
         <tr>
         <td>${index.category}</td>
          <td>${index.subCategory}</td>
          <td>${index.duration}</td>
          <td>${index.Task}</td>
         </tr>`;
         })
         document.querySelector(".main-div").innerHTML=`<table>${head}`+ `${work}</table>`;
   }
   document.querySelector('.Addnew').addEventListener('click',(e)=>{
        e.preventDefault();
        
        const userTask={
            id:0,
            category:"",
            subCategory:"",
            duration:"",
            Task:"",
          };
       let categoryName=document.querySelector('.categoryName').value;
        let subCategoryName=document.querySelector('.SubName').value;
        let hour=document.querySelector('.hour-spn').textContent;
        let min=document.querySelector('.min-spn').textContent;
        let sec=document.querySelector('.sec-spn').textContent;
        console.log(min+" "+hour+" "+sec);
        let duration=`${hour}:${min}:${sec}`;
        let taskName=document.querySelector('.Tname').value;
        userTask.category=categoryName;
        userTask.subCategory=subCategoryName;
        userTask.duration=duration;
        userTask.Task=taskName; 
        userTask.id=(Task.length)+1;
        Task.push(userTask); 
        
    let body=``;
    Task.map((index)=>{
        body+=`
        <tr>
        <td>${index.category}</td>
        <td>${index.subCategory}</td>
        <td>${index.duration}</td>
        <td>${index.Task}</td>
        </tr>`;
     });

    document.querySelector(".main-div").innerHTML=`<table>${head}`+ `${body}</table>`; 
        console.log(Task);
   });

   document.querySelector('.remove-btn').addEventListener('click',(e)=>
{  
      e.preventDefault();
        let categoryName=document.querySelector('.categoryName').value;
        let subCategoryName=document.querySelector('.SubName').value;
        let task=document.querySelector('.Tname').value;
    let remove=Task.filter((index)=>{

        return (categoryName!=index.category || subCategoryName!=index.subCategory) && task!=index.Task;

    })
     
    console.log(remove)

     let b=``;

     remove.map((index)=>{
        b+=`
        <tr>
        <td>${index.category}</td>
        <td>${index.subCategory}</td>
        <td>${index.duration}</td>
        <td>${index.Task}</td>
        </tr>
        `
     })

     document.querySelector(".main-div").innerHTML=`<table>${head}`+`${b}</table>`;

     var r=0;

     let ind=Task.filter((index)=>{
        if(index.Task==task && index.category==categoryName && index.subCategory==subCategoryName)
        {
            return index;
        }
     })

     console.log(ind.category)

     Task.splice((ind.id-1),1);
     console.log(Task)
    
})


//Timer Functions 
   var timer;
   var min=0;
   var sec=0;
   var hour=0;
  document.querySelector('.start-btn').addEventListener('click',(e)=>{
     e.preventDefault();
    timer=setInterval(()=>{
      ++sec;
      document.querySelector('.sec-spn').textContent=sec.toString().padStart(2,"0");
      if(sec>=60)
      {
         sec=0;
        ++min;
        document.querySelector('.sec-spn').textContent=sec.toString().padStart(2,"0");
        document.querySelector('.min-spn').textContent=min.toString().padStart(2,"0");
        if(min==60)
        {
            min=0;
            ++hour;
            document.querySelector('.min-spn').textContent=min.toString().padStart(2,"");
            document.querySelector('.hour-spn').textContent=hour.toString().padStart(2,"0");
        }
      }
    },1000);
  })

document.querySelector('.stop-btn').addEventListener('click',(e)=>
{
     e.preventDefault();
    clearInterval(timer);
})

 document.querySelector('.reset-btn').addEventListener('click',(e)=>
{
    e.preventDefault();
    clearTimeout(timer);
    sec=0;
    min=0;
    hour=0;
    document.querySelector('.min-spn').textContent=min.toString().padStart(2,"0");
    document.querySelector('.sec-spn').textContent=sec.toString().padStart(2,"0");
    document.querySelector('.hour-spn').textContent=hour.toString().padStart(2,"0");
})