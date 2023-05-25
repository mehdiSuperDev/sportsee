import Header from '../components/Header/Header';
import BarChartActivity from '../components/BarChart/BarChartActivity';
// import ActivityScore from '../components/ActivityScore/ActivityScore';
import Card from '../components/Card/Card';
import SessionLineChart from '../components/SessionLineChart/SessionLineChart';

function Home() {
  return (
    <>
      <Header />
      <BarChartActivity />
      {/* <ActivityScore score={12} /> */}
      <p>SPACER</p>
      <Card nutrientTypeEnum="calories" value={12000} />
      <SessionLineChart />
    </>
  );
}

export default Home;
