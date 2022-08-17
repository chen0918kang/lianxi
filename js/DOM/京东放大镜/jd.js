window.addEventListener('load', function() {
    var yuan = document.querySelector('.yuan');
    var zhe = document.querySelector('.zhe');
    var da = document.querySelector('.da');
    // 1. 当我们鼠标经过 yuan 就显示和隐藏 zhe 遮挡层 和 da 大盒子
    yuan.addEventListener('mouseover', function() {
        zhe.style.display = 'block';
        da.style.display = 'block';
    })
    yuan.addEventListener('mouseout', function() {
            zhe.style.display = 'none';
            da.style.display = 'none';
        })
        // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    yuan.addEventListener('mousemove', function(e) {
        // (1). 先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x, y);
        // (2) 减去盒子高度 300的一半 是 150 就是我们zhe 的最终 left 和top值了
        // (3) 我们zhe 移动的距离
        var zheX = x - zhe.offsetWidth / 2;
        var zheY = y - zhe.offsetHeight / 2;
        // (4) 如果x 坐标小于了0 就让他停在0 的位置
        // 遮挡层的最大移动距离
        var zheMax = yuan.offsetWidth - zhe.offsetWidth;
        if (zheX <= 0) {
            zheX = 0;
        } else if (zheX >= zheMax) {
            zheX = zheMax;
        }
        if (zheY <= 0) {
            zheY = 0;
        } else if (zheY >= zheMax) {
            zheY = zheMax;
        }
        zhe.style.left = zheX + 'px';
        zhe.style.top = zheY + 'px';
        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        // 大图
        var daIMg = document.querySelector('.datu');
        // 大图片最大移动距离
        var daMax = daIMg.offsetWidth - da.offsetWidth;
        // 大图片的移动距离 X Y
        var daX = zheX * daMax / zheMax;
        var daY = zheY * daMax / zheMax;
        daIMg.style.left = -daX + 'px';
        daIMg.style.top = -daY + 'px';

    })

})