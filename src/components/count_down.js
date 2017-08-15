import React, {Component} from 'react';


// class Counter extends Component {
//   constructor (props) {
//     super(props);
//     this.state = { counter : props.val }
//   } 

//   render() {
//     var x = this;
//     var { counter } = this.state;
    
//     setTimeout(function() {
//       if (counter > 0) {
//         x.setState({ counter: counter - 1 });
//       }
//     }, 1000);
//     return <div>counting started at {this.props.val}, currently at: {counter}</div>;
//   }
// }

const CountdownClock = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
})

export default Counter;

