import { HorizontalBarChartView, VerticalBarChartView } from "presentation-chart";
import Data from "../../data.js";

const renderCharts = async () => {
  const dogChart = new VerticalBarChartView({
    "el": "#dogchart",
    "title": "Dogs by average weight",
    "xTitle": "Breed",
    "yTitle": "Pounds",
    "data": Data
  });
  await dogChart.render();

  let i = 0;
  const testData2 = [], l2 = 5;
  for (i = 0; i < l2; i++) {
    await testData2.push({
      "X": Math.ceil(Math.random() * 100),
      "Y": i,
      "style": "blue"
    });
  }
  const testChart2 = new HorizontalBarChartView({
    "el": "#numchart1",
    "title": "bunch of numbers",
    "xTitle": "X",
    "yTitle": "Y",
    "data": testData2
  });
  await testChart2.render();

  const testData = [], l = 50;

  for (i = 0; i < l; i++) {
    await testData.push({
      "X": i,
      "Y": Math.ceil(Math.random() * 100),
      "style": "purple"
    });
  }
  const testChart = new VerticalBarChartView({
    "el": "#numchart2",
    "title": "bunch of numbers",
    "xTitle": "X",
    "yTitle": "Y",
    "data": testData
  });
  await testChart.render();
};

export default renderCharts;
