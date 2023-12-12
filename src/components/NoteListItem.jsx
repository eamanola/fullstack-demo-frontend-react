import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const NoteListItem = ({
  editPage,
  text,
  isPublic,
  onToggleVisibility,
  onRemove,
}) => (
  <div>
    <Link to={editPage}>{ text }</Link>
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
  editPage: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isPublic: PropTypes.bool.isRequired,
  onToggleVisibility: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default NoteListItem;
