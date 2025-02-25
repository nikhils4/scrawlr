import React from "react";
import { useUpvote } from "../../context/UpvoteContext";
import UpvoteButton from "../UpvoteButton/UpvoteButton";
import AddUpvoteButton from "../AddUpvoteButton/AddUpvoteButton";
import "./upvote-list.styles.css";

interface UpvoteListProps {
  listId: number;
}

const UpvoteList: React.FC<UpvoteListProps> = ({ listId }) => {
  const { lists, toggleVote, addVote } = useUpvote();
  const list = lists.find((l) => l.id === listId);

  if (!list) return null;

  return (
    <div className="upvote-list-container">
      <div className="upvote-list">
        <div className="votes-container">
          {list.votes.length === 0 ? (
            <div className="no-votes-yet">No votes yet</div>
          ) : (
            list.votes.map((vote) => (
              <UpvoteButton
                key={vote.id}
                selected={vote.selected}
                onClick={() => toggleVote(listId)}
              />
            ))
          )}
        </div>
      </div>
      <AddUpvoteButton onClick={() => addVote(listId)} />
    </div>
  );
};

export default UpvoteList;
