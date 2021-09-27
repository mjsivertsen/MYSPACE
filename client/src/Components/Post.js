import React, {useState, useContext} from "react";
import { Card, Feed } from "semantic-ui-react";
import MyBabyButton from "./MyBabyButton";
import PostForm from "./PostForm";
import styled from "styled-components";
import { AuthContext } from '../providers/AuthProvider'
import LikesReducer from "./LikesReducer";



const Post = ({p, deletePost, updatePosts, user, x}) => {
  const [showForm, setShowForm] = useState(false);

  const showButtons =()=>{
    if(x){
      return(
          <Feed.Content>  
            <Feed.Summary>

              <MyBabyButton onClick = {() => setShowForm(!showForm)}> 
              {!showForm ? "Edit" : "Cancel"} 
              </MyBabyButton>
              
              {showForm && <PostForm id={p.id} showForm={showForm} setShowForm={setShowForm} updatePosts={updatePosts} text={p.text} image={p.image} mood={p.mood}/>}
              
              <MyBabyButton onClick= {()=>deletePost(p.id)}>Delete</MyBabyButton>

            </Feed.Summary>
          </Feed.Content>
      )
    }
  }

return (
  <Card>
    <Card.Content>
      <Feed> 
        <Feed.Event>
            <img className="ui avatar image" src={user.image} />
          <Feed.Content>
            <Feed.Summary>
            {user.name}
            </Feed.Summary>
          </Feed.Content>
          {showButtons()}
        </Feed.Event>
      <Card.Content>
        <h6>{p.text}</h6>
        <Postimg src={p.image}/>
      </Card.Content>
    </Feed>
  </Card.Content>
   <Card.Meta>{`${user.name} is feeling ${p.mood}`}</Card.Meta>
   <Card.Content extra>
      <LikesReducer user={user} p={p}/>
      {/* {postLikes(p)} */}
  </Card.Content>
</Card>
)}


export default Post

const Postimg = styled.img`
max-width: 100%;
max-height: 100%;
`