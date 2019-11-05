export const planetChartData = {
  type: 'bar',
  data: {
    labels: [
      'Cloud',
      'Bayonetta',
      'Young Link',
      'Ganondorf',
      'Snake',
      'Joker',
      'Marth',
      'Inkling',
      'Chrom',
      'Link'
    ],
    datasets: [
      {
        // Bar Graph
        label: 'Popularity Score',
        data: [555, 276, 221, 214, 188, 181, 174, 168, 166, 165],
        backgroundColor: [
          'rgba(54,73,93,.5)', // Blue
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)'
        ],
        borderColor: [
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d'
        ],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25
          }
        }
      ]
    }
  }
};

export default planetChartData;
