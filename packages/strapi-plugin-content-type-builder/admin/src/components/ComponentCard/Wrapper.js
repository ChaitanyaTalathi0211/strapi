/**
 *
 * Wrapper
 *
 */

import styled from 'styled-components';

const Wrapper = styled.button`
  background-color: #fafafb;
  width: 139px;
  height: 100%;
  border-radius: 2px;
  border: 0;
  padding: 0;
  text-align: center;
  &:focus {
    outline: 0;
  }

  div {
    width: 34px;
    height: 34px;
    border-radius: 18px;
    background-color: #e9eaeb;
    color: #919bae;
    font-size: 12px;
    display: flex;
    margin: auto;
    svg {
      margin auto;
    }
  }
  p {
    font-size: 13px;
    font-weight: bold;
    color: #919bae;
    line-height: normal;
    margin-top: 7px;
    padding-left: 5px;
    padding-right: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &.active {
    cursor: initial;
  }
  &:hover, &.active {
    border: solid 1px #aed4fb;
    background-color: #e6f0fb;
    div {
      background-color: #aed4fb;
      color: #007eff;
    }
    p {
      color: #007eff;
    }
  }
`;

export default Wrapper;