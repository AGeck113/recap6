import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
  margin-bottom: 50px;
`;
export default function TitleBar() {
  return <Title>Tourio</Title>;
}
