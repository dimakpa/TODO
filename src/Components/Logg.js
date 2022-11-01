import React from "react";
import Author from "../Tables/Autors";
import Records from "../Tables/Records";
import Tags from "../Tables/Tags";
import CheckRecords from "../Tables/CheckRecords";

class Logg extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            token: this.props.token,
        };
    }

    render() {


        return (
            <>
                <div className="dashboard">
                    {(() => {
                        switch (this.props.table) {
                            case 'tags':
                                return <Tags token={this.state.token}></Tags>;
                            case 'authors':
                                return <Author token={this.state.token}></Author>;
                            case 'records':
                                return <Records token={this.state.token}></Records>;
                            case 'checkRecords':
                                return <CheckRecords edit_id={this.state.edit_id} token={this.state.token}></CheckRecords>;
                        }
                    })()}

                </div>
            </>
        );
    }
}
export default Logg;