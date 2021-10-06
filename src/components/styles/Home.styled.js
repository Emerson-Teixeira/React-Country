import styled from "styled-components";

export const FlexRowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  padding: 15px 15px;
`;
export const FlexRowContainerSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
  padding: 15px 60px;
`;
export const InputBox = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row nowrap;
  width: 360px;
  height: 50px;
  background-color: ${({ theme }) => theme.input};
  border-radius: 6px;
  -webkit-box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  svg {
    width: 20%;
  }
  margin-bottom: 10px;
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
  padding: 5px 0;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.select};
  border: none;
  -webkit-box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  border-radius: 6px;
  width: 200px;
  height: 50px !important;
  text-indent: 5px;
  line-height: 1.1em;
  :focus {
    outline: none;
  }
  option {
    margin: 5px;
    padding: 5px;
  }
`;
