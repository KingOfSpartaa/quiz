let score = 0;

let questions = [
    ["Ile zimia ma księżyców", 1],
    ["Ile odnóży ma pająk", 6],
    ["Ile palcy ma człowiek", 20]
]

for (let i=0; i<questions.length; i++){
 let answer =  window.prompt(questions[i][0], "");
    parseInt(answer, 10);
    
    if (answer == questions[i][1]){
        score++;
       alert("Tak to jest prawidłowa odpowiedz, zdobyłeś punkt!" + " Twój aktualny wynik to: " + score);
       
    } else {
        alert("Źle! Prawidłowa odpowiedź to: " + questions[i][1] + " Twój aktualny wynik to: " + score);
           
    }  
}






