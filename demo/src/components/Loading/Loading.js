import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import './Loading.scss'

@inject('loading')
@observer
class Loading extends Component {

    render() {
        if(!this.props.loading.isLoading){
            return null;
        }

        return (
            <div className="loading">
                <div className="loadEffect">
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                    <div><span></span></div>
                </div>
            </div>
        )
    }
}

export default Loading
