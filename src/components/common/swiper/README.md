### 下载后放入需要components文件夹下的公共文件夹

### 在使用轮播的的组件中引入 index.js
> import {Swiper,SwiperItem} form 'xxx'

#### 使用的模板是<div class="wrapper">
    <swiper>
      <swiper-item v-for="item in datas" :key="item.id">
        <a :href="item.link">
          <img :src="item.imgurl" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>