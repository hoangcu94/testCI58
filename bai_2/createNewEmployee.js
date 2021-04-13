
class CreateEmployee {
        $txtName;
        $txtTaskList;
        $formCreateNewEmployee;
        $btnAdd;
        constructor() {
            this.$txtName = document.createElement("input");
            this.$txtName.type = "text";
            this.$txtName.placeholder = "Enter name employee";
    
            this.$txtTaskList = document.createElement("input");
    
            this.$formCreateNewEmployee = document.createElement("form");
            this.$formCreateNewEmployee.addEventListener("submit", this.setVisible);
    
            this.$btnAdd = document.createElement("button");
            this.$btnAdd.innerHTML = "Add";
            this.$btnAdd.type = "submit"
        };

        setVisible = (value) => {
            if (value) {
                this.$formCreateNewEmployee.style.display = "flex";
            } else {
                this.$formCreateNewEmployee.style.display = "none";
            }
        }
    
        initRender = (container) => {
            const div = document.createElement("div");
            div.appendChild(this.$txtName);
            div.appendChild(this.$txtTaskList);
            div.appendChild(this.$btnAdd);
            
            this.$formCreateNewEmployee.appendChild(div);
    
            container.appendChild(this.$formCreateNewEmployee);
    
        }
};
export default CreateEmployee;
