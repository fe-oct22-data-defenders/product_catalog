import React, {
  FC,
  memo,
  useEffect,
  useState,
} from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Phone } from '../../types/Phone';
import './CartItem.scss';

type Props = {
  phone: Phone,
};

export const CartItem: FC<Props> = memo(({
  phone,
}) => {
  const {
    name,
    price,
    image,
    counter,
  } = phone;

  const [, , addToLocalStorage, removeFromLocalStorage] = useLocalStorage();

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (counter === 1) {
      setIsDisabled(true);
    }

    if (counter && counter > 1) {
      setIsDisabled(false);
    }
  }, [counter]);

  return (
    <div className="cartItem">
      <div className="cartItem__container">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="button"
          className="cartItem__cross_button"
          onClick={() => removeFromLocalStorage('phones', phone.id, true)}
        />

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
            disabled={isDisabled}
            onClick={() => removeFromLocalStorage('phones', phone.id, false)}
          >
            {/* minus */}
          </button>

          <p className="cartItem__counter__number">{counter}</p>

          <button
            type="button"
            className="cartItem__counter__button__plus"
            onClick={() => addToLocalStorage('phones', phone)}
          >
            {/* plus */}
          </button>
        </div>

        <p className="cartItem__price">{`$${counter && (counter * price)}`}</p>
      </div>
    </div>
  );
});
