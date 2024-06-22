document.addEventListener('DOMContentLoaded', () => {
    const profile = {
        name: 'Your Name',
        tagline: 'Your Tagline',
        introduction: 'Introduction about yourself...',
        background: 'Background...',
        specialties: 'Specialties...'
    };

    const projects = [
        {
            title: 'Project 1',
            description: 'Project 1 Description',
            image: 'project1-thumbnail.jpg'
        },
        {
            title: 'Project 2',
            description: 'Project 2 Description',
            image: 'project2-thumbnail.jpg'
        },
        // Add more projects as needed
    ];

    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

    document.getElementById('name').textContent = profile.name;
    document.getElementById('tagline').textContent = profile.tagline;
    document.getElementById('introduction').textContent = profile.introduction;
    document.getElementById('background').textContent = profile.background;
    document.getElementById('specialties').textContent = profile.specialties;

    const projectsContainer = document.getElementById('projects');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        
        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = project.title;
        
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        
        projectElement.appendChild(projectImage);
        projectElement.appendChild(projectDescription);
        projectsContainer.appendChild(projectElement);
    });

    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const skillElement = document.createElement('li');
        skillElement.textContent = skill;
        skillsList.appendChild(skillElement);
    });
});
