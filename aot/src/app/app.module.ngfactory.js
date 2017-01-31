/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require("@angular/core/src/linker/ng_module_factory");
var import1 = require("../../../src/app/app.module");
var import2 = require("@angular/common/src/common_module");
var import3 = require("@angular/core/src/application_module");
var import4 = require("@angular/platform-browser/src/browser");
var import5 = require("@angular/common/src/localization");
var import6 = require("@angular/core/src/application_init");
var import7 = require("@angular/core/src/testability/testability");
var import8 = require("@angular/core/src/application_ref");
var import9 = require("@angular/core/src/linker/compiler");
var import10 = require("@angular/platform-browser/src/dom/events/hammer_gestures");
var import11 = require("@angular/platform-browser/src/dom/events/event_manager");
var import12 = require("@angular/platform-browser/src/dom/shared_styles_host");
var import13 = require("@angular/platform-browser/src/dom/dom_renderer");
var import14 = require("@angular/platform-browser/src/security/dom_sanitization_service");
var import15 = require("@angular/core/src/animation/animation_queue");
var import16 = require("@angular/core/src/linker/view_utils");
var import17 = require("@angular/platform-browser/src/browser/title");
var import19 = require("./app.component.ngfactory");
var import20 = require("@angular/core/src/i18n/tokens");
var import21 = require("@angular/core/src/application_tokens");
var import22 = require("@angular/platform-browser/src/dom/events/dom_events");
var import23 = require("@angular/platform-browser/src/dom/events/key_events");
var import24 = require("@angular/core/src/zone/ng_zone");
var import25 = require("@angular/platform-browser/src/dom/debug/ng_probe");
var import26 = require("@angular/core/src/console");
var import27 = require("@angular/core/src/error_handler");
var import28 = require("@angular/platform-browser/src/dom/dom_tokens");
var import29 = require("@angular/platform-browser/src/dom/animation_driver");
var import30 = require("@angular/core/src/render/api");
var import31 = require("@angular/core/src/security");
var import32 = require("@angular/core/src/change_detection/differs/iterable_differs");
var import33 = require("@angular/core/src/change_detection/differs/keyvalue_differs");
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [import19.AppComponentNgFactory], [import19.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_4", {
        get: function () {
            if ((this.__LOCALE_ID_4 == null)) {
                (this.__LOCALE_ID_4 = import3._localeFactory(this.parent.get(import20.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_5", {
        get: function () {
            if ((this.__NgLocalization_5 == null)) {
                (this.__NgLocalization_5 = new import5.NgLocaleLocalization(this._LOCALE_ID_4));
            }
            return this.__NgLocalization_5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_10", {
        get: function () {
            if ((this.__ApplicationRef_10 == null)) {
                (this.__ApplicationRef_10 = this._ApplicationRef__9);
            }
            return this.__ApplicationRef_10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_11", {
        get: function () {
            if ((this.__Compiler_11 == null)) {
                (this.__Compiler_11 = new import9.Compiler());
            }
            return this.__Compiler_11;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_12", {
        get: function () {
            if ((this.__APP_ID_12 == null)) {
                (this.__APP_ID_12 = import21._appIdRandomProviderFactory());
            }
            return this.__APP_ID_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_13", {
        get: function () {
            if ((this.__DOCUMENT_13 == null)) {
                (this.__DOCUMENT_13 = import4._document());
            }
            return this.__DOCUMENT_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_14", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_14 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_14 = new import10.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_15", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_15 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_15 = [
                    new import22.DomEventsPlugin(),
                    new import23.KeyEventsPlugin(),
                    new import10.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_14)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_16", {
        get: function () {
            if ((this.__EventManager_16 == null)) {
                (this.__EventManager_16 = new import11.EventManager(this._EVENT_MANAGER_PLUGINS_15, this.parent.get(import24.NgZone)));
            }
            return this.__EventManager_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_17", {
        get: function () {
            if ((this.__DomSharedStylesHost_17 == null)) {
                (this.__DomSharedStylesHost_17 = new import12.DomSharedStylesHost(this._DOCUMENT_13));
            }
            return this.__DomSharedStylesHost_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_18", {
        get: function () {
            if ((this.__AnimationDriver_18 == null)) {
                (this.__AnimationDriver_18 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_19", {
        get: function () {
            if ((this.__DomRootRenderer_19 == null)) {
                (this.__DomRootRenderer_19 = new import13.DomRootRenderer_(this._DOCUMENT_13, this._EventManager_16, this._DomSharedStylesHost_17, this._AnimationDriver_18, this._APP_ID_12));
            }
            return this.__DomRootRenderer_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_20", {
        get: function () {
            if ((this.__RootRenderer_20 == null)) {
                (this.__RootRenderer_20 = import25._createConditionalRootRenderer(this._DomRootRenderer_19, this.parent.get(import25.NgProbeToken, null), this.parent.get(import8.NgProbeToken, null)));
            }
            return this.__RootRenderer_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_21", {
        get: function () {
            if ((this.__DomSanitizer_21 == null)) {
                (this.__DomSanitizer_21 = new import14.DomSanitizerImpl());
            }
            return this.__DomSanitizer_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_22", {
        get: function () {
            if ((this.__Sanitizer_22 == null)) {
                (this.__Sanitizer_22 = this._DomSanitizer_21);
            }
            return this.__Sanitizer_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_23", {
        get: function () {
            if ((this.__AnimationQueue_23 == null)) {
                (this.__AnimationQueue_23 = new import15.AnimationQueue(this.parent.get(import24.NgZone)));
            }
            return this.__AnimationQueue_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_24", {
        get: function () {
            if ((this.__ViewUtils_24 == null)) {
                (this.__ViewUtils_24 = new import16.ViewUtils(this._RootRenderer_20, this._Sanitizer_22, this._AnimationQueue_23));
            }
            return this.__ViewUtils_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_25", {
        get: function () {
            if ((this.__IterableDiffers_25 == null)) {
                (this.__IterableDiffers_25 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_26", {
        get: function () {
            if ((this.__KeyValueDiffers_26 == null)) {
                (this.__KeyValueDiffers_26 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_27", {
        get: function () {
            if ((this.__SharedStylesHost_27 == null)) {
                (this.__SharedStylesHost_27 = this._DomSharedStylesHost_17);
            }
            return this.__SharedStylesHost_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_28", {
        get: function () {
            if ((this.__Title_28 == null)) {
                (this.__Title_28 = new import17.Title());
            }
            return this.__Title_28;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._AppModule_3 = new import1.AppModule();
        this._ErrorHandler_6 = import4.errorHandler();
        this._ApplicationInitStatus_7 = new import6.ApplicationInitStatus(this.parent.get(import6.APP_INITIALIZER, null));
        this._Testability_8 = new import7.Testability(this.parent.get(import24.NgZone));
        this._ApplicationRef__9 = new import8.ApplicationRef_(this.parent.get(import24.NgZone), this.parent.get(import26.Console), this, this._ErrorHandler_6, this, this._ApplicationInitStatus_7, this.parent.get(import7.TestabilityRegistry, null), this._Testability_8);
        return this._AppModule_3;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_3;
        }
        if ((token === import20.LOCALE_ID)) {
            return this._LOCALE_ID_4;
        }
        if ((token === import5.NgLocalization)) {
            return this._NgLocalization_5;
        }
        if ((token === import27.ErrorHandler)) {
            return this._ErrorHandler_6;
        }
        if ((token === import6.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_7;
        }
        if ((token === import7.Testability)) {
            return this._Testability_8;
        }
        if ((token === import8.ApplicationRef_)) {
            return this._ApplicationRef__9;
        }
        if ((token === import8.ApplicationRef)) {
            return this._ApplicationRef_10;
        }
        if ((token === import9.Compiler)) {
            return this._Compiler_11;
        }
        if ((token === import21.APP_ID)) {
            return this._APP_ID_12;
        }
        if ((token === import28.DOCUMENT)) {
            return this._DOCUMENT_13;
        }
        if ((token === import10.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_14;
        }
        if ((token === import11.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_15;
        }
        if ((token === import11.EventManager)) {
            return this._EventManager_16;
        }
        if ((token === import12.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_17;
        }
        if ((token === import29.AnimationDriver)) {
            return this._AnimationDriver_18;
        }
        if ((token === import13.DomRootRenderer)) {
            return this._DomRootRenderer_19;
        }
        if ((token === import30.RootRenderer)) {
            return this._RootRenderer_20;
        }
        if ((token === import14.DomSanitizer)) {
            return this._DomSanitizer_21;
        }
        if ((token === import31.Sanitizer)) {
            return this._Sanitizer_22;
        }
        if ((token === import15.AnimationQueue)) {
            return this._AnimationQueue_23;
        }
        if ((token === import16.ViewUtils)) {
            return this._ViewUtils_24;
        }
        if ((token === import32.IterableDiffers)) {
            return this._IterableDiffers_25;
        }
        if ((token === import33.KeyValueDiffers)) {
            return this._KeyValueDiffers_26;
        }
        if ((token === import12.SharedStylesHost)) {
            return this._SharedStylesHost_27;
        }
        if ((token === import17.Title)) {
            return this._Title_28;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__9.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
exports.AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map