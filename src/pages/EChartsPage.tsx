import React from "react";
import { ReactECharts, ReactEChartsProps } from "../components/React-ECharts";

import RangePicker from "../components/RangePicker"
import BasicSelect from "../components/BasicSelect"
import BasicButton from "../components/BasicButton"
import BasicTextField from "../components/BasicTextField"

// TODO: uzmi graph iz GET jsona
var graph = require('../les-miserables.json');
var linksList: any = [];
var linksLenght = Object.keys(graph.links).length;

export default function EChartsPage() {
  graph.links.forEach((element: { source: any; target: any; }) => {
    var trololo = {
      source: element.source,
      target: element.target,
      lineStyle: {
        color: 'source',
        curveness: 0,
        width: element.source / 10
      }
    }

    if(linksLenght > linksList.length)
      linksList.push(trololo);
  })

  // TODO: populisati ovaj Option sa data
  const option: ReactEChartsProps["option"] = {
    title: {
      text: 'Stasa, Dzomba i Milos',
      subtext: 'Mi smo tri glupana',
      // top: 'bottom',
      // left: 'right'
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
        links: linksList,
        categories: graph.categories,
        roam: true,
        label: {
          position: 'inside',
          show: true,
          formatter: '{b}'
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