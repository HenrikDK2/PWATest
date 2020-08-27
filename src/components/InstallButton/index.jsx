import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { PwaState } from "../../Store";
import { useRecoilState } from "recoil";

const InstallButton = styled.button`
  background: #fefbff;
  color: #7f38fb;
  border-radius: 30px;
`;

const DeclineButton = styled.button`
  color: #dcb6ff;
  background: transparent;
  transition: 0.2s all;
  &:hover {
    color: #fff;
  }
`;

const InstallButtonComponent = () => {
  const [pwa, setPwa] = useRecoilState(PwaState);

  const InstallContainer = styled.div`
    position: fixed;
    bottom: 1rem;
    left: 50%;
    height: 150px;
    background: #7f38fb;
    flex-grow: 0;
    color: #fff;
    width: 400px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
    transform: translateX(-50%);
    display: ${pwa && !pwa.hide ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    user-select: none;
    justify-content: center;

    & > h5 {
      text-align: center;
      font-size: 2rem;
      margin: 0 0 10px 0;
    }

    & > div {
      gap: 10px;

      display: Flex;
      align-items: center;
      justify-content: center;
    }
    & button {
      cursor: pointer;
      font-size: 1.25rem;
      flex-grow: 0;
      height: 50px;
      border: none;
      padding: 0 2rem;
    }
  `;

  return (
    <InstallContainer>
      <h5>Install our app?</h5>
      <div>
        <InstallButton
          onClick={(e) => {
            // Hide the app provided install promotion
            // Show the install prompt
            pwa.e.prompt();
            // Wait for the user to respond to the prompt
            pwa.e.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === "accepted") {
                console.log("User accepted the install prompt");
              } else {
                console.log("User dismissed the install prompt");
              }
            });
          }}
        >
          Install
        </InstallButton>
        <DeclineButton>Not now</DeclineButton>
      </div>
    </InstallContainer>
  );
};

export default InstallButtonComponent;
