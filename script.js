// Data from the tables
const scalerSchoolData = [29, 0]; // Number of related and unrelated subjects
const otherCollegeData = [13, 11]; // Number of related and unrelated subjects

// Calculate percentages
const scalerSchoolPercentage = (scalerSchoolData[0] / (scalerSchoolData[0] + scalerSchoolData[1])) * 100;
const otherCollegePercentage = (otherCollegeData[0] / (otherCollegeData[0] + otherCollegeData[1])) * 100;

// Bar graph data
const data = {
  labels: ['Scaler School', 'Other College'],
  datasets: [{
    label: 'Percentage of Subjects Related to Computer Science',
    data: [scalerSchoolPercentage, otherCollegePercentage],
    backgroundColor: [
      'rgba(54, 162, 235, 0.5)', // Blue
      'rgba(255, 99, 132, 0.5)',  // Red
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
      'rgba(255, 99, 132, 1)',
    ],
    borderWidth: 1
  }]
};

// Chart configuration
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};

// Create chart
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
