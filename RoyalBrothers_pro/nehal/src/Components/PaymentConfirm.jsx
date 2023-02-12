export default function PaymentConfirm() {
  return (
    <>
      <div className="MainBody">
        <div className="Payment">
          <div className="compeletPaymentsM">
            <p className="choose_payment_method">Choose Payment Method</p>
          </div>
          <div className="box1">
            <div className="P11">
              <p className="All_paymments_Details">Credit card</p>
            </div>
            <div className="P1">
              <p className="All_paymments_Details">Debit Card</p>
            </div>
            <div className="P1">
              <p className="All_paymments_Details">Net Banking</p>
            </div>
            <div className="P1">
              <p className="All_paymments_Details">UPI Payment</p>
            </div>
            <div className="P1">
              <img
                className="img1"
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRJPInGFuN9rOG7CXrt8mGt2Exy-MluRMHDf7artJ&s"}
                alt="paytm"
              />
            </div>
          </div>
          <div className="box22">
            <p className="Otp1">Enter Your OTP</p>
            <div>
              <input className="inp5" placeholder="Enter Your OTP" />
            </div>
            <button className="btn2">PAY</button>
            <div className="note3">
              <p>Dont share your otp with anyone.</p>
            </div>
          </div>
        </div>

        <div className="Summary">
          <div className="compeletPaymentsM1">
            <p className="choose_payment_method">Summary</p>
            <p className="total_amaount_payable">Total payable amount</p>
            <p className="stotal_amaount_payable1">&#8377; 416</p>
            <img
              className="loading"
              src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRJPInGFuN9rOG7CXrt8mGt2Exy-MluRMHDf7artJ&s"}
              alt="Time Loading"
            />
          </div>
        </div>
      </div>

      <div className="note">
        <p className="noteTxt">
          <b>Note:</b> Making Payments on RoyalBrothers.com is 100% safe. Your
          transaction is processed through a secure https internet connection
          based on secure socket layer technology. Your payment details are only
          used for processing the transaction and never stored.
        </p>
      </div>
    </>
  );
}
