
const f= async ()=>
{
  var uName=  document.querySelector('.userName');
  var uPassword= document.querySelector('.passWord')
     try
     {
      const a= await fetch('./userData.json')
      console.log(a);
      if(!a.ok)
      {
        throw new console.error("There is No data in the file");
      }
       
      const j= await a.json();
      const users= await j.user
      const f=users.find((index)=> index.username===uName.value && uPassword.value===index.password
      )
       if(f)
       {
        alert("Success")
        window.location.replace('./project1.html')
       }
       else{
        alert("Not match");
       }
     }
     catch(e)
     {
      console.log(e);
     }
}
   
function call(e)
{
  e.preventDefault();
   f();
}