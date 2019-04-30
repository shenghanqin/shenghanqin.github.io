$(function(){

    // 获取 DOM 节点
    var bgAura1 = $('.bg_aura_1');
    var bgAura2 = $('.bg_aura_2');
    var bgAura3 = $('.bg_aura_3');

/*

auraAni1
obj         DOM 节点
maxScale    缩放最大值
minScale    缩放最小值
duration    动画时间
delay       延迟时间
*/

    var  auraAni1 = function (obj, maxScale, minScale, duration, delay) {

        // step1 完成第一步加载，onComplete开始执行 step2
        var step1 = function () {
            TweenMax.to(obj, duration * 0.55, {
                x: -15,
                scaleX: maxScale,
                scaleY: maxScale,
                delay: delay,
                onComplete: step2
            });
        };

        // step2 从一个小的起始状态后执行 step3
        var step2 = function () {
            TweenMax.fromTo(obj, duration * 0.45, {
                x: 10,
                opacity: 0.2,
                scaleX: minScale,
                scaleY: minScale,
                delay: 0.2
            }, {
                x: 0,
                opacity: 1,
                scaleX: (maxScale - minScale)/3,
                scaleY: (maxScale -minScale)/3,
                // delay: 0.2,
                ease:Back.ease,
                onComplete: step3
            });
        };

        // step3 从一个小的起始状态后执行 step2
        var step3 = function () {
            TweenMax.fromTo(obj, duration * 0.55, {
                x: 0,
                opacity: 1,
                scaleX: (maxScale - minScale)/3,
                scaleY: (maxScale -minScale)/3,
                // delay: 0.2
            }, {
                x: -15,
                opacity: 0.05,
                scaleX: maxScale,
                scaleY: maxScale,
                delay: 0.2,
                ease:Back.ease,
                onComplete: step2
            });
        };

        return {
            animate: step1
        }

    };


    setTimeout(function () {

        // 调用参数且执行animate()
        auraAni1(bgAura1, 3.6, 0.1, 1.8, 0).animate();
        auraAni1(bgAura2, 5.4, 0.2, 1.8, 0.6).animate();
        auraAni1(bgAura3, 12, 0.4, 1.8, 1.2 ).animate();

    }, 2000);

    // TweenMax.to(bgAura1, 0.1, {
    //     scaleX: 0.7,
    //     scaleY: 0.7,
    //     delay: 0
    // });

    // TweenMax.to(bgAura2, 0.1, {
    //     scaleX: 1,
    //     scaleY: 1,
    //     delay: 0
    // });

});