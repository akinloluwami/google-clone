import React from "react";
import response from "../../response";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import useGoogleSearch from "../../useGoogleSearch";
import Search from "../../components/Search";
import "./Search.css";
function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //const { data } = useGoogleSearch(term);
  const data = response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPageHeader">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt=""
            className="searchPageLogo"
          />
        </Link>

        <div className="searchPageHeaderBody">
          <div className="searchBar">
            <input type="text" />
            <div className="bar"></div>

            <svg
              width="26px"
              height="26px"
              focusable="false"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
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
            <svg
              focusable="false"
              width="26px"
              height="26px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="icon"
            >
              <path
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                fill="#4285f4"
              ></path>
            </svg>
          </div>
          <div className="searchPageOptions">
            <p>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                width="15px"
                height="15px"
              >
                <path
                  fill="#34a853"
                  d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
                ></path>
                <path
                  fill="#ea4335"
                  d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
                ></path>
                <path
                  fill="#fbbc04"
                  d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
                ></path>
                <path
                  fill="#4285f4"
                  d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
                ></path>
              </svg>
              All
            </p>
            <p>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                width="15px"
                height="15px"
              >
                <path
                  fill="#34a853"
                  d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
                ></path>
                <path
                  fill="#ea4335"
                  d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
                ></path>
                <path
                  fill="#fbbc04"
                  d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
                ></path>
                <path
                  fill="#4285f4"
                  d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
                ></path>
              </svg>
              All
            </p>
            <p>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                width="15px"
                height="15px"
              >
                <path
                  fill="#34a853"
                  d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
                ></path>
                <path
                  fill="#ea4335"
                  d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
                ></path>
                <path
                  fill="#fbbc04"
                  d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
                ></path>
                <path
                  fill="#4285f4"
                  d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
                ></path>
              </svg>
              All
            </p>
            <p>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                width="15px"
                height="15px"
              >
                <path
                  fill="#34a853"
                  d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
                ></path>
                <path
                  fill="#ea4335"
                  d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
                ></path>
                <path
                  fill="#fbbc04"
                  d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
                ></path>
                <path
                  fill="#4285f4"
                  d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
                ></path>
              </svg>
              All
            </p>
            <p>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                width="15px"
                height="15px"
              >
                <path
                  fill="#34a853"
                  d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
                ></path>
                <path
                  fill="#ea4335"
                  d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
                ></path>
                <path
                  fill="#fbbc04"
                  d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
                ></path>
                <path
                  fill="#4285f4"
                  d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
                ></path>
              </svg>
              All
            </p>
            <p>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                width="15px"
                height="15px"
              >
                <path
                  fill="#34a853"
                  d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
                ></path>
                <path
                  fill="#ea4335"
                  d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
                ></path>
                <path
                  fill="#fbbc04"
                  d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
                ></path>
                <path
                  fill="#4285f4"
                  d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
                ></path>
              </svg>
              All
            </p>
          </div>
        </div>
      </div>
      <div className="searchPageResults"></div>
    </div>
  );
}

export default SearchPage;
