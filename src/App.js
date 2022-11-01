import logo from './logo.svg';
import './App.css';
import React from "react";
import Counter from "./Components/Counter";
import LoginForm from "./Components/LoginForm"
import Navigator from "./Components/Navigator"
import Logg from "./Components/Logg"
import Author from "./Tables/Autors";
import Records from "./Tables/Records";
import Tags from "./Tables/Tags";
import CookiesManager from 'js-cookie';
import 'antd/dist/antd.css';

class AppSecondary extends React.Component{
    state = {
        isLoggedIn: false,
        name: undefined,
        token: undefined,
        viewId: undefined,
        activeWindow: 'record',
    }



    handleLoginClick = () => {
        if (this.state.isLoggedIn === false) {
            this.setState({isLoggedIn: true})
            CookiesManager.set('isLoggedIn', true)
        }
        else {
            this.setState({isLoggedIn: false})
            CookiesManager.set('isLoggedIn', false);
            CookiesManager.set('token', undefined);
        }
    }



        changeWindow = (new_window) => {
        this.setState({activeWindow: new_window})
    }

    setTokenandName = (s_token, t_name) => {
        this.setState({token: s_token, name: t_name})
        CookiesManager.set('token', s_token);
    }


    SetTable = (params) => {
        this.setState({activeWindow: params});
    }

    render() {
        return (
            <>
                <div className="AppSecondary">
                    {this.state.isLoggedIn? <div className={"MainScreen"}>
                        {this.state.username}
                        <Navigator switchFunction = {this.SetTable}  onButtonClick={this.handleLoginClick}>


                        </Navigator>
                            <Logg token={this.state.token}
                                  table={this.state.activeWindow}/>
                        </div>:  <LoginForm onButtonClick={this.handleLoginClick} setToken={this.setTokenandName} isLoginned={this.state.isLoggedIn} token={this.state.token}/>}

                </div>
            </>
        );
    }
}

export {AppSecondary};