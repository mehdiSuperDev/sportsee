import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import PropTypes from 'prop-types';
import styles from './BarChartActivity.module.css';
import iconBlack from '../../assets/images/oval.png';
import iconRed from '../../assets/images/oval-red.png';

const sessions = [
  {
    day: '2020-07-01',
    kilogram: 80,
    calories: 240,
  },
  {
    day: '2020-07-02',
    kilogram: 80,
    calories: 220,
  },
  {
    day: '2020-07-03',
    kilogram: 81,
    calories: 280,
  },
  {
    day: '2020-07-04',
    kilogram: 81,
    calories: 290,
  },
  {
    day: '2020-07-05',
    kilogram: 80,
    calories: 160,
  },
  {
    day: '2020-07-06',
    kilogram: 78,
    calories: 162,
  },
  {
    day: '2020-07-07',
    kilogram: 76,
    calories: 390,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && label) {
    return (
      <div className={styles.tooltipContainer}>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    }),
  ),
  label: PropTypes.string,
};

function BarChartActivity() {
  return (
    <div className={styles.barChartContainer}>
      <div className={styles.header}>
        <p>Activité quotidienne</p>
        <div className={styles.spacer}>
          <div className={styles.spacer}>
            <img src={iconBlack} />
            <p>Poids (kg)</p>
          </div>
          <div className={styles.spacer}>
            <img src={iconRed} />
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <BarChart width={765} height={205} data={sessions}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          tickFormatter={(value, index) => `${index + 1}`}
          tickLine={false}
        />
        <YAxis
          yAxisId="weight"
          domain={[69, 'auto']}
          dataKey="kilogram"
          orientation="right"
          tickLine={false}
          axisLine={{ stroke: '' }}
        />
        <YAxis
          hide
          domain={[0, 'dataMax + 10']}
          yAxisId="calories"
          dataKey="calories"
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          yAxisId="weight"
          dataKey="kilogram"
          fill="##282D30"
          barSize={7}
          radius={[5, 5, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </div>
  );
}

export default BarChartActivity;
