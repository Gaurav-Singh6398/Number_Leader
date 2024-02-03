function addCoFounder() {
                var table = document.getElementById("co-founder-table").getElementsByTagName('tbody')[0];
                var newRow = table.insertRow(table.rows.length);
                var cell1 = newRow.insertCell(0);
                var cell2 = newRow.insertCell(1);
                var cell3 = newRow.insertCell(2);
                var cell4 = newRow.insertCell(3);
                var cell5 = newRow.insertCell(4);
                var cell6 = newRow.insertCell(5);

                cell1.innerHTML = '<input type="text" placeholder="Name" name="co_founder" required>';
                cell2.innerHTML = '<input type="url" placeholder="Linked Url" name="linkedin_profile" required>';
                cell3.innerHTML = '<input type="text" placeholder="Introduction" name="introduction" required>';
                cell4.innerHTML = '<input type="file" name="profile_photo" accept="image/*" required>';
                cell5.innerHTML = '<input type="email" placeholder="Email" name="cofounder_email" required>';
                cell6.innerHTML = '<input type="text" placeholder="Enter PhoneNumber" name="phone_number" pattern="[0-9]{10}" title="Please enter a 10-digit number" required>';
            }

            function submitForm(event) {
                event.preventDefault(); // Prevent the default form submission

                // Get form elements
                const username = document.getElementById('username').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                const startup_name = document.getElementById('startup_name').value;
                const url = document.getElementById('website').value; // Corrected ID
                const video = document.getElementById('introductory_video').value; // Corrected ID

                // Check if passwords match
                if (password !== confirmPassword) {
                    alert('Passwords do not match');
                    return;
                }

                // Create a JavaScript object with the form data
                const formData = {
                    signupDetails: {
                        username: username,
                        email: email,
                        password: password,
                        confirmPassword: confirmPassword
                    },
                    startupDetails: {
                        companyName: startup_name,
                        website: url,
                        introductoryVideo: video
                    },
                    coFounderDetails: getCoFounderDetails() // Function to get co-founder details
                };

                // Your fetch code here...
                // ...

                // You can now use the 'formData' object as needed, for example, send it to a server or store it locally.
                console.log(formData);
            }

            function getCoFounderDetails() {
                // Get co-founder table and rows
                const coFounderTable = document.getElementById('co-founder-table');
                const rows = coFounderTable.getElementsByTagName('tr');
                const coFounders = [];

                // Loop through rows (skip the first one as it contains headers)
                for (let i = 1; i < rows.length; i++) {
                    const row = rows[i];
                    const inputs = row.getElementsByTagName('input');

                    // Create co-founder object and add it to the array
                    const coFounder = {
                        name: inputs[0].value,
                        linkedIn: inputs[1].value,
                        introduction: inputs[2].value,
                        photo: inputs[3].value,
                        email: inputs[4].value,
                        phoneNumber: inputs[5].value
                    };

                    coFounders.push(coFounder);
                }

                return coFounders;
            }