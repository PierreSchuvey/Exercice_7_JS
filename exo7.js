var resultat = document.getElementById('pointure').value;
function calculer(resultat)
{
  resultat = resultat * 2;
  resultat = resultat + 5;
  resultat = resultat * 50;
  resultat = resultat - document.getElementById('annee').value;
  resultat = resultat + 1766;
  alert(resultat);
}
