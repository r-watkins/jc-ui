import styled, { css } from 'styled-components';

import Snackbar from '@material-ui/core/Snackbar';

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

const Alert = styled(Snackbar)`
  & .MuiSnackbarContent-root {
    ${(props) =>
      props.severity === 'error' &&
      css`
        background-color: ${(props) => props.theme.palette.error.light};
      `};

    ${(props) =>
      props.severity === 'success' &&
      css`
        background-color: ${(props) => props.theme.palette.success.light};
      `};
  }
`;

export { Container, Alert };
