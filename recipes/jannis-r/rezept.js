// Zutaten für Tomatensuppe
const zutaten = [
  'Zwiebel(n)',
  'Knoblauch',
  'Gemüsebrühe',
  'Tomaten, gehackt',
  'Olivenöl',
  'Zucker',
  'Salz',
  'Pfeffer',
  'Crème fraîche',
  'Basilikum frisch'
];

const mengen = [1, 3, 1200, 800, 2, 1, 0.5, 0.25, 100, 1];
const einheiten = ['', 'Zehe/n', 'ml', 'g', 'EL', 'TL', 'TL', 'TL', 'ml', 'Hand voll'];

const STANDARD_MENGE = 4;

document.addEventListener('DOMContentLoaded', updateRecipe);

function updateRecipe() {
  const portionenInput = document.getElementById('portionValue');
  const portionen = Number(portionenInput.value);
  const tabBody = document.querySelector('#recipeTable tbody');
  const errorMsg = document.getElementById('error');

  errorMsg.textContent = '';

  if (portionen < 1 || portionen > 50 || isNaN(portionen)) {
    errorMsg.textContent = 'Bitte geben Sie eine gültige Portionszahl (1 - 50) ein.';
    portionenInput.value = STANDARD_MENGE;
    return;
  }

  tabBody.innerHTML = '';

  for (let i = 0; i < zutaten.length; i++) {
    const skalierterWert = (mengen[i] * portionen) / STANDARD_MENGE;
    const displayWert = skalierterWert % 1 === 0 ? skalierterWert : skalierterWert.toFixed(2);
    const displayEinheit = einheiten[i] ? `${displayWert} ${einheiten[i]}` : displayWert;

    tabBody.innerHTML += `
      <tr>
        <td class="tdLeft">${displayEinheit} ${zutaten[i]}</td>
      </tr>
    `;
  }
}

document.getElementById('portionValue').addEventListener('input', updateRecipe);
