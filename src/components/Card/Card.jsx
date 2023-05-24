import PropTypes from 'prop-types';
import styles from './Card.module.css';
import hamburger from '../../assets/images/hamburger.png';
import chicken from '../../assets/images/chicken.png';
import apple from '../../assets/images/apple.png';
import fire from '../../assets/images/fire.png';

const getCardComponent = (value, label, iconName) => {
  return (
    <div className={styles.container}>
      <img src={iconName} />
      <div className={styles.information}>
        <p>{value}</p>
        <p>{label}</p>
      </div>
    </div>
  );
};

function Card({ nutrientTypeEnum, value }) {
  switch (nutrientTypeEnum) {
    case 'glucide':
      return getCardComponent(`${value.toLocaleString()}g`, 'Glucide', apple);
    case 'proteine':
      return getCardComponent(
        `${value.toLocaleString()}g`,
        'Proteine',
        chicken,
      );
    case 'lipides':
      return getCardComponent(
        `${value.toLocaleString()}g`,
        'Lipides',
        hamburger,
      );
    case 'calories':
      return getCardComponent(
        `${value.toLocaleString()}kCal`,
        'Calories',
        fire,
      );
    default:
      break;
  }
}

Card.propTypes = {
  nutrientTypeEnum: PropTypes.oneOf([
    'glucide',
    'calories',
    'lipides',
    'proteines',
  ]).isRequired,
  value: PropTypes.number.isRequired,
};

export default Card;
