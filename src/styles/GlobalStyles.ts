import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: #202225;
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;

    --white: #FFFFFF;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;

    --notification: #f84a4b;
    --discord: #7289DA;
    --mention-message: #413f3f;
    --mention-detail: #FAA61A;

    --role-status-adm: #f9a839;
    --role-status-bot: #3498DB;
    --role-status-dj: #333269;

    --offline-user: #ff6e6c;

    --link: #5d80d6;

    --isHomeColor: #6633cc;
  }
`;
