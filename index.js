import React, { useState } from "react";
// import { Text, TextInput, View } from "react-native";
// class intake extends React.Component {

/*constructor(props){
    super(props);
    this.state = { creditScore: '' };
  }*/

export default function Buyer() {}

const Buyer = () => {
  const [credit, setCredit] = useState("");
  const [appraisal, setAppraisal] = useState("");
  const [down, setDown] = useState("");
  const [GI, setGI] = useState("");
  const [carPayment, setCarPayment] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [mortgage, setMortgage] = useState("");
  const [studentLoan, setStudentLoan] = useState("");

  handleCredit = (event) => {
    this.setCredit(event.target.value);
  };
  handleChange = (event) => {
    this.setAppraisal(event.target.value);
  };

  render();
  {
    return (
      // <React.Fragment>
      <form>
        <label htmlFor="creditScore">Credit Score</label>
        <input
          type="number"
          name="creditScore"
          value={this.state.credit}
          onChange={this.handleCredit}
        />
        <label htmlFor="appraisal">Appraisal</label>
        <input
          type="number"
          name="appraisal"
          value={this.state.appraisal}
          onChange={this.handleAppraisal}
        />
      </form>

      //  {/* <h3>Your Credit Score is: {this.state.creditScore}</h3> */}
      // </React.Fragment>
    );
  }
};
