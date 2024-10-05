const weaponsData = [
  { arma: "AWM", nomenclatura: "Arctic Warfare Magnum", imagen: "/assets/img/webp/guns/awm.webp", danoH: 262, danoB: 105, eBalasH: 1, eBalasB: 2  },
  { arma: "Crossbow", nomenclatura: "Ballesta", imagen: "/assets/img/", danoH: 244, danoB: 105, eBalasH: 1, eBalasB: 2 },
{ arma: "M24", nomenclatura: "M24 Sniper Rifle", imagen: "/assets/img/webp/guns/m24.webp", danoH: 197, danoB: 79, eBalasH: 2, eBalasB: 3 },
{ arma: "Kar98k", nomenclatura: "Karabiner 98 Kurz", imagen: "/assets/img/", danoH: 187, danoB: 75, eBalasH: 2, eBalasB: 3 },
{ arma: "Win94", nomenclatura: "Winchester Model 1894", imagen: "/assets/img/", danoH: 164, danoB: 66, eBalasH: 2, eBalasB: 4 },
{ arma: "MK14", nomenclatura: "Mark 14 Enhanced Battle Rifle", imagen: "/assets/img/webp/guns/mk-14.webp", danoH: 144, danoB: 61, eBalasH: 2, eBalasB: 4 },
{ arma:"SLR", nomenclatura:"Self-Loading Rifle (SLR)", imagen: "/assets/img/webp/guns/slr.webp", danoH: 140, danoB: 58, eBalasH: 2, eBalasB: 4},
{ arma:"SKS", nomenclatura:"Samozaryadny Karabin sistemy Simonova (SKS)", imagen: "/assets/img/webp/guns/sks.webp", danoH: 134, danoB: 56, eBalasH: 2, eBalasB: 4},
{ arma:"AKM", nomenclatura:"Avtomat Kalashnikova Modernizirovanniy (AKM)", imagen: "/assets/img/webp/guns/akm.webp", danoH: 113, danoB: 49, eBalasH: 3, eBalasB: 5},
{ arma:"Groza", nomenclatura:"OTs-14 Groza", imagen: "/assets/img/webp/guns/groza.webp", danoH: 113, danoB: 49, eBalasH: 3, eBalasB: 5},
{ arma:"DP-28", nomenclatura:"Degtyaryov Machine Gun (DP-28)", imagen: "/assets/img/webp/guns/dp-28.webp", danoH: 113, danoB: 49, eBalasH: 3, eBalasB: 5},
{ arma:"M762", nomenclatura:"Beryl M762", imagen: "/assets/img/webp/guns/beryl.webp", danoH: 112, danoB: 47, eBalasH: 3, eBalasB: 5},
{ arma:"AUG A3", nomenclatura:"Armee-Universal-Gewehr (AUG) A3", imagen: "/assets/img/webp/guns/aug-a3.webp", danoH: 103, danoB: 43, eBalasH: 3, eBalasB: 5},
{ arma:"M416", nomenclatura:"Heckler & Koch HK416 (M416)", imagen: "/assets/img/webp/guns/m416.webp", danoH: 103, danoB: 43, eBalasH: 3, eBalasB: 5},
{ arma:"SCAR-L", nomenclatura:"Special Operations Forces Combat Assault Rifle - Light (SCAR-L)", imagen: "/assets/img/webp/guns/scar-l.webp", danoH: 103, danoB: 43, eBalasH: 3, eBalasB: 5},
{ arma:"QBZ", nomenclatura:"QBU-88 Bullpup Rifle (QBZ)", imagen: "/assets/img/webp/guns/qbz.webp", danoH: 103, danoB: 43, eBalasH: 3, eBalasB: 5},
{ arma:"G36C", nomenclatura:"Heckler & Koch G36 Compact (G36C)", imagen: "/assets/img/webp/guns/g36c.webp", danoH: 103, danoB: 43, eBalasH: 3, eBalasB: 5},
{ arma:"M16A4", nomenclatura:"M16A4 Assault Rifle", imagen: "/assets/img/webp/guns/m16a4.webp", danoH: 103, danoB: 43, eBalasH: 3, eBalasB: 5},
{ arma:"UMP45", nomenclatura:"Universal Maschinenpistole (UMP45)", imagen: "/assets/img/webp/guns/ump45.webp", danoH: 93, danoB: 35, eBalasH: 4, eBalasB: 6},
{ arma:"Thompson",nomenclatura :"Thompson Submachine Gun", imagen: "/assets/img/webp/guns/thompson.webp", danoH: 93, danoB: 39, eBalasH: 4, eBalasB: 6}, 
{arma :"Bizon", nomenclatura :"PP-19 Bizon Submachine Gun", imagen: "/assets/img/webp/guns/bizon.webp", danoH: 86, danoB: 36, eBalasH:5, eBalasB:6}, 
{arma :"Vector", nomenclatura :"KRISS Vector Submachine Gun", imagen: "/assets/img/webp/guns/vector.webp", danoH: 86, danoB: 35, eBalasH: 5, eBalasB: 6}, 
{arma :"Uzi", nomenclatura :"Uzi Submachine Gun", imagen: "/assets/img/webp/guns/uzi.webp", danoH: 64, danoB: 26, eBalasH: 7, eBalasB:10}
  // ...otros datos de armas...
];

