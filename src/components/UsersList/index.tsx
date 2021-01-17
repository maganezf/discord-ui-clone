import React from 'react';

import { Container, RoleStatus, User, Avatar } from './styles';

export interface UserProps {
  nickname: string;
  isAdm?: boolean;
  isBot?: boolean;
  isDJ?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isAdm, isBot, isDJ }) => {
  return (
    <User>
      <Avatar
        className={isBot ? 'bot' : '' || isAdm ? 'adm' : '' || isDJ ? 'dj' : ''}
      />

      <strong>{nickname}</strong>

      {isAdm && <span>Administrator</span>}
      {isBot && <span>Bot</span>}
      {isDJ && <span>DJ</span>}
    </User>
  );
};

const UsersList: React.FC = () => {
  return (
    <Container>
      <RoleStatus>Online - 1</RoleStatus>
      <UserRow nickname="mzff" isAdm />
      <UserRow nickname="Bot" isBot />
      <UserRow nickname="DJ" isDJ />

      <RoleStatus>Offline - 20</RoleStatus>
      <UserRow nickname="User 1" />
      <UserRow nickname="User 2" />
      <UserRow nickname="User 3" />
      <UserRow nickname="User 4" />
      <UserRow nickname="User 5" />
      <UserRow nickname="User 6" />
      <UserRow nickname="User 7" />
      <UserRow nickname="User 8" />
      <UserRow nickname="User 9" />
      <UserRow nickname="User 10" />
      <UserRow nickname="User 11" />
      <UserRow nickname="User 12" />
      <UserRow nickname="User 13" />
      <UserRow nickname="User 14" />
      <UserRow nickname="User 15" />
      <UserRow nickname="User 16" />
      <UserRow nickname="User 17" />
      <UserRow nickname="User 18" />
      <UserRow nickname="User 19" />
      <UserRow nickname="User 20" />
    </Container>
  );
};

export default UsersList;
