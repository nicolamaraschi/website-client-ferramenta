import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
    useEffect(() => {
        console.log("Home component mounted");

        // Funzione per inizializzare il carosello
        function initCarousel(carouselId) {
            console.log("Initializing carousel:", carouselId);
            const carousel = document.querySelector(carouselId);
            if (!carousel) return;

            const track = carousel.querySelector('.custom-carousel-track-unique');
            if (!track) return;

            const items = track.children;
            if (items.length === 0) return;

            const prevButton = carousel.querySelector('.custom-carousel-control-prev-unique');
            const nextButton = carousel.querySelector('.custom-carousel-control-next-unique');
            let currentIndex = 0;

            // Funzione per spostare il carosello
            function moveCarousel(index) {
                const width = items[0].getBoundingClientRect().width;
                track.style.transform = `translateX(-${index * width}px)`;
            }

            // Evento per pulsante "next"
            nextButton.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % items.length;
                moveCarousel(currentIndex);
            });

            // Evento per pulsante "prev"
            prevButton.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                moveCarousel(currentIndex);
            });
        }

        // Inizializza tutti i caroselli presenti nella pagina
        const carousels = document.querySelectorAll('.custom-carousel-unique');
        carousels.forEach(carousel => {
            initCarousel('#' + carousel.id);
        });

        // Funzione per il contatore
        function animateCounters() {
            const counters = document.querySelectorAll('.stat h3');
            counters.forEach(counter => {
                const target = parseInt(counter.innerText.replace('+', ''));
                let count = 0;
                const speed = 1000; // Durata dell'animazione in millisecondi

                const interval = setInterval(() => {
                    count += Math.ceil(target / (speed / 100));
                    if (count >= target) {
                        count = target;
                        clearInterval(interval);
                    }
                    counter.innerText = `${count}+`;
                }, 100);
            });
        }

        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth));
        }

        function handleScroll() {
            const statsSection = document.querySelector('#stats');
            if (isInViewport(statsSection)) {
                animateCounters();
                window.removeEventListener('scroll', handleScroll);
            }
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check if the section is already in viewport on load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>

            


            {/* Sezione Introduzione */}
            <section id="home" className="mt-3 mt-sm-4 mt-md-5 mt-lg-6 mt-xl-7 text-center">
                <h2>Benvenuti alla Ferramenta ABC</h2>
                <p>La Ferramenta ABC è il punto di riferimento per tutte le tue necessità di manutenzione, riparazione e installazione.</p>
            </section>


           
            <section class="service-section">
                <div class="content">
                    <div class="custom-carousel-unique" id="carousel1">
                        <div class="custom-carousel-track-unique">
                            <div class="custom-carousel-item-unique">
                                <img src="serramenti.webp" alt="Serramenti di Sicurezza 1" />
                            </div>
                            <div class="custom-carousel-item-unique">
                                <img src="serramenti.webp" alt="Serramenti di Sicurezza 2" />
                            </div>
                            <div class="custom-carousel-item-unique">
                                <img src="serramenti.webp" alt="Serramenti di Sicurezza 3" />
                            </div>
                        </div>
                        <button class="custom-carousel-control-unique custom-carousel-control-prev-unique" data-target="#carousel1">‹</button>
                        <button class="custom-carousel-control-unique custom-carousel-control-next-unique" data-target="#carousel1">›</button>
                    </div>
                    <div class="text">
                        <h2>Serramenti di Sicurezza</h2>
                        <p>Soluzioni anche automatizzate per garantire la massima sicurezza della tua casa o azienda.</p>
                    </div>
                </div>
            </section>


            <section class="service-section reverse">
                <div class="content">
                    <div class="custom-carousel-unique" id="carousel2">
                        <div class="custom-carousel-track-unique">
                            <div class="custom-carousel-item-unique">
                                <img src="portaBlindata.webp" alt="Porte Blindate 1" />
                            </div>
                            <div class="custom-carousel-item-unique">
                                <img src="portaBlindata.webp" alt="Porte Blindate 2" />
                            </div>
                            <div class="custom-carousel-item-unique">
                                <img src="portaBlindata.webp" alt="Porte Blindate 3" />
                            </div>
                        </div>
                        <button class="custom-carousel-control-unique custom-carousel-control-prev-unique" data-target="#carousel2">‹</button>
                        <button class="custom-carousel-control-unique custom-carousel-control-next-unique" data-target="#carousel2">›</button>
                    </div>
                    <div class="text">
                        <h2>Porte Blindate</h2>
                        <p>Offriamo porte blindate di alta qualità per proteggere i tuoi spazi con stile e sicurezza.</p>
                    </div>
                </div>
            </section>


            <section class="service-section">
                <div class="content">
                    <div class="custom-carousel-unique" id="carousel3">
                        <div class="custom-carousel-track-unique">
                            <div class="custom-carousel-item-unique">
                                <img src="inferiata.jpeg" alt="Inferriate di Sicurezza 1" />
                            </div>
                            <div class="custom-carousel-item-unique">
                                <img src="inferiata.jpeg" alt="Inferriate di Sicurezza 2" />
                            </div>
                            <div class="custom-carousel-item-unique">
                                <img src="inferiata.jpeg" alt="Inferriate di Sicurezza 3" />
                            </div>
                        </div>
                        <button class="custom-carousel-control-unique custom-carousel-control-prev-unique" data-target="#carousel3">‹</button>
                        <button class="custom-carousel-control-unique custom-carousel-control-next-unique" data-target="#carousel3">›</button>
                    </div>
                    <div class="text">
                        <h2>Inferriate di Sicurezza</h2>
                        <p>Inferriate robuste e affidabili per una protezione efficace contro le intrusioni.</p>
                    </div>
                </div>
            </section>


            <section class="service-section reverse">
                <div class="content">
                    <div class="custom-carousel-unique" id="carousel4">
                        <div class="custom-carousel-track-unique">
                            <div class="custom-carousel-item-unique">
                                <img src="Cancelli.jpeg" alt="Cancelli e Recinzioni 1" />
                            </div>
                            <div class="custom-carousel-item-unique">
                                <img src="Cancelli.jpeg" alt="Cancelli e Recinzioni 2" />
                            </div>
                            <div class="custom-carousel-item-unique">
                                <img src="Cancelli.jpeg" alt="Cancelli e Recinzioni 3" />
                            </div>
                        </div>
                        <button class="custom-carousel-control-unique custom-carousel-control-prev-unique" data-target="#carousel4">‹</button>
                        <button class="custom-carousel-control-unique custom-carousel-control-next-unique" data-target="#carousel4">›</button>
                    </div>
                    <div class="text">
                        <h2>Cancelli e Recinzioni</h2>
                        <p>Cancelli e recinzioni personalizzate per delimitare e proteggere le tue proprietà.</p>
                    </div>
                </div>
            </section>


            <section class="service-section">
                <div class="content">
                    <div class="custom-carousel-unique" id="carousel5">
                        <div class="custom-carousel-track-unique">
                            <div class="custom-carousel-item-unique">
                                <img src="tapparelle.jpg" alt="Apparelle e Persiane Blindate 1" />
                            </div>
                            <div class="custom-carousel-item-unique">
                                <img src="tapparelle.jpg" alt="Apparelle e Persiane Blindate 2" />
                            </div>
                            <div class="custom-carousel-item-unique">
                                <img src="tapparelle.jpg" alt="Apparelle e Persiane Blindate 3" />
                            </div>
                        </div>
                        <button class="custom-carousel-control-unique custom-carousel-control-prev-unique" data-target="#carousel5">‹</button>
                        <button class="custom-carousel-control-unique custom-carousel-control-next-unique" data-target="#carousel5">›</button>
                    </div>
                    <div class="text">
                        <h2>Apparelle e Persiane Blindate</h2>
                        <p>Soluzioni blindate per finestre che uniscono sicurezza e funzionalità.</p>
                    </div>
                </div>
            </section>


            <section class="service-section reverse">
                <div class="content">
                    <div class="custom-carousel-unique" id="carousel6">
                        <div class="custom-carousel-track-unique">
                            <div class="custom-carousel-item-unique">
                                <img src="serranda.webp" alt="Serrande e Basculanti 1" />
                            </div>
                            <div class="custom-carousel-item-unique">
                                <img src="serranda.webp" alt="Serrande e Basculanti 2" />
                            </div>
                            <div class="custom-carousel-item-unique">
                                <img src="serranda.webp" alt="Serrande e Basculanti 3" />
                            </div>
                        </div>
                        <button class="custom-carousel-control-unique custom-carousel-control-prev-unique" data-target="#carousel6">‹</button>
                        <button class="custom-carousel-control-unique custom-carousel-control-next-unique" data-target="#carousel6">›</button>
                    </div>
                    <div class="text">
                        <h2>Serrande e Basculanti</h2>
                        <p>Installazione e manutenzione di serrande e basculanti per garage e spazi commerciali.</p>
                    </div>
                </div>
            </section>




                    {/* Sezione Recenti Lavori */}
        <section id="recent-works">
            <div className="container">
                <h2>I Nostri Recenti Lavori</h2>
                <div className="gallery">
                    <img src="/Cancelli.jpeg" alt="Lavoro 1" />
                    <img src="/portaBlindata.webp" alt="Lavoro 2" />
                    <img src="/serramenti.webp" alt="Lavoro 3" />
                    <img src="/tapparelle.jpg" alt="Lavoro 4" />
                    <img src="/inferiata.jpeg" alt="Lavoro 5" />
                    <img src="/serranda.webp" alt="Lavoro 6" />
                </div>
            </div>
        </section>


            {/* Sezione FAQ */}
            <section id="faq" className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center">Domande Frequenti</h2>
                    <div className="accordion" id="faqAccordion">
                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Quali sono i vostri orari di apertura?
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                                <div className="card-body">
                                    Siamo aperti dal lunedì al venerdì dalle 9:00 alle 18:00 e il sabato dalle 9:00 alle 13:00.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sezione Newsletter */}
            <section id="newsletter" className="bg-dark text-white py-5">
                <div className="container">
                    <h2 className="text-center">Iscriviti alla nostra Newsletter</h2>
                    <form action="subscribe.php" method="POST" className="text-center">
                        <input type="email" className="form-control mb-2" placeholder="Inserisci la tua email" name="email" required />
                        <button type="submit" className="btn btn-primary">Iscriviti</button>
                    </form>
                </div>
            </section>

            {/* Sezione Testimonianze */}
            <section id="testimonials-slider" className="py-5">
                <div className="container">
                    <h2 className="text-center">Cosa Dicono i Nostri Clienti</h2>
                    <div id="testimonialSlider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <p>"Eccellente servizio e prodotti di alta qualità. Consiglio vivamente!"</p>
                                <p className="text-right">- Maria Rossi</p>
                            </div>
                            <div className="carousel-item">
                                <p>"Ho trovato tutto ciò di cui avevo bisogno, e il personale è molto competente."</p>
                                <p className="text-right">- Luigi Bianchi</p>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#testimonialSlider" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Precedente</span>
                        </a>
                        <a className="carousel-control-next" href="#testimonialSlider" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Successivo</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Sezione Statistiche dei Lavori */}
            <section id="stats" className="py-5 text-center">
                <div className="container">
                    <h2>Le Nostre Statistiche</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="stat">
                                <h3>100+</h3>
                                <p>Lavori Completati</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="stat">
                                <h3>50+</h3>
                                <p>Clienti Soddisfatti</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="stat">
                                <h3>10+</h3>
                                <p>Anni di Esperienza</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sezione Contatti Rapidi */}
            <section id="quick-contacts" className="py-5 text-center">
                <div className="container">
                    <h2>Contatti Rapidi</h2>
                    <a href="https://wa.me/1234567890" className="whatsapp-link">
                        <img src="immagini/whatsapp-icon.png" alt="Contattaci su WhatsApp" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
