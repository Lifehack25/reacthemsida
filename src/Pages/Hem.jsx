import React from 'react';

const Hem = () => {
  return (
    <>
      <main>
      <section class="intro-area">
        <div class="intro-text-col">
          <h1 id="header">Välkommen!</h1>
          <p>
            Jag heter Pontus d'Orsay och är en passionerad .NET Fullstackutvecklare 
            med en bakgrund inom försäljning och entreprenörskap. På denna sida får du 
            möjligheten att utforska mina projekt, min kompetens inom IT samt få en bra 
            uppfattning om vem jag är som person.
          </p>
          <div class="cta-container">
            <a href="cv.html" class="cta-button">Se Mitt CV</a>
            <a href="portfolio.html" class="cta-button">Utforska Min Portfolio</a>
          </div>
        </div>
        <div class="intro-image-col">
          <img 
            src="public/proffe2.png" 
            alt="Pontus d'Orsay" 
            class="intro-image"
          />
        </div>
      </section>
    </main>
    </>
  );
};

export default Hem;
