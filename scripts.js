// script.js
window.onload = function() {
    const canvas = document.getElementById('heartCanvas');
    if (!canvas.getContext) {
        console.log("你的瀏覽器不支援 canvas");
        return;
    }
    
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    // 設定繪圖參數
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    // 開始繪製心形圖案
    ctx.beginPath();

    // 使用參數方程繪製心形
    for (let t = 0; t <= Math.PI * 2; t += 0.01) {
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

        // 放大比例並調整位置
        ctx.lineTo(width / 2 + x * 15, height / 2 - y * 15);
    }

    // 閉合路徑並進行填充和描邊
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
};
ˊ