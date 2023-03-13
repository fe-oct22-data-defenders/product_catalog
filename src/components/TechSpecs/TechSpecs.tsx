import React, { FC } from 'react';
import { FullPhone } from '../../types/FullPhone';
import { RenderParams } from '../../types/RenderParams';
import { SpecDetails } from '../SpecDetails';
import './TechSpecs.scss';

type Props = {
  product: FullPhone;
};

export const TechSpecs: FC<Props> = ({ product }) => {
  const {
    screen,
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell,
  } = product;

  const renderParams = [
    ['Screen', screen],
    ['Resolution', resolution],
    ['Processor', processor],
    ['Ram', ram],
    ['Capacity', capacity],
    ['Camera', camera],
    ['Zoom', zoom],
    ['Cell', cell],
  ] as RenderParams;

  return (
    <div className="tech-specs">
      <h2 className="tech-specs__title">Tech specs</h2>
      <SpecDetails renderParams={renderParams} />
    </div>
  );
};
