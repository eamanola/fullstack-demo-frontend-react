import React from 'react';
import PropTypes from 'prop-types';

const NoteListItem = ({
  text,
  isPublic,
  onToggleVisibility,
  onRemove,
}) => (
  <div>
    <span>{ text }</span>
    <button
      type="button"
      onClick={onToggleVisibility}
    >
      make &nbsp;
      {isPublic ? 'private' : 'public'}
    </button>
    <button type="button" onClick={onRemove}>remove</button>
  </div>
);

NoteListItem.propTypes = {
  text: PropTypes.string.isRequired,
  isPublic: PropTypes.bool.isRequired,
  onToggleVisibility: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default NoteListItem;
