import React from 'react';
import { Button, WrapperButton } from './FeedbackOptions.styled';

export class FeedBackOptions extends React.Component {
  render() {
    return (
      <WrapperButton>
        {this.props.options.map(el => (
          <Button
            key={crypto.randomUUID()}
            onClick={this.props.onLeaveFeedback}
            name={el.toLowerCase()}
          >
            {el}
          </Button>
        ))}
      </WrapperButton>
    );
  }
}
