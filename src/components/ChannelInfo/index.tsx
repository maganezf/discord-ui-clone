import React from 'react';

import {
  Container,
  HashtagIcon,
  ChannelTitle,
  SeparatorIcon,
  ChannelDescription,
} from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <ChannelTitle>global-chat</ChannelTitle>
      <SeparatorIcon />
      <ChannelDescription>Open Channel for talks</ChannelDescription>
    </Container>
  );
};

export default ChannelInfo;
