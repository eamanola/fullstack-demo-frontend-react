import React from 'react';
import PropTypes from 'prop-types';

const NotesEditForm = ({
  onSubmit,
  text = null,
  isPublic = false,
  imageUrl = null,
}) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      defaultValue={text}
      name="text"
      placeholder="text"
      required
    />

    <input
      type="text"
      defaultValue={imageUrl}
      name="imageUrl"
      placeholder="image url"
    />

    <label htmlFor="isPublic">
      public:
      <input
        type="checkbox"
        defaultChecked={isPublic}
        name="isPublic"
        id="isPublic"
      />
    </label>

    <button type="submit">Save</button>
  </form>
);

NotesEditForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string,
  isPublic: PropTypes.bool,
  imageUrl: PropTypes.string,
};

export default NotesEditForm;
