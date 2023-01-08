let total = 0;
let ecran = document.querySelector(".affichage");

function checking(saisie) {
  let saisieOk = "/^(d+|**|[+-*])+/g";
  for (let i = 0; i < saisie.length; i++) {
    if (saisieOk.indexOf(saisie.charAt(i)) < 0) {
      return false;
    }
  }
}

function calculer() {
  checking(ecran.value);
  let x = eval(ecran.value);
  ecran.value = x;
  return false;
}

function afficher(x) {
  ecran.value += x;
}
