import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialTable from 'material-table';

const Table = () => {

    const [getData, setGetData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                setGetData(response.data);
            });
    })
    return (
        <MaterialTable
            title="TO DO List"
            columns={[
                { title: 'ID', field: 'id', headerStyle: { textAlign: 'center' }, cellStyle: { textAlign: 'center' } },
                {
                    title: 'Title', field: 'title',
                    headerStyle: { textAlign: 'center' }, cellStyle: { textAlign: 'center', width: 300 },
                },
                {
                    title: 'Status', field: 'completed',
                    headerStyle: { textAlign: 'center' }, cellStyle: { textAlign: 'center' }
                },
            ]}
            data={getData}
            options={{
                search: true
            }}
        />
    )
}

export default Table;