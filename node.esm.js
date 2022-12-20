"use strict";
var exports = void 0;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return new $mol_style_unit(value, '%'); }
        static px(value) { return new $mol_style_unit(value, 'px'); }
        static mm(value) { return new $mol_style_unit(value, 'mm'); }
        static cm(value) { return new $mol_style_unit(value, 'cm'); }
        static Q(value) { return new $mol_style_unit(value, 'Q'); }
        static in(value) { return new $mol_style_unit(value, 'in'); }
        static pc(value) { return new $mol_style_unit(value, 'pc'); }
        static pt(value) { return new $mol_style_unit(value, 'pt'); }
        static cap(value) { return new $mol_style_unit(value, 'cap'); }
        static ch(value) { return new $mol_style_unit(value, 'ch'); }
        static em(value) { return new $mol_style_unit(value, 'em'); }
        static rem(value) { return new $mol_style_unit(value, 'rem'); }
        static ex(value) { return new $mol_style_unit(value, 'ex'); }
        static ic(value) { return new $mol_style_unit(value, 'ic'); }
        static lh(value) { return new $mol_style_unit(value, 'lh'); }
        static rlh(value) { return new $mol_style_unit(value, 'rlh'); }
        static vh(value) { return new $mol_style_unit(value, 'vh'); }
        static vw(value) { return new $mol_style_unit(value, 'vw'); }
        static vi(value) { return new $mol_style_unit(value, 'vi'); }
        static vb(value) { return new $mol_style_unit(value, 'vb'); }
        static vmin(value) { return new $mol_style_unit(value, 'vmin'); }
        static vmax(value) { return new $mol_style_unit(value, 'vmax'); }
        static deg(value) { return new $mol_style_unit(value, 'deg'); }
        static rad(value) { return new $mol_style_unit(value, 'rad'); }
        static grad(value) { return new $mol_style_unit(value, 'grad'); }
        static turn(value) { return new $mol_style_unit(value, 'turn'); }
        static s(value) { return new $mol_style_unit(value, 's'); }
        static ms(value) { return new $mol_style_unit(value, 'ms'); }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = new Proxy({ require }, {
    get(target, name, wrapper) {
        if (target[name])
            return target[name];
        const mod = target.require('module');
        if (mod.builtinModules.indexOf(name) >= 0)
            return target.require(name);
        if (name[0] === '.')
            return target.require(name);
        const path = target.require('path');
        const fs = target.require('fs');
        let dir = path.resolve('.');
        const suffix = `./node_modules/${name}`;
        const $$ = $;
        while (!fs.existsSync(path.join(dir, suffix))) {
            const parent = path.resolve(dir, '..');
            if (parent === dir) {
                $$.$mol_exec('.', 'npm', 'install', '--omit=dev', name);
                try {
                    $$.$mol_exec('.', 'npm', 'install', '--omit=dev', '@types/' + name);
                }
                catch { }
                break;
            }
            else {
                dir = parent;
            }
        }
        return target.require(name);
    },
    set(target, name, value) {
        target[name] = value;
        return true;
    },
});
require = (req => Object.assign(function require(name) {
    return $node[name];
}, req))(require);
//node/node.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_log3_area_lazy(event) {
        const self = this;
        const stack = self.$mol_log3_stack;
        const deep = stack.length;
        let logged = false;
        stack.push(() => {
            logged = true;
            self.$mol_log3_area.call(self, event);
        });
        return () => {
            if (logged)
                self.console.groupEnd();
            if (stack.length > deep)
                stack.length = deep;
        };
    }
    $.$mol_log3_area_lazy = $mol_log3_area_lazy;
    $.$mol_log3_stack = [];
})($ || ($ = {}));
//mol/log3/log3.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_tree_convert = Symbol('$mol_tree_convert');
    class $mol_tree extends $mol_object2 {
        type;
        data;
        sub;
        baseUri;
        row;
        col;
        length;
        constructor(config = {}) {
            super();
            this.type = config.type || '';
            if (config.value !== undefined) {
                var sub = $mol_tree.values(config.value);
                if (config.type || sub.length > 1) {
                    this.sub = [...sub, ...(config.sub || [])];
                    this.data = config.data || '';
                }
                else {
                    this.data = sub[0].data;
                    this.sub = config.sub || [];
                }
            }
            else {
                this.data = config.data || '';
                this.sub = config.sub || [];
            }
            this.baseUri = config.baseUri || '';
            this.row = config.row || 0;
            this.col = config.col || 0;
            this.length = config.length || 0;
        }
        static values(str, baseUri) {
            return str.split('\n').map((data, index) => new $mol_tree({
                data: data,
                baseUri: baseUri,
                row: index + 1,
                length: data.length,
            }));
        }
        clone(config = {}) {
            return new $mol_tree({
                type: ('type' in config) ? config.type : this.type,
                data: ('data' in config) ? config.data : this.data,
                sub: ('sub' in config) ? config.sub : this.sub,
                baseUri: ('baseUri' in config) ? config.baseUri : this.baseUri,
                row: ('row' in config) ? config.row : this.row,
                col: ('col' in config) ? config.col : this.col,
                length: ('length' in config) ? config.length : this.length,
                value: config.value
            });
        }
        make(config) {
            return new $mol_tree({
                baseUri: this.baseUri,
                row: this.row,
                col: this.col,
                length: this.length,
                ...config,
            });
        }
        make_data(value, sub) {
            return this.make({ value, sub });
        }
        make_struct(type, sub) {
            return this.make({ type, sub });
        }
        static fromString(str, baseUri) {
            var root = new $mol_tree({ baseUri: baseUri });
            var stack = [root];
            var row = 0;
            var prefix = str.replace(/^\n?(\t*)[\s\S]*/, '$1');
            var lines = str.replace(new RegExp('^\\t{0,' + prefix.length + '}', 'mg'), '').split('\n');
            lines.forEach(line => {
                ++row;
                var chunks = /^(\t*)((?:[^\n\t\\ ]+ *)*)(\\[^\n]*)?(.*?)(?:$|\n)/m.exec(line);
                if (!chunks || chunks[4])
                    return this.$.$mol_fail(new Error(`Syntax error at ${baseUri}:${row}\n${line}`));
                var indent = chunks[1];
                var path = chunks[2];
                var data = chunks[3];
                var deep = indent.length;
                var types = path ? path.replace(/ $/, '').split(/ +/) : [];
                if (stack.length <= deep)
                    return this.$.$mol_fail(new Error(`Too many tabs at ${baseUri}:${row}\n${line}`));
                stack.length = deep + 1;
                var parent = stack[deep];
                let col = deep;
                types.forEach(type => {
                    if (!type)
                        return this.$.$mol_fail(new Error(`Unexpected space symbol ${baseUri}:${row}\n${line}`));
                    var next = new $mol_tree({ type, baseUri, row, col, length: type.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                    col += type.length + 1;
                });
                if (data) {
                    var next = new $mol_tree({ data: data.substring(1), baseUri, row, col, length: data.length });
                    const parent_sub = parent.sub;
                    parent_sub.push(next);
                    parent = next;
                }
                stack.push(parent);
            });
            return root;
        }
        static fromJSON(json, baseUri = '') {
            switch (true) {
                case typeof json === 'boolean':
                case typeof json === 'number':
                case json === null:
                    return new $mol_tree({
                        type: String(json),
                        baseUri: baseUri
                    });
                case typeof json === 'string':
                    return new $mol_tree({
                        value: json,
                        baseUri: baseUri
                    });
                case Array.isArray(json):
                    return new $mol_tree({
                        type: "/",
                        sub: json.map(json => $mol_tree.fromJSON(json, baseUri))
                    });
                case json instanceof Date:
                    return new $mol_tree({
                        value: json.toISOString(),
                        baseUri: baseUri
                    });
                default:
                    if (typeof json[$.$mol_tree_convert] === 'function') {
                        return json[$.$mol_tree_convert]();
                    }
                    if (typeof json.toJSON === 'function') {
                        return $mol_tree.fromJSON(json.toJSON());
                    }
                    if (json instanceof Error) {
                        const { name, message, stack } = json;
                        json = { ...json, name, message, stack };
                    }
                    var sub = [];
                    for (var key in json) {
                        if (json[key] === undefined)
                            continue;
                        const subsub = $mol_tree.fromJSON(json[key], baseUri);
                        if (/^[^\n\t\\ ]+$/.test(key)) {
                            var child = new $mol_tree({
                                type: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        else {
                            var child = new $mol_tree({
                                value: key,
                                baseUri: baseUri,
                                sub: [subsub],
                            });
                        }
                        sub.push(child);
                    }
                    return new $mol_tree({
                        type: "*",
                        sub: sub,
                        baseUri: baseUri
                    });
            }
        }
        get uri() {
            return this.baseUri + '#' + this.row + ':' + this.col;
        }
        toString(prefix = '') {
            var output = '';
            if (this.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output += this.type;
                if (this.sub.length == 1) {
                    return output + ' ' + this.sub[0].toString(prefix);
                }
                output += "\n";
            }
            else if (this.data.length || prefix.length) {
                output += "\\" + this.data + "\n";
            }
            for (var child of this.sub) {
                output += prefix;
                output += child.toString(prefix + "\t");
            }
            return output;
        }
        toJSON() {
            if (!this.type)
                return this.value;
            if (this.type === 'true')
                return true;
            if (this.type === 'false')
                return false;
            if (this.type === 'null')
                return null;
            if (this.type === '*') {
                var obj = {};
                for (var child of this.sub) {
                    if (child.type === '-')
                        continue;
                    var key = child.type || child.clone({ sub: child.sub.slice(0, child.sub.length - 1) }).value;
                    var val = child.sub[child.sub.length - 1].toJSON();
                    if (val !== undefined)
                        obj[key] = val;
                }
                return obj;
            }
            if (this.type === '/') {
                var res = [];
                this.sub.forEach(child => {
                    if (child.type === '-')
                        return;
                    var val = child.toJSON();
                    if (val !== undefined)
                        res.push(val);
                });
                return res;
            }
            if (this.type === 'time') {
                return new Date(this.value);
            }
            const numb = Number(this.type);
            if (!Number.isNaN(numb) || this.type === 'NaN')
                return numb;
            throw new Error(`Unknown type (${this.type}) at ${this.uri}`);
        }
        get value() {
            var values = [];
            for (var child of this.sub) {
                if (child.type)
                    continue;
                values.push(child.value);
            }
            return this.data + values.join("\n");
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.sub.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                });
                if (!replaced)
                    sub.push(new $mol_tree({ type }).insert(value, ...path.slice(1)));
                return this.clone({ sub });
            }
            else if (typeof type === 'number') {
                const sub = this.sub.slice();
                sub[type] = (sub[type] || new $mol_tree).insert(value, ...path.slice(1));
                return this.clone({ sub });
            }
            else {
                return this.clone({ sub: ((this.sub.length === 0) ? [new $mol_tree()] : this.sub).map(item => item.insert(value, ...path.slice(1))) });
            }
        }
        select(...path) {
            var next = [this];
            for (var type of path) {
                if (!next.length)
                    break;
                var prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.sub) {
                                if (!type || (child.type == type)) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.sub.length)
                                next.push(item.sub[type]);
                            break;
                        default: next.push(...item.sub);
                    }
                }
            }
            return new $mol_tree({ sub: next });
        }
        filter(path, value) {
            var sub = this.sub.filter(function (item) {
                var found = item.select(...path);
                if (value == null) {
                    return Boolean(found.sub.length);
                }
                else {
                    return found.sub.some(child => child.value == value);
                }
            });
            return new $mol_tree({ sub: sub });
        }
        transform(visit, stack = []) {
            const sub_stack = [this, ...stack];
            return visit(sub_stack, () => this.sub.map(node => node.transform(visit, sub_stack)).filter(n => n));
        }
        hack(context) {
            const sub = [].concat(...this.sub.map(child => {
                const handle = context[child.type] || context[''];
                if (!handle)
                    $mol_fail(child.error('Handler not defined'));
                return handle(child, context);
            }));
            return this.clone({ sub });
        }
        error(message) {
            return new Error(`${message}:\n${this} ${this.baseUri}:${this.row}:${this.col}`);
        }
    }
    $.$mol_tree = $mol_tree;
})($ || ($ = {}));
//mol/tree/tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_term_color {
        static reset = this.ansi(0, 0);
        static bold = this.ansi(1, 22);
        static italic = this.ansi(3, 23);
        static underline = this.ansi(4, 24);
        static inverse = this.ansi(7, 27);
        static hidden = this.ansi(8, 28);
        static strike = this.ansi(9, 29);
        static gray = this.ansi(90, 39);
        static red = this.ansi(91, 39);
        static green = this.ansi(92, 39);
        static yellow = this.ansi(93, 39);
        static blue = this.ansi(94, 39);
        static magenta = this.ansi(95, 39);
        static cyan = this.ansi(96, 39);
        static Gray = (str) => this.inverse(this.gray(str));
        static Red = (str) => this.inverse(this.red(str));
        static Green = (str) => this.inverse(this.green(str));
        static Yellow = (str) => this.inverse(this.yellow(str));
        static Blue = (str) => this.inverse(this.blue(str));
        static Magenta = (str) => this.inverse(this.magenta(str));
        static Cyan = (str) => this.inverse(this.cyan(str));
        static ansi(open, close) {
            if (typeof process === 'undefined')
                return String;
            if (!process.stdout.isTTY)
                return String;
            const prefix = `\x1b[${open}m`;
            const postfix = `\x1b[${close}m`;
            const suffix_regexp = new RegExp(postfix.replace('[', '\\['), 'g');
            return function colorer(str) {
                str = String(str);
                if (str === '')
                    return str;
                const suffix = str.replace(suffix_regexp, prefix);
                return prefix + suffix + postfix;
            };
        }
    }
    $.$mol_term_color = $mol_term_color;
})($ || ($ = {}));
//mol/term/color/color.ts
;
"use strict";
var $;
(function ($) {
    function $mol_log3_node_make(level, output, type, color) {
        return function $mol_log3_logger(event) {
            if (!event.time)
                event = { time: new Date().toISOString(), ...event };
            const tree = this.$mol_tree.fromJSON(event).clone({ type });
            let str = color(tree.toString());
            this.console[level](str);
            const self = this;
            return () => self.console.groupEnd();
        };
    }
    $.$mol_log3_node_make = $mol_log3_node_make;
    $.$mol_log3_come = $mol_log3_node_make('info', 'stdout', 'come', $mol_term_color.blue);
    $.$mol_log3_done = $mol_log3_node_make('info', 'stdout', 'done', $mol_term_color.green);
    $.$mol_log3_fail = $mol_log3_node_make('error', 'stderr', 'fail', $mol_term_color.red);
    $.$mol_log3_warn = $mol_log3_node_make('warn', 'stderr', 'warn', $mol_term_color.yellow);
    $.$mol_log3_rise = $mol_log3_node_make('log', 'stdout', 'rise', $mol_term_color.magenta);
    $.$mol_log3_area = $mol_log3_node_make('log', 'stdout', 'area', $mol_term_color.cyan);
})($ || ($ = {}));
//mol/log3/log3.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_env() {
        return {};
    }
    $.$mol_env = $mol_env;
})($ || ($ = {}));
//mol/env/env.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_env = function $mol_env() {
        return this.process.env;
    };
})($ || ($ = {}));
//mol/env/env.node.ts
;
"use strict";
var $;
(function ($) {
    function $mol_exec(dir, command, ...args) {
        let [app, ...args0] = command.split(' ');
        args = [...args0, ...args];
        this.$mol_log3_come({
            place: '$mol_exec',
            dir: $node.path.relative('', dir),
            message: 'Run',
            command: `${app} ${args.join(' ')}`,
        });
        var res = $node['child_process'].spawnSync(app, args, {
            cwd: $node.path.resolve(dir),
            shell: true,
            env: this.$mol_env(),
        });
        if (res.status || res.error)
            return $mol_fail(res.error || new Error(res.stderr.toString()));
        if (!res.stdout)
            res.stdout = Buffer.from([]);
        return res;
    }
    $.$mol_exec = $mol_exec;
})($ || ($ = {}));
//mol/exec/exec.node.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = new $node.jsdom.JSDOM('', { url: 'https://localhost/' }).window;
})($ || ($ = {}));
//mol/dom/context/context.node.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tbackground-color: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50% , calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0% , calc( 50% - 30% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), 50%, calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), 0%, 50%, .05 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 5% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 25% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% + 25% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        card: vary('--mol_theme_card'),
        current: vary('--mol_theme_current'),
        special: vary('--mol_theme_special'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
        space: vary('--mol_gap_space'),
        blur: vary('--mol_gap_blur'),
    };
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            return {
                width: 1024,
                height: 768,
            };
        }
    }
    $.$mol_window = $mol_window;
})($ || ($ = {}));
//mol/window/window.node.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    let auto = null;
    function $mol_wire_auto(next = auto) {
        return auto = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] = $['devtoolsFormatters'] || [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_timeout extends $mol_object2 {
        delay;
        task;
        id;
        constructor(delay, task) {
            super();
            this.delay = delay;
            this.task = task;
            this.id = setTimeout(task, delay);
        }
        destructor() {
            clearTimeout(this.id);
        }
    }
    $.$mol_after_timeout = $mol_after_timeout;
})($ || ($ = {}));
//mol/after/timeout/timeout.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_after_timeout {
        task;
        constructor(task) {
            super(16, task);
            this.task = task;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.node.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if (this.cache instanceof Promise)
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if (result instanceof Promise) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || error instanceof Promise) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if (result instanceof Promise && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            if (!(result instanceof Promise)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if (this.cache instanceof Promise) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!(this.cache instanceof Promise))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right['source'] && left.flags === right['flags'];
        if (left instanceof Error)
            return left.message === right['message'] && left.stack === right['stack'];
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (left_proto && !Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (left_keys.length !== right_keys.length)
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], Reflect.get(right, key)))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!(existen instanceof $mol_wire_task))
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        complete() {
            if (this.cache instanceof Promise)
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if (next instanceof Promise) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = `${prefix}.${field}`;
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const id = `${prefix}.${task.name}(${$mol_key(key)})`;
            if (dict) {
                const existen = dict.get(id);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(id, fiber);
            return fiber;
        }
        static watching = new Set();
        static watch() {
            new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            if (next !== prev) {
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                this.cache = next;
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (this.sub_from < this.data.length) {
                    if (!$mol_compare_deep(prev, next)) {
                        this.emit();
                    }
                }
            }
            this.cursor = $mol_wire_cursor.fresh;
            if (next instanceof Promise)
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
    $mol_wire_atom.watch();
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
//mol/type/tail/tail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));
//mol/wire/solo/solo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto() instanceof $mol_wire_task) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));
//mol/wire/plex/plex.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    const cacthed = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if (cacthed.get(error))
            return false;
        cacthed.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if (error instanceof Promise)
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, next) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            return task();
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is equired for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        const current = $mol_wire_auto();
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/solid/solid.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        var getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));
//mol/dom/render/events/events.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            if (typeof val === 'number') {
                style[name] = `${val}px`;
            }
            else {
                style[name] = val;
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tword-break: break-word;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n    justify-content: center;\n}\n\n@keyframes mol_view_wait_move {\n\tfrom {\n\t\tbackground-position: 0 0;\n\t}\n\tto {\n\t\tbackground-position: 200vmax 0;\n\t}\n}\n\n@keyframes mol_view_wait_show {\n\tto {\n\t\tbackground-image: repeating-linear-gradient(\n\t\t\t45deg,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 0% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 5% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 45% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 50% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 55% ,\n\t\t\thsla( 0 , 0% , 50% , 0 ) 95% ,\n\t\t\thsla( 0 , 0% , 50% , .5 ) 100%\n\t\t);\n\t\tbackground-size: 200vmax 200vmax;\n\t}\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait_show .5s .5s linear forwards , mol_view_wait_move 1s linear infinite;\n\topacity: .75;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_showed = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.constructor.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                $mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if (error instanceof Promise)
                    break render;
                if ((error_showed.get(error) ?? this) !== this)
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_showed.set(error, this);
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                classes.push(current.constructor);
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (owner?.host instanceof $mol_view) {
                const suffix = owner.task.name.trim();
                const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
                for (let Class of owner.host.constructor.view_classes()) {
                    if (suffix in Class.prototype)
                        names.push(this.$.$mol_func_name(Class) + suffix2);
                    else
                        break;
                }
                for (let prefix of owner.host.view_names_owned()) {
                    names.push(prefix + suffix2);
                }
            }
            return names;
        }
        view_names() {
            const names = [];
            for (let name of this.view_names_owned()) {
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (!name)
                    continue;
                if (names.indexOf(name) < 0)
                    names.push(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            this.dom_final();
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_frame(() => {
                this.dom_node().scrollIntoView({ inline: 'start' });
                this.focused(true);
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
//mol/type/result/result.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            overflow: 'auto',
        });
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'overlay',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
                basis: 0,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            ':hover': {
                '::-webkit-scrollbar': {
                    width: rem(.5),
                    height: rem(.5),
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_book2 extends $mol_scroll {
        sub() {
            return this.pages();
        }
        minimal_width() {
            return 0;
        }
        Placeholder() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    $.$mol_book2 = $mol_book2;
})($ || ($ = {}));
//mol/book2/-view.tree/book2.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem_cached = $mol_wire_probe;
})($ || ($ = {}));
//mol/mem/cached/cached.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n[mol_book2] > * + *:not([mol_book2_placeholder]):before {\n\tdisplay: block;\n\tcontent: '=';\n\topacity: .5;\n\tposition: absolute;\n\ttop: -.5rem;\n\tleft: -.325rem;\n}\n\n[mol_book2] > *:where( :nth-child(odd):not([mol_book2_placeholder]) ) {\n\tbackground-color: var(--mol_theme_card);\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\t/* background: var(--mol_theme_back); */\n}\n");
})($ || ($ = {}));
//mol/book2/-css/book2.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_book2 extends $.$mol_book2 {
            title() {
                return this.pages().map(page => {
                    try {
                        return page?.title();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                    }
                }).reverse().filter(Boolean).join(' | ');
            }
            sub() {
                const next = [...this.pages(), this.Placeholder()];
                const prev = $mol_mem_cached(() => this.sub()) ?? [];
                for (let i = 1; i++;) {
                    const p = prev[prev.length - i];
                    const n = next[next.length - i];
                    if (!n)
                        break;
                    if (p === n)
                        continue;
                    n.bring();
                    break;
                }
                return next;
            }
            bring() {
                const pages = this.pages();
                if (pages.length)
                    pages[pages.length - 1].bring();
                else
                    super.bring();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_book2.prototype, "sub", null);
        $$.$mol_book2 = $mol_book2;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/book2/book2.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_theme_auto extends $mol_plugin {
        attr() {
            return {
                mol_theme: this.theme()
            };
        }
        theme() {
            return "";
        }
    }
    $.$mol_theme_auto = $mol_theme_auto;
})($ || ($ = {}));
//mol/theme/auto/-view.tree/auto.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_arg extends $mol_object {
        prefix;
        static href(next) {
            return next || process.argv.slice(2).join(' ');
        }
        static href_normal() {
            return this.link({});
        }
        static dict(next) {
            if (next !== void 0)
                this.href(this.make_link(next));
            var href = this.href();
            var chunks = href.split(' ');
            var params = {};
            chunks.forEach(chunk => {
                if (!chunk)
                    return;
                var vals = chunk.split('=').map(decodeURIComponent);
                params[vals.shift()] = vals.join('=');
            });
            return params;
        }
        static value(key, next) {
            if (next === void 0)
                return this.dict()[key] ?? null;
            this.href(this.link({ [key]: next }));
            return next;
        }
        static link(next) {
            var params = {};
            var prev = this.dict();
            for (var key in prev) {
                params[key] = prev[key];
            }
            for (var key in next) {
                params[key] = next[key];
            }
            return this.make_link(params);
        }
        static make_link(next) {
            var chunks = [];
            for (var key in next) {
                if (null == next[key])
                    continue;
                chunks.push([key].concat(next[key]).map(encodeURIComponent).join('='));
            }
            return chunks.join(' ');
        }
        static go(next) {
            this.href(this.make_link(next));
        }
        constructor(prefix = '') {
            super();
            this.prefix = prefix;
        }
        value(key, next) {
            return this.constructor.value(this.prefix + key, next);
        }
        sub(postfix) {
            return new this.constructor(this.prefix + postfix + '.');
        }
        link(next) {
            var prefix = this.prefix;
            var dict = {};
            for (var key in next) {
                dict[prefix + key] = next[key];
            }
            return this.constructor.link(dict);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "href_normal", null);
    __decorate([
        $mol_mem
    ], $mol_state_arg, "dict", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_arg, "value", null);
    __decorate([
        $mol_action
    ], $mol_state_arg, "go", null);
    $.$mol_state_arg = $mol_state_arg;
})($ || ($ = {}));
//mol/state/arg/arg.node.ts
;
"use strict";
var $;
(function ($) {
    class $mol_media extends $mol_object2 {
        static match(query, next) {
            if (next !== undefined)
                return next;
            const res = this.$.$mol_dom_context.matchMedia?.(query) ?? {};
            res.onchange = () => this.match(query, res.matches);
            return res.matches;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_media, "match", null);
    $.$mol_media = $mol_media;
})($ || ($ = {}));
//mol/media/media.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_local extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.localStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static changes(next) { return next; }
        static value(key, next) {
            this.changes();
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_local.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_state_local, "changes", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_local, "value", null);
    $.$mol_state_local = $mol_state_local;
})($ || ($ = {}));
//mol/state/local/local.ts
;
"use strict";
var $;
(function ($) {
    function parse(theme) {
        if (theme === 'true')
            return true;
        if (theme === 'false')
            return false;
        return null;
    }
    function $mol_lights(next) {
        const arg = parse(this.$mol_state_arg.value('mol_lights'));
        const base = this.$mol_media.match('(prefers-color-scheme: light)');
        if (next === undefined) {
            return arg ?? this.$mol_state_local.value('$mol_lights') ?? base;
        }
        else {
            if (arg === null) {
                this.$mol_state_local.value('$mol_lights', next === base ? null : next);
            }
            else {
                this.$mol_state_arg.value('mol_lights', String(next));
            }
            return next;
        }
    }
    $.$mol_lights = $mol_lights;
})($ || ($ = {}));
//mol/lights/lights.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_theme_auto extends $.$mol_theme_auto {
            theme() {
                return this.$.$mol_lights() ? '$mol_theme_light' : '$mol_theme_dark';
            }
        }
        $$.$mol_theme_auto = $mol_theme_auto;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/theme/auto/auto.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg extends $mol_view {
        dom_name() {
            return "svg";
        }
        dom_name_space() {
            return "http://www.w3.org/2000/svg";
        }
        font_size() {
            return 16;
        }
        font_family() {
            return "";
        }
        style_size() {
            return {};
        }
    }
    $.$mol_svg = $mol_svg;
})($ || ($ = {}));
//mol/svg/-view.tree/svg.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_time extends $mol_object {
        static task(precision, reset) {
            if (precision) {
                return new $mol_after_timeout(precision, () => this.task(precision, null));
            }
            else {
                return new $mol_after_frame(() => this.task(precision, null));
            }
        }
        static now(precision) {
            this.task(precision);
            return Date.now();
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "task", null);
    __decorate([
        $mol_mem_key
    ], $mol_state_time, "now", null);
    $.$mol_state_time = $mol_state_time;
})($ || ($ = {}));
//mol/state/time/time.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_svg extends $.$mol_svg {
            computed_style() {
                const win = this.$.$mol_dom_context;
                const style = win.getComputedStyle(this.dom_node());
                if (!style['font-size'])
                    $mol_state_time.now(0);
                return style;
            }
            font_size() {
                return parseInt(this.computed_style()['font-size']) || 16;
            }
            font_family() {
                return this.computed_style()['font-family'];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "computed_style", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_size", null);
        __decorate([
            $mol_mem
        ], $mol_svg.prototype, "font_family", null);
        $$.$mol_svg = $mol_svg;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/svg/svg.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_root extends $mol_svg {
        dom_name() {
            return "svg";
        }
        attr() {
            return {
                ...super.attr(),
                viewBox: this.view_box(),
                preserveAspectRatio: this.aspect()
            };
        }
        view_box() {
            return "0 0 100 100";
        }
        aspect() {
            return "xMidYMid";
        }
    }
    $.$mol_svg_root = $mol_svg_root;
})($ || ($ = {}));
//mol/svg/root/-view.tree/root.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/svg/root/root.view.css", "[mol_svg_root] {\n\toverflow: hidden;\n}\n");
})($ || ($ = {}));
//mol/svg/root/-css/root.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_svg_path extends $mol_svg {
        dom_name() {
            return "path";
        }
        attr() {
            return {
                ...super.attr(),
                d: this.geometry()
            };
        }
        geometry() {
            return "";
        }
    }
    $.$mol_svg_path = $mol_svg_path;
})($ || ($ = {}));
//mol/svg/path/-view.tree/path.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon extends $mol_svg_root {
        view_box() {
            return "0 0 24 24";
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        sub() {
            return [
                this.Path()
            ];
        }
        path() {
            return "";
        }
        Path() {
            const obj = new this.$.$mol_svg_path();
            obj.geometry = () => this.path();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_icon.prototype, "Path", null);
    $.$mol_icon = $mol_icon;
})($ || ($ = {}));
//mol/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1rem;\n\theight: 1rem;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tmargin: .25rem 0;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link extends $mol_view {
        uri() {
            return "";
        }
        dom_name() {
            return "a";
        }
        attr() {
            return {
                ...super.attr(),
                href: this.uri_toggle(),
                title: this.hint_safe(),
                target: this.target(),
                download: this.file_name(),
                mol_link_current: this.current()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        arg() {
            return {};
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.click(event)
            };
        }
        uri_toggle() {
            return "";
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        target() {
            return "_self";
        }
        file_name() {
            return "";
        }
        current() {
            return false;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        click(event) {
            return this.event_click(event);
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link.prototype, "event_click", null);
    $.$mol_link = $mol_link;
})($ || ($ = {}));
//mol/link/-view.tree/link.view.tree.ts
;
"use strict";
var $;
(function ($) {
    const { rem } = $mol_style_unit;
    const { scale } = $mol_style_func;
    $mol_style_define($mol_link, {
        textDecoration: 'none',
        color: $mol_theme.control,
        stroke: 'currentcolor',
        cursor: 'pointer',
        padding: $mol_gap.text,
        boxSizing: 'border-box',
        position: 'relative',
        minWidth: rem(2.5),
        gap: $mol_gap.space,
        border: {
            radius: $mol_gap.round,
        },
        ':hover': {
            background: {
                color: $mol_theme.hover,
            },
            $mol_icon: {
                transform: 'scale(1.5)',
            },
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            },
            $mol_icon: {
                transform: 'scale(1.5)',
            },
        },
        ':focus-within': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
            }
        },
        ':active': {
            color: $mol_theme.focus,
        },
        '@': {
            mol_link_current: {
                'true': {
                    color: $mol_theme.current,
                    textShadow: '0 0',
                }
            }
        },
    });
})($ || ($ = {}));
//mol/link/link.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_link extends $.$mol_link {
            uri_toggle() {
                return this.current() ? this.uri_off() : this.uri();
            }
            uri() {
                return new this.$.$mol_state_arg(this.state_key()).link(this.arg());
            }
            uri_off() {
                const arg2 = {};
                for (let i in this.arg())
                    arg2[i] = null;
                return new this.$.$mol_state_arg(this.state_key()).link(arg2);
            }
            uri_native() {
                const base = this.$.$mol_state_arg.href();
                return new URL(this.uri(), base);
            }
            current() {
                const base = this.$.$mol_state_arg.href_normal();
                const target = this.uri_native().toString();
                if (base === target)
                    return true;
                const args = this.arg();
                const keys = Object.keys(args).filter(key => args[key] != null);
                if (keys.length === 0)
                    return false;
                for (const key of keys) {
                    if (this.$.$mol_state_arg.value(key) != args[key])
                        return false;
                }
                return true;
            }
            file_name() {
                return null;
            }
            minimal_height() {
                return Math.max(super.minimal_height(), 24);
            }
            external() {
                return this.uri_native().origin !== $mol_dom_context.location.origin;
            }
            target() {
                return this.external() ? '_blank' : '_self';
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_toggle", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_off", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "uri_native", null);
        __decorate([
            $mol_mem
        ], $mol_link.prototype, "current", null);
        $$.$mol_link = $mol_link;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/link/link.view.ts
