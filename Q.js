
const quiz = [
    {
        question: 'quem fez mais gols por seleções?',
        answers: [
            { text: 'Marta', correct: false },
            { text: 'Klose', correct: false },
            { text: 'Cristiano Ronaldo', correct: true },
            { text: 'Messi', correct: false },
        ]
    },
    {
        question: "Quem é o maior artilheiro da história da Copa do Mundo?",


        answers: [

            { text: "Pelé", correct: false },
            { text: "Marta", correct: false },
            { text: "Miroslav Klose", correct: true },
            { text: "Ronaldo Fenômeno", correct: false }




        ]
    },


    {






        question: "Quem tem mais títulos de Liga dos Campeões da UEFA?",


        answers: [


            { text: "Cristiano Ronaldo", correct: false },
            { text: "Lionel Messi", correct: false },
            { text: "Barcelona", correct: false },
            { text: "Real Madrid", correct: true }
        ]
    },
    {




        question: "Qual país ganhou a Copa do Mundo de 2018?",


        answers: [

            { text: "Brasil", correct: false },
            { text: "França", correct: true },
            { text: "Alemanha", correct: false },
            { text: "Argentina", correct: false }


        ]


    },


    {


        question: "Qual jogador é conhecido como o 'Rei do Futebol'?",


        answers: [


            { text: "Diego Maradona", correct: false },
            { text: "Pelé", correct: true },
            { text: "Zico", correct: false },
            { text: "Raphael Veiga", correct: false }


        ]


    },


    {
        question: "Quem é o maior artilheiro da história da seleção brasileira?",




        answers: [

            { text: "Neymar", correct: true },
            { text: "Ronaldo Fenômeno", correct: false },
            { text: "Pelé", correct: false },
            { text: "Romário", correct: false }


        ]


    },


    {




        question: "Qual é o clube mais vitorioso do Campeonato Brasileiro?",


        answers: [




            { text: "Flamengo", correct: false },
            { text: "Palmeiras", correct: true },
            { text: "São Paulo", correct: false },
            { text: "Corinthians", correct: false }


        ]
    },
    {


        question: "Quem foi o vencedor da Bola de Ouro em 2023?",


        answers: [

            { text: "Lionel Messi", correct: true },
            { text: "Robert Lewandowski", correct: false },
            { text: "Karim Benzema", correct: false },
            { text: "Erling Haaland", correct: false }
        ]


    },
    {
        question: "Quem é o maior artilheiro da história da Premier League?",
        answers: [

            { text: "Wayne Rooney", correct: false },
            { text: "Sergio Agüero", correct: false },
            { text: "Alan Shearer", correct: true },
            { text: "Harry Kane", correct: false }
        ]
    },
    {




        question: "Qual seleção venceu a Copa do Mundo de 2002?",


        answers: [

            { text: "França", correct: false },
            { text: "Alemanha", correct: false },
            { text: "Argentina", correct: false },
            { text: "Brasil", correct: true }


        ]


    },
    {

        question: "Quem é o maior goleador da história da Champions League?",


        answers: [
            { text: "Lionel Messi", correct: false },
            { text: "Cristiano Ronaldo", correct: true },
            { text: "Raúl", correct: false },
            { text: "Karim Benzema", correct: false }
        ]
    }
]

const containerbutton = document.querySelector('.botoess')
const titulo = document.querySelector('.titulo')
const BotaoStart = document.querySelector('.botao-start')
const question = document.querySelector('.question')
const botoes = document.querySelectorAll('.botao')
const next = document.querySelector('.next')


let currentquestion = 0
let totalCorrect = 0

BotaoStart.addEventListener('click', () => {
    titulo.style.display = 'flex'
    question.style.display = 'flex'
    next.style.display = 'flex'
    botoes.forEach(function (botao) {
        botao.style.display = 'flex';
    });
    BotaoStart.style.display = 'none'
    nextQuestion()
})

function nextQuestion() {
    resetStates()

    if (quiz.length === currentquestion) {
        return finishgame()
    }

    while (containerbutton.firstChild) {
        containerbutton.removeChild(containerbutton.firstChild)
    }

    document.body.removeAttribute('class')


    question.textContent = quiz[currentquestion].question
    quiz[currentquestion].answers.forEach(answer => {
        const newAwsers = document.createElement("button")
        newAwsers.classList.add('botoes')
        newAwsers.textContent = answer.text
        if (answer.correct) {
            newAwsers.dataset.correct = answer.correct
        }
        containerbutton.appendChild(newAwsers)
        newAwsers.addEventListener('click', selectAnswer)
    })
}

function resetStates() {
    while (containerbutton.firstChild) {
        containerbutton.removeChild(containerbutton.firstChild)
        
    }
    
}

document.body.removeAttribute('class')

function selectAnswer(event) {
    const cliqueCorreto = event.target
    if (cliqueCorreto.dataset.correct) {
        document.body.classList.add('correct')
        totalCorrect++
    }
    else {
        document.body.classList.add('incorrect')

    }

    document.querySelectorAll('.botoes').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')

        }
        else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    currentquestion++
    next.addEventListener("click", nextQuestion)
    
}


function finishgame() {
    
 const totalquestion = quiz.length
 const performance = Math.floor(totalCorrect *100/ totalquestion)

let message = ""

switch(true){
    case (performance >= 90):
        message = 'Exelente, Parabens!!'
        break
    case (performance>= 70):
    message = 'Muito Bom !!!'
    break
    case( performance >= 40):
    message = "você pode fazer melhor "
    break
    default:
        message = "Muito Ruim"
}
containerbutton.innerHTML = 
`
<div class = final>
<p>
Você acertou ${totalCorrect} de ${totalquestion} Questões

<span> Resultado : ${message} </span>
</p>
<button onclick=window.location.reload()> Refazer teste? </button>
</div>
`
next.style.display = 'none'
question.style.display = 'none'
document.body.removeAttribute('class')
}
