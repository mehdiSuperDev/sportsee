import styles from './ActivityScore.module.css';
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
  Legend,
} from 'recharts';
import PropTypes from 'prop-types';

function CustomLegendScore({ score }) {
  return (
    <div className={styles.legend}>
      <p className={styles.legendTextHighlight}>{score}%</p>
      <p className={styles.legendText}>
        de <br /> votre objectif
      </p>
    </div>
  );
}

CustomLegendScore.propTypes = {
  score: PropTypes.number.isRequired,
};

function ActivityScore({ data }) {
  return (
    <div className={styles.container}>
      <h2>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius={100}
          outerRadius={200}
          barSize={12}
          data={[data]}
          cx="50%"
          cy="50%"
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            minAngle={15}
            cornerRadius="50%"
            dataKey="value"
            fill="#FF0000"
          />
          <Legend
            verticalAlign="middle"
            content={<CustomLegendScore score={data.value} />}
            className="recharts-legend"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

ActivityScore.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};

export default ActivityScore;
