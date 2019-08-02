import { getLogin } from '../../services/login';
import { observable, action } from "mobx";
import { setToken } from '../../utils/index'
export default class Login {

    // @observable 修饰属性
    @observable loginUser = "";

    // @action 修饰方法
    @action async getLoginData(phone, pwd) {
        let data = await getLogin({ mobile: phone, password: pwd })
        console.log(data)
        if (data.errno === 0) {
            this.loginUser = data.data
            setToken(data.data.sessionKey)
        } else {
            this.loginUser = 1
        }
    }
    // @action getLoginData = async(phone, pwd)=>{
    //     let data = await getLogin({ mobile: phone, password: pwd })
    //     console.log(data)
    //     if (data.errno === 0) {
    //         this.loginUser = data.data
    //         setToken(data.data.sessionKey)
    //     } else {
    //         this.loginUser = 1
    //     }

    // }


}





