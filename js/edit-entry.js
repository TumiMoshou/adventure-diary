// Function to retrieve entry data from local storage based on index
function loadEntryData() {
    const params = new URLSearchParams(window.location.search);
    const index = parseInt(params.get('index'));
    const entries = JSON.parse(localStorage.getItem('entries')) || [];

    if (index >= 0 && index < entries.length) {
        const entry = entries[index];
        // Populate input fields with entry data
        document.getElementById('country').value = entry.country;
        document.getElementById('arrival-date').value = entry.arrivalDate;
        document.getElementById('departure-date').value = entry.departureDate;
        document.getElementById('cities-visited').value = entry.citiesVisited;
        document.getElementById('experience').value = entry.experience;
    }
}

// Call function to load entry data when page loads
window.addEventListener('load', loadEntryData);

// Function to handle saving edited entry
function saveEditedEntry(event) {
    event.preventDefault();

    // Retrieve edited entry details from form fields
    const editedCountry = document.getElementById('country').value;
    const editedArrivalDate = document.getElementById('arrival-date').value;
    const editedDepartureDate = document.getElementById('departure-date').value;
    const editedCitiesVisited = document.getElementById('cities-visited').value;
    const editedExperience = document.getElementById('experience').value;

    // Construct edited entry object
    const editedEntry = {
        country: editedCountry,
        arrivalDate: editedArrivalDate,
        departureDate: editedDepartureDate,
        citiesVisited: editedCitiesVisited,
        experience: editedExperience
    };

    // Retrieve entries from local storage
    let entries = JSON.parse(localStorage.getItem('entries')) || [];

    // Retrieve the index from the URL parameter
    const params = new URLSearchParams(window.location.search);
    const index = parseInt(params.get('index'));

    // Update entry in entries array
    if (index >= 0 && index < entries.length) {
        entries[index] = editedEntry;

        // Store updated entries back to local storage
        localStorage.setItem('entries', JSON.stringify(entries));

        // Redirect to previous entries page
        window.location.href = 'previous-entries.html';
    }
}

// Add event listener to form submission
document.getElementById('edit-entry-form').addEventListener('submit', saveEditedEntry);

// Function to delete entry
function deleteEntry() {
    const confirmed = confirm('Are you sure you want to delete this entry?');

    if (confirmed) {
        // Retrieve entries from local storage
        let entries = JSON.parse(localStorage.getItem('entries')) || [];

        // Retrieve the index from the URL parameter
        const params = new URLSearchParams(window.location.search);
        const index = parseInt(params.get('index'));

        // Remove the entry at the specified index
        if (index >= 0 && index < entries.length) {
            entries.splice(index, 1);

            // Store updated entries back to local storage
            localStorage.setItem('entries', JSON.stringify(entries));

            // Redirect to previous entries page
            window.location.href = 'previous-entries.html';
        }
    }
}

// Event listener for the Delete Entry button
document.getElementById('delete-entry-button').addEventListener('click', deleteEntry);
