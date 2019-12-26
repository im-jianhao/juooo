<template>
  <div class="detail-wrapper">
    <div class="detail">
      <div class="brief detail__brief">
        <div class="brief__bg-wrapper">
          <img
            src="https://image.juooo.com/group1/M00/03/67/rAoKmV34mYGAO-S9AAxFRkHQ3Pg292.jpg"
            class="brief__bg"
          />
        </div>
        <div class="brief__mask"></div>
        <div class="brief__primary">
          <div class="brief__primary__fg">
            <div class="brief__primary__fg__title">
              <span class="brief__primary__fg__title__text">演出详情</span>
              <van-icon
                name="arrow-left"
                class="brief__primary__fg__title__back"
              />
              <van-icon name="share" class="brief__primary__fg__title__share" />
              <van-icon
                name="wap-home-o"
                class="brief__primary__fg__title__home"
              />
            </div>
            <div class="brief__primary__fg__content">
              <div class="cover brief__primary__fg__content__cover">
                <img
                  src="https://image.juooo.com/group1/M00/03/67/rAoKmV34mYGAO-S9AAxFRkHQ3Pg292.jpg"
                  alt=""
                  class="cover__img"
                />
              </div>
              <div class="brief__primary__fg__content__info">
                <div class="brief__primary__fg__content__info__name">
                  《2020段宜恩“On Your Mark”FANMEETING上海安可场》-上海站
                </div>
                <div class="brief__primary__fg__content__info__tag-wrapper">
                  <div class="brief__primary__fg__content__info__tag"></div>
                </div>
                <div class="brief__primary__fg__content__info__price">
                  <span class="brief__primary__fg__content__info__price__range"
                    >¥480-1380</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="brief__secondary">
          <div class="brief__secondary__info">
            <div class="brief__secondary__info__date-time-wrapper">
              <div class="brief__secondary__info__date-time">
                <span class="brief__secondary__info__date-time__date">
                  2020.01.11
                </span>
                <span class="brief__secondary__info__date-time__time">
                  周六 19:30
                  <van-icon
                    name="arrow"
                    class="brief__secondary__info__date-time__arrow"
                  />
                </span>
              </div>
            </div>
            <div class="brief__secondary__info__place">
              上海 | 国家会展中心（上海）虹馆EH
            </div>
            <div class="brief__secondary__info__address">
              上海市青浦区崧泽大道333号(西虹桥商务区)
            </div>
          </div>
          <div class="brief__secondary__pointer"></div>
        </div>

        <div></div>
      </div>
      <div class="bottom-bar detail__bottom-bar">
        <div class="bottom-bar__client-service">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAb1BMVEUAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmbw3/OPAAAAJHRSTlMAH4DvLAySB/Tg05n5rk3opHxiwKCKOhUP4qh0M9jNbli4hSkY6Xp9AAABR0lEQVQ4y52R6ZKCMBAGB8IREg4FEVA8drff/xlXsHZLNAhl/yJDJ1/NjHxInNuzBn22eSzztL7iH+W3c15eABRVllX3r9zt1YCqAxkJagXULs8C0UNaGwH21duCforKNWyfvT3o/UtRw1MxPsFVXrjCaTqmEjbiYAPlpGBIPZfopZjHczA+OPNk8HC8QD6zBLhM74VuMZxkxYZEZkgwf303VkFaur0yBWWbsZGCkcDlBYwUt59hAklk4egSj2CjwQiHHWexeOC7RB88ibNh5wYVyntRQoWRlIMsiXIgFYiWxQhWi6ujVzezfjzDwLv3A++Gga9e4Y0mUqBLcfINqKiRO7EXhOJmB9dYltmDkRU0CeQrvJ8TbGSGPgFI+tsS6hTO4ZyYMWKsAfhqZY4KvdtpRtRFZFlUWTnGLkRXnizQdwBdL5/yC+1CKknvBpjdAAAAAElFTkSuQmCC"
            class="bottom-bar__client-service__img"
          />
          <div class="bottom-bar__client-service__text">客服</div>
        </div>
        <div class="bottom-bar__btn-wrapper">
          <div class="bottom-bar__btn">
            立即购买
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  props: ["id"],

  async mounted() {
    // const ScheduleInfo = await this.$axios.get(
    //   "/Schedule/Schedule/getScheduleInfo",
    //   {
    //     params: {
    //       schedular_id: this.id,
    //       version: "6.0.9",
    //       referer: 2
    //     }
    //   }
    // );
    // console.log(ScheduleInfo);
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/styles/border';
.detail
  background-color: #f5f5f5;
.brief
  background-color: #fefefe;
.brief__bg-wrapper
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 2.4rem;
  overflow: hidden;
.brief__bg
  width: 100%;
  height: 100%;
  background-color: #b8abab;
  filter: blur(0.22rem);
.brief__mask
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  height: 2.4rem;
  background-color: rgba(0,0,0,0.24);
  overflow: hidden;
.brief__primary
  position: relative;
  height: 2.4rem;
  overflow: hidden;
.brief__primary__fg
  position: relative;
  height: 100%;
.brief__primary__fg__title
  position: relative;
  height: .49rem;
.brief__primary__fg__content
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0 0.165rem;
  position: relative;
.brief__primary__fg__title__text
  text-align: center;
  font-size: 0.2rem;
  font-weight: bold;
  color: #fefefe;
  height: .49rem;
  line-height: .49rem;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
.brief__primary__fg__title__back
  display: block;
  height: .49rem;
  width: .43rem;
  position: absolute;
  left: 0;
  text-align: center;
  line-height: .49rem;
  font-size: .3rem;
  color: white;
.brief__primary__fg__title__share
  width: .386rem;
  height: .49rem;
  display: block;
  position: absolute;
  top: 0;
  right: .47rem;
  text-align: center;
  line-height: .49rem;
  font-size: .3rem;
  color: white;
.brief__primary__fg__title__home
  width: .386rem;
  height: .49rem;
  display: block;
  position: absolute;
  top: -0.01rem;
  right: .08rem;
  text-align: center;
  line-height: .49rem;
  font-size: .3rem;
  color: white;
.cover
  width: 100%;
  height: 100%;
  background-color: #aaaaaa;
  border-radius: 0.044rem;
.brief__primary__fg__content__cover
  width: 1.16rem;
  height: 1.58rem;
  margin-top: 0.165rem;
  flex-shrink: 0;
.cover__img
  width: 100%;
  height: 100%;
  border-radius: 0.044rem;
.brief__primary__fg__content__info
  margin-top: 0.248rem;
  margin-left: 0.16rem;
  display: flex;
  flex-direction: column;
.brief__primary__fg__content__info__name
  font-size: 0.19rem;
  line-height: 0.22rem;
  font-weight: bold;
  color: #fefefe;
  min-height: .648rem;
  word-break: break-all;
.brief__primary__fg__content__info__tag-wrapper
  overflow: hidden;
  height: 0.187rem;
  margin-top: 0.18rem;
.brief__primary__fg__content__info__price
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
  padding-bottom: 0.088rem;
  margin-top: 0.027rem;
.brief__primary__fg__content__info__tag
  color: #fefefe;
  display: flex;
  align-items: center;
.brief__primary__fg__content__info__price__range
  font-size: 0.21rem;
  font-weight: bold;
  height: 0.21rem;
  line-height: 0.21rem;
  color: #fefefe;
  display: inline-block;
  white-space: nowrap;
.brief__secondary
  padding: 0 0.165rem 0.237rem 0.165rem;
  display: flex;
.brief__secondary__info
  display: flex;
  flex-direction: column;
  flex-grow: 1;
.brief__secondary__info__date-time-wrapper
  margin-top: .248rem;
  font-size: .20rem;
  color: #232323;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
.brief__secondary__info__place
  font-size: .165rem;
  font-weight: bold;
  color: #232323;
  margin-top: .165rem;
  margin-right: .276rem;
.brief__secondary__info__address
  font-size: .13rem;
  margin-top: .05rem;
  margin-right: 0.276rem;
  color: #666;
.brief__secondary__info__date-time
  display: flex;
  align-items: center;
  height: .187rem;
  line-height: .187rem;
  overflow: hidden;
.brief__secondary__info__date-time__date
  display: inline-block;
  font-weight: bold;
  height: .187rem;
  line-height: .187rem;
  margin-right: .05rem;
  display: flex;
  align-items: center;
.brief__secondary__info__date-time__time
  display: inline-block;
  font-size: .13rem;
  height: .187rem;
  line-height: .187rem;
  display: flex;
  align-items: center;
.brief__secondary__info__date-time__arrow
  font-size: .22rem;
  color: #232323;
  margin-left: .06rem;
  transform: scale(0.5);
  transform-origin: 0% 50%;
  line-height: .22rem;
.brief__secondary__info__place
  font-size: .16rem;
  font-weight: bold;
  color: #232323;
  margin-top: .165rem;
  margin-right: .276rem;
.brief__secondary__info__address
  font-size: .13rem;
  margin-top: .05rem;
  margin-right: 0.276rem;
  color: #666;
.brief__secondary__pointer
  flex-grow: 0;
  flex-shrink: 0;
  margin-top: .59rem;
  width: .442rem;
  height: .442rem;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAMAAAA6jerHAAABUFBMVEUAAAD/b0D/dj7/dD//dD//bkD/hjn/gzr/gzr/jTf/cj//hjr/YUT/cUD/fjz/fjz/cED/iDn/fTz/dT7/aUL/cj//ej3/bkH/YUT/jjj/a0H/hzn/YkT/b0D/ej3/YkT/iDn/fTz/ZET/dz7/akL/jjf/YUT/cz//jjf/akH/YEX/a0H/X0X/jTj/eT3/hDr/jTf/ezz/fD3/eT3/ZkP/ijn/Y0T/eT7/fD3/iDn/dz7/gDz/Z0P/izj/fD3/gTv/bEH/jTj/YEX/dT//hzn/fzz/YUX/gjv/aEP/gjv/YEX/a0L/gDz/fTz/X0X/dz7/b0D/YEX/YEX/YUX/X0X/X0X/jjj/X0X/aUL/ZEP/hDr/a0H/Z0P/gjv/hzn/YkT/bUH/dD//fjz/iTn/gDv/b0D/ckD/izj/eD7/dj7/ej3/ZkP/hjr/YUX/fD3/jTjE6Qr8AAAAWHRSTlMAAwsJBlEtIte/vayUd3dsa09LNy3+/ff29vPy8OjZ1dTOv7KxsK6opKGdjIiHg3BsVCkb+fn29vTz8u7j4+Dg2c7NyMbDtbOoqKWXl5eNiYN9cXBuSTYm/xOd2QAAAeBJREFUOMt90ldbIjEUBuBvGiIg3d7L6trddXvvvdhFURRQGQvy/+9MDMlJxhm/6/dJToOejpXk2MvK1WA8melAeHKdjXq9Urna3z88PDn5mgshOx8b3ChUq40XAsRabHFT18z1dc+SpRv7ATONgLm48CcdMm5nqxUwNW7884Sr0MMoc16dkWZFGYmUqVaz7en0hxQtzVmvmFhE0f6tOTud4iZmFPT+Tzr99538jJnT4yKvWjPxPG6THyFzPAs4/WS+22pwk8wIVB5wkKNtfHG10X2WD5XLHhapsRi0PO6WpjQPWv1PGJmRpjSBt6qxRybypDl4g6dqQKsmWpXm4AnohCwTWRyVGLrcA03aNpEtH2JoUG0jZqKiMkMYUxtLm6hLmr1RJNUJjVhGSR+kOZrGMkfizDI6yipztIkYncfzAplCL0PCNItAnE7olZqnN0APjQJY1m864TmA4yXKZJobfB6vybDNdw8P8wGRGbLBklFGnJBpmlui2XHDqG0I88lqn84LhsgYD/Xtop18j++Hm+Y2VJbo7k3zD1r+hxedCqwzrOgFBJJVnwnD0DrupCtY0AJCsmaaFEIzr5s5ROQ3mV8WojIrG5uONrB+CPTNxT1xp7iZcIB7VepZ31zQ3AD3qlOhjBDHJAAAAABJRU5ErkJggg==');
  background-repeat: no-repeat;
  background-position: center;
  background-size: .198rem .243rem;
  background-color: #ededed;
  outline: none;
  border-radius: 50%;
.bottom-bar
  $border(1px 1px 1px 1px,#ebebeb)
  height: .587rem;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  background-color: #fefefe;
.detail__bottom-bar
  position: fixed;
  z-index: 10;
  bottom: 0;
.bottom-bar__client-service
  width: .563rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
.bottom-bar__client-service__img
  width: .221rem;
  height: .221rem;
.bottom-bar__client-service__text
  font-size: .11rem;
  color: #666666;
.bottom-bar__btn-wrapper
  width: 100%;






</style>
