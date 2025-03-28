function showContent(sectionId) {
    // Hide all content sections
    document.querySelectorAll('.content').forEach(section => {
       section.style.display = 'none';
    });

    // Show the selected content section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}
