//First we should add the projects in DOM by getting the user input
import "../styles/style.css"
import { ProjectsArray } from "./logic"
import { Projects } from "./logic"
import { ProjectsDetails } from "./logic"
import { NoDuplicates } from "./logic"
import trash from "../img/delete.svg"

const tasksArray = []//This will store the task details

//Let's open the project form first
const add_project = document.querySelector('.projects')
const showProjectForm = document.querySelector('.projects-form')
add_project.addEventListener('click', () => {
    showProjectForm.style.display = 'block'
})
//Now take the name of project and add it add-projects class
const projectLabel = document.querySelector(`#project-label`);
const addLabel = document.querySelector('.add-button')
addLabel.addEventListener('click', (event) => {
    event.preventDefault();
    if (projectLabel.value !== '') {
        let condition = NoDuplicates(ProjectsArray, projectLabel)
        console.log(condition)
        if (condition === true) {
            DOMProject(projectLabel)
        }
    }
    OpenTodo()
})

//Now let's check the condition when user click cancel
const cancelProjectForm = document.querySelector('.cancel-button')
cancelProjectForm.addEventListener('click', (event) => {
    event.preventDefault()
    showProjectForm.style.display = 'none'
})


//This is for showing the dialogbox for adding todo and closing the todo box
const addTodo = document.querySelector('.add-todo')
const dialogbox = document.querySelector('.dialog')
addTodo.addEventListener('click', () => {
    dialogbox.showModal();
})
const cancel=document.querySelector('.cancel');
cancel.addEventListener('click',(event)=>{
    event.preventDefault();
    dialogbox.close()
})

//let's open and close the dialogbox
const TaskDialogButton = document.querySelector('#submit');
TaskDialogButton.addEventListener('click', (event) => {
    event.preventDefault()
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    //We have to get due date too
    let duedate=new Date(document.getElementById('duedate').value)
    let p = document.getElementById('Priority').value

    let checkbox = document.createElement('input');

    // Assigning the attributes to created checkbox
    checkbox.type = "checkbox";
    checkbox.name = "done";
    checkbox.value = "value";
    checkbox.id = "checkbox";
    let obj = new ProjectsDetails(checkbox, title, description, duedate, p)

    tasksArray.push(obj)
    console.table(tasksArray)
    console.log('Projects: \n')
    console.table(ProjectsArray)
    console.log(p)
})

//Now let's add functionality to add Todo in Projects
function OpenTodo() {
    const addTodo = document.querySelector('.add-todo');
    const projectContainers = document.querySelectorAll('.add-projects>button');
    if (projectContainers) {
        for (let items of projectContainers) {
            items.addEventListener('click', () => {
                addTodo.innerHTML = '+Todo'
            })
        }
    }
}

//This is the function for adding the project on DOM 
let projectIndex = 0
function DOMProject(element) {
    const project_containers = document.querySelector('.add-projects')
    const container = document.createElement('button')
    const div = document.createElement('div')
    div.textContent = element.value
    div.setAttribute('name', `${element.value}`)
    const projectname = new Projects(element.value,tasksArray)
    ProjectsArray.push(projectname)
    const img = document.createElement('img')
    img.src = trash
    container.appendChild(div)
    container.appendChild(img)
    container.setAttribute('data',projectIndex)
    project_containers.appendChild(container)
    element.value = ''
    console.log(ProjectsArray)
    projectIndex++;
}


/**
 * Let's Make a To-Do List. It won't be easy 
 * Object Oriented Programming will help
 * What can we do. Fist make a layout for page(OH MY GOD)
 * ON our left give option to add and other things and in right The LIst of things to be done
 * Left should include today this week and inbox list with projects too.With Important Section too
 * our project section have seperate for each project with their title description and date with the help of 
 * given date we should find the time for it like today or this week or month
 * projects should be seen in inbox with a checkbox and a button to set it as important
 * on click on checkbox the letters should be cut off
 * Also a delete button should be provided
 * Append the projects on page(We have a div for that)
 * Storing it in object and filtering is the key
 * nested array gonna help
 * WE should check duplication too of projects and tasks
 * WE have 3 fonts Roboto Dancing Script and Bubuneis
 */