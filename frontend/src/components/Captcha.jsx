import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Captcha() {
  const recaptchaRef = React.createRef();

  const [isHuman, setIsHuman] = React.useState(false);

  const onChange = (value) => {
    setIsHuman(true);
    console.log("Captcha value:", value);
  };


  return (
    <div className="captcha">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Captcha</h1>
            {isHuman ? <div> if this was a flag: Flag{" {"}congrats_you_bypass_captcha{"}"} </div> :
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lcx1VMfAAAAAL6Af_ocFM_4gAjWNgqb2Nd-CJ8N"
                onChange={onChange}
              /> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Captcha;
