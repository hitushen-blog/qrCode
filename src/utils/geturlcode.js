// 引入qrcode-decoder，
import QrCode from 'qrcode-decoder'
// 部分网友反应上面的引入，这个引入的是一个空对象，不能使用，已经给开发者提issues了，希望能尽快修复不能使用或报错，可以试试下面这种
// import QrCode from '../../node_modules/qrcode-decoder/dist/index';
// 传入file对象，返回promise
export function getQrUrl(file) {
    //使用这个方法或者下面被注释的方法设置浏览器读取文件方式，chrome和ie有效，其他浏览器没测试
    const URi = window.webkitURL.createObjectURL(file) || window.URL.createObjectURL(file)
    // if (window.webkitURL) {
    //     URi = window.webkitURL.createObjectURL(file);
    // } else if (window.URL && window.URL.createObjectURL) {
    //     URi = window.URL.createObjectURL(file);
    // } else {
    //     URi = null;
    // }
    const url = URi
    // 初始化
    const qr = new QrCode()
    // 解析二维码，返回promise
    return qr.decodeFromImage(url)
}
