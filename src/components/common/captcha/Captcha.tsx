import React, { useEffect, useState } from 'react';
import './captcha.css';

interface CaptchaProps {
  onCaptchaChange: (generatedCaptcha: string) => void;
  onInputChange: (input: string) => void;
}

const Captcha: React.FC<CaptchaProps> = ({ onCaptchaChange, onInputChange }) => {
  const [captcha, setCaptcha] = useState('');
  const [isClient, setIsClient] = useState(false); // <-- add this flag

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  useEffect(() => {
    setIsClient(true); // Ensures code below only runs client-side
  }, []);

  useEffect(() => {
    if (isClient) {
      const newCaptcha = generateCaptcha();
      setCaptcha(newCaptcha);
      onCaptchaChange(newCaptcha);
    }
  }, [isClient]);

  const refreshCaptcha = () => {
    const newCaptcha = generateCaptcha();
    setCaptcha(newCaptcha);
    onCaptchaChange(newCaptcha);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="captcha-container">
      <div className="row">
        <div className="col-md-4">
          <div className="captcha-box">
            <div id='captchaBox'>{isClient ? captcha : ''}</div>
          </div>
        </div>
        <div className="col-md-8 captcha-input">
          <input
            type="text"
            className="form-control"
            placeholder="Enter CAPTCHA"
            name="captchaInput"
            onChange={handleInputChange}
          />
          <span className="captcha-refresh p-2" onClick={refreshCaptcha} style={{ cursor: 'pointer' }}>
            &#x21ba;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Captcha;
