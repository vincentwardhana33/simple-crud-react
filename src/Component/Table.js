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
                data: response.data.return
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
                data: response.data.return
            });
        });
    }

  render() {

    const list_data = this.state.data.map((item, index)=> {
        return <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phonenumber}</td>
            <td><img src={`http://localhost:3001/images/${item.profile_picture}`} width="75" height="100" /></td>
            <td><button className='btn btn-danger' onClick={() => this.delete(item.id)}>Delete</button></td>
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
                        <th>Profile Picture</th>
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
