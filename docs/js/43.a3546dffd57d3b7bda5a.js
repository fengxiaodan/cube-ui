webpackJsonp([43],{443:function(s,t,a){s.exports=a(493)},493:function(s,t,a){var n=a(11)(null,a(494),null,null,null);s.exports=n.exports},494:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h2",[s._v("ActionSheet")]),s._v(" "),a("p",[a("code",{pre:!0},[s._v("ActionSheet")]),s._v(" provides two common styles and it is flexible.")]),s._v(" "),a("h3",[s._v("Example")]),s._v(" "),a("ul",[a("li",[s._v("Basic usage")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showActionSheet"')]),s._v(">")]),s._v("action sheet"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    showDefault() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createActionSheet({\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'我是标题~~~'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'<em>舒适型</em>'")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("class")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'cube-foo'")]),s._v("\n          },\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'七座商务'")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v("\n          },\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'豪华型'")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("align")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v("\n          }\n        ],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("onSelect")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("item, index")]),s._v(") =>")]),s._v(" {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createToast({\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("`Clicked "),a("span",{attrs:{class:"hljs-subst"}},[s._v("${item.content}")]),s._v("`")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("\n          }).show()\n        }\n      }).show()\n    }\n  }\n}\n")])]),s._v(" "),a("p",[s._v("You can create a basic actionsheet by setting "),a("code",{pre:!0},[s._v("title")]),s._v(" and "),a("code",{pre:!0},[s._v("data")]),s._v(" option. Pay attention that "),a("code",{pre:!0},[s._v("content")]),s._v(" in "),a("code",{pre:!0},[s._v("data")]),s._v(" can be a HTML string. Also, setting the custom class by "),a("code",{pre:!0},[s._v("class")]),s._v(" and setting the align of the item's content by "),a("code",{pre:!0},[s._v("align")]),s._v(".")]),s._v(" "),a("ul",[a("li",[s._v("Highlight item")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showActive"')]),s._v(">")]),s._v("ActionSheet - active"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    showActive() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createActionSheet({\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'我是标题~~~'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("active")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("0")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'舒适型'")]),s._v("\n          },\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'七座商务'")]),s._v("\n          },\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'豪华型'")]),s._v("\n          }\n        ],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("onSelect")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("item, index")]),s._v(") =>")]),s._v(" {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createToast({\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("`Clicked "),a("span",{attrs:{class:"hljs-subst"}},[s._v("${item.content}")]),s._v("`")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'correct'")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("\n          }).show()\n        },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("onCancel")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createToast({\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("`Clicked canceled`")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'warn'")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("\n          }).show()\n        }\n      }).show()\n    }\n  }\n}\n")])]),s._v(" "),a("p",[s._v("You can control the highlighted item by setting the "),a("code",{pre:!0},[s._v("active")]),s._v(" option.")]),s._v(" "),a("ul",[a("li",[s._v("Picker style setting")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"showPickerStyle"')]),s._v(">")]),s._v("ActionSheet - picker style"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("cube-button")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-js"}},[a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    showPickerStyle() {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createActionSheet({\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'我是标题~~~'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("pickerStyle")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'舒适型'")]),s._v("\n          },\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'七座商务'")]),s._v("\n          },\n          {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("content")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'豪华型'")]),s._v("\n          }\n        ],\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("onSelect")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[s._v("("),a("span",{attrs:{class:"hljs-params"}},[s._v("item, index")]),s._v(") =>")]),s._v(" {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createToast({\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("`Clicked "),a("span",{attrs:{class:"hljs-subst"}},[s._v("${item.content}")]),s._v("`")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'correct'")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("\n          }).show()\n        },\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("onCancel")]),s._v(": "),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n          "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$createToast({\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("txt")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("`Clicked canceled`")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'warn'")]),s._v(",\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v("\n          }).show()\n        }\n      }).show()\n    }\n  }\n}\n")])]),s._v(" "),a("p",[s._v("You can use Picker style by setting "),a("code",{pre:!0},[s._v("pickerStyle")]),s._v(" to be true.")]),s._v(" "),a("h3",[s._v("Props configuration")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Attribute")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Accepted Values")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("title")]),s._v(" "),a("td",[s._v("actionsheet's title")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("''")])]),s._v(" "),a("tr",[a("td",[s._v("data")]),s._v(" "),a("td",[s._v("the data list to display")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("[]")])]),s._v(" "),a("tr",[a("td",[s._v("active")]),s._v(" "),a("td",[s._v("the highlighted item's index")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-1")])]),s._v(" "),a("tr",[a("td",[s._v("pickerStyle")]),s._v(" "),a("td",[s._v("Picker style")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("true/false")]),s._v(" "),a("td",[s._v("false")])])])]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("data")]),s._v(" sub configuration")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Attribute")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Accepted Values")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("content")]),s._v(" "),a("td",[s._v("the content to display in the actionsheet's item")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("any text, include HTML")]),s._v(" "),a("td",[s._v("''")])]),s._v(" "),a("tr",[a("td",[s._v("align")]),s._v(" "),a("td",[s._v("align the content")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("left/right")]),s._v(" "),a("td",[s._v("''")])]),s._v(" "),a("tr",[a("td",[s._v("class")]),s._v(" "),a("td",[s._v("custom class")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("''")])])])]),s._v(" "),a("h3",[s._v("Events")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Event Name")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Parameters 1")]),s._v(" "),a("th",[s._v("Parameters 2")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("cancel")]),s._v(" "),a("td",[s._v("triggers when clicking the cancel button")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("select")]),s._v(" "),a("td",[s._v("triggers when clicking some item")]),s._v(" "),a("td",[s._v("the clicked item - data[index]")]),s._v(" "),a("td",[s._v("the index of the clicked item")])])])])])}]}}});