import React, { useState } from "react";
import { ReactECharts, ReactEChartsProps } from "../components/React-ECharts";

import RangePicker from "../components/RangePicker"
import BasicSelect from "../components/BasicSelect"
import BasicButton from "../components/BasicButton"
import BasicTextField from "../components/BasicTextField"

// TODO: uzmi graph iz GET jsona
var graph = require('../les-miserables.json');

export default function EChartsPage() {

  // TODO: populisati ovaj Option sa data
  const option: ReactEChartsProps["option"] = {
    title: {
      text: 'Les Miserables',
      subtext: 'Default layout',
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    legend: [
      {
        // selectedMode: 'single',
        data: graph.categories.map(function (a: any) {
          return a.name;
        })
      }
    ],
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: 'Les Miserables',
        type: 'graph',
        layout: 'none',
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 10
          }
        }
      }
    ]
  };

  const styles = {
    echarts: {
      position: 'relative',
      height: '70vh',
      overflow: 'hidden'
    },
    box: {
      padding: '30px'
    },
    pickers: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left'
    }
  } as const;

	return (
    <div style={styles.box}>
      <div style={styles.pickers}>
        <BasicSelect/>
        <BasicTextField/>
        <RangePicker/>
        <BasicButton/>
      </div>
      <div style={styles.echarts}>
        <ReactECharts option={option} />
      </div>
    </div>
  );
}