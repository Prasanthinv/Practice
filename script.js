async function fetchProjects() {
    const response = await fetch("https://your-bucket-name.s3.amazonaws.com/projects.json");
    const projects = await response.json();
    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        let li = document.createElement("li");
        li.textContent = `${project.name} - ${project.description}`;
        projectList.appendChild(li);
    });
}
fetchProjects();
