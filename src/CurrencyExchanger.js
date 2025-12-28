import React, { useState } from 'react';

const CurrencyExchanger = () => {
  const [sendAmount, setSendAmount] = useState('1000');
  const [sendCurrency, setSendCurrency] = useState('USD');
  const [receiveCurrency, setReceiveCurrency] = useState('MXN');
  const [paymentMethod, setPaymentMethod] = useState('Debit card');
  const [deliveryMethod, setDeliveryMethod] = useState('Bank');

  const exchangeRate = 18.072300;
  const receiveAmount = (parseFloat(sendAmount) * exchangeRate).toLocaleString('en-US', { maximumFractionDigits: 1 });
  const fee = 0;
  const totalToPay = `${parseFloat(sendAmount).toLocaleString('en-US')} USD`;

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 mt-8">
      {/* Promo Banner */}
      <div className="bg-green-50 rounded-xl p-4 mb-6 flex items-start" style={{ backgroundColor: '#f0f9f4' }}>
        <div className="rounded-full p-1.5 mr-3 mt-0.5" style={{ backgroundColor: '#013220' }}>
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900 mb-1">Promo rate on your first transfer!</div>
          <div className="text-sm text-gray-700">
            1 USD = <span className="line-through text-gray-400">17.67</span> <span className="font-bold" style={{ color: '#013220' }}>18.072300</span> MXN
          </div>
        </div>
      </div>

      {/* Send Section */}
      <div className="mb-6">
        <label className="block text-sm text-gray-500 mb-3">You send</label>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl mr-3">🇺🇸</span>
            <span className="text-lg font-medium text-gray-900">USD</span>
          </div>
          <div className="text-right">
            <input
              type="text"
              value={sendAmount}
              onChange={(e) => setSendAmount(e.target.value.replace(/[^0-9]/g, ''))}
              className="bg-transparent text-right text-3xl font-bold outline-none text-gray-900 w-32"
            />
          </div>
        </div>
      </div>

      {/* Receive Section */}
      <div className="mb-8">
        <label className="block text-sm text-gray-500 mb-3">They receive</label>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl mr-3">🇲🇽</span>
            <div className="flex items-center">
              <span className="text-lg font-medium text-gray-900 mr-2">MXN</span>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">{receiveAmount}</div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="mb-6">
        <label className="block text-sm text-gray-500 mb-3">Payment method</label>
        <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
          <span className="text-gray-900 font-medium">{paymentMethod}</span>
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Delivery Method */}
      <div className="mb-8">
        <label className="block text-sm text-gray-500 mb-3">Delivery method</label>
        <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3">
          <span className="text-gray-900 font-medium">{deliveryMethod}</span>
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      {/* Fee and Total */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Fee</span>
          <div className="flex items-center">
            <span className="line-through mr-2" style={{ color: '#013220' }}>1.99 USD</span>
            <span className="font-medium text-gray-900">{fee} USD transfer fee</span>
            <svg className="w-4 h-4 text-gray-400 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900">Total to pay</span>
          <span className="text-lg font-semibold text-gray-900">{totalToPay}</span>
        </div>
      </div>

      {/* Get Started Button */}
      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-colors text-lg">
        Get started
      </button>
    </div>
  );
};

export default CurrencyExchanger;