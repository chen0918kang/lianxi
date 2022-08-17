<template>
<!-- 商家销量统计的横向柱状图 -->
  <div class="com-container">

<div class="com-chart" ref="seller_ref">
  商家销量统计的横向柱状图
</div>
  </div>
</template>
<script>
export default {

  data () {
    return {
      chartInstance: null,
      allData: null,
      showData: null,
      currentPage: 1, // 当前显示的页数
      totalPage: 0, // 一共有多少页
      timerId: null // 定时器标识
    }
  },
  mounted () {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    // 屏幕适配
    this.screenAdapter()
  },
  methods: {
    // 初始化echarts对象
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.seller_ref, 'chalk')
      // 初始化配置
      const initOption = {

        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category'
        },
        title: {
          text: '▎商家销售量统计',
          textStyle: {
            fontSize: 66
          },
          left: 20,
          top: 20
        },
        grid: {
          top: '20%',
          left: '3%',
          right: '6%',
          bottom: '3%',
          containLabel: true // 涵盖了文字

        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            z: 0,
            lineStyle: {
              width: 66,
              color: '#2D3443'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: 66,
            label: {
              show: true,
              position: 'right',
              textStyle: {
                color: 'white'
              }
            },
            itemStyle: {
              barBorderRadius: [0, 33, 33, 0],
              // 渐变颜色
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                // 百分之0 状态的颜色值
                {
                  offset: 0,
                  color: '#5052EE'
                }, {
                  offset: 1,
                  color: '#AB6EE5'

                }
              ])
            }
          }
        ]
      }
      this.chartInstance.setOption(initOption)
      // 进行鼠标事件的监听
      this.chartInstance.on('mouseover', () => {
        clearInterval(this.timerId)
      })
      this.chartInstance.on('mouseout', () => {
        this.startInterval()
      })
    },

    // 获取数据
    async getData () {
      const { data: ret } = await this.$http.get('seller')
      this.allData = ret
      // 对数据排序
      this.allData.sort((a, b) => {
        return a.value - b.value // 从小到大
      })
      // 五个元素一页
      this.totalPage = this.allData.length % 5 === 0 ? this.allData.length / 5 : this.allData.length / 5 + 1

      this.updateChart()
      // 开启定时器
      this.startInterval()
    },
    // 更新图表
    updateChart () {
      // 把数据分页展示  重新定义数组，选择性展示
      // showData根据页数从截取allData中截取响应数据
      const start = (this.currentPage - 1) * 5 // 0
      const end = this.currentPage * 5 // 5
      this.showData = this.allData.slice(start, end)

      const sellerNames = this.showData.map((item) => {
        return item.name
      })
      const sellerValues = this.showData.map((item) => {
        return item.value
      })
      const dataOption = {
        yAxis: {
          data: sellerNames
        },

        series: [
          {
            data: sellerValues

          }
        ]
      }
      this.chartInstance.setOption(dataOption)
    },
    // 定时器，循环页码数据
    startInterval () {
      if (this.timerId) {
        clearInterval(this.timerId)
      }
      // 保险操作先判断是否运行定时器，运行了 结束，重新开始
      this.timerId = setInterval(() => {
        this.currentPage++
        if (this.currentPage > this.totalPage) {
          this.currentPage = 1
        }

        this.updateChart()
      }, 3000)
    },
    // 屏幕适配
    screenAdapter () {
      const titleFontSize = this.$refs.seller_ref.offsetWidth / 100 * 3.6
      const adapterOption = {

        title: {
          textStyle: {
            fontSize: titleFontSize
          }
        },
        tooltip: {
          axisPointer: {
            lineStyle: {
              width: titleFontSize
            }
          }
        },
        series: [
          {
            barWidth: titleFontSize,
            itemStyle: {
              barBorderRadius: [0, titleFontSize / 2, titleFontSize / 2, 0]

            }
          }
        ]
      }
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  },
  // 销毁周期  结束定时器
  destroyed () {
    clearInterval(this.timerId)
    // 注销屏幕适配
    window.removeEventListener('resize', this.screenAdapter)
  }
}
</script>
<style lang="less" scoped>

</style>
