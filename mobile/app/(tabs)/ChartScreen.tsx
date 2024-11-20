import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { View } from 'react-native';

const ChartScreen = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Dataset',
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Doughnut data={data} />
    </View>
  );
};

export default ChartScreen;
