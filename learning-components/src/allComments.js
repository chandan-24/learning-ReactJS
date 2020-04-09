const React = require('react');

const AllComments = (props) =>{
  return(
    <div className="ui comments">
      <h3 className="ui dividing header">
        Comments
      </h3>
      {props.children}
    </div>
  );
}

module.exports = AllComments;