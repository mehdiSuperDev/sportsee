import styles from './ActivityScore.module.css';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

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
          startAngle={0}
          endAngle={(data.value / 100) * 360}
        >
          <RadialBar
            minAngle={15}
            background="#FF0000"
            cornerRadius="50%"
            dataKey="value"
            fill="#8884D8"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            cx="50%"
            cy="50%"
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
