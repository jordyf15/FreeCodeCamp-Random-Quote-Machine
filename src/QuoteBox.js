import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
const FADE_DURATION=100;
class QuoteBox extends React.Component{
    state={
        colorIndex: this.props.startIndex,
        authorIndex: this.props.startText,
        quoteIndex: this.props.startText,
        fadeTransition: null,
        fadeState: "fade-in"
    }
    randomIndex=()=>{
        let index = Math.floor(Math.random()*19);
        return index;
    }
    changeEverything=()=>{
        const timeout = setTimeout(()=>{

        let randomColor=this.randomIndex();
        let randomQuoteAndAuthor=this.randomIndex();
        this.props.changeBgColor(randomColor);
            
        this.setState(
                {
                    colorIndex: randomColor,
                    quoteIndex: randomQuoteAndAuthor,
                    authorIndex: randomQuoteAndAuthor,
                    fadeTransition: null,
                    fadeState: 'fade-in'
                });
        }, FADE_DURATION);
        
        clearTimeout(this.state.fadeTransition);
        
        this.setState({ 
            fadeState : 'fade-out', 
            fadeTransition : timeout 
        });
    }
    tweetQuote=()=>{
        let twitterUrl='https://twitter.com/intent/tweet?text='+ '"'+ this.props.quoteList[this.state.quoteIndex]+'" '
        +this.props.authorList[this.state.authorIndex]
        return twitterUrl;
    }
    render(){
        return (
            <div id="container">
            <div id="quote-box" className="container-fluid">   
                <div className={`quote-text ${this.state.fadeState}`}
                style={{transitionDuration: '${FADE_DURATION}ms'}}>
                    <p id="text" style={{color: (this.props.colorList[this.state.colorIndex])}}>
                    <i className="fa fa-quote-left" style={{color: (this.props.colorList[this.state.colorIndex])}}></i>
                   
                    <a> </a>{this.props.quoteList[this.state.quoteIndex]}</p>

                    <p id="author" style={{color:(this.props.colorList[this.state.colorIndex])}}>
                    - {this.props.authorList[this.state.authorIndex]}
                    </p>
                </div>
                <div className="shareQuote_newQuote">
                    <div className="shareQuote">
                <a target="blank" href={this.tweetQuote()} id="tweet-quote" style={{backgroundColor:(this.props.colorList[this.state.colorIndex])}}>
                    <i className="fa fa-twitter"></i>
                    </a>
                <a target="blank" href=" https://www.tumblr.com/widgets/share/tool?canonicalUrl=&caption="  
                style={{backgroundColor:(this.props.colorList[this.state.colorIndex])}} id="tumblr-quote">
                    <i className="fa fa-tumblr"></i>
                    </a>
                    </div>
                <button id="new-quote" className="btn" onClick={this.changeEverything} style={{backgroundColor: (this.props.colorList[this.state.colorIndex])}}>
                    New Quote</button>
                </div>
            </div>
            <div id="name">
            by Jordy Ferdian
            </div>
            </div>
        )
    }
}
export default QuoteBox