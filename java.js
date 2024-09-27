const form = document.getElementById('tournamentForm');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbxWSLrsqSfCUhg1xG9wP_JHszpZQSPr1aumgnxTjmWXymJhxyc5KBMpJ5JfVkTBhe8t/exec', {
        method: 'POST',
        body: new URLSearchParams(formData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            responseDiv.innerHTML = '<p>Thank you for signing up!</p>';
            form.reset(); // Reset the form after successful submission
        } else {
            responseDiv.innerHTML = '<p>There was an error submitting the form.</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        responseDiv.innerHTML = '<p>There was an error submitting the form.</p>';
    });
});