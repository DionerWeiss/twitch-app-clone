import React from 'react';
import { Text } from 'react-native';

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';

const ChannelList: React.FC = () => {
  const ChanelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>rocketseat_oficial</Username>
          <Info>36 news videos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  return (
    <List>
      <ChanelItem />
      <ChanelItem />
      <ChanelItem />
      <ChanelItem />
      <ChanelItem />
      <ChanelItem />
      <ChanelItem />
      <ChanelItem />
      <ChanelItem />
    </List>
  );
};

export default ChannelList;
