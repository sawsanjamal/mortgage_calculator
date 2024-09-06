import { useState } from "react";
import "./index.css";

function Card() {
  const [purchasePrice, setPurchasePrice] = useState("0");
  const [downPayment, setDownPayment] = useState("0");
  const [loanTerm, setLoanTerm] = useState("1");
  const [interestRate, setInterestRate] = useState("0");
  const [loanAmount, setLoanAmount] = useState("0");
  const [mortgageAmount, setMortgageAmount] = useState("0");

  function CalculateMortgage() {
    const rate = parseFloat(interestRate / (100 * 12));
    const paymentMonths = parseFloat(loanTerm * 12);
    const loanAmount = purchasePrice - downPayment;
    const mortgageAmount =
      loanAmount *
      ((rate * (1 + rate) ** paymentMonths) /
        ((1 + rate) ** paymentMonths - 1));
    setLoanAmount(loanAmount);
    setMortgageAmount(mortgageAmount.toFixed(3));
  }
  return (
    <>
      <div className="card">
        <h1 className="title">Mortgage calculator</h1>
        <div className="inputCard">
          <div className="rangeAndLabel">
            <label htmlFor="Purchase">
              Purchase price: $
              {Intl.NumberFormat("en-US").format(parseInt(purchasePrice))}
            </label>
            <input
              className="input"
              type="range"
              max="10000000"
              onChange={(e) => setPurchasePrice(e.target.value)}
              placeholder="Purchase Price"
              id="Purchase"
            />
          </div>
          <div className="rangeAndLabel">
            <label htmlFor="DownPayment">
              Down payment: ${Intl.NumberFormat("en-US").format(downPayment)}
            </label>
            <input
              className="input"
              type="range"
              max="1000000"
              onChange={(e) => setDownPayment(e.target.value)}
              placeholder="DownPayment"
              id="DownPayment"
            />
          </div>
          <div className="rangeAndLabel">
            {loanTerm >= 2 || loanTerm == 0 ? (
              <label htmlFor="LoanTerm">
                {" "}
                Repayment time: {loanTerm} years
              </label>
            ) : (
              <label htmlFor="LoanTerm"> Repayment time: {loanTerm} year</label>
            )}
            <input
              className="input"
              type="range"
              max="100"
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder="Loan Term"
              id="LoanTerm"
            />
          </div>
        </div>
        <div className="bottomCard">
          <div className="rangeAndLabel">
            <label htmlFor="Rate"> Interest rate: {interestRate}%</label>
            <input
              className="input"
              type="range"
              max="100"
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Interest Rate"
              id="Rate"
            />
          </div>
          <div className="paymentInfo">
            <p className="title2"> Loan amount:</p>
            <p className="amount">
              $ {Intl.NumberFormat("en-US").format(parseInt(loanAmount))}
            </p>
          </div>
          <div className="paymentInfo">
            <p className="title2">Estimated pr. month: </p>
            <p className="amount">
              $ {Intl.NumberFormat("en-US").format(parseInt(mortgageAmount))}
            </p>
          </div>
        </div>
        <button className="button" onClick={CalculateMortgage}>
          Get a mortgage quote
        </button>
      </div>
    </>
  );
}

export default Card;
