<template>

    <div class="charts app-container">
        <el-row :gutter="20">


            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" class="card_style">
                <el-card shadow="always">
                    <XChart id="id4" :option="option"></XChart>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" class="card_style">
                <el-card shadow="always">
                    <XChart id="id24" :option="option1"></XChart>
                </el-card>
            </el-col>


            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" class="card_style">
                <el-card shadow="always">
                    <XChart id="id224" :option="option2"></XChart>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" class="card_style">
                <el-card shadow="always">
                    <XChart id="id22224" :option="option3"></XChart>
                </el-card>
            </el-col>


            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" class="card_style">
                <el-card shadow="always">
                    <XChart id="id422" :option="option"></XChart>
                </el-card>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="8" class="card_style">
                <el-card shadow="always">
                    <XChart id="id223234" :option="option1"></XChart>
                </el-card>
            </el-col>


        </el-row>


    </div>
</template>

<script>
    import XChart from '@/components/stockhighcharts/basechart'
    import HighCharts from 'highcharts'

    export default {
        name: 'chartone',
        components: { XChart },
        data() {
            return {
                option: {
                    credits: {
                        enabled: false
                    },
                    chart: {
                        type: 'pie'
                    },
                    title: {
                        text: 'Browser market shares. January, 2018'
                    },
                    subtitle: {
                        text: 'just test'
                    },
                    plotOptions: {
                        series: {
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}: {point.y:.1f}%'
                            }
                        }
                    },

                    tooltip: {
                        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                    },

                    'series': [
                        {
                            'name': 'Browsers',
                            'colorByPoint': true,
                            'data': [
                                {
                                    'name': 'Chrome',
                                    'y': 62.74,
                                    'drilldown': 'Chrome'
                                },
                                {
                                    'name': 'Firefox',
                                    'y': 10.57,
                                    'drilldown': 'Firefox'
                                },
                                {
                                    'name': 'Internet Explorer',
                                    'y': 7.23,
                                    'drilldown': 'Internet Explorer'
                                },
                                {
                                    'name': 'Safari',
                                    'y': 5.58,
                                    'drilldown': 'Safari'
                                },
                                {
                                    'name': 'Edge',
                                    'y': 4.02,
                                    'drilldown': 'Edge'
                                },
                                {
                                    'name': 'Opera',
                                    'y': 1.92,
                                    'drilldown': 'Opera'
                                },
                                {
                                    'name': 'Other',
                                    'y': 7.62,
                                    'drilldown': null
                                }
                            ]
                        }
                    ],
                    'drilldown': {
                        'series': [
                            {
                                'name': 'Chrome',
                                'id': 'Chrome',
                                'data': [
                                    [
                                        'v65.0',
                                        0.1
                                    ],
                                    [
                                        'v64.0',
                                        1.3
                                    ],
                                    [
                                        'v63.0',
                                        53.02
                                    ],
                                    [
                                        'v62.0',
                                        1.4
                                    ],
                                    [
                                        'v61.0',
                                        0.88
                                    ],
                                    [
                                        'v60.0',
                                        0.56
                                    ],
                                    [
                                        'v59.0',
                                        0.45
                                    ],
                                    [
                                        'v58.0',
                                        0.49
                                    ],
                                    [
                                        'v57.0',
                                        0.32
                                    ],
                                    [
                                        'v56.0',
                                        0.29
                                    ],
                                    [
                                        'v55.0',
                                        0.79
                                    ],
                                    [
                                        'v54.0',
                                        0.18
                                    ],
                                    [
                                        'v51.0',
                                        0.13
                                    ],
                                    [
                                        'v49.0',
                                        2.16
                                    ],
                                    [
                                        'v48.0',
                                        0.13
                                    ],
                                    [
                                        'v47.0',
                                        0.11
                                    ],
                                    [
                                        'v43.0',
                                        0.17
                                    ],
                                    [
                                        'v29.0',
                                        0.26
                                    ]
                                ]
                            },
                            {
                                'name': 'Firefox',
                                'id': 'Firefox',
                                'data': [
                                    [
                                        'v58.0',
                                        1.02
                                    ],
                                    [
                                        'v57.0',
                                        7.36
                                    ],
                                    [
                                        'v56.0',
                                        0.35
                                    ],
                                    [
                                        'v55.0',
                                        0.11
                                    ],
                                    [
                                        'v54.0',
                                        0.1
                                    ],
                                    [
                                        'v52.0',
                                        0.95
                                    ],
                                    [
                                        'v51.0',
                                        0.15
                                    ],
                                    [
                                        'v50.0',
                                        0.1
                                    ],
                                    [
                                        'v48.0',
                                        0.31
                                    ],
                                    [
                                        'v47.0',
                                        0.12
                                    ]
                                ]
                            },
                            {
                                'name': 'Internet Explorer',
                                'id': 'Internet Explorer',
                                'data': [
                                    [
                                        'v11.0',
                                        6.2
                                    ],
                                    [
                                        'v10.0',
                                        0.29
                                    ],
                                    [
                                        'v9.0',
                                        0.27
                                    ],
                                    [
                                        'v8.0',
                                        0.47
                                    ]
                                ]
                            },
                            {
                                'name': 'Safari',
                                'id': 'Safari',
                                'data': [
                                    [
                                        'v11.0',
                                        3.39
                                    ],
                                    [
                                        'v10.1',
                                        0.96
                                    ],
                                    [
                                        'v10.0',
                                        0.36
                                    ],
                                    [
                                        'v9.1',
                                        0.54
                                    ],
                                    [
                                        'v9.0',
                                        0.13
                                    ],
                                    [
                                        'v5.1',
                                        0.2
                                    ]
                                ]
                            },
                            {
                                'name': 'Edge',
                                'id': 'Edge',
                                'data': [
                                    [
                                        'v16',
                                        2.6
                                    ],
                                    [
                                        'v15',
                                        0.92
                                    ],
                                    [
                                        'v14',
                                        0.4
                                    ],
                                    [
                                        'v13',
                                        0.1
                                    ]
                                ]
                            },
                            {
                                'name': 'Opera',
                                'id': 'Opera',
                                'data': [
                                    [
                                        'v50.0',
                                        0.96
                                    ],
                                    [
                                        'v49.0',
                                        0.82
                                    ],
                                    [
                                        'v12.1',
                                        0.14
                                    ]
                                ]
                            }
                        ]
                    }
                },
                option1: {
                    title: {
                        text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
                    },
                    subtitle: {
                        text: '数据来源：thesolarfoundation.com'
                    },
                    yAxis: {
                        title: {
                            text: '就业人数'
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },
                    plotOptions: {
                        series: {
                            label: {
                                connectorAllowed: false
                            },
                            pointStart: 2010
                        }
                    },
                    series: [{
                        name: '安装，实施人员',
                        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                    }, {
                        name: '工人',
                        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                    }, {
                        name: '销售',
                        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                    }, {
                        name: '项目开发',
                        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                    }, {
                        name: '其他',
                        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                    }],
                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                legend: {
                                    layout: 'horizontal',
                                    align: 'center',
                                    verticalAlign: 'bottom'
                                }
                            }
                        }]
                    }
                },
                option2: {
                    chart: {
                        zoomType: 'xy'
                    },
                    title: {
                        text: '东京月平均温度和降雨量'
                    },
                    subtitle: {
                        text: '数据来源: WorldClimate.com'
                    },
                    xAxis: [{
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                        crosshair: true
                    }],
                    yAxis: [{ // Primary yAxis
                        labels: {
                            format: '{value}°C',
                            style: {
                                color: HighCharts.getOptions().colors[1]
                            }
                        },
                        title: {
                            text: '温度',
                            style: {
                                color: HighCharts.getOptions().colors[1]
                            }
                        }
                    }, { // Secondary yAxis
                        title: {
                            text: '降雨量',
                            style: {
                                color: HighCharts.getOptions().colors[0]
                            }
                        },
                        labels: {
                            format: '{value} mm',
                            style: {
                                color: HighCharts.getOptions().colors[0]
                            }
                        },
                        opposite: true
                    }],
                    tooltip: {
                        shared: true
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        x: 120,
                        verticalAlign: 'top',
                        y: 100,
                        floating: true,
                        backgroundColor: (HighCharts.theme && HighCharts.theme.legendBackgroundColor) || '#FFFFFF'
                    },
                    series: [{
                        name: '降雨量',
                        type: 'column',
                        yAxis: 1,
                        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                        tooltip: {
                            valueSuffix: ' mm'
                        }
                    }, {
                        name: '温度',
                        type: 'spline',
                        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                        tooltip: {
                            valueSuffix: '°C'
                        }
                    }]
                },
                option3: {
                    chart: {
                        polar: true,
                        type: 'line'
                    },
                    title: {
                        text: '预算与支出',
                        x: -80
                    },
                    pane: {
                        size: '80%'
                    },
                    xAxis: {
                        categories: ['销售', '市场营销', '发展', '客户支持',
                            '信息技术', '行政管理'],
                        tickmarkPlacement: 'on',
                        lineWidth: 0
                    },
                    yAxis: {
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        min: 0
                    },
                    tooltip: {
                        shared: true,
                        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
                    },
                    legend: {
                        align: 'right',
                        verticalAlign: 'top',
                        y: 70,
                        layout: 'vertical'
                    },
                    series: [{
                        name: '预算拨款',
                        data: [43000, 19000, 60000, 35000, 17000, 10000],
                        pointPlacement: 'on'
                    }, {
                        name: '实际支出',
                        data: [50000, 39000, 42000, 31000, 26000, 14000],
                        pointPlacement: 'on'
                    }]
                }

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .card_style {
        padding: 5px;


        margin: 10px auto
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
