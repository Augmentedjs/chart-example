import material from "presentation-css";
import roboto from "typeface-roboto";
import { HorizontalBarChartView, VerticalBarChartView } from "presentation-chart";
import css from "./styles/extra.css";

import Data from "./data.js";

const dogChart = new VerticalBarChartView({
  "id": "dogs",
  "title": "Dogs by average weight",
  "xTitle": "Breed",
  "yTitle": "Pounds",
  "data": Data
});

dogChart.render();

const testData = [], l = 50;
let i = 0;
for (i = 0; i < l; i++) {
  testData.push({
    "X": i,
    "Y": Math.ceil(Math.random() * 100),
    "style": "purple"
  });
}

const testChart = new VerticalBarChartView({
  "id": "num-vert",
  "title": "bunch of numbers",
  "xTitle": "X",
  "yTitle": "Y",
  "data": testData
});

testChart.render();

const testData2 = [], l2 = 5;
for (i = 0; i < l2; i++) {
  testData2.push({
    "X": Math.ceil(Math.random() * 100),
    "Y": i,
    "style": "blue"
  });
}
const testChart2 = new HorizontalBarChartView({
  "id": "num-horz",
  "title": "bunch of numbers",
  "xTitle": "X",
  "yTitle": "Y",
  "data": testData2
});

testChart2.render();
