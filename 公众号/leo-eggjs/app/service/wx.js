const Service = require('egg').Service;

class WxService extends Service {
    async add () {
        return await this.ctx.model.Wx.create({
            title:'测试标题',
        })
    }
}

module.exports = WxService;