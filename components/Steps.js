import styles from '../styles/steps.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const Step = ({ title, text }) => {
  return (
    <div className={styles.step}>
      <FontAwesomeIcon
        icon={faCheckCircle}
        style={{
          marginRight: 0,
          marginBottom: 5,
          fontSize: 23,
          color: '#E7B5B5',
        }}
      />
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
const Steps = () => {
  return (
    <section className={styles.section}>
      <Step
        title="Gift ideas"
        text="Get gift ideas for anything you want, you have the option to choose what you want gft ideas for!"
      />
      <Step
        title="Tailor made"
        text="Choose for who you want gift ideas for and our AI will tailor made them for you!"
      />
      <Step
        title="Free forever"
        text="Our blogs are free, our emails are free, shocking right?!"
      />
    </section>
  );
};

export default Steps;