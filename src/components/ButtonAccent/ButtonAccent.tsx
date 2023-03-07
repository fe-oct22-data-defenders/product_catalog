import React, { FC } from 'react';

type Props = {
  classNameButton: string,
  text: string,
  onClick: () => void,
};

export const ButtonAccent: FC<Props> = ({
  classNameButton,
  text,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={classNameButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
