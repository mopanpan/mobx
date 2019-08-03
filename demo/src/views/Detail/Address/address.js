import React, { Component } from 'react'
import { Picker, List, Toast } from 'antd-mobile';
import address from '@/components/addressSet/address'
//import arrayTreeFilter from './arrayTreeFilter';
import './address.scss'
import { inject, observer } from 'mobx-react';
@inject('address')
@observer
class Address extends Component {

    state = {
        flag: false,
        visible: false,
        value: null,
        active: false,
        pickerValue: [],
    }
    componentDidMount() {
        this.props.address.getAddress()
    }
    save() {
        if (this.treeChildren.length === 0) {
            Toast.fail('请选择地址!!', 1);
            return
        }
        if (this.refs.name.value === "") {
            Toast.fail('请填写姓名!!', 1);
            return
        }
        if (this.refs.mobile.value === "") {
            Toast.fail('请填写电话!!', 1);
            return
        }
        if (this.refs.address.value === "") {
            Toast.fail('请填写详细地址!!', 1);
            return
        }
        let obj = {
            address: this.refs.address.value,
            city_id: this.treeChildren[1].value,
            district_id: this.treeChildren[2].value,
            is_default: this.state.active,
            mobile: this.refs.mobile.value,
            name: this.refs.name.value,
            province_id: this.treeChildren[0].value,
            full_region: this.treeChildren[0].label + this.treeChildren[1].label + this.treeChildren[2].label
        }
        this.setState({ flag: false })
        console.log(obj)
        this.props.address.addAddress(obj)
    }
    dele(id) {
        this.props.address.delAddress({ id })
    }
    getSel() {
        const value = this.state.pickerValue;
        if (!value) {
            return '';
        }
        // this.treeChildren = arrayTreeFilter(address, (c, level) => { return c.value === value[level]});
        // this.treeChildren.map(v => v.label).join(',');
    }
    render() {
        let { flag } = this.state;
        return (
            <div className='App'>
                <div className='noTabPageContent'>
                    <div id='addressPage'>
                        <div className='header'>
                            <div className='left' onClick={() => { this.props.history.goBack() }}><i className='iconfont icon-angle-left'></i></div>
                            <div className='title'>我的收藏</div>
                            <div className='right'></div>
                        </div>
                        {flag && <div className='addressSetPage'>
                            <div className='addressHeader'>新建地址</div>
                            <div className='ipt'>
                                <input type='text' placeholder='姓名' ref='name' />
                            </div>
                            <div className='ipt'>
                                <input type='text' placeholder='电话号码' ref='mobile' />
                            </div>
                            <List>
                                <Picker
                                    visible={this.state.visible}
                                    value={this.state.pickerValue}
                                    data={address}
                                    onChange={v => this.setState({ pickerValue: v })}
                                    onOk={() => this.setState({ visible: false })}
                                    onDismiss={() => this.setState({ visible: false })}
                                >
                                    <List.Item extra={this.getSel()} onClick={() => this.setState({ visible: true })}>
                                        地址
                                    </List.Item>
                                </Picker>
                            </List>
                            <div className='ipt'>
                                <input type='text' placeholder='详细地址' ref='address' />
                            </div>
                            <div className='isDefaultAddress' onClick={() => { this.setState({ active: !this.state.active }) }}>
                                设置默认地址 {this.state.active === false ? <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC' alt='' /> :
                                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==' alt='' />}
                            </div>
                            <div className='closeAddress'>
                                <div onClick={() => { this.setState({ flag: false }) }}>取 消</div>
                                <div onClick={() => { this.save() }}>保 存</div>
                            </div>
                        </div>}
                        <div className='addressList'>
                            {
                                this.props.address.addressData && this.props.address.addressData.map((item) => {
                                    return (<div className='addressItem' key={item.id}>
                                        {item.is_default === 1 ? <div className='isChooseAddress'></div> : null}
                                        <div className='addressMsg'>
                                            <div className='concatName'>{item.name}</div>
                                            <div className='addressDetail'>
                                                <div className='concatPhone'>{item.mobile}</div>
                                                <div className='concatAddress'>{item.full_region}</div>
                                                <div className='concatAddress'>{item.address}</div>
                                            </div>
                                            <div className='deleteAddress' onClick={() => { this.dele(item.id) }}>
                                                <i className='iconfont icon-lajitong'></i>
                                            </div>
                                        </div>
                                    </div>)
                                })
                            }

                        </div>
                        <div className='addAddress' onClick={() => { this.setState({ flag: true }) }}>
                            新建地址
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Address;
