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
  font-size: 36px;
  font-weight: 500;
  margin: 0;

  @media only screen and (min-width: 481px!default;) {
    font-size: 72px;
  }
`;

const Employment = styled.div`
  text-align: center;
`;

const Role = styled.a`
  color: #b58900;

  @media only screen and (min-width: 481px!default;) {
    display: block;
  }
`;

const Company = styled.a`
  color: #cb4b16;

  @media only screen and (min-width: 481px!default;) {
    display: block;
  }
`;

const At = styled.span`
  color: #839496;
  display: none;

  @media only screen and (min-width: 481px!default;) {
    display: inline-block;
  }
`;

/* Component Logic */
export default class Logo extends React.PureComponent {

  render() {
    if (!this.props.title || !this.props.title) {
      return null;
    }

    return (
      <Wrapper>
        <Name><a href={this.props.personalLink} target="_blank"> {this.props.title}</a></Name>
        <Employment>
          <Role href={this.props.positionLink} target="_blank">{this.props.position}</Role> <At>@</At> <Company href={this.props.companyLink} target="_blank">{this.props.company}</Company>
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
  positionLink: React.PropTypes.string.isRequired,
  personalLink: React.PropTypes.string.isRequired,
};
