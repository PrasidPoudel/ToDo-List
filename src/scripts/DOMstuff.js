//This function is to make the dropdown for projects list
import { PName } from ".";
import trash from "../img/delete.svg"
import { ProjectsDetails, Projects } from "./logic";
import { tasks } from ".";

export const DOMStuff = (function () {
    function DOMProject(element, projectIndex) {
        let projectObject = new Projects(element.value, [])
        tasks.push(projectObject)
        const project_containers = document.querySelector('.add-projects')
        const container = document.createElement('button')
        const div = document.createElement('div')
        div.textContent = element.value
        div.setAttribute('name', `${element.value}`)
        PName.push(element.value)
        const img = document.createElement('img')
        img.src = trash
        img.setAttribute('data', projectIndex)
        img.classList.add('delete-img')
        container.appendChild(div)
        container.appendChild(img)
        container.setAttribute('data', projectIndex)
        container.classList.add('project-item')
        project_containers.appendChild(container)
        element.value = ''
        projectIndex++;
    }
    // Dropdown for all projects in the form

    function TodoCreation(button) {
        const parent = document.querySelector('.add-todo')
        
        let title = document.getElementById('title').value
        let descript = document.getElementById('description').value
        let date = new Date(document.getElementById('duedate').value)
        let priority = document.getElementById('Priority').value
        let child=button.firstChild
        let todo = new ProjectsDetails(title, descript, date, priority)
        console.log(todo)
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].uniqueProject === child.textContent) {
                tasks[i].tasksArray.push(todo)

                const checkbox = document.createElement('input')
                checkbox.setAttribute('type', 'checkbox')
                const name = document.createElement('div')
                name.textContent = title
                const da = document.createElement('div')
                date.textContent = date.toDateString()
                const container = document.createElement('div')
                container.classList.add('todo-items')
                container.appendChild(checkbox)
                container.appendChild(name);
                container.appendChild(da);
                parent.appendChild(container)
                break;
            }
        }
        
        //This is used for creating Todo spontaneouslu

        console.log(tasks)
    }

    function TodoDOM(button) {  //This to create the todo in DOM the button refers to the Projects Need to look at this function
        document.querySelector('.add-todo').innerHTML = ''
        let arr
        const child = button.firstChild
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].uniqueProject === child.textContent) {
                arr = tasks[i].tasksArray
                break;
            }
        }

        const parent = document.querySelector('.add-todo')
        parent.innerHTML=''
        //NOw we find the unique Project let's make the todo in dom
        //We will use this with some modificatioin foor out todo list spontaneously
        for (let i = 0; i < arr.length; i++) {
            const checkbox = document.createElement('input')
            checkbox.setAttribute('type', 'checkbox')
            const name = document.createElement('div')
            name.textContent = arr[i].title
            const date = document.createElement('div')
            date.textContent = arr[i].duedate
            const container = document.createElement('div')
            container.classList.add('todo-items')
            container.appendChild(checkbox)
            container.appendChild(name);
            container.appendChild(date);
            parent.appendChild(container)
        }
    }
    return {
        DOMProject,TodoCreation, TodoDOM
    }
})()