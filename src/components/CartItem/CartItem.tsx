import React, {
  FC,
  memo,
  useEffect,
  useState,
} from 'react';
import { Phone } from '../../types/Phone';
import './CartItem.scss';
// import cross from '../../public/img/cartitem/cross.svg';

type Props = {
  phone: Phone
};

export const CartItem: FC<Props> = memo(({ phone }) => {
  const {
    name,
    price,
    image,
  } = phone;

  const [counter, setCounter] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (counter === 1) {
      setIsDisabled(true);
    }

    if (counter > 1) {
      setIsDisabled(false);
    }
  }, [counter]);

  return (
    <div className="cartItem">
      <div className="cartItem__container">
        <button type="button" className="cartItem__cross_button">
          {/* <img src={cross} alt="close card" /> */}
        </button>

        <img src={image} alt={name} className="cartItem__img" />

        <a href="/" className="cartItem__title">
          {`${name} (iMT9G2FS/A)`}
        </a>
      </div>

      <div className="cartItem__container">
        <div className="cartItem__counter">
          <button
            type="button"
            className="cartItem__counter__button__minus"
            onClick={() => setCounter(counter - 1)}
            disabled={isDisabled}
          >
            {/* minus */}
          </button>

          <p className="cartItem__counter__number">{counter}</p>

          <button
            type="button"
            className="cartItem__counter__button__plus"
            onClick={() => setCounter(counter + 1)}
          >
            {/* plus */}
          </button>
        </div>

        <p className="cartItem__price">{`$${counter * price}`}</p>
      </div>
    </div>
  );
});
