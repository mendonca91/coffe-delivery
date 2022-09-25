import { FaCreditCard, FaMoneyCheck, FaMoneyBill } from 'react-icons/fa';
import { useFormContext } from 'react-hook-form';

import { PaymentMethodOptionsContainer } from "./PaymentMethodOptions.styles";
import {PaymentMethodInput} from "./PaymentMethod";


export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <FaCreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <FaMoneyCheck size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <FaMoneyBill size={16} />,
  },
};

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}

      {paymentMethodError && <span>{paymentMethodError}</span>}
    </PaymentMethodOptionsContainer>
  );
}
