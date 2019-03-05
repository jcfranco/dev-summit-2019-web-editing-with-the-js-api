declare namespace __esri {

  interface Editor extends Widget {
    /**
     * A property indicating the current active workflow.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#activeWorkflow)
     */
    readonly activeWorkflow: Workflow;
    /**
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#allowedWorkflows)
     */
    allowedWorkflows: string[];
    /**
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#editingConfig)
     */
    editingConfig: EditableItemConfig[];
    /**
     * The widget's default CSS icon class.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#iconClass)
     */
    readonly iconClass: string;
    /**
     * The widget's default label.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#label)
     */
    label: string;
    /**
     * This property allows customization of supporting Editor widgets and their default behavior.These widgets include [FeatureForm](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html), [FeatureTemplates](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates.html), and[Sketch](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html).
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#supportingWidgetDefaults)
     */
    supportingWidgetDefaults: SupportingWidgetDefaults;
    /**
     * A reference to the [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html). This viewprovides the editable layers for the Editor widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#view)
     */
    view: MapView;
    /**
     * The view model for this widget. This is a class that contains all the logic(properties and methods) that controls this widget's behavior. See themodule:esri/widgets/Editor/EditorToggleViewModel class to accessall properties and methods on the widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#viewModel)
     */
    viewModel: EditorViewModel;

    /**
     * Cancels any active workflow.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#cancelWorkflow)
     *
     *
     */
    cancelWorkflow(): void;
    /**
     * This is applicable if there is an active update workflow. If so, this methoddeletes the workflow feature.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#deleteFeatureFromWorkflow)
     *
     *
     */
    deleteFeatureFromWorkflow(): void;
    /**
     * *This method is primarily used by developers when implementing custom widgets.*It must be implemented by subclasses for rendering.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#render)
     *
     *
     */
    render(): any;
    /**
     * Initiates the `create` workflow by displaying the panel where feature creation begins. This methodtakes a [CreationInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#CreationInfo) object containing the layer(s) and template(s)to use.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#startCreateWorkflowAtFeatureCreation)
     *
     * @param creationInfo An object containinginformation needed to create a new feature using the Editor widget.
     *
     */
    startCreateWorkflowAtFeatureCreation(creationInfo: CreationInfo): void;
    /**
     * This method starts the Editor workflow where it waits for the featureto be selected.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#startCreateWorkflowAtFeatureEdit)
     *
     * @param feature The feature to be edited.
     *
     */
    startCreateWorkflowAtFeatureEdit(feature: Graphic): void;
    /**
     * Initiates the `create` workflow by displaying the [FeatureTemplates](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates.html) panel.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#startCreateWorkflowAtFeatureTypeSelection)
     *
     *
     */
    startCreateWorkflowAtFeatureTypeSelection(): void;
    /**
     * Starts the `update` workflow at the feature geometry and attribute editing panel.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#startUpdateWorkflowAtFeatureEdit)
     *
     * @param feature The feature to be updated.
     *
     */
    startUpdateWorkflowAtFeatureEdit(feature: Graphic): void;
    /**
     * Starts the `update` workflow using the current selected feature.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#startUpdateWorkflowAtFeatureSelection)
     *
     *
     */
    startUpdateWorkflowAtFeatureSelection(): void;
    /**
     * This method starts the Editor workflow where it waits for multiple featuresto be selected.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#startUpdateWorkflowAtMultipleFeatureSelection)
     *
     * @param candidates An array of features to be updated.
     *
     */
    startUpdateWorkflowAtMultipleFeatureSelection(candidates: Graphic[]): void;
  }

  interface EditorConstructor {
    new (properties?: EditorProperties): Editor;
  }

  export const Editor: EditorConstructor;

  interface EditorProperties extends WidgetProperties {
    /**
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#allowedWorkflows)
     */
    allowedWorkflows?: string[];
    /**
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#editingConfig)
     */
    editingConfig?: EditableItemConfig[];
    /**
     * The widget's default label.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#label)
     */
    label?: string;
    /**
     * This property allows customization of supporting Editor widgets and their default behavior.These widgets include [FeatureForm](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html), [FeatureTemplates](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates.html), and[Sketch](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html).
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#supportingWidgetDefaults)
     */
    supportingWidgetDefaults?: SupportingWidgetDefaults;
    /**
     * A reference to the [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html). This viewprovides the editable layers for the Editor widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#view)
     */
    view?: MapViewProperties;
    /**
     * The view model for this widget. This is a class that contains all the logic(properties and methods) that controls this widget's behavior. See themodule:esri/widgets/Editor/EditorToggleViewModel class to accessall properties and methods on the widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#viewModel)
     */
    viewModel?: EditorViewModelProperties;
  }

  interface EditorViewModel extends Accessor {
    /**
     * A property indicating the current active workflow.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#activeWorkflow)
     */
    readonly activeWorkflow: Workflow;
    /**
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#allowedWorkflows)
     */
    allowedWorkflows: string[];
    /**
     * Convenience property that reads whether there are any editable layers that support the `create` workflow.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#canCreate)
     */
    readonly canCreate: boolean;
    /**
     * Convenience property that reads whether there are any editable layers that support the `update` workflow.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#canUpdate)
     */
    readonly canUpdate: boolean;
    /**
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#editingConfig)
     */
    editingConfig: EditableItemConfig[];
    /**
     * A collection of editable items based on configuration andavailable layers on the map.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#editingItems)
     */
    readonly editingItems: Collection<EditableItem>;
    /**
     * An array of objects containing information specific to any failed editing operations.In addition to the error(s), options to `retry()` or `cancel()` are provided.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#failures)
     */
    readonly failures: EditorViewModelFailures[];
    /**
     * The [FeatureFormViewModel](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FeatureFormViewModel.html)for supporting the editor widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#featureFormViewModel)
     */
    featureFormViewModel: FeatureTemplatesViewModel;
    /**
     * The [FeatureTemplatesViewModel](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates-FeatureTemplatesViewModel.html)for supporting the editor widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#featureTemplatesViewModel)
     */
    featureTemplatesViewModel: FeatureTemplatesViewModel;
    /**
     * The [SketchViewModel](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch-SketchViewModel.html)for supporting the editor widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#sketchViewModel)
     */
    sketchViewModel: SketchViewModel;
    /**
     * The widget's state. Possible values are in the table below.Value | Description------|------------ready | Dependencies are met and has valid property values.disabled | Dependencies are missing and cannot provide valid inputs.editing-new-feature | The Editor is currently editing (creating) a new feature.editing-existing-feature | The Editor is currently editing an existing feature.awaiting-update-feature-candidate | The period when the application is awaiting the user's input after clicking update and multiple features are returned. Specify the feature to update.awaiting-feature-creation-info | This is the first step in the `create` workflow. A [CreationInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#CreationInfo) is required.awaiting-feature-to-update | This is the first step in the `update` workflow. A [feature](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) is required.awaiting-feature-to-create | The waiting period for when a feature is created beforte attribute/geometry edits can be performed.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#state)
     *
     * @default disabled
     */
    readonly state: string;
    /**
     * When true, there is at least one edit request being processed.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#syncing)
     */
    readonly syncing: boolean;
    /**
     * A reference to the [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html). This viewprovides the editable layers for the Editor widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#view)
     */
    view: MapView;

    /**
     * Cancels any active workflow.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#cancelWorkflow)
     *
     *
     */
    cancelWorkflow(): void;
    /**
     * This is applicable if there is an active update workflow. If so, this methoddeletes the workflow feature.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#deleteFeatureFromWorkflow)
     *
     *
     */
    deleteFeatureFromWorkflow(): void;
    /**
     * Initiates the `create` workflow by displaying the panel where feature creation begins. This methodtakes a [CreationInfo](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#CreationInfo) object containing the layer(s) and template(s)to use.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#startCreateWorkflowAtFeatureCreation)
     *
     * @param creationInfo An object containinginformation needed to create a new feature using the Editor widget.
     *
     */
    startCreateWorkflowAtFeatureCreation(creationInfo: CreationInfo): void;
    /**
     * This method starts the Editor workflow where it waits for the featureto be selected.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#startCreateWorkflowAtFeatureEdit)
     *
     * @param feature The feature to be updated.
     *
     */
    startCreateWorkflowAtFeatureEdit(feature: Graphic): void;
    /**
     * Initiates the `create` workflow by displaying the [FeatureTemplates](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates.html) panel.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#startCreateWorkflowAtFeatureTypeSelection)
     *
     *
     */
    startCreateWorkflowAtFeatureTypeSelection(): void;
    /**
     * Starts the update workflow at the feature geometry and attribute editing panel.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#startUpdateWorkflowAtFeatureEdit)
     *
     * @param feature The feature to be updated.
     *
     */
    startUpdateWorkflowAtFeatureEdit(feature: Graphic): void;
    /**
     * Starts the `update` workflow using the current selected feature.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#startUpdateWorkflowAtFeatureSelection)
     *
     *
     */
    startUpdateWorkflowAtFeatureSelection(): void;
    /**
     * This method starts the Editor workflow where it waits for multiple featuresto be selected.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#startUpdateWorkflowAtMultipleFeatureSelection)
     *
     *
     */
    startUpdateWorkflowAtMultipleFeatureSelection(): void;
  }

  interface EditorViewModelConstructor {
    new (properties?: EditorViewModelProperties): EditorViewModel;
  }

  export const EditorViewModel: EditorViewModelConstructor;

  interface EditorViewModelProperties {
    /**
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#allowedWorkflows)
     */
    allowedWorkflows?: string[];
    /**
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#editingConfig)
     */
    editingConfig?: EditableItemConfig[];
    /**
     * The [FeatureFormViewModel](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FeatureFormViewModel.html)for supporting the editor widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#featureFormViewModel)
     */
    featureFormViewModel?: FeatureTemplatesViewModelProperties;
    /**
     * The [FeatureTemplatesViewModel](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates-FeatureTemplatesViewModel.html)for supporting the editor widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#featureTemplatesViewModel)
     */
    featureTemplatesViewModel?: FeatureTemplatesViewModelProperties;
    /**
     * The [SketchViewModel](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch-SketchViewModel.html)for supporting the editor widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#sketchViewModel)
     */
    sketchViewModel?: SketchViewModelProperties;
    /**
     * A reference to the [MapView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html). This viewprovides the editable layers for the Editor widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#view)
     */
    view?: MapViewProperties;
  }

  /**
   * The editable items available within the map.
   *
   * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#EditableItem)
   */
  export interface EditableItem extends Object {
    /**
     * The feature layer associatedwith the editable item.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#EditableItem)
     */
    layer: FeatureLayer;
    /**
     * The workflow type that this item supports. Can be either,`update` or `create`.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#EditableItem)
     */
    supports: string;
  }

  export interface EditorViewModelFailures extends Object {
    /**
     * The readonly error message.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-EditorViewModel.html#failures)
     */
    error: Error;
  }

  interface Workflow extends Accessor {
    /**
     * The current step in the workflow.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-Workflow.html#activeStep)
     */
    readonly activeStep: any;
    /**
     * Shared workflow data.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-Workflow.html#data)
     */
    readonly data: any;
    /**
     * Indicates whether the workflow is considered active.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-Workflow.html#started)
     *
     * @default false
     */
    started: boolean;
    /**
     * The steps that make up this workflow.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-Workflow.html#steps)
     */
    readonly steps: any[];
    /**
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-Workflow.html#type)
     */
    readonly type: string;

    /**
     * Cancels the active workflow.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-Workflow.html#cancel)
     *
     *
     */
    cancel(): void;
    /**
     * Call this method when the workflow is considered finished. This method is used to help process the editing results.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-Workflow.html#commit)
     *
     *
     */
    commit(): void;
    /**
     * Moves to the next step in the workflow.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-Workflow.html#next)
     *
     *
     */
    next(): void;
    /**
     * Moves to the previous step in the workflow.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-Workflow.html#previous)
     *
     *
     */
    previous(): void;
    /**
     * Resets the workflow.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-Workflow.html#reset)
     *
     *
     */
    reset(): void;
    /**
     * Starts the workflow.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-Workflow.html#start)
     *
     *
     */
    start(): void;
  }

  interface WorkflowConstructor {
    new (properties?: WorkflowProperties): Workflow;
  }

  export const Workflow: WorkflowConstructor;

  interface WorkflowProperties {
    /**
     * Indicates whether the workflow is considered active.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor-Workflow.html#started)
     *
     * @default false
     */
    started?: boolean;
  }

  /**
   * The information needed for creating a new feature.
   *
   * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#CreationInfo)
   */
  export interface CreationInfo extends Object {
    /**
     * The associated feature layer wherethe new feature is created.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#CreationInfo)
     */
    layer: FeatureLayer;
    /**
     * The associated feature templateused to create the new feature.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#CreationInfo)
     */
    template: FeatureTemplate;
  }

  /**
   * Editor configurations used for an array of fields.
   *
   * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#EditableItemConfig)
   */
  export interface EditableItemConfig extends Object {
    /**
     * The associated feature layer containingthe editable fields.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#EditableItemConfig)
     */
    layer: FeatureLayer;
    /**
     * The configuration optionsfor displaying an array of fields within the widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#EditableItemConfig)
     */
    fieldConfig?: FieldConfig[];
    /**
     * An array of [allowed workflows](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#allowedWorkflows).
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#EditableItemConfig)
     */
    allowedWorkflows?: string[];
  }

  /**
   * Set this to customize any supporting Editor widgets default behavior. These widgets include[FeatureForm](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html), [FeatureTemplates](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates.html),and [Sketch](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html).
   *
   * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#SupportingWidgetDefaults)
   */
  export interface SupportingWidgetDefaults extends Object {
    /**
     * An object containing properties specific for customizing the[FeatureForm](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html) widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#SupportingWidgetDefaults)
     */
    featureForm?: SupportingWidgetDefaultsFeatureForm;
    /**
     * An object containing properties specific for customizingthe [FeatureTemplates](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates.html) widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#SupportingWidgetDefaults)
     */
    featureTemplates?: SupportingWidgetDefaultsFeatureTemplates;
    /**
     * An object containing properties specific for customizng the[Sketch](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html) widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#SupportingWidgetDefaults)
     */
    sketch?: SupportingWidgetDefaultsSketch;
  }

  export interface SupportingWidgetDefaultsFeatureForm extends Object {
    /**
     * An array of[FieldConfig](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldConfig.html) objects to use within the [FeatureForm](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html).
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#SupportingWidgetDefaults)
     */
    fieldConfig?: FieldConfig[];
    /**
     * String indicating the[[groupDisplay]](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm.html#groupDisplay) and how they will be displayed to the end user.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#SupportingWidgetDefaults)
     */
    groupDisplay?: string;
  }

  export interface SupportingWidgetDefaultsFeatureTemplates extends Object {
    /**
     * Aids in managingvarious template items and how they display within the widget. Please refer to[groupBy API reference](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates.html#groupBy) for additionalinformation.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#SupportingWidgetDefaults)
     */
    groupBy?: string | GroupByFunction;
    /**
     * Indicates whether the [templates filter](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureTemplates.html#filterEnabled)displays.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#SupportingWidgetDefaults)
     */
    filterEnabled?: boolean;
  }

  export interface SupportingWidgetDefaultsSketch extends Object {
    /**
     * An object containing the [updateOptions](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html#update)for the [Sketch](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Sketch.html) widget.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#SupportingWidgetDefaults)
     */
    updateOptions?: any;
    /**
     * The marker symbol used to symbolize anypoint feature updates.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#SupportingWidgetDefaults)
     */
    markerSymbol?: SimpleMarkerSymbol;
    /**
     * The polygon symbol used to symbolize anypolygon feature updates.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#SupportingWidgetDefaults)
     */
    polygonSymbol?: SimpleFillSymbol;
    /**
     * The line symbol used to symbolize anyline feature updates.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-Editor.html#SupportingWidgetDefaults)
     */
    polylineSymbol?: SimpleLineSymbol;
  }

  export interface FieldConfigProperties {
    /**
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldConfig.html#visibilityExpression)
     *
     * @default null
     */
    visibilityExpression?: string;
  }

  export interface FieldGroupConfigProperties {
    /**
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-FeatureForm-FieldGroupConfig.html#visibilityExpression)
     *
     * @default null
     */
    visibilityExpression?: string;
  }

}

declare module "esri/widgets/Editor" {
  import Editor = __esri.Editor;
  export = Editor;
}
