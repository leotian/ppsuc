$("#slideBox").slide({
  mainCell: ".bd ul",
  autoPlay: true,
  effect: "fold",
  interTime: 5 * 1000,
});

$("#slideBox-politics").slide({
  mainCell: ".bd ul",
  autoPlay: true,
  effect: "leftLoop",
  interTime: 3 * 1000,
});

$(".txtMarquee-top").slide({
  mainCell: ".bd ul",
  autoPlay: true,
  effect: "topMarquee",
  vis: 3,
  interTime: 50,
});

$(function() {
  var deviceWidth = document.documentElement.clientWidth;
  document.documentElement.style.fontSize = deviceWidth / 100 + 'px';
})

$(function () {
  /*************** 事件传播可视化展示 **************/
  const seriesGraph = echarts.init(document.getElementById("seriesGraph"));
  // seriesGraph.showLoading();
  $.ajax('data/Untitled.gexf').done(function (xml) {
    // seriesGraph.hideLoading();

    const graph = echarts.dataTool.gexf.parse(xml);

    const categories = [];
    for (let i = 0; i < 8; i++) {
      categories[i] = {
        name: '类目' + i
      };
    }

    graph.nodes.forEach(function (node) {
      node.itemStyle = null;
      node.value = node.symbolSize;
      node.symbolSize /= 1.5;
      node.label = {
        normal: {
          show: node.symbolSize > 30
        }
      };
      node.category = node.attributes.modularity_class;
    });
    const option = {
      tooltip: {},
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'none',
          data: graph.nodes,
          links: graph.links,
          categories,
          roam: false,
          focusNodeAdjacency: true,
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
          },
          label: {
            position: 'right',
            formatter: '{b}'
          },
          lineStyle: {
            color: 'source',
            curveness: 0.3
          },
          emphasis: {
            lineStyle: {
              width: 10
            }
          }
        }
      ]
    };
    seriesGraph.setOption(option);
  });

  /*************** 事件发展趋势图 **************/
  const lineChart = echarts.init(document.getElementById("lineChart"));
  (function () {
    const option = {
      grid: {
        top: '10%',
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value',
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      }]
    };
    lineChart.setOption(option, true);
  })();

  /*************** 事件影响力趋势图 **************/
  const barChart = echarts.init(document.getElementById("barChart"));
  (function () {
    const option = {
      xAxis: {
        type: 'time',
        splitLine: { show: false },
      },
      yAxis: {
        type: 'category',
        data: ['酝酿期', '产生期'],
      },
      grid: {
        left: '5%',
        right: '10%',
        top: '10%',
        containLabel: true
      },
      series: [
        {
          name: '辅助',
          type: 'bar',
          stack: 'zl',
          itemStyle: {
            normal: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            },
            emphasis: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            }
          },
          data: [new Date().setFullYear(2015, 7, 25), new Date().setFullYear(2015, 7, 26)],
        },
        {
          name: '日期',
          type: 'bar',
          stack: 'zl',
          data: [new Date().setFullYear(2015, 7, 26), new Date().setFullYear(2015, 7, 27)]
        }
      ]
    };
    barChart.setOption(option, true);
  })();

  /*************** 词云 **************/
  const wordCloud = echarts.init(document.getElementById('wordCloud'));

  (function () {
    const option = {
      tooltip: {
        show: false
      },
      series: [{
        type: 'wordCloud',
        gridSize: 8,
        sizeRange: [12, 45],
        rotationRange: [-45, 45],
        shape: 'pentagon',
        drawOutOfBound: false,
        autoSize: true,
        textStyle: {
          normal: {
            color: function () {
              return 'rgb(' + [
                Math.round(Math.random() * 180),
                Math.round(Math.random() * 180),
                Math.round(Math.random() * 180)
              ].join(',') + ')';
            }
          },
        },
        data: [
          { name: '警察', value: 184 },
          { name: '警員', value: 184 },
          { name: '大埔', value: 180 },
          { name: '畫面', value: 155 },
          { name: '警方', value: 151 },
          { name: '市民', value: 133 },
          { name: '現場', value: 132 },
          { name: '記者', value: 122 }
        ]
      }],
    };
    wordCloud.setOption(option);
  })();

  /*************** 环形图 **************/
  $("#doughnutChart").css({
    width: $("#wordCloud").width(),
    height: $("#wordCloud").height()
  })

  const doughnutChart = echarts.init(document.getElementById('doughnutChart'));

  (function () {
    const option = {
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['60%', '80%'],
          label: {
            normal: {
              show: false,
              position: 'right'
            },
          },
          data: [
            { value: 335, name: '活跃重点人' },
            { value: 310, name: '不活跃重点人' },
          ]
        }
      ]
    };
    doughnutChart.setOption(option);
  })();

  /*************** 直方图 **************/
  $("#histogram").css({
    width: $("#wordCloud").width(),
    height: $("#wordCloud").height()
  })

  const histogram = echarts.init(document.getElementById('histogram'));

  (function () {
    const option = {
      grid: {
        top: '10%',
        left: '12%',
        right: '12%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }]
    };
    histogram.setOption(option)
  })();

  /*************** 情感分析结果 **************/
  const pictorialBar = echarts.init(document.getElementById('pictorialBar'));

  const spirit = `image://${location.origin}/img/star.png`;

  (function () {
    const maxData = 5;
    const option = {
      tooltip: {},
      xAxis: {
        show: false,
        max: maxData,
      },
      yAxis: {
        show: false,
        data: ['score'],
      },
      grid: {
        top: 'center',
        width: '40%',
        left: 70,
        right: 100
      },
      series: [{
        // current data
        type: 'pictorialBar',
        symbol: spirit,
        symbolRepeat: 'fixed',
        symbolMargin: '5%',
        symbolClip: true,
        symbolSize: 30,
        symbolBoundingData: maxData,
        data: [3],
      }, {
        // full data
        type: 'pictorialBar',
        itemStyle: {
          normal: {
            opacity: 0.3
          }
        },
        label: {
          normal: {
            show: true,
            formatter: (params) => `${params.value}星`,
            position: 'right',
            offset: [10, 0],
            textStyle: {
              color: 'red',
              fontSize: 18
            }
          }
        },
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '5%',
        symbol: spirit,
        symbolSize: 30,
        symbolBoundingData: maxData,
        data: [3],
        z: 5
      }]
    };
    pictorialBar.setOption(option)
  })();

  $('#datav-layout').css('visibility', 'visible');
  $('#datav-loading').fadeOut();
});
