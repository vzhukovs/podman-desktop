"use strict";
(self["webpackChunkdocs"] = self["webpackChunkdocs"] || []).push([[70142],{

/***/ 34409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_podman_podman_remote_md_a7f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-podman-podman-remote-md-a7f.json
const site_docs_podman_podman_remote_md_a7f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"podman/podman-remote","title":"Remote access","description":"Podman Desktop can access remote instances of Podman.","source":"@site/docs/podman/podman-remote.md","sourceDirName":"podman","slug":"/podman/podman-remote","permalink":"/docs/podman/podman-remote","draft":false,"unlisted":false,"editUrl":"https://github.com/podman-desktop/podman-desktop/tree/main/website/docs/podman/podman-remote.md","tags":[{"inline":true,"label":"podman","permalink":"/docs/tags/podman"},{"inline":true,"label":"installing","permalink":"/docs/tags/installing"},{"inline":true,"label":"windows","permalink":"/docs/tags/windows"},{"inline":true,"label":"macOS","permalink":"/docs/tags/mac-os"}],"version":"current","sidebarPosition":21,"frontMatter":{"sidebar_position":21,"title":"Remote access","description":"Podman Desktop can access remote instances of Podman.","tags":["podman","installing","windows","macOS"],"keywords":["podman desktop","containers","podman","remote"]},"sidebar":"mySidebar","previous":{"title":"Native Apple Rosetta translation layer (macOS)","permalink":"/docs/podman/rosetta"},"next":{"title":"Setting Podman machine default connection","permalink":"/docs/podman/setting-podman-machine-default-connection"}}');
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(62540);
// EXTERNAL MODULE: ../node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(43023);
;// ./docs/podman/podman-remote.md


const frontMatter = {
	sidebar_position: 21,
	title: 'Remote access',
	description: 'Podman Desktop can access remote instances of Podman.',
	tags: [
		'podman',
		'installing',
		'windows',
		'macOS'
	],
	keywords: [
		'podman desktop',
		'containers',
		'podman',
		'remote'
	]
};
const contentTitle = 'Remote access';

const assets = {

};



const toc = [{
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 4
}, {
  "value": "Procedure",
  "id": "procedure",
  "level": 4
}, {
  "value": "Verification",
  "id": "verification",
  "level": 4
}, {
  "value": "Additional resources",
  "id": "additional-resources",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h4: "h4",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "remote-access",
        children: "Remote access"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Podman Desktop can manage remote Podman connections. This is facilitated through a list of connections using the command ", (0,jsx_runtime.jsx)(_components.code, {
        children: "podman system connection ls"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Containers can be created, started, stopped, and deleted as if managed locally."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This functionality is enabled by connecting via SSH to the Podman socket on the remote host."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ed25519"
      }), " keys, an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH"
      }), " connection, and an enabled ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Podman Socket"
      }), " are required for remote access."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/mscdex/ssh2/issues/1375",
        children: "RSA keys are not supported"
      }), "; ed25519 keys are the recommended and only current method to set up a remote connection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSH access to a Linux machine with Podman installed"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "procedure",
      children: "Procedure"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Podman Desktop will automatically detect and show any ", (0,jsx_runtime.jsx)(_components.code, {
        children: "podman system connection ls"
      }), " connections within the GUI by enabling the setting:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Enable the remote setting",
        src: (__webpack_require__(24880)/* ["default"] */ .A) + "",
        width: "1162",
        height: "812"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you have not added a remote podman connection yet, you can follow the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/containers/podman/blob/main/docs/tutorials/remote_client.md",
        children: "official Podman guide"
      }), " or follow the steps below:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate a local ed25519 key:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "$ ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Copy your ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "public"
        }), " ed25519 key to the server:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Your public SSH key needs to be copied to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.ssh/authorized_keys"
      }), " file on the Linux server:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "$ ssh-copy-id -i ~/.ssh/id_ed25519.pub user@my-server-ip\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable the Podman socket on the remote connection:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, the podman.socket is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "disabled"
      }), " in Podman installations. Enabling the systemd socket allows remote clients to control Podman."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "$ systemctl enable podman.socket\n$ systemctl start podman.socket\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Confirm that the socket is enabled by checking the status:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "$ systemctl status --user podman.socket\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add the connection to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "podman system connection ls"
        }), ":"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "It's important to know which socket path you are using, as this varies between regular users and root."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "podman info"
      }), " to determine the correct socket path:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "$ ssh user@my-server-ip podman info | grep sock\n   path: /run/user/1000/podman/podman.sock\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you are using root, it may appear as:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "$ ssh root@my-server-ip podman info | grep sock\n   path: /run/podman/podman.sock\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now you are ready to add the connection. Add it with a distinct name to the Podman system connection list:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "# non-root\n$ podman system connection add my-remote-machine --identity ~/.ssh/id_ed25519 ssh://myuser@my-server-ip/run/user/1000/podman/podman.sock\n\n# root\n$ podman system connection add my-remote-machine --identity ~/.ssh/id_ed25519 ssh://root@my-server-ip/run/podman/podman.sock\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Check within Podman Desktop such as the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Containers"
        }), " section that you can now access your remote instance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "verification",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GUI verification:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run a helloworld container on the remote machine:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "$ ssh user@my-server-ip podman run -d quay.io/podman/hello\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Within Podman Desktop, check that your container appears in the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Containers"
        }), " section."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "CLI verification:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set your remote connection as the default:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "$ podman system connection default my-remote-machine\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify that the container appears in the CLI:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "$ podman ps\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "additional-resources",
      children: "Additional resources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.a, {
          href: "https://github.com/containers/podman/blob/main/docs/tutorials/remote_client.md",
          children: ["podman", ":docs", "/tutorials/remote_client.md"]
        })
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 24880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/remote-ba955961810a1051eb78648b54cf2614.png");

/***/ }),

/***/ 43023:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63696);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);