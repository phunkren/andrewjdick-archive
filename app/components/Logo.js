import React from 'react';
import styled from 'styled-components';

/* Style Components */
const Wrapper = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 500;
  margin: 0;
`;

const Subtitle = styled.p`
  text-align: center;
`;


/* Component Logic */
export default class Logo extends React.PureComponent {

  render() {
    if (!this.props.title || !this.props.title) {
      return null;
    }

    return (
      <Wrapper>
        <Title>{this.props.title}</Title>
        <Subtitle>{this.props.subtitle}</Subtitle>
      </Wrapper>
    );
  }
}


/* Validation */
Logo.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
};
