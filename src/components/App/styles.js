import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 0 1rem;
  background-color: ${(props) => props.theme.palette.background.default};
`;

export { Container };
