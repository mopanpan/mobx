import { observable, action } from "mobx";
import { carts, cartCheck, delAll, upCount } from '../../services/index.js';

class Cart {
    // @observable 修饰属性
    @observable cartData = []; // 组件里打印这个属性数据 
    @observable getCartNum = {};
    @observable getId = [];
    @observable IsShow = false;//编辑后台的true和false  编辑和完成的切换
    @observable editAll = [];

    // @action 修饰方法
    @action getCartData = async () => { //调用这个方法
        let res = await carts();
        console.log('cart', res);
        res.data.cartList.map(item => {
            console.log('modules', item)
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
            this.carts = res.data.cartList;
            this.getCartNum = res.data.cartTotal;
            this.getId = res.data.cartList.map(item => item.product_id).join(',')
        }
    }

    //  编辑里的单选
    @action update = async (params) => { //id
        console.log(params)
        let item = this.carts.find(item => item.product_id === params);
        item.isShow = !item.isShow;  // 点击单选切换
        this.IsShow = this.carts.every(item => item.isShow)
        this.editAll = this.carts.filter(item => item.isShow)
    }

    // 编辑里的全选 
    @action allChecked = async (params) => {
        this.IsShow = params;  // 如果单选的数据与 全选的数据相等
        this.carts.map(item => {
            return item.isShow = params;
        })
        this.editAll = this.carts.filter(item => item.isShow)
    }

    //删除商品
    @action delAll = async (params) => {
        let data = await delAll(params);
        if (data.errno === 0) {
            this.carts = data.data.cartList;
            this.getCartNum = data.data.cartTotal;
        }
    }

    //更新商品的数量  更新数据
    @action updateCount = async (params) => {
        let data = await upCount(params);
        this.carts = data.data.cartList;
        this.getCartNum = data.data.cartTotal;
    }
}
export default Cart;