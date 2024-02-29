import React from 'react'
import "./PostCard.css"
import { useNavigate } from 'react-router-dom';


interface PostCardProps {
    title: string;
    postText: string;
    date: string;
    postID: string;
}

const PostCard: React.FC<PostCardProps> = ({title, postText, date, postID}) => {


  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${postID}`);
  };
const fdate = new Date(date);

const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(fdate);
    return (
        <div className="post-card" onClick={handleClick}> 
        <h2>{title}</h2>
        <p>{postText}</p>
        <p>{formattedDate}</p>
        </div>
    )
}

export default PostCard