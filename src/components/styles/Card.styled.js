import styled from "styled-components";

export const CardContainer = styled.div`
  width: 320px;
  min-width: 320px;
  height: 400px;
  margin: 10px 5px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.descriptionCard};
  -webkit-box-shadow: 10px 10px 56px -27px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 56px -27px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 56px -27px rgba(0, 0, 0, 0.75);
  transition: 0.2s;
  :hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
`;
export const CardInformation = styled.div``;
export const CountryName = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  padding-top: 15px;
  padding-left: 25px;
`;
export const CountryDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
  margin-top: 15px;
  font-weight: 300;
`;
export const Data = styled.div`
  margin-top: 5px;
  margin-left: 25px;
  strong {
    margin-right: 5px;
  }
`;

export const CustomImg = styled.img`
  border-radius: 6px;
  border-bottom-left-radius:0px;
  border-bottom-right-radius:0px;
`;
