import React, { FC, SyntheticEvent } from 'react';

type Props = {
  classNameButton: string,
  text: string,
  onClick: (event: SyntheticEvent) => void,
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
