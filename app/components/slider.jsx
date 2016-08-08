import React from 'react';

class Slider extends React.Component {
  constructor(props) {
    super();

    this.state = { value: props.value };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    let {min, max, onChange} = this.props;
    let {value} = this.state;

    return (
      <div className="slider">
        <input
          className="slider-range"
          type="range"
          min={min}
          max={max}
          value={value}
          onMouseUp={onChange}
          onChange={this.handleChange.bind(this)}
        />
        <input
          className="slider-input"
          type="number"
          value={value}
          onBlur={onChange}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    )
  }
}

export default Slider
