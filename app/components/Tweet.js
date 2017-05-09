import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

/* Style Components */
const LatestTweet = styled.p`
  bottom: 0;
  left: 50%;
  margin-bottom: 20px;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  width: 66%;
`;

/* Component Logic */
export default class Tweet extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      latestTweet: '',
    };
  }

  componentDidMount() {
    axios.get('/twitter').then((res) => {
      const latestTweet = res.data[0].text;
      this.setState({ latestTweet });
    });
  }

  render() {
    return (
      <LatestTweet>{this.state.latestTweet}</LatestTweet>
    );
  }
}
