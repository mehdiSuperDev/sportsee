import PropTypes from 'prop-types';
import { LineChart, Tooltip, Line, XAxis } from 'recharts';
import { useState, useEffect, useRef } from 'react';
// const CustomTooltip = ({ showTooltip, coordinate, view }) => {
//   if (active && coordinate) {
//     const style = {
//       left: coordinate.x,
//       top: 0,
//       width: view.width - coordinate.x,
//       height: '100%',
//       backgroundColor: 'blue',
//       position: 'absolute',
//     };

//     return <div style={style}>BONJOUR</div>;
//   }
//   return null;
// };

// CustomTooltip.propTypes = {
//   showTooltip: PropTypes.func.isRequired,
//   coordinate: PropTypes.shape({
//     x: PropTypes.number,
//     y: PropTypes.number,
//   }),
//   view: PropTypes.shape({
//     x: PropTypes.number,
//     y: PropTypes.number,
//     width: PropTypes.number,
//     height: PropTypes.number,
//   }),
// };

// function TestLineChart() {
//   const data = [
//     {
//       day: 1,
//       sessionLength: 30,
//     },
//     {
//       day: 2,
//       sessionLength: 23,
//     },
//     {
//       day: 3,
//       sessionLength: 45,
//     },
//     {
//       day: 4,
//       sessionLength: 50,
//     },
//     {
//       day: 5,
//       sessionLength: 10,
//     },
//     {
//       day: 6,
//       sessionLength: 20,
//     },
//     {
//       day: 7,
//       sessionLength: 60,
//     },
//   ];

//   const [containerWidth, setContainerWidth] = useState(0);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (containerRef.current) {
//       setContainerWidth(containerRef.current.getBoundingClientRect().width);
//     }
//   }, []);

//   const showTooltip = () => {
//     if (containerRef.current) {
//       setContainerWidth(containerRef.current.getBoundingClientRect().width);
//     }
//   };

//   return (
//     <div ref={containerRef} style={{ position: 'relative' }}>
//       <LineChart width={500} height={300} data={data}>
//         <XAxis dataKey="day" />
//         <Tooltip
//           content={(props) => (
//             <CustomTooltip
//               {...props}
//               view={{ width: containerWidth, height: 300 }}
//               showTooltip={showTooltip}
//             />
//           )}
//         />
//         <Line
//           type="natural"
//           dot={false}
//           dataKey="sessionLength"
//           strokeWidth={2.5}
//           stroke="white"
//         />
//         <Bar dataKey="sessionLength" fill="#00FF00" />
//       </LineChart>
//     </div>
//   );
// }

const CustomTooltip = ({ active, coordinate, view }) => {
  if (active && coordinate) {
    const style = {
      position: 'absolute',
      left: coordinate.x,
      top: 0,
      width: view.width - coordinate.x,
      height: '100%',
      backgroundColor: 'blue',
    };

    return <div style={style}>BONJOUR</div>;
  }

  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  coordinate: PropTypes.object,
  view: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
};

export default function TestLineChart() {
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
    <div ref={containerRef} style={{ position: 'relative', width: 600 }}>
      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="day" />
        <Tooltip content={<CustomTooltip view={{ width: containerWidth }} />} />
        <Line
          dataKey="sessionLength"
          dot={false}
          stroke="#069"
          strokeWidth={3}
        />
      </LineChart>
    </div>
  );
}
