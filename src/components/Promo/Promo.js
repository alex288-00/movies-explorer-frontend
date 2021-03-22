import "./Promo.css";
function Promo() {
  return (
    <section className="promo">
      <div className="promo__logo"></div>
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a href="#project-link">
          <button className="promo__button">Узнать больше</button>
        </a>
      </div>
    </section>
  );
}

export default Promo;
