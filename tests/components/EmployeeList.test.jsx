import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import EmployeeList from '../../src/components/employee/EmployeeList';
import { vi } from 'vitest';

const mockStore = configureStore([thunk]);

describe('EmployeeList', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      employee: {
        employees: [
          { id: 1, fullName: 'John Doe', email: 'john@example.com', phoneNumber: '1234567890', position: 'Manager', status: true },
          { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', phoneNumber: '9876543210', position: 'Employee', status: false },
        ],
        paging: { totalPages: 1 },
      },
    });
  });

  it('renders the employee list correctly', () => {
    render(
      <Provider store={store}>
        <EmployeeList onEdit={() => {}} />
      </Provider>
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
    expect(screen.getByText('Manager')).toBeInTheDocument();
    expect(screen.getByText('Inactive')).toBeInTheDocument();
  });

  it('calls onEdit when edit button is clicked', () => {
    const onEditMock = vi.fn();

    render(
      <Provider store={store}>
        <EmployeeList onEdit={onEditMock} />
      </Provider>
    );

    fireEvent.click(screen.getAllByText('Edit')[0]);

    expect(onEditMock).toHaveBeenCalledTimes(1);
    expect(onEditMock).toHaveBeenCalledWith(store.getState().employee.employees[0]);
  });

  it('dispatches deleteEmployee when delete button is clicked', () => {
    render(
      <Provider store={store}>
        <EmployeeList onEdit={() => {}} />
      </Provider>
    );

    fireEvent.click(screen.getAllByText('Delete')[0]);

    expect(store.getActions()).toContainEqual(expect.objectContaining({
      type: 'employee/deleteEmployee/pending',
    }));
  });

  // Add more test cases for pagination
});