import React from "react";
//import response from "../../response";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import useGoogleSearch from "../../useGoogleSearch";
import Search from "../../components/Search";
import "./Search.css";
function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  
  //const data = response;
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
          <Search hideButtons/>
          <div className="searchPageOptions">
            <div className="searchPageOptionsLeft">
              <p className="active">
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
              <p><svg focusable="false" viewBox="0 0 24 24"  width="15px"
                height="15px"><path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path></svg>Images</p>
              
              <p><svg focusable="false" viewBox="0 0 24 24" width="15px"
                  height="15px"><path d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"></path></svg>Videos</p>
              <p>Maps</p>
              <p>More</p>
            </div>
            <div className="searchPageOptionsRight">
              <p>Settings</p>
              <p>Tools</p>
            </div>
          </div>
        </div>
      </div>
      {term && ( 
        <div className="searchPageResults">
          <div className="seachPageResultCount">
            <small>About {data?.searchInformation.formattedTotalResults} results in ({data?.searchInformation.formattedSearchTime} seconds)</small>

            {data?.items.map(item => (
              <div className="searchPageResult">
                <a href={item.link}>
                  {item.pagemap?.cse_image?.
                    length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                    <img src={item.pagemap?.
                      cse_image?.length > 0 && item.pagemap?.
                  cse_image[0]?.src} alt="" className='searchResultImage'/>
                    )}
                  {item.displayLink}</a>
                <div className="searchPageResultTitle">
                  <h3><a href={item.link}> {item.title}</a></h3>
                </div>
                <div className="searchPageResultSnippet">
                  <p>{item.snippet}</p>
               </div>
              </div>
            ))}
          </div>

        </div>
      )}
      
    </div>
  );
}

export default SearchPage;
