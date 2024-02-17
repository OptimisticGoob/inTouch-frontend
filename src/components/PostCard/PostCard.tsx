import React from 'react'
import "./PostCard.css"


interface PostCardProps {
    title: string;
    postText: string;
    date: string;
}

const PostCard: React.FC<PostCardProps> = ({title, postText, date}) => {

const fdate = new Date(date);

const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(fdate);
    return (
        <div className="post-card"> 
        <h2>{title}</h2>
        <p>{postText}</p>
        <p>{formattedDate}</p>
        </div>
    )
}

export default PostCard