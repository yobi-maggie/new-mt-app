<template>
    <div class="nav-bar-position">
        <i class="header-icon iconfont position-icon"></i>
        <span>哈尔滨</span>
        <a href="#">切换城市</a>
        [
            <a href="#">阿城区</a>
            <a href="#">双城</a>
            <a href="#">巴彦县</a>
        ]
        <a href="#">立即登录</a>
        <a href="#">注册</a>
    </div>
</template>

<style lang="less">
    .header-icon.position-icon::before {
        content: "\e60a";
        font-family: "com_header"
    }
</style>
