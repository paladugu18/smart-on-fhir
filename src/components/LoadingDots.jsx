import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component is used to display loading dots on the screen 
 * when there are any async calls in progress.
 */
class LoadingDots extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      frame: 1,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        frame: this.state.frame + 1,
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let dots = this.state.frame % (this.props.dots + 1);
    let text = '';
    while (dots > 0) {
      text += '.';
      dots -= 1;
    }
    return <span>{text}&nbsp;</span>;
  }
}

LoadingDots.defaultProps = {
  interval: 300,
  dots: 3,
};

LoadingDots.propTypes = {
  interval: PropTypes.number,
  dots: PropTypes.number,
};

export default LoadingDots;
