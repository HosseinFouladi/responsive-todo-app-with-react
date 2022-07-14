import styled from "styled-components";
import { colors, device } from "./Variables.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ListBody=styled.div` 
 width: 98%;
 height: 100%;
// overflow: auto;
 border-radius:10px;
 display: flex;
 flex-direction: column;
 border:2px solid ${colors.lightGray};
 margin-left:1%;
 margin-bottom:5px;
`

export const TaskContainer=styled.div`
 width: 100%;

 flex: 1;
 display: flex;
 flex-direction: column;
`
export const AddTaskBox=styled.div` 
 display: flex;
 justify-content: space-around;
 align-items: center;
 direction: rtl;
 width: 100%;

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



`
export const ListNameBox=styled.div`
 @media ${device.mobileS} {
    height: 15px;
  }
  @media ${device.mobileM} {
    height: 20px;
  }
  @media ${device.tablet} {
    height: 30px;
  }
  @media ${device.laptop} {
 
    height:40px;
  }
  display: flex;
  justify-content: end;
  align-items: center;

`
export const ListInfo=styled.p` 
 color:${colors.purple};
 padding-right: 10px;
 @media ${device.mobileS} {
    font-size: 10px;
  }
  @media ${device.mobileM} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 14px;;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
`
export const TableContainer=styled.div` 
 flex:1;
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: start;
`
export const Table=styled.table` 
@media ${device.mobileS} {
    max-height: 80px;
    margin-top: 10px;
  }
  @media ${device.mobileM} {
    max-height: 100px;
    margin-top: 12px;
  }
  @media ${device.tablet} {
    max-height: 120px;
    margin-top: 15px;
  }
  @media ${device.laptop} {
    max-height: 150px;
    margin-top: 20px;
  }
 width: 95%;
 
 //height: fit-content;
 display: flex;
 flex-direction: column;
 overflow: auto;
 border-radius: 5px;
 border:1px solid ${colors.gray};
`
export const TableHead=styled.div` 
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 background-color: #0099FF;
 border-bottom: 1px solid ${colors.gray};
 border-top-left-radius:5px;
 @media ${device.mobileS} {
    height: 15px;
    font-size: 12px;
    min-height: 15px;
    font-weight: 500;
  }
  @media ${device.mobileM} {
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    min-height: 20px;
  }
  @media ${device.tablet} {
    height: 25px;
    font-size: 16px;
    font-weight: 500;
    min-height: 25px;
  }
  @media ${device.laptop} {
    height: 30px;
    font-size: 18px;
    min-height: 30px;
    font-weight: 500;
  }
 
  color:${colors.white};
`
export const TableRow=styled.div`
 width: 100%;
 @media ${device.mobileS} {
  height:15px;
    font-size: 10px;
    min-height: 15px;
  }
  @media ${device.mobileM} {
    height:17px;
    font-size: 12px;
    min-height: 17px;
  }
  @media ${device.tablet} {
    height:20px;
    font-size: 14px;
    min-height: 20px;
  }
  @media ${device.laptop} {
    height:25px;
    font-size: 16px;
    min-height: 25px;
  }
  border-bottom: 1px solid ${colors.gray};
  color:${colors.purple};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TD=styled.div` 
  flex: ${(props)=>props.isTitle?2:1};
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${colors.gray};
  height: 100%;
  //overflow-x: auto;
`
export const Icon=styled(FontAwesomeIcon)`
  color:${(props)=>props.color};
  cursor: pointer;
  @media ${device.mobileS} {
    font-size: 10px;
  }
  @media ${device.mobileM} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
`

export const DoTask=styled.h2` 
 @media ${device.mobileS} {
    font-size: 10px;
  }
  @media ${device.mobileM} {
    font-size: 12px;
  }
  @media ${device.tablet} {
    font-size: 14px;
  }
  @media ${device.laptop} {
    font-size: 16px;
  }
  color:blue;
  cursor: pointer;

`