import "./Techs.css";

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__info-title">7 технологий</h3>
      <p className="techs__info-subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__technology">
        <li className="techs__technology-item">HTML</li>
        <li className="techs__technology-item">CSS</li>
        <li className="techs__technology-item">JS</li>
        <li className="techs__technology-item">React</li>
        <li className="techs__technology-item">Git</li>
        <li className="techs__technology-item">Express.js</li>
        <li className="techs__technology-item">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
