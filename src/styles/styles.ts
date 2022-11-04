import styled from "styled-components";

export const Container = styled.main`
  background-image: url("/img/background/bg2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.article`
  width: 80%;
  height: fit-content;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.background};

  //Glassmorphism
  background: ${({ theme }) => theme.colors.glassmorphism};
  backdrop-filter: blur(20px);
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;
