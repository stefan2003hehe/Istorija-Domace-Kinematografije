 // PROMENA TEME
        const dugmeZaTemu = document.getElementById('dugme-tema');
        const telo = document.body;
        const hamburger = document.getElementById('hamburger-obican');
         const izlaz = document.getElementById('izlaz-obican');
        
        dugmeZaTemu.addEventListener('click', () => {
            telo.classList.toggle('tamna-tema');
            const ikonica = dugmeZaTemu.querySelector('img');
            const mesec = document.getElementById('mesec-obican');
            const sunce = document.getElementById('sunce-obicno');

           const poceci = document.getElementById('poceci');
           const razvoj = document.getElementById('razvoj');
           const dostignuca = document.getElementById('dostignuca');
           const misija = document.getElementById('misija');
           const vizija = document.getElementById('vizija');
           const vrednosti = document.getElementById('vrednosti');

            if (telo.classList.contains('tamna-tema')) {
                 mesec.style.display = 'none';
                sunce.style.display = 'block';
                hamburger.src="slike/hamburger_drugi.JPG";
                izlaz.src="slike/izlaz_drugi.JPG";

                poceci.src="slike_ikonice/poceci2.JPG";
                razvoj.src="slike_ikonice/razvoj2.JPG";
                dostignuca.src="slike_ikonice/dostignuca2.JPG";
                misija.src="slike_ikonice/misija2.JPG";
                vizija.src="slike_ikonice/vizija2.JPG";
                vrednosti.src="slike_ikonice/vrednosti2.JPG";
                


            } else {
                sunce.style.display = 'none';
               mesec.style.display = 'block';
               hamburger.src="slike/hamburger_obican.JPG";
                izlaz.src="slike/izlaz_obican.JPG";

                poceci.src="slike_ikonice/poceci1.JPG";
                razvoj.src="slike_ikonice/razvoj1.JPG";
                dostignuca.src="slike_ikonice/dostignuca1.JPG";
                misija.src="slike_ikonice/misija1.JPG";
                vizija.src="slike_ikonice/vizija1.JPG";
                vrednosti.src="slike_ikonice/vrednosti1.JPG";


            }
        });
        
        // PROMENA VELIČINE FONTA
        document.getElementById('mali-font').addEventListener('click', () => {
            telo.classList.remove('srednji-font', 'veliki-font');
            telo.classList.add('mali-font');
        });
        
        document.getElementById('srednji-font').addEventListener('click', () => {
            telo.classList.remove('mali-font', 'veliki-font');
            telo.classList.add('srednji-font');
        });
        
        document.getElementById('veliki-font').addEventListener('click', () => {
            telo.classList.remove('mali-font', 'srednji-font');
            telo.classList.add('veliki-font');
        });
        
      
        
        // HAMBURGER MENI
        const hamburgerMeni = document.querySelector('.hamburger-meni');
        const glavniMeni = document.querySelector('.glavni-meni');

       



        
        hamburgerMeni.addEventListener('click', () => {
            glavniMeni.classList.toggle('aktivno');
           
             hamburger.style.display = 'none';
            izlaz.style.display='block';

            if (glavniMeni.classList.contains('aktivno') == 0)
            {
            hamburger.style.display = 'block';
            izlaz.style.display='none';
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
                         hamburger.style.display='block';
                         console.log("ugasen side menu");
                    }
                }
            });
        });


       