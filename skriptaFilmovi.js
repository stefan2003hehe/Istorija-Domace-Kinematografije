// Funkcije za upravljanje lokalnim skladištem
function sacuvajPostavke() {
    const postavke = {
        tema: document.body.classList.contains('tamna-tema') ? 'tamna' : 'svetla',
        velicinaFonta: document.body.classList.contains('mali-font') ? 'mali' : 
                      document.body.classList.contains('veliki-font') ? 'veliki' : 'srednji'
    };
    localStorage.setItem('kinoistorijaPostavke', JSON.stringify(postavke));
}

function ucitajPostavke() {
    const sacuvanePostavke = localStorage.getItem('kinoistorijaPostavke');
    if (sacuvanePostavke) {
        const postavke = JSON.parse(sacuvanePostavke);
        
        // Primena teme
        if (postavke.tema === 'tamna') {
            document.body.classList.add('tamna-tema');
            const mesec = document.getElementById('mesec-obican');
            const sunce = document.getElementById('sunce-obicno');
            const hamburger = document.getElementById('hamburger-obican');
            const izlaz = document.getElementById('izlaz-obican');
            const komedija = document.getElementById('komedija_ikonica');
            const drama = document.getElementById('drama_ikonica');
            const akcija = document.getElementById('akcija_ikonica');
            
            if (mesec && sunce) {
                mesec.style.display = 'none';
                sunce.style.display = 'block';
            }
            
            if (hamburger && izlaz) {
                hamburger.src = "slike/hamburger_drugi.JPG";
                izlaz.src = "slike/izlaz_drugi.JPG";
            }
            
            if (komedija && drama && akcija) {
                komedija.src = "slike/komedija2.JPG";
                drama.src = "slike/drama2.JPG";
                akcija.src = "slike/akcija2.JPG";
            }
        }
        
        // Primena veličine fonta
        document.body.classList.remove('mali-font', 'srednji-font', 'veliki-font');
        if (postavke.velicinaFonta === 'mali') {
            document.body.classList.add('mali-font');
        } else if (postavke.velicinaFonta === 'veliki') {
            document.body.classList.add('veliki-font');
        } else {
            document.body.classList.add('srednji-font');
        }
    }
}

// Učitaj postavke kada se stranica učita
document.addEventListener('DOMContentLoaded', function() {
    ucitajPostavke();
    
    // PROMENA TEME
    const dugmeZaTemu = document.getElementById('dugme-tema');
    const telo = document.body;
    const hamburger = document.getElementById('hamburger-obican');
    const izlaz = document.getElementById('izlaz-obican');
    const komedija = document.getElementById('komedija_ikonica');
    const drama = document.getElementById('drama_ikonica');
    const akcija = document.getElementById('akcija_ikonica');

    dugmeZaTemu.addEventListener('click', () => {
        telo.classList.toggle('tamna-tema');
        const mesec = document.getElementById('mesec-obican');
        const sunce = document.getElementById('sunce-obicno');

        if (telo.classList.contains('tamna-tema')) {
            mesec.style.display = 'none';
            sunce.style.display = 'block';
            hamburger.src = "slike/hamburger_drugi.JPG";
            izlaz.src = "slike/izlaz_drugi.JPG";
            komedija.src = "slike/komedija2.JPG";
            drama.src = "slike/drama2.JPG";
            akcija.src = "slike/akcija2.JPG";
        } else {
            sunce.style.display = 'none';
            mesec.style.display = 'block';
            hamburger.src = "slike/hamburger_obican.JPG";
            izlaz.src = "slike/izlaz_obican.JPG";
            komedija.src = "slike/komedija.JPG";
            drama.src = "slike/drama.JPG";
            akcija.src = "slike/akcija.JPG";
        }
        
        // Sačuvaj postavke nakon promene
        sacuvajPostavke();
    });
    
    // PROMENA VELIČINE FONTA
    document.getElementById('mali-font').addEventListener('click', () => {
        telo.classList.remove('srednji-font', 'veliki-font');
        telo.classList.add('mali-font');
        sacuvajPostavke(); // Sačuvaj postavke
    });
    
    document.getElementById('srednji-font').addEventListener('click', () => {
        telo.classList.remove('mali-font', 'veliki-font');
        telo.classList.add('srednji-font');
        sacuvajPostavke(); // Sačuvaj postavke
    });
    
    document.getElementById('veliki-font').addEventListener('click', () => {
        telo.classList.remove('mali-font', 'srednji-font');
        telo.classList.add('veliki-font');
        sacuvajPostavke(); // Sačuvaj postavke
    });
    
    // HAMBURGER MENI
    const hamburgerMeni = document.querySelector('.hamburger-meni');
    const glavniMeni = document.querySelector('.glavni-meni');

    hamburgerMeni.addEventListener('click', () => {
        glavniMeni.classList.toggle('aktivno');
        
        hamburger.style.display = 'none';
        izlaz.style.display = 'block';

        if (!glavniMeni.classList.contains('aktivno')) {
            hamburger.style.display = 'block';
            izlaz.style.display = 'none';
        }
    });
    
    // PADAJUĆI MENI
    const padajuciMeni = document.querySelectorAll('.padajuci-meni');
    
    padajuciMeni.forEach(meni => {
        meni.addEventListener('click', () => {
            meni.classList.toggle('aktivno');
        });
    });
    
    // ANIMACIJA POJAVLJIVANJA
    const elementiZaPojavljivanje = document.querySelectorAll('.pojavljivanje');
    
    const posmatrac = new IntersectionObserver((unosi) => {
        unosi.forEach(unos => {
            if (unos.isIntersecting) {
                unos.target.classList.add('prikazano');
                posmatrac.unobserve(unos.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elementiZaPojavljivanje.forEach(element => {
        posmatrac.observe(element);
    });
    
    // GLATKO KLIZANJE
    document.querySelectorAll('a[href^="#"]').forEach(ankora => {
        ankora.addEventListener('click', function(e) {
            e.preventDefault();
            const ciljaniId = this.getAttribute('href');
            if (ciljaniId === '#') return;
            
            const ciljaniElement = document.querySelector(ciljaniId);
            if (ciljaniElement) {
                window.scrollTo({
                    top: ciljaniElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Zatvaranje mobilnog menija ako je otvoren
                if (glavniMeni.classList.contains('aktivno')) {
                    glavniMeni.classList.remove('aktivno');
                    izlaz.style.display = 'none';
                    hamburger.style.display = 'block';
                }
            }
        });
    });
});