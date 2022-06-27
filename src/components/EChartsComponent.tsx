import React, { useState } from "react";
import { ReactECharts, ReactEChartsProps } from "../components/React-ECharts";

export default function EChartsPage() {
  const [value, onChange] = useState([new Date(), new Date()]);

  const option: ReactEChartsProps["option"] = {
    dataset: {
      source: [
        ["Commodity", "Owned", "Financed"],
        ["Commodity 1", 4, 1],
        ["Commodity 2", 2, 4],
        ["Commodity 3", 3, 6],
        ["Commodity 4", 5, 3],
      ],
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Owned", "Financed"],
    },
    grid: {
      left: "10%",
      right: "0%",
      top: "20%",
      bottom: "20%",
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
    },
    series: [
      {
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
      },
      {
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
      },
    ],
  }

  // const option2: ReactEChartsProps["option"] = {
  //   title: {
  //     text: 'Les Miserables',
  //     subtext: 'Default layout',
  //     top: 'bottom',
  //     left: 'right'
  //   },
  //   tooltip: {},
  //   legend: [
  //     {
  //       // selectedMode: 'single',
  //       data: graph.categories.map(function (a) {
  //         return a.name;
  //       })
  //     }
  //   ],
  //   animationDuration: 1500,
  //   animationEasingUpdate: 'quinticInOut',
  //   series: [
  //     {
  //       name: 'Les Miserables',
  //       type: 'graph',
  //       layout: 'none',
  //       data: graph.nodes,
  //       links: graph.links,
  //       categories: graph.categories,
  //       roam: true,
  //       label: {
  //         position: 'right',
  //         formatter: '{b}'
  //       },
  //       lineStyle: {
  //         color: 'source',
  //         curveness: 0.3
  //       },
  //       emphasis: {
  //         focus: 'adjacency',
  //         lineStyle: {
  //           width: 10
  //         }
  //       }
  //     }
  //   ]
  // };

	return (
    <div>
      <ReactECharts option={option} />
    </div>
  );
}