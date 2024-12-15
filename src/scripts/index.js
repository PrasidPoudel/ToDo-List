//First we should add the projects in DOM by getting the user input
import "../styles/style.css"
import { ProjectsArray } from "./logic"
import { Projects } from "./logic"
import { ProjectsDetails } from "./logic"
import { DOMStuff } from "./DOMstuff"
import { NoDuplicates } from "./logic"

export const tasks = []//This will store the task details
export const PName = []//Checking duplication array that store name for all projects
let projectIndex = 0
const TaskDialogButton = document.querySelector('#submit');
//Let's open the project form first
const add_project = document.querySelector('.projects')
const showProjectForm = document.querySelector('.projects-form')
add_project.addEventListener('click', () => {
    showProjectForm.style.display = 'block'
    document.querySelector('#project-label').focus()
})
//Now take the name of project and add it add-projects class
const projectLabel = document.querySelector(`#project-label`);
const addLabel = document.querySelector('.add-button')
addLabel.addEventListener('click', (event) => {
    event.preventDefault();
    if (projectLabel.value !== '') {
        let condition = NoDuplicates(PName, projectLabel)
        console.log(condition)
        if (condition === true) {
            DOMStuff.DOMProject(projectLabel, projectIndex)
        }
        Test()
    }
})

//Now let's check the condition when user click cancel
const cancelProjectForm = document.querySelector('.cancel-button')
cancelProjectForm.addEventListener('click', (event) => {
    event.preventDefault()
    showProjectForm.style.display = 'none'
})


//This is for showing the dialogbox for adding todo and closing the todo box
const addTodo = document.querySelector('.taskAdd')
const dialogbox = document.querySelector('.dialog')
addTodo.addEventListener('click', () => {
    dialogbox.showModal();
})
const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', (event) => {
    event.preventDefault();
    dialogbox.close()
})

//let's open and close the dialogbox

function Test() {
   
    //Now let's add todo corresponding for user whith click w.r.to The Projects
    const ProjectAll = document.querySelectorAll('.add-projects>button')
    ProjectAll.forEach((project) => {
        project.addEventListener('click', () => {//There is bug here which doubled the element creation
            DOMStuff.TodoDOM(project)
            TaskDialogButton.addEventListener('click', (event) => {
                event.preventDefault()
                DOMStuff.TodoCreation(project)
            })
        })
    })

}
//Now let's add function to delete the projects
//
//This is the function for adding the project on DOM 
//Now we want to make user add task by form


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