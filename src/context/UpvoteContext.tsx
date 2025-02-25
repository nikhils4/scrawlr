import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { defaultListData } from "../data/DefaultListData";

interface Vote {
  id: number;
  selected: boolean;
}

interface UpvoteList {
  id: number;
  votes: Vote[];
}

interface UpvoteContextType {
  lists: UpvoteList[];
  toggleVote: (listId: number) => void;
  addVote: (listId: number) => void;
}

const UpvoteContext = createContext<UpvoteContextType | undefined>(undefined);

interface UpvoteProviderProps {
  children: ReactNode;
}

export const useUpvote = (): UpvoteContextType => {
  const context = useContext(UpvoteContext);
  if (!context) {
    throw new Error("useUpvote must be used within an UpvoteProvider");
  }
  return context;
};

export const UpvoteProvider: React.FC<UpvoteProviderProps> = ({ children }) => {
  const [lists, setLists] = useState<UpvoteList[]>(() => {
    const saved = localStorage.getItem("upvoteLists");
    return saved ? JSON.parse(saved) : defaultListData;
  });

  useEffect(() => {
    localStorage.setItem("upvoteLists", JSON.stringify(lists));
  }, [lists]);

  const toggleVote = (listId: number): void => {
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === listId) {
          const currentState = list.votes[0]?.selected ?? false;
          return {
            ...list,
            votes: list.votes.map((vote) => ({
              ...vote,
              selected: !currentState,
            })),
          };
        }
        return list;
      })
    );
  };

  const addVote = (listId: number): void => {
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === listId) {
          const currentState = list.votes[0]?.selected ?? false;
          return {
            ...list,
            votes: [
              ...list.votes,
              {
                id: Math.max(...list.votes.map((v) => v.id)) + 1,
                selected: currentState,
              },
            ],
          };
        }
        return list;
      })
    );
  };

  return (
    <UpvoteContext.Provider value={{ lists, toggleVote, addVote }}>
      {children}
    </UpvoteContext.Provider>
  );
};
