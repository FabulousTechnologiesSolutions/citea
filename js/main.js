document.getElementById("toggleButton").addEventListener("click", function() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
});
document.getElementById('toggleButton').addEventListener('click', function (toggle) {
        toggle.preventDefault();
        var left = document.querySelector('.left');
        if (left.style.display === 'none' || left.style.display === '') {
            left.style.display = 'block';
        } else {
            left.style.display = 'none';
        }
});
document.getElementById('toggleSwitch').addEventListener('click', function () {
    this.classList.toggle('active');
    const isactive = this.classList.contains('active');
    const sideparap = document.querySelectorAll('.menupara');
    const logout = document.querySelectorAll('.bottompara');
    const left = document.querySelectorAll('.left');
    const right = document.querySelectorAll('.right');
    const sideList = document.querySelectorAll('.side-list');


    sideparap.forEach(function (menuItem) {
        menuItem.style.display = isactive ? 'none' : 'block'; 
    });

    logout.forEach(function (logoutItem) {
        logoutItem.style.display = isactive ? 'none' : 'block';
    });

    left.forEach(function (leftWidth) {
        leftWidth.style.width = isactive ? '100px' : '250px'; 
    });

    sideList.forEach(function (sideList) {
        sideList.style.justifyContent = isactive ? 'center' : 'start'; 
    });

    right.forEach(function (rightWidth) {
        rightWidth.style.width = isactive ? 'calc(100% - 120px)' : 'calc(100% - 270px)';
    });
});
window.addEventListener('resize', function () {
    const isactive = document.getElementById('toggleSwitch').classList.contains('active'); 
    const sideparap = document.querySelectorAll('.menupara');
    const logout = document.querySelectorAll('.bottompara');
    const left = document.querySelectorAll('.left');
    const right = document.querySelectorAll('.right');
    const sideList = document.querySelectorAll('.side-list');

    if (window.innerWidth > 992) {
        sideparap.forEach(function (menuItem) {
            menuItem.style.display = 'block'; 
        });

        logout.forEach(function (logoutItem) {
            logoutItem.style.display = 'block';
        });

        left.forEach(function (leftWidth) {
            leftWidth.style.width = '250px'; 
        });
        sideList.forEach(function (sideList) {
            sideList.style.justifyContent = 'start'; 
        });
      
        right.forEach(function (rightWidth) {
            rightWidth.style.width = 'calc(100% - 270px)';
        });

   
    } else {
        sideparap.forEach(function (menuItem) {
            menuItem.style.display = 'none'; 
        });

        logout.forEach(function (logoutItem) {
            logoutItem.style.display = 'none'; 
        });

        left.forEach(function (leftWidth) {
            leftWidth.style.width = '100px'; 
        });
        sideList.forEach(function (sideList) {
            sideList.style.justifyContent = 'center'; 
        });
        right.forEach(function (rightWidth) {
            rightWidth.style.width = 'calc(100% - 120px)';
        });
       
    }
});













const ctx = document.getElementById('myChart').getContext('2d');
// Create gradient with color #840FAF
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(132, 15, 175, 0.5)'); // #840FAF with opacity at the top
gradient.addColorStop(1, 'rgba(132, 15, 175, 0)');   // #840FAF fades to transparent at the bottom

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // Months
    datasets: [{
      label: '# of Votes',
      data: [3000, 4900, 5300, 7000, 8200, 6000, 7500], // Start point at 3k
      borderWidth: 2,
      borderColor: '#840FAF', // Border color #840FAF
      backgroundColor: gradient, // Gradient #840FAF
      fill: true, // Fill below the line with the gradient
      tension: 0.8, // Wavy line
      pointRadius: 0 // Remove circles from the line
    }]
  },
  options: {
    responsive: true, // Make chart responsive
    maintainAspectRatio: false, // Disable aspect ratio
    plugins: {
      legend: {
        display: false // Remove the legend
      }
    },
    scales: {
      x: {
        grid: {
          display: false // Remove vertical grid lines
        },
        ticks: {
          padding: 20, // Add space between x-axis and chart area
          align: 'center' // Center-align labels
        },
        offset: true // Adds space before the first label
      },
      y: {
        beginAtZero: false, // Do not start at zero
        min: 1000, // Keep min at 1k for visual reference
        max: 9000, // Maximum value at 9k
        ticks: {
          stepSize: 2000, // Steps of 2k for tick marks
          callback: function(value) {
            return value / 1000 + 'k'; // Format tick labels as 'k'
          }
        },
        grid: {
          display: false // Remove horizontal grid lines
        }
      }
    }
  }
});














const ctxDoughnut = document.getElementById('myDoughnutChart').getContext('2d');

// Function to set legend position based on screen size
function getLegendPosition() {
  return window.matchMedia("(max-width: 768px)").matches ? 'top' : 'left';
}

// Create the chart
const doughnutChart = new Chart(ctxDoughnut, {
  type: 'doughnut',
  data: {
    labels: ['Business Owners', 'Clients', 'Admins'],
    datasets: [{
      data: [45, 35, 20], // Sample percentages for each category
      backgroundColor: [
        '#D257FF', // Purple shade 1
        '#E59DFF', // Purple shade 2
        '#840FAF'  // Purple shade 3
      ],
      borderColor: [
        '#D257FF', // Border color for purple shade 1
        '#E59DFF', // Border color for purple shade 2
        '#840FAF'  // Border color for purple shade 3
      ],
      borderWidth: 1,
      cutout: '85%', // Make the doughnut thinner
    }]
  },
  options: {
    plugins: {
      legend: {
        position: getLegendPosition(), // Set initial legend position
        labels: {
          boxWidth: 20, // Width of the box in the legend
          padding: 20, // Increased space between legend items
          usePointStyle: true, // Use point style for round labels
          generateLabels: function(chart) {
            const data = chart.data;
            return data.labels.map((label, index) => {
              const percentage = data.datasets[0].data[index];
              return {
                text: `${label}: ${percentage}%`, // Show label and percentage
                fillStyle: data.datasets[0].backgroundColor[index],
                strokeStyle: data.datasets[0].borderColor[index],
                lineWidth: data.datasets[0].borderWidth,
                pointStyle: 'circle' // Ensure round labels
              };
            });
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const data = tooltipItem.dataset.data[tooltipItem.dataIndex];
            return tooltipItem.label + ': ' + data + '%'; // Show percentage in tooltip
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false, // Allow resizing
    layout: {
      padding: {
        left: 20, // Padding to the left
        right: 20,
        top: 20,
        bottom: 20
      }
    }
  }
});

// Listen for window resize and update the legend position
window.addEventListener('resize', function() {
  const newPosition = getLegendPosition();
  if (doughnutChart.options.plugins.legend.position !== newPosition) {
    doughnutChart.options.plugins.legend.position = newPosition;
    doughnutChart.update();
  }
});















