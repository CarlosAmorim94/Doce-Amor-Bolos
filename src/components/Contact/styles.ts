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
  width: 80%;
  text-align: center;
`;

export const ContactArea = styled.div`
  width: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;

  justify-items: center;
  align-items: center;
`;
