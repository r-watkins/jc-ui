// React imports
import React, { Fragment, useState } from 'react';

// Component imports
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Divider from '@material-ui/core/Divider';

// Style imports
import { Container, ListHead } from './styles';

function UserList(props) {
  const { users, handleDeleteSelect } = props;

  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    handleDeleteSelect(newChecked);
  };

  return (
    <Container>
      <ListHead>
        <p>{`${users.length} ${users.length === 1 ? 'user' : 'users'}`}</p>
      </ListHead>

      <List>
        {users.map((user, index) => {
          const labelId = `checkbox-list-label-${index}`;

          return (
            <Fragment key={user.id}>
              <ListItem
                role="listitem"
                dense
                button
                onClick={handleToggle(user.id)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(user.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>

                <ListItemText
                  id={labelId}
                  primary={`${user.username}`}
                  secondary={`${user.email}`}
                />

                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit">
                    <EditOutlinedIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>

              <Divider component="li" />
            </Fragment>
          );
        })}
      </List>
    </Container>
  );
}

export default UserList;
