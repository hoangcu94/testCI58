import CreateEmployee from "./createNewEmployee.js"

class Manager {
    createNewEmployees;
    $formManager;
    
    constructor() {
        
        this.createNewEmployees = new CreateEmployee();
        
        this.$btnAddEmployee = document.createElement("button");
        this.$btnAddEmployee.type = "submit";
        this.$btnAddEmployee.innerHTML = "New";
        this.$formManager = document.createElement("form");      
    }



    initRender = (container) => {
        const div = document.createElement('div');
        
        div.appendChild(this.$btnAddEmployee);
        this.createNewEmployees.initRender(div);
        this.$formManager.appendChild(div);

        container.appendChild(this.$formManager);
    }
};

export default Manager;