import {
  LineChart,
  Tooltip,
  XAxis,
  Line,
  Legend,
  CartesianGrid,
} from 'recharts';
import styles from './SessionLineChart.module.css';

const RenderLegend = () => {
  return <p className={styles.header}>Durée moyenne des sessions</p>;
};

function SessionLineChart() {
  const data = [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 23,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 0,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ];

  return (
    <div>
      <LineChart width={260} height={265} data={data}>
        <CartesianGrid stroke="" fill="#FF0000" />
        <XAxis
          dataKey="day"
          //   tick={{ fill: '#FFFFFF', opacity: '0.5' }}
          tickMargin={20}
        />
        <Tooltip />
        <Line
          type="monotone"
          dot={false}
          dataKey="sessionLength"
          strokeWidth={2}
          stroke="white"
        />
        <Legend align="left" verticalAlign="top" content={<RenderLegend />} />
      </LineChart>
    </div>
  );
}

export default SessionLineChart;
