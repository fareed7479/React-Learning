import CommentItem from './Components/CommonItem'
import './App.css'
import {useState} from 'react';


const commentsList = [
  {
    uniqueNo: 1,
    name: 'Rahul',
    commentText: 'The ending is so good!',
  },
  {
    uniqueNo: 2,
    name: 'Floyd Miles',
    commentText: 'The attention to detail in the animation is amazing!',
  },
  {
    uniqueNo: 3,
    name: 'Jacob',
    commentText: 'The storytelling is fantastic, simple yet impactful!',
  },
  {
    uniqueNo: 4,
    name: 'Devon Lane',
    commentText: 'The soundtrack perfectly complements the animation!',
  },
]

const App = () => {

  //Use State Hoook for Search Input.
  const[searchInput, setSearchInput] = useState('');

  //On Change Event Handler for Search Input
  const onChangeSearchInput = (e) => {
    //In this SetterFunction we use the nextValue , 
    //Since we are not using the previous state.it doesn't depened on the previous state value.
    setSearchInput(e.target.value);
    // console.log(e.target.value);
  }


  return (
    <div className="main-container">
      <div className="header-container">
        <div className="header-elements-container">
          <img
            src="https://assets.ccbp.in/frontend/hooks/nxt-player-logo-img.png"
            alt="nxt player logo"
            className="logo"
          />
        </div>
      </div>
      <div className="video-player-container">
        <video
          src="https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/static-website/big_buck_bunny_crujfx.mp4"
          controls
          width="100%"
          className="video-player"
        />
        <h1 className="video-title">Big Buck Bunny</h1>
        <p className="video-stats">8,100,195 views - May 29, 2008</p>
        <hr className="horizontal-line" />
      </div>
      <div className="comments-container">
        <div className="comments-header">
          <p className="comments-title">Comments</p>
          <input type="search" 
                 placeholder="Search Comment" 
                 className="search-input" 
                 onChange={onChangeSearchInput}
                 value = {searchInput}
          />
        </div>
        <ul className="comments-list">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.uniqueNo}
              commentDetails={eachComment}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
