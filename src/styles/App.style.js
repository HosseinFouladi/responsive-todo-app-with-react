import styled from "styled-components";
import { colors, device } from "./Variables.style";

export const Container=styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0;
 margin-top:-30px;
`

export const TodoBox=styled.main` 
 display: flex;
 flex-direction: column;
 overflow: hidden;
 @media ${device.mobileS} {
    width: 320px;
    height: 300px;
  }
  @media ${device.mobileM} {
    width: 400px;
    height: 350px;
  }
  @media ${device.tablet} {
    width: 600px;
    height: 450px;
  }
  @media ${device.laptop} {
    width:700px;
    height:550px;
  }
  border-radius: 10px;
  border: 2px solid ${colors.lightGray};
`
export const AppTitleBox=styled.div`
 width: 100%;
 flex:1;
 background-color: ${colors.blue};
 color: ${colors.white};
 display: flex;
 justify-content: center;
 align-items: center;
 border-top-left-radius:10px;
  border-top-right-radius:10px;
  border-bottom: 1px solid ${colors.lightGray};
`
export const AppTitle=styled.h1`
 font-weight: 600;
 @media ${device.mobileS} {
    font-size: 14px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
  border-top-left-radius:10px;
  border-top-right-radius:10px;
`
export const MainBody=styled.div` 
 flex:5;
 width: 100%;
 border-bottom-left-radius:10px;
 border-bottom-right-radius:10px;
 display: flex;
 flex-direction: column;
`
export const BodyTitleBox=styled.div` 
 @media ${device.mobileS} {
    height: 20px;
  }
  @media ${device.mobileM} {
    height: 30px;
  }
  @media ${device.tablet} {
    height: 40px;
  }
  @media ${device.laptop} {
 
    height: 50px;
  }
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BodyTitle=styled.h2`
  @media ${device.mobileS} {
    font-size: 12px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  color:${colors.purple};
`

export const AddListContainer=styled.div` 
 @media ${device.mobileS} {
    height: 80px;
  }
  @media ${device.mobileM} {
    height: 100px;
  }
  @media ${device.tablet} {
    height: 120px;
  }
  @media ${device.laptop} {
    height: 150px;
  }
 width: 100%;
 display: flex;
 flex-direction: column;
 border-bottom: 1px solid ${colors.lightGray};

`
export const ListContainer=styled.div`
 width: 100%;
 flex:1;
 border-bottom-left-radius:10px;
 border-bottom-right-radius:10px;
 overflow: auto;
`
export const AddListTitleBox=styled.div` 
 flex: 1;
 width: 100%;
 display: flex;
 justify-content: end;
 align-items: center;
 padding-right: 10px;
 @media ${device.mobileS} {
    font-size: 12px;
  }
  @media ${device.mobileM} {
    font-size: 14px;
  }
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
  color: ${colors.purple};
`
export const AddListTitle=styled.p`
 padding-right: 10px;
`
export const AddListForm=styled.div` 
 flex: 2;
 width: 100%;
 display: flex;
 justify-content: space-around;
 align-items: center;
 direction: rtl;
`
export const InputBox=styled.div` 
 flex:${(props)=>props.big?2:1};
 display: flex;
 justify-content: center;
 align-items: center;
`
export const Input=styled.input` 
  @media ${device.mobileS} {
    width: 80px;
    height: 10px;
    border-radius: 4px;
    padding: 3px 6px;
    font-size: 8px;
  }
  @media ${device.mobileM} {
    width: 100px;
    height: 12px;
    border-radius: 4px;
    padding: 3px 7px;
    font-size: 10px;
  }
  @media ${device.tablet} {
    width: 150px;
    height: 15px;
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 12px;
  }
  @media ${device.laptop} {
    width: 200px;
    height: 20px;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
  }
  direction: rtl;
  &:focus{
    outline: none;
  }
  border: 1px solid ${colors.gray};
  background-color: #F0FFF0;
`
export const Button=styled.button` 
 background-color: ${(props)=>props.color};
 color: ${colors.white};
 @media ${device.mobileS} {
    border-radius: 4px;
    padding: 4px 8px;
    font-size: 10px;
    font-weight: 500;
    margin-right: ${(props)=>props.mr==='little'?'-10px':props.mr==='big'?'-20px':props.mr==='list'?'-50px':'0'};
  }
  @media ${device.mobileM} {
    border-radius: 4px;
    padding: 4px 10px;
    font-size: 12px;
    font-weight: 500;
    margin-right: ${(props)=>props.mr==='little'?'-15px':props.mr==='big'?'-30px':props.mr==='list'?'-60px':'0'};
  }
  @media ${device.tablet} {
    border-radius: 5px;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 500;
    margin-right: ${(props)=>props.mr==='little'?'-40px':props.mr==='big'?'-80px':props.mr==='list'?'-80px':'0'};
  }
  @media ${device.laptop} {
    border-radius: 7px;
    padding: 8px 15px;
    font-size: 16px;
    font-weight: 600;
    margin-right: ${(props)=>props.mr==='little'?'-50px':props.mr==='big'?'-100px':props.mr==='list'?'-90px':'0'};
  }
  border: none;
  cursor: pointer;
`