import React, { useState, useImperativeHandle, forwardRef } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import AlertModal from "../../Components/AlertModal/AlertModal";

const StripeCardForm = forwardRef(({ onPaymentSuccess }, ref) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isCardComplete, setIsCardComplete] = useState(false);

  const handleChange = (event) => {
    setIsCardComplete(event.complete);
  };

  // Expose handleSubmit to parent
  useImperativeHandle(ref, () => ({
    async submitPayment() {
      if (!stripe || !elements) return { success: false };

      if (!isCardComplete) {
        AlertModal({
          icon: "warning",
          title: "Incomplete Card Details",
          text: "Please fill in all card information.",
        });
        return { success: false };
      }

      const cardElement = elements.getElement(CardElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        AlertModal({
          icon: "error",
          title: "Payment Failed",
          text: error.message,
        });
        return { success: false };
      }

      if (onPaymentSuccess && typeof onPaymentSuccess === "function") {
        onPaymentSuccess(paymentMethod.id);
      }

      return { success: true, paymentMethodId: paymentMethod.id };
    },
  }));

  return (
    <div className="p-4 border border-gray-300 rounded-md bg-gray-50 mb-6">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#1a202c",
              fontFamily: "inherit",
              "::placeholder": {
                color: "#a0aec0",
              },
            },
            invalid: {
              color: "#e53e3e",
            },
          },
        }}
        onChange={handleChange}
      />
    </div>
  );
});

export default StripeCardForm;
