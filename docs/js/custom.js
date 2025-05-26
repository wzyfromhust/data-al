document.addEventListener('DOMContentLoaded', function() {
    // 创建切换按钮（不再设置文本内容，使用 CSS 伪元素）
    var toggleButton = document.createElement('button');
    toggleButton.className = 'sidebar-toggle';
    document.body.appendChild(toggleButton);

    // 设置初始状态 - 默认在桌面端显示侧边栏，移动端隐藏
    if (window.innerWidth <= 768) {
        document.body.classList.add('nav-hidden');
    }

    // 添加点击事件
    toggleButton.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('nav-hidden');
    });

    // 添加键盘快捷键 (Alt+S)
    document.addEventListener('keydown', function(e) {
        if (e.altKey && e.key === 's') {
            e.preventDefault();
            document.body.classList.toggle('nav-hidden');
        }
    });

    // 添加移动端滑动手势支持
    var startX;
    var isDragging = false;

    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].pageX;
        isDragging = true;
    }, { passive: true });

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
    }, { passive: true });

    document.addEventListener('touchend', function() {
        isDragging = false;
    }, { passive: true });

    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            document.body.classList.add('nav-hidden');
        }
    });
}); 