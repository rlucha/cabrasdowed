module.exports = {
    "ui": {
        "port": 3001,
        "weinre": {
            "port": 8080
        }
    },
    "files": ["./public"],
    "watchoptions": {},
    "server": {
      baseDir: "public"
    },
    "proxy": false,
    "port": 3000,
    "middleware": false,
    "servestatic": [],
    "ghostmode": {
        "clicks": true,
        "scroll": true,
        "forms": {
            "submit": true,
            "inputs": true,
            "toggles": true
        }
    },
    "loglevel": "info",
    "logprefix": "bs",
    "logconnections": false,
    "logfilechanges": true,
    "logsnippet": true,
    "rewriterules": false,
    "open": "local",
    "browser": "default",
    "xip": false,
    "hostnamesuffix": false,
    "reloadonrestart": false,
    "notify": true,
    "scrollproportionally": true,
    "scrollthrottle": 0,
    "scrollrestoretechnique": "window.name",
    "scrollelements": [],
    "scrollelementmapping": [],
    "reloaddelay": 0,
    "reloaddebounce": 0,
    "plugins": [],
    "injectchanges": true,
    "startpath": null,
    "minify": true,
    "host": null,
    "codesync": true,
    "timestamps": true,
    "clientevents": [
        "scroll",
        "scroll:element",
        "input:text",
        "input:toggles",
        "form:submit",
        "form:reset",
        "click"
    ],
    "socket": {
        "socketiooptions": {
            "log": false
        },
        "socketioclientconfig": {
            "reconnectionattempts": 50
        },
        "path": "/browser-sync/socket.io",
        "clientpath": "/browser-sync",
        "namespace": "/browser-sync",
        "clients": {
            "heartbeattimeout": 5000
        }
    },
    "tagnames": {
        "less": "link",
        "scss": "link",
        "css": "link",
        "jpg": "img",
        "jpeg": "img",
        "png": "img",
        "svg": "img",
        "gif": "img",
        "js": "script"
    }
};
