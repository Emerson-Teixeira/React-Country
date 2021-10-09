import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: 90%;
  max-width: 1440px;
  margin-top: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column nowrap;
  transition: 0.2s;
  @media (max-width: 768px) {
    margin-top: 25px;
  }
`;
export const FlexContainerFullWidth = styled.div`
  width: 100%;
  transition: 0.2s;
`;
export const BoxShadow = styled.div`
  box-shadow: 10px 10px 56px -27px rgba(0, 0, 0, 0.75);
  width: 125px;
  transition: 0.2s;
`;
export const BackButton = styled.button`
  box-shadow: 0px 0px 10px -0px rgba(0, 0, 0, 1);
  height: 33px;
  width: 125px;
  background-color: ${({ theme }) => theme.buttons};
  border: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 10px;
  }
  border-radius: 6px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
    transform: translateY(-2px);
    cursor: pointer;
  }
`;
export const FlexContainerFullWidthSpaceBetween = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: row wrap;
  width: 100%;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
  }
`;
export const Flag = styled.img`
  box-shadow: 0px 10px 27px 0px rgba(0, 0, 0, 0.5);
  transition: 0.2s;
`;
export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  min-width: 300px;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;
export const CountryName = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
    font-size: 24px;
  }
`;
export const DescriptionContainer = styled.div`
  width: 45%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  min-width: 300px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
export const DescriptionData = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
  font-size: 16px;
  span {
    margin-bottom: 10px;
  }
  margin-right: 50px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const FlexRowContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  text-align: center;
  font-size: 64px;
  height: 45vh;
  width: 96%;
  margin: 20px;
  svg {
    margin: 20px;
    color: ${({ theme }) => theme.text};
  }
`;
export const BorderCountry = styled.div`
  box-shadow: 0px 0px 10px -0px rgba(0, 0, 0, 1);
  height: 33px;
  width: 125px;
  background-color: ${({ theme }) => theme.buttons};
  color: ${({ theme }) => theme.text};
  border: none;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 0;
  border-radius: 6px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  padding: 5px;
  font-size: 14px;
  :hover {
    opacity: 0.8;
    transform: translateY(-2px);
    cursor: pointer;
  }
`;

export const DivFlag = styled.div`
  width: 45%;
  max-width: 800px;
  min-width: 300px;
  height: fit-content;
  margin-right: 50px;
  transition: 0.2s;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const BorderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
`;
