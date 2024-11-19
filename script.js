/*
const mymoin = document.getElementById('mymoin');
const myrun = document.getElementById('myrun');
const myplus = document.getElementById('myplus');
const num = document.getElementById('num');
let count = 0;

myplus.onclick = function(){
    count++;
    num.textContent = count ;
}
mymoin.onclick = function(){
    count--;
    num.textContent = count ;
}
myrun.onclick = function(){
    count = 0;
    num.textContent = count ;
}
*/
//var login=parseInt(prompt('donner otre login'));
//var mp=prompt('donner votre mot de passe');
// > < >= <= == != === !== && ||
/*var ndrlign=parseInt(prompt('donner nbr de lignes'))
var ndrcol=parseInt(prompt('donner nbr de colonnes'))

document.write("<table border='1'>")
for(i = 0 ; i <=nbrlign; i++){
    document.write("<tr>")
    for(j=0 ; j <= ndrcol; j++){
        
    }
}*/
/*var tableau=Array('aaa','bbb','ccc',25,true)

for (i=0; i<tableau.length; i++){
    console.log(tableau[i]
    )
}
console.log('.................................')
tableau.forEach(Element=> {
    console.log(Element)
})
var valeur=prompt('donner une valeur')
while (valeur>10){
    console.log('donner une valeur plus petite')
    valeur=prompt('donner une valeur')
}





var valeur1;    
var opera;

var nomber = document.querySelectorAll('.nomber')
nomber .forEach ( btn => {
    btn.addEventListener ( 'click' ,function(){
        afficher(btn)
   })}
)

var operator = document.querySelectorAll('.operator')
operator .forEach ( op => {
    op.addEventListener ( 'click' ,function(){
        operation(op)
   })}
)

var resultat = document.querySelector('.resultat')

resultat.addEventListener ( 'click' ,function(){
    egal()
})


var cancel = document.querySelector('.cancel')
cancel.addEventListener ( 'click' ,function(){
    cance()
})

function afficher(btn){
    var valreur = btn.textContent
    document.getElementById('exrit').value+= valreur
}


function operation(op){
    opera = op.textContent
    valeur1 = document .getElementById('exrit').value
    console.log(opera)
    console.log(valeur1)
    document.getElementById('exrit').value =""
}

function egal(){
    var valuer2 = document.getElementById('exrit').value

    switch(opera){
        case'*':
            document.getElementById('exrit').value=valeur1*valuer2
            break;
        case'/':
            document.getElementById('exrit').value=valeur1/valuer2
            break;
        case'-':
            document.getElementById('exrit').value=valeur1-valuer2
            break;
        case'+':
            document.getElementById('exrit').value=parseFloat(valeur1) + parseFloat(valuer2)
            break;
    }
}

function cance(){
    document.getElementById('exrit').value=""
    valeur1="";
    opera="";

var flech = document.querySelectorAll('icon');
var div = document.querySelectorAll('div')

flech.forEach(flc=> {
    flc.addEventListener('click',function){
        switch(this.textContent){
            case
        }
    }
});}
var dhoreuro = prompt( 'you have dh or euro' )
if( dhoreuro === 'dh' ){
    var dh = prompt('entre nombre de dh')
    console.log(dh)
    euro = dh*10
    console.log (`tu as ${euro}$`)
}
else if(dhoreuro === 'euro') {
    var euro = prompt('entre nombre de euro')
    console.log(euro)
    dh = euro/10
    console.log (`tu as ${dh} MAD`)
}
var btn = document.querySelector('.btn')
btn.addEventListener('click', function(){
    var valeur=document.querySelector('.value').value
    console.log(valeur)
    if (valeur<10) {
            alert('fout')
        }
        else{
            var maj=0
            var num=0
            for (let i = 0; i< valeur.length; i++) {
                var code= valeur.charCodeAt(i)
                if (code>=65 && code <=90) {
                    maj++
                }
                if (code>=48 && code <=57) {
                    num++
                }
            }
            if (maj<2 || num<2) {
                alert('erreur')
            }
        }
} )
        var btn = document.querySelector('.btn')
        btn.addEventListener('click', function(){
            var valeur=document.querySelector('.value').value
            console.log(valeur)
         for (let i = 0; i< valeur.length; i++) {
            var code= valeur.charCodeAt(i)
            if (!((code>=65 && code <=90) || (code>=97 && code <=122))) {
                alert('erreur')
                return
             }
            }})       
var btn = document.querySelector('.btn')
    btn.addEventListener('click', function(){
        var valeur=document.querySelector('.value').value
        console.log(valeur)
    for (let i = 0; i< valeur.length; i++) {
        var code= valeur.charCodeAt(i)
        if (!((code>=65 && code <=90) || (code>=97 && code <=122))) {
            alert('erreur')
            return
            }
}})

var btn = document.getElementById('sommes');

btn.addEventListener('click', function() {
    var nombre1 = document.getElementById('Num1').value;
    var nombre2 = document.getElementById('Num2').value;
    let S = parseFloat(nombre1) + parseFloat(nombre2);
    console.log(S);
});
let pass = prompt('Écrire le mot de passe');

while (pass.length < 8) {
    alert('Le mot de passe  au moins 8 caractères.');
    pass = prompt('Écrire le mot de passe');
}

console.log('Mot de passe KHEDAM:', pass);
var img = document.querySelectorAll('.img')
img.forEach(img => {
    img.addEventListener('click',function(){
        document.querySelector('.igm_grand').src=this.src;
        document.querySelector('.textp').innerHTML=this.alt;
    })

});
var posPhoto = 0;
var btnRight = document.getElementById('right');
btnRight.addEventListener('click', function() {
    posPhoto++;
    if (posPhoto >= img.length) {
        posPhoto = 0;
    }
    document.querySelector('.igm_grand').src = img[posPhoto].src; 
    document.querySelector('.textp').innerHTML = img[posPhoto].alt; 
});
var btnLeft = document.getElementById('left');
btnLeft.addEventListener('click', function() {
    posPhoto--;
    if (posPhoto < 0) {
        posPhoto = img.length - 1; 
    }
    document.querySelector('.igm_grand').src = img[posPhoto].src;
    document.querySelector('.textp').innerHTML = img[posPhoto].alt;
});

document.querySelector('#igm_grand').addEventListener('click',function(){
    
    document.querySelector('.Pigm_grand').src=this.src;
    document.querySelector('#backgris').style.display="flex";

})

document.querySelector('#icon_sortie').addEventListener('click',function(){
    document.querySelector('#backgris').style.display="none";
})
const listPhotos = [
    {id: 0, url: "https://img.freepik.com/photos-gratuite/abstrait-bleu-art-enfume_53876-110800.jpg?uid=R109187717&ga=GA1.1.268787736.1723251777", description: "je sius image 1"},
    {id: 0, url: "https://img.freepik.com/photos-gratuite/presentation-affichage-produit-salle-vide-metaverse-futuriste-technologie-abstraite-scifi-fond-3d-lumiere-neon_56104-2314.jpg?uid=R109187717&ga=GA1.1.268787736.1723251777", description: "je sius image 2"},
    {id: 0, url: "https://img.freepik.com/photos-gratuite/composition-abstraite-lumiere-ultraviolette-uv_23-2149243976.jpg?uid=R109187717&ga=GA1.1.268787736.1723251777", description: "je sius image 3"},
    {id: 0, url: "https://img.freepik.com/photos-gratuite/abstrait-colore-splash-3d-fond-generatif-fond-ai_60438-2509.jpg?uid=R109187717&ga=GA1.1.268787736.1723251777", description: "je sius image 4"}
];

var ul = document.createElement('ul');
listPhotos.forEach(element => {
    var li = document.createElement('li');
    var image = document.createElement('img');
    
    image.setAttribute('src', element.url);
    image.setAttribute('alt', element.description);
    image.setAttribute('rel', element.id);
    image.setAttribute('class', 'photo');
    
    li.appendChild(image);
    ul.appendChild(li);
    console.log(image);
});

document.querySelector('.div2').appendChild(ul);

document.querySelectorAll('.photo').forEach(element => {
    element.addEventListener("click",function(){
        document.querySelector('.igm_grand').src=this.src
    })
});*/
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
let isSpeaking = false; // Variable pour suivre l'état de la synthèse vocale

