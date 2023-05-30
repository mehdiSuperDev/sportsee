import Header from '../components/Header/Header';
import BarChartActivity from '../components/BarChart/BarChartActivity';
import ActivityScore from '../components/ActivityScore/ActivityScore';
import Card from '../components/Card/Card';
import SessionLineChart from '../components/SessionLineChart/SessionLineChart';
import RadarChartActivity from '../components/RadarChart/RadarChart';

import TestLineChart from '../components/Test/Test';

function Home() {
  return (
    <>
      <Header />
      <BarChartActivity />
      <p>SPACER</p>
      <ActivityScore data={{ name: 'score', value: 75.0 }} />
      <p>SPACER</p>
      <Card nutrientTypeEnum="calories" value={12000} />
      <p>SPACER</p>
      <SessionLineChart />
      <p>SPACER</p>
      <RadarChartActivity />
      <p>SPACER</p>
      <TestLineChart />
    </>
  );
}

export default Home;
