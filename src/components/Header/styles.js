import styled from 'styled-components';

import MuiToolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const TopBorder = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: ${(props) => props.theme.palette.secondary.dark};
`;

const Toolbar = styled(MuiToolbar)`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${(props) => props.theme.size.base};
    margin: 0 auto;
    box-sizing: border-box;

    @media only screen and (max-width: ${(props) =>
        props.theme.breakpoints.md}) {
      width: 100%;
    }

    @media only screen and (max-width: ${(props) =>
        props.theme.breakpoints.sm}) {
      flex-direction: column;
      align-items: start;
      padding-block-end: 1rem;
    }
  }
`;

const Branding = styled.section`
  display: flex;
  align-items: center;
`;

const Logo = styled.section`
  margin-inline-end: 1rem;
  color: ${(props) => props.theme.palette.secondary.main};
`;

const AddButton = styled(Button)`
  && {
    margin-inline-end: 1rem;
    background-color: ${(props) => props.theme.palette.success.light};

    &:hover {
      background-color: ${(props) => props.theme.palette.success.main};
    }
  }
`;

const DeleteButton = styled(Button)`
  && {
    background-color: ${(props) => props.theme.palette.error.light};

    &:hover {
      background-color: ${(props) => props.theme.palette.error.main};
    }
  }
`;

export { TopBorder, Toolbar, Branding, Logo, AddButton, DeleteButton };
