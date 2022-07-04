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
        color: 'color',
        curveness: 0,
        width: 33 - element.source * 3
      },
      
    }

    if(linksLenght > linksList.length)
      linksList.push(trololo);
  })

  // TODO: populisati ovaj Option sa data
  const option: ReactEChartsProps["option"] = {
    title: {
      text: 'Overview of most related words to COVID',
      subtext: 'Source: Guardian',
      top: 'top',
      left: 'center'
    },
    tooltip: {},
    legend: [
      {
        // selectedMode: 'single',
        data: graph.categories.map(function (a: any) {
          return a.name;
        }),
        top: 60
      }
    ],
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: 'Number of articles in specified time frame',
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
            color: "#FF7A00"
          }
        }
      }
    ]
  };

  const styles = {
    echarts: {
      position: 'relative',
      height: '90vh',
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