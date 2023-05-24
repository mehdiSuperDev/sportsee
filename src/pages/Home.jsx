import Header from '../components/Header/Header';
import BarChartActivity from '../components/BarChart/BarChartActivity';
// import ActivityScore from '../components/ActivityScore/ActivityScore';
import Card from '../components/Card/Card';

function Home() {
  return (
    <>
      <Header />
      <BarChartActivity />
      {/* <ActivityScore score={12} /> */}
      <p>SPACER</p>
      <Card nutrientTypeEnum="glucide" value={12} />
    </>
  );
}

export default Home;
