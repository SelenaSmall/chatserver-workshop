import React from "react";

export const MessageList = props => {
  return (
    <ul className="message-list">
      {props.messages.map(message => (
        <li>{message.text}</li>
      ))}
    </ul>
  );
};
