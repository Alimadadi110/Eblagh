import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [nationalId, setNationalId] = useState('');
  const [smsCode, setSmsCode] = useState('');
  const [error, setError] = useState('');
  const [showSmsInput, setShowSmsInput] = useState(false);
  const navigate = useNavigate();

  const handleNationalIdChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and limit to 10 digits
    if (/^\d*$/.test(value) && value.length <= 10) {
      setNationalId(value);
      setError('');
    }
  };

  const handleSmsCodeChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setSmsCode(value);
      setError('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!showSmsInput) {
        if (nationalId.length !== 10) {
          setError('کد ملی باید ۱۰ رقم باشد');
          return;
        }
        setShowSmsInput(true);
        // TODO: Add your SMS sending logic here
        console.log('Sending SMS for National ID:', nationalId);
      } else {
        if (smsCode.length !== 6) {
          setError('کد تایید باید ۶ رقم باشد');
          return;
        }
        // TODO: Add your authentication logic here
        console.log('Verifying SMS Code:', smsCode);
      }
    }
  };

  return (
    <div className='bg-gradient-to-t from-[#0F2027] via-[#203A43] to-[#2C5364]'>
      <div className="h-[100px]  pt-4">
        <img
          src="https://www.mimt.gov.ir/fa/../data/0/sis_theme_engine/placeHolders/mimt1400/all/headerLogo.png"
          alt=""
          className="h-16 mx-auto"
        />
      </div>
      <div className=" flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8" style={{ height: 'calc(100vh - 100px)' }}>
        <div className="max-w-md w-full space-y-8">
          <div
            className={`transition-all duration-500 ${
              showSmsInput ? "opacity-0 -translate-y-4" : "opacity-100"
            }`}
          >
            <h2 className="mt-6 w-fit mx-auto text-3xl font-extrabold text-white hover:-translate-y-1.5  ease-in-out  duration-300 transition-all hover:text-shadow-lg Sols">
              ورود کاربران
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <div
              className={`transition-all duration-500 ${
                showSmsInput ? "-translate-y-8" : ""
              }`}
            >
              <div className="rounded-md shadow-sm -space-y-px ">
                <div>
                  <label htmlFor="national-id" className="sr-only ">
                    کد ملی
                  </label>
                  <input
                    id="national-id"
                    name="national-id"
                    type="text"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-100 focus:border-gray-100 focus:z-10 sm:text-sm "
                    placeholder="کد ملی"
                    value={nationalId}
                    onChange={handleNationalIdChange}
                    onKeyDown={handleKeyPress}
                    dir="ltr"
                  />
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-500 ${
                showSmsInput
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 h-0"
              }`}
            >
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="sms-code" className="sr-only">
                    کد تایید
                  </label>
                  <input
                    id="sms-code"
                    name="sms-code"
                    type="text"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-100 focus:border-gray-100 focus:z-10 sm:text-sm"
                    placeholder="کد تایید پیامک"
                    value={smsCode}
                    onChange={handleSmsCodeChange}
                    onKeyDown={handleKeyPress}
                    dir="ltr"
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;