const React = require('react');

const AddComment = (props) =>{
  return(
    <form class="ui reply form">
      <div class="field">
        <textarea></textarea>
      </div>
      <div class="ui primary submit button">
        Add Comment
      </div>
    </form>
  );
}

module.exports = AddComment;