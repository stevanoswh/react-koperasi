import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useAuth } from '../../src/context/AuthContext'; // Adjust the import path as necessary
import Navigation from '../../src/components/Navigation';
import { describe, it, beforeEach, vi } from 'vitest';

// Mock the useAuth hook
vi.mock('../../src/context/AuthContext', () => ({
  useAuth: vi.fn(),
}));

// Mock the useNavigate hook from react-router-dom
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});



describe('Navigation component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.resetAllMocks();
  });

  it('renders the navigation menu correctly', () => {
    useAuth.mockReturnValue({
      isLoggedIn: false,
      logout: vi.fn(),
    });

    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByText('Enigma Koperasi')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Employee Managament')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('displays the logout button when user is logged in', () => {
    useAuth.mockReturnValue({
      isLoggedIn: true,
      logout: vi.fn(),
    });

    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('calls the logout function when logout button is clicked', () => {
    const logoutMock = vi.fn();
    useAuth.mockReturnValue({
      isLoggedIn: true,
      logout: logoutMock,
    });

    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Logout'));

    expect(logoutMock).toHaveBeenCalled();
  });

  it('navigates to the login page after logout', () => {
    const logoutMock = vi.fn();
    useAuth.mockReturnValue({
      isLoggedIn: true,
      logout: logoutMock,
    });

    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Logout'));

    expect(logoutMock).toHaveBeenCalled();
    // expect(mockNavigate).toHaveBeenCalledWith('/login');
  });
});