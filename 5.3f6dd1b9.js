(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/ikt":function(s,a,t){s.exports=t("iXgz")},GozT:function(s,a,t){var n,l,e;l=[a],void 0===(e="function"==typeof(n=function(a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{animation:!0,timeline:!0,camera:{position:{longitude:104.06,latitude:30.67,height:1e5},heading:360,pitch:-90,roll:0}}},methods:{ready:function(s){var a=s.Cesium,t=s.viewer;t.entities.add({id:"Welcome to Chengdu",position:a.Cartesian3.fromDegrees(104.06,30.67,100),billboard:new a.BillboardGraphics({image:"https://zouyaoji.top/vue-cesium/favicon.png",scale:.1}),label:new a.LabelGraphics({text:"Hello Word",fillColor:a.Color.GOLD,font:"24px sans-serif",horizontalOrigin:1,outlineColor:new a.Color(0,0,0,1),outlineWidth:2,pixelOffset:new a.Cartesian2(17,-5),style:a.LabelStyle.FILL})})}}},s.exports=a.default})?n.apply(a,l):n)||(s.exports=e)},ILe9:function(s,a,t){var n=t("fo9X");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("925c6b88",n,!0,{})},MW9R:function(s,a,t){var n=t("zC/H");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("cc8a6f8c",n,!0,{})},PuC8:function(s,a,t){var n=t("n72I");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("2846493b",n,!0,{})},Z6rL:function(s,a,t){var n=t("g708");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);(0,t("SZ7m").default)("455d4b3d",n,!0,{})},fo9X:function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"\n.viewer {\n  width: 100%;\n  height: 400px;\n}\n",""])},g708:function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"\n.viewer {\n  width: 100%;\n  height: 400px;\n}\n",""])},gSTu:function(s,a,t){"use strict";t.d(a,"a",function(){return n}),t.d(a,"b",function(){return l});var n=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("Usage")]),s._v(" "),t("h2",[s._v("Usage")]),s._v(" "),t("h3",[s._v("Global Registration")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),t("h3",[s._v("Local Registration")]),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),t("h3",[s._v("CDN Registration")]),s._v(" "),s._m(6),s._v(" "),t("h2",[s._v("Q&A")]),s._v(" "),s._m(7),s._v(" "),t("h3",[s._v("Wrong Way")]),s._v(" "),s._m(8),s._v(" "),t("h3",[s._v("Right Way")]),s._v(" "),s._m(9),s._v(" "),t("h2",[s._v("Hello world")]),s._v(" "),t("h3",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("cesium-viewer",{staticClass:"viewer",attrs:{animation:s.animation,timeline:s.timeline,camera:s.camera},on:{ready:s.ready}},[t("imagery-layer",[t("openstreetmap-imagery-provider")],1)],1)]],2),s._v(" "),t("h3",[s._v("Code")]),s._v(" "),s._m(10)],1)},l=[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("Regist all components of "),a("em",[this._v("vue-cesium")]),this._v(" at once.")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" VueCesium "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue-cesium'")]),s._v("\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// Vue-Cesium will load Cesium.js from `https://unpkg.com/cesium/Build/Cesium/Cesium.js`")]),s._v("\nVue.use(VueCesium)\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" VueCesium "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue-cesium'")]),s._v("\n\nVue.use(VueCesium, {\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// cesiumPath is path of Cesium.js', for example:")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// local Cesium Build package:")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// cesiumPath: /static/Cesium/Cesium.js")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// Personal online Cesium Build package：")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// Personal online SuperMap Cesium Build package：")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'")]),s._v("\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// Official Online Cesium Build package：")]),s._v("\n  cesiumPath: "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://unpkg.com/cesium/Build/Cesium/Cesium.js'")]),s._v(",\n  "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// Cesium.Ion.defaultAccessToken")]),s._v("\n  accessToken: "),t("span",{attrs:{class:"hljs-string"}},[s._v("''")]),s._v("\n})\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".viewer")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("400px")]),s._v(";\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("All components are stored in the "),a("code",{pre:!0},[this._v("vue-cesium / components")]),this._v(" folder.\nAs ES module can't be run directly in most browsers, if importing component causes some runtime errors, please check the webpack's loader configuration whethor the "),a("code",{pre:!0},[this._v("include")]),this._v(" and "),a("code",{pre:!0},[this._v("exclude")]),this._v(" options hits this library.")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" CesiumViewer "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{attrs:{class:"hljs-string"}},[s._v("'vue-cesium/components/viewer/CesiumViewer.vue'")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("components")]),s._v(": {\n    CesiumViewer\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n  "),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".viewer")]),s._v(" {\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n    "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("400px")]),s._v(";\n  }\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("ul",[a("li",[this._v("To be added")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ul",[t("li",[t("code",{pre:!0},[s._v("CesiumViewer")]),s._v(" component is an empty block level element. If it doesn't declare its height, the "),t("code",{pre:!0},[s._v("viewer")]),s._v(" will be invisible.")]),s._v(" "),t("li",[s._v("If you need to update your model, just do it in the callback of the global component event "),t("code",{pre:!0},[s._v("ready")]),s._v(".")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":animation")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"animation"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":camera")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"camera"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("camera")]),s._v(": {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("longitude")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("104.06")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("latitude")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("30.67")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("2000")]),s._v("\n        },\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("360")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("-90")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n      },\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    }\n  },\n  mounted () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".camera.position.longitude = "),t("span",{attrs:{class:"hljs-number"}},[s._v("116.46")]),s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".camera.position.latitude = "),t("span",{attrs:{class:"hljs-number"}},[s._v("39.92")]),s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".camera.position.height = "),t("span",{attrs:{class:"hljs-number"}},[s._v("500")]),s._v("\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".animation = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":animation")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"animation"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":camera")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"camera"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("camera")]),s._v(": {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("longitude")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("104.06")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("latitude")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("30.67")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("2000")]),s._v("\n        },\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("360")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("-90")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n      },\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    }\n  },\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    ready (cesiumInstance) {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n      "),t("span",{attrs:{class:"hljs-comment"}},[s._v("// Get Cesium and viewer instances here, then execute the relevant logic code")]),s._v("\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".camera.position.longitude = "),t("span",{attrs:{class:"hljs-number"}},[s._v("116.46")]),s._v("\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".camera.position.latitude = "),t("span",{attrs:{class:"hljs-number"}},[s._v("39.92")]),s._v("\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".camera.position.height = "),t("span",{attrs:{class:"hljs-number"}},[s._v("500")]),s._v("\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".animation = "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":animation")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"animation"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":timeline")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"timeline"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":camera")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"camera"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(">")]),s._v("\n      "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("openstreetmap-imagery-provider")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("openstreetmap-imagery-provider")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("imagery-layer")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("animation")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("timeline")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("camera")]),s._v(": {\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": {\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("longitude")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("104.06")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("latitude")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("30.67")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("100000")]),s._v("\n        },\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("360")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("-90")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n      }\n    }\n  },\n  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    ready (cesiumInstance) {\n      "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n      viewer.entities.add({\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Welcome to Chengdu'")]),s._v(",\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": Cesium.Cartesian3.fromDegrees("),t("span",{attrs:{class:"hljs-number"}},[s._v("104.06")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("30.67")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v("),\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("billboard")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.BillboardGraphics({\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("scale")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("0.1")]),s._v("\n        }),\n        "),t("span",{attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.LabelGraphics ({\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Word'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("fillColor")]),s._v(": Cesium.Color.GOLD,\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("font")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'24px sans-serif'")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("horizontalOrigin")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Color("),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("1")]),s._v("),\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("outlineWidth")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("pixelOffset")]),s._v(": "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),t("span",{attrs:{class:"hljs-number"}},[s._v("17")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("-5")]),s._v("),\n          "),t("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v(": Cesium.LabelStyle.FILL\n        })\n      })\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),t("span",{attrs:{class:"css"}},[s._v("\n"),t("span",{attrs:{class:"hljs-selector-class"}},[s._v(".viewer")]),s._v(" {\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("width")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("100%")]),s._v(";\n  "),t("span",{attrs:{class:"hljs-attribute"}},[s._v("height")]),s._v(": "),t("span",{attrs:{class:"hljs-number"}},[s._v("400px")]),s._v(";\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")]),s._v("\n")])])}]},iXgz:function(s,a,t){"use strict";t.r(a);var n=t("GozT"),l=t.n(n);for(var e in n)"default"!==e&&function(s){t.d(a,s,function(){return n[s]})}(e);var r=t("gSTu"),v=t("JFUb");var _=function(s){t("MW9R"),t("PuC8"),t("ILe9"),t("Z6rL")},c=Object(v.a)(l.a,r.a,r.b,!1,_,null,null);a.default=c.exports},n72I:function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"\n.viewer {\n  width: 100%;\n  height: 400px;\n}\n",""])},"zC/H":function(s,a,t){(s.exports=t("I1BE")(!1)).push([s.i,"\n.viewer {\n  width: 100%;\n  height: 400px;\n}\n",""])}}]);