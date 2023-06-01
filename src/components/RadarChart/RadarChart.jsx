import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from 'recharts';
import styles from './RadarChart.module.css';
import PropTypes from 'prop-types';

function RadarChartActivity({ data }) {
  // const data = [
  //   {
  //     value: 80,
  //     kind: 'cardio',
  //   },
  //   {
  //     value: 120,
  //     kind: 'energy',
  //   },
  //   {
  //     value: 140,
  //     kind: 'endurance',
  //   },
  //   {
  //     value: 50,
  //     kind: 'strength',
  //   },
  //   {
  //     value: 200,
  //     kind: 'speed',
  //   },
  //   {
  //     value: 90,
  //     kind: 'intensity',
  //   },
  // ];

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius={90} data={data}>
          <PolarGrid
            gridType="polygon"
            radialLines={false}
            strokeWidth={2}
            fontColor="red"
          />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tick={{ fill: 'white', fontSize: 15 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 150]}
            tick={false}
            tickCount={6}
            axisLine={false}
          />
          <Radar dataKey="value" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadarChartActivity.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RadarChartActivity;
