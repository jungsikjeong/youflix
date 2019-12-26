import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Text = styled.span`
  font-size: 20px;
  color: ${props => props.color};
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.prototype = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Message;
