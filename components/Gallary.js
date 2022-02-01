import styles from '../styles/gallary.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';

const ImgItem = ({ imgsrc, text, icon, hasPosition, position }) => {
  const classname = `styles.gallary__imgwrapper__img__`;
  return (
    <div className={styles.gallary__imgwrapper}>
      <img className={styles.gallary__imgwrapper__img} src={imgsrc}></img>
      {hasPosition ? (
        <p className={`${styles['gallary__imgwrapper__img__' + position]}`}>
          <span className={styles.gallary__imgwrapper__textwraper}>
            {' '}
            <FontAwesomeIcon
              icon={faGift}
              style={{
                marginRight: 10,
                marginBottom: 1,
                fontSize: 14,
                color: '#E7B5B5',
              }}
            />
            {text}
          </span>
        </p>
      ) : null}
    </div>
  );
};
const Gallary = () => {
  return (
    // 8 images
    <div className={styles.gallary}>
      <ImgItem
        imgsrc="/birthday.jpg"
        text="Birthday gifts!"
        icon={faGift}
        hasPosition={true}
        position="1"
      />
      <ImgItem imgsrc="/cake.jpg" hasPosition={false} />
      <ImgItem
        imgsrc="/christmas.jpg"
        text="Chistmas gifts!"
        icon=""
        hasPosition={true}
        position="2"
      />
      <ImgItem
        imgsrc="/motherday.jpg"
        text="Mother/dad day!"
        icon=""
        hasPosition={true}
        position="3"
      />
      <ImgItem imgsrc="/confetty.jpg" hasPosition={false} />
      <ImgItem imgsrc="/balloons.jpg" hasPosition={false} />
      <ImgItem imgsrc="/blackgifts.jpg" hasPosition={false} />
      <ImgItem
        imgsrc="/sales.jpg"
        text="Deals year around!"
        icon=""
        hasPosition={true}
        position="4"
      />
    </div>
  );
};
export default Gallary;
