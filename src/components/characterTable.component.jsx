import React from 'react';
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'

const CharacterTable = (props) => {
    const columns = [ 
      {
        Header: 'Name',
        accessor: 'name' 
      },{
        Header: 'Height',
        accessor: 'height',
        sortMethod: (a, b) => {
          return a-b
        }
      },{
        Header: 'Mass',
        accessor: 'mass',
        sortMethod: (a, b) => {
          return a-b
        } 
      },{
        Header: 'Hair color',
        accessor: 'hair_color' 
      },{
        Header: 'Skin Color',
        accessor: 'skin_color' 
      },{
        Header: 'Eye Color',
        accessor: 'eye_color' 
      },{
        Header: 'Birth Year',
        accessor: 'birth_year' 
      },{
        Header: 'Gender',
        accessor: 'gender' 
      }]
     
      return <ReactTable
        data={props.items}
        columns={columns}
        defaultPageSize={10}
      />
};

export default CharacterTable;