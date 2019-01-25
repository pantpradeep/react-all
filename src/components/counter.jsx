import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0,
        tags: ['tag1', 'tag2', 'tag3'],
        imgUrl: "https://picsum.photos/"
    }; 
    styles ={
        fontSize:50,
        fontWeight:'bold'
    }


    renderTags(){
        if (this.state.tags.length === 0) return <p>There are no tags</p>;
        
        return <ul>
                {this.state.tags.map(tag => <li key={tag}>{ tag}</li>)}
            </ul>
    }
    //constructor(){
    //    super();
    //    this.handleIncrement = //this.handleIncrement.bind(this);
   // }

    handleIncrement = () => {
       this.setState({count: this.state.count + 1 })
    }


    render() { 
        return (
        <React.Fragment>
             <img src={this.state.imgUrl + "200"} alt=""/>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
        onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increament</button>
            {this.renderTags()}
        </React.Fragment>
        );
    }

    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
       const count  = this.state.count;
       return count === 0 ? "Zero" : count;
    } 
}
 
export default Counter;