import React from "react";
import styled from "styled-components";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400&display=swap");

  $black: #000;
  $white: #fff;
  font-family: "Roboto", sans-serif;

  @mixin pseudo($content: "") {
    position: absolute;
    content: $content;
  }

  * {
    box-sizing: border-box;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
  text-align: center;
  position: relative;
  transform: scale(0.725);

  .divider {
    position: absolute;
    z-index: 2;
    top: 65px;
    left: 200px;
    width: 50px;
    height: 15px;
    background: $white;
  }

  .loading-text {
    position: relative;
    font-size: 3.75rem;
    font-weight: 300;
    margin: 0;
    white-space: nowrap;
    &::before {
      // For dot
      @include pseudo;
      z-index: 1;
      top: 40px;
      left: 115px;
      width: 6px;
      height: 6px;
      background: $black;
      border-radius: 50%;
      animation: dotMove 1800ms cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite;
    }
    .letter {
      display: inline-block;
      position: relative;
      color: $black;
      letter-spacing: 8px;
      &:nth-child(1) {
        // For the letter "L"
        transform-origin: 100% 70%;
        transform: scale(1, 1.275);
        &::before {
          @include pseudo;
          top: 22px;
          left: 0;
          width: 14px;
          height: 36px;
          background: $white;
          transform-origin: 100% 0;
          animation: lineStretch 1800ms cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite;
        }
      }
      &:nth-child(5) {
        // For the letter "i"
        transform-origin: 100% 70%;
        animation: letterStretch 1800ms cubic-bezier(0.25, 0.23, 0.73, 0.75) infinite;
        &::before {
          @include pseudo;
          top: 15px;
          left: 2px;
          width: 9px;
          height: 15px;
          background: $white;
        }
      }
    }
  }
`;

const Loader = () => {
  return (
    <Container>
      <div class="divider" aria-hidden="true"></div>
      <p class="loading-text" aria-label="Loading">
        <span class="letter" aria-hidden="true">
          L
        </span>
        <span class="letter" aria-hidden="true">
          o
        </span>
        <span class="letter" aria-hidden="true">
          a
        </span>
        <span class="letter" aria-hidden="true">
          d
        </span>
        <span class="letter" aria-hidden="true">
          i
        </span>
        <span class="letter" aria-hidden="true">
          n
        </span>
        <span class="letter" aria-hidden="true">
          g
        </span>
      </p>
    </Container>
  );
};

export default Loader;
