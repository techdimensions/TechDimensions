


// JavaScript code to handle project name click and toggle project information
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
        const projectTitle = card.querySelector('.project-title');
        const projectInfo = card.querySelector('.project-info');

        if (projectTitle && projectInfo) {
            projectTitle.addEventListener('click', function () {
                projectInfo.classList.toggle('show');
            });
        }
    });
});

// JavaScript is optional, and this is just a simple example
// const ideaCards = document.querySelectorAll('.idea-card');

// ideaCards.forEach((card) => {
//     card.addEventListener('mouseenter', () => {
//         card.style.boxShadow = '0 8px 12px #422cbf57';
//     });

//     card.addEventListener('mouseleave', () => {
//         card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
//     });
// });
