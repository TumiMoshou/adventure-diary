// Function to display previous entries and handle link redirection
function displayPreviousEntries() {
    // Retrieve entries from local storage
    const entries = JSON.parse(localStorage.getItem('entries')) || [];

    // Display entries on page
    const entriesContainer = document.getElementById('entries-container');

    entries.forEach((entry, index) => {
        const entryElement = document.createElement('div');
        entryElement.classList.add('entry');
        entryElement.innerHTML = `
            <h2>${entry.country}</h2>
            <p>Arrival Date: ${entry.arrivalDate}</p>
            <p>Departure Date: ${entry.departureDate}</p>
            <p>Cities Visited: ${entry.citiesVisited}</p>
            <p>Experience: ${entry.experience}</p>
            <a href="/html/view-entry.html?index=${index}">View Entry</a>
        `;
        entriesContainer.appendChild(entryElement);
    });
}

// Call function to display entries when page loads
window.addEventListener('load', displayPreviousEntries);
