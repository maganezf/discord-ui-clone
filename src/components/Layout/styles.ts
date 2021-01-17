import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas:
    'ServerList ServerName ChannelInfo ChannelInfo'
    'ServerList ChannelList ChannelData UsersList'
    'ServerList UserInfo ChannelData UsersList';

  height: 100vh;
`;
