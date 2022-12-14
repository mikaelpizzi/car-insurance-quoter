import React from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Form from './components/Form';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
      <Header
        title='Insurance Quoter'
      />

      <FormContainer>
        <Form /> 
      </FormContainer>
    </Container>

  );
}

export default App;
