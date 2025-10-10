import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ListDisplay from './ListDisplay';

describe("Test list display", () => {
  test("Displays the correct number of list elements", () => {
    const { rerender } = render(<ListDisplay sourceList={[]} />);
    for (let i = 1; i < 20; i++) {
      const contents = Array(i).fill("placeholder");
      rerender(<ListDisplay sourceList={contents}/>);
      expect(screen.getAllByRole('listitem')).toHaveLength(i);
    }
  })

  test("Displays empty lists correctly", () => {
    render(<ListDisplay sourceList={[]} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  })

  test("Displays list items correctly", () => {
    const contents = ["fizzbuzz", 1, 2, "fizz", 4, "buzz"];
    render(<ListDisplay sourceList={contents} />)
    const listItems = screen.queryAllByRole("listitem");
    for (let i = 0; i < contents.length; i++) {
      expect(listItems[i].innerHTML).toEqual(contents[i].toString())
    }
  })
})