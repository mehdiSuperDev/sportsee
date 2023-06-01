import Header from '../components/Header/Header';
import BarChartActivity from '../components/BarChart/BarChartActivity';
import ActivityScore from '../components/ActivityScore/ActivityScore';
import Card from '../components/Card/Card';
// import SessionLineChart from '../components/SessionLineChart/SessionLineChart';
import RadarChartActivity from '../components/RadarChart/RadarChart';
import styles from './Home.module.css';
import PropTypes from 'prop-types';
import UserService from '../services/ApiService.js';
import { useEffect, useState } from 'react';

const CardList = ({ data }) => {
  return (
    <div className={styles.cardList}>
      {data.map((card) => (
        <Card key={card.name} nutrientTypeEnum={card.name} value={card.value} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

const cardData = [
  {
    name: 'glucides',
    value: 80,
  },
  {
    name: 'proteines',
    value: 120,
  },
  {
    name: 'lipides',
    value: 140,
  },
  {
    name: 'calories',
    value: 50,
  },
];

function Home() {
  const [, setActivityData] = useState(null);

  const fetchActivityData = async () => {
    const data = await UserService.getActivity(18);
    console.log(data.data);
    setActivityData(data);
  };

  useEffect(() => {
    fetchActivityData();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.chartContainer}>
        <div className={styles.vertical}>
          <BarChartActivity />
          <div className={styles.chartBox}>
            <ActivityScore data={{ name: 'score', value: 75.0 }} />
            <RadarChartActivity />
          </div>
        </div>
        <CardList data={cardData} />
      </div>
    </>
  );
}

export default Home;
