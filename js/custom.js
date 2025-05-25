document.addEventListener('DOMContentLoaded', function() {
    // 创建切换按钮
    var toggleButton = document.createElement('button');
    toggleButton.innerHTML = '≡';
    toggleButton.className = 'sidebar-toggle';
    document.body.appendChild(toggleButton);

    // 添加点击事件
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('nav-hidden');
    });

    // 添加移动端滑动手势支持
    var startX;
    var isDragging = false;

    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].pageX;
        isDragging = true;
    });

    document.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        
        var currentX = e.touches[0].pageX;
        var diff = currentX - startX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // 向右滑动，显示侧边栏
                document.body.classList.remove('nav-hidden');
            } else {
                // 向左滑动，隐藏侧边栏
                document.body.classList.add('nav-hidden');
            }
            isDragging = false;
        }
    });

    document.addEventListener('touchend', function() {
        isDragging = false;
    });
}); 