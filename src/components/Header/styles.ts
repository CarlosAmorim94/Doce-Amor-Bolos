import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  transition: all ease 0.5s;

  li {
    cursor: pointer;
    padding: 1rem;
    transition: all ease 0.5s;
    position: relative;
    list-style: none;
    font-size: 1.2rem;
    font-weight: bold;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.background};
    }

    &:after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.background};
      transition: all ease 0.5s;
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
`;