const textToSpeech = () => {
    const synth = window.speechSynthesis;
    const text = textarea.value;

    // Si la synthèse vocale n'est pas en cours et il y a du texte
    if (!synth.speaking && text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.onstart = () => {
            isSpeaking = true;
            button.innerText = "Pause"; // Changer le texte du bouton
        };
        utterance.onend = () => {
            isSpeaking = false;
            button.innerText = "Speak"; // Réinitialiser le texte du bouton lorsque la lecture est terminée
        };

        synth.speak(utterance);
    }

    // Si le texte a plus de 50 caractères et la synthèse est en cours, permettre de mettre en pause ou reprendre
    if (text.length > 50) {
        if (synth.speaking && isSpeaking) {
            button.innerText = "Pause";
            synth.pause(); // Mettre en pause la synthèse vocale
            isSpeaking = false;
        } else if (!synth.speaking && !isSpeaking) {
            button.innerText = "Resume";
            synth.resume(); // Reprendre la synthèse vocale
            isSpeaking = true;
        }
    } else {
        // Si le texte est trop court, simplement afficher que la lecture se fait
        button.innerText = "Speaking";
        isSpeaking = false;
    }
};

// Ajouter l'événement de clic sur le bouton pour démarrer ou mettre en pause la synthèse vocale
button.addEventListener("click", textToSpeech);
