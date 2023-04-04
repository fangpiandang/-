<template>
    <div>
        <el-row :gutter="24" style="margin-bottom: 20px">
            <el-col :span="6">
                <el-card shadow="always" class="in" style="background-color: #bfddf6">
                    <div style="float: left">
                        <p>本月进件</p>
                        <p style="font-weight: bold">6588</p>
                        <p>
                            +20.12%
                            <span style="font-size: 12px">与上月比</span>
                        </p>
                    </div>
                    <i class="el-icon-tickets ico"></i>
                    <div style="clear: both"></div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always" class="in" style="background-color: #bfddf6">
                    <div style="float: left">
                        <p>本月进件</p>
                        <p style="font-weight: bold">6588</p>
                        <p>
                            +20.12%
                            <span style="font-size: 12px">与上月比</span>
                        </p>
                    </div>
                    <i class="el-icon-tickets ico"></i>
                    <div style="clear: both"></div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always" class="in" style="background-color: #bfddf6">
                    <div style="float: left">
                        <p>本月进件</p>
                        <p style="font-weight: bold">6588</p>
                        <p>
                            +20.12%
                            <span style="font-size: 12px">与上月比</span>
                        </p>
                    </div>
                    <i class="el-icon-tickets ico"></i>
                    <div style="clear: both"></div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="always" class="in" style="background-color: #bfddf6">
                    <div style="float: left">
                        <p>本月进件</p>
                        <p style="font-weight: bold">6588</p>
                        <p>
                            +20.12%
                            <span style="font-size: 12px">与上月比</span>
                        </p>
                    </div>
                    <i class="el-icon-tickets ico"></i>
                    <div style="clear: both"></div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="24">
            <el-col :span="15">
                <el-card>
                    <div slot="header" class="tc">
                        <span>进件统计分析</span>
                    </div>
                    <div style="height: 240px" ref="analysis"></div>
                </el-card>
            </el-col>
            <el-col :span="9">
                <el-card>
                    <div slot="header" class="tc">
                        <span>进件产品占比</span>
                    </div>
                    <div style="height: 240px" ref="percent"></div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="24" class="mt">
            <el-card>
                <el-col :span="12">
                    <el-timeline>
                        <el-timeline-item timestamp="2018/4/12" placement="top">
                            <el-card>
                                <h4>更新 Github 模板</h4>
                                <p>王小虎 提交于 2018/4/12 20:46</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2018/4/3" placement="top">
                            <el-card>
                                <h4>更新 Github 模板</h4>
                                <p>王小虎 提交于 2018/4/3 20:46</p>
                            </el-card>
                        </el-timeline-item>
                        <el-timeline-item timestamp="2018/4/2" placement="top">
                            <el-card>
                                <h4>更新 Github 模板</h4>
                                <p>王小虎 提交于 2018/4/2 20:46</p>
                            </el-card>
                        </el-timeline-item>
                    </el-timeline></el-col
                >
                <el-col :span="12">
                    <el-calendar v-model="value"> </el-calendar>
                </el-col>
            </el-card>
        </el-row>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import { get } from '@/utils/http.js'
export default {
    methods: {
        drawLine() {
            const myChart = echarts.init(this.$refs['analysis'])
            let option = {
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fir', 'Sat', 'Sun'],
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        data: this.lineData,
                        type: 'line',
                        smooth: true,
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: '#4f88ff', // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'white', // 100% 处的颜色
                                    },
                                ],
                                global: false, // 缺省为 false
                            },
                        },
                    },
                ],
            }
            myChart.setOption(option)
        },
        drawPie() {
            const myChart = echarts.init(this.$refs['percent'])
            const option = {
                tooltip: {
                    trigger: 'item',
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2,
                        },
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 20,
                                fontWeight: 'bold',
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: this.peiData,
                    },
                ],
            }
            myChart.setOption(option)
        },
    },
    mounted() {
        get('charts').then(({ lineData, peiData }) => {
            this.lineData = lineData
            this.peiData = peiData
            this.drawLine()
            this.drawPie()
        })
    },
    data() {
        return {
            lineData: [],
            peiData: [],
            value: new Date(),
        }
    },
}
</script>

<style>
p {
    line-height: 30px;
    font-size: 16px;
}
.ico {
    float: right;
    font-size: 70px;
    color: rgba(255, 255, 255, 0.3);
}
</style>
