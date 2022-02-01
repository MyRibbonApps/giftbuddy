import styles from '../styles/auth.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Gallary from '../components/Gallary';
import Steps from '../components/Steps';
import Image from 'next/image';

// import the icons you need
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const auth = () => {
  return (
    <>
      <div className={styles.app}>
        <header className={styles.header}>
          <Header />
        </header>
        <div className={styles.sidebar}>
          <Sidebar />
          <section className={styles.sidebar__upload}></section>
        </div>
        <section className={styles.gallery}>
          <Gallary />
        </section>
        <section className={styles.steps}>
          <Steps />
        </section>
      </div>
    </>
  );
};
export default auth;