function populateSelectors() {
const weapon1Select = document.getElementById('weapon1');
const weapon2Select = document.getElementById('weapon2');

weaponsData.forEach(weapon => {
  const option1 = document.createElement('option');
  option1.value = weapon.arma;
  option1.textContent = weapon.arma;

  const option2 = option1.cloneNode(true);

  weapon1Select.appendChild(option1);
  weapon2Select.appendChild(option2);
});

updateComparison();
}

function updateComparison() {
const weapon1Name = document.getElementById('weapon1').value;
const weapon2Name = document.getElementById('weapon2').value;

const weapon1 = weaponsData.find(w => w.arma === weapon1Name);
const weapon2 = weaponsData.find(w => w.arma === weapon2Name);

displayWeaponDetails('detailsWeapon1', weapon1);
displayWeaponDetails('detailsWeapon2', weapon2);

drawChart(weapon1, weapon2);
}

function displayWeaponDetails(elementId, weapon) {
const element = document.getElementById(elementId);
element.innerHTML = `
  <img src="${weapon.imagen}" alt="${weapon.arma}">
  <h3 style="color:#ff9900">${weapon.arma}</h3>
  <p>Nomenclatura: <spam style="color:#ff9900">${weapon.nomenclatura}</spam></p>
  <p>Daño a la Cabeza: <spam style="color:#ff9900">${weapon.danoH}</spam></p>
  <p>Daño al Cuerpo: <spam style="color:#ff9900">${weapon.danoB}</spam></p>
  <p>Balas necesarias (Cabeza): <spam style="color:#ff9900">${weapon.eBalasH}</spam></p>
  <p>Balas necesarias (Cuerpo): <spam style="color:#ff9900">${weapon.eBalasB}</spam> </p>`;
}

function drawChart(weapon1, weapon2) {
  const chartContainer = document.getElementById('chartContainer');
  chartContainer.innerHTML = '<canvas id="damageChart"></canvas>';

  const ctx = document.getElementById('damageChart').getContext('2d');

  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Cabeza', 'Daño al Cuerpo', 'Balas necesarias (Cabeza)', 'Balas necesarias (Cuerpo)' ],
          datasets: [
              {
                  label: weapon1.arma,
                  data: [weapon1.danoH, weapon1.danoB, weapon1.eBalasH, weapon1.eBalasB ],
                  backgroundColor: '#f5f5f5',
              },
              {
                  label: weapon2.arma,
                  data: [weapon2.danoH, weapon2.danoB, weapon2.eBalasH, weapon2.eBalasB],
                  backgroundColor: '#ff9900',
              }
          ],
      },
      options: {
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: '#f5f5f550'
            },
              ticks: {
                  color: '#f5f5f5'
              }
          },
          x: {
            grid: {
              color: '#f5f5f550'
          },
          ticks: {
                  color: '#f5f5f5'
              }
          }
          },
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
                  labels: {
                        color: '#f5f5f5'
                    }
              },
              title: {
                  display: true,
                  text: 'Comparación de Daño',
                  color: '#f5f5f5',
              }
          }
      }
  });
}

// Inicializar selectores al cargar la página
document.addEventListener('DOMContentLoaded', populateSelectors);