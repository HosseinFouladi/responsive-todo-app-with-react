import { useRef, useState } from "react";
import { InputBox,Input, Button } from "../styles/App.style";
import { AddTaskBox, DoTask, Icon, ListBody, ListInfo, ListNameBox, Table, TableContainer, TableHead, TableRow, TaskContainer, TD } from "../styles/List.style";
import { colors } from "../styles/Variables.style";
import ListUtils from "../utilities/ListUtils";
import TaskUtils from "../utilities/taskUtils";
import {faCheck, faEdit, faTrashAlt}from'@fortawesome/free-solid-svg-icons'

const List=({currentList,setList,allList,changeEditView,setIsEdited})=>{

    const[taskTitle,setTaskTitle]=useState('')
    const[isTaskEdited,setIsTaskEdited]=useState(false);
    const[taskEditId,setTaskEditId]=useState(1);
    const taskRef=useRef();

    const setTask=e=>{
        setTaskTitle(e.target.value);
    }

    const addTask=e=>{
        if(taskTitle===''){
          alert('لطفا عنوان تسک را وارد نمایید!');
          return;
        }
        const newTask=new TaskUtils([...currentList.tasks]).addToTask(taskTitle);
        const newList=new ListUtils([...allList]).addTaskToList(currentList.id,newTask)
        setList(newList)
        setTaskTitle('');
    }

    const deleteList=(id)=>{
        const lists=new ListUtils(allList).deleteList(id);
        setList(lists);
      }

      const editList=id=>{
        setIsEdited(true);
        changeEditView(id,currentList.title,currentList.explanation);
      }

      const editTask=()=>{

        if(taskTitle===''){
          alert('لطفا عنوان تسک را وارد نمایید!');
          return;
        }
            const tasks=new TaskUtils([...currentList.tasks]).editTask(taskEditId,taskTitle);
            const newList=new ListUtils([...allList]).addTaskToList(currentList.id,tasks)
            setList(newList)
            setIsTaskEdited(false)
      }

      const changeEditTaskView=(id,taskTitle)=>{
        setTaskTitle(taskTitle);
        setTaskEditId(id);
        setIsTaskEdited(true);
        taskRef.current.focus();
      }

      const deleteCurrentTask=(taskId)=>{
        const tasks=new TaskUtils([...currentList.tasks]).deleteTask(taskId);
        const newList=new ListUtils([...allList]).deleteTaskFromList(tasks,currentList.id);
        setList(newList)
      }

      const triggerSituation=(taskId)=>{
        const tasks=new TaskUtils([...currentList.tasks]).doTask(taskId);
        const newList=new ListUtils([...allList]).addTaskToList(currentList.id,tasks)
        setList(newList)
      }

    return(
        <ListBody>
          <TaskContainer>
            <ListNameBox>
              <ListInfo>{currentList.explanation?`(${currentList.explanation})`:''}:{currentList.title}</ListInfo>
            </ListNameBox>
            <AddTaskBox>
              <InputBox big={true}>
                <Input ref={taskRef} type="text" placeholder="تسک جدید:"name="task" value={taskTitle} onChange={setTask}/>
              </InputBox>
              <InputBox>
                {!isTaskEdited && <Button color={colors.blue} onClick={addTask}>افزودن تسک</Button>}
                {isTaskEdited&&<Button color={colors.green} onClick={editTask}>ویرایش تسک</Button>}
              </InputBox>
              <InputBox>
                <Button mr={'little'} color={colors.blue} onClick={()=>deleteList(currentList.id)}>حذف لیست</Button>
              </InputBox>
              <InputBox>
                <Button mr={'big'} color={colors.green} onClick={()=>editList(currentList.id)}>ویرایش لیست</Button>
              </InputBox>
            </AddTaskBox>
            <TableContainer>
              {currentList.tasks.length>0 &&
                <Table>
                  <TableHead>
                    <TD>ردیف</TD>
                    <TD isTitle={true}>عنوان تسک</TD>
                    <TD>وضعیت</TD>
                    <TD>ویرایش</TD>
                    <TD>حذف</TD>
                  </TableHead>
                  {currentList.tasks.map((item,index)=>{
                    return <TableRow>
                       <TD>#{index+1}</TD>
                       <TD isTitle={true}>{item.task}</TD>
                       <TD>{item.isDone?<Icon onClick={()=>triggerSituation(item.id)} icon={faCheck} color={colors.green}/>: <DoTask onClick={()=>triggerSituation(item.id)}>انجام دادن</DoTask>}</TD>
                       <TD><Icon onClick={()=>changeEditTaskView(item.id,item.task)} icon={faEdit} color={colors.green}/></TD>
                       <TD><Icon onClick={()=>deleteCurrentTask(item.id)}color='red' icon={faTrashAlt}/></TD>
                    </TableRow>
                  })}
                </Table>}
            </TableContainer>
          </TaskContainer>
        </ListBody>
    )
}
export default List;
