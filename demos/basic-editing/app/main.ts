import WebMap = require("esri/WebMap");
import MapView = require("esri/views/MapView");
import Editor = require("esri/widgets/Editor");

// Create a map from the referenced web map item id
const webmap = new WebMap({
  portalItem: {
    id: "e10fb3fab173489f83382624a81538aa"
  }
});

const view = new MapView({
  container: "viewDiv",
  map: webmap,
  popup: {
    autoOpenEnabled: false //disable popups
  }
});

// Create the Editor 💥
const editor = new Editor({ view });

view.ui.add(editor, "top-right");
