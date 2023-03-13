import React, { FC } from 'react';
import { RenderParams } from '../../types/RenderParams';
import './SpecDetails.scss';

type Props = {
  renderParams: RenderParams,
};

export const SpecDetails: FC<Props> = ({ renderParams }) => {
  return (
    <div className="tech-specs__details">
      {renderParams.map(renderParam => {
        const title = renderParam[0];
        const value = renderParam[1];

        return (
          <div
            className="spec-details"
            key={title as string}
          >
            <p
              className="spec-details__title"
            >
              {title}
            </p>
            <p
              className="spec-details__value"
            >
              {Array.isArray(value)
                ? value.join(', ')
                : value}
            </p>
          </div>
        );
      })}
    </div>
  );
};
