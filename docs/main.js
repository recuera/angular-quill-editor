(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n\n<app-quill-editor [(ngModel)]=\"textContent\"></app-quill-editor>\n\n<hr>\n\n<h5>Inserted Text Preview</h5>\n<div class=\"quill-preview\" [innerHTML]=\"textContent | safehtml\"></div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'quill-text-editor';
        this.textContent = 'ARYA FOR PRESIDENT';
    }
    AppComponent.prototype.consoleText = function (text) {
        console.log(text);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/safe-html.pipe */ "./src/app/pipes/safe-html.pipe.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quill_editor_quill_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quill-editor/quill-editor.component */ "./src/app/quill-editor/quill-editor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _quill_editor_quill_editor_component__WEBPACK_IMPORTED_MODULE_4__["QuillEditorComponent"],
                _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_0__["SafehtmlPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pipes/safe-html.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafehtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafehtmlPipe", function() { return SafehtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafehtmlPipe = /** @class */ (function () {
    function SafehtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafehtmlPipe.prototype.transform = function (v, args) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SafehtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safehtml'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafehtmlPipe);
    return SafehtmlPipe;
}());



/***/ }),

/***/ "./src/app/quill-editor/quill-editor.component.css":
/*!*********************************************************!*\
  !*** ./src/app/quill-editor/quill-editor.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/quill-editor/quill-editor.component.html":
/*!**********************************************************!*\
  !*** ./src/app/quill-editor/quill-editor.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #quillToolbar>\n  <span class=\"ql-formats\">\n    <button class=\"ql-bold\"></button>\n    <button class=\"ql-italic\"></button>\n    <button class=\"ql-underline\"></button>\n    <button class=\"ql-strike\"></button>\n  </span>\n  <span class=\"ql-formats\">\n    <select class=\"ql-color\"></select>\n    <select class=\"ql-background\"></select>\n  </span>\n  <span class=\"ql-formats\">\n    <button class=\"ql-script\" value=\"sub\"></button>\n    <button class=\"ql-script\" value=\"super\"></button>\n  </span>\n  <span class=\"ql-formats\">\n    <select class=\"ql-header\" value=\"1\"></select>\n  </span>\n  <span class=\"ql-formats\">\n    <button class=\"ql-list\" value=\"ordered\"></button>\n    <button class=\"ql-list\" value=\"bullet\"></button>\n    <button class=\"ql-indent\" value=\"-1\"></button>\n    <button class=\"ql-indent\" value=\"+1\"></button>\n  </span>\n  <span class=\"ql-formats\">\n    <button class=\"ql-direction\" value=\"rtl\"></button>\n    <select class=\"ql-align\"></select>\n  </span>\n  <span class=\"ql-formats\">\n    <button class=\"ql-link\"></button>\n    <button class=\"ql-image\"></button>\n    <button class=\"ql-video\"></button>\n  </span>\n  <span class=\"ql-formats\">\n    <button *ngFor=\"let customButton of customButtons\" [ngClass]=\"customButton.type\" (click)=\"insertVariable(customButton.type)\">{{customButton.label}}</button>\n  </span>\n</div>\n\n<div #quillEditor>\n</div>\n"

/***/ }),

/***/ "./src/app/quill-editor/quill-editor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/quill-editor/quill-editor.component.ts ***!
  \********************************************************/
/*! exports provided: QuillEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuillEditorComponent", function() { return QuillEditorComponent; });
/* harmony import */ var _quillConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quillConfig */ "./src/app/quill-editor/quillConfig.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill */ "./node_modules/quill/dist/quill.js");
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuillEditorComponent = /** @class */ (function () {
    function QuillEditorComponent(elementRef) {
        this.elementRef = elementRef;
        this.quillContent = '';
        this.name = 'quill-editor';
        this.required = false;
        this.customButtons = _quillConfig__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_VARIABLE_BUTTONS"];
        this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    QuillEditorComponent_1 = QuillEditorComponent;
    Object.defineProperty(QuillEditorComponent.prototype, "ngModel", {
        set: function (ngModel) {
            if (ngModel) {
                this.quillContent = ngModel;
            }
        },
        enumerable: true,
        configurable: true
    });
    QuillEditorComponent.prototype.ngOnInit = function () {
        this.createQuillEditorElement();
        this.initQuillEditor();
        this.setInitialContent();
    };
    QuillEditorComponent.prototype.createQuillEditorElement = function () {
        this.quillToolbar = this.elementRef.nativeElement.children[0];
        this.quillEditor = this.elementRef.nativeElement.children[1];
    };
    QuillEditorComponent.prototype.initQuillEditor = function () {
        this.quill = new quill__WEBPACK_IMPORTED_MODULE_3__(this.quillEditor, Object.assign({
            modules: {
                toolbar: this.quillToolbar
            },
            placeholder: 'Insert text here ...',
            readOnly: false,
            theme: 'snow',
            boundary: document.body
        }, {}));
        quill__WEBPACK_IMPORTED_MODULE_3__["register"](quill__WEBPACK_IMPORTED_MODULE_3__["import"]('attributors/style/align'), true);
        this.quill.on('text-change', this.emitQuillText.bind(this));
    };
    QuillEditorComponent.prototype.setInitialContent = function () {
        this.quill.root.innerHTML = this.quillContent;
    };
    QuillEditorComponent.prototype.emitQuillText = function () {
        this.quillContent = this.quill.root.innerHTML === '<p><br></p>' ? null : this.quill.root.innerHTML;
        this.ngModelChange.emit(this.quillContent);
    };
    QuillEditorComponent.prototype.insertVariable = function (variableText) {
        var selection = this.quill.getSelection(true);
        this.quill.insertText(selection.index, " " + variableText + " ");
    };
    // These methods are required for the NgModel binding to work properly
    QuillEditorComponent.prototype.writeValue = function () {
    };
    QuillEditorComponent.prototype.registerOnChange = function () {
    };
    QuillEditorComponent.prototype.registerOnTouched = function () {
    };
    var QuillEditorComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], QuillEditorComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], QuillEditorComponent.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], QuillEditorComponent.prototype, "customButtons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], QuillEditorComponent.prototype, "ngModel", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], QuillEditorComponent.prototype, "ngModelChange", void 0);
    QuillEditorComponent = QuillEditorComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quill-editor',
            template: __webpack_require__(/*! ./quill-editor.component.html */ "./src/app/quill-editor/quill-editor.component.html"),
            styles: [__webpack_require__(/*! ./quill-editor.component.css */ "./src/app/quill-editor/quill-editor.component.css")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    multi: true,
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return QuillEditorComponent_1; }),
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], QuillEditorComponent);
    return QuillEditorComponent;
}());



