import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import MuiList from '@material-ui/core/List';

const Container = styled(Paper)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: ${(props) => props.theme.size.base};
  height: 100%;
  margin-block-start: 1rem;
  box-sizing: border-box;

  @media only screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
  }
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

const List = styled(MuiList)`
  height: 100%;
  overflow-y: auto;
`;

export { Container, ListHead, List };
