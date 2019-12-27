import React from 'react';
import { motion } from "framer-motion"
import MediumAnimatedButton from './MediumAnimatedButton'
import './LoginAnimation.css';

/*
The app creates an interactive login that has a goofy character that oversees the process. 
By Etesam Ansari
*/

class LoginAnimation extends React.Component{
  _isMounted = false;
  passwordText = "";
  constructor(props){
    super(props);
    this.state = {input1: "", input2: "", buttonText: "Dark Mode", isEmpty: true, isDark: false};
    this.resetForm1 = this.resetForm1.bind(this);
    this.resetForm2 = this.resetForm2.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.makeDark = this.makeDark.bind(this);
  }
  // Changes state based off of time interval
  /*componentDidMount() {
    setInterval(() => {
      this.setState({isExpand: !this.state.isExpand});
    }, 1000);
  }*/
  componentDidMount(){
    this._isMounted = true;
  }
  componentWillUnmount(){
    this._isMounted = false;
  }
  handleChange(event) {
    if(this._isMounted && event.target.id == "input1"){
      this.setState({input1: event.target.value});
    }
    if(this._isMounted && event.target.id == "input2"){
      var value = event.target.value;
      this.setState({input2: event.target.value});
      this.displayMessage(value);
    }
  }
  resetForm1(){
    if(this._isMounted){
      this.setState({input1: ""});
    }
  }
  resetForm2(){
    if(this._isMounted){
      this.setState({input2: ""});
      this.displayMessage("");
    }
  }
  displayMessage(text){
    if(text.length > 0 && this._isMounted){
      this.setState({isEmpty: false});
    }
    if(text.length == 0 && this._isMounted){
      this.setState({isEmpty: true});
    }
  }
  makeDark(){
    if(this._isMounted){
      this.setState({isDark: !this.state.isDark});
      if(this.state.buttonText === "Dark Mode"){
        this.setState({buttonText : "Light Mode"})
      }
      else if(this.state.buttonText === "Light Mode"){
        this.setState({buttonText: "Dark Mode"});
      }
    }
  }

  render(){
    return(
      <div className = {this.state.isDark ? "darkBackground" : "lightBackground"}>
        <motion.button 
        className= {this.state.isDark ? "changeToDarkButton" : "changeToLightButton"}
        whileTap={{scale: .9}} 
        onClick={this.makeDark}>{/*width="7em" height="2em" color={this.state.isDark ? Color("#333333") : Color("#e5e5e5")} background={this.state.isDark ? Color("#e5e5e5") : Color("#333333")}}*/} 
        {this.state.buttonText}
        </motion.button>
        <motion.h1 
        className={this.state.isDark ? "darkModeTitle" : "lightModeTitle"} 
        initial={{opacity: 0, x: "-150%"}} 
        animate={{opacity: 1, x: "0%"}} 
        transition = {{duration: 2}}> 
        Interactive Login
        </motion.h1>
        <motion.h2 
        className={this.state.isDark ? "darkModeTitle" : "lightModeTitle"}
        initial={{opacity: 0, x: "-200%"}} 
        animate={{opacity: 1, x: "0%"}} 
        transition = {{duration: 2, delay: .5}}> 
        By Etesam Ansari 
        </motion.h2>
        <div className = "imageContainer">
          <motion.div className = "loginViewer" initial={{opacity: 0}} animate={{opacity: 1}} transition = {{duration: 2, delay: 2}}> 
            <motion.div className = "hand" initial={{x:"-250%", opacity: 0}} animate={this.state.isEmpty ? {opacity: 0, x:"-250%"} : {opacity: 1, x: "20%"}} transition={{duration: 1}}></motion.div>
    <motion.div className = {this.state.isEmpty ? "speechBubbleNoPassword" : "speechBubblePassword"} /> {/*initial={{opacity: 0}} animate={this.state.isEmpty ? {opacity: 0} : {opacity: 1}*/}
          </motion.div>
          
        </div>
        <span>
          <motion.input
            type="text"
            className = {this.state.isDark ? "darkRoundedInput" : "lightRoundedInput"} 
            id={"input1"}
            value = {this.state.input1} 
            onChange = {this.handleChange}
            initial={{opacity: 0}}
            animate = {{opacity: 1}} 
            transition = {{duration: 1.2, delay: 2.5}}
            />
          <MediumAnimatedButton title = 'Submit Username' input = {this.resetForm1} isDark = {this.state.isDark}/> 
        </span>
        <span>
          <motion.input 
            type="text" 
            className = {this.state.isDark ? "darkRoundedInput" : "lightRoundedInput"} 
            id={"input2"} 
            value = {this.state.input2} 
            onChange = {(event) => {
              this.handleChange(event);
            }}
            initial={{opacity: 0}} 
            animate = {{opacity: 1}} 
            transition = {{duration: 1.2, delay: 2.5}}
            /> 
          <MediumAnimatedButton title = 'Submit Password' input = {this.resetForm2} isDark = {this.state.isDark}/>
        </span>
      </div>
    );
  }
}
export default LoginAnimation;