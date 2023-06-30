import React from 'react';

const ConfirmationPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 h-screen flex flex-col items-center justify-center">
      <div className="text-4xl flex text-white font-bold text-center mb-8">
        <h1 className="text-red-500">T</h1>
        <h1 className="text-orange-500">h</h1>
        <h1 className="text-yellow-500">a</h1>
        <h1 className="text-green-500">n</h1>
        <h1 className="text-yellow-500">k</h1>
        <h1 className="text-indigo-500">&nbsp;</h1>
        <h1 className="text-indigo-500">&nbsp;</h1>

        <h1 className="text-purple-500">Y</h1>
        <h1 className="text-red-500">o</h1>
        <h1 className="text-orange-500">u</h1>
        <h1 className="text-yellow-500">!</h1>
      </div>

      <p className="text-lg text-white text-center mb-8">
        Your order has been placed successfully.
        <br />
        An email with details about your order has been sent to you.
      </p>

      <div className="text-white text-center">
        <p className="mb-2">For further information, please contact:</p>
        <p className="text-2xl">
  <span className="text-red-500 font-bold">S</span>
  <span className="text-orange-500 font-bold">h</span>
  <span className="text-yellow-500 font-bold">o</span>
  <span className="text-green-500 font-bold">p</span>
  <span className="text-orange-500 font-bold">P</span>
  <span className="text-indigo-500 font-bold">_</span>
  <span className="text-purple-500 font-bold">i</span>
  <span className="text-red-500 font-bold">T</span>
</p>

        <a href="mailto:shoppittippohs@gmail.com">
  <p className="text-2xl font-italic underline text-white-500 cursor-pointer">shoppittippohs@gmail.com</p>
</a>


      </div>
    </div>
  );
}

export default ConfirmationPage;
