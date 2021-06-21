import styled from 'styled-components';

import MuiToolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Toolbar = styled(MuiToolbar)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.theme.size.base};
  margin: 0 auto;
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

export { Toolbar, AddButton };