;
"use strict";
//mol/charset/encoding/encoding.ts
;
"use strict";
var $;
(function ($) {
    const decoders = {};
    function $mol_charset_decode(buffer, encoding = 'utf8') {
        let decoder = decoders[encoding];
        if (!decoder)
            decoder = decoders[encoding] = new TextDecoder(encoding);
        return decoder.decode(buffer);
    }
    $.$mol_charset_decode = $mol_charset_decode;
})($ || ($ = {}));
//mol/charset/decode/decode.ts
;
"use strict";
var $;
(function ($) {
    const TextEncoder = globalThis.TextEncoder ?? $node.util.TextEncoder;
    const encoder = new TextEncoder();
    function $mol_charset_encode(value) {
        return encoder.encode(value);
    }
    $.$mol_charset_encode = $mol_charset_encode;
})($ || ($ = {}));
//mol/charset/encode/encode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_file_not_found extends Error {
    }
    $.$mol_file_not_found = $mol_file_not_found;
    class $mol_file extends $mol_object {
        static absolute(path) {
            throw new Error('Not implemented yet');
        }
        static relative(path) {
            throw new Error('Not implemented yet');
        }
        static base = '';
        path() {
            return '.';
        }
        parent() {
            return this.resolve('..');
        }
        reset() {
            try {
                this.stat(null);
            }
            catch (error) {
                if (error instanceof $mol_file_not_found)
                    return;
                return $mol_fail_hidden(error);
            }
        }
        version() {
            return this.stat()?.mtime.getTime().toString(36).toUpperCase() ?? '';
        }
        watcher() {
            console.warn('$mol_file_web.watcher() not implemented');
            return {
                destructor() { }
            };
        }
        exists(next) {
            let exists = Boolean(this.stat());
            if (next === undefined)
                return exists;
            if (next === exists)
                return exists;
            if (next)
                this.parent().exists(true);
            this.ensure();
            this.reset();
            return next;
        }
        type() {
            return this.stat()?.type ?? '';
        }
        name() {
            return this.path().replace(/^.*\//, '');
        }
        ext() {
            const match = /((?:\.\w+)+)$/.exec(this.path());
            return match ? match[1].substring(1) : '';
        }
        text(next, virt) {
            if (virt) {
                const now = new Date;
                this.stat({
                    type: 'file',
                    size: 0,
                    atime: now,
                    mtime: now,
                    ctime: now,
                }, 'virt');
                return next;
            }
            if (next === undefined) {
                return $mol_charset_decode(this.buffer(undefined));
            }
            else {
                const buffer = next === undefined ? undefined : $mol_charset_encode(next);
                this.buffer(buffer);
                return next;
            }
        }
        find(include, exclude) {
            const found = [];
            const sub = this.sub();
            for (const child of sub) {
                const child_path = child.path();
                if (exclude && child_path.match(exclude))
                    continue;
                if (!include || child_path.match(include))
                    found.push(child);
                if (child.type() === 'dir') {
                    const sub_child = child.find(include, exclude);
                    for (const child of sub_child)
                        found.push(child);
                }
            }
            return found;
        }
        size() {
            switch (this.type()) {
                case 'file': return this.stat()?.size ?? 0;
                default: return 0;
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "exists", null);
    __decorate([
        $mol_mem
    ], $mol_file.prototype, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_file, "absolute", null);
    $.$mol_file = $mol_file;
})($ || ($ = {}));
//mol/file/file.ts
;
"use strict";
var $;
(function ($) {
    function $mol_compare_array(a, b) {
        if (a === b)
            return true;
        if (Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
            return false;
        if (a.length !== b.length)
            return false;
        for (let i = 0; i < a.length; i++)
            if (a[i] !== b[i])
                return false;
        return true;
    }
    $.$mol_compare_array = $mol_compare_array;
})($ || ($ = {}));
//mol/compare/array/array.ts
;
"use strict";
var $;
(function ($) {
    function stat_convert(stat) {
        if (!stat)
            return null;
        let type;
        if (stat.isDirectory())
            type = 'dir';
        if (stat.isFile())
            type = 'file';
        if (stat.isSymbolicLink())
            type = 'link';
        if (!type)
            return $mol_fail(new Error(`Unsupported file type`));
        return {
            type,
            size: Number(stat.size),
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime
        };
    }
    function buffer_normalize(buf) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    class $mol_file_node extends $mol_file {
        static absolute(path) {
            return this.make({
                path: $mol_const(path)
            });
        }
        static relative(path) {
            return this.absolute($node.path.resolve(this.base, path).replace(/\\/g, '/'));
        }
        watcher() {
            const watcher = $node.chokidar.watch(this.path(), {
                persistent: true,
                ignored: /(^\.|___$)/,
                depth: 0,
                ignoreInitial: true,
                awaitWriteFinish: {
                    stabilityThreshold: 100,
                },
            });
            watcher
                .on('all', (type, path) => {
                const file = $mol_file.relative(path.replace(/\\/g, '/'));
                file.reset();
                if (type === 'change') {
                    this.stat(null);
                }
                else {
                    file.parent().reset();
                }
            })
                .on('error', $mol_fail_log);
            return {
                destructor() {
                    watcher.close();
                }
            };
        }
        stat(next, virt) {
            let stat = next;
            const path = this.path();
            this.parent().watcher();
            if (virt)
                return next;
            try {
                stat = next ?? stat_convert($node.fs.statSync(path, { throwIfNoEntry: false }));
            }
            catch (error) {
                if (error.code === 'ENOENT')
                    error = new $mol_file_not_found(`File not found`);
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return stat;
        }
        ensure() {
            const path = this.path();
            try {
                $node.fs.mkdirSync(path);
            }
            catch (e) {
                e.message += '\n' + path;
                this.$.$mol_fail_hidden(e);
            }
        }
        buffer(next) {
            const path = this.path();
            if (next === undefined) {
                if (!this.stat())
                    return new Uint8Array;
                try {
                    const prev = $mol_mem_cached(() => this.buffer());
                    next = buffer_normalize($node.fs.readFileSync(path));
                    if (prev !== undefined && !$mol_compare_array(prev, next)) {
                        this.$.$mol_log3_rise({
                            place: `$mol_file_node..buffer()`,
                            message: 'Changed',
                            path: this.relate(),
                        });
                    }
                    return next;
                }
                catch (error) {
                    error.message += '\n' + path;
                    return this.$.$mol_fail_hidden(error);
                }
            }
            this.parent().exists(true);
            const now = new Date;
            this.stat({
                type: 'file',
                size: next.length,
                atime: now,
                mtime: now,
                ctime: now,
            }, 'virt');
            try {
                $node.fs.writeFileSync(path, next);
            }
            catch (error) {
                error.message += '\n' + path;
                return this.$.$mol_fail_hidden(error);
            }
            return next;
        }
        sub() {
            if (!this.exists())
                return [];
            if (this.type() !== 'dir')
                return [];
            const path = this.path();
            try {
                return $node.fs.readdirSync(path)
                    .filter(name => !/^\.+$/.test(name))
                    .map(name => this.resolve(name));
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
        resolve(path) {
            return this.constructor.relative($node.path.join(this.path(), path));
        }
        relate(base = this.constructor.relative('.')) {
            return $node.path.relative(base.path(), this.path()).replace(/\\/g, '/');
        }
        append(next) {
            const path = this.path();
            try {
                $node.fs.appendFileSync(path, next);
            }
            catch (e) {
                e.message += '\n' + path;
                return this.$.$mol_fail_hidden(e);
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "watcher", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "stat", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "ensure", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "buffer", null);
    __decorate([
        $mol_mem
    ], $mol_file_node.prototype, "sub", null);
    __decorate([
        $mol_mem_key
    ], $mol_file_node, "absolute", null);
    $.$mol_file_node = $mol_file_node;
    $.$mol_file = $mol_file_node;
})($ || ($ = {}));
//mol/file/file.node.ts
;
"use strict";
var $;
(function ($) {
    class $mol_locale extends $mol_object {
        static lang_default() {
            return 'en';
        }
        static lang(next) {
            return this.$.$mol_state_local.value('locale', next) || $mol_dom_context.navigator.language.replace(/-.*/, '') || this.lang_default();
        }
        static source(lang) {
            return JSON.parse(this.$.$mol_file.relative(`web.locale=${lang}.json`).text().toString());
        }
        static texts(lang, next) {
            if (next)
                return next;
            try {
                return this.source(lang).valueOf();
            }
            catch (error) {
                if (error instanceof Promise)
                    $mol_fail_hidden(error);
                const def = this.lang_default();
                if (lang === def)
                    throw error;
                return this.source(def);
            }
        }
        static text(key) {
            for (let lang of [this.lang(), 'en']) {
                const text = this.texts(lang)[key];
                if (text)
                    return text;
                this.warn(key);
            }
            return `<${key}>`;
        }
        static warn(key) {
            console.warn(`Not translated to "${this.lang()}": ${key}`);
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_locale, "lang_default", null);
    __decorate([
        $mol_mem
    ], $mol_locale, "lang", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "source", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "texts", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "text", null);
    __decorate([
        $mol_mem_key
    ], $mol_locale, "warn", null);
    $.$mol_locale = $mol_locale;
})($ || ($ = {}));
//mol/locale/locale.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_github_circle extends $mol_icon {
        path() {
            return "M12,2C6.48,2 2,6.48 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12C22,6.48 17.52,2 12,2Z";
        }
    }
    $.$mol_icon_github_circle = $mol_icon_github_circle;
})($ || ($ = {}));
//mol/icon/github/circle/-view.tree/circle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_link_source extends $mol_link {
        hint() {
            return this.$.$mol_locale.text('$mol_link_source_hint');
        }
        sub() {
            return [
                this.Icon()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_github_circle();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_link_source.prototype, "Icon", null);
    $.$mol_link_source = $mol_link_source;
})($ || ($ = {}));
//mol/link/source/-view.tree/source.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: "$mol_theme_accent"
            };
        }
        style() {
            return {
                ...super.style(),
                minHeight: "1em"
            };
        }
        sub() {
            return [
                this.value()
            ];
        }
        value() {
            return null;
        }
    }
    $.$mol_speck = $mol_speck;
})($ || ($ = {}));
//mol/speck/-view.tree/speck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));
//mol/layer/-css/layer.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_layer = {
        hover: vary('--mol_layer_hover'),
        focus: vary('--mol_layer_focus'),
        speck: vary('--mol_layer_speck'),
        float: vary('--mol_layer_float'),
        popup: vary('--mol_layer_popup'),
    };
})($ || ($ = {}));
//mol/layer/layer.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n}\n");
})($ || ($ = {}));
//mol/speck/-css/speck.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button extends $mol_view {
        enabled() {
            return true;
        }
        click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_click(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                click: (event) => this.event_activate(event),
                dblclick: (event) => this.clicks(event),
                keydown: (event) => this.event_key_press(event)
            };
        }
        attr() {
            return {
                ...super.attr(),
                disabled: this.disabled(),
                role: "button",
                tabindex: this.tab_index(),
                title: this.hint_safe()
            };
        }
        sub() {
            return [
                this.title()
            ];
        }
        Speck() {
            const obj = new this.$.$mol_speck();
            obj.value = () => this.error();
            return obj;
        }
        event_activate(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        clicks(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_key_press(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        disabled() {
            return false;
        }
        tab_index() {
            return 0;
        }
        hint() {
            return "";
        }
        hint_safe() {
            return this.hint();
        }
        error() {
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_click", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "Speck", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_activate", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "clicks", null);
    __decorate([
        $mol_mem
    ], $mol_button.prototype, "event_key_press", null);
    $.$mol_button = $mol_button;
})($ || ($ = {}));
//mol/button/-view.tree/button.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let $mol_keyboard_code;
    (function ($mol_keyboard_code) {
        $mol_keyboard_code[$mol_keyboard_code["backspace"] = 8] = "backspace";
        $mol_keyboard_code[$mol_keyboard_code["tab"] = 9] = "tab";
        $mol_keyboard_code[$mol_keyboard_code["enter"] = 13] = "enter";
        $mol_keyboard_code[$mol_keyboard_code["shift"] = 16] = "shift";
        $mol_keyboard_code[$mol_keyboard_code["ctrl"] = 17] = "ctrl";
        $mol_keyboard_code[$mol_keyboard_code["alt"] = 18] = "alt";
        $mol_keyboard_code[$mol_keyboard_code["pause"] = 19] = "pause";
        $mol_keyboard_code[$mol_keyboard_code["capsLock"] = 20] = "capsLock";
        $mol_keyboard_code[$mol_keyboard_code["escape"] = 27] = "escape";
        $mol_keyboard_code[$mol_keyboard_code["space"] = 32] = "space";
        $mol_keyboard_code[$mol_keyboard_code["pageUp"] = 33] = "pageUp";
        $mol_keyboard_code[$mol_keyboard_code["pageDown"] = 34] = "pageDown";
        $mol_keyboard_code[$mol_keyboard_code["end"] = 35] = "end";
        $mol_keyboard_code[$mol_keyboard_code["home"] = 36] = "home";
        $mol_keyboard_code[$mol_keyboard_code["left"] = 37] = "left";
        $mol_keyboard_code[$mol_keyboard_code["up"] = 38] = "up";
        $mol_keyboard_code[$mol_keyboard_code["right"] = 39] = "right";
        $mol_keyboard_code[$mol_keyboard_code["down"] = 40] = "down";
        $mol_keyboard_code[$mol_keyboard_code["insert"] = 45] = "insert";
        $mol_keyboard_code[$mol_keyboard_code["delete"] = 46] = "delete";
        $mol_keyboard_code[$mol_keyboard_code["key0"] = 48] = "key0";
        $mol_keyboard_code[$mol_keyboard_code["key1"] = 49] = "key1";
        $mol_keyboard_code[$mol_keyboard_code["key2"] = 50] = "key2";
        $mol_keyboard_code[$mol_keyboard_code["key3"] = 51] = "key3";
        $mol_keyboard_code[$mol_keyboard_code["key4"] = 52] = "key4";
        $mol_keyboard_code[$mol_keyboard_code["key5"] = 53] = "key5";
        $mol_keyboard_code[$mol_keyboard_code["key6"] = 54] = "key6";
        $mol_keyboard_code[$mol_keyboard_code["key7"] = 55] = "key7";
        $mol_keyboard_code[$mol_keyboard_code["key8"] = 56] = "key8";
        $mol_keyboard_code[$mol_keyboard_code["key9"] = 57] = "key9";
        $mol_keyboard_code[$mol_keyboard_code["A"] = 65] = "A";
        $mol_keyboard_code[$mol_keyboard_code["B"] = 66] = "B";
        $mol_keyboard_code[$mol_keyboard_code["C"] = 67] = "C";
        $mol_keyboard_code[$mol_keyboard_code["D"] = 68] = "D";
        $mol_keyboard_code[$mol_keyboard_code["E"] = 69] = "E";
        $mol_keyboard_code[$mol_keyboard_code["F"] = 70] = "F";
        $mol_keyboard_code[$mol_keyboard_code["G"] = 71] = "G";
        $mol_keyboard_code[$mol_keyboard_code["H"] = 72] = "H";
        $mol_keyboard_code[$mol_keyboard_code["I"] = 73] = "I";
        $mol_keyboard_code[$mol_keyboard_code["J"] = 74] = "J";
        $mol_keyboard_code[$mol_keyboard_code["K"] = 75] = "K";
        $mol_keyboard_code[$mol_keyboard_code["L"] = 76] = "L";
        $mol_keyboard_code[$mol_keyboard_code["M"] = 77] = "M";
        $mol_keyboard_code[$mol_keyboard_code["N"] = 78] = "N";
        $mol_keyboard_code[$mol_keyboard_code["O"] = 79] = "O";
        $mol_keyboard_code[$mol_keyboard_code["P"] = 80] = "P";
        $mol_keyboard_code[$mol_keyboard_code["Q"] = 81] = "Q";
        $mol_keyboard_code[$mol_keyboard_code["R"] = 82] = "R";
        $mol_keyboard_code[$mol_keyboard_code["S"] = 83] = "S";
        $mol_keyboard_code[$mol_keyboard_code["T"] = 84] = "T";
        $mol_keyboard_code[$mol_keyboard_code["U"] = 85] = "U";
        $mol_keyboard_code[$mol_keyboard_code["V"] = 86] = "V";
        $mol_keyboard_code[$mol_keyboard_code["W"] = 87] = "W";
        $mol_keyboard_code[$mol_keyboard_code["X"] = 88] = "X";
        $mol_keyboard_code[$mol_keyboard_code["Y"] = 89] = "Y";
        $mol_keyboard_code[$mol_keyboard_code["Z"] = 90] = "Z";
        $mol_keyboard_code[$mol_keyboard_code["metaLeft"] = 91] = "metaLeft";
        $mol_keyboard_code[$mol_keyboard_code["metaRight"] = 92] = "metaRight";
        $mol_keyboard_code[$mol_keyboard_code["select"] = 93] = "select";
        $mol_keyboard_code[$mol_keyboard_code["numpad0"] = 96] = "numpad0";
        $mol_keyboard_code[$mol_keyboard_code["numpad1"] = 97] = "numpad1";
        $mol_keyboard_code[$mol_keyboard_code["numpad2"] = 98] = "numpad2";
        $mol_keyboard_code[$mol_keyboard_code["numpad3"] = 99] = "numpad3";
        $mol_keyboard_code[$mol_keyboard_code["numpad4"] = 100] = "numpad4";
        $mol_keyboard_code[$mol_keyboard_code["numpad5"] = 101] = "numpad5";
        $mol_keyboard_code[$mol_keyboard_code["numpad6"] = 102] = "numpad6";
        $mol_keyboard_code[$mol_keyboard_code["numpad7"] = 103] = "numpad7";
        $mol_keyboard_code[$mol_keyboard_code["numpad8"] = 104] = "numpad8";
        $mol_keyboard_code[$mol_keyboard_code["numpad9"] = 105] = "numpad9";
        $mol_keyboard_code[$mol_keyboard_code["multiply"] = 106] = "multiply";
        $mol_keyboard_code[$mol_keyboard_code["add"] = 107] = "add";
        $mol_keyboard_code[$mol_keyboard_code["subtract"] = 109] = "subtract";
        $mol_keyboard_code[$mol_keyboard_code["decimal"] = 110] = "decimal";
        $mol_keyboard_code[$mol_keyboard_code["divide"] = 111] = "divide";
        $mol_keyboard_code[$mol_keyboard_code["F1"] = 112] = "F1";
        $mol_keyboard_code[$mol_keyboard_code["F2"] = 113] = "F2";
        $mol_keyboard_code[$mol_keyboard_code["F3"] = 114] = "F3";
        $mol_keyboard_code[$mol_keyboard_code["F4"] = 115] = "F4";
        $mol_keyboard_code[$mol_keyboard_code["F5"] = 116] = "F5";
        $mol_keyboard_code[$mol_keyboard_code["F6"] = 117] = "F6";
        $mol_keyboard_code[$mol_keyboard_code["F7"] = 118] = "F7";
        $mol_keyboard_code[$mol_keyboard_code["F8"] = 119] = "F8";
        $mol_keyboard_code[$mol_keyboard_code["F9"] = 120] = "F9";
        $mol_keyboard_code[$mol_keyboard_code["F10"] = 121] = "F10";
        $mol_keyboard_code[$mol_keyboard_code["F11"] = 122] = "F11";
        $mol_keyboard_code[$mol_keyboard_code["F12"] = 123] = "F12";
        $mol_keyboard_code[$mol_keyboard_code["numLock"] = 144] = "numLock";
        $mol_keyboard_code[$mol_keyboard_code["scrollLock"] = 145] = "scrollLock";
        $mol_keyboard_code[$mol_keyboard_code["semicolon"] = 186] = "semicolon";
        $mol_keyboard_code[$mol_keyboard_code["equals"] = 187] = "equals";
        $mol_keyboard_code[$mol_keyboard_code["comma"] = 188] = "comma";
        $mol_keyboard_code[$mol_keyboard_code["dash"] = 189] = "dash";
        $mol_keyboard_code[$mol_keyboard_code["period"] = 190] = "period";
        $mol_keyboard_code[$mol_keyboard_code["forwardSlash"] = 191] = "forwardSlash";
        $mol_keyboard_code[$mol_keyboard_code["graveAccent"] = 192] = "graveAccent";
        $mol_keyboard_code[$mol_keyboard_code["bracketOpen"] = 219] = "bracketOpen";
        $mol_keyboard_code[$mol_keyboard_code["slashBack"] = 220] = "slashBack";
        $mol_keyboard_code[$mol_keyboard_code["slashBackLeft"] = 226] = "slashBackLeft";
        $mol_keyboard_code[$mol_keyboard_code["bracketClose"] = 221] = "bracketClose";
        $mol_keyboard_code[$mol_keyboard_code["quoteSingle"] = 222] = "quoteSingle";
    })($mol_keyboard_code = $.$mol_keyboard_code || ($.$mol_keyboard_code = {}));
})($ || ($ = {}));
//mol/keyboard/code.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button extends $.$mol_button {
            status(next = [null]) { return next; }
            disabled() {
                return !this.enabled();
            }
            event_activate(next) {
                if (!next)
                    return;
                if (!this.enabled())
                    return;
                try {
                    this.event_click(next);
                    this.click(next);
                    this.status([null]);
                }
                catch (error) {
                    this.status([error]);
                    $mol_fail_hidden(error);
                }
            }
            event_key_press(event) {
                if (event.keyCode === $mol_keyboard_code.enter) {
                    return this.event_activate(event);
                }
            }
            tab_index() {
                return this.enabled() ? super.tab_index() : -1;
            }
            error() {
                const [error] = this.status();
                if (!error)
                    return '';
                if (error instanceof Promise) {
                    return $mol_fail_hidden(error);
                }
                return String(error.message ?? error);
            }
            hint_safe() {
                try {
                    return this.hint();
                }
                catch (error) {
                    $mol_fail_log(error);
                    return '';
                }
            }
            sub_visible() {
                return [
                    ...this.error() ? [this.Speck()] : [],
                    ...this.sub(),
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_button.prototype, "status", null);
        $$.$mol_button = $mol_button;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/button.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_typed extends $mol_button {
        minimal_height() {
            return 40;
        }
        minimal_width() {
            return 40;
        }
    }
    $.$mol_button_typed = $mol_button_typed;
})($ || ($ = {}));
//mol/button/typed/-view.tree/typed.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:hover [mol_icon] ,\n[mol_button_typed]:focus [mol_icon] {\n\ttransform: scale(1.5);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
})($ || ($ = {}));
//mol/button/typed/-css/typed.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_minor extends $mol_button_typed {
    }
    $.$mol_button_minor = $mol_button_minor;
})($ || ($ = {}));
//mol/button/minor/-view.tree/minor.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/minor/minor.view.css", "[mol_button_minor] {\n\tcolor: var(--mol_theme_control);\n}\n\n[mol_button_minor][disabled] {\n\tcolor: var(--mol_theme_shade);\n}\n");
})($ || ($ = {}));
//mol/button/minor/-css/minor.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check extends $mol_button_minor {
        attr() {
            return {
                ...super.attr(),
                mol_check_checked: this.checked(),
                "aria-checked": this.checked(),
                role: "checkbox"
            };
        }
        sub() {
            return [
                this.Icon(),
                this.label()
            ];
        }
        checked(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        Icon() {
            return null;
        }
        title() {
            return "";
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.title()
            ];
            return obj;
        }
        label() {
            return [
                this.Title()
            ];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "checked", null);
    __decorate([
        $mol_mem
    ], $mol_check.prototype, "Title", null);
    $.$mol_check = $mol_check;
})($ || ($ = {}));
//mol/check/-view.tree/check.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tpadding: var(--mol_gap_text);\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n");
})($ || ($ = {}));
//mol/check/-css/check.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check extends $.$mol_check {
            click(next) {
                if (next?.defaultPrevented)
                    return;
                this.checked(!this.checked());
                if (next)
                    next.preventDefault();
            }
            sub() {
                return [
                    ...$mol_maybe(this.Icon()),
                    ...this.label(),
                ];
            }
            label() {
                return this.title() ? super.label() : [];
            }
        }
        $$.$mol_check = $mol_check;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/check.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_icon extends $mol_check {
    }
    $.$mol_check_icon = $mol_check_icon;
})($ || ($ = {}));
//mol/check/icon/-view.tree/icon.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/icon/icon.view.css", "[mol_check_icon][mol_check_checked] {\n\tcolor: var(--mol_theme_current);\n}\n");
})($ || ($ = {}));
//mol/check/icon/-css/icon.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_brightness_6 extends $mol_icon {
        path() {
            return "M12,18V6C15.31,6 18,8.69 18,12C18,15.31 15.31,18 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z";
        }
    }
    $.$mol_icon_brightness_6 = $mol_icon_brightness_6;
})($ || ($ = {}));
//mol/icon/brightness/6/-view.tree/6.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_lights_toggle extends $mol_check_icon {
        Icon() {
            return this.Lights_icon();
        }
        hint() {
            return this.$.$mol_locale.text('$mol_lights_toggle_hint');
        }
        checked(val) {
            return this.lights(val);
        }
        Lights_icon() {
            const obj = new this.$.$mol_icon_brightness_6();
            return obj;
        }
        lights(val) {
            if (val !== undefined)
                return val;
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_lights_toggle.prototype, "Lights_icon", null);
    __decorate([
        $mol_mem
    ], $mol_lights_toggle.prototype, "lights", null);
    $.$mol_lights_toggle = $mol_lights_toggle;
})($ || ($ = {}));
//mol/lights/toggle/-view.tree/toggle.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_lights_toggle extends $.$mol_lights_toggle {
            lights(next) {
                return this.$.$mol_lights(next);
            }
        }
        $$.$mol_lights_toggle = $mol_lights_toggle;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/lights/toggle/toggle.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_upload extends $mol_icon {
        path() {
            return "M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z";
        }
    }
    $.$mol_icon_upload = $mol_icon_upload;
})($ || ($ = {}));
//mol/icon/upload/-view.tree/upload.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_button_open extends $mol_button_minor {
        sub() {
            return [
                this.Icon(),
                this.Native()
            ];
        }
        Icon() {
            const obj = new this.$.$mol_icon_upload();
            return obj;
        }
        files(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        accept() {
            return "";
        }
        multiple() {
            return true;
        }
        Native() {
            const obj = new this.$.$mol_button_open_native();
            obj.files = (next) => this.files(next);
            obj.accept = () => this.accept();
            obj.multiple = () => this.multiple();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "Icon", null);
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "files", null);
    __decorate([
        $mol_mem
    ], $mol_button_open.prototype, "Native", null);
    $.$mol_button_open = $mol_button_open;
    class $mol_button_open_native extends $mol_view {
        dom_name() {
            return "input";
        }
        files(next) {
            if (next !== undefined)
                return next;
            return [];
        }
        attr() {
            return {
                type: "file",
                accept: this.accept(),
                multiple: this.multiple()
            };
        }
        event() {
            return {
                change: (next) => this.picked(next)
            };
        }
        accept() {
            return "";
        }
        multiple() {
            return true;
        }
        picked(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_button_open_native.prototype, "files", null);
    __decorate([
        $mol_mem
    ], $mol_button_open_native.prototype, "picked", null);
    $.$mol_button_open_native = $mol_button_open_native;
})($ || ($ = {}));
//mol/button/open/-view.tree/open.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/button/open/open.view.css", "[mol_button_open_native] {\n\tposition: absolute;\n\tleft: 0;\n\ttop: -100%;\n\twidth: 100%;\n\theight: 200%;\n\tcursor: pointer;\n\topacity: 0;\n}\n");
})($ || ($ = {}));
//mol/button/open/-css/open.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_button_open_native extends $.$mol_button_open_native {
            dom_node() {
                return super.dom_node();
            }
            picked() {
                const files = this.dom_node().files;
                if (!files || !files.length)
                    return;
                this.files([...files]);
            }
        }
        $$.$mol_button_open_native = $mol_button_open_native;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/button/open/open.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_ghost extends $mol_view {
        Sub() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_ghost.prototype, "Sub", null);
    $.$mol_ghost = $mol_ghost;
})($ || ($ = {}));
//mol/ghost/-view.tree/ghost.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_ghost extends $.$mol_ghost {
            dom_node(next) {
                const node = this.Sub().dom_node(next);
                $mol_dom_render_attributes(node, this.attr_static());
                $mol_dom_render_events(node, this.event());
                return node;
            }
            dom_node_actual() {
                this.dom_node();
                const node = this.Sub().dom_node_actual();
                const attr = this.attr();
                const style = this.style();
                const fields = this.field();
                $mol_dom_render_attributes(node, attr);
                $mol_dom_render_styles(node, style);
                $mol_dom_render_fields(node, fields);
                return node;
            }
            dom_tree() {
                const Sub = this.Sub();
                const node = Sub.dom_tree();
                try {
                    this.dom_node_actual();
                    this.auto();
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                return node;
            }
            title() {
                return this.Sub().title();
            }
            minimal_width() {
                return this.Sub().minimal_width();
            }
            minimal_height() {
                return this.Sub().minimal_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node", null);
        __decorate([
            $mol_mem
        ], $mol_ghost.prototype, "dom_node_actual", null);
        $$.$mol_ghost = $mol_ghost;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/ghost/ghost.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_drop extends $mol_ghost {
        event() {
            return {
                dragenter: (event) => this.enter(event),
                dragover: (event) => this.move(event),
                dragleave: (event) => this.leave(event),
                drop: (event) => this.drop(event)
            };
        }
        attr() {
            return {
                mol_drop_status: this.status()
            };
        }
        adopt(transfer) {
            if (transfer !== undefined)
                return transfer;
            return {};
        }
        receive(transfer) {
            if (transfer !== undefined)
                return transfer;
            return null;
        }
        enter(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        move(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        leave(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        drop(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        status(val) {
            if (val !== undefined)
                return val;
            return "ready";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "adopt", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "receive", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "enter", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "move", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "leave", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "drop", null);
    __decorate([
        $mol_mem
    ], $mol_drop.prototype, "status", null);
    $.$mol_drop = $mol_drop;
})($ || ($ = {}));
//mol/drop/-view.tree/drop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_drop extends $.$mol_drop {
            status(next = 'ready') { return next; }
            _target = null;
            enter(event) {
                if (event.defaultPrevented)
                    return;
                this.status('drag');
                this._target = event.target;
                event.dataTransfer.dropEffect = 'move';
                event.preventDefault();
            }
            move(event) {
                if (event.defaultPrevented)
                    return;
                event.dataTransfer.dropEffect = 'move';
                event.preventDefault();
            }
            leave(event) {
                if (this._target === event.target) {
                    this.status('ready');
                }
            }
            receive(transfer) {
                return transfer;
            }
            drop(event) {
                if (event.defaultPrevented)
                    return;
                event.preventDefault();
                setTimeout(() => this.status('ready'));
                const obj = this.adopt(event.dataTransfer);
                if (!obj)
                    return;
                this.receive(obj);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_drop.prototype, "status", null);
        $$.$mol_drop = $mol_drop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/drop/drop.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_upload extends $mol_button_open {
        sub() {
            return [
                this.Icon(),
                this.title(),
                this.Native(),
                this.Drop()
            ];
        }
        title() {
            return this.$.$mol_locale.text('$visavis_upload_title');
        }
        receive(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        open_dialog(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Drop_area() {
            const obj = new this.$.$mol_view();
            obj.event = () => ({
                click: (next) => this.open_dialog(next)
            });
            return obj;
        }
        Drop() {
            const obj = new this.$.$mol_drop();
            obj.receive = (next) => this.receive(next);
            obj.Sub = () => this.Drop_area();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_upload.prototype, "receive", null);
    __decorate([
        $mol_mem
    ], $visavis_upload.prototype, "open_dialog", null);
    __decorate([
        $mol_mem
    ], $visavis_upload.prototype, "Drop_area", null);
    __decorate([
        $mol_mem
    ], $visavis_upload.prototype, "Drop", null);
    $.$visavis_upload = $visavis_upload;
})($ || ($ = {}));
//visavis/upload/-view.tree/upload.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { px } = $mol_style_unit;
        $mol_style_define($.$visavis_upload, {
            margin: $mol_gap.block,
            padding: $mol_gap.block,
            gap: $mol_gap.block,
            cursor: 'pointer',
            border: {
                style: 'dashed',
                width: px(1),
                color: $mol_theme.line,
                radius: $mol_gap.round,
            },
            ':hover': {
                background: {
                    color: $mol_theme.hover,
                },
            },
            Drop_area: {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
            }
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/upload/upload.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $visavis_upload extends $.$visavis_upload {
            receive(data) {
                this.files(data.files);
            }
            open_dialog() {
                this.Native().dom_node().click();
            }
        }
        $$.$visavis_upload = $visavis_upload;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/upload/upload.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_list extends $mol_view {
        render_visible_only() {
            return true;
        }
        render_over() {
            return 0;
        }
        sub() {
            return this.rows();
        }
        Empty() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Gap_before() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_before()
            });
            return obj;
        }
        Gap_after() {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                paddingTop: this.gap_after()
            });
            return obj;
        }
        view_window() {
            return [
                0,
                0
            ];
        }
        rows() {
            return [];
        }
        gap_before() {
            return 0;
        }
        gap_after() {
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Empty", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_before", null);
    __decorate([
        $mol_mem
    ], $mol_list.prototype, "Gap_after", null);
    $.$mol_list = $mol_list;
})($ || ($ = {}));
//mol/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    let cache = null;
    function $mol_support_css_overflow_anchor() {
        return cache ?? (cache = (!/Gecko\//.test(navigator.userAgent)
            && this.$mol_dom_context.CSS?.supports('overflow-anchor:auto')) ?? false);
    }
    $.$mol_support_css_overflow_anchor = $mol_support_css_overflow_anchor;
})($ || ($ = {}));
//mol/support/css/css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_list extends $.$mol_list {
            sub() {
                const rows = this.rows();
                return (rows.length === 0) ? [this.Empty()] : rows;
            }
            render_visible_only() {
                return this.$.$mol_support_css_overflow_anchor();
            }
            view_window(next) {
                const kids = this.sub();
                if (kids.length < 3)
                    return [0, kids.length];
                if (this.$.$mol_print.active())
                    return [0, kids.length];
                const rect = this.view_rect();
                if (next)
                    return next;
                let [min, max] = $mol_mem_cached(() => this.view_window()) ?? [0, 0];
                let max2 = max = Math.min(max, kids.length);
                let min2 = min = Math.max(0, Math.min(min, max - 1));
                const anchoring = this.render_visible_only();
                const window_height = this.$.$mol_window.size().height + 40;
                const over = Math.ceil(window_height * this.render_over());
                const limit_top = -over;
                const limit_bottom = window_height + over;
                const gap_before = $mol_mem_cached(() => this.gap_before()) ?? 0;
                const gap_after = $mol_mem_cached(() => this.gap_after()) ?? 0;
                let top = Math.ceil(rect?.top ?? 0) + gap_before;
                let bottom = Math.ceil(rect?.bottom ?? 0) - gap_after;
                if (top <= limit_top && bottom >= limit_bottom) {
                    return [min2, max2];
                }
                if (anchoring && ((bottom < limit_top) || (top > limit_bottom))) {
                    min = 0;
                    top = Math.ceil(rect?.top ?? 0);
                    while (min < (kids.length - 1)) {
                        const height = kids[min].minimal_height();
                        if (top + height >= limit_top)
                            break;
                        top += height;
                        ++min;
                    }
                    min2 = min;
                    max2 = max = min;
                    bottom = top;
                }
                let top2 = top;
                let bottom2 = bottom;
                if (anchoring && (top <= limit_top) && (bottom2 < limit_bottom)) {
                    min2 = Math.max(0, max - 1);
                    top2 = bottom;
                }
                if ((bottom >= limit_bottom) && (top2 >= limit_top)) {
                    max2 = Math.min(min + 1, kids.length);
                    bottom2 = top;
                }
                while (bottom2 < limit_bottom && max2 < kids.length) {
                    bottom2 += kids[max2].minimal_height();
                    ++max2;
                }
                while (anchoring && ((top2 >= limit_top) && (min2 > 0))) {
                    --min2;
                    top2 -= kids[min2].minimal_height();
                }
                return [min2, max2];
            }
            gap_before() {
                const skipped = this.sub().slice(0, this.view_window()[0]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            gap_after() {
                const skipped = this.sub().slice(this.view_window()[1]);
                return Math.max(0, skipped.reduce((sum, view) => sum + view.minimal_height(), 0));
            }
            sub_visible() {
                return [
                    ...this.gap_before() ? [this.Gap_before()] : [],
                    ...this.sub().slice(...this.view_window()),
                    ...this.gap_after() ? [this.Gap_after()] : [],
                ];
            }
            minimal_height() {
                return this.sub().reduce((sum, view) => {
                    try {
                        return sum + view.minimal_height();
                    }
                    catch (error) {
                        $mol_fail_log(error);
                        return sum;
                    }
                }, 0);
            }
            force_render(path) {
                const kids = this.rows();
                const index = kids.findIndex(item => path.has(item));
                if (index >= 0) {
                    const win = this.view_window();
                    if (index < win[0] || index >= win[1]) {
                        this.view_window([this.render_visible_only() ? index : 0, index + 1]);
                    }
                    kids[index].force_render(path);
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "view_window", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_before", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "gap_after", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_list.prototype, "minimal_height", null);
        $$.$mol_list = $mol_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        tabindex() {
            return -1;
        }
        Logo() {
            return null;
        }
        title_content() {
            return [
                this.Logo(),
                this.title()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => this.title_content();
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(val) {
            return this.Body().scroll_top(val);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            margin: 0,
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                overflow: 'hidden',
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_tick extends $mol_icon {
        path() {
            return "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z";
        }
    }
    $.$mol_icon_tick = $mol_icon_tick;
})($ || ($ = {}));
//mol/icon/tick/-view.tree/tick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_box extends $mol_check {
        Icon() {
            const obj = new this.$.$mol_icon_tick();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_check_box.prototype, "Icon", null);
    $.$mol_check_box = $mol_check_box;
})($ || ($ = {}));
//mol/check/box/-view.tree/box.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_check_box_title] {\n\tmargin-left: .5rem;\n}\n");
})($ || ($ = {}));
//mol/check/box/-css/box.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_labeler extends $mol_list {
        rows() {
            return [
                this.Label(),
                this.Content()
            ];
        }
        label() {
            return [
                this.title()
            ];
        }
        Label() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 32;
            obj.sub = () => this.label();
            return obj;
        }
        content() {
            return [];
        }
        Content() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 24;
            obj.sub = () => this.content();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Label", null);
    __decorate([
        $mol_mem
    ], $mol_labeler.prototype, "Content", null);
    $.$mol_labeler = $mol_labeler;
})($ || ($ = {}));
//mol/labeler/-view.tree/labeler.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));
//mol/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_check_list extends $mol_view {
        Option(id) {
            const obj = new this.$.$mol_check();
            obj.checked = (val) => this.option_checked(id, val);
            obj.label = () => this.option_label(id);
            obj.enabled = () => this.option_enabled(id);
            obj.hint = () => this.option_hint(id);
            obj.minimal_height = () => 24;
            return obj;
        }
        options() {
            return {};
        }
        keys() {
            return [];
        }
        sub() {
            return this.items();
        }
        option_checked(id, val) {
            if (val !== undefined)
                return val;
            return false;
        }
        option_title(id) {
            return "";
        }
        option_label(id) {
            return [
                this.option_title(id)
            ];
        }
        enabled() {
            return true;
        }
        option_enabled(id) {
            return this.enabled();
        }
        option_hint(id) {
            return "";
        }
        items() {
            return [];
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "Option", null);
    __decorate([
        $mol_mem_key
    ], $mol_check_list.prototype, "option_checked", null);
    $.$mol_check_list = $mol_check_list;
})($ || ($ = {}));
//mol/check/list/-view.tree/list.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 0 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option][mol_check_checked=\"true\"] {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option][mol_check_checked=\"true\"][disabled] {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//mol/check/list/-css/list.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_check_list extends $.$mol_check_list {
            options() {
                return {};
            }
            keys() {
                return Object.keys(this.options());
            }
            items() {
                return this.keys().map(key => this.Option(key));
            }
            option_title(key) {
                return this.options()[key] || key;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "keys", null);
        __decorate([
            $mol_mem
        ], $mol_check_list.prototype, "items", null);
        $$.$mol_check_list = $mol_check_list;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/check/list/list.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_switch extends $mol_check_list {
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
    }
    __decorate([
        $mol_mem
    ], $mol_switch.prototype, "value", null);
    $.$mol_switch = $mol_switch;
})($ || ($ = {}));
//mol/switch/-view.tree/switch.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_state_session extends $mol_object {
        static 'native()';
        static native() {
            if (this['native()'])
                return this['native()'];
            check: try {
                const native = $mol_dom_context.sessionStorage;
                if (!native)
                    break check;
                native.setItem('', '');
                native.removeItem('');
                return this['native()'] = native;
            }
            catch (error) {
                console.warn(error);
            }
            return this['native()'] = {
                getItem(key) {
                    return this[':' + key];
                },
                setItem(key, value) {
                    this[':' + key] = value;
                },
                removeItem(key) {
                    this[':' + key] = void 0;
                }
            };
        }
        static value(key, next) {
            if (next === void 0)
                return JSON.parse(this.native().getItem(key) || 'null');
            if (next === null)
                this.native().removeItem(key);
            else
                this.native().setItem(key, JSON.stringify(next));
            return next;
        }
        prefix() { return ''; }
        value(key, next) {
            return $mol_state_session.value(this.prefix() + '.' + key, next);
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_state_session, "value", null);
    $.$mol_state_session = $mol_state_session;
})($ || ($ = {}));
//mol/state/session/session.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_switch extends $.$mol_switch {
            value(next) {
                return $mol_state_session.value(`${this}.value()`, next) ?? '';
            }
            option_checked(key, next) {
                if (next === undefined)
                    return this.value() == key;
                this.value(next ? key : '');
                return next;
            }
        }
        $$.$mol_switch = $mol_switch;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/switch/switch.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_matrix extends $mol_book2 {
        file() {
            const obj = new this.$.Object();
            return obj;
        }
        size() {
            return 0;
        }
        heatmap() {
            return false;
        }
        heatmap_colors() {
            return [
                "rgb(150,0,90)",
                "rgb(0,0,200)",
                "rgb(0,25,255)",
                "rgb(0,152,255)",
                "rgb(44,255,150)",
                "rgb(151,255,0)",
                "rgb(255,234,0)",
                "rgb(255,111,0)",
                "rgb(255,0,0)"
            ];
        }
        colorset() {
            return [
                "#3e3f95",
                "#c00",
                "#FE9A2E",
                "#090",
                "#f0f",
                "#09f",
                "#666",
                "#0f3",
                "#0ff",
                "#90c"
            ];
        }
        order() {
            return [];
        }
        order_current(next) {
            if (next !== undefined)
                return next;
            return "nump";
        }
        plot_padding() {
            return 32;
        }
        axis_width() {
            return 24;
        }
        pages() {
            return [
                this.Plot(),
                this.Setup()
            ];
        }
        Root() {
            const obj = new this.$.$mol_svg();
            return obj;
        }
        heatmap_color(id) {
            return "";
        }
        Heatmap_color(id) {
            const obj = new this.$.$mol_view();
            obj.style = () => ({
                background: this.heatmap_color(id)
            });
            return obj;
        }
        heatmap_color_list() {
            return [
                this.Heatmap_color("0")
            ];
        }
        Heatmap_legend() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.heatmap_color_list();
            return obj;
        }
        Side_right() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Heatmap_legend()
            ];
            return obj;
        }
        plot_body() {
            return [
                this.Root(),
                this.Side_right()
            ];
        }
        draw() {
            return null;
        }
        Plot() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.title();
            obj.body = () => this.plot_body();
            obj.auto = () => this.draw();
            return obj;
        }
        nonformers(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        Nonformers() {
            const obj = new this.$.$mol_check_box();
            obj.hint = () => this.$.$mol_locale.text('$visavis_matrix_Nonformers_hint');
            obj.title = () => this.$.$mol_locale.text('$visavis_matrix_Nonformers_title');
            obj.checked = (next) => this.nonformers(next);
            return obj;
        }
        Nonformers_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_matrix_Nonformers_label_title');
            obj.content = () => [
                this.Nonformers()
            ];
            return obj;
        }
        order_dict() {
            return {
                num: this.$.$mol_locale.text('$visavis_matrix_order_dict_num'),
                nump: this.$.$mol_locale.text('$visavis_matrix_order_dict_nump'),
                size: this.$.$mol_locale.text('$visavis_matrix_order_dict_size'),
                rea: this.$.$mol_locale.text('$visavis_matrix_order_dict_rea'),
                rpp: this.$.$mol_locale.text('$visavis_matrix_order_dict_rpp'),
                rion: this.$.$mol_locale.text('$visavis_matrix_order_dict_rion'),
                rcov: this.$.$mol_locale.text('$visavis_matrix_order_dict_rcov'),
                rmet: this.$.$mol_locale.text('$visavis_matrix_order_dict_rmet'),
                tmelt: this.$.$mol_locale.text('$visavis_matrix_order_dict_tmelt'),
                eneg: this.$.$mol_locale.text('$visavis_matrix_order_dict_eneg')
            };
        }
        Order_switch() {
            const obj = new this.$.$mol_switch();
            obj.value = (next) => this.order_current(next);
            obj.options = () => this.order_dict();
            return obj;
        }
        Order_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_matrix_Order_label_title');
            obj.content = () => [
                this.Order_switch()
            ];
            return obj;
        }
        Setup() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$visavis_matrix_Setup_title');
            obj.body = () => [
                this.Nonformers_label(),
                this.Order_label()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "file", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "order_current", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Root", null);
    __decorate([
        $mol_mem_key
    ], $visavis_matrix.prototype, "Heatmap_color", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Heatmap_legend", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Side_right", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Plot", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "nonformers", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Nonformers", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Nonformers_label", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Order_switch", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Order_label", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Setup", null);
    $.$visavis_matrix = $visavis_matrix;
})($ || ($ = {}));
//visavis/matrix/-view.tree/matrix.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
var $;
(function ($) {
    class $mol_import extends $mol_object2 {
        static module(uri) {
            return $mol_wire_sync(this).module_async(uri);
        }
        static module_async(uri) {
            return import(uri);
        }
        static script(uri) {
            return $mol_wire_sync(this).script_async(uri);
        }
        static script_async(uri) {
            const doc = $mol_dom_context.document;
            const script = doc.createElement('script');
            script.src = uri;
            doc.head.appendChild(script);
            return new Promise((done, fail) => {
                script.onload = () => done($mol_dom_context);
                script.onerror = () => fail(new Error(`Can not import ${uri}`));
            });
        }
        static style(uri) {
            return $mol_wire_sync(this).style_async(uri);
        }
        static style_async(uri) {
            const doc = $mol_dom_context.document;
            const style = doc.createElement('link');
            style.rel = 'stylesheet';
            style.href = uri;
            doc.head.appendChild(style);
            return new Promise((done, fail) => {
                style.onload = () => done(style.sheet);
                style.onerror = () => fail(new Error(`Can not import ${uri}`));
            });
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_import, "module", null);
    __decorate([
        $mol_mem_key
    ], $mol_import, "script", null);
    __decorate([
        $mol_mem_key
    ], $mol_import, "style", null);
    $.$mol_import = $mol_import;
})($ || ($ = {}));
//mol/import/import.ts
;
"use strict";
var $;
(function ($) {
    class $lib_d3 extends $mol_object2 {
        static all() {
            return $mol_import.script('https://cdn.jsdelivr.net/npm/d3@7').d3;
        }
    }
    __decorate([
        $mol_mem
    ], $lib_d3, "all", null);
    $.$lib_d3 = $lib_d3;
})($ || ($ = {}));
//lib/d3/d3.ts
;
"use strict";
var $;
(function ($) {
    $.$visavis_nonformer_pd_bin = [[88, 23], [88, 41], [46, 78], [46, 82], [46, 5], [46, 26], [46, 23], [46, 28], [46, 25], [46, 31], [46, 76], [46, 24], [46, 41], [46, 27], [46, 75], [46, 81], [46, 77], [46, 74], [46, 44], [46, 43], [46, 13], [46, 80], [46, 91], [46, 22], [12, 3], [12, 82], [12, 47], [12, 54], [12, 30], [12, 31], [12, 79], [12, 48], [12, 18], [12, 10], [12, 81], [12, 13], [12, 49], [12, 80], [12, 29], [94, 23], [94, 41], [94, 92], [94, 93], [94, 91], [17, 6], [32, 78], [32, 82], [32, 81], [32, 80], [78, 82], [78, 25], [78, 31], [78, 41], [78, 14], [78, 77], [78, 44], [78, 43], [78, 13], [78, 73], [55, 19], [55, 62], [55, 25], [55, 63], [55, 56], [55, 24], [55, 41], [55, 59], [55, 27], [55, 60], [55, 58], [55, 20], [55, 61], [55, 37], [55, 21], [55, 22], [55, 38], [55, 69], [4, 82], [4, 47], [4, 28], [3, 82], [3, 30], [3, 31], [3, 48], [3, 2], [3, 10], [3, 13], [3, 49], [3, 29], [4, 30], [4, 31], [4, 79], [82, 47], [82, 23], [82, 28], [82, 25], [82, 30], [82, 31], [82, 79], [82, 41], [82, 40], [82, 75], [82, 14], [82, 81], [82, 74], [82, 50], [82, 13], [82, 49], [82, 72], [82, 22], [82, 29], [4, 81], [4, 50], [4, 49], [4, 51], [4, 80], [4, 29], [19, 57], [19, 26], [19, 62], [19, 25], [19, 56], [19, 70], [19, 24], [19, 41], [19, 10], [19, 59], [19, 60], [19, 93], [19, 20], [19, 37], [19, 64], [19, 21], [19, 68], [19, 22], [19, 38], [19, 69], [47, 23], [47, 25], [47, 30], [47, 31], [47, 48], [47, 2], [47, 24], [47, 41], [47, 81], [47, 13], [47, 49], [47, 80], [47, 29], [57, 23], [57, 62], [57, 71], [57, 56], [57, 2], [57, 24], [57, 41], [57, 40], [57, 59], [57, 60], [57, 58], [57, 93], [57, 20], [57, 61], [57, 72], [57, 89], [57, 21], [57, 91], [57, 22], [57, 73], [57, 39], [5, 25], [5, 31], [5, 76], [5, 27], [26, 28], [26, 79], [26, 24], [26, 27], [26, 75], [26, 81], [26, 45], [26, 74], [26, 44], [26, 43], [5, 45], [5, 77], [23, 54], [23, 28], [23, 65], [23, 67], [23, 62], [23, 63], [5, 44], [23, 79], [23, 66], [23, 18], [23, 56], [23, 2], [23, 70], [23, 11], [23, 41], [23, 10], [23, 59], [23, 92], [23, 81], [23, 45], [23, 60], [23, 58], [23, 93], [23, 36], [23, 20], [23, 61], [23, 64], [23, 89], [23, 68], [23, 91], [23, 22], [23, 73], [23, 38], [23, 69], [54, 71], [54, 2], [54, 11], [54, 41], [54, 40], [54, 58], [54, 36], [54, 72], [54, 21], [54, 22], [54, 39], [5, 42], [28, 25], [28, 76], [28, 2], [28, 41], [28, 10], [28, 40], [28, 27], [28, 75], [28, 81], [28, 74], [28, 44], [28, 43], [28, 72], [28, 42], [28, 80], [28, 22], [28, 73], [65, 67], [65, 63], [65, 66], [65, 70], [65, 41], [65, 93], [65, 61], [65, 72], [65, 64], [65, 89], [65, 21], [65, 68], [65, 22], [65, 73], [65, 38], [65, 69], [65, 39], [67, 63], [67, 71], [67, 66], [67, 2], [67, 70], [67, 41], [67, 40], [67, 93], [67, 20], [67, 61], [67, 72], [67, 64], [67, 89], [67, 21], [67, 68], [67, 22], [67, 73], [67, 38], [67, 69], [67, 39], [62, 71], [62, 56], [62, 24], [62, 41], [62, 40], [62, 93], [62, 20], [62, 72], [62, 89], [62, 91], [62, 22], [62, 73], [62, 38], [62, 69], [62, 39], [25, 48], [25, 18], [25, 56], [25, 2], [25, 11], [25, 10], [25, 75], [25, 81], [25, 43], [25, 37], [86, 41], [30, 31], [30, 79], [30, 48], [30, 81], [30, 13], [30, 49], [30, 80], [30, 29], [63, 66], [63, 2], [63, 70], [63, 41], [63, 93], [63, 20], [63, 61], [63, 72], [63, 64], [63, 89], [63, 21], [63, 68], [63, 22], [63, 73], [63, 38], [63, 69], [63, 39], [31, 79], [31, 48], [31, 81], [31, 13], [31, 49], [31, 80], [31, 29], [71, 18], [71, 2], [71, 11], [71, 10], [71, 40], [71, 58], [71, 36], [71, 20], [71, 72], [71, 89], [71, 21], [71, 91], [71, 38], [71, 69], [71, 39], [79, 76], [79, 41], [79, 40], [79, 75], [79, 81], [79, 74], [79, 43], [79, 50], [79, 22], [0, 41], [66, 2], [66, 70], [66, 41], [66, 93], [66, 20], [66, 61], [66, 72], [66, 64], [66, 89], [66, 68], [66, 22], [66, 73], [66, 38], [66, 69], [66, 39], [0, 29], [48, 41], [48, 13], [48, 72], [48, 22], [48, 29], [76, 75], [76, 45], [76, 77], [76, 74], [76, 44], [76, 43], [76, 42], [52, 15], [52, 33], [18, 2], [18, 11], [18, 41], [18, 40], [18, 36], [18, 72], [18, 21], [18, 22], [18, 39], [56, 2], [56, 70], [56, 24], [56, 41], [56, 40], [56, 59], [56, 60], [56, 58], [56, 93], [56, 74], [56, 20], [56, 61], [56, 72], [56, 89], [56, 21], [56, 91], [56, 22], [56, 73], [56, 69], [2, 70], [2, 11], [2, 24], [2, 41], [2, 10], [2, 40], [2, 59], [2, 27], [2, 60], [2, 58], [2, 93], [2, 36], [2, 61], [2, 72], [2, 64], [2, 21], [2, 68], [2, 22], [2, 38], [2, 39], [70, 41], [70, 40], [70, 59], [70, 93], [70, 61], [70, 72], [70, 64], [70, 89], [70, 21], [70, 68], [70, 22], [70, 73], [70, 38], [70, 69], [70, 39], [11, 24], [11, 41], [11, 10], [11, 40], [11, 36], [11, 21], [11, 91], [11, 22], [11, 39], [24, 81], [24, 37], [24, 80], [24, 69], [41, 10], [41, 40], [41, 59], [41, 92], [41, 90], [41, 60], [41, 58], [41, 93], [41, 87], [41, 36], [41, 20], [41, 61], [41, 37], [41, 72], [41, 64], [41, 42], [41, 89], [41, 21], [41, 80], [41, 68], [41, 22], [41, 73], [41, 38], [41, 69], [10, 40], [10, 36], [10, 37], [10, 72], [10, 21], [10, 22], [10, 39], [40, 93], [40, 36], [40, 20], [40, 61], [40, 72], [40, 89], [40, 21], [40, 80], [40, 91], [40, 22], [40, 73], [40, 38], [40, 69], [40, 39], [59, 60], [59, 58], [59, 93], [59, 20], [59, 61], [59, 37], [59, 72], [59, 89], [59, 21], [59, 91], [59, 22], [59, 73], [59, 69], [27, 75], [27, 81], [27, 45], [27, 74], [27, 44], [27, 43], [27, 42], [27, 80], [27, 73], [75, 45], [75, 77], [75, 74], [75, 44], [75, 43], [81, 50], [81, 13], [81, 49], [81, 80], [81, 73], [81, 29], [45, 77], [45, 74], [45, 44], [45, 43], [45, 42], [45, 73], [60, 58], [60, 93], [60, 61], [60, 89], [60, 22], [58, 93], [58, 61], [58, 72], [58, 89], [58, 21], [58, 91], [58, 22], [58, 73], [58, 69], [14, 50], [77, 43], [77, 42], [93, 61], [93, 72], [93, 64], [93, 21], [93, 68], [93, 22], [93, 73], [93, 38], [93, 69], [36, 72], [36, 21], [36, 22], [36, 39], [74, 44], [74, 43], [74, 50], [74, 49], [74, 42], [44, 43], [44, 42], [50, 13], [50, 73], [20, 37], [20, 72], [20, 64], [20, 89], [20, 21], [20, 91], [20, 22], [20, 73], [20, 38], [20, 69], [20, 39], [33, 51], [13, 49], [13, 80], [13, 29], [61, 72], [61, 64], [61, 89], [61, 68], [61, 91], [61, 22], [61, 73], [61, 38], [49, 80], [49, 29], [37, 21], [37, 22], [37, 38], [15, 51], [72, 64], [72, 89], [72, 21], [72, 80], [72, 68], [72, 91], [72, 38], [72, 69], [72, 39], [64, 89], [64, 21], [64, 68], [64, 22], [64, 73], [64, 38], [64, 69], [64, 39], [89, 21], [89, 68], [89, 91], [89, 22], [89, 73], [89, 38], [89, 69], [89, 39], [21, 68], [21, 22], [21, 73], [21, 38], [21, 69], [21, 39], [80, 22], [80, 29], [68, 22], [68, 73], [68, 38], [68, 69], [91, 22], [91, 73], [91, 38], [91, 69], [22, 73], [22, 38], [22, 69], [73, 38], [73, 69], [38, 69], [38, 39], [46, 45], [78, 23], [78, 28], [78, 24], [78, 45], [47, 11], [57, 67], [57, 63], [57, 66], [57, 70], [57, 64], [57, 68], [57, 38], [26, 25], [26, 76], [26, 77], [23, 25], [23, 27], [23, 21], [54, 18], [28, 24], [28, 45], [28, 77], [65, 56], [65, 59], [65, 60], [65, 58], [67, 56], [67, 59], [67, 60], [67, 58], [25, 76], [25, 24], [25, 27], [25, 45], [25, 44], [25, 22], [63, 56], [63, 59], [63, 60], [63, 58], [66, 56], [66, 59], [66, 60], [66, 58], [48, 80], [76, 27], [56, 64], [56, 68], [56, 38], [70, 60], [70, 58], [24, 27], [24, 22], [59, 64], [59, 68], [59, 38], [27, 77], [45, 22], [60, 64], [60, 68], [60, 38], [58, 64], [58, 68], [58, 38], [77, 74], [77, 44], [77, 73], [93, 39], [43, 22], [72, 22], [72, 73], [21, 91]];
    $.$visavis_nonformer_pd_tri = {
        'x': [77, 66, 58, 49, 47, 37, 65, 60, 59, 71, 58, 61, 94, 39, 3, 37, 30, 60, 72, 68, 90, 41, 11, 19, 20, 58, 20, 59, 38, 70, 23, 66, 59, 19, 59, 29, 71, 70, 56, 55, 65, 75, 57, 65, 47, 25, 57, 4, 63, 59, 39, 29, 23, 56, 27, 58, 39, 65, 58, 12, 65, 62, 57, 3, 60, 57, 58, 65, 57, 55, 3, 26, 55, 62, 73, 60, 57, 11, 39, 62, 43, 11, 65, 55, 57, 59, 3, 65, 66, 57, 70, 58, 59, 39, 57, 57, 59, 65, 62, 58, 19, 57, 65, 3, 60, 3, 70, 57, 27, 26, 13, 80, 26, 57, 60, 70, 92, 11, 11, 13, 64, 65, 68, 90, 19, 63, 59, 25, 65, 56, 59, 56, 39, 70, 69, 71, 27, 64, 58, 65, 62, 62, 29, 64, 60, 62, 29, 57, 75, 57, 70, 25, 59, 60, 75, 56, 48, 65, 19, 39, 57, 47, 69, 65, 27, 3, 26, 68, 58, 58, 57, 57, 3, 62, 3, 59, 64, 40, 63, 11, 26, 61, 23, 90, 62, 66, 55, 72, 70, 70, 75, 57, 63, 48, 58, 59, 70, 48, 46, 27, 39, 3, 3, 70, 56, 90, 20, 37, 24, 3, 58, 68, 57, 48, 59, 39, 61, 70, 39, 67, 60, 13, 65, 38, 58, 61, 75, 21, 3, 58, 58, 60, 69, 58, 3, 70, 3, 58, 13, 56, 70, 61, 57, 47, 39, 28, 19, 69, 70, 65, 59, 26, 65, 37, 3, 58, 56, 20, 61, 57, 67, 56, 48, 55, 67, 22, 56, 62, 58, 43, 65, 64, 65, 3, 20, 13, 81, 39, 70, 28, 63, 40, 70, 3, 68, 71, 60, 60, 57, 72, 57, 24, 57, 37, 62, 12, 57, 57, 56, 62, 81, 70, 21, 28, 70, 75, 70, 62, 25, 68, 14, 32, 62, 55, 29, 29, 70, 56, 57, 12, 71, 59, 3, 65, 60, 62, 20, 24, 26, 65, 63, 26, 21, 94, 70, 22, 37, 66, 65, 24, 37, 71, 58, 22, 66, 12, 59, 59, 39, 3, 70, 63, 70, 43, 94, 56, 65, 21, 39, 60, 58, 55, 65, 57, 37, 58, 64, 60, 65, 26, 69, 57, 90, 3, 62, 20, 75, 26, 28, 73, 19, 59, 60, 39, 75, 27, 67, 64, 46, 65, 31, 11, 58, 57, 60, 25, 57, 55, 25, 31, 59, 60, 47, 57, 41, 62, 65, 59, 3, 67, 70, 58, 64, 81, 68, 57, 3, 60, 57, 65, 62, 66, 59, 70, 27, 24, 59, 3, 28, 57, 75, 68, 29, 57, 56, 20, 28, 60, 3, 65, 70, 57, 3, 57, 48, 39, 58, 61, 57, 47, 64, 60, 48, 61, 64, 59, 39, 65, 92, 48, 65, 61, 90, 11, 60, 81, 59, 58, 60, 28, 69, 70, 26, 58, 81, 65, 75, 65, 38, 57, 13, 42, 38, 62, 68, 70, 65, 30, 59, 66, 62, 57, 70, 57, 64, 19, 58, 3, 66, 60, 59, 62, 20, 11, 60, 61, 55, 25, 3, 3, 37, 3, 57, 60, 68, 3, 24, 3, 66, 27, 39, 60, 31, 57, 3, 73, 66, 20, 58, 58, 3, 3, 24, 20, 23, 20, 75, 71, 65, 19, 57, 70, 57, 13, 28, 57, 19, 3, 39, 83, 3, 57, 20, 65, 57, 58, 44, 94, 23, 20, 4, 56, 64, 3, 19, 29, 90, 23, 4, 60, 39, 57, 38, 58, 13, 3, 3, 37, 49, 94, 90, 13, 61, 57, 57, 28, 61, 65, 60, 60, 72, 58, 39, 65, 66, 3, 63, 69, 27, 31, 94, 61, 39, 57, 57, 68, 57, 68, 30, 57, 65, 69, 25, 67, 3, 25, 59, 3, 60, 68, 30, 23, 57, 29, 75, 20, 28, 20, 55, 11, 11, 60, 20, 58, 90, 3, 65, 56, 37, 56, 67, 3, 63, 3, 27, 64, 70, 24, 65, 58, 70, 70, 24, 29, 65, 66, 66, 67, 47, 39, 94, 26, 67, 3, 62, 56, 59, 57, 59, 69, 64, 39, 67, 26, 24, 65, 60, 20, 39, 3, 20, 60, 59, 90, 47, 58, 68, 3, 58, 94, 25, 57, 58, 70, 20, 57, 65, 20, 3, 64, 40, 43, 57, 26, 62, 57, 70, 3, 63, 67, 57, 61, 80, 3, 56, 65, 60, 11, 29, 26, 93, 64, 24, 57, 81, 48, 3, 57, 65, 64, 70, 57, 64, 19, 65, 60, 61, 20, 61, 3, 61, 68, 3, 62, 57, 30, 28, 64, 3, 63, 56, 57, 3, 71, 66, 48, 27, 77, 75, 25, 23, 72, 64, 58, 20, 94, 60, 37, 59, 68, 12, 24, 38, 63, 47, 20, 57, 68, 28, 57, 90, 57, 3, 20, 29, 56, 27, 59, 20, 60, 65, 81, 92, 55, 56, 21, 69, 58, 90, 4, 11, 60, 60, 58, 3, 64, 58, 64, 29, 58, 4, 65, 68, 20, 65, 65, 39, 78, 37, 38, 3, 38, 30, 70, 65, 25, 68, 59, 19, 64, 65, 64, 58, 81, 62, 70, 65, 61, 14, 65, 57, 56, 4, 23, 60, 60, 4, 23, 65, 64, 59, 80, 56, 63, 31, 63, 64, 38, 57, 60, 73, 63, 65, 58, 39, 64, 81, 19, 59, 68, 20, 60, 58, 58, 71, 4, 66, 20, 39, 76, 58, 72, 23, 57, 70, 65, 63, 63, 55, 57, 64, 64, 64, 65, 57, 13, 58, 58, 47, 75, 65, 4, 39, 48, 56, 58, 25, 61, 41, 13, 70, 13, 48, 13, 37, 70, 29, 20, 38, 72, 55, 60, 60, 70, 30, 29, 28, 65, 77, 57, 70, 58, 37, 70, 3, 38, 3, 62, 24, 63, 65, 3, 3, 55, 75, 59, 38, 70, 71, 66, 59, 39, 55, 39, 66, 61, 37, 39, 3, 3, 81, 70, 67, 62, 47, 41, 29, 80, 66, 59, 29, 68, 55, 39, 22, 20, 27, 64, 58, 65, 63, 94, 13, 29, 56, 26, 57, 65, 70, 3, 58, 66, 70, 20, 11, 58, 67, 56, 75, 59, 65, 66, 67, 27, 60, 57, 13, 41, 70, 65, 47, 22, 58, 58, 3, 26, 46, 11, 26, 67, 73, 57, 3, 56, 39, 50, 62, 60, 70, 66, 66, 58, 63, 70, 57, 3, 70, 56, 58, 58, 65, 39, 64, 90, 59, 65, 73, 57, 57, 57, 58, 60, 43, 71, 30, 65, 41, 25, 23, 61, 64, 68, 70, 47, 23, 58, 56, 56, 37, 3, 56, 28, 63, 12, 65, 60, 59, 30, 62, 68, 73, 64, 68, 61, 37, 69, 61, 58, 60, 39, 65, 56, 70, 70, 63, 70, 71, 3, 28, 29, 3, 26, 70, 68, 59, 60, 58, 65, 30, 20, 3, 63, 65, 65, 58, 61, 55, 56, 56, 75, 3, 57, 62, 3, 57, 60, 69, 23, 63, 57, 39, 61, 20, 62, 3, 59, 70, 61, 19, 70, 62, 56, 73, 70, 65, 11, 57, 63, 57, 3, 3, 70, 90, 27, 57, 14, 70, 13, 81, 27, 44, 57, 68, 11, 73, 29, 57, 63, 57, 61, 57, 68, 70, 11, 25, 66, 28, 62, 3, 62, 63, 62, 3, 73, 20, 57, 11, 64, 57, 3, 58, 90, 58, 58, 3, 24, 65, 56, 65, 62, 3, 28, 70, 61, 3, 58, 58, 11, 68, 13, 56, 25, 3, 39, 62, 29, 66, 69, 94, 65, 46, 67, 25, 3, 48, 70, 57, 55, 58, 72, 63, 48, 60, 12, 59, 71, 80, 39, 20, 57, 68, 65, 24, 58, 11, 3, 56, 70, 70, 39, 65, 61, 13, 68, 37, 63, 19, 60, 70, 58, 60, 57, 70, 29, 26, 11, 75, 60, 81, 57, 68, 57, 60, 65, 55, 70, 3, 67, 58, 65, 55, 78, 32, 48, 43, 59, 65, 69, 26, 64, 13, 3, 67, 70, 61, 70, 57, 26, 58, 55, 70, 20, 70, 64, 19, 19, 62, 58, 70, 25, 39, 55, 59, 14, 59, 59, 77, 68, 26, 66, 57, 12, 39, 56, 70, 66, 61, 67, 30, 71, 92, 58, 65, 56, 62, 47, 57, 70, 57, 66, 58, 70, 3, 55, 75, 64, 64, 64, 72, 63, 90, 21, 26, 61, 30, 70, 70, 65, 68, 70, 64, 56, 38, 56, 60, 65, 64, 11, 76, 59, 58, 65, 57, 67, 29, 57, 81, 65, 58, 57, 57, 90, 26, 22, 56, 68, 50, 48, 3, 72, 21, 70, 20, 60, 65, 30, 47, 70, 62, 60, 13, 62, 59, 57, 65, 70, 64, 40, 38, 56, 59, 72, 67, 67, 55, 58, 58, 65, 3, 58, 58, 55, 20, 3, 29, 57, 22, 59, 64, 66, 64, 59, 57, 26, 26, 65, 31, 58, 57, 55, 68, 3, 26, 19, 70, 60, 39, 62, 65, 59, 57, 59, 66, 19, 55, 57, 11, 55, 61, 3, 62, 58, 65, 50, 64, 23, 64, 37, 25, 75, 64, 62, 3, 81, 58, 60, 27, 12, 57, 48, 3, 65, 3, 57, 13, 4, 57, 77, 94, 67, 59, 14, 62, 3, 58, 57, 57, 81, 55, 81, 60, 58, 64, 58, 27, 39, 70, 31, 12, 73, 29, 70, 59, 92, 20, 3, 3, 60, 81, 58, 59, 75, 57, 70, 57, 56, 65, 56, 23, 39, 3, 62, 58, 57, 63, 20, 24, 68, 27, 64, 56, 3, 3, 11, 26, 23, 57, 27, 3, 37, 29, 3, 23, 3, 58, 60, 65, 57, 73, 37, 39, 39, 65, 57, 60, 27, 26, 3, 69, 24, 58, 55, 58, 65, 70, 55, 11, 31, 70, 20, 90, 20, 65, 47, 58, 57, 57, 20, 26, 3, 3, 67, 70, 55, 57, 94, 65, 67, 58, 11, 3, 56, 56, 71, 58, 69, 59, 58, 3, 83, 65, 62, 73, 37, 60, 81, 27, 3, 65, 65, 23, 67, 59, 81, 61, 65, 57, 57, 75, 19, 3, 64, 75, 65, 62, 27, 57, 60, 70, 55, 21, 21, 39, 68, 56, 61, 37, 81, 57, 55, 32, 57, 58, 11, 70, 65, 58, 65, 58, 61, 61, 20, 57, 59, 57, 67, 48, 14, 56, 57, 19, 3, 49, 65, 64, 60, 81, 55, 56, 57, 71, 56, 57, 56, 55, 59, 39, 3, 70, 23, 3, 77, 25, 57, 65, 61, 62, 61, 20, 57, 62, 59, 57, 58, 57, 73, 31, 38, 3, 30, 60, 65, 3, 20, 64, 81, 20, 11, 92, 11, 55, 57, 55, 43, 61, 60, 3, 58, 67, 57, 38, 58, 57, 70, 38, 3, 58, 62, 37, 81, 65, 31, 59, 65, 80, 21, 39, 23, 12, 76, 27, 59, 59, 70, 63, 57, 46, 65, 55, 70, 70, 65, 24, 57, 90, 4, 29, 39, 40, 72, 3, 64, 23, 30, 60, 39, 57, 12, 59, 26, 61, 81, 64, 66, 57, 83, 75, 81, 56, 68, 58, 57, 46, 72, 59, 60, 58, 39, 19, 11, 58, 57, 57, 57, 65, 39, 61, 3, 65, 11, 60, 19, 57, 62, 39, 70, 64, 59, 65, 20, 37, 25, 65, 58, 29, 75, 65, 80, 24, 43, 55, 57, 59, 73, 30, 13, 29, 81, 70, 70, 57, 48, 56, 60, 64, 31, 24, 4, 64, 62, 3, 57, 43, 20, 59, 3, 64, 41, 66, 65, 60, 62, 61, 70, 64, 70, 66, 73, 23, 60, 11, 24, 60, 75, 11, 70, 56, 60, 62, 19, 62, 59, 64, 81, 56, 70, 60, 57, 47, 59, 70, 3, 80, 28, 3, 27, 58, 67, 3, 39, 61, 3, 57, 21, 65, 61, 60, 60, 57, 39, 70, 59, 28, 65, 57, 57, 3, 57, 61, 60, 76, 27, 65, 83, 58, 30, 60, 57, 59, 62, 69, 58, 26, 76, 60, 29, 20, 58, 64, 29, 55, 11, 64, 13, 81, 14, 70, 62, 61, 68, 37, 81, 58, 29, 3, 83, 13, 56, 61, 58, 21, 61, 58, 3, 63, 66, 20, 60, 70, 57, 64, 11, 90, 61, 68, 62, 27, 65, 81, 24, 70, 28, 29, 57, 58, 65, 65, 70, 77, 19, 25, 57, 68, 67, 64, 66, 64, 37, 55, 3, 4, 39, 55, 39, 65, 63, 58, 58, 3, 60, 41, 68, 65, 12, 71, 65, 29, 63, 61, 38, 60, 65, 3, 62, 65, 58, 63, 65, 83, 50, 65, 58, 65, 63, 59, 43, 65, 19, 37, 70, 3, 11, 56, 65, 23, 3, 72, 58, 30, 58, 62, 57, 26, 58, 70, 38, 57, 58, 57, 3, 31, 37, 65, 26, 57, 57, 20, 60, 57, 66, 58, 4, 12, 24, 39, 70, 62, 65, 94, 27, 55, 59, 58, 65, 62, 39, 70, 59, 70, 68, 66, 56, 13, 61, 56, 22, 58, 48, 56, 71, 70, 81, 20, 37, 94, 63, 55, 57, 70, 62, 65, 66, 58, 60, 66, 3, 65, 57, 11, 28, 13, 41, 12, 92, 65, 29, 57, 3, 57, 37, 39, 71, 65, 39, 58, 11, 65, 58, 58, 29, 64, 58, 62, 60, 26, 19, 63, 56, 59, 59, 25, 58, 43, 57, 70, 65, 59, 29, 65, 90, 47, 25, 4, 73, 11, 66, 39, 57, 29, 65, 57, 3, 61, 57, 29, 57, 60, 57, 19, 11, 19, 58, 60, 58, 61, 61, 58, 27, 56, 19, 57, 57, 19, 65, 92, 58, 25, 73, 29, 64, 66, 66, 20, 65, 57, 71, 67, 68, 68, 41, 47, 20, 70, 13, 60, 20, 70, 58, 57, 27, 3, 57, 59, 66, 66, 27, 57, 61, 90, 28, 11, 65, 70, 20, 57, 20, 11, 58, 70, 73, 61, 13, 57, 57, 80, 60, 26, 37, 70, 58, 19, 57, 67, 65, 69, 61, 65, 3, 64, 67, 63, 3, 3, 70, 28, 77, 67, 62, 3, 61, 57, 61, 57, 58, 64, 24, 3, 29, 70, 66, 68, 62, 64, 90, 71, 39, 57, 67, 70, 55, 20, 90, 60, 60, 57, 28, 59, 60, 64, 41, 58, 43, 46, 65, 55, 20, 27, 70, 21, 66, 58, 60, 55, 70, 65, 23, 59, 38, 13, 92, 58, 3, 30, 64, 64, 60, 58, 70, 59, 60, 71, 64, 77, 65, 57, 3, 12, 59, 63, 14, 47, 59, 67, 20, 68, 4, 72, 55, 57, 20, 23, 27, 3, 66, 59, 94, 3, 60, 29, 59, 56, 38, 41, 3, 48, 11, 47, 60, 70, 59, 58, 24, 31, 27, 58, 3, 62, 59, 19, 21, 4, 64, 58, 70, 58, 61, 12, 94, 61, 59, 65, 57, 59, 58, 24, 58, 48, 70, 13, 58, 39, 3, 13, 60, 47, 3, 73, 58, 63, 58, 27, 4, 19, 65, 20, 57, 63, 61, 63, 70, 3, 12, 58, 69, 62, 57, 70, 19, 58, 68, 29, 57, 24, 30, 3, 65, 60, 59, 58, 57, 61, 58, 80, 62, 29, 20, 62, 66, 57, 29, 58, 47, 31, 65, 61, 57, 60, 59, 61, 57, 3, 56, 55, 30, 20, 61, 57, 55, 20, 61, 29, 61, 68, 65, 5, 29, 66, 68, 48, 24, 19, 64, 81, 57, 65, 60, 3, 70, 11, 3, 21, 39, 57, 23, 19, 57, 77, 77, 58, 31, 57, 27, 3, 39, 3, 61, 76, 58, 75, 67, 57, 29, 64, 59, 57, 3, 3, 56, 66, 25, 58, 39, 19, 65, 57, 58, 58, 72, 65, 3, 25, 3, 59, 48, 61, 60, 71, 4, 21, 58, 12, 60, 3, 20, 39, 60, 56, 81, 27, 25, 69, 65, 66, 68, 72, 56, 39, 65, 65, 70, 20, 71, 67, 56, 29, 20, 61, 66, 70, 65, 46, 29, 62, 60, 75, 27, 57, 90, 64, 70, 57, 61, 3, 3, 90, 71, 65, 59, 57, 64, 20, 81, 89, 59, 63, 39, 70, 19, 13, 41, 69, 58, 29, 60, 56, 39, 57, 20, 62, 57, 65, 27, 3, 69, 24, 19, 4, 65, 59, 12, 66, 14, 81, 58, 3, 61, 65, 56, 65, 39, 55, 57, 55, 30, 55, 56, 43, 61, 65, 92, 67, 57, 69, 66, 3, 71, 66, 71, 58, 57, 57, 62, 14, 65, 57, 64, 55, 59, 94, 62, 61, 29, 71, 65, 59, 55, 61, 60, 70, 59, 47, 3, 65, 64, 81, 11, 20, 59, 57, 11, 26, 59, 47, 60, 26, 59, 65, 60, 46, 90, 65, 21, 64, 25, 70, 31, 30, 3, 3, 55, 57, 23, 4, 29, 67, 65, 68, 61, 47, 71, 64, 70, 57, 57, 62, 64, 65, 58, 14, 59, 13, 81, 47, 65, 63, 58, 55, 59, 77, 67, 59, 65, 12, 4, 29, 58, 20, 44, 59, 57, 62, 64, 28, 62, 70, 26, 63, 57, 69, 57, 72, 58, 59, 66, 70, 65, 37, 69, 67, 66, 29, 61, 21, 20, 64, 70, 59, 64, 13, 65, 70, 58, 23, 57, 20, 61, 71, 60, 65, 59, 37, 65, 3, 71, 57, 20, 59, 55, 75, 72, 26, 70, 58, 56, 63, 63, 60, 62, 57, 68, 81, 68, 70, 57, 40, 60, 37, 81, 48, 63, 69, 61, 92, 27, 68, 57, 26, 72, 59, 65, 19, 58, 72, 3, 23, 61, 56, 57, 29, 56, 65, 68, 57, 59, 57, 56, 68, 62, 3, 58, 70, 57, 61, 66, 58, 58, 67, 20, 3, 62, 27, 63, 66, 70, 3, 58, 56, 57, 30, 66, 55, 3, 94, 59, 56, 58, 58, 67, 68, 75, 60, 56, 20, 70, 30, 26, 4, 92, 70, 26, 57, 69, 20, 61, 58, 70, 70, 64, 29, 37, 68, 57, 3, 66, 68, 60, 70, 58, 63, 29, 28, 61, 57, 70, 81, 67, 70, 71, 39, 64, 63, 57, 66, 70, 66, 65, 57, 27, 66, 11, 37, 30, 60, 51, 80, 20, 65, 67, 70, 11, 94, 59, 69, 70, 64, 56, 3, 19, 38, 71, 3, 71, 27, 68, 37, 29, 78, 3, 66, 13, 56, 61, 56, 21, 62, 65, 37, 58, 62, 63, 58, 60, 59, 63, 43, 75, 27, 67, 75, 65, 57, 66, 13, 64, 57, 48, 39, 11, 66, 56, 75, 65, 60, 58, 90, 61, 11, 62, 65, 70, 3, 29, 80, 70, 26, 62, 57, 57, 48, 65, 3, 68, 62, 3, 57, 3, 64, 65, 62, 37, 20, 75, 26, 81, 66, 29, 21, 65, 3, 62, 59, 73, 75, 66, 83, 61, 60, 20, 58, 61, 39, 26, 81, 39, 21, 14, 65, 24, 70, 62, 3, 69, 3, 66, 68, 14, 58, 64, 29, 62, 65, 70, 39, 20, 59, 13, 27, 81, 24, 71, 59, 65, 21, 65, 3, 30, 66, 4, 70, 81, 55, 39, 60, 3, 30, 81, 20, 59, 31, 11, 37, 66, 58, 68, 56, 66, 3, 75, 3, 29, 92, 57, 61, 30, 20, 11, 66, 20, 65, 3, 24, 3, 38, 58, 26, 62, 61, 57, 29, 59, 58, 72, 64, 39, 92, 27, 59, 38, 70, 56, 73, 47, 3, 27, 60, 57, 70, 64, 62, 57, 3, 22, 59, 57, 68, 63, 65, 20, 58, 3, 62, 65, 57, 66, 3, 26, 65, 90, 64, 24, 31, 61, 70, 57, 11, 13, 21, 55, 48, 64, 46, 3, 11, 63, 23, 59, 39, 65, 61, 27, 65, 61, 55, 3, 11, 61, 29, 70, 39, 62, 4, 62, 57, 60, 39, 61, 63, 68, 13, 75, 57, 39, 59, 3, 12, 12, 59, 65, 58, 64, 20, 72, 56, 57, 57, 20, 26, 70, 57, 28, 13, 20, 72, 3, 60, 39, 62, 64, 28, 3, 63, 3, 39, 58, 70, 67, 29, 56, 64, 57, 65, 20, 75, 20, 66, 69, 62, 57, 68, 62, 90, 60, 65, 38, 59, 30, 59, 70, 58, 60, 57, 39, 39, 3, 70, 47, 65, 71, 64, 3, 58, 57, 20, 65, 80, 24, 20, 90, 39, 39, 47, 90, 20, 61, 13, 81, 63, 58, 27, 56, 66, 65, 39, 57, 59, 38, 4, 47, 70, 90, 67, 3, 64, 39, 61, 39, 26, 75, 56, 39, 41, 81, 66, 39, 55, 58, 58, 3, 41, 67, 20, 20, 27, 70, 62, 26, 59, 70, 64, 39, 19, 64, 57, 57, 62, 94, 58, 58, 13, 70, 60, 57, 59, 69, 59, 3, 61, 57, 62, 59, 59, 27, 28, 70, 59, 37, 21, 65, 60, 20, 56, 27, 27, 68, 58, 70, 3, 63, 56, 39, 57, 70, 61, 39, 24, 58, 80, 92, 37, 58, 59, 3, 24, 3, 39, 66, 57, 26, 30, 24, 3, 19, 58, 43, 57, 63, 20, 19, 59, 57, 58, 58, 24, 90, 61, 68, 60, 3, 50, 39, 64, 67, 3, 59, 81, 39, 39, 71, 58, 23, 47, 3, 70, 83, 3, 59, 67, 14, 26, 19, 75, 68, 62, 3, 90, 69, 39, 62, 13, 3, 21, 39, 75, 70, 70, 58, 13, 81, 32, 58, 59, 20, 3, 81, 65, 39, 3, 37, 59, 75, 62, 57, 73, 58, 67, 65, 66, 68, 24, 65, 65, 58, 67, 19, 70, 24, 63, 66, 70, 77, 57, 70, 11, 58, 65, 90, 37, 65, 61, 94, 11, 57, 26, 65, 65, 69, 13, 58, 58, 19, 50, 3, 67, 69, 73, 66, 68, 28, 73, 59, 61, 3, 65, 20, 61, 62, 64, 90, 70, 60, 70, 71, 66, 56, 19, 59, 60, 57, 39, 67, 64],
        'y': [76, 73, 72, 31, 83, 12, 66, 69, 90, 22, 39, 68, 24, 94, 67, 23, 48, 67, 21, 21, 42, 29, 24, 12, 65, 68, 94, 22, 60, 68, 47, 67, 64, 12, 71, 76, 94, 64, 22, 19, 60, 77, 24, 71, 46, 26, 58, 13, 94, 24, 21, 47, 26, 70, 28, 59, 67, 39, 94, 25, 66, 71, 59, 62, 21, 92, 40, 39, 65, 41, 64, 44, 73, 66, 41, 71, 58, 22, 71, 64, 46, 20, 58, 3, 23, 66, 73, 68, 94, 21, 63, 69, 94, 23, 66, 22, 66, 59, 69, 60, 22, 21, 68, 65, 66, 61, 68, 63, 75, 47, 48, 32, 27, 21, 69, 59, 22, 73, 3, 83, 66, 64, 72, 73, 41, 41, 69, 29, 73, 57, 62, 57, 90, 68, 71, 23, 76, 90, 22, 90, 24, 69, 42, 67, 68, 64, 42, 22, 28, 60, 90, 26, 92, 22, 43, 38, 26, 39, 12, 73, 68, 76, 90, 59, 80, 71, 44, 40, 62, 40, 70, 23, 29, 39, 60, 42, 94, 21, 94, 3, 76, 59, 29, 24, 39, 94, 72, 73, 71, 69, 76, 94, 39, 49, 67, 68, 21, 14, 78, 77, 90, 64, 12, 64, 61, 41, 58, 11, 28, 59, 61, 72, 62, 83, 68, 42, 90, 39, 90, 94, 21, 30, 60, 39, 71, 59, 80, 92, 61, 64, 71, 64, 90, 71, 57, 94, 58, 71, 30, 57, 64, 64, 64, 46, 71, 77, 72, 42, 69, 90, 72, 27, 68, 11, 60, 68, 57, 61, 60, 65, 71, 25, 31, 19, 90, 24, 60, 64, 64, 77, 58, 90, 62, 26, 65, 50, 50, 21, 66, 77, 39, 73, 60, 65, 22, 90, 64, 22, 61, 12, 71, 42, 63, 23, 67, 25, 62, 24, 60, 69, 47, 94, 24, 76, 64, 28, 24, 68, 29, 90, 47, 5, 66, 12, 83, 28, 92, 59, 61, 22, 94, 62, 60, 62, 68, 66, 71, 47, 83, 58, 39, 83, 73, 22, 39, 23, 3, 67, 70, 26, 73, 24, 61, 23, 42, 41, 68, 73, 67, 64, 60, 72, 69, 46, 73, 60, 58, 92, 71, 90, 71, 37, 23, 70, 41, 59, 66, 69, 39, 47, 71, 65, 92, 61, 66, 65, 43, 45, 47, 29, 23, 60, 68, 92, 50, 80, 94, 94, 44, 22, 80, 40, 68, 71, 39, 26, 61, 73, 47, 14, 66, 66, 83, 59, 42, 90, 67, 64, 58, 68, 71, 94, 39, 31, 71, 65, 69, 21, 70, 64, 39, 39, 24, 90, 78, 29, 22, 60, 46, 63, 28, 71, 77, 67, 21, 39, 78, 64, 39, 40, 68, 70, 57, 62, 14, 67, 68, 64, 69, 42, 67, 71, 83, 69, 67, 69, 67, 39, 22, 31, 70, 71, 21, 12, 39, 30, 39, 90, 66, 45, 22, 72, 47, 59, 29, 67, 47, 66, 22, 70, 50, 74, 22, 92, 22, 90, 70, 5, 90, 67, 23, 23, 64, 67, 66, 37, 21, 57, 39, 39, 67, 41, 71, 73, 67, 67, 22, 81, 68, 64, 12, 73, 94, 68, 90, 94, 80, 12, 67, 29, 90, 71, 32, 59, 61, 22, 69, 69, 39, 90, 57, 71, 74, 60, 47, 58, 46, 41, 71, 12, 60, 66, 39, 30, 82, 21, 3, 58, 68, 15, 67, 24, 57, 70, 70, 62, 78, 40, 80, 39, 13, 23, 68, 62, 72, 75, 23, 80, 30, 24, 94, 39, 20, 72, 81, 64, 22, 12, 14, 22, 73, 81, 62, 65, 64, 44, 68, 59, 73, 69, 12, 41, 90, 59, 68, 94, 21, 90, 76, 83, 42, 59, 69, 63, 69, 71, 66, 23, 32, 69, 66, 71, 81, 23, 41, 28, 39, 59, 62, 69, 48, 24, 67, 28, 28, 58, 76, 70, 12, 3, 38, 90, 63, 72, 92, 65, 64, 70, 73, 20, 68, 58, 92, 94, 77, 21, 59, 48, 71, 59, 63, 60, 26, 28, 59, 39, 39, 68, 46, 68, 23, 29, 68, 39, 92, 63, 68, 58, 62, 23, 67, 67, 73, 47, 83, 62, 22, 70, 21, 22, 70, 66, 68, 21, 46, 39, 22, 65, 61, 41, 48, 64, 59, 22, 21, 39, 62, 65, 58, 66, 21, 28, 66, 28, 67, 59, 63, 23, 24, 90, 59, 68, 5, 57, 38, 21, 90, 4, 46, 28, 24, 71, 83, 64, 33, 5, 57, 71, 94, 69, 23, 61, 71, 3, 59, 66, 62, 23, 67, 59, 66, 69, 65, 39, 94, 32, 47, 24, 60, 73, 64, 39, 62, 90, 71, 50, 80, 46, 47, 27, 46, 90, 23, 94, 58, 73, 94, 72, 62, 71, 92, 47, 60, 94, 77, 57, 66, 41, 77, 65, 22, 63, 57, 69, 77, 70, 75, 90, 65, 73, 21, 30, 22, 73, 38, 22, 94, 60, 73, 32, 22, 67, 71, 71, 61, 66, 63, 73, 46, 64, 50, 71, 72, 94, 90, 59, 71, 74, 11, 60, 24, 60, 50, 59, 67, 28, 69, 69, 12, 94, 59, 39, 67, 29, 67, 21, 61, 59, 50, 70, 68, 62, 30, 42, 39, 67, 31, 47, 62, 69, 64, 83, 39, 41, 14, 39, 68, 21, 71, 64, 41, 72, 61, 21, 67, 73, 14, 37, 23, 23, 57, 69, 60, 69, 40, 31, 90, 39, 40, 46, 67, 21, 46, 63, 59, 90, 90, 73, 59, 58, 90, 94, 73, 39, 60, 31, 72, 22, 83, 44, 62, 30, 68, 26, 23, 63, 29, 59, 23, 30, 71, 48, 32, 48, 40, 90, 46, 57, 23, 90, 37, 62, 68, 60, 31, 47, 47, 40, 78, 21, 60, 63, 73, 66, 60, 20, 40, 90, 80, 23, 58, 94, 24, 19, 80, 39, 21, 39, 90, 69, 62, 71, 37, 68, 40, 71, 73, 73, 65, 39, 47, 68, 69, 64, 76, 29, 75, 83, 39, 72, 76, 72, 22, 21, 41, 65, 28, 67, 60, 61, 92, 23, 30, 43, 59, 47, 59, 69, 67, 22, 41, 94, 59, 22, 72, 90, 21, 57, 47, 39, 69, 73, 94, 29, 21, 62, 81, 23, 39, 94, 77, 23, 92, 90, 68, 27, 45, 40, 46, 24, 41, 39, 94, 20, 69, 32, 69, 64, 39, 39, 90, 60, 90, 67, 60, 67, 63, 38, 63, 73, 66, 21, 69, 24, 60, 64, 23, 64, 73, 90, 64, 69, 28, 22, 48, 39, 81, 23, 24, 59, 94, 73, 59, 44, 29, 72, 57, 38, 72, 12, 63, 76, 92, 48, 58, 64, 73, 31, 39, 69, 81, 71, 73, 64, 11, 73, 39, 68, 64, 67, 39, 61, 60, 66, 39, 94, 94, 65, 46, 47, 68, 28, 71, 94, 72, 64, 92, 61, 48, 21, 73, 90, 62, 60, 61, 69, 59, 59, 57, 83, 60, 65, 71, 67, 60, 92, 90, 24, 72, 58, 24, 60, 63, 94, 69, 66, 22, 66, 40, 42, 39, 64, 83, 66, 66, 72, 60, 73, 70, 64, 60, 21, 22, 28, 62, 32, 67, 30, 49, 29, 78, 68, 69, 38, 23, 83, 70, 21, 62, 39, 62, 69, 68, 3, 23, 71, 78, 67, 58, 39, 39, 66, 39, 41, 70, 73, 3, 39, 41, 39, 60, 41, 61, 69, 62, 26, 67, 59, 61, 42, 72, 47, 66, 64, 67, 61, 60, 73, 90, 80, 38, 27, 57, 90, 67, 74, 69, 90, 40, 67, 44, 21, 47, 40, 31, 67, 39, 59, 39, 40, 40, 31, 66, 24, 71, 90, 77, 40, 57, 22, 90, 70, 42, 68, 38, 68, 61, 72, 64, 24, 94, 23, 14, 90, 22, 41, 37, 39, 90, 92, 23, 70, 23, 28, 83, 3, 47, 62, 28, 64, 24, 41, 62, 62, 37, 23, 59, 71, 94, 70, 19, 45, 83, 83, 77, 62, 67, 22, 29, 66, 80, 41, 23, 60, 64, 67, 59, 46, 68, 72, 90, 65, 66, 39, 12, 3, 39, 59, 60, 26, 69, 3, 62, 32, 67, 71, 46, 40, 29, 39, 61, 23, 41, 70, 94, 24, 60, 68, 14, 40, 24, 22, 59, 20, 71, 32, 67, 39, 69, 69, 23, 71, 58, 37, 76, 21, 69, 24, 92, 92, 92, 22, 28, 66, 14, 66, 72, 60, 94, 69, 39, 22, 60, 57, 62, 66, 69, 23, 46, 92, 39, 66, 63, 21, 75, 63, 31, 67, 90, 62, 64, 92, 77, 24, 61, 73, 32, 32, 57, 90, 92, 59, 23, 39, 94, 48, 32, 66, 67, 92, 81, 73, 39, 92, 70, 59, 40, 21, 21, 20, 22, 21, 94, 69, 40, 61, 62, 71, 67, 63, 59, 24, 60, 61, 47, 66, 42, 92, 73, 69, 21, 60, 59, 27, 77, 69, 80, 39, 70, 40, 73, 41, 28, 3, 60, 68, 21, 66, 59, 60, 64, 62, 67, 12, 3, 70, 20, 19, 64, 68, 66, 63, 58, 32, 71, 26, 90, 41, 81, 46, 68, 71, 58, 30, 21, 21, 47, 92, 58, 14, 59, 61, 71, 61, 14, 14, 60, 45, 73, 69, 73, 51, 64, 72, 64, 64, 60, 31, 12, 48, 22, 67, 68, 61, 47, 23, 63, 50, 24, 81, 75, 71, 62, 73, 70, 61, 12, 62, 30, 62, 94, 43, 39, 59, 67, 63, 60, 70, 24, 40, 39, 68, 73, 39, 21, 58, 82, 71, 80, 66, 20, 58, 24, 12, 77, 24, 62, 29, 62, 22, 83, 58, 26, 69, 94, 90, 22, 70, 42, 3, 68, 90, 66, 64, 62, 46, 77, 58, 23, 48, 67, 73, 63, 70, 60, 72, 12, 14, 64, 70, 21, 57, 21, 77, 64, 67, 58, 57, 47, 25, 64, 69, 60, 37, 62, 23, 39, 23, 40, 29, 48, 63, 63, 41, 39, 73, 64, 90, 39, 51, 61, 67, 23, 12, 94, 48, 76, 58, 69, 94, 47, 73, 67, 23, 67, 58, 71, 66, 44, 73, 58, 69, 80, 61, 24, 44, 71, 73, 21, 3, 23, 41, 68, 69, 39, 60, 11, 32, 61, 37, 83, 58, 72, 24, 21, 64, 22, 24, 23, 66, 60, 58, 68, 68, 22, 42, 50, 47, 39, 68, 40, 68, 31, 64, 69, 64, 50, 23, 20, 61, 41, 60, 66, 38, 40, 92, 72, 59, 59, 83, 59, 76, 81, 90, 66, 60, 68, 90, 70, 60, 71, 69, 66, 59, 64, 29, 83, 20, 12, 14, 67, 59, 39, 70, 39, 30, 65, 41, 41, 3, 19, 66, 3, 46, 69, 94, 65, 63, 71, 69, 25, 68, 64, 59, 25, 67, 22, 69, 24, 47, 59, 32, 39, 61, 5, 42, 68, 29, 22, 44, 75, 60, 39, 94, 21, 65, 44, 21, 23, 68, 66, 60, 26, 69, 21, 31, 46, 72, 73, 40, 60, 66, 24, 50, 67, 22, 39, 24, 64, 27, 59, 50, 22, 73, 70, 33, 43, 31, 57, 42, 21, 60, 78, 12, 62, 71, 24, 67, 24, 20, 67, 73, 61, 70, 39, 72, 71, 60, 60, 24, 92, 37, 65, 64, 92, 67, 68, 68, 64, 39, 40, 27, 71, 61, 75, 77, 39, 83, 47, 28, 19, 67, 66, 81, 31, 81, 75, 29, 63, 64, 63, 49, 70, 39, 69, 32, 83, 13, 71, 68, 62, 62, 28, 57, 72, 67, 69, 80, 68, 68, 90, 94, 64, 73, 66, 60, 90, 23, 29, 62, 3, 46, 68, 80, 3, 90, 20, 64, 66, 3, 69, 64, 71, 28, 70, 66, 62, 65, 77, 90, 69, 72, 32, 44, 68, 47, 73, 90, 58, 68, 62, 94, 92, 24, 59, 64, 66, 64, 65, 67, 71, 66, 46, 62, 60, 90, 57, 58, 39, 66, 44, 75, 66, 33, 94, 14, 90, 90, 64, 90, 94, 64, 28, 46, 90, 28, 61, 67, 67, 43, 3, 41, 23, 48, 32, 50, 41, 68, 68, 72, 72, 48, 63, 78, 68, 42, 14, 61, 60, 62, 23, 60, 60, 65, 24, 68, 70, 64, 41, 68, 90, 12, 23, 60, 69, 41, 75, 60, 30, 28, 39, 77, 44, 62, 63, 70, 60, 64, 46, 23, 48, 59, 71, 68, 39, 90, 66, 72, 41, 12, 30, 68, 59, 23, 62, 23, 25, 21, 61, 66, 23, 94, 94, 92, 90, 59, 75, 21, 69, 39, 39, 73, 26, 64, 59, 92, 40, 64, 5, 5, 23, 61, 64, 39, 69, 78, 66, 72, 3, 92, 59, 3, 25, 60, 29, 73, 73, 68, 50, 63, 64, 67, 29, 21, 67, 20, 23, 61, 58, 69, 50, 11, 61, 29, 69, 70, 63, 39, 63, 67, 61, 31, 23, 29, 69, 73, 64, 58, 24, 46, 12, 71, 90, 70, 41, 40, 59, 66, 64, 94, 69, 57, 31, 39, 64, 41, 60, 31, 70, 73, 64, 48, 25, 11, 41, 21, 72, 94, 60, 90, 58, 94, 62, 62, 67, 72, 68, 39, 12, 78, 49, 23, 48, 23, 68, 75, 61, 12, 65, 40, 67, 90, 21, 68, 64, 23, 24, 21, 68, 82, 21, 63, 66, 92, 29, 73, 39, 70, 23, 71, 27, 60, 28, 65, 60, 22, 64, 47, 60, 92, 76, 26, 49, 22, 72, 40, 21, 70, 28, 66, 66, 25, 62, 58, 47, 73, 67, 39, 37, 73, 3, 64, 62, 63, 66, 59, 69, 77, 25, 3, 58, 65, 37, 23, 24, 60, 81, 22, 47, 22, 68, 67, 60, 68, 73, 94, 71, 69, 40, 80, 32, 57, 73, 31, 21, 61, 92, 39, 70, 29, 58, 90, 67, 71, 68, 29, 92, 62, 40, 47, 12, 58, 64, 60, 65, 57, 40, 23, 59, 41, 66, 50, 67, 60, 77, 68, 45, 3, 72, 62, 37, 65, 68, 70, 94, 64, 60, 65, 68, 73, 42, 68, 23, 66, 47, 76, 69, 68, 23, 66, 66, 68, 58, 71, 68, 29, 61, 43, 59, 90, 22, 73, 67, 22, 90, 71, 70, 40, 92, 19, 63, 73, 39, 39, 58, 77, 60, 21, 22, 81, 39, 77, 74, 61, 37, 61, 47, 59, 22, 69, 64, 71, 12, 39, 60, 24, 94, 39, 32, 23, 62, 62, 32, 42, 23, 68, 62, 67, 60, 92, 22, 90, 44, 67, 59, 58, 41, 64, 92, 50, 77, 71, 68, 58, 90, 49, 12, 3, 58, 57, 26, 77, 29, 69, 90, 73, 65, 66, 43, 60, 20, 39, 29, 25, 31, 3, 45, 64, 64, 60, 21, 29, 50, 75, 73, 57, 66, 39, 72, 22, 14, 71, 39, 69, 67, 94, 40, 22, 71, 66, 58, 66, 39, 39, 29, 59, 14, 73, 32, 94, 71, 60, 48, 69, 78, 69, 49, 64, 72, 64, 76, 13, 73, 39, 63, 62, 40, 94, 72, 63, 65, 92, 59, 71, 90, 68, 59, 37, 90, 71, 47, 58, 26, 83, 59, 61, 66, 66, 40, 70, 90, 24, 83, 69, 77, 94, 64, 39, 64, 28, 60, 78, 5, 61, 67, 58, 67, 64, 39, 58, 65, 21, 22, 31, 22, 64, 94, 22, 57, 62, 45, 62, 41, 64, 51, 5, 67, 21, 50, 47, 73, 68, 5, 60, 60, 67, 61, 71, 3, 12, 92, 73, 67, 49, 37, 60, 76, 44, 39, 80, 70, 44, 57, 72, 57, 59, 78, 69, 77, 21, 61, 75, 21, 60, 58, 57, 39, 20, 68, 29, 71, 69, 22, 70, 69, 59, 67, 21, 71, 65, 26, 71, 67, 49, 68, 71, 94, 14, 73, 67, 22, 94, 39, 58, 68, 67, 70, 29, 29, 81, 73, 62, 69, 71, 90, 64, 22, 68, 61, 39, 57, 94, 94, 62, 44, 69, 59, 67, 22, 64, 78, 77, 94, 62, 76, 77, 68, 22, 67, 68, 65, 62, 57, 59, 73, 73, 71, 94, 61, 67, 60, 49, 24, 62, 39, 22, 41, 3, 81, 23, 71, 39, 78, 62, 20, 69, 67, 25, 92, 58, 69, 47, 69, 22, 26, 24, 30, 68, 67, 40, 90, 47, 48, 68, 24, 62, 64, 62, 39, 71, 19, 68, 3, 48, 19, 64, 77, 60, 59, 41, 71, 94, 94, 71, 60, 42, 39, 90, 73, 70, 59, 67, 47, 58, 66, 68, 59, 69, 41, 23, 71, 78, 40, 66, 22, 3, 62, 62, 90, 73, 76, 64, 67, 39, 29, 73, 39, 67, 64, 41, 47, 67, 44, 64, 46, 60, 68, 62, 45, 21, 58, 92, 94, 23, 59, 50, 83, 59, 60, 19, 90, 80, 50, 77, 71, 67, 90, 60, 77, 23, 67, 60, 60, 63, 39, 68, 21, 62, 83, 64, 81, 49, 44, 67, 73, 39, 12, 60, 46, 68, 94, 58, 23, 13, 28, 67, 39, 45, 66, 65, 92, 22, 47, 66, 63, 29, 39, 71, 73, 25, 90, 61, 66, 71, 63, 64, 11, 71, 71, 22, 76, 94, 92, 69, 66, 63, 69, 67, 31, 73, 39, 41, 26, 59, 60, 68, 22, 73, 64, 94, 3, 61, 61, 73, 39, 25, 68, 72, 77, 22, 47, 39, 68, 57, 94, 94, 90, 39, 70, 24, 23, 90, 64, 58, 22, 66, 11, 48, 32, 90, 22, 60, 22, 29, 72, 22, 29, 90, 66, 70, 37, 69, 40, 57, 29, 59, 21, 90, 75, 38, 58, 22, 60, 68, 58, 59, 94, 71, 71, 64, 59, 63, 69, 23, 59, 69, 90, 39, 59, 67, 29, 25, 39, 24, 39, 92, 57, 68, 49, 39, 19, 24, 22, 60, 60, 60, 90, 90, 21, 47, 24, 38, 60, 67, 48, 27, 13, 73, 68, 76, 59, 94, 65, 59, 59, 63, 22, 39, 43, 11, 73, 65, 65, 68, 41, 69, 63, 62, 39, 47, 47, 67, 59, 94, 14, 21, 60, 73, 41, 39, 21, 61, 73, 21, 90, 69, 61, 28, 68, 20, 3, 49, 68, 82, 83, 70, 73, 68, 72, 12, 22, 71, 94, 68, 90, 20, 65, 23, 23, 23, 39, 73, 28, 23, 3, 83, 45, 57, 68, 81, 59, 39, 61, 73, 39, 70, 72, 62, 68, 90, 71, 94, 60, 72, 78, 43, 28, 69, 78, 62, 58, 71, 49, 71, 64, 49, 92, 26, 68, 57, 47, 68, 39, 61, 21, 24, 72, 68, 58, 21, 58, 83, 51, 67, 46, 67, 59, 65, 49, 22, 48, 94, 39, 39, 71, 57, 39, 40, 68, 12, 21, 46, 76, 23, 71, 28, 73, 62, 57, 90, 60, 29, 80, 39, 51, 69, 71, 71, 59, 66, 92, 29, 14, 90, 41, 83, 90, 29, 22, 73, 57, 71, 68, 68, 90, 32, 68, 71, 47, 71, 64, 94, 90, 63, 90, 48, 29, 48, 28, 94, 71, 60, 73, 90, 22, 31, 94, 49, 39, 48, 37, 68, 94, 62, 49, 14, 69, 69, 14, 72, 12, 94, 67, 21, 62, 39, 61, 28, 58, 43, 73, 41, 66, 48, 61, 22, 22, 65, 71, 12, 29, 61, 20, 69, 47, 66, 62, 21, 46, 64, 39, 40, 39, 21, 73, 28, 69, 20, 72, 20, 81, 83, 67, 28, 39, 68, 92, 40, 92, 69, 23, 41, 67, 59, 21, 94, 90, 57, 90, 62, 90, 60, 92, 94, 72, 29, 59, 21, 66, 80, 80, 67, 92, 62, 22, 30, 22, 3, 50, 68, 78, 71, 23, 94, 24, 62, 92, 58, 39, 47, 60, 67, 59, 68, 38, 59, 44, 90, 94, 94, 13, 94, 59, 23, 73, 62, 90, 94, 31, 28, 59, 94, 39, 94, 25, 22, 62, 68, 68, 67, 57, 92, 61, 62, 21, 57, 27, 63, 39, 46, 49, 65, 92, 58, 66, 72, 71, 66, 77, 62, 39, 59, 68, 60, 39, 69, 76, 39, 94, 21, 69, 58, 77, 60, 24, 71, 23, 65, 21, 94, 40, 67, 90, 20, 39, 50, 64, 60, 64, 39, 60, 71, 69, 62, 68, 46, 70, 24, 21, 25, 42, 62, 61, 62, 32, 26, 58, 92, 22, 92, 45, 40, 71, 64, 48, 30, 23, 62, 47, 26, 67, 58, 73, 60, 60, 20, 30, 78, 69, 22, 90, 73, 39, 68, 59, 71, 27, 47, 60, 41, 83, 49, 71, 94, 37, 59, 94, 59, 81, 94, 70, 61, 46, 69, 39, 77, 39, 66, 90, 22, 3, 40, 25, 90, 64, 73, 71, 60, 31, 73, 23, 42, 60, 24, 23, 64, 23, 68, 64, 68, 39, 75, 76, 21, 92, 22, 23, 39, 69, 26, 57, 75, 75, 71, 69, 64, 57, 90, 59, 94, 65, 67, 66, 69, 48, 62, 76, 23, 3, 59, 67, 58, 46, 64, 72, 23, 61, 28, 31, 47, 69, 22, 63, 45, 39, 90, 58, 72, 64, 92, 59, 62, 28, 41, 60, 71, 68, 65, 83, 94, 68, 90, 40, 62, 23, 69, 90, 94, 64, 49, 32, 59, 69, 5, 25, 68, 69, 83, 27, 40, 76, 94, 69, 64, 21, 23, 72, 68, 80, 62, 41, 67, 28, 68, 39, 72, 30, 30, 83, 59, 90, 65, 65, 31, 58, 94, 71, 3, 66, 83, 73, 71, 22, 39, 71, 69, 22, 40, 48, 69, 67, 60, 40, 22, 39, 29, 90, 23, 71, 78, 39, 39, 23, 92, 70, 23, 22, 64, 67, 40, 38, 90, 28, 70, 94, 24, 14, 39, 60, 41, 83, 71, 68, 90, 23, 22, 21, 46, 41, 62, 39, 64, 42, 58, 39, 64, 66, 40, 68, 42, 25, 22, 71, 60, 3, 39, 64, 94, 67, 24, 39],
        'z': [46, 42, 41, 14, 42, 40, 90, 74, 92, 23, 40, 23, 74, 22, 24, 42, 82, 94, 22, 23, 74, 83, 26, 24, 71, 40, 22, 24, 39, 72, 44, 40, 67, 42, 94, 44, 40, 94, 23, 37, 67, 45, 26, 40, 45, 47, 21, 49, 40, 74, 92, 44, 47, 64, 44, 24, 24, 23, 42, 26, 40, 94, 74, 73, 22, 41, 41, 68, 71, 42, 22, 79, 42, 23, 42, 23, 74, 42, 24, 67, 6, 26, 67, 40, 42, 90, 41, 69, 73, 24, 73, 90, 24, 42, 42, 24, 74, 90, 24, 39, 41, 42, 40, 68, 23, 39, 21, 21, 47, 83, 50, 83, 47, 73, 22, 24, 74, 29, 4, 82, 74, 71, 90, 22, 23, 42, 22, 82, 22, 25, 92, 21, 92, 22, 94, 24, 44, 73, 41, 40, 42, 42, 74, 24, 71, 90, 79, 41, 44, 68, 42, 27, 73, 24, 46, 20, 83, 40, 26, 23, 23, 45, 73, 24, 77, 41, 45, 21, 69, 22, 39, 24, 28, 41, 23, 74, 42, 73, 41, 23, 45, 64, 47, 74, 23, 23, 22, 41, 22, 24, 45, 74, 23, 31, 23, 22, 41, 83, 74, 45, 74, 42, 22, 68, 39, 42, 69, 73, 74, 42, 62, 40, 64, 5, 90, 74, 42, 67, 73, 23, 24, 48, 68, 23, 24, 39, 44, 73, 67, 68, 90, 94, 24, 41, 59, 24, 64, 40, 83, 59, 90, 90, 68, 44, 41, 45, 22, 74, 73, 24, 92, 46, 94, 72, 42, 72, 22, 94, 42, 61, 94, 26, 50, 13, 24, 42, 22, 73, 40, 46, 23, 22, 74, 28, 61, 32, 82, 41, 68, 78, 90, 22, 21, 73, 42, 74, 67, 74, 59, 92, 24, 74, 41, 24, 42, 48, 39, 42, 64, 23, 42, 22, 42, 44, 22, 76, 42, 69, 47, 73, 83, 82, 39, 40, 76, 44, 41, 23, 94, 41, 42, 67, 24, 90, 74, 24, 22, 83, 79, 74, 24, 76, 23, 41, 23, 42, 73, 71, 66, 29, 42, 42, 59, 74, 74, 23, 73, 42, 68, 39, 92, 21, 74, 45, 22, 23, 42, 23, 74, 42, 73, 22, 42, 24, 42, 62, 71, 23, 94, 44, 22, 73, 41, 69, 68, 22, 28, 79, 77, 42, 26, 22, 24, 24, 83, 76, 42, 73, 79, 42, 83, 41, 73, 23, 92, 79, 71, 22, 82, 32, 24, 90, 82, 60, 74, 24, 42, 94, 59, 23, 24, 41, 24, 14, 74, 42, 71, 23, 22, 68, 68, 94, 42, 24, 45, 83, 23, 71, 6, 90, 47, 42, 44, 21, 42, 42, 74, 66, 67, 73, 90, 59, 73, 74, 82, 42, 23, 66, 22, 79, 73, 74, 82, 42, 42, 74, 40, 69, 41, 5, 67, 24, 74, 26, 90, 32, 94, 40, 67, 6, 24, 41, 77, 68, 82, 71, 76, 42, 23, 42, 83, 79, 42, 73, 74, 22, 59, 82, 23, 94, 24, 26, 66, 73, 23, 40, 24, 62, 42, 73, 68, 74, 42, 22, 69, 24, 23, 47, 72, 69, 42, 29, 41, 94, 24, 42, 42, 26, 74, 75, 40, 42, 5, 22, 24, 23, 94, 42, 92, 22, 41, 23, 79, 21, 42, 21, 45, 23, 22, 41, 90, 23, 68, 14, 74, 23, 26, 41, 71, 79, 23, 74, 71, 39, 60, 94, 79, 41, 42, 23, 14, 42, 94, 39, 12, 45, 24, 44, 50, 74, 24, 74, 22, 21, 82, 40, 23, 22, 32, 42, 23, 31, 94, 68, 22, 45, 94, 71, 42, 24, 22, 74, 21, 23, 42, 41, 23, 74, 78, 82, 74, 62, 90, 23, 23, 24, 68, 74, 83, 90, 71, 23, 23, 24, 23, 82, 23, 71, 94, 73, 50, 83, 90, 45, 45, 25, 45, 71, 41, 24, 20, 22, 21, 40, 22, 69, 42, 39, 41, 25, 24, 73, 73, 23, 78, 22, 69, 82, 94, 64, 90, 94, 46, 46, 94, 68, 71, 90, 6, 41, 42, 83, 71, 72, 41, 39, 24, 62, 73, 42, 74, 71, 74, 46, 42, 66, 23, 22, 24, 42, 42, 94, 23, 73, 79, 73, 24, 71, 71, 74, 82, 67, 73, 74, 23, 22, 73, 58, 23, 73, 41, 77, 73, 47, 90, 92, 42, 42, 42, 23, 71, 24, 51, 68, 22, 24, 92, 13, 44, 76, 42, 90, 82, 24, 82, 82, 42, 73, 22, 90, 74, 62, 40, 40, 66, 42, 42, 26, 42, 60, 94, 42, 39, 71, 73, 82, 45, 74, 73, 41, 42, 41, 23, 42, 22, 82, 82, 44, 44, 29, 74, 40, 74, 40, 61, 23, 22, 12, 39, 90, 41, 79, 21, 74, 76, 69, 94, 74, 76, 62, 42, 92, 39, 71, 46, 21, 77, 24, 23, 22, 23, 14, 23, 23, 23, 23, 42, 42, 74, 83, 24, 73, 24, 42, 64, 42, 42, 23, 79, 74, 83, 90, 21, 23, 21, 42, 22, 79, 41, 23, 42, 22, 83, 60, 90, 47, 24, 23, 23, 23, 69, 90, 71, 5, 73, 22, 42, 60, 83, 21, 74, 64, 31, 74, 23, 42, 83, 83, 42, 23, 66, 42, 22, 23, 83, 92, 24, 42, 90, 68, 23, 40, 64, 74, 21, 74, 32, 24, 24, 24, 39, 71, 74, 24, 73, 32, 74, 71, 21, 44, 24, 41, 44, 74, 66, 73, 41, 42, 72, 64, 42, 74, 22, 74, 24, 50, 90, 74, 76, 45, 68, 14, 73, 82, 26, 92, 79, 68, 29, 49, 42, 49, 5, 14, 22, 21, 74, 65, 42, 22, 42, 73, 42, 69, 50, 82, 82, 21, 6, 92, 71, 94, 22, 39, 68, 23, 22, 23, 83, 42, 73, 24, 26, 73, 51, 90, 23, 21, 41, 23, 64, 42, 40, 23, 22, 42, 23, 74, 67, 69, 82, 71, 74, 42, 46, 74, 44, 5, 24, 73, 78, 41, 42, 42, 42, 21, 76, 21, 24, 69, 74, 74, 32, 77, 42, 79, 69, 94, 94, 41, 23, 22, 22, 42, 40, 42, 24, 64, 78, 71, 71, 23, 73, 77, 73, 92, 49, 42, 74, 24, 78, 24, 22, 74, 73, 82, 6, 73, 6, 74, 29, 69, 22, 57, 71, 5, 71, 73, 41, 74, 73, 21, 42, 74, 71, 94, 21, 60, 21, 41, 74, 74, 71, 42, 71, 73, 83, 69, 41, 42, 67, 42, 46, 74, 14, 67, 42, 47, 47, 66, 24, 74, 90, 45, 44, 73, 39, 39, 73, 25, 23, 46, 23, 42, 40, 74, 22, 82, 94, 74, 49, 23, 22, 42, 24, 42, 94, 71, 42, 69, 73, 59, 67, 73, 41, 42, 74, 42, 45, 78, 41, 77, 41, 40, 90, 71, 23, 62, 32, 22, 22, 73, 94, 90, 94, 23, 73, 22, 23, 76, 39, 70, 24, 68, 22, 22, 23, 42, 90, 41, 74, 64, 94, 41, 42, 39, 41, 68, 22, 74, 90, 39, 42, 69, 68, 12, 73, 23, 64, 68, 64, 23, 23, 46, 68, 83, 21, 82, 32, 46, 45, 42, 22, 22, 74, 5, 21, 92, 42, 23, 24, 90, 94, 72, 26, 23, 45, 71, 94, 73, 42, 94, 71, 81, 60, 42, 26, 73, 42, 22, 94, 74, 69, 74, 24, 83, 68, 60, 23, 74, 12, 78, 24, 24, 71, 23, 92, 41, 23, 82, 21, 47, 65, 23, 94, 79, 71, 22, 73, 69, 78, 73, 79, 73, 82, 68, 23, 23, 42, 22, 21, 32, 73, 42, 24, 40, 44, 22, 22, 23, 22, 73, 79, 94, 42, 71, 42, 22, 71, 42, 23, 24, 83, 21, 42, 74, 41, 22, 23, 24, 74, 71, 42, 47, 82, 41, 46, 39, 82, 71, 74, 74, 68, 67, 73, 24, 94, 24, 24, 60, 72, 6, 5, 42, 45, 23, 73, 74, 79, 40, 32, 29, 42, 42, 39, 71, 90, 79, 22, 12, 74, 42, 74, 67, 22, 42, 69, 74, 90, 28, 73, 72, 90, 79, 23, 74, 45, 41, 45, 69, 24, 26, 42, 59, 23, 42, 68, 69, 50, 22, 47, 24, 74, 26, 90, 79, 94, 90, 24, 73, 42, 23, 71, 72, 78, 24, 73, 42, 73, 41, 74, 74, 45, 90, 82, 71, 90, 42, 42, 94, 23, 42, 42, 70, 69, 39, 94, 29, 45, 22, 21, 24, 24, 42, 78, 73, 5, 94, 23, 71, 23, 24, 76, 74, 64, 41, 82, 82, 26, 92, 41, 23, 42, 94, 40, 83, 83, 22, 68, 73, 30, 41, 69, 24, 24, 39, 73, 22, 22, 42, 74, 73, 24, 71, 73, 64, 64, 23, 69, 24, 39, 42, 94, 42, 77, 90, 74, 74, 42, 90, 23, 24, 64, 29, 44, 74, 82, 74, 23, 41, 23, 42, 6, 41, 74, 21, 22, 73, 39, 42, 94, 42, 73, 40, 42, 94, 23, 40, 69, 69, 67, 74, 59, 83, 74, 83, 21, 23, 28, 44, 23, 73, 69, 49, 73, 74, 46, 23, 63, 50, 73, 68, 42, 60, 82, 32, 62, 6, 42, 24, 74, 82, 66, 22, 69, 73, 23, 82, 22, 32, 42, 69, 90, 90, 45, 74, 74, 82, 48, 23, 43, 73, 69, 74, 25, 23, 40, 92, 31, 73, 73, 77, 42, 74, 23, 25, 74, 42, 74, 41, 73, 90, 23, 71, 73, 60, 74, 22, 44, 24, 70, 68, 28, 40, 46, 29, 73, 47, 67, 41, 79, 22, 46, 22, 23, 73, 23, 73, 74, 40, 24, 42, 94, 42, 67, 45, 45, 24, 74, 42, 40, 41, 25, 71, 73, 40, 42, 50, 74, 23, 22, 23, 22, 44, 39, 68, 59, 25, 45, 29, 67, 94, 23, 3, 23, 24, 22, 74, 21, 42, 42, 21, 42, 42, 67, 74, 39, 21, 40, 15, 67, 24, 42, 24, 23, 14, 45, 40, 23, 42, 46, 42, 94, 42, 94, 64, 22, 39, 78, 42, 60, 24, 76, 66, 74, 78, 41, 23, 24, 41, 74, 42, 69, 94, 23, 90, 3, 82, 69, 12, 82, 23, 22, 42, 92, 67, 23, 42, 24, 69, 62, 94, 90, 42, 42, 74, 5, 79, 21, 41, 41, 42, 32, 23, 74, 39, 5, 24, 39, 68, 74, 39, 67, 42, 22, 24, 40, 62, 94, 42, 24, 78, 82, 73, 69, 39, 41, 24, 94, 64, 42, 71, 24, 42, 66, 83, 5, 21, 24, 83, 74, 73, 68, 69, 40, 48, 70, 29, 74, 40, 42, 69, 73, 78, 94, 24, 62, 72, 42, 94, 23, 69, 21, 64, 26, 40, 42, 73, 42, 32, 62, 83, 67, 59, 82, 74, 40, 42, 23, 45, 28, 94, 72, 73, 74, 58, 45, 73, 42, 42, 90, 23, 82, 73, 23, 14, 78, 73, 41, 21, 67, 68, 46, 32, 71, 42, 24, 26, 68, 76, 94, 32, 74, 22, 25, 82, 78, 50, 60, 74, 41, 92, 45, 40, 94, 94, 42, 94, 26, 22, 90, 74, 90, 69, 24, 41, 90, 69, 71, 29, 24, 23, 94, 94, 23, 69, 21, 74, 74, 21, 41, 28, 42, 67, 76, 44, 21, 76, 46, 78, 22, 69, 68, 42, 5, 50, 47, 28, 39, 21, 94, 26, 25, 71, 42, 82, 79, 30, 94, 24, 71, 41, 45, 26, 22, 73, 22, 83, 71, 21, 23, 73, 67, 41, 67, 66, 22, 29, 74, 74, 22, 79, 69, 83, 42, 92, 63, 23, 69, 22, 74, 69, 22, 47, 23, 94, 64, 23, 45, 42, 71, 41, 5, 78, 22, 44, 74, 73, 61, 21, 64, 73, 73, 74, 67, 23, 24, 22, 59, 23, 94, 73, 74, 69, 69, 41, 25, 92, 24, 71, 78, 76, 22, 79, 74, 32, 74, 21, 74, 74, 24, 22, 82, 78, 24, 74, 69, 73, 71, 28, 59, 23, 42, 31, 5, 32, 74, 42, 90, 73, 22, 42, 39, 45, 24, 79, 50, 23, 23, 41, 24, 67, 73, 23, 74, 40, 63, 21, 23, 69, 24, 41, 74, 69, 71, 42, 44, 24, 5, 46, 73, 46, 79, 69, 40, 69, 69, 69, 78, 24, 26, 94, 23, 74, 21, 24, 90, 40, 23, 41, 32, 72, 22, 24, 39, 74, 23, 23, 71, 39, 80, 23, 73, 24, 24, 22, 28, 41, 24, 22, 24, 23, 29, 74, 64, 41, 73, 22, 51, 82, 74, 68, 21, 40, 73, 45, 73, 41, 72, 73, 72, 29, 28, 73, 83, 23, 22, 90, 5, 73, 71, 71, 82, 92, 23, 42, 74, 24, 22, 73, 83, 42, 39, 28, 71, 90, 23, 74, 25, 68, 60, 50, 24, 82, 23, 23, 23, 94, 42, 44, 42, 23, 24, 23, 23, 73, 72, 69, 42, 22, 74, 62, 32, 68, 21, 74, 90, 14, 63, 23, 67, 82, 23, 40, 23, 42, 41, 24, 24, 41, 61, 74, 74, 42, 24, 73, 42, 67, 23, 6, 32, 74, 26, 74, 73, 77, 67, 42, 69, 73, 73, 73, 42, 90, 71, 26, 74, 42, 41, 74, 74, 41, 71, 23, 44, 41, 72, 60, 74, 22, 82, 64, 6, 66, 64, 74, 71, 83, 21, 73, 44, 82, 14, 42, 22, 73, 73, 67, 82, 23, 22, 26, 67, 67, 76, 23, 21, 90, 3, 23, 72, 90, 24, 90, 23, 71, 42, 76, 23, 12, 60, 24, 22, 24, 74, 71, 29, 74, 79, 23, 90, 90, 71, 22, 22, 41, 23, 23, 73, 42, 6, 60, 22, 82, 92, 60, 24, 90, 66, 82, 25, 92, 69, 94, 73, 44, 23, 24, 41, 44, 24, 21, 39, 39, 39, 61, 22, 74, 92, 74, 24, 82, 74, 67, 76, 23, 6, 24, 21, 39, 12, 64, 42, 68, 23, 71, 22, 61, 22, 23, 74, 23, 24, 67, 6, 45, 73, 74, 29, 42, 23, 69, 61, 74, 42, 28, 60, 46, 68, 23, 41, 42, 90, 74, 22, 40, 41, 21, 23, 24, 42, 42, 21, 69, 71, 6, 67, 42, 42, 23, 24, 6, 79, 90, 24, 23, 77, 42, 42, 24, 94, 90, 24, 69, 64, 26, 22, 21, 83, 47, 42, 64, 5, 74, 24, 22, 71, 42, 23, 74, 41, 40, 78, 23, 39, 72, 42, 22, 24, 82, 6, 42, 94, 39, 74, 31, 41, 12, 94, 42, 29, 46, 42, 42, 73, 74, 40, 69, 42, 68, 61, 42, 42, 48, 83, 73, 79, 69, 73, 90, 22, 47, 5, 46, 22, 71, 42, 92, 40, 24, 83, 73, 72, 42, 68, 23, 22, 24, 94, 67, 60, 71, 73, 69, 42, 60, 32, 74, 82, 22, 23, 94, 32, 73, 79, 23, 42, 23, 73, 42, 46, 50, 22, 71, 39, 67, 41, 24, 92, 23, 60, 22, 67, 90, 42, 22, 73, 42, 92, 73, 45, 68, 47, 82, 23, 71, 68, 94, 73, 92, 23, 74, 82, 90, 45, 42, 68, 22, 90, 78, 23, 6, 82, 94, 71, 42, 90, 42, 67, 24, 94, 22, 41, 14, 23, 94, 23, 24, 70, 68, 79, 90, 23, 69, 82, 82, 69, 24, 83, 42, 23, 71, 82, 66, 66, 68, 62, 90, 12, 48, 22, 42, 42, 42, 73, 39, 44, 45, 94, 32, 74, 45, 60, 22, 67, 69, 45, 71, 46, 74, 23, 46, 42, 66, 69, 61, 24, 23, 69, 28, 94, 74, 42, 94, 74, 90, 21, 92, 74, 59, 29, 22, 90, 14, 71, 22, 22, 50, 41, 74, 24, 74, 23, 63, 42, 23, 22, 47, 28, 48, 22, 23, 22, 41, 41, 22, 74, 24, 60, 24, 21, 23, 74, 23, 45, 22, 23, 42, 42, 94, 79, 78, 24, 71, 46, 44, 94, 41, 23, 73, 22, 39, 69, 68, 41, 42, 73, 42, 42, 69, 42, 31, 42, 74, 73, 24, 42, 24, 14, 83, 73, 71, 79, 66, 21, 22, 24, 26, 24, 39, 90, 76, 24, 42, 28, 42, 83, 74, 24, 41, 40, 82, 31, 24, 29, 23, 66, 39, 90, 94, 12, 71, 22, 31, 23, 23, 78, 24, 68, 23, 40, 22, 74, 73, 22, 74, 40, 23, 42, 63, 62, 23, 32, 71, 74, 40, 42, 90, 42, 42, 23, 74, 41, 67, 42, 23, 71, 23, 41, 23, 78, 73, 21, 74, 42, 42, 22, 71, 39, 42, 6, 73, 79, 90, 44, 69, 23, 90, 79, 41, 68, 24, 22, 29, 71, 32, 5, 67, 62, 41, 23, 83, 32, 76, 74, 24, 40, 71, 46, 42, 68, 22, 42, 39, 67, 69, 74, 67, 82, 24, 48, 42, 78, 74, 74, 41, 23, 74, 6, 40, 74, 62, 42, 31, 77, 94, 94, 79, 23, 60, 23, 24, 76, 74, 24, 47, 74, 74, 23, 23, 21, 42, 42, 74, 41, 90, 12, 74, 73, 24, 46, 42, 74, 23, 22, 25, 94, 94, 83, 74, 22, 42, 44, 66, 69, 42, 24, 74, 40, 23, 12, 24, 94, 41, 94, 27, 72, 73, 76, 41, 76, 71, 74, 26, 24, 73, 21, 74, 68, 42, 29, 42, 24, 25, 41, 22, 22, 5, 83, 40, 23, 94, 24, 45, 22, 74, 77, 73, 22, 64, 72, 73, 73, 58, 46, 90, 23, 24, 83, 26, 90, 23, 21, 71, 90, 62, 41, 23, 24, 73, 67, 42, 90, 24, 69, 94, 40, 69, 22, 74, 78, 23, 90, 74, 41, 73, 42, 24, 32, 23, 3, 48, 23, 73, 62, 22, 41, 21, 22, 45, 42, 25, 23, 73, 49, 44, 83, 23, 41, 46, 24, 22, 39, 42, 23, 94, 23, 69, 78, 23, 42, 21, 22, 23, 42, 90, 72, 92, 94, 46, 46, 90, 68, 41, 50, 23, 68, 22, 23, 68, 24, 39, 74, 74, 42, 73, 64, 77, 94, 42, 23, 14, 73, 74, 51, 21, 42, 21, 92, 22, 74, 90, 73, 69, 23, 22, 58, 42, 26, 74, 42, 74, 78, 42, 22, 42, 79, 64, 74, 32, 64, 90, 62, 74, 42, 74, 41, 68, 73, 23, 22, 42, 64, 41, 6, 45, 45, 42, 45, 24, 73, 24, 31, 24, 74, 32, 74, 29, 22, 61, 83, 90, 42, 39, 42, 42, 41, 71, 22, 42, 42, 82, 82, 24, 45, 69, 67, 74, 42, 24, 26, 73, 92, 94, 94, 94, 94, 22, 94, 41, 42, 78, 44, 49, 42, 76, 22, 64, 23, 73, 39, 74, 77, 73, 82, 71, 73, 23, 72, 71, 41, 76, 82, 22, 74, 51, 23, 46, 24, 23, 22, 42, 40, 24, 41, 82, 42, 42, 42, 41, 24, 74, 41, 25, 74, 83, 76, 49, 82, 24, 73, 62, 42, 22, 24, 83, 42, 32, 42, 50, 23, 74, 73, 94, 31, 47, 94, 24, 82, 73, 23, 40, 42, 73, 42, 67, 68, 46, 67, 45, 22, 23, 67, 5, 71, 41, 23, 60, 24, 23, 79, 59, 60, 23, 82, 90, 69, 41, 45, 90, 68, 41, 71, 23, 41, 47, 42, 26, 73, 60, 29, 79, 42, 82, 67, 21, 22, 22, 74, 42, 26, 23, 42, 73, 74, 23, 42, 94, 73, 41, 92, 94, 22, 24, 40, 46, 60, 24, 94, 82, 5, 68, 74, 94, 23, 50, 41, 24, 32, 73, 6, 40, 42, 42, 80, 71, 73, 24, 69, 82, 39, 69, 24, 94, 26, 24, 78, 73, 23, 74, 32, 42, 23, 24, 41, 66, 24, 74, 14, 78, 42, 41, 74, 40, 23, 42, 68, 71, 21, 40, 58, 22, 60, 90, 22, 63, 28, 92, 92, 78, 14, 94, 41, 62, 74, 21, 74, 69, 44, 42, 21, 64, 22, 68, 68, 23, 45, 42, 40, 74, 22, 23, 78, 22, 74, 24, 74, 67, 41, 23, 21, 24, 74, 25, 24, 82, 73, 39, 24, 68, 94, 73, 42, 68, 24, 78, 42, 74, 73, 28, 74, 66, 42, 71, 82, 79, 22, 23, 23, 22, 6, 22, 94, 68, 82, 50, 24, 23, 78, 28, 23, 39, 22, 74, 92, 39, 49, 45, 22, 24, 42, 42, 42, 94, 67, 90, 45, 77, 42, 74, 42, 14, 40, 74, 41, 22, 73, 69, 29, 40, 39, 39, 78, 23, 24, 6, 42, 42, 74, 41, 23, 21, 26, 22, 24, 41, 23, 69, 80, 42, 42, 74, 62, 42, 42, 24, 42, 73, 69, 94, 22, 80, 78, 73, 23, 24, 42, 42, 94, 27, 63, 78, 45, 94, 22, 23, 24, 74, 39, 42, 90, 90, 39, 24, 26, 90, 44, 24, 42, 94, 74, 39, 74, 71, 90, 42, 66, 44, 32, 82, 94, 24, 23, 6, 21, 21, 42, 73, 23, 74, 92, 24, 47, 23, 66, 40, 90, 24, 5, 40, 74, 74, 41, 24, 47, 94, 24, 73, 21, 26, 82, 39, 90, 82, 23, 69, 90, 79, 77, 73, 44, 24, 94, 94, 92, 24, 92, 23, 83, 69, 23, 74, 77, 74, 94, 92, 31, 82, 79, 71, 22, 69, 64, 32, 69, 73, 73, 41, 71, 51, 74, 42, 41, 22, 90, 42, 42, 22, 83, 24, 40, 62, 73, 23, 72, 74, 92, 74, 74, 45, 73, 92, 24, 74, 22, 42, 23, 39, 23, 22, 23, 74, 46, 90, 74, 74, 32, 23, 67, 42, 82, 94, 73, 42, 49, 74, 42, 44, 83, 66, 42, 23, 74, 71, 71, 39, 39, 73, 23, 74, 23, 42, 90, 21, 73, 68, 24, 42, 90, 42, 22],
        'labels': ['Ir-Os-Pd', 'Dy-Ta-Mo', 'Ce-Hf-Nb', 'In-Ga-Si', 'Ag-Bi-Mo', 'Rb-Mg-Zr', 'Tb-Dy-Th', 'Nd-Tm-W', 'Pr-Th-U', 'Lu-Ti-V', 'Ce-Y-Zr', 'Pm-Er-V', 'Pu-Cr-W', 'Y-Pu-Ti', 'Li-Ho-Cr', 'Rb-V-Mo', 'Zn-Cd-Pb', 'Nd-Ho-Pu', 'Hf-Sc-Ti', 'Er-Sc-V', 'Th-Mo-W', 'Nb-Cu-Bi', 'Na-Cr-Fe', 'K-Mg-Cr', 'Ca-Tb-Lu', 'Ce-Er-Zr', 'Ca-Pu-Ti', 'Pr-Ti-Cr', 'Sr-Nd-Y', 'Yb-Er-Hf', 'V-Ag-Ru', 'Dy-Ho-Zr', 'Pr-Gd-Ho', 'K-Mg-Mo', 'Pr-Lu-Pu', 'Cu-Os-Ru', 'Lu-Pu-Zr', 'Yb-Gd-Pu', 'Ba-Ti-V', 'Cs-K-Rb', 'Tb-Nd-Ho', 'Re-Ir-Rh', 'La-Cr-Fe', 'Tb-Lu-Zr', 'Ag-Pd-Rh', 'Mn-Fe-Ag', 'La-Ce-Sc', 'Be-Al-In', 'Eu-Pu-Zr', 'Pr-Cr-W', 'Y-Sc-U', 'Cu-Ag-Ru', 'V-Fe-Ag', 'Ba-Yb-Gd', 'Co-Ni-Ru', 'Ce-Pr-Cr', 'Y-Ho-Cr', 'Tb-Y-V', 'Ce-Pu-Mo', 'Mg-Mn-Fe', 'Tb-Dy-Zr', 'Sm-Lu-Pu', 'La-Pr-W', 'Li-Sm-Ta', 'Nd-Sc-Ti', 'La-U-Nb', 'Ce-Zr-Nb', 'Tb-Y-Er', 'La-Tb-Lu', 'Cs-Nb-Mo', 'Li-Gd-Ti', 'Fe-Ru-Au', 'Cs-Ta-Mo', 'Sm-Dy-V', 'Ta-Nb-Mo', 'Nd-Lu-V', 'La-Ce-W', 'Na-Ti-Mo', 'Y-Lu-Cr', 'Sm-Gd-Ho', 'Tc-Pd-C', 'Na-Ca-Fe', 'Tb-Ce-Ho', 'Cs-Li-Zr', 'La-V-Mo', 'Pr-Dy-Th', 'Li-Ta-Nb', 'Tb-Er-Tm', 'Dy-Pu-Ta', 'La-Sc-Cr', 'Yb-Eu-Ta', 'Ce-Tm-Th', 'Pr-Pu-Cr', 'Y-V-Mo', 'La-Dy-Mo', 'La-Ti-Cr', 'Pr-Dy-W', 'Tb-Pr-Th', 'Sm-Tm-Cr', 'Ce-Nd-Y', 'K-Ti-Nb', 'La-Sc-Mo', 'Tb-Er-Zr', 'Li-Tb-Er', 'Nd-Dy-V', 'Li-Pm-Y', 'Yb-Er-Sc', 'La-Eu-Sc', 'Co-Re-Ag', 'Fe-Ag-Bi', 'Al-Cd-Sn', 'Hg-Ge-Bi', 'Fe-Co-Ag', 'La-Sc-Ta', 'Nd-Tm-Ti', 'Yb-Pr-Cr', 'U-Ti-W', 'Na-Ta-Cu', 'Na-Li-Be', 'Al-Bi-Pb', 'Gd-Dy-W', 'Tb-Gd-Lu', 'Er-Hf-Th', 'Th-Ta-Ti', 'K-Nb-V', 'Eu-Nb-Mo', 'Pr-Tm-Ti', 'Mn-Cu-Pb', 'Tb-Ta-Ti', 'Ba-La-Mn', 'Pr-Sm-U', 'Ba-La-Sc', 'Y-Th-U', 'Yb-Er-Ti', 'Tm-Lu-Pu', 'Lu-V-Cr', 'Co-Os-Ru', 'Gd-Th-Ta', 'Ce-Ti-Nb', 'Tb-Th-Zr', 'Sm-Cr-Mo', 'Sm-Tm-Mo', 'Cu-Mo-W', 'Gd-Ho-Cr', 'Nd-Er-Lu', 'Sm-Gd-Th', 'Cu-Mo-Au', 'La-Ti-Nb', 'Re-Ni-Ru', 'La-Nd-Er', 'Yb-Th-Mo', 'Mn-Fe-Co', 'Pr-U-Ta', 'Nd-Ti-Cr', 'Re-Tc-Pd', 'Ba-Sr-Ca', 'Cd-Fe-Bi', 'Tb-Y-Zr', 'K-Mg-Fe', 'Y-Ta-V', 'La-Er-V', 'Ag-Os-Rh', 'Tm-Th-Ta', 'Tb-Pr-Cr', 'Co-Hg-Ir', 'Li-Lu-Nb', 'Fe-Ru-Rh', 'Er-Zr-Sc', 'Ce-Sm-Tm', 'Ce-Zr-Ti', 'La-Yb-Y', 'La-V-Cr', 'Li-Cu-Ni', 'Sm-Y-Nb', 'Li-Nd-V', 'Pr-Mo-W', 'Gd-Pu-Mo', 'Zr-Sc-Ta', 'Eu-Pu-Nb', 'Na-Li-V', 'Fe-Os-Rh', 'Pm-Pr-Gd', 'V-Cu-Ag', 'Th-Cr-W', 'Sm-Y-V', 'Dy-Pu-V', 'Cs-Hf-Ti', 'Hf-Ta-Nb', 'Yb-Lu-Ti', 'Yb-Tm-Cr', 'Re-Os-Rh', 'La-Pu-W', 'Eu-Y-V', 'Cd-In-Ga', 'Ce-Ho-V', 'Pr-Er-Ti', 'Yb-Sc-Nb', 'Cd-Si-Bi', 'Pd-Pt-W', 'Co-Ir-Rh', 'Y-Th-W', 'Li-Gd-Mo', 'Li-Mg-Ti', 'Yb-Gd-Er', 'Ba-Pm-Y', 'Th-Nb-Mo', 'Ca-Ce-Tm', 'Rb-Na-Ta', 'Cr-Ni-W', 'Li-Pr-Mo', 'Ce-Pm-Sm', 'Er-Hf-Zr', 'La-Sm-Gd', 'Cd-Bi-B', 'Pr-Er-Th', 'Y-Mo-W', 'Pm-Th-Mo', 'Yb-Y-Ho', 'Y-Th-Ta', 'Ho-Pu-V', 'Nd-Sc-Cr', 'Al-Zn-Cd', 'Tb-Nd-Er', 'Sr-Y-V', 'Ce-Lu-Cr', 'Pm-Pr-Y', 'Re-Hg-Ru', 'Sc-U-Ta', 'Li-Pm-Ho', 'Ce-Gd-Er', 'Ce-Lu-Th', 'Nd-Gd-Pu', 'Tm-Th-Cr', 'Ce-Lu-Nb', 'Li-La-Pr', 'Yb-Pu-Cr', 'Li-Ce-Gd', 'Ce-Lu-Zr', 'Al-Zn-Bi', 'Ba-La-Pr', 'Yb-Gd-Th', 'Pm-Gd-Th', 'La-Gd-Er', 'Ag-Pd-Ru', 'Y-Lu-Nb', 'Ni-Ir-Rh', 'K-Hf-Ti', 'Tm-Mo-W', 'Yb-Tm-Ta', 'Tb-Th-Cr', 'Pr-Hf-U', 'Fe-Co-Pd', 'Tb-Er-Pu', 'Rb-Na-Hf', 'Li-Nd-Mo', 'Ce-Er-Hf', 'Ba-La-Ti', 'Ca-Pm-Pu', 'Pm-Nd-Mo', 'La-Tb-Pm', 'Ho-Lu-Pu', 'Ba-Mn-Fe', 'Cd-Ga-Sn', 'Cs-K-Al', 'Ho-Th-Cr', 'Ti-Cr-Mo', 'Ba-Nd-Ti', 'Sm-Gd-Ta', 'Ce-Gd-Zr', 'Tc-Ir-Pd', 'Tb-Ce-V', 'Gd-Th-Ti', 'Tb-Sm-W', 'Li-Fe-Ni', 'Ca-Tb-Pm', 'Al-Sn-Ge', 'Tl-Sn-Pb', 'Y-Sc-Nb', 'Yb-Dy-Er', 'Ni-Ir-Pt', 'Eu-Y-Th', 'Zr-Ta-Ti', 'Yb-Nd-Sc', 'Li-Tb-Ta', 'Er-Ti-Mo', 'Lu-Th-W', 'Nd-Gd-Ho', 'Nd-Ti-W', 'La-Pm-Pr', 'Hf-Mg-U', 'La-Lu-Cr', 'Cr-Mo-W', 'La-Eu-Nb', 'Rb-V-Cr', 'Sm-Ho-Mo', 'Mg-Mn-Cd', 'La-Sm-Y', 'La-Cr-Mo', 'Ba-Nd-Gd', 'Sm-Tm-V', 'Tl-Ag-Mo', 'Yb-Pu-Ti', 'Sc-Cr-Mo', 'Ni-Os-Ru', 'Yb-Gd-Ti', 'Re-Ni-Os', 'Yb-Cr-Mo', 'Sm-Er-Tm', 'Mn-Cu-Ag', 'Er-Th-Ta', 'Si-Ag-Bi', 'Ge-B-Pb', 'Sm-Dy-Y', 'Cs-Mg-Zr', 'Cu-Bi-Os', 'Cu-Ni-Ru', 'Yb-U-Nb', 'Ba-Pr-V', 'La-Pm-Pu', 'Mg-Ti-Nb', 'Lu-Pu-Mo', 'Pr-Sm-Ho', 'Li-Nd-Cr', 'Tb-Sm-Th', 'Nd-Er-W', 'Sm-Dy-Cr', 'Ca-Lu-Ti', 'Cr-Ag-Bi', 'Fe-Bi-Au', 'Tb-Ce-W', 'Eu-Y-Cr', 'Fe-Bi-Os', 'Sc-Ta-V', 'Pu-Ti-Nb', 'Yb-Y-V', 'Ti-V-Mo', 'Rb-Li-Ta', 'Dy-Ho-Lu', 'Tb-Yb-Dy', 'Cr-Fe-Cu', 'Rb-Ta-Mo', 'Lu-Cr-Mo', 'Ce-Pm-Pr', 'Ti-V-W', 'Dy-Mo-W', 'Mg-Nb-V', 'Pr-Er-Ta', 'Pr-Ta-Mo', 'Y-Ho-Er', 'Li-Gd-Y', 'Yb-Nd-U', 'Eu-Hf-Sc', 'Yb-Tm-W', 'Tc-Pd-Rh', 'Pu-Ta-Ti', 'Ba-Nd-V', 'Tb-Ce-Mo', 'Sc-U-V', 'Y-Lu-W', 'Nd-Th-Mo', 'Ce-Lu-Ta', 'Cs-Rb-Ti', 'Tb-V-Mo', 'La-Yb-Cr', 'Rb-Nb-Mo', 'Ce-Pr-Sm', 'Gd-Dy-Lu', 'Nd-Tm-V', 'Tb-Y-Pu', 'Fe-Ag-Ru', 'Tm-Lu-Ti', 'La-Tb-Ta', 'Th-U-Nb', 'Li-Pm-Tm', 'Sm-Dy-Er', 'Ca-Tb-Ti', 'Re-Tc-Ni', 'Fe-Rh-Au', 'Ni-Ag-Ir', 'Ta-Cu-Mo', 'K-V-Fe', 'Pr-Nd-Ti', 'Nd-Er-Cr', 'Y-U-Cr', 'Re-Sn-Bi', 'Co-Hg-Os', 'Ho-Pu-Mo', 'Gd-Pu-Ta', 'Pd-Ru-Au', 'Tb-Ti-Mo', 'Ga-Hg-Bi', 'Na-Zr-Nb', 'Ce-Er-Ta', 'La-Lu-V', 'Nd-Y-U', 'Mn-Fe-Au', 'La-Pm-Lu', 'Cs-Ta-Ti', 'Mn-Ag-Pb', 'Ga-Si-Ge', 'Pr-Dy-Cr', 'Nd-Dy-Th', 'Ag-Bi-Pb', 'La-Pr-Nd', 'Nb-Mo-W', 'Sm-Th-Cr', 'Tb-Ho-Mo', 'Pr-Gd-Pu', 'Li-Ce-Pr', 'Ho-Er-V', 'Yb-Lu-Cr', 'Ce-Pu-Nb', 'Gd-Y-Cr', 'Tl-Ga-Si', 'Er-Lu-W', 'La-Tb-Mo', 'Li-Tm-Lu', 'Nd-Sc-V', 'La-Yb-Ti', 'Tb-Gd-Er', 'Sm-Y-Er', 'Dy-Y-Pu', 'Pr-Cr-Mo', 'Yb-Th-Cr', 'Co-Pt-Rh', 'Cr-Cu-Bi', 'Pr-Ti-V', 'Li-Nd-Lu', 'Ni-Pd-C', 'La-Eu-Th', 'Re-Ni-Ag', 'Er-Lu-Mo', 'Cu-Ir-Ru', 'La-Ho-Sc', 'Ba-Sc-Mo', 'Ca-Y-Mo', 'Ni-Pt-W', 'Nd-Gd-Dy', 'Li-Y-Ho', 'Tb-Zr-Ta', 'Yb-Er-Th', 'La-Yb-Pr', 'Li-La-Ta', 'La-Sm-W', 'Cd-Si-Pb', 'Y-Ho-Mo', 'Ce-Er-V', 'Pm-Gd-Dy', 'La-Tm-Ti', 'Ag-Mo-Au', 'Gd-Ho-Ta', 'Nd-Lu-W', 'Cd-Bi-Pb', 'Pm-Tm-Mo', 'Gd-Ho-Mo', 'Pr-Tm-W', 'Y-Ho-Zr', 'Tb-Y-Tm', 'U-Ti-Nb', 'Cd-Ga-B', 'Tb-Yb-Ho', 'Pm-Lu-Cr', 'Th-Sc-W', 'Na-Mg-Fe', 'Nd-Y-Th', 'Tl-Zn-Ge', 'Pr-Y-Pu', 'Ce-Th-Zr', 'Nd-Dy-Ho', 'Ni-Rh-C', 'Tm-Ti-Cr', 'Yb-Hf-Nb', 'Fe-Ag-Ir', 'Ce-Pr-Er', 'Tl-Cu-Pb', 'Tb-Ho-Lu', 'Re-Ag-Os', 'Tb-Dy-Mo', 'Sr-Ti-V', 'La-Yb-Mo', 'Al-Sn-Bi', 'Mo-W-Au', 'Sr-Ti-Mo', 'Sm-U-Ta', 'Er-Ti-W', 'Yb-Th-Ti', 'Tb-Yb-Pr', 'Zn-B-Pb', 'Pr-Th-V', 'Dy-Ho-Pu', 'Sm-V-Cr', 'La-V-Fe', 'Yb-Gd-Dy', 'La-Ho-Ta', 'Gd-Dy-V', 'K-Rb-Zr', 'Ce-Sc-Cr', 'Li-La-Sm', 'Dy-Y-Mo', 'Nd-Y-Ta', 'Pr-Ho-Er', 'Sm-Nb-W', 'Ca-Lu-Mo', 'Na-Ta-Ti', 'Nd-Ho-Tm', 'Pm-Ho-Cr', 'Cs-Ti-V', 'Mn-Tl-Ag', 'Li-Er-Hf', 'Li-Gd-Tm', 'Rb-Mg-Mo', 'Li-Ta-Cu', 'La-Pu-Nb', 'Nd-Er-Pu', 'Er-Th-Cr', 'Li-Pu-Mo', 'Cr-Hg-Mo', 'Li-Mg-Fe', 'Dy-Ho-W', 'Co-Cu-Re', 'Y-Th-Zr', 'Nd-Lu-Mo', 'Ga-Ge-B', 'La-Pr-Ti', 'Li-Pm-Cr', 'Ta-Ti-V', 'Dy-Tm-Pu', 'Ca-Tm-Mo', 'Ce-Y-U', 'Ce-Th-Ti', 'Li-La-Nb', 'Li-Lu-V', 'Cr-W-Au', 'Ca-Nd-Sc', 'V-Ag-Mo', 'Ca-Ce-Sc', 'Re-Pd-Rh', 'Lu-Nb-V', 'Tb-Lu-Ti', 'K-Mg-Nb', 'La-Nd-Th', 'Yb-Dy-V', 'La-Y-Er', 'Al-Zn-Si', 'Ni-Pb-W', 'La-Sc-V', 'K-Li-Fe', 'Li-Ce-Nb', 'Y-Er-Lu', 'Bi-P-Au', 'Li-Ho-V', 'La-Cr-W', 'Ca-La-Lu', 'Tb-Yb-Y', 'La-Yb-Nd', 'Ce-Sm-Pu', 'Ru-Pt-Au', 'Pu-Zr-Nb', 'V-Hg-Mo', 'Ca-Y-V', 'Be-Al-Si', 'Ba-V-Mo', 'Gd-Er-Pu', 'Li-Sm-Y', 'K-Hf-Mg', 'Cu-Re-Rh', 'Th-V-Cr', 'V-Hg-Ru', 'Be-Zn-Sn', 'Nd-Cr-W', 'Y-Pu-Cr', 'La-Y-W', 'Sr-Ca-Ti', 'Ce-Hf-Sc', 'Al-Tl-Pb', 'Li-Gd-Zr', 'Li-Ti-V', 'Rb-Mg-Ti', 'In-Si-Ge', 'Pu-Ti-Mo', 'Th-Ta-V', 'Al-Tl-Ga', 'Pm-Sm-Pu', 'La-Tb-Er', 'La-Gd-Ti', 'Ni-Ru-Rh', 'Pm-Er-Pu', 'Tb-Pr-Lu', 'Nd-Ta-Mo', 'Nd-Tm-Cr', 'Hf-Mg-Ti', 'Ce-Nb-W', 'Y-Th-Sc', 'Tb-Pr-V', 'Dy-Er-Mo', 'Li-Pu-Nb', 'Eu-Sc-V', 'Tm-Th-W', 'Co-Os-Pt', 'Ga-Bi-Pb', 'Pu-Mo-W', 'Pm-Pr-Sm', 'Y-Tm-Th', 'La-Eu-V', 'La-Tm-V', 'Er-Lu-Cr', 'La-Dy-Er', 'Er-V-W', 'Zn-Ge-Bi', 'La-Tm-Th', 'Tb-Dy-Lu', 'Tm-Lu-V', 'Mn-Tl-V', 'Ho-V-Cr', 'Li-Nb-V', 'Mn-Ni-Pb', 'Pr-Y-V', 'Li-Pr-Lu', 'Nd-Sm-Pu', 'Er-Tm-Ta', 'Zn-Cd-Sn', 'V-Cr-Bi', 'La-Ho-Th', 'Cu-Ni-Rh', 'Re-Ni-Rh', 'Ca-Ce-Mn', 'Ni-Os-Rh', 'Ca-Yb-Lu', 'Cs-Mg-Nb', 'Na-Li-Cr', 'Na-Sr-Ca', 'Nd-Th-Ti', 'Ca-Eu-Sc', 'Ce-Hf-Zr', 'Th-U-Ti', 'Li-Tb-Tm', 'Tb-Gd-Mo', 'Ba-Yb-Y', 'Rb-Ta-Nb', 'Ba-Ca-Mn', 'Ho-Er-Cr', 'Li-Ce-Ta', 'Eu-U-Ta', 'Li-Pu-V', 'Co-Ir-Pt', 'Gd-Sc-Ti', 'Yb-Pr-Tm', 'Cr-Cd-Pb', 'Tb-Lu-Pu', 'Ce-Pr-Gd', 'Yb-Eu-Th', 'Yb-Nd-Pu', 'Cr-Fe-Pd', 'Cu-Ni-Pd', 'Tb-Pr-Pu', 'Dy-Y-Er', 'Dy-Y-Lu', 'Ho-Er-Th', 'Ag-Pd-C', 'Y-Er-Nb', 'Pu-V-Mo', 'Fe-Cu-Bi', 'Ho-Er-Lu', 'Li-Y-Hf', 'Sm-U-Nb', 'Ba-Eu-Y', 'Pr-Er-Cr', 'La-Ce-Sm', 'Pr-Sm-Ta', 'Tm-V-Mo', 'Gd-Ho-W', 'Y-Ho-Lu', 'Ho-Ta-W', 'Fe-Ag-Pd', 'Cr-Bi-Mo', 'Tb-Sm-Dy', 'Nd-Ti-V', 'Ca-Yb-Ti', 'Y-Sc-Cr', 'Li-Ti-Mo', 'Ca-Yb-Mo', 'Nd-Dy-Pu', 'Pr-Er-V', 'Th-Sc-Ta', 'Ag-Pd-Au', 'Ce-Y-Ta', 'Er-Ti-Cr', 'Li-Tb-Lu', 'Ce-Pm-Lu', 'Pu-Nb-W', 'Mn-Cd-Pb', 'La-Gd-Ho', 'Ce-Pr-Ta', 'Yb-Ti-W', 'Ca-Sc-V', 'La-Y-Ti', 'Tb-Sm-Ta', 'Ca-Tb-Ce', 'Li-Ce-V', 'Gd-Dy-Ta', 'Zr-Sc-Nb', 'Tc-Ni-Ir', 'La-Dy-Ta', 'Fe-Ni-Ag', 'Sm-Ho-Th', 'La-Pr-U', 'Yb-Eu-Mo', 'Li-V-Mo', 'Eu-Cr-Mo', 'Ho-Th-V', 'La-Pr-Lu', 'Pm-Er-Cr', 'Hg-B-Sb', 'Li-La-Er', 'Ba-Sr-Ti', 'Tb-Sc-Cr', 'Nd-Th-U', 'Na-Be-Al', 'Cu-Pd-Ru', 'Fe-Ni-Os', 'Np-Cr-Mo', 'Gd-Lu-Th', 'Cr-Bi-Pb', 'La-Gd-Cr', 'Tl-As-Pb', 'Cd-B-Pb', 'Li-La-Mo', 'La-Lu-Ta', 'Tb-Pu-Ti', 'Gd-Tm-Th', 'Yb-V-W', 'La-Pm-Sm', 'Gd-Lu-Zr', 'K-Li-Zr', 'Tb-Pr-Dy', 'Nd-Dy-Mo', 'Pm-Sm-Mo', 'Ca-V-Fe', 'Pm-Ho-Mo', 'Li-Pr-Nd', 'Pm-Dy-Pu', 'Er-Tm-Mo', 'Li-Tb-Y', 'Sm-Y-Lu', 'La-Pu-Ta', 'Zn-Ge-Pb', 'Ni-Ag-Rh', 'Gd-Cr-W', 'Li-Nd-Ta', 'Eu-Ta-Nb', 'Ba-Gd-Mo', 'La-Y-Nb', 'Li-Sm-V', 'Lu-Th-Mo', 'Dy-Lu-Ti', 'Cd-Sn-Pb', 'Co-Hg-Pb', 'Ir-Pd-Ru', 'Re-Ag-Ru', 'Mn-Co-Cu', 'V-Pd-W', 'Hf-Th-Zr', 'Gd-V-W', 'Ce-Pu-Zr', 'Ca-Ce-Pm', 'Pu-Ta-V', 'Nd-Pu-Ti', 'Rb-Hf-Mg', 'Pr-Sm-Y', 'Er-Lu-Th', 'Mg-U-Nb', 'Cr-Ag-Au', 'Sr-Nd-Sc', 'Eu-Pu-W', 'Ag-Ir-Os', 'Ca-La-Tm', 'La-Dy-Pu', 'Er-Nb-W', 'Ni-Ir-Os', 'La-Tb-Sm', 'Th-Ti-Mo', 'La-Eu-U', 'Li-La-Y', 'Ca-Tm-Lu', 'Cu-Ir-Pd', 'Ba-Yb-Sc', 'Co-Re-Ir', 'Pr-Th-Cr', 'Ca-Tb-V', 'Nd-Ta-Ti', 'Tb-Sc-V', 'Tl-Zn-Si', 'U-Ti-V', 'Cs-Ta-V', 'Ba-Sr-V', 'Sc-Ti-V', 'Tm-Pu-Mo', 'Ce-Nd-Mo', 'Th-Ta-W', 'Be-Ge-Bi', 'Na-Ti-Cr', 'Nd-Ho-Ta', 'Nd-Lu-Cr', 'Ce-Lu-Mo', 'Li-Pm-Gd', 'Gd-Dy-Mo', 'Ce-Eu-Mo', 'Gd-Ta-V', 'Cu-Pd-Au', 'Ce-Gd-W', 'Be-Sn-Bi', 'Tb-Lu-Th', 'Er-Hf-Sc', 'Ca-Pu-V', 'Tb-Th-Sc', 'Tb-Pr-Mo', 'Y-Lu-Ti', 'Pt-W-Au', 'Rb-Na-Nb', 'Sr-Nd-V', 'Li-Cr-Mo', 'Sr-Nd-Ti', 'Zn-Sn-Bi', 'Yb-Pr-Nd', 'Tb-Ho-Th', 'Mn-Ni-Ag', 'Er-Tm-Cr', 'Pr-Tm-V', 'K-Mg-V', 'Gd-Pu-V', 'Tb-Pr-Tm', 'Gd-Y-Th', 'Ce-Ho-Lu', 'Tl-Cu-B', 'Sm-Ho-Ta', 'Yb-Sc-Ti', 'Tb-Pm-Mo', 'Pm-Pr-Nd', 'Si-Sn-Bi', 'Tb-Yb-Sc', 'La-Er-W', 'Ba-Sm-Gd', 'Be-Zn-Ga', 'V-Mo-W', 'Nd-Y-V', 'Nd-Ho-Mo', 'Be-Ga-Bi', 'V-Ag-Bi', 'Tb-Sm-Mo', 'Gd-Tm-V', 'Pr-Gd-Dy', 'Hg-Bi-Mo', 'Ba-Y-Ti', 'Eu-Nb-V', 'Ga-Si-Bi', 'Eu-Y-U', 'Gd-Er-Cr', 'Sr-Sc-Mo', 'La-Lu-Th', 'Nd-Gd-Er', 'Ta-Nb-V', 'Eu-Hf-Zr', 'Tb-Pm-Gd', 'Ce-Sc-W', 'Y-Ho-Sc', 'Gd-Ta-W', 'Tl-Si-Ge', 'K-Rb-Cr', 'Pr-V-Cr', 'Er-V-Cr', 'Ca-La-Y', 'Nd-Tm-Lu', 'Ce-Nd-W', 'Ce-Tm-Cr', 'Lu-Zr-Ta', 'Be-Ga-Ge', 'Dy-Th-W', 'Ca-Y-Lu', 'Y-Zr-Sc', 'Os-Pd-Ru', 'Ce-Ho-Cr', 'Hf-Sc-Nb', 'V-Pd-Ru', 'La-Eu-W', 'Yb-Pr-Dy', 'Tb-Th-Ta', 'Eu-Th-Nb', 'Eu-Ta-Mo', 'Cs-Pr-Hf', 'La-Ce-Gd', 'Gd-Th-Mo', 'Gd-Pu-W', 'Gd-Ta-Ti', 'Tb-Y-W', 'La-Nd-Cr', 'Al-Ga-Sn', 'Ce-Hf-Th', 'Ce-Ti-W', 'Ag-Bi-Os', 'Re-Ru-Rh', 'Tb-Sm-Er', 'Be-Zn-Si', 'Y-Er-Ta', 'Cd-Fe-Pb', 'Ba-V-Fe', 'Ce-Eu-U', 'Mn-Cu-Au', 'Pm-Pr-Er', 'Nb-V-Cu', 'Al-Zn-In', 'Yb-Lu-Mo', 'Al-Cd-In', 'Cd-Ge-B', 'Al-Cd-Si', 'Rb-Zr-Ti', 'Yb-Th-Sc', 'Cu-Pd-W', 'Ca-La-Tb', 'Sr-V-Mo', 'Hf-Th-Ti', 'Cs-Rb-Mo', 'Nd-Sm-Ta', 'Nd-Er-Mo', 'Yb-Nd-Tm', 'Zn-Ga-Sn', 'Cu-Ag-Pb', 'Ni-Ag-Pb', 'Tb-Zr-Sc', 'Ir-Pt-C', 'La-Sc-U', 'Yb-Nd-Lu', 'Ce-Eu-Pu', 'Rb-Ta-Ti', 'Yb-Dy-Y', 'Li-Nd-Er', 'Sr-Ca-V', 'Li-Zr-Ti', 'Sm-Th-V', 'Cr-Hg-Bi', 'Eu-V-Mo', 'Tb-Ce-Ta', 'Li-Pu-Cr', 'Li-Cr-Fe', 'Cs-K-Ta', 'Re-Hg-Sb', 'Pr-Y-Th', 'Sr-Sc-V', 'Yb-Y-Sc', 'Lu-Th-Nb', 'Dy-Tm-V', 'Pr-Sm-Gd', 'Y-Lu-Mo', 'Cs-Rb-Zr', 'Y-Er-V', 'Dy-Zr-Ti', 'Pm-Lu-Mo', 'Rb-Ta-V', 'Y-Ta-W', 'Li-Tb-Ho', 'Li-Y-Tm', 'Tl-Ag-Pb', 'Yb-Er-Lu', 'Ho-Tm-W', 'Sm-Gd-Mo', 'Ag-Os-Pd', 'Nb-Cu-W', 'Cu-Re-Ru', 'Hg-Bi-B', 'Dy-Y-Cr', 'Pr-Hf-Ta', 'Cu-Os-Pt', 'Er-Hf-Nb', 'Cs-Ti-Mo', 'Y-Sc-Mo', 'Ti-Nb-Mo', 'Ca-Tb-Sc', 'Co-Ni-Os', 'Gd-Ho-Sc', 'Ce-Nd-Cr', 'Tb-Pm-Tm', 'Eu-U-W', 'Pu-V-W', 'Al-Zn-Ge', 'Cu-Tc-Ir', 'Ba-Pr-Mo', 'Fe-Ag-Au', 'La-Pr-Tm', 'Tb-Tm-Pu', 'Yb-Ho-Pu', 'Li-Ti-Nb', 'Ce-Nb-V', 'Dy-Pu-Ti', 'Yb-Pr-Ti', 'Ca-Ti-Mo', 'Na-Hf-Zr', 'Ce-Th-Mo', 'Ho-Sc-Cr', 'Ba-La-Gd', 'Re-Ag-Pt', 'Pr-Y-Lu', 'Tb-Tm-Lu', 'Dy-Ta-V', 'Ho-Pu-Ta', 'Co-Cu-Ir', 'Nd-Sc-Ta', 'La-Sm-U', 'Al-Tl-In', 'Nb-V-Mo', 'Yb-Y-W', 'Tb-Pu-Cr', 'Ag-Ir-Pt', 'Ti-V-Cr', 'Ce-U-Ti', 'Ce-Th-W', 'Li-Er-Ta', 'Fe-Co-Pb', 'Pd-Rh-C', 'Na-Zr-Ta', 'Fe-Pd-C', 'Ho-Cr-W', 'Ta-Nb-Cu', 'La-Y-Tm', 'Li-Pu-Ti', 'Ba-Ca-La', 'Y-Tm-Lu', 'Sn-Ge-B', 'Sm-Tm-Lu', 'Nd-Gd-Ta', 'Yb-Y-Nb', 'Dy-Y-W', 'Dy-Th-Ta', 'Ce-Nd-Sc', 'Eu-Th-Mo', 'Yb-Ho-W', 'La-Nd-Lu', 'Li-Ho-Pu', 'Yb-Eu-Sc', 'Ba-Sr-Nd', 'Ce-Eu-Sc', 'Ce-Ta-Nb', 'Tb-Dy-W', 'Y-Sc-W', 'Gd-Tm-Lu', 'Th-Cr-Mo', 'Pr-Nd-Lu', 'Tb-Gd-Ta', 'Ta-V-Bi', 'La-Gd-Tm', 'La-Ta-Nb', 'La-Th-Mo', 'Ce-Gd-Ho', 'Nd-Tm-Mo', 'Tc-Ni-Pd', 'Lu-Ti-W', 'Zn-Cd-Si', 'Tb-Y-Ho', 'Nb-Tl-Mo', 'Mn-V-Ag', 'V-Cr-Ag', 'Pm-Pr-Dy', 'Gd-Pu-Cr', 'Er-Ta-W', 'Yb-Pr-Th', 'Ag-Ru-Rh', 'V-Cu-Ru', 'Ce-Hf-Ta', 'Ba-La-Y', 'Ba-Sr-Y', 'Rb-Hf-Ta', 'Li-Mg-Mn', 'Ba-Eu-V', 'Ni-Os-Pd', 'Eu-U-V', 'Mg-Cd-Mo', 'Tb-Ce-Zr', 'Nd-Gd-W', 'Pr-Ta-Ti', 'Zn-Ga-Pb', 'Sm-Y-Pu', 'Er-Tm-W', 'Ta-Tl-In', 'Gd-Lu-V', 'Er-Ta-Ti', 'Pm-Gd-Mo', 'Rb-Na-Cr', 'Tm-Ta-Mo', 'Pm-Y-Pu', 'Ce-Er-Lu', 'Nd-Gd-Mo', 'Y-Ho-Tm', 'Tb-Y-Ta', 'Ba-Pm-Pr', 'Yb-Nd-Ho', 'Yb-Dy-Ta', 'Eu-Y-Nb', 'Yb-Pu-Mo', 'Lu-Pu-W', 'Li-Tb-Mo', 'Ni-Pd-Rh', 'Cu-Ag-Pt', 'Li-Er-Nb', 'Fe-Ni-Ir', 'Yb-Lu-Nb', 'Er-Pu-Zr', 'Pr-Hf-Th', 'Nd-Gd-Lu', 'Ce-U-V', 'Tb-Pm-Sm', 'Zn-Cd-Ge', 'Ca-Sc-Ti', 'Li-Ta-Ti', 'Eu-Th-Ta', 'Tb-Sm-Pu', 'Tb-Nd-Th', 'Ce-Pm-Pu', 'Pm-Tm-V', 'Cs-Pr-Ta', 'Ba-Pr-Ti', 'Ba-La-V', 'Re-Bi-Os', 'Li-Nd-Y', 'La-Tb-Yb', 'Sm-Lu-Cr', 'Li-Ho-Er', 'La-Nd-Ti', 'Nd-U-Ti', 'Tm-Th-V', 'V-Cr-Mo', 'Eu-Hf-Th', 'La-Ce-Nb', 'Y-Cr-W', 'Pm-Nd-Gd', 'Ca-Eu-Pu', 'Sm-Pu-Nb', 'Li-Tm-Mo', 'Pr-Dy-Y', 'Yb-Ti-Nb', 'Pm-Dy-Er', 'K-Zr-Ti', 'Yb-Mo-W', 'Sm-Y-Th', 'Ba-Gd-Y', 'Ta-Bi-Mo', 'Yb-Dy-Tm', 'Tb-Dy-Er', 'Na-Hf-Mg', 'La-Nd-Ta', 'Eu-Ta-V', 'La-Yb-Gd', 'Li-Gd-Er', 'Li-Nd-Gd', 'Yb-Sc-V', 'Th-Ti-V', 'Co-Ni-Pd', 'La-Sm-Er', 'Si-Ge-Bi', 'Yb-Ho-Sc', 'Al-Zn-Pb', 'Tl-In-Ge', 'Co-Cu-Pd', 'Ru-Pt-Rh', 'La-Er-Mo', 'Er-Tm-Ti', 'Na-Sr-Ti', 'Ta-V-W', 'Cu-Bi-B', 'La-Yb-Sc', 'Eu-Sc-U', 'La-Sm-Mo', 'Pm-Y-V', 'La-Sm-Cr', 'Er-Tm-Th', 'Yb-Er-Pu', 'Na-Li-Hf', 'Mn-V-Fe', 'Dy-Lu-V', 'Ni-Pt-Rh', 'Sm-Ho-Lu', 'Li-Ce-Pu', 'Sm-Y-Ta', 'Eu-Y-Mo', 'Sm-Dy-Pu', 'Li-Y-Lu', 'Ta-Nb-Tl', 'Ca-Yb-Nd', 'La-Ta-Mo', 'Na-Li-Fe', 'Gd-Y-Ta', 'La-Nb-Mo', 'Li-Y-Ti', 'Ce-Nd-Pu', 'Th-Nb-W', 'Ce-Pm-Tm', 'Ce-Tm-W', 'Li-Sm-Cr', 'Cr-Fe-Bi', 'Tb-Ho-Er', 'Ba-Pr-Nd', 'Tb-Pm-V', 'Sm-Mo-W', 'Li-Hf-Mg', 'Ni-Ag-Pt', 'Yb-Dy-Cr', 'Pm-Gd-Cr', 'Li-Ho-Lu', 'Ce-Pm-V', 'Ce-Nd-U', 'Na-Ta-Nb', 'Er-Th-V', 'Al-Hg-Pb', 'Ba-Sr-Sc', 'Mn-Co-Ag', 'Li-La-Tb', 'Y-Th-V', 'Sm-Ho-Pu', 'Cu-W-Au', 'Dy-Tm-Lu', 'Tm-Th-Ti', 'Pu-Zr-Ta', 'Tb-Ho-Tm', 'Pd-Ru-Pt', 'Ho-Sc-Ta', 'Mn-Ag-Au', 'Li-Zr-Ta', 'Cd-Ga-Pb', 'Yb-Ho-Er', 'La-Y-V', 'Cs-Pr-V', 'Ce-Y-Mo', 'Hf-Zr-Ti', 'Eu-Zr-Sc', 'Cd-Ga-Ge', 'Nd-Dy-Ta', 'Mg-Cr-Mo', 'Pr-Lu-Cr', 'Lu-Th-Zr', 'Hg-Ir-Ru', 'Y-Zr-Ti', 'Ca-La-Ti', 'La-Ti-V', 'Er-Th-Ti', 'Tb-Yb-Ta', 'Cr-Mo-Au', 'Ce-Er-Pu', 'Na-Sr-Mo', 'Li-Er-Lu', 'Ba-Pm-Mo', 'Yb-Hf-Ti', 'Yb-Gd-Lu', 'Y-Cr-Mo', 'Tb-Pu-V', 'Pm-V-Cr', 'Al-Si-Bi', 'Er-Th-Sc', 'Rb-Ti-Mo', 'Eu-Nb-W', 'K-Rb-Nb', 'Nd-Y-Ti', 'Yb-Th-V', 'Ce-U-Cr', 'Nd-V-W', 'La-Yb-Lu', 'Yb-V-Mo', 'Cu-Ni-Ag', 'Fe-Bi-Pb', 'Na-Li-Nb', 'Re-Ag-Pd', 'Nd-Sm-Y', 'Tl-Ni-Pb', 'La-Gd-Lu', 'Er-Cr-W', 'La-Nb-W', 'Nd-Sm-Er', 'Tb-Sm-Ho', 'Cs-Rb-Ta', 'Yb-V-Cr', 'Li-Pr-Pu', 'Ho-Lu-Cr', 'Ce-Pu-Cr', 'Tb-Yb-Nd', 'Cs-K-Hf', 'Pt-Rh-C', 'Ge-Bi-B', 'Cd-Bi-Mo', 'Tc-Ir-Rh', 'Pr-Sm-V', 'Tb-Ho-Ta', 'Tm-Ti-W', 'Fe-Cu-Au', 'Gd-Dy-Zr', 'Al-Hg-Ge', 'Li-Nb-Cu', 'Ho-V-Mo', 'Yb-Nd-Mo', 'Pm-Gd-Y', 'Yb-Ho-Lu', 'La-Pr-Th', 'Fe-Pd-Au', 'Ce-Er-Ti', 'Cs-Hf-Mg', 'Yb-Th-W', 'Ca-Tb-Mo', 'Yb-Dy-W', 'Gd-Y-Ho', 'K-Mg-Ti', 'K-Li-Mo', 'Sm-Y-Tm', 'Ce-Pr-W', 'Yb-Nd-Th', 'Mn-Fe-Ni', 'Y-Tm-Ta', 'Cs-Li-Hf', 'Pr-Sm-Th', 'Si-Ge-Au', 'Pr-Ho-V', 'Pr-Lu-W', 'Ir-Pd-Rh', 'Er-Zr-Nb', 'Fe-Cu-Rh', 'Dy-Y-Tm', 'La-Pm-Cr', 'Mg-V-Fe', 'Y-Nb-Mo', 'Ba-Yb-Pr', 'Yb-Pu-V', 'Dy-Cr-Mo', 'Pm-Nd-Er', 'Ho-Er-Tm', 'Zn-Si-Sn', 'Lu-Zr-Ti', 'U-Cr-Ag', 'Ce-Ti-Cr', 'Tb-Pr-W', 'Ba-Ca-Fe', 'Sm-Lu-Th', 'Ag-Ge-Au', 'La-Ho-Pu', 'Yb-Y-Th', 'La-Tm-Cr', 'Dy-Tm-Ta', 'Ce-V-Mo', 'Yb-Lu-V', 'Li-Ce-Lu', 'Cs-Rb-Hf', 'Re-Os-Pt', 'Gd-Sc-Cr', 'Gd-Tm-Ta', 'Gd-Cr-Mo', 'Hf-U-Ta', 'Eu-U-Nb', 'Th-U-W', 'Sc-Ti-W', 'Fe-Ni-Rh', 'Pm-Dy-Th', 'Zn-Si-Pb', 'Yb-Dy-Lu', 'Yb-Hf-Th', 'Tb-Nd-Mo', 'Er-Pu-Mo', 'Yb-Tm-Pu', 'Gd-Y-V', 'Ba-Ti-Mo', 'Sr-Nd-Mo', 'Ba-La-Yb', 'Nd-Sm-Tm', 'Tb-Dy-Y', 'Gd-Tm-Pu', 'Na-V-Cu', 'Os-Pd-Rh', 'Pr-U-Ti', 'Ce-Y-Sc', 'Tb-Dy-Cr', 'La-Eu-Cr', 'Ho-Sc-Mo', 'Cu-Re-Pt', 'La-Eu-Ta', 'Tl-Ga-B', 'Tb-Ho-Pu', 'Ce-Th-V', 'La-Sm-Lu', 'La-Gd-V', 'Th-U-Cr', 'Fe-Ir-Os', 'Ti-Cr-W', 'Ba-Pm-Gd', 'Er-Ta-Nb', 'Sn-Ge-Pb', 'Cd-Ge-Pb', 'Li-La-Fe', 'Hf-Th-U', 'Sc-U-Nb', 'Yb-Pr-V', 'Ca-V-Mo', 'Nd-Y-Pu', 'Tb-Pu-Zr', 'Zn-Cd-Bi', 'Ag-Ge-Bi', 'Yb-Dy-Ti', 'Sm-Ho-Er', 'Nd-U-Ta', 'Al-Tl-Zn', 'Sm-Ta-Nb', 'Pr-Y-Tm', 'La-U-Cr', 'Tb-Yb-Cr', 'Yb-Pr-Y', 'Gd-Zr-Ta', 'Zr-Sc-Ti', 'Sr-Sc-Ti', 'Ba-Ca-Mo', 'Pr-Ti-W', 'Hf-Sc-Ta', 'Ho-Pu-Cr', 'Ho-Tm-Lu', 'Cs-Zr-Ta', 'Ce-Pm-Gd', 'Ce-Sm-Gd', 'Tb-Lu-V', 'Li-Ho-Tm', 'Ce-Eu-Cr', 'Ce-Pr-Y', 'Cs-Cr-Mo', 'Ca-Nd-Pu', 'Li-Pm-Mo', 'Cu-Ag-Ir', 'La-Dy-Th', 'Ti-Mo-W', 'Pr-U-W', 'Gd-Ta-Mo', 'Dy-Tm-Th', 'Gd-Sc-V', 'Pr-Nd-Cr', 'La-Pr-Gd', 'Fe-Co-Cu', 'Fe-Ir-Ru', 'Tb-Tm-W', 'Ga-Hg-Pb', 'Ce-Y-W', 'La-Yb-V', 'Cs-Zr-Nb', 'Er-Ta-V', 'Li-Nb-Mo', 'Fe-Ni-C', 'K-Li-Nb', 'Yb-Nd-W', 'Nd-Er-Sc', 'Y-Sc-Ti', 'Sm-Dy-Ta', 'Tb-Pr-Y', 'Pr-Nd-Mo', 'La-Gd-Pu', 'Pr-Sm-Mo', 'Dy-Ho-Ta', 'K-Mg-Zr', 'Cs-Li-Mo', 'La-Yb-Pu', 'Na-Ca-V', 'Cs-K-Zr', 'Pm-Gd-Tm', 'Li-Er-Tm', 'Sm-Dy-Ho', 'Ce-Eu-W', 'Tb-Ce-Pr', 'Sn-Ge-Bi', 'Gd-Lu-W', 'V-Fe-Bi', 'Gd-Th-Sc', 'Rb-Nb-V', 'Mn-Tl-Ni', 'Re-Pd-Ru', 'Gd-Er-V', 'Sm-Lu-Ta', 'Li-Ce-Tm', 'Tl-Zn-In', 'Ce-Sc-Ta', 'Nd-Sc-W', 'Co-Ag-Pd', 'Mg-U-V', 'La-Ce-Eu', 'Cd-Si-Sn', 'Li-Pr-Ta', 'Tb-Pm-Er', 'Li-Lu-Mo', 'La-Pm-Nd', 'Al-Si-Pb', 'Be-Si-Ge', 'La-Nd-Sm', 'Ir-Rh-C', 'Pu-Ta-Mo', 'Ho-Tm-Cr', 'Pr-Ta-W', 'Si-Sb-Pb', 'Sm-Gd-Dy', 'Li-Hf-Ti', 'Ce-Gd-Tm', 'La-Gd-Ta', 'La-Nd-V', 'Tl-Ga-Pb', 'Cs-Mg-Ti', 'Tl-Cd-Ge', 'Nd-Ti-Mo', 'Ce-Ho-Tm', 'Gd-Er-Th', 'Ce-Pm-Th', 'Co-Ag-Rh', 'Y-V-W', 'Yb-Eu-W', 'Ga-Sn-Pb', 'Mg-Cr-Cd', 'Ta-Tl-V', 'Cu-Re-Tc', 'Yb-Lu-Ta', 'Pr-Sm-Tm', 'U-Ta-W', 'Ca-Yb-Mn', 'Li-Pm-V', 'Li-Mg-Zr', 'Nd-Sm-U', 'Tl-Zn-Ga', 'Ce-Sm-Ta', 'Pr-Pu-Ta', 'Re-Tc-Ir', 'La-Y-Mo', 'Yb-Pr-W', 'La-Ho-V', 'Ba-Eu-Mn', 'Tb-Nd-W', 'Ba-Yb-Mo', 'V-Cr-W', 'Y-Zr-Nb', 'Li-Y-Ta', 'Sm-Er-Th', 'Ce-Ta-V', 'La-Y-Lu', 'Eu-Sc-Ta', 'Ca-Ce-Nd', 'Cr-Pb-W', 'Er-Lu-Ti', 'Co-Hg-Ru', 'Gd-Dy-Cr', 'Ba-Ca-Yb', 'Li-Ce-Er', 'Li-Cr-Ni', 'Na-Mg-Zr', 'Fe-Ir-Pd', 'V-Cr-Cu', 'La-Sm-Ta', 'Co-Cu-Ag', 'Li-Sm-Ho', 'Rb-Ti-Nb', 'Cu-Bi-Au', 'Li-Ce-Ti', 'V-Fe-Pd', 'Li-Tm-Ti', 'Ce-Pu-V', 'Nd-Th-Ta', 'Tb-Ti-V', 'La-Yb-Ta', 'Ta-Mo-W', 'Rb-Li-Zr', 'Y-Er-Cr', 'Y-Th-Mo', 'Tb-Dy-Pu', 'La-Gd-Mo', 'Nd-Sm-Ho', 'Co-Pd-Rh', 'Fe-Ir-Rh', 'Li-Ce-Cr', 'Tm-V-W', 'Cr-Cd-Mo', 'Ce-Ho-Zr', 'Cs-Ta-Nb', 'Ce-Eu-Mn', 'Tb-Yb-Lu', 'Yb-Nd-Ta', 'Cs-Hf-Zr', 'Na-Mg-Mo', 'Ga-Si-Sn', 'Yb-Gd-W', 'Ca-Yb-V', 'Th-Sc-Ti', 'Ca-La-V', 'Tb-Sc-Ti', 'Ag-Ir-Ru', 'Ce-Gd-Y', 'La-Ho-Er', 'La-Ce-Pr', 'Ca-La-Mn', 'Fe-Ag-Rh', 'Li-Mn-Cu', 'Li-Gd-Ho', 'Ho-Tm-Pu', 'Yb-Nd-V', 'Cs-Rb-Li', 'La-Sm-V', 'Pu-V-Cr', 'Tb-Y-Ti', 'Ho-V-W', 'Ce-Zr-Sc', 'Na-Cu-Mo', 'Li-Cd-Mo', 'Ba-Eu-Sc', 'Ba-Eu-Mo', 'Lu-Nb-Mo', 'Ce-Y-Ho', 'Tm-Ta-W', 'Pr-Gd-Y', 'Ce-Th-Sc', 'Li-Y-Zr', 'Bi-Sb-P', 'Tb-Pm-Ho', 'Sm-Ho-Cr', 'Ta-V-Mo', 'Rb-Mg-Cr', 'Nd-Pu-V', 'Tl-Cd-Si', 'Co-Os-Rh', 'Li-Ce-Zr', 'Tb-Tm-V', 'Tb-Pu-Mo', 'V-Ag-Pd', 'Ho-Ta-Mo', 'Pr-Ho-Pu', 'Tl-V-Mo', 'Pm-Ho-Pu', 'Tb-Ce-Gd', 'La-Lu-Ti', 'La-Dy-Y', 'Re-Ru-Pt', 'K-Ta-Mo', 'Li-Ce-Nd', 'Gd-Tm-Cr', 'Re-Hg-Os', 'Tb-Pm-Dy', 'Sm-Cr-W', 'Co-Ru-Pt', 'La-Lu-Nb', 'Nd-Ta-V', 'Yb-Sc-Cr', 'Cs-Li-Nb', 'Sc-V-W', 'Sc-Nb-Mo', 'Y-Er-Tm', 'Er-Tm-Pu', 'Ba-Y-V', 'Pm-Nd-Th', 'Rb-Na-Li', 'Tl-Ge-Pb', 'La-Pm-Tm', 'Cs-Rb-Mg', 'Ge-Bi-Pb', 'La-Ce-V', 'Ce-Hf-Ti', 'Na-Cr-Mo', 'Yb-Sc-U', 'Tb-Gd-Ho', 'Ce-Ti-V', 'Tb-Cr-Mo', 'Ce-V-Cr', 'Pm-Dy-Tm', 'Pm-Nd-Sm', 'Ca-Ce-Pu', 'La-Er-Th', 'Pr-Er-Mo', 'La-Ti-Mo', 'Ho-Mo-W', 'Cd-Sn-B', 'Si-Ag-Au', 'Ba-Y-Sc', 'La-Er-Nb', 'K-Zr-Nb', 'Li-Er-Mo', 'In-Ga-Ge', 'Tb-Gd-V', 'Gd-Tm-W', 'Nd-Gd-Y', 'Tl-Sn-B', 'Cs-V-Cr', 'Ba-Ca-Y', 'La-Pm-Er', 'Lu-Nb-W', 'Ba-Nd-Y', 'La-Dy-Ho', 'Ba-Sr-Mo', 'Cs-Zr-Ti', 'Pr-U-Cr', 'Y-Hf-Zr', 'Li-Pr-Sm', 'Yb-Pr-Pu', 'V-Bi-Mo', 'Li-Pr-Cr', 'Ir-Os-Pt', 'Mn-Tl-Pb', 'La-Th-Ta', 'Tb-Dy-Tm', 'Pm-Nd-Y', 'Sm-Er-Nb', 'Pm-Th-Cr', 'Ca-Yb-Pu', 'La-Nd-Gd', 'Sm-Lu-Mo', 'Pr-Tm-Lu', 'La-Dy-Cr', 'Ce-Pr-Mo', 'La-Gd-Dy', 'Ta-Cu-Bi', 'Ga-Bi-B', 'Sr-Ca-Sc', 'Li-Mg-Cr', 'Zn-Si-Bi', 'Nd-Ho-W', 'Tb-Pr-Ta', 'Li-Y-Er', 'Ca-Yb-Tm', 'Gd-Y-Zr', 'Tl-Zn-Cd', 'Ca-Tb-Yb', 'Na-Nb-Cu', 'U-Nb-W', 'Na-Li-Zr', 'Cs-K-Mo', 'La-Dy-Tm', 'Cs-Li-Ta', 'Tc-Pd-Pt', 'Pm-Tm-Pu', 'Nd-Pu-Cr', 'Li-Tb-Sm', 'Ce-Eu-Hf', 'Ho-Lu-Mo', 'La-Tm-Pu', 'Sr-Mn-V', 'Ce-Er-Tm', 'La-Gd-Sc', 'Yb-Pr-Gd', 'Sr-Mn-Fe', 'Li-Ho-Zr', 'Ce-Ti-Mo', 'Sm-Tm-Ta', 'Rb-Cr-Mo', 'Tl-Ag-Ge', 'Tb-Pr-Sm', 'Ga-Ge-Bi', 'Pr-Y-Ho', 'Tb-Pm-Pr', 'Hg-B-Pb', 'Sc-Mo-W', 'Y-Er-Zr', 'V-Cu-Mo', 'Mg-Ti-V', 'Os-Ru-Rh', 'Co-Re-Ni', 'Pr-Nd-Pu', 'Pr-Y-Hf', 'Yb-Pu-Ta', 'Eu-Sc-W', 'La-Tb-Ce', 'Pd-Ru-Rh', 'Tb-Sc-Ta', 'Cs-V-Mo', 'Yb-Er-Mo', 'Yb-Dy-Th', 'Tb-Nd-V', 'Cr-Fe-Pb', 'La-Tm-Ta', 'Th-Sc-V', 'Be-Ga-Si', 'Cu-Pd-Pt', 'Y-Hf-Ta', 'Zr-Ta-Nb', 'Hf-Zr-Sc', 'Li-Nd-Ho', 'Gd-Dy-Er', 'V-Cr-Pd', 'Zn-Sn-Ge', 'Nd-Ho-Lu', 'Y-Ti-Mo', 'La-Y-Cr', 'Mg-Cr-Fe', 'Pr-Gd-Er', 'Fe-Co-Os', 'Pm-Pr-Pu', 'Tl-Sn-Ge', 'Gd-Ti-W', 'Dy-Ta-Ti', 'La-Yb-Mn', 'Bi-As-Pb', 'Re-Tc-Pt', 'Tl-Ga-Sn', 'Ba-La-Nd', 'Er-Mo-W', 'Ce-Sc-Nb', 'La-Nd-U', 'Pd-Pt-Rh', 'Hf-Mg-Zr', 'Pr-Sm-Pu', 'Nd-Lu-Pu', 'Ce-Cr-Mo', 'Y-Ho-Pu', 'K-Cr-Fe', 'Na-Ca-Ti', 'Ce-Ho-Th', 'La-Ta-W', 'La-Pm-Th', 'La-Yb-Tm', 'Tb-Y-Cr', 'Y-Hf-Nb', 'Pm-Lu-Th', 'Li-Nd-Tm', 'Tb-Nd-Lu', 'Na-Cr-Cu', 'Nd-U-Cr', 'K-Rb-V', 'La-Tb-Pu', 'Sm-Gd-Pu', 'Y-U-V', 'Yb-Ho-Tm', 'Gd-Er-Sc', 'Pr-Er-W', 'Tb-Gd-W', 'Ca-Y-Sc', 'Rb-Zr-Nb', 'Mn-Co-Ni', 'Tb-Lu-Mo', 'Ce-Pm-Ho', 'Cu-Re-Os', 'Re-Ir-Ru', 'Tb-Y-Sc', 'Hg-Bi-Os', 'Cr-Ag-Pd', 'Tc-Ni-Pt', 'Cs-K-Ti', 'La-Ho-Tm', 'Pr-Dy-Er', 'Ta-Tl-Mo', 'Zn-Ga-B', 'Al-Tl-Sn', 'Cu-Re-Ag', 'Tl-Cu-Ni', 'Yb-Eu-Y', 'Yb-Gd-Sc', 'La-Eu-Pu', 'Cd-In-Fe', 'Ba-Yb-Mn', 'Nd-Y-Lu', 'Gd-Tm-Mo', 'Ga-Ge-Pb', 'Cr-Bi-Au', 'Be-Al-Zn', 'Gd-Lu-Pu', 'Sm-Er-Cr', 'Li-Sm-Lu', 'La-Sm-Nb', 'Tc-Ni-Rh', 'Ca-La-Fe', 'Pr-Hf-Ti', 'Li-Ho-Ta', 'Gd-Tm-Ti', 'Nb-Hg-Bi', 'Dy-Er-Lu', 'Tb-Er-Sc', 'Nd-Th-V', 'Sm-Pu-Ta', 'Pm-Gd-Ho', 'Yb-Ta-Nb', 'Gd-Dy-Ho', 'Yb-Nd-Dy', 'Dy-Th-Ti', 'Ta-V-Cu', 'V-Cu-W', 'Nd-Sm-W', 'Na-Li-Ti', 'Cr-Pd-Au', 'Nd-Er-Tm', 'Re-Hg-Bi', 'Na-Li-Mo', 'Yb-Th-U', 'Ba-Ca-Eu', 'Nd-Gd-V', 'Sm-Dy-Tm', 'K-Li-Ti', 'Sm-Tm-W', 'Pr-Gd-Tm', 'Gd-Lu-Ti', 'Tl-Ni-Ag', 'Ba-Yb-V', 'Yb-Dy-Pu', 'Nd-Sm-Gd', 'La-Tb-V', 'Ag-Ir-Rh', 'Pr-Th-Mo', 'Yb-Tm-Lu', 'Li-Hf-Nb', 'Hg-Ge-B', 'Ni-Ru-Pt', 'Li-Er-Ti', 'Co-Ag-Ru', 'Ce-Ta-W', 'Ho-Th-Ta', 'Li-Ce-Pm', 'Y-Er-Sc', 'Pm-Sm-Gd', 'Li-Pu-Ta', 'La-U-Ta', 'Sc-Cr-W', 'Tb-Pr-Ho', 'Pm-Gd-V', 'Nd-Dy-Cr', 'Nd-Gd-Ti', 'La-Tb-Pr', 'Y-Ho-V', 'Yb-Lu-Pu', 'Pr-Dy-Ta', 'Ni-Pd-W', 'Tb-Sm-Tm', 'La-Nd-Tm', 'La-Th-Nb', 'Li-La-Mn', 'La-Ce-U', 'Pm-Y-Cr', 'Nd-Dy-Lu', 'Os-Ru-Pt', 'Co-Re-Os', 'Tb-Dy-Ti', 'Bi-As-Au', 'Ce-Pu-W', 'Zn-Si-Ge', 'Nd-Th-W', 'La-Th-Sc', 'Pr-Gd-W', 'Sm-Th-W', 'Tm-Pu-Cr', 'Ce-Gd-Ti', 'Fe-Ni-Pb', 'Os-Pd-Pt', 'Nd-Th-Cr', 'Cu-Ni-W', 'Ca-Pm-Tm', 'Ce-Ho-Ta', 'Gd-Ho-Lu', 'Cu-Tc-Ni', 'Cs-Li-Pr', 'Na-Nb-V', 'Gd-V-Mo', 'Al-Cd-Ga', 'Tl-Ge-B', 'Si-Sn-Ge', 'Yb-Nb-W', 'Sm-Er-Mo', 'Pm-Er-Th', 'Er-Hf-Ta', 'Rb-Hf-Ti', 'Tl-Cd-Mo', 'Ce-Eu-Y', 'Cu-Pt-Rh', 'Li-Er-Cr', 'Bi-Mo-Au', 'Al-Si-Sn', 'Ba-Pm-V', 'Pm-Nd-V', 'Ce-Sm-Nb', 'Sc-V-Cr', 'Pm-Nd-Ho', 'Ce-Nd-Ta', 'Li-Tb-V', 'Eu-Cr-W', 'Dy-Er-Zr', 'Ca-Yb-Eu', 'Nd-Gd-Sc', 'Yb-Nb-V', 'La-Er-Tm', 'Gd-Th-Cr', 'Na-Mg-Nb', 'Th-V-W', 'Pm-Nd-Tm', 'Er-Tm-Lu', 'Sm-Nb-Mo', 'Co-Re-Ru', 'Tb-Nd-Cr', 'Tl-Zn-B', 'Cr-Ni-Pd', 'Yb-Y-Ta', 'Ni-Ir-Pd', 'Cu-Ru-Au', 'La-Sm-Tm', 'Ce-Eu-Zr', 'Tb-Yb-Tm', 'Tb-Nd-Tm', 'Yb-Gd-Tm', 'Ir-Pd-Pt', 'K-V-Cr', 'Mn-Cd-Fe', 'La-Pr-Pu', 'Er-Lu-V', 'Ho-Er-W', 'Gd-Y-Sc', 'Dy-Th-Cr', 'Gd-Dy-Th', 'Rb-Hf-Zr', 'Cs-Nb-V', 'Li-Mg-Nb', 'Be-Zn-Ge', 'Y-Er-Hf', 'Cs-Pr-Ti', 'Y-V-Cr', 'Tb-Sm-Y', 'Eu-V-W', 'Ce-Mn-V', 'Ce-Sc-V', 'Li-Pm-Lu', 'Nd-Dy-Y', 'Nb-V-Hg', 'Er-Pu-V', 'Tb-Pu-Ta', 'Mg-U-Cr', 'Lu-Th-Cr', 'Tb-Pr-Ti', 'Cu-Re-Ni', 'Eu-Sc-Nb', 'Pm-Tm-Cr', 'Sr-Y-Ti', 'Nd-Y-Cr', 'Tb-Ta-V', 'Li-Fe-Cu', 'Sm-Gd-W', 'Tb-Pr-Gd', 'Ce-U-Nb', 'Eu-Zr-Ta', 'Tb-Gd-Ti', 'Bi-B-Sb', 'Sn-B-Pb', 'Tb-V-W', 'Ce-Pm-Er', 'Tb-Gd-Sc', 'Eu-Y-Zr', 'Pr-Tm-Ta', 'Tc-Pt-Rh', 'Tb-Dy-Ta', 'K-Hf-Nb', 'Rb-Li-Hf', 'Yb-U-Ta', 'Li-Pr-Hf', 'Na-Li-Cu', 'Ba-Mn-Ni', 'Tb-Nd-Ta', 'V-Cu-Bi', 'Li-Ta-V', 'Hf-Ta-Ti', 'Ce-Er-Th', 'Zn-Sn-B', 'Ce-Eu-Ta', 'Sm-Gd-Lu', 'La-Ho-Lu', 'Fe-Cu-Pb', 'Ce-Sc-U', 'Yb-Ho-V', 'Sr-Ca-Mo', 'La-V-W', 'Ce-Pm-Cr', 'La-Ce-Ti', 'Li-Tm-Ta', 'Ga-Sn-Bi', 'Rb-Na-Mo', 'Tb-Pm-Y', 'Fe-Cu-Ni', 'La-Tm-Lu', 'La-Yb-Th', 'Ca-Eu-V', 'Nd-Y-W', 'La-Eu-Mn', 'Dy-Ho-Er', 'Ce-Pm-Nd', 'Be-Ga-Sn', 'Mg-V-Cr', 'Cr-Cu-Pb', 'Y-Tm-V', 'Yb-Ta-V', 'Sm-Gd-V', 'Tb-Ce-Pu', 'Pu-Cr-Mo', 'Co-Pd-Ru', 'Cs-Mg-Mo', 'Pr-Lu-V', 'Ce-Th-Cr', 'Tb-Yb-V', 'Sm-Nb-V', 'Y-Zr-Ta', 'Yb-Pr-Hf', 'Pr-Dy-Tm', 'Yb-Gd-Mo', 'Er-Pu-Ti', 'Dy-Tm-W', 'Ba-La-Sm', 'Al-Ga-Ge', 'Pm-Y-Er', 'Ba-Gd-Sc', 'Ti-Nb-W', 'Ce-Nd-Th', 'Cd-Ga-Si', 'Ba-Yb-Eu', 'Lu-Ta-V', 'Yb-Gd-Ho', 'Tl-Cd-Pb', 'Ca-Mn-V', 'Rb-Na-Zr', 'Pu-Nb-V', 'Eu-Sc-Mo', 'Cs-Hf-Nb', 'La-Pu-Cr', 'Yb-Nd-Cr', 'Sm-Th-Nb', 'Tb-Ce-Pm', 'Dy-Pu-W', 'Ce-Sm-W', 'Nd-Sm-Mo', 'Dy-Ho-Cr', 'Li-Hf-Ta', 'Tb-Er-Mo', 'La-Y-Ho', 'Na-Mg-V', 'Ni-Pt-C', 'Al-In-Ge', 'Nb-V-W', 'Mg-Cd-Fe', 'U-V-W', 'Tb-Er-Ta', 'Cu-Re-Ir', 'La-Pm-Ho', 'Li-Mg-Mo', 'La-Tb-Tm', 'Rb-Zr-Ta', 'Y-Ho-Ta', 'Lu-Th-Ta', 'Tb-Sc-Mo', 'Y-Er-Th', 'Ce-Gd-Lu', 'Na-V-Fe', 'Tb-Cr-W', 'Ce-Sc-Mo', 'Ce-Er-Nb', 'Cu-Pb-W', 'Gd-Sc-W', 'Ce-Eu-Nb', 'Sm-Dy-Lu', 'Nd-U-V', 'Fe-Cu-Ru', 'K-Ta-Nb', 'Eu-Y-Hf', 'Ba-Yb-Nd', 'Pr-V-W', 'Pr-Lu-Ti', 'Mn-Co-Pb', 'Ce-Nd-Gd', 'Tc-Ni-C', 'La-Tb-Dy', 'Yb-Nd-Gd', 'Tb-Ti-W', 'Pr-Gd-Lu', 'Cu-Ag-Bi', 'Tb-Nd-Sc', 'Th-U-Ta', 'Ag-Os-Ru', 'Mn-Fe-Pb', 'Be-In-Si', 'Ta-Ti-Mo', 'Na-Hf-Ti', 'Dy-Zr-Ta', 'Y-Sc-Ta', 'La-Yb-Ho', 'Cu-Ni-Pb', 'Tb-Dy-V', 'La-Dy-Ti', 'Li-Mn-Fe', 'Pm-Sm-Ho', 'La-Ce-Ho', 'Cu-Ag-Os', 'La-Ta-V', 'Nd-Ho-Sc', 'La-Y-Th', 'K-Rb-Li', 'Na-Ta-V', 'K-Li-Hf', 'Ce-Gd-Th', 'Nd-Sm-Cr', 'Ce-Eu-Th', 'Pm-Dy-V', 'Pm-Pr-Lu', 'Ce-Tm-Mo', 'Co-Ir-Os', 'Ba-Mn-V', 'K-Li-Mg', 'La-Ce-Nd', 'La-Tb-Cr', 'K-Rb-Ti', 'Tb-V-Cr', 'U-Cr-W', 'Ce-Nd-Lu', 'Mn-Tl-Cu', 'Ta-Ti-W', 'Cu-Ag-Au', 'Gd-Ti-V', 'Dy-Er-Th', 'Dy-Ho-Th', 'Ca-Nd-Lu', 'Tb-Er-Ti', 'La-Ta-Ti', 'Lu-Pu-Nb', 'Ho-Lu-V', 'Er-Tm-V', 'Er-Zr-Ta', 'Nb-Hg-Mo', 'Ag-Ge-C', 'Ca-La-Nd', 'Yb-Ta-Ti', 'Al-Ga-Pb', 'Nd-Sc-U', 'Ca-Pm-Nd', 'Yb-U-Cr', 'Ce-Y-Th', 'La-Yb-Dy', 'Co-Cu-Pb', 'Li-Ce-Mn', 'La-Th-U', 'Pr-Ho-Tm', 'Dy-Lu-Pu', 'Dy-Er-Ta', 'Co-Cu-Ru', 'La-U-V', 'Pm-Sm-Cr', 'Th-Zr-Nb', 'Ni-Ag-Ru', 'Na-Mg-Cr', 'Tb-Ce-Sc', 'Yb-Gd-Y', 'Ca-Nd-Y', 'La-Tb-Y', 'Ca-La-Pm', 'Na-Zr-Ti', 'Ce-V-W', 'Yb-Pr-U', 'Ta-Nb-W', 'Pm-Dy-Cr', 'Al-Sn-Pb', 'La-Ho-W', 'La-Nd-Ho', 'Hg-Ir-Os', 'Nd-Er-V', 'Fe-Rh-C', 'Rb-Li-Cr', 'Yb-Hf-Sc', 'Ce-Sm-Y', 'K-Rb-Mg', 'La-Tb-Gd', 'Ho-Er-Mo', 'Tb-Yb-Er', 'Tm-Pu-V', 'Pm-Gd-Lu', 'Tb-Nd-Ti', 'Li-Tb-Pm', 'Gd-Er-Ti', 'Ho-Ta-V', 'Eu-Mo-W', 'Li-Er-V', 'Li-V-Cr', 'Yb-Dy-Ho', 'Ni-Ag-C', 'Ir-Os-Rh', 'Ho-Tm-Ta', 'Sm-Er-W', 'Li-V-Cu', 'Pm-Dy-Mo', 'La-Dy-V', 'Pm-Er-Tm', 'La-Ce-Pm', 'Ce-Lu-W', 'Gd-Er-Mo', 'Cr-Cu-Ni', 'Li-Pm-Nd', 'Cu-Tc-Pd', 'Yb-Pr-Er', 'Dy-Th-V', 'Er-Ti-Nb', 'Sm-Ta-Mo', 'Gd-Ho-Th', 'Th-Ti-W', 'Lu-Th-Ti', 'Y-Lu-Zr', 'La-Yb-Nb', 'Ho-Zr-Sc', 'Yb-U-V', 'Cs-K-Cr', 'Ca-Eu-Mo', 'Th-Ta-Mo', 'Nd-Y-Sc', 'Nd-Y-Tm', 'La-Ce-Lu', 'Ni-Ir-C', 'Pr-Nd-Ho', 'Nd-Sc-Mo', 'Gd-Ti-Mo', 'Nb-Tl-V', 'Ce-Y-Cr', 'Tc-Ir-C', 'Pd-W-Au', 'Tb-Pm-Th', 'Cs-Rb-Cr', 'Ca-Pm-V', 'Co-Ag-Ir', 'Yb-Pr-Mo', 'Sc-Ti-Mo', 'Dy-Tm-Cr', 'Ce-Gd-Pu', 'Nd-Lu-Th', 'Cs-Mg-Cr', 'Yb-Y-Tm', 'Tb-Nd-Gd', 'V-Cr-Fe', 'Pr-Pu-Ti', 'Sr-Y-Sc', 'Al-Ge-Bi', 'U-V-Ag', 'Ce-Sm-Mo', 'Li-Sm-Gd', 'Zn-Ge-B', 'Gd-Mo-W', 'Gd-V-Cr', 'Nd-Er-Ti', 'Ce-Sm-Lu', 'Yb-Ho-Mo', 'Pr-Nd-V', 'Nd-U-W', 'Lu-Ti-Nb', 'Gd-Th-Zr', 'Ir-Ru-Pt', 'Tb-Ho-V', 'La-Pr-Y', 'Li-Ce-Hf', 'Mg-Nb-Mo', 'Pr-Gd-Ti', 'Eu-U-Cr', 'Si-Sn-Pb', 'Ag-Ir-C', 'Pr-Lu-Mo', 'Ho-Er-Pu', 'Ca-Ce-Y', 'Er-Th-W', 'Be-In-Ga', 'Hf-Mg-Nb', 'Cs-Li-Mg', 'La-Ce-Pu', 'Ca-La-Mo', 'V-Fe-Cu', 'Co-Ir-Pd', 'Li-Cu-Mo', 'Dy-Tm-Mo', 'Pr-Th-Ta', 'Pu-Ta-W', 'Li-Tb-Zr', 'Nd-Dy-Tm', 'Cu-Tc-Mo', 'Pr-Nd-Er', 'Ba-Ca-Pm', 'Sr-Y-Mo', 'Nb-Cu-Mo', 'Li-Mn-Cd', 'Cd-Ga-Bi', 'Na-Li-Ta', 'Ag-Rh-Au', 'Nd-Gd-Tm', 'Yb-Gd-Ta', 'Pr-Nd-Th', 'Ce-Sc-Ti', 'Cr-Cu-Ag', 'Ga-Sn-B', 'Co-Re-Pd', 'Ce-Ta-Ti', 'Li-La-Lu', 'Sm-Dy-Mo', 'Pr-Y-U', 'K-Hf-Zr', 'Sc-Ti-Cr', 'Be-Si-Bi', 'Gd-Lu-Ta', 'Ce-Y-Hf', 'Yb-Tm-Mo', 'Ce-Ho-Er', 'Pm-Pu-V', 'Mg-Zr-Ti', 'Pu-Ti-Cr', 'Pm-Lu-Pu', 'Pr-Dy-Ho', 'Tb-Ce-Nd', 'La-Dy-Lu', 'Pr-Y-Ta', 'Ce-Y-Tm', 'Cr-Cu-Mo', 'Ce-Pr-Nd', 'Cd-Si-Ge', 'Yb-Ta-W', 'Al-Ge-Pb', 'Ce-Pu-Ti', 'Y-Lu-V', 'Li-Nd-Pu', 'Al-Cd-Ge', 'Nd-Tm-Ta', 'Ag-Pt-Au', 'Li-Tm-V', 'Ta-In-Mo', 'Ce-Gd-V', 'Eu-Hf-Ta', 'Ce-Gd-Mo', 'Co-Os-Pd', 'Be-Al-Sn', 'K-Ta-Ti', 'Tb-Y-Lu', 'Ca-Eu-Y', 'La-Sm-Ho', 'Eu-Zr-Nb', 'Pm-Pu-Cr', 'Eu-Hf-U', 'Yb-Eu-V', 'Li-Tb-Nd', 'Mg-U-Ti', 'Ce-Pr-Ho', 'Tm-Lu-Th', 'Sm-Th-Mo', 'La-Er-Ti', 'Yb-Pr-Ta', 'K-Rb-Mo', 'Ce-Th-U', 'Er-Lu-Ta', 'Cu-Ag-Rh', 'La-Ce-Er', 'Cr-Fe-Ag', 'Zn-Bi-Pb', 'Li-Pr-V', 'Tb-Pm-Lu', 'Nd-Dy-Er', 'Pr-Dy-Pu', 'Ce-Zr-Ta', 'La-Yb-U', 'Pm-Th-V', 'Ce-Cr-W', 'Hg-Bi-Pb', 'Sm-Tm-Th', 'Cu-Ir-Rh', 'Ca-Pu-Mo', 'Sm-Gd-Er', 'Dy-Y-Ti', 'La-Gd-Th', 'Cu-Ni-Pt', 'Ce-Nd-V', 'Ag-Pt-C', 'Ga-B-Pb', 'Tb-Pm-Pu', 'Pm-Ho-Lu', 'La-Ce-Mo', 'Nd-Ho-Th', 'Pr-Gd-Mo', 'Pm-Y-Ho', 'La-Ce-Cr', 'Li-Tb-Pu', 'Ba-Sc-Ti', 'Cs-Ti-Nb', 'Zn-Ga-Si', 'Ca-Ti-V', 'Pm-Gd-Pu', 'La-Pu-V', 'Cs-Ti-Cr', 'Ca-La-Yb', 'Pm-Sm-Er', 'Cu-Rh-Au', 'Pm-Sm-Th', 'Er-Nb-V', 'Tb-Gd-Tm', 'B-Sb-Pb', 'Cu-B-Pb', 'Dy-Ho-Tm', 'Er-Sc-Cr', 'Cd-Sn-Bi', 'Cr-Ag-Mo', 'K-Ta-V', 'Gd-Er-Lu', 'Tl-B-Pb', 'La-Nd-Dy', 'Tb-Nd-Dy', 'Nd-Ho-Er', 'Li-Pm-Sm', 'Yb-Lu-Th', 'Na-Li-Mg', 'Li-Mg-Cd', 'Sc-U-Ti', 'Y-Ta-Mo', 'La-Ho-Mo', 'V-In-Mo', 'K-Rb-Ta', 'La-Nd-Y', 'Ir-Os-Ru', 'Ir-Ru-Rh', 'Ce-Y-Pu', 'Ga-Hg-Ge', 'La-Yb-W', 'Co-Ru-Rh', 'Li-La-Nd', 'Y-Hf-Ti', 'Li-La-Ho', 'Pm-Pr-Tm', 'Os-Pt-Rh', 'Ce-Tm-Lu', 'Re-Ir-Pd', 'Ho-Sc-W', 'La-Pm-V', 'Cu-Re-Pd', 'Gd-Sc-Mo', 'Pr-Nd-Dy', 'La-Ce-Tm', 'Li-La-Pm', 'Li-Y-Cr', 'Ba-Ca-V', 'Dy-Er-Tm', 'Mn-Cu-Ni', 'Ce-Lu-Pu', 'Y-Tm-W', 'K-Ti-Mo', 'Tb-Yb-Pu', 'La-Tm-W', 'Ce-Pr-Th', 'Ce-Ho-Sc', 'Hf-Sc-U', 'Tb-Lu-W', 'Li-Tb-Pr', 'Mn-Fe-Cu', 'Li-Lu-Ti', 'Pr-Ho-Th', 'Cd-In-Si', 'Pm-Er-Lu', 'Nd-Lu-Ti', 'Lu-Pu-Ti', 'Be-Si-Sn', 'Sc-Ta-Nb', 'Ce-Ho-W', 'Mg-Ti-Cr', 'Nd-Pu-W', 'Li-Y-V', 'Ca-Ce-Eu', 'Y-Er-Mo', 'Nd-Ho-V', 'Ba-Yb-Ti', 'Tl-Cu-Ag', 'Co-Cu-Ni', 'Mn-Tl-Cd', 'Tm-Ta-Ti', 'Tb-Sm-V', 'Dy-Tm-Ti', 'Er-Lu-Nb', 'Hf-Th-Nb', 'Ba-Gd-Ti', 'Y-Ti-W', 'Tb-Er-Cr', 'Tb-Pm-Nd', 'Yb-Y-Cr', 'Ca-La-Sc', 'Lu-Pu-V', 'Ho-Pu-W', 'Ba-Sm-V', 'Cu-Ru-Rh', 'Ca-Tm-Ti', 'Pm-Pr-V', 'Dy-Ho-Mo', 'Yb-Ti-Mo', 'Tb-Gd-Pu', 'Pd-Pt-Au', 'Cu-Ir-Pt', 'Sm-Pu-Cr', 'Nd-Sm-Lu', 'Re-Os-Pd', 'Co-Ir-Ru', 'La-Er-Pu', 'Th-Ti-Nb', 'Gd-Ho-V', 'Yb-Er-Ta', 'La-Tb-Ti', 'Pm-Sm-Y', 'Li-La-Tm', 'Li-Pr-Er', 'Th-Ta-Nb', 'Lu-Ta-Mo', 'Tb-Lu-Ta', 'Pr-Pu-Mo', 'La-Pm-Mo', 'Gd-Ho-Tm', 'Ca-Nd-Mo', 'Tl-In-Ga', 'Ac-Cr-Mo', 'Pr-Sm-W', 'Eu-Y-Ta', 'Y-Ti-Cr', 'Yb-Nb-Mo', 'K-Li-Cr', 'Al-Tl-Si', 'Nb-V-Bi', 'Tm-Lu-Ta', 'Ce-Y-Lu', 'Cu-Pt-Au', 'Nd-Sm-Dy', 'Ba-Ca-Sc', 'Y-Tm-Ti', 'La-Ho-Cr', 'Ca-Mn-Fe', 'Sm-U-Cr', 'La-Ce-Y', 'Tb-Tm-Th', 'Co-Ag-Os', 'Li-Tm-Cr', 'Tm-Ti-Mo', 'Cr-Fe-Ni', 'K-Cr-Mo', 'Be-Zn-Bi', 'Tb-Er-W', 'Pr-Ho-Cr', 'Mg-Zr-Nb', 'Dy-Th-Zr', 'Si-Ag-Pb', 'Tl-Cd-Ga', 'Ce-Er-Cr', 'Li-Cr-Cu', 'Pm-Sm-V', 'Tb-Gd-Dy', 'Ba-Sm-Y', 'Tb-Y-Th', 'Y-Lu-Pu', 'Cs-K-Mg', 'La-Er-Lu', 'Cs-Li-Ti', 'Zn-Cd-Ga', 'Cs-K-V', 'Ba-Gd-V', 'Tc-Ir-Pt', 'Pm-Nd-Cr', 'Tb-Pr-Er', 'U-Nb-V', 'Ho-Lu-Zr', 'La-Pu-Ti', 'Tm-Pu-W', 'Dy-Lu-Ta', 'Li-Nd-Ti', 'Lu-Mo-W', 'Dy-Y-Zr', 'Lu-Th-V', 'Ce-Ta-Mo', 'La-Yb-Eu', 'La-Pr-Sm', 'Sm-Ho-V', 'Si-Ag-Ge', 'Tb-Ce-Lu', 'La-Dy-W', 'Gd-Er-Zr', 'Cs-Pr-Mo', 'Pr-Tm-Th', 'Pu-Nb-Mo', 'Sm-V-Mo', 'Pm-Lu-V', 'Cu-Pt-W', 'Lu-Zr-Nb', 'Tb-Dy-Ho', 'Pr-Ti-Mo', 'Cs-Li-V', 'Pm-Sm-Lu', 'Nd-Sm-V', 'Yb-Th-Nb', 'Pr-Ta-V', 'Ag-Os-Pt', 'Li-Gd-Ta', 'Tb-Ho-Sc', 'Gd-Y-W', 'Tl-Cu-Mo', 'Na-Ta-Mo', 'Ca-Y-Ti', 'Pr-Ho-Lu', 'La-Gd-Y', 'Na-Nb-Mo', 'Fe-Ag-C', 'Pr-Ho-Ta', 'Ag-Ru-Au', 'Nd-Gd-Th', 'Fe-Pd-Ru', 'Pr-Nd-Tm', 'Tb-Er-V', 'Nd-Sm-Th', 'Pd-Rh-Au', 'Th-Sc-Nb', 'Tb-Ce-Er', 'Sc-U-Cr', 'Gd-Pu-Ti', 'Mn-V-Cu', 'Yb-Pr-Lu', 'Ga-Sn-Ge', 'Zn-Bi-B', 'Li-Pr-Ho', 'Li-Nd-Sm', 'Cs-K-Nb', 'La-Th-V', 'V-Hg-Bi', 'Be-Sn-Ge', 'Cu-Ir-Os', 'Ho-Lu-W', 'Tb-Ho-Cr', 'Er-Th-Zr', 'Pm-Nd-Lu', 'Ag-Ir-Pd', 'Lu-V-Mo', 'Gd-Ho-Er', 'Yb-Nd-Ti', 'La-Nd-Mo', 'La-Eu-Y', 'Sm-Y-Ho', 'Gd-Er-Tm', 'Tb-Sc-W', 'Ce-Sm-Ho', 'Si-Bi-Pb', 'Pr-Gd-Cr', 'Al-Tl-Cd', 'Tl-In-Mo', 'Ag-Ru-Pt', 'Tb-Ho-W', 'Eu-Ta-W', 'Ce-Y-Nb', 'Cs-Mg-V', 'Pr-Nd-W', 'Ir-Pd-C', 'Ho-Er-Zr', 'Pr-Pu-W', 'Tb-Ce-Sm', 'Mg-V-Mo', 'Be-Al-Ga', 'Cu-Ni-Ir', 'Ce-Ho-Pu', 'Ca-Y-Pu', 'Ru-Rh-Au', 'Pr-Dy-V', 'La-Tb-Nd', 'Sm-U-V', 'Gd-Ti-Cr', 'Ni-Ag-Os', 'Sm-Dy-W', 'Yb-Eu-Cr', 'Fe-Cu-Ag', 'Eu-Y-W', 'La-Lu-W', 'Tm-Ta-V', 'La-Mn-V', 'Hf-Th-Sc', 'Ce-Pm-Mo', 'Pr-Dy-Mo', 'Dy-Lu-W', 'Yb-Eu-Nb', 'Tb-Gd-Th', 'Rb-Na-Mg', 'Tm-Lu-W', 'Ho-Lu-Ta', 'Dy-Ti-Cr', 'Cu-Os-Pd', 'Pm-Pu-Mo', 'Sc-U-W', 'Ca-Tm-V', 'Gd-Dy-Ti', 'Yb-Eu-Mn', 'Pr-Tm-Pu', 'Gd-Ho-Pu', 'Al-Ga-Bi', 'Tb-Ta-W', 'Yb-Y-Ti', 'Ce-Nb-Mo', 'V-Fe-Ru', 'La-Pr-Dy', 'Ca-Nd-Tm', 'Pm-Er-Mo', 'Lu-Ti-Cr', 'Nd-Ta-W', 'Tb-Gd-Zr', 'Pr-Pu-V', 'Rb-Li-Mg', 'Tb-Pm-Cr', 'Li-Pm-Pu', 'Lu-Ta-Nb', 'La-Y-Pu', 'Ca-Mn-Co', 'Pr-Er-Hf', 'Cs-Hf-Ta', 'Re-Ir-Os', 'Hf-Ti-Nb', 'Fe-Ag-Os', 'Yb-Y-Lu', 'Ce-Er-W', 'Ba-La-Fe', 'Eu-Pu-Cr', 'Eu-Pu-Ta', 'Nd-Th-Sc', 'Sm-Y-W', 'La-Yb-Er', 'Er-Cr-Mo', 'Tl-V-Cu', 'Er-Th-Mo', 'Yb-Gd-Cr', 'La-Ce-Mn', 'Zr-Ti-Nb', 'Nd-Dy-Ti', 'Rb-Na-Ti', 'Tl-Cd-B', 'Cd-Ge-Bi', 'Eu-Th-Zr', 'Tm-Ti-V', 'Pm-Nd-Pu', 'U-Ti-Cr', 'Co-Cu-Rh', 'Er-Hf-Ti', 'La-Ti-W', 'Fe-Cu-Ir', 'Hf-Th-Ta', 'Pr-Dy-Ti', 'Tb-Yb-Gd', 'K-Rb-Hf', 'Ce-Tm-Ta', 'Hf-Zr-Ta', 'Li-La-Ce', 'V-Cu-Pd', 'Pm-Pr-Th', 'Ba-Sc-V', 'La-Th-Cr', 'Cu-Re-Bi', 'Ba-Sr-Fe', 'Tb-Ce-Th', 'Er-Ti-V', 'La-Nd-Sc', 'Pr-Er-Lu', 'La-Ce-Th', 'Ba-Pr-Sm', 'Er-Pu-Nb', 'Sm-Lu-V', 'Li-Lu-Cr', 'Ce-Gd-Ta', 'Yb-Pr-Ho', 'La-Eu-Mo', 'Pm-Tm-Th', 'Dy-V-Cr', 'Ce-Pr-Tm', 'Ce-Tm-Pu', 'Ho-Th-Zr', 'Ca-Y-Tm', 'Li-Pr-Ti', 'Sm-Ho-W', 'Co-Cu-Pt', 'Eu-Mn-V', 'Dy-Y-Th', 'Yb-Cr-W', 'Li-Y-Nb', 'Ce-U-Ta', 'Ba-La-Mo', 'La-Er-Cr', 'Zn-In-Ge', 'Dy-Y-V', 'Cs-K-Li', 'Li-Cr-Cd', 'Pu-Ti-V', 'Pr-Nd-Ta', 'Ba-Nd-Sm', 'Ce-Nd-Ti', 'Ce-Th-Nb', 'Ho-Th-Sc', 'Er-Sc-Ti', 'Re-Ag-Rh', 'Nd-Cr-Mo', 'Ba-Sr-Mn', 'Ca-Nd-V', 'Yb-Ho-Ta', 'Zn-Cd-In', 'Fe-Co-Ru', 'Be-Al-Bi', 'U-Ta-V', 'Yb-Er-Nb', 'Fe-Os-Pd', 'La-Pr-Cr', 'Tm-Pu-Ti', 'Ca-Tb-Y', 'Pm-Pr-Mo', 'Ce-Pr-V', 'Yb-Eu-Pu', 'Yb-Ti-V', 'Gd-Y-Tm', 'Cu-Tc-Pt', 'Rb-Na-V', 'Er-Ta-Mo', 'La-Tb-Sc', 'Li-Tb-Ti', 'Dy-Er-V', 'Er-Nb-Mo', 'Nd-Tm-Th', 'Yb-Eu-Hf', 'Ce-Sm-U', 'Eu-Y-Pu', 'Cu-Ag-Pd', 'Ni-Ag-Pd', 'Pm-Ho-Th', 'La-Pr-Er', 'Yb-Pu-Nb', 'Tl-Si-Sn', 'Ho-Sc-V', 'Yb-Nd-Er', 'Lu-Ta-Ti', 'Y-Nb-V', 'Gd-Y-Er', 'Eu-Sc-Cr', 'La-Pm-Y', 'Dy-Ta-W', 'Yb-Sc-W', 'Dy-Th-Mo', 'Tb-Tm-Ta', 'La-Pm-Gd', 'Co-Ni-Ir', 'Dy-Er-Pu', 'Na-Ca-Mo', 'Rb-Li-V', 'Zn-In-Si', 'Nd-Er-Ta', 'Sb-Pb-W', 'Hg-Bi-Sb', 'Ca-Yb-Sc', 'Tb-Ta-Mo', 'Ho-Er-Sc', 'Yb-Hf-U', 'Na-Mg-Ti', 'Pu-Ti-W', 'Pr-Lu-Th', 'Tm-Pu-Ta', 'Yb-Er-Tm', 'Gd-Th-V', 'Ba-Ca-Ti', 'Li-Tb-Ce', 'K-V-Mo', 'Sr-V-Fe', 'Lu-V-W', 'Li-Y-Mo', 'Lu-Ta-W', 'Co-Ni-Pt', 'Er-V-Mo', 'Rb-Li-Ti', 'Cu-Bi-Mo', 'Pt-Rh-Au', 'Li-La-Gd', 'Dy-Er-W', 'Al-Tl-Ge', 'Ba-Pr-Gd', 'Pm-Y-Th', 'Ba-Pm-Sm', 'Sc-Ta-W', 'Sm-Y-Mo', 'Tb-Yb-W', 'Rb-Hf-Nb', 'Ce-Sm-Er', 'Sm-Er-Ta', 'Eu-Th-V', 'Ce-Lu-Ti', 'Nd-Pu-Mo', 'Pr-Nd-Gd', 'Eu-Hf-Nb', 'Tc-Pt-C', 'Re-Tc-Rh', 'Co-Ni-Rh', 'Ho-Tm-Mo', 'Re-Pt-Rh', 'Tb-Sm-Cr', 'La-Ce-Ta', 'Dy-Lu-Cr', 'Al-In-Ga', 'Gd-Lu-Cr', 'La-Gd-W', 'Cd-In-Ge', 'Y-U-W', 'Na-Fe-Cu', 'Dy-Er-Ti', 'Ba-La-Pm', 'Re-Ag-Bi', 'Tb-Er-Th', 'Nd-Y-Mo', 'Ce-Pm-Y', 'Th-Sc-Mo', 'Pm-Cr-Mo', 'Na-Hf-Nb', 'Sm-Er-Lu', 'Tb-Ce-Ti', 'Yb-Sc-Mo', 'Li-Ce-Mo', 'Cu-Bi-Pb', 'Hg-Sb-Pb', 'Yb-Ho-Cr', 'Fe-Pd-Rh', 'Sm-Ho-Tm', 'La-Pr-Ho', 'La-Tb-W', 'Cd-In-Mo', 'Tb-Ti-Cr', 'Li-Cd-Fe', 'Er-Pu-Ta', 'Sm-Y-U', 'Li-Y-Pu', 'La-Lu-Pu', 'Li-La-Pu', 'Gd-Y-Pu', 'Tb-Zr-Ti', 'Sm-Er-Pu', 'Rb-Mg-Nb', 'Ca-Sc-Mo', 'Re-Pd-Pt', 'Fe-Os-Ru', 'Tl-V-In', 'Dy-Lu-Mo', 'Cu-Ni-Os', 'Sc-Ta-Ti', 'Tb-Sm-Gd', 'Li-La-V', 'Sm-Th-Ta', 'Pr-Nd-Y', 'Ta-Cu-W', 'Re-Hg-Ir', 'Dy-Y-Ta', 'Bi-Sb-Pb', 'Pm-Tm-Lu', 'Nd-Lu-Ta', 'Ca-Lu-V', 'Ce-Pr-Hf', 'Pm-Dy-Lu', 'Y-U-Nb', 'Fe-Cu-Os', 'Tl-Si-Pb', 'Y-Th-Ti', 'Sc-Nb-W', 'Si-Bi-Sb', 'Tb-Th-V', 'Cr-Cu-Pd', 'Yb-Ti-Cr', 'Sm-Ta-V', 'Li-La-Ti', 'Tm-Lu-Mo', 'Li-Er-Zr', 'Dy-Er-Cr', 'Er-Th-Nb', 'Si-Ge-Pb', 'Ce-Er-Mo', 'Gd-Lu-Mo', 'Cu-Ag-Mo', 'Sm-Lu-Nb', 'Tb-Gd-Cr', 'Yb-Pu-W', 'Y-Th-Nb', 'Ca-Eu-Mn', 'Pr-Th-W', 'Al-Cd-Bi', 'Co-Cu-Os', 'Tl-Cd-In', 'Cr-Ni-Pb', 'Lu-Pu-Cr', 'Pr-Lu-Ta', 'Tb-Nd-Sm', 'Sc-Ta-Mo', 'Tb-Th-Ti', 'Li-Ti-Cr', 'Zn-Ga-Bi', 'Dy-Pu-Mo', 'Be-In-Ge', 'Yb-Y-Mo', 'Tl-Cd-Sn', 'Cs-Rb-V', 'Y-Er-W', 'Nd-Pu-Ta', 'Li-Sm-Pu', 'Zn-In-Ga', 'Tl-Si-Ag', 'Ca-Tm-Pu', 'Pr-Tm-Cr', 'Ga-Si-Pb', 'Na-Hf-Ta', 'Rb-Mg-V', 'Dy-Pu-Zr', 'Ce-Ho-Mo', 'Er-Sc-Ta', 'Ba-Sm-Mo', 'Dy-Y-Ho', 'Li-Pm-Er', 'Re-Ni-Pd', 'Li-Ce-Ho', 'Cu-Tc-Rh', 'U-Ta-Ti', 'La-Nb-V', 'Pm-Dy-Ho', 'Zn-Cd-B', 'Ca-Pm-Lu', 'Na-Ti-Nb', 'Dy-Ti-V', 'Ca-Tb-Nd', 'Tb-Lu-Cr', 'Li-Mg-V', 'Cr-Cu-Au', 'Li-Pm-Pr', 'Sr-Ca-Nd', 'Ce-Tm-V', 'Fe-Ag-Pb', 'Sm-Dy-Th', 'Pm-Sm-Tm', 'La-Sc-Nb', 'Cu-Pd-Rh', 'Pr-Gd-Th', 'Ce-Y-Er', 'Hf-Zr-Nb', 'Gd-Y-Lu', 'Y-Sc-V', 'U-Ta-Nb', 'Co-Ni-Ag', 'Pr-Tm-Mo', 'Sr-Ca-Fe', 'Yb-Hf-Ta', 'Ba-Ca-Nd', 'Ta-Tl-Cu', 'Ag-Bi-Au', 'Li-Ho-Mo', 'Co-Ni-Pb', 'Nd-Y-Ho', 'La-Er-Sc', 'Yb-U-Ti', 'Gd-Zr-Ti', 'Sm-U-W', 'La-Tm-Mo', 'Li-V-Fe', 'Ti-Nb-V', 'Pr-Ho-Mo', 'La-Pr-Ta', 'Er-Sc-W', 'Eu-Pu-V', 'Tb-Th-Mo', 'Ca-La-Pu', 'Ce-Th-Ta', 'Li-Sm-Nb', 'Sm-Th-U', 'Tb-Nd-Pu', 'La-U-Ti', 'Dy-Pu-Cr', 'Li-Hf-Zr', 'Fe-Cu-Pd', 'Tb-Pr-Nd', 'Th-Sc-Cr', 'Gd-Dy-Pu', 'Cr-Hg-Pb', 'Ga-Hg-B', 'Pm-Ho-Er', 'Yb-U-W', 'La-Sm-Pu', 'Na-Ti-V', 'Al-Zn-Sn', 'Sc-Ti-Nb', 'Cs-Li-Cr', 'Cd-Sn-Ge', 'Gd-Er-Ta', 'Pd-Pt-C', 'Li-Lu-Zr', 'Na-V-Mo', 'Eu-Pu-Mo', 'V-Cr-Hg', 'Pr-Sm-Lu', 'Y-U-Ta', 'Tb-Ce-Cr', 'Pm-Y-Tm', 'Co-Ag-Pb', 'Tb-Nd-Y', 'Pm-Ho-Tm', 'Cs-Pr-Cr', 'Li-Er-Pu', 'Na-Sr-Fe', 'Pm-Pr-Cr', 'Cu-Ru-Pt', 'Yb-Th-Ta', 'Y-Pu-V', 'Sm-Pu-W', 'Be-Al-Ge', 'Sm-Pu-Mo', 'La-Pr-V', 'Nd-V-Cr', 'Y-Ta-Nb', 'Pm-Sm-Dy', 'Eu-Th-Cr', 'Er-Pu-W', 'Al-Ga-Si', 'Re-Ni-Pt', 'La-Pr-Mo', 'Y-Pu-Nb', 'Pr-Y-W', 'Li-Pu-Zr', 'Mg-Mn-V', 'Mg-Ti-Mo', 'Pr-Sm-Er', 'Tb-Er-Lu', 'Ce-Er-Sc', 'Gd-Ho-Zr', 'Ca-La-Ce', 'Hf-U-Ti', 'Ba-Pm-Nd', 'La-Sm-Th', 'La-Sc-Ti', 'Ca-La-Eu', 'Fe-Co-Ni', 'Yb-Eu-U', 'La-Y-U', 'Ni-Pd-Pt', 'Al-In-Si', 'Ca-Tb-Pu', 'Hf-U-Nb', 'Li-Ce-Sm', 'Nd-Dy-W', 'Y-Hf-Sc', 'Sm-Lu-W', 'Gd-Dy-Tm', 'Ni-Ir-Ru', 'Li-Sm-Mo', 'Eu-Y-Sc', 'Li-Pr-Gd', 'Y-Er-Ti', 'Ce-Nd-Er', 'Yb-Y-Er', 'Ho-Tm-V', 'Cu-Os-Rh', 'Ba-Y-Mo', 'Gd-Pu-Zr', 'La-Sc-W', 'Tb-Tm-Ti', 'Ca-Ce-V', 'Re-Ir-Pt', 'Ca-Nd-Ti', 'Dy-Cr-W', 'Tm-Lu-Cr', 'Sm-V-W', 'La-Tb-Ho', 'Er-Sc-Nb', 'Sm-Pu-V', 'Th-Zr-Sc', 'Nd-Ho-Cr', 'Tb-Th-W', 'Sr-Ca-Mn', 'Pr-Y-Cr', 'Zn-Sn-Pb', 'Pr-Gd-Ta', 'Yb-Nd-Y', 'Ce-Gd-Cr', 'Nd-Y-Er', 'La-Nd-Pu', 'Y-Lu-Ta', 'Y-Tm-Mo', 'Li-Sm-Er', 'Yb-Er-Cr', 'Ag-Pd-Pt', 'Tb-Yb-Mo', 'Lu-Cr-W', 'Gd-Sc-Ta', 'Li-Mn-Ni', 'Ce-Mo-W', 'La-Sm-Dy', 'Ca-Pm-Mo', 'Tb-Sm-Lu', 'Hg-Ge-Pb', 'Cr-Fe-Au', 'Ca-Ce-Ti', 'Th-U-V', 'Y-Ti-V', 'Y-U-Ti', 'Ag-Rh-C', 'Th-Zr-Ti', 'Ca-Lu-Pu', 'Pm-Gd-Er', 'Al-Cd-Pb', 'Tl-Zn-Sn', 'Eu-V-Cr', 'Ce-Sm-V', 'Co-Ag-Pt', 'Ba-Fe-Ni', 'Dy-Ho-V', 'Tb-Ce-Y', 'Y-Ta-Ti', 'La-Nd-W', 'Pr-Nd-U', 'Sr-Ca-Y', 'Be-Zn-In', 'Ag-Pt-Rh', 'Yb-Tm-Ti', 'Th-Ti-Cr', 'Ho-Th-Mo', 'Li-Ta-Mo', 'Gd-Y-Mo', 'Y-Er-Pu', 'Pm-Pr-Ho', 'Y-Lu-Th', 'Fe-Co-Rh', 'Re-Ag-Ir', 'Ba-Nd-Mo', 'Y-Nb-W', 'Nb-Bi-Mo', 'Tl-In-Si', 'Dy-Lu-Zr', 'Y-Pu-W', 'Cs-Rb-Nb', 'Ce-Pr-Ti', 'Ce-Pu-Ta', 'Li-Pr-Tm', 'Nb-Tl-Cu', 'Ho-Pu-Zr', 'Ca-Yb-Y', 'Ca-Pm-Y', 'Co-Pd-Pt', 'Yb-Tm-V', 'Sm-Y-Cr', 'Fe-Ir-C', 'Pr-Y-Mo', 'Yb-Dy-Mo', 'Gd-Th-W', 'Y-Ti-Nb', 'K-Li-V', 'Gd-Zr-Sc', 'La-Mn-Fe', 'La-Th-Ti', 'Sm-Gd-Cr', 'Pu-Ta-Nb', 'Ce-Lu-V', 'Ce-Nd-Tm', 'Al-Ga-Hg', 'Yb-Ta-Mo', 'Nd-V-Mo', 'La-Mo-W', 'Pr-Nd-Sm', 'Tm-Cr-Mo', 'Pr-V-Mo', 'Li-Gd-Cr', 'Pm-V-Mo', 'La-Er-Ta', 'Sm-Gd-Tm', 'Pr-Er-Pu', 'Pr-Y-Ti', 'Co-Re-Hg', 'Ni-Os-Pt', 'Yb-Sc-Ta', 'Pr-U-V', 'Rb-Ti-Cr', 'Sc-V-Mo', 'Tb-Y-Mo', 'Nd-Tm-Pu', 'Ca-Fe-Co', 'Ba-La-Eu', 'Co-Re-Pt', 'Co-Re-Rh', 'Er-Lu-Pu', 'Ce-Tm-Ti', 'Yb-Gd-V', 'Li-La-Cr', 'Eu-Th-W', 'Ba-Pr-Y', 'Y-Pu-Mo', 'La-Tb-Th', 'Yb-Ho-Th', 'Pm-Dy-Y', 'Y-Tm-Cr', 'Cr-Cd-Fe', 'Ce-Sm-Th', 'Hg-Os-Ru', 'U-V-Cr', 'Rb-Li-Mo', 'Ce-Pr-Pu', 'Pr-Ho-W', 'Li-Ce-Y', 'Cr-Pd-W', 'Li-Gd-Lu', 'Y-Hf-Th', 'Dy-V-Mo', 'La-Pm-Dy', 'Fe-Ni-Ru', 'Zn-Ga-Ge', 'Cr-Ag-Pb', 'Li-Tm-Pu', 'K-Ti-Cr', 'Ce-Eu-V', 'Tc-Rh-C', 'La-Y-Sc', 'Eu-Th-Sc', 'Ca-Ce-Mo', 'K-Hf-Ta', 'Pr-Gd-V', 'La-U-W', 'Ce-Pr-U', 'Ce-Sm-Cr', 'Cr-Ni-Ag', 'Th-Nb-V', 'Pm-Nd-Dy', 'Er-Lu-Zr', 'Nd-Er-Th', 'Li-Tb-Cr', 'Sn-Bi-B', 'Y-Pu-Zr', 'Gd-Er-W', 'Ho-Th-W', 'Li-Zr-Nb', 'Pr-Sm-Cr', 'Tl-V-Ag', 'Y-Tm-Pu', 'Y-Th-Cr', 'Lu-Pu-Ta', 'Ce-Gd-Sc', 'V-In-Fe', 'Ag-Ge-Pb', 'Li-Pr-Y', 'Yb-Tm-Th', 'Bi-B-Pb', 'Li-Mn-V', 'Pr-Er-Tm', 'Ho-Tm-Th', 'Si-Bi-Au', 'Fe-Co-Ir', 'K-Zr-Ta', 'Re-Os-Ru', 'Er-Pu-Cr', 'Sm-Tm-Pu', 'Li-Gd-Pu', 'Th-Sc-U', 'Tm-V-Cr', 'Y-Hf-U', 'Sm-Er-V', 'Al-Hg-Bi', 'Li-Sm-Tm', 'Sc-Nb-V', 'Y-Ho-W', 'Re-Ni-Ir', 'Yb-Er-W', 'Yb-Y-Pu', 'Ce-Hf-U', 'Al-Zn-Ga', 'Tl-Zn-Pb', 'Ge-Bi-Au', 'Ce-Pr-Lu', 'Pr-Th-Ti', 'Ca-Tb-Tm', 'Li-Tb-Gd', 'Tl-Ga-Ge', 'Tb-Ce-Tm', 'Y-Pu-Ta', 'Li-Lu-Ta', 'Rb-Li-Nb', 'Pr-Dy-Lu', 'Re-Bi-Sb', 'Sm-Ta-W', 'La-Lu-Mo', 'Ta-Ti-Nb', 'Ce-Y-Ti', 'Ho-Lu-Th', 'Tb-Tm-Mo', 'Dy-Ti-Mo', 'Er-Zr-Ti', 'Cr-Cd-Bi', 'Tb-Tm-Cr', 'Tb-Ho-Zr', 'Ce-Nd-Sm', 'Ho-Zr-Ta', 'K-Ti-V', 'Yb-Y-Hf', 'Cr-Cu-W', 'Eu-Th-U', 'Dy-V-W', 'Yb-Lu-W', 'Ir-Pt-Rh', 'La-Y-Ta', 'Yb-Y-U', 'Na-V-Cr', 'Ce-U-W', 'Tb-Yb-Ti', 'Th-V-Mo', 'Rb-Ti-V', 'Tb-Gd-Y', 'Pm-Ho-V', 'Pu-Zr-Ti', 'Na-Sr-V', 'La-Th-W', 'Fe-Ni-Pd', 'Tb-Yb-Th', 'Tb-Pu-W', 'Tm-Cr-W', 'Al-Si-Ge', 'Ce-Y-V', 'Ce-Nd-Ho', 'K-Nb-Mo', 'Sn-Bi-Pb', 'Li-Lu-Pu', 'Ho-Er-Ta', 'Tm-Th-Mo', 'Ta-V-In', 'Dy-Ti-W', 'Er-Sc-Mo', 'Ni-Pd-Ru', 'Ta-Nb-Bi', 'Pr-Sm-Dy', 'Pm-Y-Mo', 'Li-Gd-V', 'Tb-Mo-W', 'Ca-Ce-Lu', 'Pm-Y-Lu', 'Sm-Gd-Y', 'Gd-Dy-Y', 'Th-Zr-Ta', 'Yb-Er-V', 'Nd-Mo-W', 'Yb-Mn-V', 'Lu-Ti-Mo', 'Dy-Lu-Th', 'Ba-Nd-Sc', 'K-Li-Ta', 'Pr-Y-Er', 'Nd-Gd-Cr', 'La-Pu-Mo', 'Y-Ho-Th', 'Ho-Cr-Mo', 'Gd-Y-Ti']
    };
})($ || ($ = {}));
//visavis/nonformer/nonformer.ts
;
"use strict";
var $;
(function ($) {
    const mask = 0b11111_11111_11111;
    function $mol_coord_pack(high, low) {
        return (high << 17 >>> 2) | (low & mask);
    }
    $.$mol_coord_pack = $mol_coord_pack;
    function $mol_coord_high(pack) {
        return pack << 2 >> 17;
    }
    $.$mol_coord_high = $mol_coord_high;
    function $mol_coord_low(pack) {
        return (pack << 17) >> 17;
    }
    $.$mol_coord_low = $mol_coord_low;
})($ || ($ = {}));
//mol/coord/coord.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("visavis/matrix/matrix.view.css", "rect.nonformer {\n\tfill:url(#nonformer) !important;\n\tfill-opacity:1.0 !important;\n}\n\nrect.visited{\n\tfill:#0f0 !important;\n\tfill-opacity:1.0 !important;\n}\n\nrect.bgmatrix {\n\tfill:#f6f6f6;\n}\n\nrect.bgmatrix.hidden {\n\tfill:#fff;\n}\n\nline {\n\tstroke:#fff;\n}\n\ntext.active {\n\tfill:#f00;\n\tfont-weight:bold;\n}\n");
})($ || ($ = {}));
//visavis/matrix/-css/matrix.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($.$visavis_matrix, {
            flex: {
                basis: rem(60),
                shrink: 0,
            },
            Side_right: {
                position: 'absolute',
                top: per(50),
                right: $mol_gap.space,
                transform: 'translateY(-50%)'
            },
            Heatmap_color: {
                width: rem(1),
                height: rem(1),
                margin: px(1),
            },
            Root: {
                margin: 'auto',
            },
            Order_switch: {
                flex: {
                    shrink: 1,
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/matrix/matrix.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $visavis_matrix extends $.$visavis_matrix {
            data() {
                return this.file();
            }
            nodes() {
                return this.data().payload.nodes;
            }
            links() {
                return this.data().payload.links.sort((a, b) => a.value - b.value);
            }
            links_value_min() {
                return this.links()[0].value;
            }
            links_value_max() {
                return this.links().slice(-1)[0].value;
            }
            heatmap() {
                return this.links().reduce((heatmap, link) => {
                    if (!heatmap && Math.floor(link.value) !== link.value)
                        return true;
                    else if (link.cmp)
                        return false;
                    return heatmap;
                }, false);
            }
            plot_body() {
                return [
                    this.Root(),
                    ...this.heatmap() ? [this.Side_right()] : [],
                ];
            }
            order() {
                return $lib_d3.all().range(95).sort((a, b) => this.nodes()[a][this.order_current()] - this.nodes()[b][this.order_current()]);
            }
            matrix() {
                const matrix = this.nodes().map((node, i) => $lib_d3.all().range(95).map((j) => ({ x: j, y: i, z: 0, cmt: '', cmp: 0, nonformer: false })));
                for (const link of this.links()) {
                    matrix[link.source][link.target].z += link.value;
                    matrix[link.target][link.source].z += link.value;
                    matrix[link.source][link.target].cmt = link.cmt;
                    matrix[link.target][link.source].cmt = link.cmt;
                    matrix[link.source][link.target].cmp = link.cmp || 0;
                    matrix[link.target][link.source].cmp = link.cmp || 0;
                }
                if (this.nonformers()) {
                    for (const item of $visavis_nonformer_pd_bin) {
                        matrix[item[0]][item[1]].z = 1;
                        matrix[item[1]][item[0]].z = 1;
                        matrix[item[0]][item[1]].nonformer = true;
                        matrix[item[1]][item[0]].nonformer = true;
                    }
                }
                return matrix;
            }
            size() {
                const rect = this.Plot().Body().view_rect();
                if (!rect)
                    return NaN;
                return Math.min(rect.width, rect.height) - this.plot_padding() - this.axis_width();
            }
            opacity_scale() {
                return $lib_d3.all().scaleLinear().domain([this.links_value_min(), this.links_value_max()]).range([0.2, 1]).clamp(true);
            }
            opacity(index) {
                return this.heatmap() ? 1 : this.opacity_scale()(index);
            }
            color_heatmap() {
                return $lib_d3.all().scaleLinear().domain($lib_d3.all().range(0, 1, 1.0 / (this.heatmap_colors().length - 1))).range(this.heatmap_colors());
            }
            heatmap_color(index) {
                return this.heatmap_colors()[index];
            }
            heatmap_color_list() {
                return this.heatmap_colors().map((_, index) => this.Heatmap_color(index));
            }
            color_heatmap_scale() {
                return $lib_d3.all().scaleLinear().domain([this.links_value_min(), this.links_value_max()]).range([0, 1]);
            }
            color(index, cmp) {
                if (this.heatmap())
                    return cmp ? this.colorset()[1] : this.color_heatmap()(this.color_heatmap_scale()(index));
                return this.colorset()[cmp] || '#ccc';
            }
            range() {
                return $lib_d3.all().scaleBand().domain(this.order()).range([0, this.size()]);
            }
            svg_title_text(cell) {
                if (!cell.cmt)
                    return '';
                const text = `${cell.cmt}: ${cell.z}`;
                const title = !this.heatmap()
                    ? `${text} ${cell.z === 1 ? 'entry' : 'entries'}`
                    : text;
                return title;
            }
            cell_hovered(cell) {
                $lib_d3.all().selectAll('.row text').classed('active', (_, index) => cell?.y === index);
                $lib_d3.all().selectAll('.column text').classed('active', (_, index) => cell?.x === index);
            }
            cell_selected(id, next) {
                $mol_wire_solid();
                return next ?? false;
            }
            cell_click(cell) {
                const coords = [$mol_coord_pack(cell.x, cell.y), $mol_coord_pack(cell.y, cell.x)];
                coords.forEach(coord => this.cell_selected(coord, !this.cell_selected(coord)));
                $lib_d3.all().selectAll('.cell').classed('visited', (item) => this.cell_selected($mol_coord_pack(item.x, item.y)));
            }
            draw_cells(node, row) {
                $lib_d3.all().select(node)
                    .selectAll('.cell')
                    .data(row.filter((d) => d.z))
                    .join('rect')
                    .attr('class', (d) => d.nonformer ? 'nonformer cell' : 'cell')
                    .attr('id', (d) => 'c_' + this.nodes()[d.x].num.toString() + '_' + this.nodes()[d.y].num.toString())
                    .attr('x', (d) => this.range()(d.x))
                    .attr('width', this.range().bandwidth())
                    .attr('height', this.range().bandwidth())
                    .style('fill-opacity', (d) => this.opacity(d.z))
                    .style('fill', (d) => this.color(d.z, d.cmp))
                    .on('mouseover', (event, cell) => this.cell_hovered(cell))
                    .on('mouseout', (event) => this.cell_hovered(null))
                    .on('click', (event, cell) => this.cell_click(cell))
                    .append('svg:title').text((cell) => this.svg_title_text(cell));
            }
            draw() {
                if (Number.isNaN(this.size()))
                    return;
                const svg = $lib_d3.all().select('[visavis_matrix_root]')
                    .attr('width', this.size() + this.axis_width())
                    .attr('height', this.size() + this.axis_width())
                    .style('font-size', this.range().bandwidth())
                    .style('letter-spacing', '1px');
                const group = svg[svg.select('g').empty() ? 'append' : 'select']('g')
                    .attr('transform', `translate(${this.axis_width()},${this.axis_width()})`);
                group.html("<defs><pattern id='nonformer' patternUnits='userSpaceOnUse' width='4' height='4'><path d='M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2' style='stroke:#ddd;stroke-width:1' /></pattern></defs>");
                group.append('rect')
                    .attr('class', 'bgmatrix')
                    .attr('width', this.size())
                    .attr('height', this.size());
                const draw_cells = (node, row) => this.draw_cells(node, row);
                const row = group.selectAll('.row')
                    .data(this.matrix())
                    .join('g')
                    .attr('class', 'row')
                    .attr('transform', (d, i) => 'translate(0,' + this.range()(i) + ')')
                    .each(function (row) { draw_cells(this, row); });
                row.append('line')
                    .attr('x2', this.size());
                row.append('text')
                    .attr('x', -6)
                    .attr('y', this.range().bandwidth() / 2)
                    .attr('dy', '.32em')
                    .attr('text-anchor', 'end')
                    .text((d, i) => this.nodes()[i].name);
                const column = group.selectAll('.column')
                    .data(this.matrix())
                    .join('g')
                    .attr('class', 'column')
                    .attr('transform', (d, i) => 'translate(' + this.range()(i) + ')rotate(-90)');
                column.append('line')
                    .attr('x1', -this.size());
                column.append('text')
                    .attr('x', 6)
                    .attr('y', this.range().bandwidth() / 2)
                    .attr('dy', '.32em')
                    .attr('text-anchor', 'start')
                    .text((d, i) => this.nodes()[i].name);
            }
        }
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "data", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "links", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "heatmap", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "order", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "matrix", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "size", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "opacity_scale", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "color_heatmap", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "color_heatmap_scale", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "range", null);
        __decorate([
            $mol_mem_key
        ], $visavis_matrix.prototype, "cell_selected", null);
        __decorate([
            $mol_action
        ], $visavis_matrix.prototype, "cell_click", null);
        __decorate([
            $mol_mem
        ], $visavis_matrix.prototype, "draw", null);
        $$.$visavis_matrix = $visavis_matrix;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/matrix/matrix.view.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_app extends $mol_book2 {
        plugins() {
            return [
                this.Theme()
            ];
        }
        pages() {
            return [
                this.Menu(),
                this.Matrix("title")
            ];
        }
        Theme() {
            const obj = new this.$.$mol_theme_auto();
            return obj;
        }
        Source() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/PavelZubkov/visavis";
            return obj;
        }
        Lights() {
            const obj = new this.$.$mol_lights_toggle();
            return obj;
        }
        files_open(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Upload() {
            const obj = new this.$.$visavis_upload();
            obj.accept = () => "";
            obj.files = (next) => this.files_open(next);
            return obj;
        }
        file_title(id) {
            return "";
        }
        File(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                file: this.file_title(id)
            });
            obj.title = () => this.file_title(id);
            return obj;
        }
        history_rows() {
            return [
                this.File("0")
            ];
        }
        History() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.history_rows();
            return obj;
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => "Vis-a-vis";
            obj.tools = () => [
                this.Source(),
                this.Lights()
            ];
            obj.body = () => [
                this.Upload(),
                this.History()
            ];
            return obj;
        }
        file_current_title() {
            return "";
        }
        file_current() {
            const obj = new this.$.Object();
            return obj;
        }
        Matrix(id) {
            const obj = new this.$.$visavis_matrix();
            obj.title = () => this.file_current_title();
            obj.file = () => this.file_current();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Theme", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Source", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Lights", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "files_open", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Upload", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "File", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "History", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "file_current", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Matrix", null);
    $.$visavis_app = $visavis_app;
})($ || ($ = {}));
//visavis/app/-view.tree/app.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, px } = $mol_style_unit;
        $mol_style_define($.$visavis_app, {
            Menu: {
                flex: {
                    basis: rem(25),
                    shrink: 0,
                },
            },
            Matrix: {
                Plot: {
                    flex: {
                        basis: rem(60),
                        shrink: 0,
                    },
                },
                Setup: {
                    flex: {
                        basis: rem(25),
                        shrink: 0,
                    }
                }
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/app/app.view.css.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $visavis_app extends $.$visavis_app {
            async load_file(blob) {
                return new Promise((done, fail) => {
                    const reader = new FileReader;
                    reader.onerror = fail;
                    reader.onload = event => done(event.target.result);
                    reader.readAsText(blob);
                });
            }
            files_open(next) {
                if (next.length === 0)
                    return null;
                const json = $mol_wire_sync(this).load_file(next[0]);
                const file = { title: next[0].name, data: JSON.parse(json) };
                this.history([...this.history().filter(obj => obj.title !== file.title), file]);
            }
            history(next) {
                return this.$.$mol_state_local.value(`${this}.history()`, next) ?? [];
            }
            file_title(id) {
                return this.history()[id].title;
            }
            history_rows() {
                return this.history().map((_, index) => this.File(index)).reverse();
            }
            file_current_title() {
                return this.$.$mol_state_arg.value('file') ?? '';
            }
            file_current() {
                const found = this.history().find(obj => obj.title === this.file_current_title());
                return found?.data;
            }
            pages() {
                return [
                    this.Menu(),
                    ...this.file_current()?.use_visavis_type === 'matrix' ? this.Matrix(this.file_current_title()).pages() : [],
                ];
            }
        }
        __decorate([
            $mol_action
        ], $visavis_app.prototype, "files_open", null);
        __decorate([
            $mol_mem
        ], $visavis_app.prototype, "history", null);
        $$.$visavis_app = $visavis_app;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/app/app.view.ts
;
export default $
//# sourceMappingURL=node.esm.js.map
