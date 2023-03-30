$(document).ready(function() {
    // Initialize datepicker for start and end dates
    $("#start-date").datepicker();
    $("#end-date").datepicker();
  
    // Listen for changes in the year input
    $("#year-input").on("change", function() {
      // Get the start and end dates
      var startDate = new Date($("#start-date").val());
      var endDate = new Date($("#end-date").val());
  
      // Calculate the number of months between the start and end dates
      var numMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12;
      numMonths -= startDate.getMonth();
      numMonths += endDate.getMonth() + 1;
  
      // Get the selected year from the input
      var selectedYear = parseInt($(this).val());
  
      // Calculate the start and end dates for the selected year
      var yearStartDate = new Date(selectedYear, 0, 1);
      var yearEndDate = new Date(selectedYear + 5, 0, 0);
  
      // Create an array to store the months
      var months = [];
  
      // Loop through all the months between the start and end dates
      for (var i = 0; i < numMonths; i++) {
        var date = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
        // Check if the date is within the selected year
        if (date >= yearStartDate && date <= yearEndDate) {
          months.push(date.toLocaleString('default', { month: 'long' }));
        }
      }
  
      // Display the list of months
      $("#month-list").html("<ul><li>" + months.join("</li><li>") + "</li></ul>");
    });
  });