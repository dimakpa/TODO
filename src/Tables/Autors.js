import React from "react";
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import {DataGrid, GridActionsCellItem, GridToolbarQuickFilter} from "@mui/x-data-grid";
import { Table } from 'antd';
import Records from "./Records";
import CheckRecords from "./CheckRecords";


const url_author = 'https://dimakpa.pythonanywhere.com/api/infoAutors/'
const url_records = 'http://dimakpa.pythonanywhere.com/api/infoWritings/'

class Author extends React.Component{

    state = {
        authors: [],
        error: "",
        show: false,
        edit_id: undefined,
        recordsView: undefined,
    }

    componentDidMount = async () => {
        const { token } = this.props;
        let authors = []
        try {
            const result = await fetch(url_author, {
                method: "GET",
                headers: {
                    'Authorization': 'Token ' + token
                }
            })
            authors = await result.json();
        } catch (err) {
            this.setState({
                error: "Ошибка получения данных"
            })
        }

        this.setState({
            authors: authors,
        })
    }


    columns = [
        {
            field: 'name',
            dataIndex: 'name',
        },
        {
            field: 'age',
            dataIndex: 'age',

        },
        {
            field: 'is_writing',
            dataIndex: 'is_writing?'
        },

    ]

    render() {
        const { error, authors} = this.state;
        const { activeWindow } = this.props;
        return (
            <>
                <div className="authors">Авторы
                    <h2>{error}</h2>
                    <Table
                        dataSource={authors}
                        columns={this.columns}
                        onRow={(recordsView, rowIndex) => {
                            return {
                                onClick: (event) => {
                                    this.activeWindow = 'checkRecords';
                                },
                            };
                        }}/>
                        }

                </div>
            </>
        );
    }
}
export default Author;