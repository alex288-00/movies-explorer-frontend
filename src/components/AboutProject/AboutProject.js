import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__info">
        <div className="about-project__info-container">
          <h3 id="project-link" className="about-project__info-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__info-subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__info-container">
          <h3 className="about-project__info-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__info-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__week">
        <div className="week-container">
          <div className="week-container__line">
            <p className="week-container__text">1 неделя</p>
          </div>
          <p className="week-container__text week-container__text_subtitle">
            Back-end
          </p>
        </div>
        <div className="week-container">
          <div className="week-container__line week-container__line_4">
            <p className="week-container__text week-container__text_4">
              4 недели
            </p>
          </div>
          <p className="week-container__text week-container__text_subtitle">
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
