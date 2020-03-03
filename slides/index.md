<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-1.png" data-background-size="cover" style="padding-left: 80px;" -->

  <h1 style="text-align: left; font-size: 80px;">ArcGIS API for JavaScript: Web Editing</h1>
  <p style="text-align: left; font-size: 30px;">Tom Wayson</p>
  <p style="text-align: left; font-size: 30px;"><a href="https://github.com/tomwayson">@tomwayson</a></p>
  <p style="text-align: left; font-size: 30px;">slides: <a href="http://bit.ly/fdgis20we"><code>http://bit.ly/fdgis20we</code></a></p>
  
  <!-- Add these rows to push your text up so it is not interfering with the event name. Test on your actual projector! -->
  <p>&nbsp;</p> 
  <p>&nbsp;</p>
  <!-- /end spacer rows -->

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-3.png" data-background-size="cover" -->

## Agenda

* Web editing
* Editor widget
* Custom workflows
* Q&A

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-2.png" data-background-size="cover" -->

## Web Editing

<ul style="list-style: none; text-align: center;">
  <li>👤 Web Application</li>
  <li>↕️<li>
  <li>🤓 ArcGIS API for JavaScript / ArcGIS REST JS</li>
  <li>↕️<li>
  <li>🏛 <a href="https://developers.arcgis.com/rest/services-reference/feature-layer.htm">REST API</a></li>
</ul>

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-2.png" data-background-size="cover" -->

## Data in a [Feature Service](https://developers.arcgis.com/rest/services-reference/feature-service.htm)

* Editable
* One or more feature _layers_
* Users will draw, create, and update Features

---

## 👉 Set constraints at service level 👈 

* can set but **not enforce** in web clients
* consistent behavior across all clients

---

<img src="./images/feature-layer-settings.png" height="600" style="margin-left:10px; margin-right: 10px;"/>

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-2.png" data-background-size="cover" -->

## ArcGIS API for JavaScript

🔑 Configurable widgets

<hr style="width: 20%;">

⌨️ Granular APIs

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-2.png" data-background-size="cover" -->


## Confgiurable Widgets

* [Editor](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html)
  * Geometry: [Sketch](http://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html)
  * Fields/attributes: [FeatureForm](http://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html)
  * [FeatureTemplates](http://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates.html)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-2.png" data-background-size="cover" -->

## Granular APIs

* [SketchViewModel](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch-SketchViewModel.html)
* [GraphicsLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-GraphicsLayer.html)
* [FeatureLayer.applyEdits](http://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#applyEdits)
* [geometryEngine](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-4.png" data-background-size="cover" -->

## [Editor](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html) widget

[<img src="./images/editor-in-action.gif" height="400" style="margin-left:10px; margin-right: 10px;"/>](https://developers.arcgis.com/javascript/latest/sample-code/widgets-editor-basic/index.html)

**Since v4.11** 🚀

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-4.png" data-background-size="cover" -->

## Custom Workflows

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-3.png" data-background-size="cover" -->

## Form-based

[<img src="images/ff-in-action.gif" height="400" style="margin-left:10px; margin-right: 10px;"/>](https://developers.arcgis.com/javascript/latest/sample-code/editing-groupedfeatureform/index.html)

☝ `FeatureForm`

---

## [`FeatureForm`](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html)

* Renders input fields from fields & attributes<!-- .element: class="fragment" data-fragment-index="1" -->
* Configurable<!-- .element: class="fragment" data-fragment-index="2" -->
  * Field order
  * Label/description
  * Groups
  * Visibility expression

---

## `FeatureForm` Demo

[<img src="images/ff-demo.png" height="400" style="margin-left:10px; margin-right: 10px;"/>](../../demos/feature-form/index.html)

---

## Advanced `FeatureForm` Demo

[<img src="images/form-based-editing.gif" height="400" style="margin-left:10px; margin-right: 10px;"/>](https://jcfranco.github.io/dev-summit-2019-plenary-demos/form-based-editing/)

---

## ArcGIS REST JS

[<img src="images/rest-js-applyEdits.png" height="400" style="margin-left:10px; margin-right: 10px;"/>](https://esri.github.io/arcgis-rest-js/api/feature-layer/applyEdits/)

---

## [@esri/arcgis-rest-feature-layer](https://esri.github.io/arcgis-rest-js/api/feature-layer/)

* Use when your app doesn't have a map
* Bring your own UI (i.e. framework / library)

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-3.png" data-background-size="cover" -->

## Geometry-based

<a href="https://developers.arcgis.com/javascript/latest/sample-code/sketch-geometries/index.html"><img src="images/sketch-basic-updating.png" height="400" style="margin-left:10px; margin-right: 10px;"/></a>

☝ `Sketch`

---

## [`Sketch`](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html)

* Provides ability to manipulate geometries<!-- .element: class="fragment" data-fragment-index="1" -->
* Configurable<!-- .element: class="fragment" data-fragment-index="2" -->
  * Tool options (create and update)
  * Internal view listener for activating update workflow

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-4.png" data-background-size="cover" -->

## Geometry-based Demos

* [Sketch](https://developers.arcgis.com/javascript/latest/sample-code/sketch-geometries/index.html)
* [SketchViewModel with applyEdits](../demos/sketch-applyEdits-create-polygon/applyEdits-create-polygon.html)
* [Sketch with applyEdits](../demos/sketch-applyEdits/applyEdits.html)
* [Sketch with custom tools](../demos/sketch-custom-tools/sketch-custom-tools.html)
* [Sketch with custom snapping and validation](../demos/sketch-validation/sketch-validation.html)

<!-- add screenshot for geometry-based demo -->

---

<!-- .slide: data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-4.png" data-background-size="cover" -->

## Recap

* Set constraints at the service level
* ArcGIS API for JavaScript
  * Editor widget
  * Custom workflows
* ArcGIS REST JS
  * Already have a framework, no map

---

## Additional Resources

- [JavaScript API SDK](https://developers.arcgis.com/javascript/)
- [Arcade - expression language](https://developers.arcgis.com/javascript/latest/guide/arcade/index.html)
- [ArcGIS REST JS](https://esri.github.io/arcgis-rest-js/)

---

<!-- SURVEY SLIDE: -->
<section data-markdown data-background="../node_modules/esri-reveal.js-templates/img/2020/fed/bg-rating.png">
</section>

---

## Questions?

##### For example

> 🤔 Where can I find the slides/source?

👉 [http://bit.ly/fdgis20we](http://bit.ly/fdgis20we) 👈
