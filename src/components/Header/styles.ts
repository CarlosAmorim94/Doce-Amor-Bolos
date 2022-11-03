import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;

  li {
    margin-right: 1rem;
  }
`;

export const BuyButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: none;
  font-size: 1rem;
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
