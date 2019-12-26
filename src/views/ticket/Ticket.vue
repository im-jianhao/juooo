<template>
  <div class="detail-wrapper">
    <div class="detail" v-if="Object.keys(staticData).length > 0">
      <div class="brief detail__brief">
        <div class="brief__bg-wrapper">
          <img :src="staticData.pic" class="brief__bg" />
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
                <img :src="staticData.pic" alt="" class="cover__img" />
              </div>
              <div class="brief__primary__fg__content__info">
                <div class="brief__primary__fg__content__info__name">
                  {{ staticData.show_name }}
                </div>
                <div class="brief__primary__fg__content__info__tag-wrapper">
                  <div class="brief__primary__fg__content__info__tag"></div>
                </div>
                <div class="brief__primary__fg__content__info__price">
                  <span class="brief__primary__fg__content__info__price__range">
                    ¥{{ staticData.price_range }}
                  </span>
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
                  {{ itemList.project_time | sliceWeek }}
                </span>
                <span class="brief__secondary__info__date-time__time">
                  {{ itemList.project_time | sliceWeek(11, 13) }}
                  {{ itemList.session_time }}
                  <van-icon
                    name="arrow"
                    class="brief__secondary__info__date-time__arrow"
                  />
                </span>
              </div>
            </div>
            <div class="brief__secondary__info__place">
              {{ staticData.city.city_name }} |
              {{ staticData.venue.venue_name }}
            </div>
            <div class="brief__secondary__info__address">
              {{ staticData.venue.venue_address }}
            </div>
          </div>
          <div class="brief__secondary__pointer" @click="handleBMap"></div>
        </div>
      </div>
      <van-goods-action>
        <van-goods-action-icon icon="service-o" text="客服" />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          color="linear-gradient(50deg, #ff9a34, #ff4d4a)"
          @click="onSelect"
        />
      </van-goods-action>
      <van-action-sheet v-model="show" title="购票">
        <div class="adapt__left" v-if="ticketPriceList.length > 0">
          <div class="form-date">
            <div class="form-label form-date__label">选择日期</div>
            <div class="form-date__list">
              <div class="date not-margin-right">
                <span class="form-radio form-radio--selected">
                  {{ itemList.project_time }}
                </span>
              </div>
            </div>
          </div>
          <div class="form-schedule">
            <div class="form-label form-schedule__label">选择场次</div>
            <div class="form-schedule__list">
              <div class="schedule-item not-margin-right">
                <span
                  class="form-radio schedule-item__radio form-radio--selected"
                >
                  {{ itemList.session_time }}
                  <span class="schedule-item__radio__status">
                    <span class="schedule-item__radio__status__text">预售</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div class="form-ticket">
            <div class="form-label form-ticket__label">选择价格</div>
            <div class="form-ticket__list">
              <div
                class="form-ticket__list__item"
                v-for="priceItem in ticketPriceList"
                :key="priceItem.ticket_id"
              >
                <div class="ticket">
                  <span class="form-radio">
                    <span class="ticket__price">{{ priceItem.price }}元</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <van-skeleton title :row="1" />
          <van-skeleton title :row="1" />
          <van-skeleton title :row="1" />
        </div>
      </van-action-sheet>
      <div class="center">
        <div class="center__right">
          <div class="detail__plus-tips">
            <div class="card-plus-tips">
              <div class="orange-plus-tips">
                <div class="orange-plus-tips__name">
                  橙PLUS卡
                </div>
                <div class="orange-plus-tips__desc">
                  开通送¥100 最高省138元
                </div>
                <div class="orange-plus-tips__guide">
                  立即开卡
                  <van-icon
                    name="arrow"
                    color="#F5DEA9"
                    size="13"
                    class="orange-plus-tips__icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="center__right__benefit">
            <div class="show-benefit detail__schedule-discount">
              <div>
                <div class="show-benefit-item plus">
                  <span class="show-benefit-item__name">VIP+</span>
                  <span class="show-benefit-item__colon">：</span>
                  <span class="show-benefit-item__content">
                    <div class="plus__desc">
                      V+会员享
                      <span class="plus__desc__benefit"
                        >国内免邮 + 双倍积分</span
                      >
                      <van-icon name="arrow" color="#232323" />
                    </div>
                  </span>
                </div>
                <div class="divider"></div>
              </div>
              <div>
                <div class="show-benefit-item">
                  <span class="show-benefit-item__name">入场</span>
                  <span class="show-benefit-item__colon">：</span>
                  <span class="show-benefit-item__content">
                    <div class="enter">{{ staticData.tips.desc }}</div>
                  </span>
                </div>
                <div class="divider"></div>
              </div>
              <div>
                <div class="show-benefit-item support">
                  <span class="show-benefit-item__name">支持</span>
                  <span class="show-benefit-item__colon">：</span>
                  <span class="show-benefit-item__content">
                    <span class="support__list">
                      <span class="support__list__item">
                        <span
                          class="support__list__item__text"
                          v-for="(item, key) in staticData.support.list"
                          :key="key"
                          >{{ item }}
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="center__left">
          <div
            class="intro detail__intro center__left__intro"
            :style="heightAuto"
          >
            <div class="intro__title">演出介绍</div>
            <div
              class="intro__content"
              v-html="staticData.show_desc.desc"
            ></div>
            <div class="intro__mask" @click="showAllIntro" v-if="!heightAuto">
              展示全部
            </div>
            <div class="intro__more" v-if="!heightAuto"></div>
          </div>
          <div class="tips detail__tips center__left__tips-entry">
            <div class="tips__title">
              <span class="tips__title__text">温馨提醒</span>
              <van-icon name="arrow" :size="12" />
            </div>
            <div class="tips__list">
              <span
                class="tips__list__item"
                v-for="(notice, key) in staticData.show_notice.list"
                :key="key"
              >
                <span class="tips__list__item__dot"></span>
                <span class="tips__list__item__text">{{ notice.title }}</span>
              </span>
            </div>
          </div>
          <div class="recommend detail__recommend center__left__recommend">
            <div class="recommend__title">相关推荐</div>
            <div class="recommend__list">
              <div
                class="item"
                v-for="item in ShowList.slice(0, 3)"
                :key="item.schedular_id"
              >
                <div class="ju-schedule-cell-wrapper cell__base middle">
                  <div class="ju-schedule-cell">
                    <div class="ju-schedule-cell__cover">
                      <img
                        :src="item.pic"
                        alt=""
                        class="ju-schedule-cell__cover__img"
                      />
                    </div>
                    <div class="ju-schedule-cell__info">
                      <div class="ju-schedule-cell__info__date-week">
                        <span class="ju-schedule-cell__info__date-week__date">
                          {{ item.start_show_time | sliceWeek }}
                        </span>
                        <span class="ju-schedule-cell__info__date-week__week"
                          >{{ item.show_time_bottom }}
                          {{ item.start_show_time | sliceWeek(11, 16) }}</span
                        >
                      </div>
                      <div class="ju-schedule-cell__info__name">
                        <div class="ju-schedule-cell__info__name__content ">
                          {{ item.name }}
                        </div>
                      </div>
                      <div class="ju-schedule-cell__info__place">
                        {{ item.city_name }} | {{ item.venue_name }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="item__label"></div>
                <div class="item__price">
                  <span class="item__price__num">￥{{ item.min_price }}</span>
                  <span class="item__price__text">起</span>
                </div>
              </div>
            </div>
            <div class="recommend__more">
              查看更多演出
              <van-icon name="arrow" size="14" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-loading type="spinner" color="#1989fa" v-else />
  </div>
</template>

<script>
import Vue from "vue";
import {
  Icon,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  ActionSheet,
  Skeleton
} from "vant";

Vue.use(Icon)
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(ActionSheet)
  .use(Skeleton);
export default {
  props: ["id"],

  data() {
    return {
      staticData: {},
      itemList: {},
      ShowList: [],
      heightAuto: "",
      show: false,
      ticketPriceList: []
    };
  },

  async mounted() {
    const ScheduleInfo = await this.$axios.get(
      "/Schedule/Schedule/getScheduleInfo",
      {
        params: {
          schedular_id: this.id,
          version: "6.0.9",
          referer: 2
        }
      }
    );

    let data = ScheduleInfo.data.data;

    this.staticData = data.static_data;
    this.itemList = data.item_list[0];

    const ShowList = await this.$axios.get("/Show/Search/getShowList", {
      params: {
        category: 35,
        city_id: this.staticData.city.city_id,
        version: "6.0.9",
        referer: 2
      }
    });

    this.ShowList = ShowList.data.data.list;
  },

  filters: {
    sliceWeek(target, start = 0, count = 10) {
      return target.slice(start, count);
    }
  },

  methods: {
    showAllIntro() {
      this.heightAuto = "height:auto";
    },
    async onSelect(item) {
      this.show = true;
      const ticketData = await this.$axios.get(
        "/Schedule/Schedule/getScheduleTicket",
        {
          params: {
            schedular_id: this.id,
            version: "6.0.9",
            referer: 2
          }
        }
      );

      this.ticketPriceList = ticketData.data.data.list;
      await this.$nextTick();
    },

    handleBMap() {
      this.$router.push({
        name: "venueAddress",
        query: {
          venueId: this.staticData.venue.venue_id
        },
        params: {
          venueCoordinate: this.staticData.venue.venue_coordinate,
          venueName: this.staticData.venue.venue_name,
          venueAddress: this.staticData.venue.venue_address
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/styles/border';
.detail-wrapper
  width 100%
  height 100%
  overflow hidden
.detail
  width 100%
  height 100%
  overflow scroll
  background-color: #f5f5f5;
.detail__brief
  position relative
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
.show-benefit
  background-color: #fefefe;
.detail__schedule-discount
  margin-top: .132rem;
.show-benefit-item
  display: flex;
  padding: .127rem .165rem;
.divider
  margin: 0 .165rem;
  $border(0 0 1px 0,#ebebeb)
.show-benefit-item__name
  width: .497rem;
  font-size: 0.15rem;
  color: #999999;
  display: inline-block;
  text-align: justify;
  text-align-last: justify;
  height: .265rem;
  line-height: .265rem;
  flex-shrink: 0;
.show-benefit-item__colon
  font-size: 0.15rem;
  color: #999999;
  height: .265rem;
  line-height: .265rem;
.show-benefit-item__content
  flex-grow: 1;
  margin-left: -0.0663rem;
.enter
  font-size: .14rem;
  color: #232323;
  line-height: .265rem;
  padding-top: .01rem;
  margin-left: .165rem;
  margin-bottom: -0.06rem;
.support__list
  display: flex;
  align-items: center;
  font-size: .13rem;
  color: #999999;
  flex-wrap: nowrap;
  height: .265rem;
  line-height: .265rem;
  overflow: hidden;
.intro
  height: 7rem;
  background-color: #fefefe;
  padding: 0 .165rem;
  overflow: hidden;
  position: relative;
.detail__intro
  margin-top: .132rem;
.tips
  height: 1rem;
  padding: .22rem .165rem 0 .165rem;
  background: #fefefe;
.detail__tips
  margin-top: .132rem;
.recommend
  padding: .243rem .165rem .7rem .165rem;
  background: #fefefe;
.detail__recommend
  margin-top: .132rem;
.intro__title
  font-size: .21rem;
  font-weight: bold;
  color: #232323;
  margin-top: .182rem;
.intro__content
  margin-top: .121rem;
  padding-bottom: .276rem;
.intro__mask
  position: absolute;
  left: 0;
  right: 0;
  height: .43rem;
  bottom: 0;
  background-color: white;
  color: #ff6743;
  font-size: .15rem;
  line-height: .15rem;
  text-align: center;
  padding-top: .12rem;
.intro__more
  position: absolute;
  width: 100%;
  height: 1.11rem;
  left: 50%;
  transform: translateX(-50%);
  bottom: .42rem;
  text-align: center;
  font-size: .15rem;
  line-height: .15rem;
  font-weight: bold;
  color: #ff6743;
  padding-top: .68rem;
  background-image: url('https://m.juooo.com/static/img/white-mask.ff6558e.png');
  background-repeat: no-repeat;
.detail__plus-tips
  padding: 0 .165rem .182rem .165rem;
  background-color: white;
.orange-plus-tips
  position: relative;
  overflow: hidden;
  width: 100%;
  height: .486rem;
  background-image: linear-gradient(-4deg, #1e1e1e, #464542);
  border-radius: .05rem;
  display: flex;
  align-items: center;
.orange-plus-tips__name
  font-size: 0.22rem;
  transform: scale(0.5) translateX(-0.36rem) ;
  background-image: linear-gradient(0deg, #f5dea9, #f8d583);
  border-radius: 0.022rem;
  width: 1.237rem;
  height: 0.386rem;
  text-align: center;
  line-height: 0.386rem;
.orange-plus-tips__desc
  font-size: .154rem;
  color: #f5dea9;
  white-space: nowrap;
  line-height: .176rem;
  transform: translateX(-30px);
.orange-plus-tips__guide
  font-size: .12rem;
  line-height: .176rem;
  font-weight: 500;
  color: #f5dea9;
  margin-right: .066rem;
.plus__desc
  display: flex;
  height: 100%;
  align-items: center;
  font-size: .132rem;
  color: #222222;
  padding-left: .165rem;
  padding-top: .011rem;
  line-height: .132rem;
.plus__desc__benefit
  color: #ff6743;
  padding-left: .066rem;
  flex: 1;
.support__list__item__text
  display: inline-block;
  padding: 1px .165rem 0 .165rem;
.tips__title
  display: flex;
  font-size: .21rem;
  height: .21rem;
  line-height:.21rem;
  font-weight: bold;
  color: #232323;
  align-items: center;
.tips__list
  margin-top: 0.198rem;
  display: flex;
  justify-content: space-between;
.tips__title__text
  flex-grow: 1;
.tips__list__item
  display: inline-flex;
  align-items: center;
.tips__list__item__dot
  display: inline-block;
  width: 0.044rem;
  height: 0.044rem;
  background-color: #999999;
  border-radius: 50%;
.tips__list__item__text
  color: #999999;
  font-size: .14rem;
  margin-left: .077rem;
  height: .14rem;
  line-height: .14rem;
.recommend__title
  font-size: .21rem;
  height: .21rem;
  line-height: .21rem;
  font-weight: bold;
  color: #232323;
.recommend__list
  margin-top: .2rem;
.recommend__more
  width: 1.75rem;
  height: .4rem;
  border-radius: 0.044rem;
  $border(1px 1px 1px 1px,#ff6743)
  margin-left: auto;
  margin-right: auto;
  font-size: .165rem;
  color: #ff6743;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: bottom;
  line-height: .4rem;
.item
  display: flex;
  height: 1.91rem;
  position: relative;
.ju-schedule-cell-wrapper
  width: 100%;
.item__label
  position: absolute;
  top: 1.1rem;
  left: 1.32rem;
.item__price
  position: absolute;
  display: flex;
  align-items: center;
  left: 1.3rem;
  top: 1.4rem;
.item__price__num
  display: inline-block;
  font-size: .176rem;
  font-weight: bold;
  color: #ff6743;
  height: .176rem;
  line-height: .176rem;
.item__price__text
  display: inline-block;
  font-size: .12rem;
  height: .12rem;
  line-height: .12rem;
  color: #999999;
  margin-left: .05rem;
.middle
  .ju-schedule-cell
    display: flex;
    height: 1.59rem;
    width: 100%;
  .ju-schedule-cell__cover
    width: 1.16rem;
    height: 1.59rem;
    flex-shrink: 0;
    position: relative;
  .ju-schedule-cell__info
    margin-left: .165rem;
    flex: 1;
  .ju-schedule-cell__cover__img
    width: 100%;
    height: 100%;
    border-radius: .044rem;
  .ju-schedule-cell__info__date-week
    margin-top: .044rem;
    display: flex;
    align-items: center;
    color: #232323;
  .ju-schedule-cell__info__name
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: .618rem;
  .ju-schedule-cell__info__place
    font-size: .13rem;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: .154rem;
    line-height: .154rem;
  .ju-schedule-cell__info__date-week__date
    display: inline-block;
    font-weight: 700;
    height: .176rem;
    line-height:.176rem;
    font-size: .176rem;
  .ju-schedule-cell__info__date-week__week
    display: inline-block;
    font-size: .132rem;
    height: .132rem;
    line-height: .132rem;
    margin-left: .055rem;
    vertical-align: bottom;
  .ju-schedule-cell__info__name__content
    font-size: .176rem;
    font-weight: 700;
    color: #232323;
    line-height: .254rem;
    height: .508rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
.form-date
  padding: .243rem 0 0 .165rem;
.form-schedule
  padding: .243rem 0 0 .165rem;
.form-ticket
  padding: .243rem 0 0 .165rem;
.form-label
  font-size: .154rem;
  font-weight: bold;
  color: #232323;
  line-height: initial;
.form-date__list
  padding-right: .033rem;
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  width: 100%;
  line-height: .608rem;
  flex-wrap: wrap;
.date
  margin: .132rem .0996rem 0 0;
  flex-shrink: 0;
  position: relative;
.not-margin-right
  margin-right: 0;
.form-radio
  min-width: 1.18rem;
  width 1.21rem
  height: .442rem;
  display: block;
  border-radius: .044rem;
  text-align: center;
  line-height: .442rem;
  padding: 0px .2rem;
  white-space: nowrap;
  width: auto;
  color: #232323;
  font-size: 0.154rem;
  background-color: #f5f5f5;
  cursor: pointer;
.form-schedule__list
  padding-right: .033rem;
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  width: 100%;
  line-height: .609rem;
  flex-wrap: wrap;
.schedule-item
  margin: .132rem 0.32rem 0 0;
  flex-shrink: 0;
  position: relative;
.schedule-item__radio__status
  vertical-align: middle;
  background-color: #ff6743;
  border-radius: .0221rem;
  color: white;
  position: relative;
  display: inline-block;
  width: .3425rem;
  height: .16575rem;
  overflow: hidden;
  margin-left: .082rem;
.schedule-item__radio__status__text
  position: absolute;
  display: inline-block;
  transform: scale(0.5) translate(-50%, -50%);
  transform-origin: top left;
  top: 50%;
  left: 50%;
  font-size: 0.221rem;
.form-ticket__list
  padding-right: 0.033rem;
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  width: 100%;
  flex-wrap: wrap;
.form-ticket__list__item
  margin: .132rem .132rem 0 0;
  flex-shrink: 0;
  position: relative;
.ticket
  position: relative;
  display: flex;
  align-items: center;
.ticket__price
  font-size: .165rem;
  vertical-align: middle;
</style>
