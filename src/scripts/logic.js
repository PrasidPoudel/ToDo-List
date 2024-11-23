//This array is for all the projects and its details
export const ProjectsArray = []
//This class is to create a project by given name with user
export class Projects {
    constructor(uniqueProject) {
        this.uniqueProject = uniqueProject
    }
}

//This class is to create project details
export class ProjectsDetails {
    constructor(checkbox, title, description, duedate, priority) {
        this.checkbox = checkbox
        this.title = title
        this.description = description
        this.duedate = duedate
        this.priority = priority
    }
}
export function NoDuplicates(ProjectsArray, element) {
   for(let item of ProjectsArray) {
    if(item.uniqueProject===element.value) {
        alert("NO Duplicate Projects Allowed");
        return false;
    }
   }
   return true;
}


/**
 * WE have to check duplicate names for projects first to make it more organized
 */