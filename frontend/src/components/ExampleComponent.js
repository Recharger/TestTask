import React from 'react';
import LineChart from "react-chartjs";

const ExampleComponent = (props) => (
  <LineChart data={props.chartData} options={props.chartOptions} width="600" height="250"/>
);

export default ExampleComponent;
