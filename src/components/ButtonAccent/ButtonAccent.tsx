import React, { FC } from 'react';

type Props = {
  classNameButton: string;
  text: string;
  link: string;
};

export const ButtonAccent: FC<Props> = ({ classNameButton, text, link }) => {
  return (
    <div className="button-accent">
      <a
        className={`button-accent__${classNameButton}`}
        href={link}
      >
        {text}
      </a>
    </div>
  );
};
