import "./Booflix.css";
import { movies } from "./db/movies.json";
import Card from "./components/Card";

const baseClass = "booflix";

const App = () => {
  return (
    <div className={`${baseClass}-wrapper`}>
      <h1 className={`${baseClass}-title`}>
        B
        <img
          className={`${baseClass}-ghost`}
          src="src/assets/icons/fantasma.png"
          alt="Icon of a cute ghost"
        />
        <img
          className={`${baseClass}-ghost`}
          src="src/assets/icons/fantasma.png"
          alt="Icon of a cute ghost"
        />
        FLIX
      </h1>
      <h3 className={`${baseClass}-subtitle`}>
        Nosotros ponemos la película. El Pumpkin Spice Latte, lo pones tú.{" "}
        <img
          className={`${baseClass}-cloud`}
          src="src/assets/icons/clima-de-halloween.png"
          alt="Icon of a cute ghost"
        />
      </h3>
      <section className={`${baseClass}-movies`}>
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </section>
      <p className={`${baseClass}-bottom`}>
        Hecha por Lola para Garaje de Ideas
      </p>
    </div>
  );
};

export default App;
