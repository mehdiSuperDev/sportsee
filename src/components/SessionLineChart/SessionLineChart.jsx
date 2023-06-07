import {
  LineChart,
  Tooltip,
  XAxis,
  Line,
  CartesianGrid,
  Bar,
  ResponsiveContainer,
  // Legend,
} from 'recharts';
// import PropTypes from 'prop-types';
import styles from './SessionLineChart.module.css';

// const RenderLegend = () => {
//   return <p className={styles.header}>Durée moyenne des sessions</p>;
// };

const CustomTooltip = () => {
  return (
    <div className={styles.tooltip}>
      <p className={styles.label}>Hello</p>
    </div>
  );
};

// CustomTooltip.propTypes = {
//   active: PropTypes.bool,
//   coordinate: PropTypes.shape({
//     x: PropTypes.number,
//     y: PropTypes.number,
//   }),
//   containerWidth: PropTypes.number,
// };

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
      sessionLength: 10,
    },
    {
      day: 6,
      sessionLength: 20,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ];

  return (
    // <div className="styles.parent">
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="styles.container"
    >
      <LineChart data={data}>
        <CartesianGrid stroke="" fill="#FF0000" />
        <XAxis
          dataKey="day"
          tick={{ fill: '#FFFFFF', opacity: '0.5' }}
          tickMargin={20}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="natural"
          dot={false}
          dataKey="sessionLength"
          strokeWidth={2.5}
          stroke="white"
        />
        <Bar dataKey="sessionLength" fill="#00FF00" />
        {/* <Legend content={<RenderLegend />} /> */}
      </LineChart>
    </ResponsiveContainer>
    // </div>
  );
}

export default SessionLineChart;
