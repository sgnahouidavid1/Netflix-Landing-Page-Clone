const selectorButton = document.querySelector('.language-selector-button');
const dropdown = document.querySelector('.language-dropdown');

selectorButton.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Add logic to handle language selection from the dropdown options here.





document.addEventListener('DOMContentLoaded', () => {
    const faqGroupContainer = document.querySelector('.faq-content')
    faqGroupContainer.addEventListener('click', (e) => {
        const faqGroup = e.target.closest('.faq-group')
        if (!faqGroup) return;
        const icon = faqGroup.querySelector('.faq-icon-btn')
        const faqgroupBody = faqGroup.querySelector('.faq-group-body')
        
        
        icon.classList.toggle('active');
        faqgroupBody.classList.toggle('open');

    });
});