export const barOptions: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: ['#ED7947'],
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '25px',
    },
  },
  dataLabels: {
    enabled: true,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: [
    {
      labels: {
        maxWidth: 360,
        style: {
          colors: '#00D4FF',
          fontSize: '16px',
          fontFamily: 'Play, sans-serif',
          fontWeight: 700,
        },
      },
    },
  ],
};
