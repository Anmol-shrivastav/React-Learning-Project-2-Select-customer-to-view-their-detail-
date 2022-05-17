import React from 'react';
import axios from 'axios';
import { Button , Card , Col} from 'react-bootstrap';
import "./../style/customerList.css";
import CustomerDetails from './customerDetails';

export default class CustomerList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            customersList : [],
            selectedId: 1
        }
    }

    componentDidMount(){
        this.getDataFromApi();
    }

    getDataFromApi = ()=>{
        axios.get('samplejson/customerlist.json').then((data)=>{
            this.setState({error: null, isLoaded : true, customersList : data});
        }).catch((error)=>{
            this.setState({error: error});
        });
    }

    selectedCustomer = (id)=>{
        console.log("selected id = " + id);
        this.setState({selectedId: id});
    }

    render(){
        const {error, isLoaded, customersList} = this.state;
        console.log(customersList.data);
        if(error !== null){
            return <div>Error: {error}</div>
        }else if(isLoaded === false){
            return <div>Loading Please Wait...</div>
        }else{
            return(
                <>
                    <Col lg={4} md={4} sm={12}>
                        <div className="customer-list-container">
                            {
                                customersList.data.map((customer)=>{
                                    return(
                                        <Card key={customer.id}>
                                            <Card.Header>Customer {customer.id}</Card.Header>
                                            <Card.Body>
                                                <Card.Title>Name = {customer.name}</Card.Title>
                                                <Card.Text>
                                                    <span>Email = {customer.email} </span> <br />
                                                    Phone = {customer.phone}
                                                </Card.Text>

                                                <Button variant="success" onClick={()=>{this.selectedCustomer(customer.id)}}>Select</Button>
                                            </Card.Body>
                                        </Card>
                                    );
                                })
                            }
                        </div>
                    </Col>
                    
                    <Col lg={8} md={8} sm={12}>
                        <CustomerDetails selectedId = {this.state.selectedId} />
                    </Col>
                    

                </>
                
            );
           
        }
    }
}