(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"2RHL":function(s,t,a){s.exports=a("xgkK")},b7tk:function(s,t,a){var n,r,e;r=[t],void 0===(e="function"==typeof(n=function(t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{description:"Hello Vue Cesium",rotation:0,rectangle1:{},coordinates1:{west:-110,south:20,east:-80,north:25},material1:{},rectangle2:{},coordinates2:{west:-110,south:30,east:-100,north:40},material2:{},rotation2:{},outlineColor2:{},rectangle3:{},coordinates3:{},material3:{},rotation3:{},stRotation3:{},classificationType3:0}},methods:{ready:function(s){var t=s.Cesium;s.viewer,this.rotation=t.Math.toRadians(30),this.material1=t.Color.RED.withAlpha(.5),this.material2=t.Color.GREEN.withAlpha(.5),this.rotation2=t.Math.toRadians(45),this.outlineColor2=t.Color.BLACK,this.coordinates3=t.Rectangle.fromDegrees(-92,30,-82,40),this.material3="https://zouyaoji.top/vue-cesium/favicon.png",this.outlineColor3=t.Color.BLACK,this.rotation3=new t.CallbackProperty(this.getRotationValue,!1),this.stRotation3=new t.CallbackProperty(this.getRotationValue,!1),this.classificationType3=t.ClassificationType.TERRAIN},getRotationValue:function(){return this.rotation+=.005,this.rotation},subReady:function(s){s.Cesium;var t=s.viewer;t.zoomTo(t.entities)}}},s.exports=t.default})?n.apply(t,r):n)||(s.exports=e)},gmMY:function(s,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r});var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("RectangleGraphics")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("Examples")]),s._v(" "),a("h3",[s._v("add a RectangleGraphics to viewer with entity")]),s._v(" "),a("h4",[s._v("Preview")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("cesium-viewer",{on:{ready:s.ready}},[a("entity",{attrs:{description:s.description,rectangle:s.rectangle1},on:{"update:rectangle":function(t){s.rectangle1=t}}},[a("rectangle-graphics",{attrs:{coordinates:s.coordinates1,material:s.material1}})],1),s._v(" "),a("entity",{attrs:{description:s.description,rectangle:s.rectangle2},on:{"update:rectangle":function(t){s.rectangle2=t}}},[a("rectangle-graphics",{attrs:{coordinates:s.coordinates2,material:s.material2,rotation:s.rotation2,extrudedHeight:3e5,height:1e5,outline:!0,outlineColor:s.outlineColor2}})],1),s._v(" "),a("entity",{attrs:{description:s.description,rectangle:s.rectangle3},on:{"update:rectangle":function(t){s.rectangle3=t}}},[a("rectangle-graphics",{attrs:{coordinates:s.coordinates3,material:s.material3,rotation:s.rotation3,stRotation:s.stRotation3,classificationType:s.classificationType3},on:{ready:s.subReady}})],1)],1)],1)]],2),s._v(" "),a("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("Events")]),s._v(" "),s._m(3)],1)},r=[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("rectangle-graphics")]),this._v(" Add an entity containing a rectangle object to the viewer as a subcomponent of "),t("code",{pre:!0},[this._v("entity")]),this._v(". Describes graphics for a Rectangle. The rectangle conforms to the curvature of the globe and can be placed on the surface or at altitude and can optionally be extruded into a volume. As shown in the example below.")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rectangle.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"rectangle1"')]),s._v(">")]),s._v("\n          "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("rectangle-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":coordinates")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"coordinates1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material1"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("rectangle-graphics")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rectangle.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"rectangle2"')]),s._v(">")]),s._v("\n          "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("rectangle-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":coordinates")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"coordinates2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rotation")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"rotation2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":extrudedHeight")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"300000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"100000.0"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outline")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"true"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":outlineColor")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"outlineColor2"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("rectangle-graphics")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":description")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"description"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rectangle.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"rectangle3"')]),s._v(">")]),s._v("\n          "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("rectangle-graphics")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":coordinates")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"coordinates3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":material")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"material3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":rotation")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"rotation3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":stRotation")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"stRotation3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":classificationType")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"classificationType3"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"subReady"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("rectangle-graphics")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("entity")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cesium-viewer")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n  "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("description")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hello Vue Cesium'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rotation")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rectangle1")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("coordinates1")]),s._v(": {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-110")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-80")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("25")]),s._v("\n        },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material1")]),s._v(": {},\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rectangle2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("coordinates2")]),s._v(": {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-110.0")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("30")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("-100")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v("\n        },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rotation2")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("outlineColor2")]),s._v(": {},\n\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rectangle3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("coordinates3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("material3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("rotation3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("stRotation3")]),s._v(": {},\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("classificationType3")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v("\n      }\n    },\n    "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready (cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".rotation = Cesium.Math.toRadians("),a("span",{attrs:{class:"hljs-number"}},[s._v("30")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material1 = Cesium.Color.RED.withAlpha("),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material2 = Cesium.Color.GREEN.withAlpha("),a("span",{attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".rotation2 = Cesium.Math.toRadians("),a("span",{attrs:{class:"hljs-number"}},[s._v("45")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".outlineColor2 = Cesium.Color.BLACK\n\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".coordinates3 = Cesium.Rectangle.fromDegrees("),a("span",{attrs:{class:"hljs-number"}},[s._v("-92.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("30.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("-82.0")]),s._v(", "),a("span",{attrs:{class:"hljs-number"}},[s._v("40.0")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".material3 = "),a("span",{attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/favicon.png'")]),s._v("\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".outlineColor3 = Cesium.Color.BLACK\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".rotation3 = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.CallbackProperty("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".getRotationValue, "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".stRotation3 = "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.CallbackProperty("),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".getRotationValue, "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(")\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".classificationType3 = Cesium.ClassificationType.TERRAIN\n      },\n      getRotationValue () {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".rotation += "),a("span",{attrs:{class:"hljs-number"}},[s._v("0.005")]),s._v("\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".rotation\n      },\n      subReady (cesiumInstance) {\n        "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" {Cesium, viewer} = cesiumInstance\n        viewer.zoomTo(viewer.entities)\n      }\n    }\n  }\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Reference official document "),t("a",{attrs:{href:"https://cesiumjs.org/Cesium/Build/Documentation/RectangleGraphics.html"}},[this._v("RectangleGraphics")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("parameter")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer}")]),s._v(" "),a("td",[s._v("Triggers when PolylineGraphics is ready. It returns a core class of Cesium, a viewer instance.")])])])])}]},xgkK:function(s,t,a){"use strict";a.r(t);var n=a("b7tk"),r=a.n(n);for(var e in n)"default"!==e&&function(s){a.d(t,s,function(){return n[s]})}(e);var l=a("gmMY"),v=a("JFUb"),i=Object(v.a)(r.a,l.a,l.b,!1,null,null,null);t.default=i.exports}}]);