import React from 'react';
import QuoteBox from './QuoteBox'
import colorList from './Storage'
import quoteList from './quoteStorage'
import authorList from './authorStorage'
import './Css.css';
class App extends React.Component{
  state={
    colorIndex:  Math.floor(Math.random()*19)
  }

changeBgColor=(index)=>{
  this.setState(
      {
      colorIndex: index
      }
    )
}

  render(){
    return (
      <div className="Background" style={{backgroundColor: (colorList[this.state.colorIndex]), height: '100vh', width: '100vw'}}>
        <QuoteBox colorList={colorList} quoteList={quoteList} authorList={authorList} startIndex={this.state.colorIndex} 
        changeBgColor={this.changeBgColor} startText={Math.floor(Math.random()*19)}/>
      </div>
    )
  }
}
export default App;
