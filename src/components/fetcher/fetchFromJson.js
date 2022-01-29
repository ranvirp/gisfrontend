import React, { Component } from 'react';

class FetchFromJsonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
      //  fetch("http://upbhulekh.gov.in/public/public_ror/action/public_action.jsp?act=fillVillage&district_code=150&tehsil_code=00786")
           fetch(this.props.url)
            .then(res => res.json())
            .then(
                (result) => {
                   // debugger;
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;


        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const Mainc = this.props.mainC;
            return (
                <Mainc columns={this.props.columns} items={items}/>
            );
        }
    }
}

export default FetchFromJsonComponent;