System.register(['aurelia-logging', 'jquery', 'kendo-ui/js/kendo.pdf.min', 'kendo-ui/js/jszip.min'], function (_export) {
  'use strict';

  var LogManager, logger, KendoConfigBuilder;

  _export('configure', configure);

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function configure(aurelia, configCallback) {
    var builder = new KendoConfigBuilder();

    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(builder);
    }

    if (builder.resources.length === 0) {
      logger.warn('Nothing specified for kendo configuration - using defaults for Kendo Core');
      builder.core();
    }

    var resources = builder.resources;

    aurelia.globalResources(resources);
  }

  return {
    setters: [function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }, function (_jquery) {}, function (_kendoUiJsKendoPdfMin) {}, function (_kendoUiJsJszipMin) {}],
    execute: function () {
      logger = LogManager.getLogger('aurelia-kendoui-plugin');

      KendoConfigBuilder = (function () {
        function KendoConfigBuilder() {
          _classCallCheck(this, KendoConfigBuilder);

          this.resources = [];
        }

        KendoConfigBuilder.prototype.core = function core() {
          this.kendoButton().kendoTabStrip().kendoProgressBar().kendoSlider().kendoColorPicker().kendoDropDownList();
          return this;
        };

        KendoConfigBuilder.prototype.pro = function pro() {
          this.core().kendoGrid().kendoAutoComplete().kendoChart();
          return this;
        };

        KendoConfigBuilder.prototype.kendoAutoComplete = function kendoAutoComplete() {
          this.resources.push('autocomplete/autocomplete');
          return this;
        };

        KendoConfigBuilder.prototype.kendoButton = function kendoButton() {
          this.resources.push('button/button');
          return this;
        };

        KendoConfigBuilder.prototype.kendoMenu = function kendoMenu() {
          this.resources.push('menu/menu');
          return this;
        };

        KendoConfigBuilder.prototype.kendoCombobox = function kendoCombobox() {
          this.resources.push('combobox/combobox');
          return this;
        };

        KendoConfigBuilder.prototype.kendoDropDownList = function kendoDropDownList() {
          this.resources.push('dropdownlist/dropdownlist');
          return this;
        };

        KendoConfigBuilder.prototype.kendoGrid = function kendoGrid() {
          this.resources.push('grid/grid');
          this.resources.push('grid/au-col');
          return this;
        };

        KendoConfigBuilder.prototype.kendoScheduler = function kendoScheduler() {
          this.resources.push('scheduler/scheduler');
          return this;
        };

        KendoConfigBuilder.prototype.kendoTabStrip = function kendoTabStrip() {
          this.resources.push('tabstrip/tabstrip');
          return this;
        };

        KendoConfigBuilder.prototype.kendoToolbar = function kendoToolbar() {
          this.resources.push('toolbar/toolbar');
          return this;
        };

        KendoConfigBuilder.prototype.kendoChart = function kendoChart() {
          this.resources.push('chart/chart');
          this.resources.push('chart/sparkline');
          this.resources.push('chart/stock');
          this.resources.push('chart/treemap');
          return this;
        };

        KendoConfigBuilder.prototype.kendoProgressBar = function kendoProgressBar() {
          this.resources.push('progressbar/progressbar');
          return this;
        };

        KendoConfigBuilder.prototype.kendoSlider = function kendoSlider() {
          this.resources.push('slider/slider');
          return this;
        };

        KendoConfigBuilder.prototype.kendoColorPicker = function kendoColorPicker() {
          this.resources.push('colorpicker/colorpicker');
          return this;
        };

        return KendoConfigBuilder;
      })();
    }
  };
});