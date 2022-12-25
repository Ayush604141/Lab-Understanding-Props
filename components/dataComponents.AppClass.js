import react, { Component } from 'react';

class AddImage2 extends Component {
    render(){
        return (
            <div>
                <img src = {this.props.URL} height={600} width={600} alt="Elephant"/>
            </div>
        )
    }
}

export default AddImage2