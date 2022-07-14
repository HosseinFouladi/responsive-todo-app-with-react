import { useEffect, useRef, useState } from "react";
import List from "../components/List";
import { AddListContainer, AddListForm,BodyTitle,BodyTitleBox, AddListTitle, AppTitle, AppTitleBox,AddListTitleBox, Button, Container, Input, ListContainer, MainBody, TodoBox, InputBox } from "../styles/App.style";
import { colors } from "../styles/Variables.style";
import ListUtils from "../utilities/ListUtils";

function App() {

  const [list,setList]=useState(JSON.parse(localStorage.getItem('list'))?JSON.parse(localStorage.getItem('list')):[])
  const [title,setTitle]=useState("");
  const [explanation,setExplanation]=useState("");
  const[isEdited,setIsEdited]=useState(false);
  const[editId,setEditId]=useState(1)
  const listRef=useRef();

  //save and read from local storage
  useEffect(()=>{
      localStorage.setItem('list',JSON.stringify(list))
  },[list])

  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('list'))
    if(data)
    setList((data))
  },[])

  const setValues=e=>{
    const{name,value}=e.target;
    name==='title'?setTitle(value):setExplanation(value);
  }

  const addList=e=>{
    e.preventDefault();
    if(title===''){
      alert('لطفا عنوان لیست را وارد نمایید!')
      return;
    }
    const newList=new ListUtils([...list]).addList(title,explanation);
    setList(newList);
    setTitle('')
    setExplanation('')
  }

  const changeEditView=(id,Ctitle,Cexplanation)=>{

    setEditId(id);
    setTitle(Ctitle);
    setExplanation(Cexplanation);
    listRef.current.focus();
  }

  const editCurrentList=()=>{
    if(title===''){
      alert('لطفا عنوان لیست را وارد نمایید!')
      return;
    }
    const lists=new ListUtils([...list]).editList(editId,{title,explanation});
    setList(lists)
    setIsEdited(false)
  }

  return (
    <Container >
      <TodoBox>
        <AppTitleBox>
          <AppTitle>لیست انجام کارها</AppTitle>
        </AppTitleBox>
        <MainBody>
          <AddListContainer>
            <AddListTitleBox>
              <AddListTitle>اضافه کردن لیست جدید</AddListTitle>
            </AddListTitleBox>
            <AddListForm>
              <InputBox>
                <Input  ref={listRef} type="text" placeholder="عنوان لیست" name="title" value={title} onChange={setValues}/>
              </InputBox>
              <InputBox>
                <Input type="text" placeholder="توضیحات لیست"name="explanation" value={explanation} onChange={setValues}/>
              </InputBox>
              <InputBox>
                {!isEdited&&<Button mr={'list'} onClick={addList} color={colors.blue}>افزودن لیست</Button>}
                {isEdited&&<Button mr={'list'}  onClick={editCurrentList} color={colors.green}>ویرایش لیست</Button>}
              </InputBox>
            </AddListForm>
          </AddListContainer>
          <BodyTitleBox>
            <BodyTitle>همه لیست ها</BodyTitle>
          </BodyTitleBox>
          <ListContainer>
          {list&&list.map((item)=>{
           return <List key={item.id}  currentList={item} setList={setList} allList={list} setIsEdited={setIsEdited} changeEditView={changeEditView}></List>
        })}
          </ListContainer>
        </MainBody>
      </TodoBox>
    </Container>
  );
}

export default App;
