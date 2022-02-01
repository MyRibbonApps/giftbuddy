import styles from '../styles/sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const ImgComp = ({ imgsrc }) => {
  return <img className={styles.sidebar__intro__icons__img} src={imgsrc}></img>;
};
const Sidebar = () => {
  return (
    <>
      <section className={styles.sidebar__intro}>
        <h1 className={styles.sidebar__intro__heading1}>
          The #1 place for{' '}
          <span className={styles.sidebar__intro__heading1__ustyle}>
            gift ideas
          </span>{' '}
          !
        </h1>
        <p className={styles.sidebar__intro__text1}>
          Get emails year around with{' '}
          <span className={styles.sidebar__intro__text1__ustyle}>
            tailormade
          </span>{' '}
          gift ideas, for your loved once!
        </p>
        <section className={styles.sidebar__intro__icons}>
          <div className={styles.sidebar__intro__icons__imgwrapper}>
            <ImgComp imgsrc="/balloons.png" />
            <ImgComp imgsrc="/merry-christmas.png" />
            <ImgComp imgsrc="/crown.png" />
            <ImgComp imgsrc="/black-friday.png" />
            <div className={styles.sidebar__intro__icons__number}>
              <p className={styles.sidebar__intro__icons__deals}>
                +Special deals
              </p>
              <p className={styles.sidebar__intro__icons__text}>
                Don't miss out!
              </p>
            </div>
          </div>
          <section className={styles.sidebar__intro__auth}>
            <a className={styles.sidebar__intro__auth__btn}>
              Join now!
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ marginLeft: 4, fontSize: 12, color: 'white' }}
              />
            </a>
            <p className={styles.sidebar__intro__auth__text}>
              <a className={styles.sidebar__intro__auth__link}>Learn more</a>
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default Sidebar;
