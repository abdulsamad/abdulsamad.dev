import React from 'react';

import Skills from './Skills';
import List from './List';
import ListItem from './ListItem';
import Container from '../utils/Container';

const Index = () => {
  return (
    <Skills id='skills'>
      <Container>
        <h1>Skills</h1>

        <List>
          <ListItem>HTML5</ListItem>
          <ListItem>CSS3</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Git</ListItem>
          <ListItem>Sass</ListItem>
          <ListItem>Material UI</ListItem>
          <ListItem>Bootstrap</ListItem>
          <ListItem>Materialize CSS</ListItem>
          <ListItem>Styled-Components</ListItem>
        </List>
      </Container>
    </Skills>
  );
};

export default Index;