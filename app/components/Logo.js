import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

  constructor(props) {
    super(props);

    this.state = {
      latestTweet: ''
    };
  }

  componentDidMount() {
    axios.get(`/twitter`).then(res => {
      const latestTweet = res.data[0].text;
      this.setState({latestTweet: latestTweet});
    });
  }

  render() {

    return(
      <Wrapper>
        <Title>{this.props.title}</Title>
        <Subtitle>{this.props.subtitle}</Subtitle>
      </Wrapper>
    )
  }
}
