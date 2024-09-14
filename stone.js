let userscore=0;
let compscore=0;
let userchoice;
let syschoice;
let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".scissor");
let user=document.querySelector("#user");
let comp=document.querySelector("#comp");
let button=document.querySelector("button");
let choices=[rock,paper,scissor];



 function compchoice()
{  
    let compchoice=Math.floor(Math.random()*choices.length);
     syschoice=choices[compchoice];
    console.log(syschoice);
}

function checkwinner(){

    if(syschoice===userchoice)
    { 
       comp.innerText=`Computer score is ${compscore}`;
       user.innerText=`  Your score is ${userscore}`;
       button.innerText="Game was draw";
    }
    else if(syschoice==rock && userchoice==paper||
            syschoice==paper && userchoice==scissor||
            syschoice==scissor &&userchoice==rock)
    {
           userscore++;
           user.innerText=`Your score is ${userscore}`;
           button.innerText="You  beats computer";
    }

    else if(syschoice==rock && userchoice==scissor||
            syschoice==paper && userchoice==rock||
            syschoice==scissor && userchoice==paper)
    {
           compscore++;
           comp.innerText=`Computer score is ${compscore}`;
           button.innerText="Computer beats you";
    }
   
};

    choices.forEach(choice => {
    choice.addEventListener("click",()=>{
    userchoice=choice;
    console.log(userchoice);
    compchoice();
    checkwinner()
    });
   });
