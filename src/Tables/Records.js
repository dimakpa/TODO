import React from "react";
import { DataGrid, GridToolbarQuickFilter, GridActionsCellItem, } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import {Table} from "antd";



const url_records = 'http://dimakpa.pythonanywhere.com/api/infoWritings/'

class Records extends React.Component{

    state = {
        records: [],
        error: "",
        show: false,
        edit_id: undefined,
    }

    componentDidMount = async () => {
        this.SetRecords();
    }

    DoUpdateAfterModal = async () => {
        this.componentDidMount();
    }

    GoToRecord = async (id) => {
        this.setState({ edit_id: id });
    }

    SetRecords = async () => {
        const { token } = this.props;
        let record = []
        try {
            const result = await fetch(url_records, {
                method: "GET",
                headers: {
                    'Authorization': 'Token ' + token
                }
            })
            record = await result.json();
        } catch (err) {
            this.setState({
                error: "Ошибка получения данных"
            })
        }
        this.setState({
            records: record,
        })
    }

    columns = [
        {
            field: 'text',
            dataIndex: 'text'
        },
        {
            field: 'length',
            dataIndex: 'length',
            width: 200
        },
        {
            field: 'tag',
            dataIndex: 'tag'
        },
        {
            field: 'time_create',
            dataIndex: 'time create'
        },

    ]

    render() {
        const { error, records } = this.state;

        return (<div className='records'>
                Записки
                <h2>{error}</h2>
                <Table dataSource={records} columns={this.columns}/>
            </div>
        )
    }
}
export default Records;