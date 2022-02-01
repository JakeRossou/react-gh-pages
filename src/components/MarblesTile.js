import React, {Component} from 'react';
import './MarblesTile.css';

class MarblesTile extends Component {
  constructor(props) {
    super(props);
    this.state = {hovered:false};
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMouseEnter(){
    this.setState({hovered:true});
  }
  handleMouseLeave(){
    this.setState({hovered:false});
  }
  render(){
    return (
    <div className="MarblesTile" id={this.props.title} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
      <div className="MarblesTile-overlay">
        <div className={this.state.hovered?"MarblesTile-overlay-content hoverActive":"MarblesTile-overlay-content"} >
          <h1>{this.props.title}.{this.state.hovered}</h1>
          <p>{this.props.description}</p>
          <p className={this.state.hovered?"casehover":"case"}>{this.props.caseText}</p>
        </div>
      </div>
    </div>
    )
  }
}

export default MarblesTile
