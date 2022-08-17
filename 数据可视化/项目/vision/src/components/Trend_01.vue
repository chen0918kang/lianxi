<template>
  <div class="com-container">
<div class="com-chart" ref="trend_ref"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      chartInstane: null,
      timeArr: null
    }
  },
  mounted () {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  destroyed () {
    window.removeEventListener('resize', this.screenAdapter)
  },
  methods: {
    // 初始化
    initChart () {
      this.chartInstane = this.$echarts.init(this.$refs.trend_ref, 'chalk')
      const initOption = {
        grid: {
          left: '3%',
          top: '35%',
          right: '4%',
          bottom: '1%',
          containLabel: true // 文字归为坐标轴
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          left: 20,
          top: '15%',
          icon: 'circle'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false // 紧贴边缘
        },
        yAxis: {
          type: 'value'
        }
      }

      this.chartInstane.setOption(initOption)
    },
    // 获得数据
    async getData () {
      const { data: ret } = await this.$http.get('trend')
      this.allData = ret
      this.updateChart()
    },
    // 处理数据
    updateChart () {
      // 颜色渐变的数据值
      const colorArr1 = [
        'rgba(11,168,44,0.5)',
        'rgba(44,110,255,0.5)',
        'rgba(22,242,217,0.5)',
        'rgba(254,33,30,0.5)',
        'rgba(250,105,0,0.5)'
      ]
      const colorArr2 = [
        'rgba(11,168,44,0)',
        'rgba(44,110,255,0)',
        'rgba(22,242,217,0)',
        'rgba(254,33,30,0)',
        'rgba(250,105,0,0)'
      ]

      const timeArr = this.allData.common.month // x轴
      const valueArr = this.allData.map.data
      const seriesArr = valueArr.map((item, index) => {
        return {
          name: item.name,
          type: 'line',
          data: item.data,
          stack: 'map',
          areaStyle: {
            color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: colorArr1[index]
              },
              {
                offset: 1,
                color: colorArr2[index]
              }
            ])
          }
        }
      })
      //  图例的数据
      const legendArr = valueArr.map(item => {
        return item.name
      })

      const dataOption = {
        xAxis: {
          data: timeArr
        },
        series: seriesArr,
        legend: {
          data: legendArr
        }

      }
      this.chartInstane.setOption(dataOption)
    },
    // 屏幕适配
    screenAdapter () {
      const adapterOption = {}
      this.chartInstane.setOption(adapterOption)
      this.chartInstane.resize()
    }
  }
}
</script>
<style lang="less" scoped>

</style>
