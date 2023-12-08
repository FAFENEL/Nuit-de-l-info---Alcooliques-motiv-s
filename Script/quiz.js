function quizAnswer(bonneReponse, affiche)
{
    if(bonneReponse==true)
    {
        reponseT = document.getElementById(affiche + "T");
        reponseF = document.getElementById(affiche + "F");
        reponseT.classList.add("affiche");
        reponseF.classList.remove("affiche");
    }
    else
    {
        reponseT = document.getElementById(affiche + "T");
        reponseF = document.getElementById(affiche + "F");
        reponseF.classList.add("affiche");
        reponseT.classList.remove("affiche");
    }
}

function quizAnswerMultiple(bonneReponses, question, nbQ)
{
    i=1;
    reponseSelectionner="";
    while(i<nbQ + 1)
    {
        currentBox = document.getElementById(question + 'check' + i);
        currentBoxName = 'check' + i;
        if(currentBox.checked)
        {
            reponseSelectionner += currentBoxName;
        }
        i++;
    }

    if(reponseSelectionner == bonneReponses)
    {
        reponseT = document.getElementById('reponse' + question + "T");
        reponseF = document.getElementById('reponse' + question + "F");
        reponseT.classList.add("affiche");
        reponseF.classList.remove("affiche");
        document.getElementById('start').classList.add("hidden");
        document.getElementById('end').classList.add("affiche");
    }
    else
    {
        reponseT = document.getElementById('reponse' + question + "T");
        reponseF = document.getElementById('reponse' + question + "F");
        reponseF.classList.add("affiche");
        reponseT.classList.remove("affiche");
    }
}

function afficheVrai(affiche) {
    reponseT = document.getElementById(affiche + "T");
    reponseF = document.getElementById(affiche + "F");
    reponseT.classList.add("affiche");
    reponseF.classList.remove("affiche");
}

function afficheFaux(affiche) {
    reponseT = document.getElementById('reponse' + question + "T");
    reponseF = document.getElementById('reponse' + question + "F");
    reponseF.classList.add("affiche");
    reponseT.classList.remove("affiche");
}


// AUTRE
function appear(elementAppear) {
    document.getElementById(elementAppear).classList.toggle("affiche");
    document.getElementById("body").classList.toggle("body");
}