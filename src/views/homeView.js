import { DirectiveView } from "presentation-decorator";
import renderCharts from "./functions/renderCharts.js";

const MOUNT_POINT = "#main";

class HomeView extends DirectiveView {
  constructor() {
    super({
      "el": MOUNT_POINT,
      "name": "homeview",
      "style": "view",
      "template": `
        <table id="dogchart"></table>
        <table id="numchart1"></table>
        <table id="numchart2"></table>
      `
    });
  };

  async render() {
    await super.render();
    await renderCharts();
    return this;
  };
};

export default HomeView;
