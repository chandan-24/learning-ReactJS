const React = require('react');
const ReactDom = require('react-dom');
const faker = require('faker');
const BlogFrame = require('./blogFrame');
const BlogPost = require('./blogPost');
const AllComments = require('./allComments');
const CommentDetails = require('./commentDetails');
const AddComment = require('./addComment');
const blogPostData = require('./data/blogPostData');

console.log(blogPostData);
const App = () => {
  return(
    <BlogFrame>
      <BlogPost 
        blogPostData={blogPostData}
      />
      <AllComments>
        {
          blogPostData.comments.map((comment) => {
            return <CommentDetails commentDetail={comment} />
          })
        }
        <AddComment/>
      </AllComments>
    </BlogFrame>
  );
}

ReactDom.render(<App />, document.querySelector('#root'));