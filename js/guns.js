        document.addEventListener('DOMContentLoaded', () => {
            const weaponData = JSON.parse(localStorage.getItem('selectedWeapon'));
            if (weaponData) {
                const detailsSection = document.getElementById('weaponDetails');
                detailsSection.innerHTML = `
                    <h2>${weaponData.arma}</h2>
                    <p>Nomenclatura: ${weaponData.nomenclatura}</p>
                    <p>Daño a la Cabeza: ${weaponData.danoH}</p>
                    <p>Daño al Cuerpo: ${weaponData.danoB}</p>
                    <p>Balas necesarias (Cabeza): ${weaponData.eBalasH}</p>
                    <p>Balas necesarias (Cuerpo): ${weaponData.eBalasB}</p>`;
            }
        });