import Header from '../components/Header/Header';
import BarChartActivity from '../components/BarChart/BarChartActivity';
import ActivityScore from '../components/ActivityScore/ActivityScore';

function Home() {
  return (
    <>
      <Header />
      <BarChartActivity />
      <ActivityScore score={12} />
    </>
  );
}

export default Home;
