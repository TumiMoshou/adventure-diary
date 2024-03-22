// Function to display the specific entry based on the index provided in the URL parameter
function displayEntry() {
    // Retrieve the index from the URL parameter
    const params = new URLSearchParams(window.location.search);
    const index = parseInt(params.get('index'));

    // Retrieve entries from local storage
    let entries = JSON.parse(localStorage.getItem('entries')) || [];

    // Check if the index is valid
    if (index >= 0 && index < entries.length) {
        const entry = entries[index];
        const entryContent = document.getElementById('entry-content');

        // Create elements to display entry details
        const entryDetails = document.createElement('div');
        entryDetails.innerHTML = `
            <h2>${entry.country}</h2>
            <p>Arrival Date: ${entry.arrivalDate}</p>
            <p>Departure Date: ${entry.departureDate}</p>
            <p>Cities Visited: ${entry.citiesVisited}</p>
            <p>Experience: ${entry.experience}</p>
        `;

        // Append entry details to the entry content div
        entryContent.appendChild(entryDetails);

        // Add event listener for edit button
        document.getElementById('edit-entry-button').addEventListener('click', function() {
            // Redirect to the journal page with the entry index as a parameter
            window.location.href = `journal.html?index=${index}`;
        });

        // Add event listener for delete button
        document.getElementById('delete-entry-button').addEventListener('click', function() {
            const confirmDelete = confirm("Are you sure you want to delete this entry?");
            if (confirmDelete) {
                // Remove the entry from the array and update local storage
                entries.splice(index, 1);
                localStorage.setItem('entries', JSON.stringify(entries));
                // Redirect to the previous entries page
                window.location.href = 'previous-entries.html';
            }
        });
    } else {
        // Handle the case where the index is out of range
        const entryContent = document.getElementById('entry-content');
        entryContent.innerHTML = `<p>Entry not found</p>`;
    }
}

// Call function to display the entry when page loads
window.addEventListener('load', displayEntry);
