// src/context/CounterContext.test.js
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { CounterProvider, useCounter } from '../../src/context/CounterContext';

test('should increment count', () => {
  const wrapper = ({ children }) => <CounterProvider>{children}</CounterProvider>;
  const { result } = renderHook(() => useCounter(), { wrapper });

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

test('should decrement count', () => {
  const wrapper = ({ children }) => <CounterProvider>{children}</CounterProvider>;
  const { result } = renderHook(() => useCounter(), { wrapper });

  act(() => {
    result.current.increment();
    result.current.increment();
    result.current.decrement();
  });

  expect(result.current.count).toBe(1);
});

