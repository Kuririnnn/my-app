import React from 'react';
import './index.less';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.ctx = null;
        this.width = null;
        this.height = null;
        this.r = null;
        this.rem = null;
        this.digits = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    }

    componentDidMount() {
        let canvas = this.draw;
        this.ctx = canvas.getContext('2d');
        this.width  = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
        this.r      = this.width / 2;
        this.rem    = this.width / 200;
        this.initDraw();
    }

    initDraw = () => {
        this.init();
        setInterval(() => {
            this.init();
        }, 1000);
    }

    init = () => {
        let ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);    //在给定的矩形内清除指定的像素
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        let hour = hours >= 12 ? hours - 12 : hours;
        let minute = minutes + seconds / 60;

        this.drawBackground();
        this.drawHour(hour, minute);
        this.drawMinute(minute);
        this.drawSecond(seconds);
        this.drawDot();
        ctx.restore();
    }

    drawBackground = () => {
        let ctx = this.ctx;
        let self = this;
        ctx.save();
        ctx.translate(this.r, this.r);         //重新映射画布上的 (0,0) 位置
        ctx.beginPath();
        ctx.lineWidth = 8 * this.rem;
        ctx.arc(0, 0, this.r - ctx.lineWidth / 2, 0, 2 * Math.PI, false);    //创建弧/曲线（用于创建圆形或部分圆）
        ctx.stroke();
        ctx.font = 16 * this.rem + "px Arial";//设置或返回文本内容的当前字体属性
        ctx.textAlign = "center";              //设置或返回文本内容的当前对齐方式
        ctx.textBaseline = "middle";           //设置或返回在绘制文本时使用的当前文本基线
        this.digits.forEach(function (number, i) {
            let rad = 2 * Math.PI / 12 * i;
            let x = Math.cos(rad) * (self.r - 33 * self.rem);
            let y = Math.sin(rad) * (self.r - 33 * self.rem);
            ctx.fillText(number, x, y);        //在画布上绘制"被填充的"文本
        });

        //分钟的刻度，每分钟转6deg
        for (let i = 0; i < 60; i++) {
            ctx.save();                        //保存当前环境的状态
            ctx.rotate(6 * i * Math.PI / 180); //旋转当前绘图
            ctx.beginPath();                   //起始一条路径，或重置当前路径
            ctx.moveTo(0, -82 * this.rem);     //把路径移动到画布中的指定点，不创建线条
            ctx.lineTo(0, -87 * this.rem);     //添加一个新点，然后在画布中创建从该点到最后指定点的线条
            ctx.closePath();                   //创建从当前点回到起始点的路径
            ctx.strokeStyle = '#000';          //设置或返回用于笔触的颜色、渐变或模式
            ctx.lineWidth = 1 * this.rem;      //设置或返回当前的线条宽度
            ctx.stroke();                      //绘制已定义的路径
            ctx.restore();                     //返回之前保存过的路径状态和属性
        }
        //小时的刻度，每小时转30deg
        for (let i = 0; i < 12; i++) {
            ctx.save();
            ctx.rotate(30 * i * Math.PI / 180);
            ctx.beginPath();
            ctx.moveTo(0, -79 * this.rem);
            ctx.lineTo(0, -87 * this.rem);
            ctx.closePath();
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2 * this.rem;
            ctx.stroke();
            ctx.restore();
        }
    }

    drawHour = (hour, minute) => {
        let ctx = this.ctx;
        ctx.save();
        ctx.beginPath();
        let hRad = 2 * Math.PI / 12 * hour;
        let mRad = 2 * Math.PI / 12 / 60 * minute;
        ctx.rotate(hRad + mRad);
        ctx.lineWidth = 6 * this.rem;
        ctx.lineCap = "round";                 //设置或返回线条的结束端点样式
        ctx.moveTo(0, 10 * this.rem);
        ctx.lineTo(0, -this.r / 2);
        ctx.stroke();
        ctx.restore();
    }

    drawMinute = (minute) => {
        let ctx = this.ctx;
        ctx.save();
        ctx.beginPath();
        let rad = 2 * Math.PI / 60 * minute;
        ctx.rotate(rad);
        ctx.lineWidth = 3 * this.rem;
        ctx.lineCap = "round";
        ctx.moveTo(0, 10 * this.rem);
        ctx.lineTo(0, -this.r + 26 * this.rem);
        ctx.stroke();
        ctx.restore();
    }

    drawSecond = (second) => {
        let ctx = this.ctx;
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "#c14543";
        let rad = 2 * Math.PI / 60 * second;
        ctx.rotate(rad);
        ctx.moveTo(-3 * this.rem, 20 * this.rem);
        ctx.lineTo(3 * this.rem, 20 * this.rem);
        ctx.lineTo(1, -this.r + 26 * this.rem);
        ctx.lineTo(-1, -this.r + 26 * this.rem);
        ctx.fill();    //填充当前绘图（路径）
        ctx.restore();
    }

    drawDot = (minute) => {
        let ctx = this.ctx;
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.arc(0, 0, 3 * this.rem, 0, 2 * Math.PI, false);
        ctx.fill();
    }

    render() {
        return (
            <canvas className='clock' width="200px" height="200px" ref={(ref) => { this.draw = ref }} ></canvas>
        )
    }
}