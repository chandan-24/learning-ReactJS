const React = require('react');

const BlogFrame = (props) =>{
  return(
    <div className="ui raised very padded text container segment">
      {props.children}
    </div>
  );
}

module.exports = BlogFrame;