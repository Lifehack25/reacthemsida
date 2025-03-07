import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/Lifehack25/repos')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching GitHub repos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <main>
        <section className="portfolio-section">
          <h1>Portfolio</h1>
          <p id="portfolio-beskrivning">Här är några av mina projekt:</p>
          
          {/* Befintliga projekt */}
          <a href="#modal1" className="card-link">
            <div className="card1">
              <img src="drinkly.png" alt="Drinkly" />
              <div className="card1-content">
                <h2 className="card1-title">Drinkly</h2>
                <p className="card1-description">
                  Den perfekta appen för att krydda till kvällen med vännerna. 
                  Välj, blanda och spela flera dryckesspel samtidigt.
                </p>
              </div>
            </div>
          </a>
          <a href="#modal2" className="card-link">
            <div className="card1">
              <img src="ml2.webp" alt="Memory Locks" />
              <div className="card1-content">
                <h2 className="card1-title">Memory Locks (Kommer snart!)</h2>
                <p className="card1-description">
                  Spara minnen i ett lås och försegla dem för alltid. 
                  En digital tidskapsel för dina bästa minnen.
                </p>
              </div>
            </div>
          </a>
          
          {/* GitHub-projekt */}
          <h2>Mina GitHub-projekt</h2>
          {loading ? (
            <p>Laddar projekt...</p>
          ) : (
            <div className="github-projects">
              {projects.map((project) => (
                <div key={project.id} className="card1">
                  <div className="card1-content">
                    <h2 className="card1-title">
                      <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                        {project.name}
                      </a>
                    </h2>
                    <p className="card1-description">
                      {project.description || 'Ingen beskrivning tillgänglig.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Portfolio;

