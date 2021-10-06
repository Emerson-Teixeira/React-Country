import styled from "styled-components";

export const FlexRowContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row wrap;
  padding: 15px 15px;
`;

export const FlexRowContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  text-align: center;
  font-size: 64px;
  height:45vh;
  width: 96%;
  margin: 20px;
  svg{
    margin: 20px;
    color: ${({ theme }) => theme.text};
  }
`;

export const FlexRowContainerSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  padding: 15px;
  width: 100%;

  @media(max-width:768px){
    padding: 0;
  }
`;
export const InputBox = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row nowrap;
  width: 360px !important;
  height: 60px;
  margin: 10px;
  background-color: ${({ theme }) => theme.input};
  border-radius: 6px;
  -webkit-box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  svg {
    width: 20%;
  }
`;
export const CustomInput = styled.input`
  color: ${({ theme }) => theme.text};
  width: 80%;
  height: 100%;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.input};
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.5;
  }
`;

export const CustomSelect = styled.select`

  color: ${({ theme }) => theme.text};
  font-size: 16px;
  background-color: ${({ theme }) => theme.select};
  border: none;
  -webkit-box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  border-radius: 6px;
  width: 200px;
  height: 60px;
  margin: 10px;
  padding:  0 10px;
  :focus {
    outline: none;
  }
`;

export const Container = styled.div`
  flex-flow: row wrap;
  padding: 15px 15px;

`;

