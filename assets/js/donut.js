                                // Data for the chart
                                var data = {
                                  labels: ["punched in", "punched out", "on leave","week off"],
                                  datasets: [{
                                    data: [10, 20, 30,20], // Specify your data values here
                                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#3cb4e5"],
                                    hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56","#3cb4e5"],
                                  }]
                                };

                                // Chart options
                                var options = {
                                  responsive: true,
                                  cutoutPercentage: 50,
                                  legend: {
                                    position: 'bottom',
                                    labels: {
                                      fontSize: 14,
                                      fontStyle: 'bold',
                                      fontColor: '#ff0000',
                                      borderColor: ["#ff0000"],
                                    }
                                  }
                                };

                                // Create the donut chart
                                var ctx = document.getElementById("donutChart").getContext("2d");
                                var donutChart = new Chart(ctx, {
                                  type: 'doughnut',
                                  data: data,
                                  options: options
                                });