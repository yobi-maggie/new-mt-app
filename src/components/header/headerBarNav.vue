<template>
  <nav class="header-bar-nav">

    <ul class="header-nav-first clearfix">
      <template v-for="(nav, index) in navList" >
        <li :key="index" :class="nav.second || nav.third ? 'has-child': ''">
          <a v-if="!!nav.href" :href="nav.href" target="__blank">{{nav.title}}</a>
          <span v-else>{{nav.title}}</span>
          <ul v-if="nav.second" :class="[
          'header-nav-second', 'header-nav-' + nav.class]">
              <li v-for="(item ,index) in nav.second" :key="index">
              <a :href="item.href" target="__blank">{{item.title}}</a></li>
          </ul>
          <div v-else-if="nav.third" :class="[
          'header-nav-second', 'header-nav-' + nav.class]">
            <dl v-for="third in nav.third"
                :key="third.class"
                :class="['header-' + third.class,'header-nav-third']">
              <dt>{{third.title}}</dt>
              <dd v-for="item in third.items" :key="item.title">
                <a :href="item.href">
                  <img v-if="item.imgSrc"
                      :src="item.imgSrc"
                      :alt="item.alt"
                      :title="item.alt" class="appicon">
                  <template v-else> {{item.title}}</template>
                </a>
              </dd>
            </dl>
          </div>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          href: 'https://www.meituan.com/account/userinfo/',
          title: '我的美团',
          class: 'my',
          second: [
            {
              title: '我的订单',
              href: 'https://www.meituan.com/orders/',
            },
            {
              title: '我的收藏',
              href: 'https://www.meituan.com/collections/',
            },
            {
              title: '抵用券',
              href: 'https://www.meituan.com/vouchers/',
            },
            {
              title: '账户设置',
              href: 'https://www.meituan.com/account/settings',
            },
          ],
        },
        {
          title: '手机APP',
          href: 'https://i.meituan.com/mobile/down/meituan',
        },
        {
          href: '',
          title: '商家中心',
          class: 'merchant',
          second: [
            {
              title: '美团餐饮商户中心',
              href: 'http://b.meituan.com/canyin/PC',
            },
            {
              title: '登录商户中心',
              href: 'https://e.meituan.com/',
            },
            {
              title: '美团智能收银',
              href:
                'https://shouyin.meituan.com?utm_source=inner&amp;utm_medium=mtpcsjzx',
            },
            {
              title: '我想合作',
              href:
                'https://ecom.meituan.com/bizsettle/settle/merchantsSettle?utm_source=mt_C_my',
            },
            {
              href: 'https://e.meituan.com/mobile/',
              title: '手机免费开店',
            },
            {
              href: 'https://daili.meituan.com/?comeFrom=mtwebMenu',
              title: '餐饮代理商招募',
            },
            {
              title: '商家申请开票',
              href: 'https://pc.meituan.com?activity_code=mtpcdh',
            },
            {
              title: '免费合作美团排队',
              href: 'https://paidui.meituan.com/?activity_code=168_00038141',
            },
          ],
        },
        {
          href: '',
          title: '美团规则',
          class: 'my',
          second: [
            {
              title: '规则中心',
              href: 'https://www.meituan.com/orders/',
            },
            {
              title: '规则目录',
              href: 'https://www.meituan.com/collections/',
            },
            {
              title: '规则评议院',
              href: 'https://www.meituan.com/vouchers/',
            },
          ],
        },
        {
          title: '网站导航',
          class: 'site',
          third: [
            {
              title: '酒店旅游',
              class: 'jiulv',
              items: [
                {
                  title: '国际机票',
                  href: 'https://www.meituan.com/iflight/',
                },
                {
                  title: '火车票',
                  href: 'https://www.meituan.com/train/',
                },
                {
                  title: '民宿',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '经济型酒店',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '主题酒店',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '商务酒店',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '公寓',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '豪华酒店',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '客栈',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '青年旅舍',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '度假酒店',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '别墅',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '农家院',
                  href: 'https://minsu.meituan.com/',
                },
              ],
            },
            {
              title: '吃美食',
              class: 'meishi',
              items: [
                {
                  title: '烤鱼',
                  href: 'https://hrb.meituan.com/meishi/c20004/',
                },
                {
                  title: '特色小吃',
                  href: 'https://hrb.meituan.com/meishi/c36/',
                },
                {
                  title: '烧烤',
                  href: 'https://hrb.meituan.com/meishi/c36/',
                },
                {
                  title: '自助餐',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '火锅',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '代金券',
                  href: 'https://minsu.meituan.com/',
                },
              ],
            }, {
              title: '看电影',
              class: 'movie',
              items: [
                {
                  title: '热映电影',
                  href: 'https://maoyan.com/films',
                },
                {
                  title: '热门影院',
                  href: 'https://maoyan.com/cinemas',
                },
                {
                  title: '热映电影口碑榜',
                  href: 'https://maoyan.com/cinemas',
                },
                {
                  title: '最受期待电影',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '国内票房榜',
                  href: 'https://minsu.meituan.com/',
                },
                {
                  title: '北美票房榜',
                  href: 'https://minsu.meituan.com/',
                }, {
                  title: '电影排行榜',
                  href: 'https://minsu.meituan.com/',
                },
              ],
            }, {
              title: '手机应用',
              class: 'app',
              items: [
                {
                  alt: '美团app',
                  href: 'https://i.meituan.com/mobile/down/meituan',
                  imgSrc: 'http://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png',
                },
                {
                  alt: '外卖app',
                  href: 'https://waimai.meituan.com/mobile/download/default',
                  imgSrc: 'http://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png',
                },
                {
                  alt: '民宿app',
                  href: 'https://waimai.meituan.com/mobile/download/default',
                  imgSrc: 'https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png',
                },
                {
                  alt: '点评app',
                  href: 'https://waimai.meituan.com/mobile/download/default',
                  imgSrc: 'http://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png',
                },
                {
                  alt: '猫眼app',
                  href: 'https://waimai.meituan.com/mobile/download/default',
                  imgSrc: '//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png',
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
