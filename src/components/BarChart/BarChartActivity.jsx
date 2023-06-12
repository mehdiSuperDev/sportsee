import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import styles from './BarChartActivity.module.css';
import iconBlack from '../../assets/images/oval.png';
import iconRed from '../../assets/images/oval-red.png';

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
  label: PropTypes.number,
};

function BarChartActivity({ data }) {
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
      <ResponsiveContainer height="100%" maxwidth="100%">
        <BarChart width="100%" height="100%" data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            tickFormatter={(value, index) => `${index + 1}`}
            tickLine={false}
            axisLine={{ stroke: '#D8D8D8' }}
          />
          <YAxis
            yAxisId="weight"
            domain={['dataMin - 1', 'dataMax + 1']}
            type="number"
            interval={1}
            dataKey="kilogram"
            orientation="right"
            tickLine={false}
            axisLine={{ stroke: '' }}
          />
          <YAxis
            type="number"
            yAxisId="calories"
            dataKey="calories"
            tickLine={false}
            hide
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
      </ResponsiveContainer>
    </div>
  );
}

BarChartActivity.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    }),
  ),
};

BarChartActivity.defaultProps = {
  data: { day: '2000-01-01', kilogram: 0, calories: 0 },
};

export default BarChartActivity;
