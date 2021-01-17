import React from 'react';

import ListOfChannelsButton from '../ListOfChannelsButton';

import {
  Container,
  ChatCategory,
  HideOrShowItemsCategoryIcon,
  AddCategoryIcon,
} from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <ChatCategory>
        <div className="HideOrShowIcon">
          <HideOrShowItemsCategoryIcon />
        </div>
        <span>Text channels</span>
        <AddCategoryIcon />
      </ChatCategory>

      <ListOfChannelsButton channelName="global-chat" />
      <ListOfChannelsButton channelName="work" />
      <ListOfChannelsButton channelName="gaming" />
      <ListOfChannelsButton channelName="enjoy" />
      <ListOfChannelsButton channelName="csgo" />
    </Container>
  );
};

export default ChannelList;
