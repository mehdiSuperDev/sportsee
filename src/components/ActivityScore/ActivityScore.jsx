import styles from './ActivityScore.module.css';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import PropTypes from 'prop-types';

// function ActivityScore({ score }) {
//   console.log(score);

//   const data = [{ name: 'score', value: 0.25 }];

//   return (
//     <div className={styles.container}>
//       <h2>Score</h2>
//       <RadialBarChart
//         width={265}
//         height={265}
//         innerRadius={80}
//         outerRadius={125}
//         barSize={12}
//         data={data}
//       >
//         <RadialBar background clockWise={true} dataKey="value" fill="#8884D8" />
//         <Legend
//           iconSize={10}
//           layout="vertical"
//           verticalAlign="middle"
//           cx={80}
//           cy={80}
//         />
//       </RadialBarChart>
//     </div>
//   );
// }

// ActivityScore.propTypes = {
//   score: PropTypes.number.isRequired,
// };

// export default ActivityScore;

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
