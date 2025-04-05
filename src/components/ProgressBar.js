import React from "react";

const ProgressBar = ({ cart, threshold }) => {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const progress = Math.min((subtotal / threshold) * 100, 100);
  const remaining = threshold - subtotal;

  return (
    <div className="progress-container">
      {subtotal >= threshold ? (
        <p className="success-message">🎉 Congratulations! You get a free gift! 🎁</p>
      ) : (
        <p>Spend ${remaining} more to get a free gift!</p>
      )}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
