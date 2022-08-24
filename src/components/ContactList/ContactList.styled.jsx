import styled from "styled-components";


export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-direction: column;  
  padding: 10px 10px 10px 0;
`;
export const Item = styled.li`
    background-color: #fff;
    padding: 5px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button`
    background-color: rgb(150, 250, 150);
    border: none;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
        0px 1px 3px rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    width: 90px;
    padding: 5px;
    /* margin-left: 50px; */
    &:hover, &:focus {
        background-color: lightblue;
    }
`;