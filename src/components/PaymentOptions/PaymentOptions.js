import React from 'react';
import classes from './PaymentOptions.module.scss';
import { ReactComponent as Master } from '../../assets/logo/payment/master.svg';
import { ReactComponent as Paypal } from '../../assets/logo/payment/paypal.svg';
import { ReactComponent as Visa } from '../../assets/logo/payment/visa.svg';
import { ReactComponent as ApplePay } from '../../assets/logo/payment/apple-pay.svg';
import { ReactComponent as AmericanExpress } from '../../assets/logo/payment/american-express.svg';

const PaymentOptions = () => {
  const paymentOptions = [
    <Master />,
    <Paypal />,
    <Visa />,
    <ApplePay />,
    <AmericanExpress />,
  ];
  return (
    <div className={classes.wrap}>
      <h2>We Accept</h2>
      <div className={classes.paymentOptions}>
        {paymentOptions.map((option, i) => (
          <div key={i} className={classes.paymentOption}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentOptions;
