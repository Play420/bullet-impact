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


function showTable() {
  document.getElementById('weaponTable').style.display = 'table';
}

function filterTable() {
const input = document.getElementById('searchInput').value.toLowerCase();
const filteredData = weaponsData.filter(weapon => weapon.arma.toLowerCase().includes(input));

const tableBody = document.getElementById('tableBody');
tableBody.innerHTML = '';

filteredData.forEach(weapon => {
  const row = document.createElement('tr');
  
  row.onclick = () => {
    localStorage.setItem('selectedWeapon', JSON.stringify(weapon));
    window.location.href = `${weapon.arma.toLowerCase()}.html`;
  };

  const armaCell = document.createElement('td');
  const link = document.createElement('a');
  link.href = `${weapon.arma.toLowerCase()}.html`;
  link.textContent = weapon.arma;
  link.onclick = (e) => {
    e.stopPropagation();
    localStorage.setItem('selectedWeapon', JSON.stringify(weapon));
  };
  armaCell.appendChild(link);
  row.appendChild(armaCell);

  const nomenclaturaCell = document.createElement('td');
  nomenclaturaCell.textContent = weapon.nomenclatura;
  row.appendChild(nomenclaturaCell);

  const imgCell = document.createElement('td');
  const img = document.createElement('img');
  img.src = weapon.imagen;
  img.alt = weapon.arma;
  img.style.width = '3rem'; // Ajusta el tamaño según sea necesario
      img.style.margin= "0"
      img.style.padding= "0"
  imgCell.appendChild(img);
  row.appendChild(imgCell);
  
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