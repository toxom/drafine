import React, { useState } from 'react';
import styled from 'styled-components';
import corpart1 from './assets/corpart1.svg';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic or API call here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Registration</FormTitle>
      <FormField>
        <InputLabel htmlFor="name">Name:</InputLabel>
        <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
      </FormField>
      <FormField>
        <InputLabel htmlFor="email">Email:</InputLabel>
        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
      </FormField>
      <FormField>
        <InputLabel htmlFor="password">Password:</InputLabel>
        <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
      </FormField>
      <SubmitButton type="submit">Register</SubmitButton>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex; /* Updated value */
  justify-content: flex; /* Updated value */
  background-color: transparent;
  padding: 20px;
  border-radius: 8px;
`;


const FormTitle = styled.h2`
  text-align: left;
  font-size: 24px;
  color: black;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
`;



const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  text-align: left;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid gray;
  border-radius: 4px;
  width: 100%;
  text-align: left;
  justify-content: center;

`;


const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: darkcyan;
  text-align: center;

  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
`;

export default RegistrationForm;
