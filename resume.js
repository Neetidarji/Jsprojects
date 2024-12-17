document.addEventListener('DOMContentLoaded', () => {
    const projectsSection = document.querySelector('.projects');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Projects';
    document.body.insertBefore(toggleButton, projectsSection);

    toggleButton.addEventListener('click', () => {
        projectsSection.style.display = projectsSection.style.display === 'none' ? 'block' : 'none';
    });
});