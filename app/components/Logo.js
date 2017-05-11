import React from 'react';
import styled from 'styled-components';

/* Style Components */
const Wrapper = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const Name = styled.h1`
  font-size: 60px;
  font-weight: 500;
  margin: 0;
`;

const Employment = styled.div`
  text-align: center;
`;

const Position = styled.p`
  display: inline-block;
`;

const Company = styled.a`
`;

/* Component Logic */
export default class Logo extends React.PureComponent {

  render() {
    if (!this.props.title || !this.props.title) {
      return null;
    }

    return (
      <Wrapper>
        <Name>{this.props.title}</Name>
        <Employment>
          <Position>{this.props.position}</Position> <span>@</span> <Company href={this.props.companyLink} target="_blank">{this.props.company}</Company>
        </Employment>
      </Wrapper>
    );
  }
}


/* Validation */
Logo.propTypes = {
  title: React.PropTypes.string.isRequired,
  position: React.PropTypes.string.isRequired,
  company: React.PropTypes.string.isRequired,
  companyLink: React.PropTypes.string.isRequired,
};
