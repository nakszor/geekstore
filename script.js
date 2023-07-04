let listPainting = [
    {   
        nome: "Clock",
        imagem: "./assets/img/painting/clock.jpg",
        preco: "Valor do item",
        categoria: "Paintings",
    },
    {   
        nome: "Gamepad",
        imagem: "./assets/img/painting/gamepad.jpg",
        preco: "Valor do item",
        categoria: "Paintings",
    },
    {   
        nome: "Personagem",
        imagem: "./assets/img/painting/personagem.jpg",
        preco: "Valor do item",
        categoria: "Paintings",
    },
];
let listFigure = [
    {   
        nome: "Personagem Dragon Ball-Z",
        imagem: "./assets/img/actions/dragonballpersonagem.jpg",
        preco: "Valor do item",
        categoria: "Action Figure",
    },
    {  
        nome: "Anime woman",
        imagem: "./assets/img/actions/animewoman.jpg",
        preco: "Valor do item",
        categoria: "Action Figure",
    },
    {   
        nome: "Personagem",
        imagem: "./assets/img/actions/starwarspersonagem.jpg",
        preco: "Valor do item",
        categoria: "Action Figure",
    },
];

let listaItensPaintings = document.querySelector(".lista-paintings")
 
function createPaintingItem(objeto){
    for (let index = 0; index < objeto.length; index++) {
    
        let itemCard = objeto[index]
        
        let card = criarCards(itemCard)
        
        listaItensPaintings.appendChild(card)

    } 
}  
createPaintingItem(listPainting)

let listaItensAction = document.querySelector(".lista-action")

function createActionItem(objeto){
    
    for (let index = 0; index < objeto.length; index++) {
        
        let itemCard = objeto[index]
       
        let card = criarCards(itemCard)
        
       listaItensAction.appendChild(card)
        
    } console.log(listaItensAction)
    }
createActionItem(listFigure)

 function criarCards (itemCard) {
    let nome        = itemCard.nome
    let preco       = itemCard.preco
    let imagem      = itemCard.imagem
    let categoria   = itemCard.categoria

    let tagLi           = document.createElement("li")
    let imagemDoItem    = document.createElement("img")
    let nomeDoItem      = document.createElement("p")
    let valorDoItem     = document.createElement("p")

    imagemDoItem.src         = `${imagem}`
    imagemDoItem.alt         = nome
    nomeDoItem.innerText     = nome
    valorDoItem.innerText    = preco

    tagLi.classList.add("card")
    imagemDoItem.classList.add("image-card")
    nomeDoItem.classList.add("item-name")

    tagLi.appendChild(imagemDoItem)
    tagLi.appendChild(nomeDoItem)
    tagLi.appendChild(valorDoItem)

    
    return tagLi
   
}   

