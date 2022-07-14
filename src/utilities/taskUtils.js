import { v4 as uuid } from 'uuid';
class TaskUtils{
    constructor(taskList){
        this.taskList=taskList;
    }

    addToTask(task){

        const id=uuid();
        const newItem={
            id,
            task,
            isDone:false
        }
         this.taskList.push(newItem);
         return this.taskList;
    }

    editTask(id,taskTitle){

        const newList=this.taskList.map(item=>{
            if(item.id===id){
                return {...item,task:taskTitle}
            }
            return item;
        })

        return newList;
    }

    deleteTask(id){
       const newTasks=this.taskList.filter(item=>item.id!==id)
       return newTasks
    }
    doTask(id){
       const  newTasks= this.taskList.map(item=>{
            if(item.id===id){
                return{...item,isDone:!item.isDone}
            }
            return item;
        })

        return newTasks;
    }

}

export default TaskUtils;