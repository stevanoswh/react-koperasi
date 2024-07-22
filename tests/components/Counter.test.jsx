import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Counter from "../../src/components/Counter";

describe('Counter', () => {
    it('renders correctly', () => {
        render(<Counter/>)
        expect(screen.getByText('Count: 0')).toBeInTheDocument()
    })
})