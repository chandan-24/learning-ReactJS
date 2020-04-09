const React = require('react');

const CommentDetails = (props) => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src={props.commentDetail.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.commentDetail.author}
        </a>
        <div className="metadata">
          <span className="date">
            {props.commentDetail.time}
          </span>
        </div>
        <div className="text">
          {props.commentDetail.comment}
        </div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

module.exports = CommentDetails;
