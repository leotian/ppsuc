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
    let option = {
      tooltip: {},
      legend: [{
        // selectedMode: 'single',
        data: categories.map(function (a) {
          return {
            name: a.name,
            textStyle: {
              color: '#fff',
            },
          }
        }),
        inactiveColor: '#000',
      }],
      animationDuration: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'none',
          data: graph.nodes,
          links: graph.links,
          categories: categories,
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
        top: 15,
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

  $('#datav-layout').css('visibility', 'visible');
  $('#datav-loading').fadeOut();
});
