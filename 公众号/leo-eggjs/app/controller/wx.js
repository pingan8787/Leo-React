const Controller = require('egg').Controller;
const mongoose = require('mongoose');

class WxController extends Controller {
    async getWxData (){
        const initWxData = {
            "status": "success",
            "data": [
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
                {"title":"111111", "url":"aaaaa", "id":111},
            ]
        }
        return initWxData;
    }
    
    async index (){
        const { ctx } = this;
        try {
            ctx.body =  await this.getWxData()
        } catch (error) {
            console.log(error)
        }
    }

    async add (){
        const { ctx } = this;
        ctx.body = ctx.service.wx.add()
    }

    async getWx (id){

    }

    async delWx (id){

    }

    async ediWx (id){

    }
}

module.exports = WxController;