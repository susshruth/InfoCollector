import React from "react";

class FormxFL2 extends React.Component{
    constructor(props) {
        super(props)
        this.state = {val:''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setstate({val:event.target.value});
    }

    handleSubmit(event) {
        alert("Text Entered: " + this.state.val);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.val} 
                    onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    };
};
export default FormxFL2;