import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

class MessageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      other: props.other,
      messages: [],
    }
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
            _id: 2,
            text: 'Whats up',
            createdAt: new Date(),
            user: {
                _id: 1,
                name: 'Me',
            },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

export default MessageScreen;
