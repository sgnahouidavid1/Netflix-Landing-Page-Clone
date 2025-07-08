const selectorButton = document.querySelector('.language-selector-button');
const dropdown = document.querySelector('.language-dropdown');

selectorButton.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Add logic to handle language selection from the dropdown options
