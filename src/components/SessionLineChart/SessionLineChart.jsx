import {
  LineChart,
  Tooltip,
  XAxis,
  Line,
  Legend,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import styles from './SessionLineChart.module.css';

const RenderLegend = () => {
  return (
    <p className={styles.header}>
      Durée moyenne des <br /> sessions
    </p>
  );
};

const RenderTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.label}>{`${payload[0].value}min`}</p>
      </div>
    );
  }

  return null;
};

RenderTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    }),
  ),
};

function SessionLineChart({ data }) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const formattedData = data.map((d) => ({
    ...d,
    day: days[d.day - 1],
  }));

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width="50%" height="50%" data={formattedData}>
          <XAxis
            dataKey="day"
            stroke="#FFFFFF"
            opacity={0.5}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            padding={{ top: 50, bottom: 20 }}
            stroke="#FFFFFF"
            opacity={0.5}
            tickLine={false}
            axisLine={false}
            hide
          />
          <Tooltip content={<RenderTooltip />} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={false}
            strokeWidth={2.5}
            legendType="none"
          />
          <Legend content={<RenderLegend />} align="left" verticalAlign="top" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

SessionLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    }),
  ),
};

export default SessionLineChart;
