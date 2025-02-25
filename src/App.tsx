import React from "react";
import { UpvoteProvider } from "./context/UpvoteContext";
import UpvoteList from "./components/UpvoteList/UpvoteList";
import "./app.styles.css";
import { defaultListData } from "./data/DefaultListData";

const App: React.FC = () => (
  <UpvoteProvider>
    <div className="app-container">
      <div className="lists-container">
        {defaultListData.map((list) => (
          <UpvoteList key={list.id} listId={list.id} />
        ))}
      </div>
    </div>
  </UpvoteProvider>
);

export default App;
