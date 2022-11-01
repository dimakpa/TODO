import React from 'react';
import {Table} from "antd";

const url_author = 'http://dimakpa.pythonanywhere.com/api/infoAutors/'
const url_records = 'http://dimakpa.pythonanywhere.com/api/infoWritings/'
const url_tags = 'http://dimakpa.pythonanywhere.com/api/infoTags/'

class ViewRecord extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        edit_id: undefined,
        create_success: undefined,
        authors: [],
        tags: [],
        record_data: []
    }

    columnsRecords = [
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

    handleSubmit(event) {
        this.regRecord();
        event.preventDefault();
    }

    viewRecordsFromAuthors = async () => {
        const { token } = this.props;
        const { viewId } = this.props;
        try {
            const recordsView = await fetch(url_records + viewId + '/', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + token
                },
            })
            let tmp_records = await recordsView.json();
            this.setState({ recordsView: tmp_records });
        } catch (err) {
            this.setState({
                error: "Ошибка получения данных"
            })
        }
    }


    componentDidMount2 = async () => {
        await this.viewRecordsFromAuthors();
    }

    render() {
        const { error, authors, recordsView} = this.state;
        return (
            <>
                <div className="authors">Записи Автора
                    <h2>{error}</h2>
                    <Table
                        dataSource={recordsView}
                        columns={this.columnsRecords}
                        />
                    }

                </div>
            </>
        );
    }
}

export default ViewRecord;