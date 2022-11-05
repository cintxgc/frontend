import TradeViewChart from 'react-crypto-chart';
import './style.css';
import React from 'react';

export default function App() {
  return (
    <div className="parent">
      <h3>ETH/USDT</h3>
      <TradeViewChart
        containerStyle={{
          minHeight: '300px',
          minWidth: '400px',
          marginBottom: '30px',
        }}
        pair="ETHUSDT"
      />
    </div>
  );
}