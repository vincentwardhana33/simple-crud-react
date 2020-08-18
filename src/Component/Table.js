import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {

    constructor(){
        super();

        this.state ={
            data: []
        };
    }
    
    componentWillMount(){
        axios.get('http://localhost:3001/select')
        .then((response) =>{
            this.setState({
                data: response.data
            });
        })
    };

    delete(id){
        var self = this;
        axios.post('http://localhost:3001/delete', {
            id: id
        })
        .then(function(response){
            console.log(response);
            self.setState({
                data: response.data
            });
        });
    }

  render() {

    const list_data = this.state.data.map((item, index)=> {
        var id = item.id;
        var name = item.name;
        var email = item.email;
        var phonenumber = item.phonenumber;

        return <tr>
            <td>{index+1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phonenumber}</td>
            <td><button className='btn btn-danger' onClick={() => this.delete(id)}>Delete</button></td>
        </tr>
    })

    return (
        <div className="col-md-12">
        <div className="widget p-lg">
          <h4 className="m-b-lg">List</h4>
            <table className="table">
                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th></th>
                    </tr>
                    {list_data}
                </tbody>
            </table>
        </div>
      </div>
      );
  }
}

export default Table;
