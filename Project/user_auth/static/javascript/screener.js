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