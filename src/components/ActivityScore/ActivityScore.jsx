import styles from './ActivityScore.module.css';
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const scoreLabel = ({ viewBox, value }) => {
  const { cx, cy } = viewBox;

  return (
    <text
      x={cx}
      y={cy}
      fill="#8884d8"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      <tspan x={cx} dy="-0.3em" className={styles.labelHighlight}>
        {`${value}%`}
      </tspan>
      <tspan
        x={cx}
        dy="1.2em"
        className={styles.label}
      >{`de Votre objectif`}</tspan>
    </text>
  );
};

scoreLabel.propTypes = {
  viewBox: PropTypes.shape({
    cx: PropTypes.number.isRequired,
    cy: PropTypes.number.isRequired,
  }).isRequired,
  value: PropTypes.number.isRequired,
};

function ActivityScore({ data }) {
  useEffect(() => {
    console.log('useEffect');
    console.log(data);
  });

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
            label={scoreLabel}
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

// [
//     {
//         id: 12,
//         userInfos: {
//             firstName: 'Karl',
//             lastName: 'Dovineau',
//             age: 31,
//         },
//         todayScore: 0.12,
//         keyData: {
//             calorieCount: 1930,
//             proteinCount: 155,
//             carbohydrateCount: 290,
//             lipidCount: 50
//         }
//     },
//     {
//         id: 18,
//         userInfos: {
//             firstName: 'Cecilia',
//             lastName: 'Ratorez',
//             age: 34,
//         },
//         score: 0.3,
//         keyData: {
//             calorieCount: 2500,
//             proteinCount: 90,
//             carbohydrateCount: 150,
//             lipidCount: 120
//         }
//     }
// ]
