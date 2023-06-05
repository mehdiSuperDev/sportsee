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
  ),
};

function Home() {
  const [information, setInformationData] = useState(null);

  const [cardData, setCardData] = useState([]);

  const [, setActivityData] = useState(null);
  const [, setSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  function setCards(response) {
    if (response) {
      const key = response.data.data.keyData;
      console.log('key');
      console.log(key);

      console.log('key.calorieCount');
      console.log(key.calorieCount);

      setCardData([
        { name: 'glucides', value: key.calorieCount },
        { name: 'proteines', value: key.proteinCount },
        { name: 'lipides', value: key.carbohydrateCount },
        { name: 'calories', value: key.lipidCount },
      ]);
    }
  }

  //OK
  const fetchInformation = async () => {
    const response = await UserService.getInformation(18);
    console.log('fetchInformation');
    setInformationData(response);
    setCards(response);
  };

  //KO
  const fetchActivityData = async () => {
    const data = await UserService.getActivity(18);
    console.log('fetchActivityData');
    console.log(data.data);
    setActivityData(data);
  };

  const fetchSessionsData = async () => {
    const data = await UserService.getSessions(18);
    console.log('fetchSessionsData');
    console.log(data.data);
    setSessionsData(data);
  };

  //OK
  const fetchPerformance = async () => {
    const response = await UserService.getPerformance(18);

    const kindDict = response.data.data.kind;
    const mappedData = response.data.data.data.map((item) => {
      return { kind: kindDict[item.kind], value: item.value };
    });
    console.log('mappedData');
    console.log(mappedData);
    setPerformanceData(mappedData);
  };

  useEffect(() => {
    fetchActivityData();
    fetchSessionsData();
    fetchPerformance();
    fetchInformation();
    setCards();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.chartContainer}>
        <div className={styles.vertical}>
          <BarChartActivity />
          <div className={styles.chartBox}>
            <ActivityScore
              data={{
                name: 'score',
                value: information?.data.data.score * 100 || 0,
              }}
            />
            {performanceData && <RadarChartActivity data={performanceData} />}
          </div>
        </div>
        <CardList data={cardData} />
      </div>
    </>
  );
}

export default Home;
