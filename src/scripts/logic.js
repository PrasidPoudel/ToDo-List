//This array is for all the projects and its details
export const ProjectsArray = []
//This class is to create a project by given name with user
export class Projects {
    constructor(uniqueProject,tasksArray=[]) {
        this.uniqueProject = uniqueProject
        this.tasksArray=tasksArray
    }
}

//This class is to create project details
export class ProjectsDetails {
    constructor(title, description, duedate, priority) {
        this.title = title
        this.description = description
        this.duedate = duedate
        this.priority = priority
    }
}
export function NoDuplicates(ProjectsArray, element) {
   for(let item of ProjectsArray) {
    if(item===element.value) {
        alert("NO Duplicate Projects Allowed");
        return false;
    }
   }
   return true;
}
//This function is to get value of priority
/**
 * WE have to check duplicate names for projects first to make it more organized
 */