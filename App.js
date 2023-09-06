let Question= [{
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b':  'CSS',
    'c': 'javascript',
    'd': 'python',
    'correc ':'a'
},
{
    'que': 'Which year was javascript    language',
    'a':'1996',
    'b':'1994',
    'c':'1995',
    'd':' none of above',
    'correct': 'c',
},
{
    'que': 'What  does CSS stands for?',
    'a':'Hypertext markup Language',
    'b':'Cascading style sheet',
    'c': ' Jason Object Notation',
    'd':'computer standard sheet',
    'correct':'b',
},
{
    'que':'c language is given by ?'
    , 'a':'abc',
    'b':'dennis richel',
    'c':'john',
    'd':'none of these',
    'correct':'b'
}
]
let total = Question.length;
let right= 0,
 wrong =0;
 let index = 0;
let queBox = document.getElementById('queBox')
let optionInput= document.querySelectorAll('.option');


let loadQuestion = ()=>{
if(index===total)
return endQuiz();

    reset();
 let data = Question[index]
 console.log(data)
 queBox.innerText= ` ${index+1}) ${data.que}`;
 optionInput[0].nextElementSibling.innerText= data.a;
 optionInput[1].nextElementSibling.innerText= data.b;
 optionInput[2].nextElementSibling.innerText= data.c;
 optionInput[3].nextElementSibling.innerText= data.d;

}

let submitquiz=()=>{
  let  data = Question[index];
    const ans = getAnswer();
    if(ans==data.correct )
    {
        right++;
    }
    else
    {
        wrong++;
    }

    index++;

    loadQuestion();

    return ;

}
const getAnswer=()=>{
 let answer;
    optionInput.forEach(
        (input)=>{

        if(input.checked){
       
         answer= input.value;
   
     
        }
    }
   
    )
    return answer;
}

let reset= ()=>{
    optionInput.forEach((input)=>{
        input.checked= false;
    })
}

let endQuiz= ()=>{
  document.getElementById("box").innerHTML=` 
  <h3>Thank  you for playing the Quiz </h3>
  <h2> ${right}/ ${total} are correct </h2> `
}
// submitquiz();

loadQuestion();