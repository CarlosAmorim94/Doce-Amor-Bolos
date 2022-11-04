import styled from "styled-components";

export const Container = styled.button`
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: none;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all ease 0.5s;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }
`;
