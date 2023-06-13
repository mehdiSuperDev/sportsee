import Header from '../components/Header/Header';
import BarChartActivity from '../components/BarChart/BarChartActivity';
import ActivityScore from '../components/ActivityScore/ActivityScore';
import Card from '../components/Card/Card';
import SessionLineChart from '../components/SessionLineChart/SessionLineChart';
import RadarChartActivity from '../components/RadarChart/RadarChart';
import styles from './Home.module.css';
import PropTypes from 'prop-types';
import UserService from '../services/ApiService.js';
import { useEffect, useState } from 'react';
import SideBar from '../components/SideBar/SideBar';
import PerformanceModel from '../dataModels/PerformanceModel';
import SessionsModel from '../dataModels/SessionsModel';
import ActivityModel from '../dataModels/ActivityModel';
// import MockerUserService from '../services/MockUserService';

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
  const [name, setName] = useState('');

  const [information, setInformationData] = useState(null);

  const [cardData, setCardData] = useState([]);

  const defaultActivityData = [
    {
      day: '2000-01-01',
      kilogram: 0,
      calories: 0,
    },
  ];
  const [activityData, setActivityData] = useState(defaultActivityData);
  const [sessionsData, setSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState([
    { name: 'glucides', value: 0 },
    { name: 'proteines', value: 0 },
    { name: 'lipides', value: 0 },
    { name: 'calories', value: 0 },
  ]);

  function setCards(response) {
    if (response) {
      const key = response.data.data.keyData;

      setCardData([
        { name: 'glucides', value: key.calorieCount },
        { name: 'proteines', value: key.proteinCount },
        { name: 'lipides', value: key.carbohydrateCount },
        { name: 'calories', value: key.lipidCount },
      ]);
    }
  }

  function updateName(response) {
    if (response) {
      setName(response.data.data.userInfos.firstName);
    }
  }

  //OK
  const fetchInformation = async () => {
    try {
      const response = await UserService.getInformation(18);
      setInformationData(response);
      setCards(response);
      updateName(response);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des données de session",
        error,
      );
    }
  };

  //KO
  //BarChartActivity
  const fetchActivityData = async () => {
    try {
      const response = await UserService.getActivity(18);
      const data = new ActivityModel(response.data).format();
      setActivityData(data);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des données de session",
        error,
      );
    }
  };

  //SessionLineChart
  //TODO: Traiter le cas de l'erreur 404
  const fetchSessionsData = async () => {
    try {
      const response = await UserService.getSessions(12);
      const data = new SessionsModel(response.data).format();
      setSessionsData(data);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des données de session",
        error,
      );
    }
  };

  //OK
  const fetchPerformance = async () => {
    try {
      const response = await UserService.getPerformance(12);
      const data = new PerformanceModel(response.data).format();
      setPerformanceData(data);
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la récupération des données de session",
        error,
      );
    }
  };

  useEffect(() => {
    fetchInformation();
  }, []);

  useEffect(() => {
    fetchActivityData();
  }, []);

  useEffect(() => {
    fetchSessionsData();
  }, []);

  useEffect(() => {
    fetchPerformance();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <SideBar />
        <div className={styles.chartContainer}>
          <section className={styles.welcome}>
            <p>
              <span className={`${styles.greeting} ${styles.gn}`}>Bonjour</span>
              <span className={`${styles.name} ${styles.gn}`}> {name}</span>
            </p>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </section>
          <div className={styles.chartBottomContainer}>
            <div className={styles.horizontal}>
              <BarChartActivity data={activityData} />
              <div className={styles.chartBox}>
                <SessionLineChart data={sessionsData ?? [{}]} />
                <ActivityScore
                  data={{
                    name: 'score',
                    value: information?.data.data.score * 100 || 0,
                  }}
                />
                <RadarChartActivity data={performanceData} />
              </div>
            </div>
            <CardList data={cardData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
