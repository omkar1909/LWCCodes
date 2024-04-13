import { LightningElement } from 'lwc';

export default class CreateTask extends LightningElement {
    taskTitle;
    dueDate;
    isTaskTitle=false;
    isDueDate=false;

    handleOnChange(event){
        const fieldName=event.target.name;

       
       if(fieldName==='taskTitle')
        {
            this.taskTitle=event.target.value;
            if(this.taskTitle!='')
            {
                this.isTaskTitle=true;
            }
            else
            {
                this.isTaskTitle=false;   
            }
        }
        else if(fieldName==='dueDate'){
            this.dueDate=event.target.value;
            if(this.dueDate!='')
            {
                this.isDueDate=true;
            }
            else
            {
                this.isDueDate=false;   
            }
        }

    }
}