//This array is for all the projects and its details
export const ProjectsArray=[]
//This class is to create a project by given name with user
export class Projects {
    constructor(project) {
        this.project=project
    }
}

//This class is to create project details
export class ProjectsDetails {
    constructor(checkbox,title,description,duedate,priority) {
        this.checkbox=checkbox
        this.title=title
        this.description=description
        this.duedate=duedate
        this.priority=priority
    }
}