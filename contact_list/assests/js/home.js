console.log('my script is loaded');
document.querySelectorAll('.delete-button a').forEach(button => {
    button.addEventListener('click', function (e) {
        if (!confirm('Are you sure you want to delete this contact?')) {
            e.preventDefault();
        }
    });
});

function filterContacts() {
    const searchInput = document.getElementById('search-bar').value.toLowerCase();
    const contacts = document.querySelectorAll('.contact-item');
    contacts.forEach(contact => {
        const name = contact.querySelector('.contact-name').textContent.toLowerCase();
        if (name.includes(searchInput)) {
            contact.style.display = '';
        } else {
            contact.style.display = 'none';
        }
    });
}
