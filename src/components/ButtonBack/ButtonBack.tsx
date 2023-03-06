import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ButtonBack = () => {
  const navigate = useNavigate();

  return (
    <div className="button-back">
      <div className="button-back__icon" />

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="
    button-back__button"
      >
        Back
      </button>
    </div>
  );
};
