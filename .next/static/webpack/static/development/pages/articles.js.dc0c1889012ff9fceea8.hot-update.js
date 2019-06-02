webpackHotUpdate("static\\development\\pages\\articles.js",{

/***/ "./pages/articles.js":
/*!***************************!*\
  !*** ./pages/articles.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ResponsiveDrawer */ "./components/ResponsiveDrawer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Launch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Launch */ "./node_modules/@material-ui/icons/Launch.js");
/* harmony import */ var _material_ui_icons_Launch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Launch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_api_NPS_Query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/api/NPS_Query */ "./components/api/NPS_Query.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/default.css */ "./static/default.css");
/* harmony import */ var _static_default_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_default_css__WEBPACK_IMPORTED_MODULE_10__);











var drawerWidth = 240;
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  var _grid;

  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      width: "100%"
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    grid: (_grid = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_grid, theme.breakpoints.up('xs'), {
      paddingLeft: theme.spacing(0)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_grid, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(30)
    }), _grid),
    button: {
      margin: theme.spacing(1)
    },
    image: {
      width: "100%",
      position: "relative",
      objectFit: "cover"
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    p: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.breakpoints.only('xs'), {
      fontSize: "large"
    }),
    maintitle: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.breakpoints.only('xs'), {
      fontSize: "xx-large"
    })
  };
});

function CenteredGrid(_ref) {
  var articles = _ref.articles;
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", {
    className: classes.content
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.toolbar
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    spacing: 3,
    className: classes.grid
  }, articles.map(function (articleObj) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      xs: 12,
      md: 6
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
      className: classes.paper
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      color: "textPrimary",
      variant: "h3",
      style: {
        fontWeight: 'bold'
      },
      className: classes.maintitle
    }, articleObj.title), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      id: "trim"
    }, articleObj.listingimage.url.length > 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      className: classes.image,
      src: articleObj.listingimage.url
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null)), articleObj.listingimage.url.length > 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("br", null) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      paragraph: true,
      className: classes.p
    }, articleObj.listingdescription), articleObj.url.length > 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      href: articleObj.url,
      color: "primary"
    }, "Read Full Article", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Launch__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.rightIcon
    })) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], null)));
  }), articles.length === 0 ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    xs: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Paper"], {
    className: classes.paper
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    color: "textPrimary",
    variant: "h4",
    style: {
      fontWeight: 'bold'
    }
  }, "No Articles Found"))) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null)));
}

var Details = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      root: {
        flexGrow: 1
      }
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_ResponsiveDrawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: props.parks.data[0].fullName + " Articles",
    park: props.router.query.objectId
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CenteredGrid, {
    articles: props.articles.data
  }));
});

Details.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var objectId, res, parks, res2, articles;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            objectId = context.query.objectId;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()(Object(_components_api_NPS_Query__WEBPACK_IMPORTED_MODULE_8__["default"])("parks", objectId));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            parks = _context.sent;
            _context.next = 9;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()(Object(_components_api_NPS_Query__WEBPACK_IMPORTED_MODULE_8__["default"])("articles", objectId));

          case 9:
            res2 = _context.sent;
            _context.next = 12;
            return res2.json();

          case 12:
            articles = _context.sent;
            console.log("Fetched ".concat(parks.data[0].fullName));
            return _context.abrupt("return", {
              parks: parks,
              articles: articles
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Details);

/***/ })

})
//# sourceMappingURL=articles.js.dc0c1889012ff9fceea8.hot-update.js.map