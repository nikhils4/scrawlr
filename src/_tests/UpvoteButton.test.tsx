import { render, fireEvent, screen } from "@testing-library/react";
import { UpvoteProvider } from "../context/UpvoteContext";
import App from "../App";
import '@testing-library/jest-dom';

describe("UpvoteButton", () => {
  test("adds selected class when clicked", () => {
    render(
      <UpvoteProvider>
        <App />
      </UpvoteProvider>
    );

    const upvoteButton = screen.getAllByTestId("upvote-button")[0];
    
    fireEvent.click(upvoteButton);
    
    expect(upvoteButton).toHaveClass("selected");
  });
});
