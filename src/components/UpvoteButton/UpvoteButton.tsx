import React from "react";
import "./upvote-button.styles.css";
import upArrowIcon from "../../assets/icons/up-arrow.svg";
import upArrowSelectedIcon from "../../assets/icons/up-arrow-selected.svg";

interface UpvoteButtonProps {
  selected: boolean;
  onClick: () => void;
}

const UpvoteButton: React.FC<UpvoteButtonProps> = ({ selected, onClick }) => (
  <button
    onClick={onClick}
    className={`upvote-button ${selected ? "selected" : ""}`}
    data-testid="upvote-button"
  >
    <img
      src={selected ? upArrowSelectedIcon : upArrowIcon}
      alt={selected ? "Remove upvote" : "Add upvote"}
    />
  </button>
);

export default UpvoteButton;
