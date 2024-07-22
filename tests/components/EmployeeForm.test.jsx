import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import EmployeeForm from '../../src/components/employee/EmployeeForm';

const mockStore = configureStore([]);

describe('EmployeeForm', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      status: null,
      error: null,
    });
  });

  it('renders the form fields correctly', () => {
    render(
      <Provider store={store}>
        <EmployeeForm onSave={() => {}} />
      </Provider>
    );

    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
    expect(screen.getByLabelText('Hire Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Position')).toBeInTheDocument();
    expect(screen.getByLabelText('Salary')).toBeInTheDocument();
    expect(screen.getByLabelText('Profile Image')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('updates the form fields when employee prop is provided', () => {
    const employee = {
      fullName: 'John Doe',
      email: 'john@example.com',
      phoneNumber: '1234567890',
      hireDate: '2023-01-01',
      position: 'MANAGER',
      salary: '5000',
    };
  
    render(
      <Provider store={store}>
        <EmployeeForm employee={employee} onSave={() => {}} />
      </Provider>
    );
  
    expect(screen.getByLabelText('Full Name')).toHaveValue('John Doe');
    expect(screen.getByLabelText('Email')).toHaveValue('john@example.com');
    expect(screen.getByLabelText('Phone Number')).toHaveValue('1234567890');
    expect(screen.getByLabelText('Hire Date')).toHaveValue('2023-01-01');
    expect(screen.getByLabelText('Position')).toHaveValue('MANAGER');
    expect(screen.getByLabelText('Salary')).toHaveValue(5000);
  });

  it('calls onSave when the form is submitted', () => {
    const onSaveMock = vi.fn();

    render(
      <Provider store={store}>
        <EmployeeForm onSave={onSaveMock} />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText('Full Name'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Phone Number'), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByLabelText('Hire Date'), {
      target: { value: '2023-01-01' },
    });
    fireEvent.change(screen.getByLabelText('Position'), {
      target: { value: 'Manager' },
    });
    fireEvent.change(screen.getByLabelText('Salary'), {
      target: { value: '5000' },
    });

    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

    expect(onSaveMock).toHaveBeenCalledTimes(1);
    // Add assertions for the data passed to onSave
  });

  // Add more test cases for error handling, form reset, etc.
});