import React, { useRef, useEffect } from 'react';

import {
  Container,
  Messages,
  InputWrapper,
  InputMessage,
  InputIcon,
} from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  // scroll be updated to down/new messages when reloaded page
  useEffect(() => {
    const div = messagesRef.current;

    if (div !== null && div !== undefined) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map(n => (
          <ChannelMessage
            key={n}
            authorMessage="mzff"
            dateMessage="28/06/2021"
            contentMessage="Hello World!"
            isAdm
          />
        ))}

        <ChannelMessage
          authorMessage="Bot"
          dateMessage="28/06/2021"
          contentMessage={
            <>
              <Mention>@mzff</Mention>, Hello World! I'm a Bot.
            </>
          }
          isBot
        />

        <ChannelMessage
          authorMessage="DJ"
          dateMessage="28/06/2021"
          contentMessage={
            <>
              <Mention>@mzff</Mention>, I'm a DJ, listen this!.
            </>
          }
          isDJ
        />
      </Messages>

      <InputWrapper>
        <InputMessage type="text" placeholder="Message #global-chat" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
