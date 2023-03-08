import React, { useEffect, useState } from 'react';
import './PurchaseModal.scss';

type Props = {
  onClose: () => void
};

interface EventListenerOptionsWithPassive extends EventListenerOptions {
  passive?: boolean;
}

export const PurchaseModal: React.FC<Props> = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(5);

  const preventScroll = (event: TouchEvent): void => {
    event.preventDefault();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(timeToRedirect => timeToRedirect - 1);
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(timer);
      window.location.replace(
        '/home',
      );
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const eventListenerOptions: EventListenerOptionsWithPassive = {
      passive: false,
    };

    document.addEventListener(
      'touchmove',
      preventScroll,
      eventListenerOptions,
    );

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener(
        'touchmove',
        preventScroll,
        eventListenerOptions,
      );
    };
  }, []);

  return (
    <section className="purchase-modal">
      <div className="purchase-modal__container">
        <h2 className="purchase-modal__title">
          Thank you for your purchase
        </h2>

        <p className="purchase-modal__redirection-timer">
          {`You will be redirected to Home page in ${timeLeft}`}
        </p>

        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label, react/button-has-type */}
        <button
          onClick={onClose}
          aria-label="buttonFavourite"
          className="purchase-modal__close-button"
        />
      </div>
    </section>
  );
};
