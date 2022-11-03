import styled from "styled-components";

export const Container = styled.main`
  background-image: url("/img/bgpink.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Content = styled.article`
  width: 80%;
  margin: 1rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};

  //Glassmorphism
  background: ${({ theme }) => theme.colors.glassmorphism};
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.colors.shadow};
`;
