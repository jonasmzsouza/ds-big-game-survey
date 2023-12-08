export const pieOptions: ApexCharts.ApexOptions = {
  chart: {
    background: 'transparent',
    foreColor: 'red',
  },
  colors: ['#a8dadc', '#ed7947', '#00D4FF', '#ffd6a5'],
  legend: {
    show: false,
  },
  tooltip: {
    enabled: true,
  },
  dataLabels: {
    enabled: true,
    offsetX: 100,
    offsetY: 100,
    style: {
      colors: ['#a8dadc', '#ed7947', '#00D4FF', '#ffd6a5'],
      fontSize: '20px',
      fontFamily: 'Play, sans-serif',
      fontWeight: 700,
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.7,
      expandOnClick: false,
      dataLabels: {
        offset: 60,
      },
      donut: {
        size: '75%',
      },
    },
  },
};
