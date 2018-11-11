import React from "react";

export class MessageForm extends React.Component {
  state = { text: "" };

  render = () => {
    return (
      <div>
        <input
          placeholder="type a message"
          value={this.state.text}
          onChange={e => this.setState({ text: e.currentTarget.value })}
        />
        <button onClick={() => this.props.onSendText(this.state.text)}>
          Send!
        </button>
      </div>
    );
  };
}
