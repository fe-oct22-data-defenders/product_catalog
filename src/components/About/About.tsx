import React, { FC } from 'react';
import { FullPhoneDescription } from '../../types/FullPhoneDescription';
import './About.scss';

type Props = {
  description: FullPhoneDescription[],
};

export const About: FC<Props> = ({ description }) => {
  const renderParams = description
    .map((item) => [item.title, item.text]);

  return (
    <div className="about">
      <h2 className="about__title">About</h2>

      {renderParams.map(renderParam => {
        const title = renderParam[0];
        const desc = renderParam[1] as string[];

        return (
          <div key={title as string}>
            <h3 className="about__subtitle">{title}</h3>
            {desc.map(el => (
              <p className="about__par" key={el}>
                {el}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
};
