import { v4 as uuid } from 'uuid';
class ListUtils{
    constructor(list){
        this.list=list
    }

    addList(listTitle,ListExplain){
        const newList={
            id:uuid(),
            title:listTitle,
            explanation:ListExplain,
            tasks:[]
        }
         this.list.push(newList);
         return this.list;
    }

    editList(id,newList){
        return this.list.map(item=>{
            if(item.id===id){
                return {...item,title:newList.title,explanation:newList.explanation}
            }
            return item;
        })
    }

    deleteList(id){
        const filteredList= this.list.filter(item=>item.id!==id)
        return filteredList;
    }
    addTaskToList(listId,tasks){

       return this.list.map(item=>{
            if(item.id===listId){
                return {...item,tasks:tasks}
            }
            return item;
        })
    }

    deleteTaskFromList(tasks,listId){

        return this.list.map(item=>{
             if(item.id===listId){
                 return {...item,tasks:tasks}
             }
             return item;
         })
     }
}

export default ListUtils;