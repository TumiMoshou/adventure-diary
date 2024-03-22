function saveEntry() {

    // Retrieve input data
    const country = document.getElementById('country').value;
    const arrivalDate = document.getElementById('arrival-date').value;
    const departureDate = document.getElementById('departure-date').value;
    const citiesVisited = document.getElementById('cities-visited').value;
    const experience = document.getElementById('experience').value;

    // Construct entry object
    const entry = {
        country: country,
        arrivalDate: arrivalDate,
        departureDate: departureDate,
        citiesVisited: citiesVisited,
        experience: experience
    };

    // Retrieve existing entries or initialize as empty array
    let entries = JSON.parse(localStorage.getItem('entries')) || [];

    // Add new entry to array
    entries.push(entry);

    // Store updated entries back to local storage
    localStorage.setItem('entries', JSON.stringify(entries));

    // Display alert
    alert('Your entry has been saved!');
}

// Add event listener to save button
document.getElementById('save-entry-button').addEventListener('click', saveEntry);


