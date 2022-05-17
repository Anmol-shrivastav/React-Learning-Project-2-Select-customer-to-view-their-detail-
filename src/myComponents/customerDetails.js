import React from 'react';
import axios from 'axios';
import  Card  from 'react-bootstrap/Card';
import "./../style/customer.css";

export default class CustomerDetails extends React.Component{
    constructor(props){
        super(props);
        console.log("Selected id = " + this.props.selectedId);
        this.state = {
            obj: null,
            error: null,
            isLoaded: false
        }
    }
    componentDidMount() {
        //for first time api call
        this.getDataFromApi();
    }

    componentDidUpdate(prevProps){
        //When user select any other customers
        if(this.props.selectedId !== prevProps.selectedId){
            this.getDataFromApi();
        }
    }

    getDataFromApi = ()=>{
        console.log("fetching data for customer id = " + this.props.selectedId);
        axios.get('samplejson/customer'+this.props.selectedId+'.json').then((data)=>{
            this.setState({obj: data.data, isLoaded: true});
        }).catch((error)=>{
            this.setState({error: error, isLoaded: true});
        });
    }

    render(){
        if(this.state.isLoaded === false){
            console.log("Loading...");
            return <div>Loading...</div>
        }else if(this.state.error === null){
            console.log("going to render new details for customer id " + this.state.obj.id);
            return(
                <div className='customer-container'>
                    <Card key={this.state.obj.id}>
                        <Card.Header>Customer {this.state.obj.id}</Card.Header>
                        <Card.Body>
                            <Card.Title>Name = {this.state.obj.name}</Card.Title>
                            <Card.Text>
                                <span>Email = {this.state.obj.email} </span> <br />
                                <span>Phone = {this.state.obj.phone} </span> <br />
                                <span>City = {this.state.obj.city} </span> <br />
                                <span>State = {this.state.obj.state} </span> <br />
                                <span>Country = {this.state.obj.country} </span> <br />
                                <span>Organization = {this.state.obj.organization} </span> <br />
                                <span>Job Profile = {this.state.obj.jobProfile} </span> <br />
                                <span>Additional Info = {this.state.obj.additionalInfo} </span> <br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            );
        }else{
            return(
                <div>
                    Error Message : {this.state.error}
                </div>
            );
        }
        
    }
}