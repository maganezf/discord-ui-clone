import styled from 'styled-components';
import { Add, ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: ChannelList;

  display: flex;
  flex-direction: column;

  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`;

export const ChatCategory = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  margin-bottom: 9px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
`;

export const HideOrShowItemsCategoryIcon = styled(ExpandMore)`
  width: 12px;
  height: 12px;

  color: var(--symbol);
  cursor: pointer;

  margin-right: 3px;
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;

  color: var(--symbol);
  cursor: pointer;

  margin-left: 5em;
`;

export const ListOfChannelsButton = styled.div``;
