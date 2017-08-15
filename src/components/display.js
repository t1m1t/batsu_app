import React, { Component } from 'react';
import Counter from './count_down';


class Display extends Component {
  render () {
    return <div>
      <Counter val={20} />
    </div>
    ;
  }
}

export default Display;