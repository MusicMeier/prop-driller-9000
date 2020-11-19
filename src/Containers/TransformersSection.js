import React, { Component } from 'react';
import Transformer from '../Components/Transformer'

class TransformersSection extends Component {

  mappedTransformers = () => {
    return this.props.transformers.map(transformer => {
      return <Transformer transformer={transformer}/>
    })
  }

  render() {
    return (
      <section className = "transformers-section">
        {this.mappedTransformers()}
      </section>
    );
  }
}

export default TransformersSection;
