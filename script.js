const perguntas = [

{
pergunta:"Quantas Copas do Mundo a Argentina conquistou?",
respostas:["2","3","4","5"],
correta:1
},

{
pergunta:"Quem é o maior artilheiro da história da Argentina?",
respostas:["Maradona","Messi","Batistuta","Di María"],
correta:1
},

{
pergunta:"Em qual ano a Argentina ganhou a Copa do Mundo de 2022?",
respostas:["2018","2020","2022","2024"],
correta:2
},

{
pergunta:"Qual jogador ficou conhecido como El Pibe de Oro?",
respostas:["Messi","Maradona","Riquelme","Aguero"],
correta:1
},

{
pergunta:"Qual é a cor principal do uniforme argentino?",
respostas:["Verde","Azul e branco","Vermelho","Preto"],
correta:1
},

{
pergunta:"Quem marcou dois gols na final da Copa de 2022 pela Argentina?",
respostas:["Messi","Di María","Mbappé","Julián Álvarez"],
correta:0
},

{
pergunta:"Qual competição a Argentina venceu em 2021 contra o Brasil?",
respostas:["Copa América","Eurocopa","Mundial de Clubes","Liga das Nações"],
correta:0
},

{
pergunta:"Qual número Messi usa tradicionalmente na seleção?",
respostas:["7","9","10","11"],
correta:2
},

{
pergunta:"Qual estádio é a casa da seleção argentina em Buenos Aires?",
respostas:["Maracanã","Monumental de Núñez","La Bombonera","Mineirão"],
correta:1
},

{
pergunta:"Quantas estrelas a Argentina possui na camisa após 2022?",
respostas:["1","2","3","4"],
correta:2
}

];


let atual = 0;
let pontos = 0;
let tempo = 60;
let intervalo;


// elementos

const pergunta = document.getElementById("pergunta");
const respostas = document.getElementById("respostas");
const pontosTela = document.getElementById("pontos");
const tempoTela = document.getElementById("tempo");
const progresso = document.getElementById("progresso");
const proxima = document.getElementById("proxima");


// iniciar

carregarPergunta();

intervalo=setInterval(()=>{
    
    tempo--;

    tempoTela.innerHTML=tempo;


    if(tempo<=0){

        finalizar();

    }

},1000);



// carregar pergunta

function carregarPergunta(){

let q=perguntas[atual];


pergunta.innerHTML=
(atual+1)+"/"+perguntas.length+" - "+q.pergunta;


respostas.innerHTML="";


q.respostas.forEach((resposta,index)=>{


let botao=document.createElement("button");

botao.innerHTML=resposta;


botao.onclick=function(){

verificar(index);

};


respostas.appendChild(botao);


});


progresso.style.width=
((atual/perguntas.length)*100)+"%";

}



// verificar resposta

function verificar(escolha){


let correta=perguntas[atual].correta;


if(escolha==correta){

pontos++;

pontosTela.innerHTML=pontos;

alert("✅ Resposta correta!");

}

else{

alert("❌ Resposta errada!");

}


proximaPergunta();


}




function proximaPergunta(){

atual++;


if(atual < perguntas.length){

carregarPergunta();

}

else{

finalizar();

}

}



// finalizar

function finalizar(){


clearInterval(intervalo);


document.querySelector(".quiz").style.display="none";


let resultado=document.querySelector(".resultado");

resultado.style.display="block";


document.getElementById("mensagem").innerHTML=

"🏆 Você fez "+pontos+" de "+perguntas.length+" pontos!";


salvarRanking();


}



// reiniciar

function reiniciar(){

location.reload();

}



// curiosidades

const curiosidades=[

"🇦🇷 A Argentina venceu três Copas do Mundo.",
"⚽ Messi conquistou a Copa de 2022.",
"🏆 A seleção argentina possui vários títulos internacionais.",
"💙 O uniforme representa as cores da bandeira argentina.",
"⭐ A Argentina é uma das seleções mais tradicionais do futebol."

];


function curiosidade(){


let numero=Math.floor(
Math.random()*curiosidades.length
);


document.getElementById("curiosidade").innerHTML=

curiosidades[numero];


}



// ranking

function salvarRanking(){


let ranking=
JSON.parse(localStorage.getItem("ranking")) || [];


ranking.push(pontos);


ranking.sort((a,b)=>b-a);


ranking=ranking.slice(0,5);


localStorage.setItem(
"ranking",
JSON.stringify(ranking)
);


}