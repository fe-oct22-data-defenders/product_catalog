import React from 'react';

type Props = {
  text: string;
};

export const Card: React.FC<Props> = ({ text }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '506px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
      className=""
    >
      Product card
      {text}
    </div>
  );
};
