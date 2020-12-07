<template>
    <div class="header-bar-position">
        <i class="header-icon iconfont position-icon"></i>
        <span class="current-city">哈尔滨</span>
        <a href="#" class="change-city">切换城市</a>
        <div class="near-citys">
        [<a href="#" class="city-guess">阿城区</a>
            <a href="#" class="city-guess">双城</a>
            <a href="#" class="city-guess">巴彦县</a>]
        </div>
        <div class="user-entry">
            <a href="#" class="user-up">立即登录</a>
            <a href="#">注册</a>
        </div>
    </div>
</template>

<style lang="less">
    .header-icon.position-icon::before {
        content: "\e60a";
        font-family: "com_header"
    }
</style>
