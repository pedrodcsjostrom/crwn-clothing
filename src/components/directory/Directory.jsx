import "./directory.styles.scss";
import React, { Component } from "react";
import sections from "../../directory.data";
import MenuItem from "../menu-item/MenuItem";

export default class Directory extends Component {
  constructor() {
    super();
    this.state = { sections };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({title, id, imageUrl, size}) => {
          return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>;
        })}
      </div>
    );
  }
}
