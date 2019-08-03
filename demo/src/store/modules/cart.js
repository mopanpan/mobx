import { observable, action } from "mobx";
import { carts, cartCheck, delAll, upCount } from '../../services/index.js';

class Cart {
    // @observable 修饰属性
    @observable cartData = []; // 组件里打印这个属性数据 所有的数据
    @observable getCartNum = {}; //  总数量
    @observable getId = [];  // 编辑的id
    @observable IsShow = false;// 编辑后台的true和false  编辑和完成的切换 
    @observable editAll = [];  // 

    // @action 修饰方法
    @action getCartData = async () => { // 调用这个方法
        let res = await carts();
        console.log('cart', res);
        res.data.cartList.map(item => {
            console.log('modules', item);
            return item.isShow = false;
        })
        this.cartData = res.data.cartList;
        this.getCartNum = res.data.cartTotal;
        // this.getId = res.data.cartList.map(item => item.product_id)
        this.getId = res.data.cartList.map(item=>item.product_id).join(",")
    }

    //  购物车商品是否选中
    @action cartChecked = async (params) => {
        let res = await cartCheck(params);
        console.log(res);
        if (res.errno === 0) {
            let res = await carts();
            this.cartData = res.data.cartList;//是否选中的数据
            this.getCartNum = res.data.cartTotal;// 总价
            this.getId = res.data.cartList.map(item => item.product_id).join(',')
        }
    }

    //  编辑里的单选
    @action update = async (params) => { //id  组件传过来的id
        console.log(params)
        let item = this.cartData.find(item => item.product_id === params); //  find返回每一项
        item.isShow = !item.isShow;  // 点击单选切换
        // 如果点击单选按钮的最后一个，让全选按钮也选中
        this.IsShow = this.cartData.every(item => item.isShow)
        //   点击单选的时候 过滤的时候删除
        this.editAll = this.cartData.filter(item => item.isShow)
    }

    // 编辑里的全选 
    @action allChecked = async (params) => { // 前端传过来  true false
        this.IsShow = params;  // 如果单选的数据与 全选的数据相等
        this.cartData.map(item => {
            return item.isShow = params;
        })
        this.editAll = this.cartData.filter(item => item.isShow)
    }

    // 删除商品
    @action delAlls = async (params) => {
        let data = await delAll(params);
        if (data.errno === 0) {
            this.cartData = data.data.cartList;
            this.getCartNum = data.data.cartTotal;
        }
    }

    //更新商品的数量  更新数据 [加减]
    @action updateCount = async (params) => {
        let data = await upCount(params);
        console.log(data)  
        this.cartData = data.data.cartList;
        this.getCartNum = data.data.cartTotal; // 总计
    }
}
export default Cart;