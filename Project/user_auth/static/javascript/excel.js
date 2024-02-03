
document.addEventListener("DOMContentLoaded", function() {
            var selectElement = document.getElementById("fruits");

            function fetchData(selectedMetric) {
                fetch("{% url 'calculate-metrics' %}", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': getCSRFToken(),
                    },
                    body: JSON.stringify({
                        metric: selectedMetric
                    }),
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(jsonData => {
                    console.log(jsonData);
                    displayDataInTable(jsonData);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
            }

            function displayDataInTable(data) {
        var excelContainer = document.getElementById("excel-container");
        excelContainer.innerHTML = '';  // Clear previous content

        if (!data || data.length === 0) {
            console.error('No data to display.');
            return;
        }

        var table = document.createElement("table");
        table.style.borderCollapse = "collapse";  // Add border-collapse style

        // Create table header
        var headerRow = table.insertRow();
        for (var key in data[0]) {
            var headerCell = document.createElement("th");
            headerCell.innerHTML = key;
            headerCell.style.border = "1px solid #dddddd";  // Add border style
            headerRow.appendChild(headerCell);
        }

        // Create table rows
        for (var i = 0; i < data.length; i++) {
            var row = table.insertRow();
            for (var key in data[i]) {
                var cell = row.insertCell();
                cell.innerHTML = data[i][key];
                cell.style.border = "1px solid #dddddd";  // Add border style
            }
        }

        // Add additional styles to center the table
        table.style.margin = "auto";
        table.style.width = "80%";

        excelContainer.appendChild(table);
    }

        selectElement.addEventListener("change", function() {
            var selectedMetric = selectElement.value;
            fetchData(selectedMetric);
        });


            selectElement.addEventListener("change", function() {
                var selectedMetric = selectElement.value;
                fetchData(selectedMetric);
            });

            // Fetch data initially with the default metric (Sales)
            fetchData("Sales");
        });
    function getCSRFToken() {
        var csrfTokenElement = document.getElementsByName("csrfmiddlewaretoken")[0];
        return csrfTokenElement.value;
    }

     function downloadMetrics() {
        // Construct the download URL dynamically
        var downloadUrl = "{% url 'download_metrics' %}";

        // Create a link element
        var link = document.createElement("a");

        // Set the href attribute to the download URL
        link.href = downloadUrl;

        // Specify that the link should trigger a download
        link.setAttribute("download", "metrics.xlsx");

        // Append the CSRF token to the request headers
        var csrfToken = getCSRFToken();
        link.setAttribute("data-csrf-token", csrfToken);

        // Append the link to the document
        document.body.appendChild(link);

        // Trigger a click on the link to start the download
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    }