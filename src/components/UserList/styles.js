import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';

const Container = styled(Paper)`
  width: ${(props) => props.theme.size.base};
  height: 100%;
  margin-block-start: 1rem;
`;

export { Container };
