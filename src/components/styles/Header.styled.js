import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 75px;
  background-color: ${({ theme }) => theme.header};
  -webkit-box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 1);
  display: flex;
  padding: 20px 70px;
  justify-content: space-between;
  align-items: center;
  min-width: 375px;
  transition: 0.2s;
  @media (max-width: 1444px) and (min-width: 769px) {
    padding: 20px 40px;
  }
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.text};
  font-weight: 800;
  font-size: 1.5rem;
  transition: 0.2s;
  @media (max-width: 1444px) and (min-width: 769px) {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ThemeChanger = styled.div`
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 1.2rem;
  width: 165px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.header};
  border-radius: 6px;
  transition: 0.2s;
  :hover {
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.text};
  }
  @media (max-width: 1444px) and (min-width: 769px) {
    font-size: 16px;
    width: 145px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    width: 130px;
  }
`;
