const weaponsData = [
    { arma: "AWM", nomenclatura: "Arctic Warfare Magnum" , danoH: 262, danoB: 105, eBalasH: 1, eBalasB: 2 },
    { arma: "Crossbow", nomenclatura: "Ballesta", danoH: 244, danoB: 105, eBalasH: 1, eBalasB: 2 },
  { arma: "M24", nomenclatura: "M24 Sniper Rifle", danoH: 197, danoB: 79, eBalasH: 2, eBalasB: 3 },
  { arma: "Kar98k", nomenclatura: "Karabiner 98 Kurz", danoH: 187, danoB: 75, eBalasH: 2, eBalasB: 3 },
  { arma: "Win94", nomenclatura: "Winchester Model 1894", danoH: 164, danoB: 66, eBalasH: 2, eBalasB: 4 },
  { arma: "MK14", nomenclatura: "Mark 14 Enhanced Battle Rifle", danoH: 144, danoB: 61, eBalasH: 2, eBalasB: 4 },
  { arma:"SLR", nomenclatura:"Self-Loading Rifle (SLR)", danoH: 140, danoB: 58, eBalasH: 2, eBalasB: 4},
  { arma:"SKS", nomenclatura:"Samozaryadny Karabin sistemy Simonova (SKS)", danoH: 134, danoB: 56, eBalasH: 2, eBalasB: 4},
  { arma:"AKM", nomenclatura:"Avtomat Kalashnikova Modernizirovanniy (AKM)", danoH: 113, danoB: 49, eBalasH: 3, eBalasB: 5},
  { arma:"Groza", nomenclatura:"OTs-14 Groza", danoH: 113, danoB: 49, eBalasH: 3, eBalasB: 5},
  { arma:"DP-28", nomenclatura:"Degtyaryov Machine Gun (DP-28)", danoH: 113, danoB: 49, eBalasH: 3, eBalasB: 5},
  { arma:"M762", nomenclatura:"Beryl M762", danoH: 112, danoB: 47, eBalasH: 3, eBalasB: 5},
  { arma:"AUG A3", nomenclatura:"Armee-Universal-Gewehr (AUG) A3", danoH: 103, danoB: 43, eBalasH: 3, eBalasB: 5},
  { arma:"M416", nomenclatura:"Heckler & Koch HK416 (M416)", danoH: 103, danoB: 43, eBalasH: 3, eBalasB: 5},
  { arma:"SCAR-L", nomenclatura:"Special Operations Forces Combat Assault Rifle - Light (SCAR-L)", danoH: 103, danoB: 43, eBalasH: 3, eBalasB: 5},
  { arma:"QBZ", nomenclatura:"QBU-88 Bullpup Rifle (QBZ)", danoH: 103, danoB: 43, eBalasH: 3, eBalasB: 5},
  { arma:"G36C", nomenclatura:"Heckler & Koch G36 Compact (G36C)", danoH: 103, danoB: 43, eBalasH: 3, eBalasB: 5},
  { arma:"M16A4", nomenclatura:"M16A4 Assault Rifle", danoH: 103, danoB: 43, eBalasH: 3, eBalasB: 5},
  { arma:"UMP45", nomenclatura:"Universal Maschinenpistole (UMP45)", danoH: 93, danoB: 35, eBalasH: 4, eBalasB: 6},
{ arma:"Thompson",nomenclatura :"Thompson Submachine Gun", danoH: 93, danoB: 39, eBalasH: 4, eBalasB: 6}, 
{arma :"Bizon", nomenclatura :"PP-19 Bizon Submachine Gun", danoH: 86, danoB: 36, eBalasH:5, eBalasB:6}, 
{arma :"Vector", nomenclatura :"KRISS Vector Submachine Gun",danoH: 86, danoB: 35, eBalasH: 5, eBalasB: 6}, 
{arma :"Uzi", nomenclatura :"Uzi Submachine Gun", danoH: 64, danoB: 26, eBalasH: 7, eBalasB:10}
    // ...otros datos de armas...
];

function showTable() {
    document.getElementById('weaponTable').style.display = 'table';
}

function filterTable() {
	const input = document.getElementById('searchInput').value.toLowerCase();
	const filteredData = weaponsData.filter(weapon => weapon.arma.toLowerCase().includes(input));
	
	const tableBody = document.getElementById('tableBody');
	tableBody.innerHTML = ' ';
	
	filteredData.forEach(weapon => {
		const row = document.createElement('tr');
		
		Object.values(weapon).forEach((text, index) => {
			const cell = document.createElement('td');
			if (index === 0) { // Si es el nombre del arma
				const link = document.createElement('a');
				link.href = `${weapon.arma.toLowerCase()}.html`; // Redirige a la página específica
				link.textContent = text;
        link.onclick = () => {
          localStorage.setItem('selectedWeapon', JSON.stringify(weapon));
      };
				cell.appendChild(link);

			} else {
				cell.textContent = text;
			}
			row.appendChild(cell);
		});
		
		tableBody.appendChild(row);
	});
}

// function showWeaponDetails(weapon) {
// 	const detailsSection = document.getElementById('weaponDetails');
// 	detailsSection.style.display = 'block';
// 	detailsSection.innerHTML = `
// 		<h3>${weapon.arma}</h3>
// 		<p>Nomenclatura: ${weapon.nomenclatura}</p>
// 		<p>Daño a la Cabeza: ${weapon.danoH}</p>
// 		<p>Daño al Cuerpo: ${weapon.danoB}</p>
// 		<p>Balas necesarias (Cabeza): ${weapon.eBalasH}</p>
// 		<p>Balas necesarias (Cuerpo): ${weapon.eBalasB}</p>`;
// }

// Inicialmente no cargar datos hasta que se presione "Ver Tabla"