export interface Vote {
  id: number;
  selected: boolean;
}

export interface UpvoteList {
  id: number;
  votes: Vote[];
}

export interface UpvoteContextType {
  lists: UpvoteList[];
  toggleVote: (listId: number) => void;
  addVote: (listId: number) => void;
}
