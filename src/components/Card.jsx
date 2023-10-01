import PropTypes from "prop-types";
import "./Card.css";

const baseClass = "card";

const Card = ({ movie }) => {
  const { title, description, image } = movie;
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <article className={baseClass}>
      <div className={`${baseClass}-image`} style={backgroundStyle} />
      <div
        className={`${baseClass}-image--hover`}
        style={backgroundStyle}
      ></div>
      <section className={`${baseClass}-content`}>
        <h2 className={`${baseClass}-title`}>
          {title}
          <img
            className={`${baseClass}-pumpkin`}
            src="src/assets/icons/bol.png"
            alt="Icon of a cute ghost"
          />
        </h2>
        <p className={`${baseClass}-description`}>{description}</p>
      </section>
    </article>
  );
};

export default Card;

Card.propTypes = {
  movie: PropTypes.object,
};
