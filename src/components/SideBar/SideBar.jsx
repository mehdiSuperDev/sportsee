import styles from './SideBar.module.css';
import yoga from '../../../src/assets/images/yoga.png';
import swim from '../../../src/assets/images/swim.png';
import cycle from '../../../src/assets/images/cycle.png';
import alter from '../../../src/assets/images/alter.png';

export default function SideBar() {
  const images = [yoga, swim, cycle, alter];

  return (
    <div className={styles.container}>
      {images.map((image, index) => {
        return (
          <div className={styles.item} key={index}>
            <img src={image} alt={`icon ${index}`} />
          </div>
        );
      })}
      <p>Copiryght, SportSee 2020</p>
    </div>
  );
}
