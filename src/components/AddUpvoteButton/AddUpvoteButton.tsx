import React from "react";
import "./add-upvote-button.styles.css";
import plusIcon from "../../assets/icons/plus.svg";

interface AddUpvoteButtonProps {
  onClick: () => void;
}

const AddUpvoteButton: React.FC<AddUpvoteButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="add-upvote-button"
  >
    <img src={plusIcon} alt="Add Upvote" />
  </button>
);

export default AddUpvoteButton;
