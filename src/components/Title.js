import React from 'react';
import propTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div>
        <h2
          className={ `text-white 
          text-4xl border-solid border-2 border-slate-400
          text-center rounded-md w-4/6 mx-auto h-16 py-1.5 font-medium` }
        >
          { headline }
        </h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: propTypes.string,
}.isRequired;

export default Title;
