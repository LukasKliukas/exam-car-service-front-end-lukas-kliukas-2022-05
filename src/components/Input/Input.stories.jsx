import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const Text = () => (
  <Input
    label='Add a new task'
    name='input'
    type='text'
    placeholder='Text...'
    handleChange={() => {
      console.log('labas');
    }}
  />
);
