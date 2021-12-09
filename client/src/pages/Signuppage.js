import React from "react";
import NavBar from "../components/NavBar";
//import "../styles/login.css";
import "../styles/signup.css"

class Signuppage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
          checked: '',
        };

    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
        });
      }
     
      handleSubmit = (event) => {
         event.preventDefault();
        fetch('/api/users', {
     
        })
      
        .then(res => res.json()).then(data => console.log(data))
         //this.props.history.push("/Listing has been posted!");
          }
   
  render() {
    
    return (
    
      <div>
        <NavBar isLoggedIn={false} whiteBg={false} />
        <div className="body">
          <div className="signup-body">
  
        <div id="signup-part">
          <h2 id="login-signup-heading">Sign Up</h2>
          <form className="signup" 
            onSubmit={this.handleSubmit}
            // action="http://localhost:3001/"
            // method="post"
          >
     
             <div className="checkboxes">
              <div className="check">
                <input
                  type="checkbox"
                  // id="1"
                  name="box"
                  // className="boxes"
                  onclick="selectOnlyThis(this)"
                  value={this.state.checked}
                onChange={this.handleInputChange}
                />
                <label htmlFor="student-box">  Homeowner</label>
              </div>
              {/* <br /> */}
              <div className="check">
                <input
                  type="checkbox"
                  // id="2"
                  className="boxes"
                  onclick="onlyOne(this.id)"
                  value={this.state.checked}
                onChange={this.handleInputChange}
                />
               <label htmlFor="instructor-box">  Tenant</label>
              </div>
            </div>




            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={this.state.firstName}
                onChange={this.handleInputChange}
                required
            />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" placeholder="Enter Last Name" name="lastName" 
              value={this.state.lastName}
              onChange={this.handleInputChange}
              required />
          
            <br />
            <label htmlFor="email">Email Address</label>
            {/* <br /> */}
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={this.state.email}
                onChange={this.handleInputChange}
              required
            />
            <br />
            <label htmlFor="password">Password</label>
            {/* <br /> */}
            <input
              type="password"
              placeholder="Enter New Password"
              id="student-password"
              name="password"
              value={this.state.password}
                onChange={this.handleInputChange}
              required
            />
            <br />
            <input type="submit" value="Sign Up" />
          </form>
        </div>
        </div>
        </div>
      </div>
    );
  }
}
export default Signuppage;
