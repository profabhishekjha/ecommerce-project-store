import React, { useState } from "react";

interface QuantityControlProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
  quantity,
  onQuantityChange,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const decreaseQuantity = () => {
    if (currentQuantity > 1) {
      const newQuantity = currentQuantity - 1;
      setCurrentQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const increaseQuantity = () => {
    const newQuantity = currentQuantity + 1;
    setCurrentQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="quantity-control flex items-center">
      <button
        onClick={decreaseQuantity}
        className="quantity-button bg-gray-200 text-gray-600 px-2 py-1 rounded-l-md"
      >
        -
      </button>
      <span className="quantity-text bg-white border-gray-200 px-2 py-1">
        {currentQuantity}
      </span>
      <button
        onClick={increaseQuantity}
        className="quantity-button bg-gray-200 text-gray-600 px-2 py-1 rounded-r-md"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
