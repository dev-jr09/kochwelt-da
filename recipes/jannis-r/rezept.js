let amount = [1, 1, 1, 500, '', 200, 70, 1, 1, 2, 500];
let unit = ['', 'Zehe/n', '', 'g', '', 'ml', 'g', 'TL', 'Dosen', 'EL' , 'g'];
let ingredient = [
  'Zwiebel(n)',
  'Knoblauch',
  'Möhre(n)',
  'Rinderhackfleisch',
  'Salz und Pfeffer',
  'Gemüsebrühe',
  'Tomatenmark',
  'Oregano',
  'Tomaten, stückige',
  'Tomatenketchup',
  'Spaghetti'
];


const DEFAULT_PORTION = 4;

document.addEventListener("DOMContentLoaded", calculateTable);

function calculateTable() {
  const portionInput = document.getElementById("portionValue");
  let portion = Number(portionInput.value);
  const tbody = document.querySelector("#recipeTable tbody");
  const error = document.getElementById("error");


  error.textContent = "";

  if (portion < 1 || portion > 50 || isNaN(portion)) {
    error.textContent = "Bitte gebe eine gültige Portion (1 - 50) ein.";
    portion = DEFAULT_PORTION;
  }

  
  tbody.innerHTML = "";

  for (let i = 0; i < ingredient.length; i++) {
    let newAmount = (amount[i] * portion / 4);
    newAmount = Number(newAmount.toFixed(2));

    let amountWithUnit = unit[i] ? `${newAmount} ${unit[i]}` : `${newAmount}`;

    tbody.innerHTML += `
      <tr>
        <td class="tdLeft">${amountWithUnit} ${ingredient[i]}</td>
        
      </tr>
    `; 
  }
}

document.getElementById("portionValue").addEventListener("input", calculateTable);
