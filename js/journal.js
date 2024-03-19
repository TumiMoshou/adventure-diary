// JavaScript code for journal.js

document.addEventListener('DOMContentLoaded', function () {
    const uploadedPhoto = document.getElementById('uploaded-photo');
    const photoUploadInput = document.getElementById('photo-upload');
    const removePhotoButton = document.getElementById('remove-photo-button');

    // Function to handle file upload and display photo preview
    function handleFileSelect(event) {
        const file = event.target.files[0]; // Get the first selected file

        // Check if the file is an image
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function (e) {
                uploadedPhoto.src = e.target.result;
                removePhotoButton.style.display = 'inline-block'; // Show remove photo button
            };

            reader.readAsDataURL(file);
        }
    }

    // Function to remove uploaded photo
    function removePhoto() {
        uploadedPhoto.src = ''; // Clear the src attribute
        removePhotoButton.style.display = 'none'; // Hide remove photo button
        photoUploadInput.value = ''; // Clear the file input
    }

    // Add event listeners
    photoUploadInput.addEventListener('change', handleFileSelect);
    removePhotoButton.addEventListener('click', removePhoto);
    
    // Hide the remove photo button initially
    removePhotoButton.style.display = 'none';
});