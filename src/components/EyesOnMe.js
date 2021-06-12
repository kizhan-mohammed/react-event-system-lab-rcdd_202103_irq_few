// Code EyesOnMe Component Here

<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React, { Component } from 'react'

>>>>>>> fd76ec766cb0426cdbe07919c3fe11148063a038

export default class EyesOnMe extends Component {
  render() {
    return <button
      onFocus={()=>console.log("Good!")}
      onBlur={() => console.log("Hey! Eyes on me!")}
      ></button>
  }
}
