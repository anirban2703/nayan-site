import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart() {

    const data = [
        {
          name: 'Jan',
            YourPerformance: 33,
          BestPerformer: 74,
          amt: 2400,
        },
        {
          name: 'Feb',
            YourPerformance: 54,
          BestPerformer: 68,
          amt: 2210,
        },
        {
          name: 'Mar',
            YourPerformance: 36,
          BestPerformer: 87,
          amt: 2290,
        },
        {
          name: 'April',
            YourPerformance: 22,
          BestPerformer: 82,
          amt: 2000,
        },
        {
          name: 'May',
            YourPerformance: 51,
          BestPerformer: 97,
          amt: 2181,
        },
        {
          name: 'June',
            YourPerformance: 66,
          BestPerformer: 83,
          amt: 2500,
        },
        {
          name: 'July',
            YourPerformance: 88,
          BestPerformer: 69,
          amt: 2100,
        },
        {
            name: 'Aug',
            YourPerformance: 61,
            BestPerformer: 74,
            amt: 2100,
          },
          {
            name: 'Sep',
            YourPerformance: 54,
            BestPerformer: 86,
            amt: 2100,
          },
          {
            name: 'Oct',
            YourPerformance: 47,
            BestPerformer: 79,
            amt: 2100,
          },
          {
            name: 'Nov',
            YourPerformance: 78,
            BestPerformer: 90,
            amt: 2100,
          },
          {
            name: 'Dec',
            YourPerformance: 81,
            BestPerformer: 97,
            amt: 2100,
          },
      ];
  return (
    <div className='chart'>
      <h3 className='chartTitle'>Performance Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4/1.5}>
         <LineChart data={data}>
             <XAxis dataKey='name' stroke='#5550bd'></XAxis>
             <YAxis></YAxis>
             <Line type='monotone' dataKey='YourPerformance' stroke='#5550bd'/>
             <Line type='monotone' dataKey='BestPerformer' stroke='#E83A14'/>
             <Tooltip/>
             <CartesianGrid stroke='#e0dfdf'/>
            
            
         </LineChart>

      </ResponsiveContainer>

    </div>
  )
}

export default Chart
