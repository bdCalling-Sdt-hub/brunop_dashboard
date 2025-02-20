import { Button } from "antd";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useVerifyOtpMutation } from "../../redux/Api/userApi";

const Otp = () => {
  const [verifyOtp] = useVerifyOtpMutation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [err, setErr] = useState("");
  // const dispatch = useDispatch()
  const handleResendCode = () => {};
  const handleVerifyOtp = () => {
    const data = {
      code: otp,
      email: localStorage.getItem("email"),
    };
    verifyOtp(data)
      .unwrap()
      .then((payload) => {
        toast.success("Verify successfully!");
        navigate("/auth/update-password");
      })
      .catch((error) => toast.error(error?.data?.message));

    // console.log(data);
  };

  return (
    <div
      style={{
        width: "100%",
        background: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{ width: "630px", background: "white", padding: "90px 57px" }}
      >
        <h1
          style={{
            fontSize: "32px",
            color: "#6A6D7C",
            marginBottom: "13px",
            textAlign: "center",
          }}
        >
          Check your email
        </h1>
        <p
          style={{ width: "380px", color: "#B8B8B8", margin: "0 auto 0 auto" }}
        >
          We sent a reset link to{" "}
          <span style={{ color: "#545454" }}> contact@dscode...com </span>
          enter 6 digit code that mentioned in the email
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
          }}
          className="py-7"
        >
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              height: "44px",
              width: "44px",
              borderRadius: "8px",
              marginRight: "16px",
              fontSize: "20px",
              border: "1px solid #A9A9A9",
              color: "#2B2A2A",
              outline: "none",
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <Button
          onClick={handleVerifyOtp}
          block
          htmlType="submit"
          style={{
            height: "52px",
            fontWeight: "400px",
            fontSize: "18px",
            color: "white",
            background: "black",
            marginTop: "30px",
            border: "none",
            outline: "none",
            marginBottom: "20px",
          }}
        >
          Verify
        </Button>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Didn’t receive code?
          <p
            onClick={handleResendCode}
            style={{
              color: "black",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Resend{" "}
          </p>
        </p>
      </div>
    </div>
  );
};

export default Otp;
