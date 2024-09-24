const storyText = [
    "Você é um astronauta em uma missão para explorar um planeta desconhecido. Ao pousar, você vê duas direções: uma floresta densa e uma montanha ao longe.",
    "Você decide entrar na floresta e, após alguns minutos, encontra uma criatura alienígena. Ela parece amigável e lhe oferece ajuda.",
    "Você decide escalar a montanha e descobre uma antiga estação espacial abandonada. Você pode investigar ou voltar.",
    "A criatura alienígena lhe mostra um caminho seguro e revela que o planeta esconde um grande segredo.",
    "Na estação espacial, você encontra tecnologia avançada e uma mensagem de socorro de outra equipe de astronautas. Você pode tentar ajudar ou fugir.",
    "Você seguiu o caminho com a criatura e, juntos, vocês descobriram um tesouro alienígena que transforma suas vidas!",
    "Na estação espacial, você decide ajudar a outra equipe e descobre que eles têm informações valiosas sobre o universo."
];

const choicesText = [
    [
        { text: "Explorar a floresta", next: 1 },
        { text: "Escalar a montanha", next: 2 }
    ],
    [
        { text: "Aceitar a ajuda da criatura", next: 3 },
        { text: "Desconfiar e fugir", next: 0 }
    ],
    [
        { text: "Investigar a estação", next: 4 },
        { text: "Voltar para o planeta", next: 0 }
    ],
    [
        { text: "Agradecer e seguir com a criatura", next: 5 },
        { text: "Deixar a criatura e ir embora", next: 0 }
    ],
    [
        { text: "Ajudar a equipe", next: 6 },
        { text: "Fugir rapidamente", next: 0 }
    ],
    [
        { text: "Explorar mais o tesouro", next: 0 },
        { text: "Usar o tesouro para voltar para casa", next: 0 }
    ],
    [
        { text: "Estudar a tecnologia encontrada", next: 0 },
        { text: "Sair e voltar ao seu planeta", next: 0 }
    ]
];

let currentStoryIndex = 0;

function updateStory() {
    const storyElement = document.getElementById("story");
    const choicesElement = document.getElementById("choices");
    
    storyElement.innerText = storyText[currentStoryIndex];
    choicesElement.innerHTML = "";

    const choices = choicesText[currentStoryIndex];
    choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => {
            currentStoryIndex = choice.next;
            updateStory();
        };
        choicesElement.appendChild(button);
    });
}

updateStory();
