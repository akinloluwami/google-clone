import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./searchBar.css";
function Search({ hideButtons = false }) {
  const [{ term }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="searchInput">
        <svg
          focusable="false"
          width="21px"
          height="21px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            fill="#9aa0a6"
          ></path>
        </svg>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <svg
          width="24px"
          height="24px"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
            fill="#4285f4"
          ></path>
          <path d="m11 18.08h2v3.92h-2z" fill="#34a853"></path>
          <path
            d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
            fill="#f4b400"
          ></path>
          <path
            d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
            fill="#ea4335"
          ></path>
        </svg>
      </div>

      {!hideButtons ? (
        <div className="searchButtons">
          <button type="submit" onClick={search}>
            Google Search
          </button>
          <button>I'm Feeling Lucky</button>
        </div>
      ) : (
        <div className="searchButtons">
          <button type="submit" onClick={search} className="buttonHidden">
            Google Search
          </button>
          <button className="buttonHidden">I'm Feeling Lucky</button>
        </div>
      )}
    </form>
  );
}

export default Search;
