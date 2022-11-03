import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const Banner = styled.div`
  width: 100%;
  text-align: center;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
`;

export const Text = styled.h1`
  width: 80%;
  font-size: 3.125rem;
  font-weight: bold;
  margin-bottom: 1rem;

  span {
    font-size: 3.438rem;
    font-style: italic;
  }
`;
