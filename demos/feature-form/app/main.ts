import FeatureLayer = require("esri/layers/FeatureLayer");
import FeatureForm = require("esri/widgets/FeatureForm");
import MapView = require("esri/views/MapView");
import Map = require("esri/Map");
import Graphic = __esri.Graphic;
import FeatureLayerView = __esri.FeatureLayerView;
import { whenFalseOnce } from "esri/core/watchUtils";

let highlight: IHandle;
let editFeature: Graphic;

const updateContainer = document.getElementById("update");

//----------------------------------
//  set up map
//----------------------------------

const featureLayer = new FeatureLayer({
  portalItem: {
    id: "d66f506b84d84512b4f9e7e6ca820116"
  }
});

const map = new Map({
  basemap: "dark-gray",
  layers: [featureLayer]
});

let view = new MapView({
  map,
  container: "viewDiv",
  center: [-79.681652, 43.441544],
  zoom: 12
});

// disable popup
view.popup.autoOpenEnabled = false;

view.on("click", event => {
  unselectFeature();

  // check if click has features underneath
  view.hitTest(event).then(hitTest => {
    const [first] = hitTest.results;

    if (first) {
      selectFeature(first.graphic.attributes[featureLayer.objectIdField]);
      return;
    }

    updateContainer.classList.add("esri-hidden");
  });
});

function selectFeature(objectId: number) {
  featureLayer
    .queryFeatures({
      objectIds: [objectId],
      outFields: ["*"]
    })
    .then(({ features }) => {
      if (features.length === 0) {
        return;
      }

      [editFeature] = features;

      // display the attributes of selected feature in the form
      form.feature = editFeature;

      // highlight selected feature
      view
        .whenLayerView(editFeature.layer)
        .then((layerView: FeatureLayerView) => {
          highlight = layerView.highlight(editFeature);
        });

      // show form
      updateContainer.classList.remove("esri-hidden");
    });
}

function unselectFeature() {
  if (highlight) {
    highlight.remove();
  }
}

function selectFirstOnLoad() {
  view
    .whenLayerView(featureLayer)
    .then((lv: FeatureLayerView) =>
      whenFalseOnce(lv, "updating", () =>
        lv
          .queryFeatures({ geometry: view.extent })
          .then(({ features }) =>
            selectFeature(features[0].attributes[featureLayer.objectIdField])
          )
      )
    );
}

//----------------------------------
//  set up form
//----------------------------------

const form = new FeatureForm({
  container: "form",
  layer: featureLayer
});

// Listen to the feature form's submit event.
form.on("submit", () => {
  if (!editFeature) {
    return;
  }

  editFeature.attributes = form.getValues();
  applyAttributeUpdates(editFeature);
});

//----------------------------------
//  set up form submit
//----------------------------------

document.getElementById("btnUpdate").onclick = () => {
  // fires feature form's submit event.
  form.submit();
};

// call FeatureLayer.applyEdits()
function applyAttributeUpdates(updatedFeature: Graphic) {
  document.getElementById("btnUpdate").style.cursor = "progress";

  featureLayer
    .applyEdits({ updateFeatures: [updatedFeature] })
    .then(({ addFeaturesResult }) => {
      const [first] = addFeaturesResult;

      if (first) {
        selectFeature(first.objectId);
      }

      document.getElementById("btnUpdate").style.cursor = "pointer";
    })
    .catch(error => {
      console.error(
        `===============================================
        [ applyEdits ] FAILURE: ${error}`
      );

      document.getElementById("btnUpdate").style.cursor = "pointer";
    });
}

selectFirstOnLoad();

view.ui.add("update", "top-right");
