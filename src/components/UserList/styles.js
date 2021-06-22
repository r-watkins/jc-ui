import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';

const Container = styled(Paper)`
  width: ${(props) => props.theme.size.base};
  height: 100%;
  margin-block-start: 1rem;
  box-sizing: border-box;
`;

const ListHead = styled.section`
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  border-radius: ${(props) => props.theme.shape.borderRadius}px
    ${(props) => props.theme.shape.borderRadius}px 0 0;
  border-block-start: 2px solid ${(props) => props.theme.palette.secondary.dark};
  background-color: ${(props) => props.theme.palette.primary.light};
`;

export { Container, ListHead };
