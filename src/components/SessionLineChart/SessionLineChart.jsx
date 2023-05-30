import {
  LineChart,
  Tooltip,
  XAxis,
  Line,
  // Legend,
  CartesianGrid,
  Bar,
} from 'recharts';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

// const RenderLegend = () => {
//   return <p className={styles.header}>Durée moyenne des sessions</p>;
// };

// const CustomTooltip = () => {
//   return (
//     <div className={styles.tooltip}>
//       <p className={styles.label}>Hello</p>
//     </div>
//   );
// };

// const OverlayTooltip = ({ coordinate }) => {
//   return (
//     <div className={styles.tooltip}>
//       <p className={styles.label}>{`${coordinate.x} ${coordinate.y}`}</p>
//     </div>
//   );
// };

// OverlayTooltip.propTypes = {
//   coordinate: PropTypes.shape({
//     x: PropTypes.number,
//     y: PropTypes.number,
//   }),
// };

const CustomTooltip = ({ active, coordinate, containerWidth }) => {
  if (active && coordinate) {
    console.log('Hello world');
    const style = {
      left: coordinate.x,
      width: containerWidth - coordinate.x,
      height: '100%',
      backgroundColor: 'blue',
      position: 'absolute',
    };

    return <p style={style}>BONJOIR</p>;
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  coordinate: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  containerWidth: PropTypes.number,
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

  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid stroke="" fill="#FF0000" />
        <XAxis
          dataKey="day"
          //   tick={{ fill: '#FFFFFF', opacity: '0.5' }}
          // tickMargin={20}
        />
        {/* <Tooltip content={<CustomTooltip />} position={{ y: 0 }} /> */}
        {/* <Tooltip content={OverlayTooltip} /> */}
        <Tooltip
          content={(props) => (
            <CustomTooltip {...props} containerWidth={containerWidth} />
          )}
        />
        <Line
          type="natural"
          dot={false}
          dataKey="sessionLength"
          strokeWidth={2.5}
          stroke="white"
        />
        <Bar dataKey="sessionLength" fill="#00FF00" />
      </LineChart>
    </div>
  );
}

export default SessionLineChart;
