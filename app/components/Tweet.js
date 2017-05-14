import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

/* Style Components */
const LatestTweet = styled.section`
  bottom: 0;
  left: 50%;
  margin-bottom: 20px;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  width: 66%;
  z-index: 10;
`;

const TweetText = styled.a`
  color: #eee8d5;

  &:hover {
    text-decoration: underline;
  }
`;

const TweetLink = styled.a`
  color: #268bd2;
  text-decoration: underline;
  font-weight: 500;
  padding-left: 10px;
`;

const TweetHandle = styled.p`
  color: #eee8d5;
  text-decoration: none;
`;

/* Component Logic */
export default class Tweet extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      tweet: {
        id: '',
        handle: '',
        text: '',
        url: '',
      },
    };
  }

  componentDidMount() {
    axios.get('https://andrewjdick-api.herokuapp.com/twitter').then((res) => {
      const latestTweet = res.data[0];
      const tweetData = (latestTweet.retweeted) ? latestTweet.retweeted_status : latestTweet;
      const hasUrl = (tweetData.text.includes(' https://t.co/')) ? tweetData.text.split(' https://t.co/') : false;

      this.setState({
        tweet: {
          id: tweetData.id_str,
          handle: tweetData.user.screen_name,
          text: (hasUrl) ? hasUrl[0] : tweetData.text,
          url: (hasUrl) ? hasUrl[1] : '',
        },
      });
    });
  }

  render() {
    return (
      <LatestTweet>
        <TweetText href={`https://twitter.com/${this.state.tweet.handle}/status/${this.state.tweet.id}`} target="_blank">
          {`"${this.state.tweet.text}"`}
        </TweetText>

        {this.state.tweet.url !== '' &&
          <TweetLink href={`https://t.co/${this.state.tweet.url}`} target="_blank">
            {`https://t.co/${this.state.tweet.url}`}
          </TweetLink>
        }

        <TweetHandle>{`@${this.state.tweet.handle}`}</TweetHandle>
      </LatestTweet>
    );
  }
}
