This Project can be used to learn react basic concepts like <br />
<b>
(1) How to use bootstrap in react. <br />
(2) How to make Api call in react using axios. <br />
(3) How to get access to previous props. <br />

=========================================================================================
</b>

<b>How to use bootstrap in react</b> <br />
Step 1 : "npm install react-bootstrap bootstrap" Run this command in terminal to install bootstrap. <br />
Step 2: import 'bootstrap/dist/css/bootstrap.min.css'; place this import inside App.js file. <br />
Step 3: Import components before using it. <br />
import Button from 'react-bootstrap/Button'; <br />
or less ideally <br />
import { Button } from 'react-bootstrap'; <br /><br />

<b>How make Api call using axios.</b><br />
Step 1: inside constructor define your state as <br />
this.state = { <br />
    isLoaded: false, <br />
    error: null, <br />
    ary : [] <br />
} <br />

Step 2: Inside componentDidMount Make your Api call. <br />
axios.get('samplejson/customerlist.json').then((data)=>{  <br />
    this.setState({error: null, isLoaded : true, ary : data.data}); //don't forgot to do data.data because API call return a array in of all information like http headers, data etc so for accessing data we have to do data.data. <br />
}).catch((error)=>{ <br />
    this.setState({error: error}); <br />
});  <br />

Step 3: Inside your render method check for some cases, <br />
if(error !== null){ <br />
    return <div>Error : {this.state.error}</div> <br />
}else if(isLoaded === false){ <br />
    return <div>Loading.... Please wait.</div> <br />
}else{ <br />
    return( <br />
        //Api Content <br />
    ); <br />
} <br />


<b>How to access previous props</b> <br />
Inside componentDidUpdate we can access previous props. <br />
componentDidUpdate(prevProps){<br />
//When user select any other customers <br />
if(this.props.selectedId !== prevProps.selectedId){ <br />
    this.getDataFromApi(); <br />
} <br />

