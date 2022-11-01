import React from "react";

const ButtonArray = [
    {
        text: 'Aвторы',
        icon: '',
        title: 'authors'

    },
    {
        text: 'Записи',
        icon: '',
        title: 'records'
    },
    {
        text: 'Теги',
        icon: '',
        title: 'tags'
    }

]

class Navigator extends React.Component {
    SendValue = (title) => {
        const { switchFunction } = this.props;
        switchFunction(title);
    }

    handle = () => {
        const { onButtonClick } = this.props;
        onButtonClick();
    }

    render() {
        return (
            <div className='navigator'>
                <div className="header">
                    Павлов
                    Дмитрий
                    Владимирович
                    <button className={"btn-16"} onClick={this.handle}>Выход</button>
                </div>
                <h1>Навигатор</h1>
                {ButtonArray.map((button) => (
                    <div>
                        <button className='btn-6' key={button.title} onClick={() => this.SendValue(button.title)}>{button.text}</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default Navigator;