/***/ }),

/***/ "./src/app/quill-editor/quillConfig.ts":
/*!*********************************************!*\
  !*** ./src/app/quill-editor/quillConfig.ts ***!
  \*********************************************/
/*! exports provided: TOOLBAR_OPTIONS, TOOLBAR_BUTTONS, DEFAULT_QUILL_CONFIG, DEFAULT_QUILL_TOOLBAR, CUSTOM_VARIABLE_BUTTONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLBAR_OPTIONS", function() { return TOOLBAR_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLBAR_BUTTONS", function() { return TOOLBAR_BUTTONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_QUILL_CONFIG", function() { return DEFAULT_QUILL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_QUILL_TOOLBAR", function() { return DEFAULT_QUILL_TOOLBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_VARIABLE_BUTTONS", function() { return CUSTOM_VARIABLE_BUTTONS; });
var TOOLBAR_OPTIONS = {
    FONT_STYLES: ['bold', 'italic', 'underline', 'strike'],
    FONT_FORMATS: ['blockquote', 'code-block'],
    HTML_TEXT_FORMATS: [{ 'header': 1 }, { 'header': 2 }],
    LIST_FORMATS: [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    SUPER_SUB_SCRIPT: [{ 'script': 'sub' }, { 'script': 'super' }],
    TEXT_INDENT: [{ 'indent': '-1' }, { 'indent': '+1' }],
    TEXT_DIRECTION: [{ 'direction': 'rtl' }],
    FONT_SIZE: [{ 'size': ['small', false, 'large', 'huge'] }],
    HTML_TEXT_FORMAT_DROPDOWN: [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    COLORS: [{ 'color': [] }, { 'background': [] }],
    FONT_FAMILY: [{ 'font': [] }],
    TEXT_ALIGN: [{ 'align': [] }],
    CLEAR: ['clean'],
    HYPERLINK: ['link'],
    IMAGE: ['image'],
    VIDEO: ['video'],
};
var TOOLBAR_BUTTONS;
(function (TOOLBAR_BUTTONS) {
    TOOLBAR_BUTTONS["BOLD"] = "ql-bold";
    TOOLBAR_BUTTONS["ITALIC"] = "ql-italic";
    TOOLBAR_BUTTONS["UNDERLINE"] = "ql-underline";
    TOOLBAR_BUTTONS["STRIKE"] = "ql-strike";
})(TOOLBAR_BUTTONS || (TOOLBAR_BUTTONS = {}));
var DEFAULT_QUILL_CONFIG = {
    toolbar: [
        TOOLBAR_OPTIONS.FONT_STYLES,
        TOOLBAR_OPTIONS.LIST_FORMATS,
        TOOLBAR_OPTIONS.FONT_SIZE,
        TOOLBAR_OPTIONS.HTML_TEXT_FORMAT_DROPDOWN,
        TOOLBAR_OPTIONS.COLORS,
        TOOLBAR_OPTIONS.TEXT_ALIGN,
        TOOLBAR_OPTIONS.HYPERLINK,
    ],
};
var DEFAULT_QUILL_TOOLBAR = [
    TOOLBAR_BUTTONS.BOLD,
    TOOLBAR_BUTTONS.ITALIC,
    TOOLBAR_BUTTONS.UNDERLINE
];
var CUSTOM_VARIABLE_BUTTONS = [
    { type: 'Jon Snow', label: 'Jon' },
    { type: 'Daenerys Targaryen', label: 'Dany' },
    { type: 'Cersei Lannister', label: 'Cersei' },
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/anarecuero/Documents/desarrollo/angular/quill-wysiwyg-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map