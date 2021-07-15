import { addProject, projectList } from "../model";
import { currentProject, setCurrentProject } from "../controller";
import { renderTodoList } from "./todos";

const projectListElement = document.getElementById("projectList");

function clearList() {
  projectListElement.innerHTML = "";
}

function createProjectElement(newProject, index) {
  const newProjectElement = document.createElement("div");
  newProjectElement.classList.add("project");

  const projectName = document.createElement("h3");
  projectName.innerHTML = newProject;

  newProjectElement.addEventListener("click", function () {
    setCurrentProject(newProject);
    renderTodoList();
  });

  newProjectElement.appendChild(projectName);

  return newProjectElement;
}

function addProjectElement(newProject, index) {
  const newProjectElement = createProjectElement(newProject, index);
  projectListElement.appendChild(newProjectElement);
}

function renderProjectList() {
  clearList();
  projectList.forEach((project, index) => {
    addProjectElement(project, index);
  });
}

export { renderProjectList };
