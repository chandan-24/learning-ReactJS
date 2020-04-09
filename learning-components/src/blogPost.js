const React = require('react');
const faker = require('faker');

const BlogPost = (props) => {
  return(
    <div>
      <div className="ui header">
        {props.blogPostData.title}
      </div>
      <div className="ui comments">
        <div className="comment">
          <div className="content">
            <a href="/" className="author">
              {props.blogPostData.author}
            </a>
            <div className="metadata">
              <span className="date">
                {props.blogPostData.time}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>{faker.lorem.sentences(5)}</p>
        <p>{faker.lorem.sentences(4)}</p>
      </div>
    </div>
  );
}

module.exports = BlogPost;