export default function HomePage() {
  return (
    <>
      <main className="container">
        <section id="intro" className="section">
          <h2 className="mb-3">Introduction</h2>
          <p>
            The history of films dates back to the late 19th century, when
            moving pictures were first captured on celluloid. Over time, this
            art form has evolved into a global phenomenon, influencing cultures
            and shaping societies.
          </p>
          <img src="film-reel.jpg" alt="Film Reel" className="responsive-img" />
        </section>

        <section id="timeline" className="section">
          <h2 className="mb-3">Timeline of Cinema</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>1890s</h3>
              <p>
                The birth of motion pictures with the invention of the
                kinetoscope and early short films.
              </p>
            </div>
            <div className="timeline-item">
              <h3>1920s</h3>
              <p>
                The silent film era, featuring stars like Charlie Chaplin and
                the rise of Hollywood.
              </p>
            </div>
            <div className="timeline-item">
              <h3>1930s</h3>
              <p>
                The advent of sound in movies, leading to iconic films like *The
                Wizard of Oz*.
              </p>
            </div>
          </div>
        </section>

        <section id="genres" className="section">
          <h2 className="mb-3">Genres Through the Ages</h2>
          <div className="genres-grid">
            <div className="genre-card">
              <h3>Action</h3>
              <p>Thrilling stunts and high-octane sequences.</p>
            </div>
            <div className="genre-card">
              <h3>Drama</h3>
              <p>Emotional storytelling and complex characters.</p>
            </div>
            <div className="genre-card">
              <h3>Comedy</h3>
              <p>Lighthearted entertainment with timeless humor.</p>
            </div>
            <div className="genre-card">
              <h3>Other</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="genre-card">
              <h3>Other</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="genre-card">
              <h3>Other</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="genre-card">
              <h3>Other</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 CineChronicles. All rights reserved.</p>
      </footer>
    </>
  );
}
