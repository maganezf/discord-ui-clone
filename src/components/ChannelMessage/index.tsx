import React from 'react';

import {
  Container,
  Avatar,
  Message,
  HeaderMessage,
  ContentMessage,
} from './styles';

export { Mention } from './styles';

export interface Props {
  authorMessage: string;
  dateMessage: string;
  contentMessage: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isAdm?: boolean;
  isBot?: boolean;
  isDJ?: boolean;
}

const ChannelMessage: React.FC<Props> = ({
  authorMessage,
  dateMessage,
  contentMessage,
  hasMention,
  isAdm,
  isBot,
  isDJ,
}) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar
        className={isBot ? 'bot' : '' || isAdm ? 'adm' : '' || isDJ ? 'dj' : ''}
      />

      <Message>
        <HeaderMessage>
          <strong>{authorMessage}</strong>

          {isAdm && <span>Administrator</span>}
          {isBot && <span>Bot</span>}
          {isDJ && <span>DJ</span>}
          <time>{dateMessage}</time>
        </HeaderMessage>
        <ContentMessage>{contentMessage}</ContentMessage>
      </Message>
    </Container>
  );
};

export default ChannelMessage;
