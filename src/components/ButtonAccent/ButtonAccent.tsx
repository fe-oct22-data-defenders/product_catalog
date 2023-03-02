import React, { FC } from 'react';

type Props = {
  classNameButton: string;
  text: string;
};

export const ButtonAccent: FC<Props> = ({ classNameButton, text }) => {
  return (
    <button type="button" className={classNameButton}>
      {text}
    </button>
  );
};
