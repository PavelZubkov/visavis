"use strict";
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;
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
                if (this.data[i])
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
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
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
        named.add(func);
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
//mol/type/tail/tail.ts
;
"use strict";
//mol/type/foot/foot.ts
;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if (error instanceof Promise)
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
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
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
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
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto() instanceof $mol_wire_task) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
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
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
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
})($ || ($ = {}));
//mol/wire/atom/atom.ts
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
    class $mol_span extends $mol_object2 {
        uri;
        source;
        row;
        col;
        length;
        constructor(uri, source, row, col, length) {
            super();
            this.uri = uri;
            this.source = source;
            this.row = row;
            this.col = col;
            this.length = length;
            this[Symbol.toStringTag] = `${this.uri}#${this.row}:${this.col}/${this.length}`;
        }
        static unknown = $mol_span.begin('?');
        static begin(uri, source = '') {
            return new $mol_span(uri, source, 1, 1, 0);
        }
        static end(uri, source) {
            return new $mol_span(uri, source, 1, source.length + 1, length);
        }
        static entire(uri, source) {
            return new $mol_span(uri, source, 1, 1, source.length);
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return {
                uri: this.uri,
                row: this.row,
                col: this.col,
                length: this.length
            };
        }
        error(message, Class = Error) {
            return new Class(`${message}${this}`);
        }
        span(row, col, length) {
            return new $mol_span(this.uri, this.source, row, col, length);
        }
        after(length = 0) {
            return new $mol_span(this.uri, this.source, this.row, this.col + this.length, length);
        }
        slice(begin, end = -1) {
            let len = this.length;
            if (begin < 0)
                begin += len;
            if (end < 0)
                end += len;
            if (begin < 0 || begin > len)
                this.$.$mol_fail(`Begin value '${begin}' out of range ${this}`);
            if (end < 0 || end > len)
                this.$.$mol_fail(`End value '${end}' out of range ${this}`);
            if (end < begin)
                this.$.$mol_fail(`End value '${end}' can't be less than begin value ${this}`);
            return this.span(this.row, this.col + begin, end - begin);
        }
    }
    $.$mol_span = $mol_span;
})($ || ($ = {}));
//mol/span/span.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_to_string(tree) {
        let output = [];
        function dump(tree, prefix = '') {
            if (tree.type.length) {
                if (!prefix.length) {
                    prefix = "\t";
                }
                output.push(tree.type);
                if (tree.kids.length == 1) {
                    output.push(' ');
                    dump(tree.kids[0], prefix);
                    return;
                }
                output.push("\n");
            }
            else if (tree.value.length || prefix.length) {
                output.push("\\" + tree.value + "\n");
            }
            for (const kid of tree.kids) {
                output.push(prefix);
                dump(kid, prefix + "\t");
            }
        }
        dump(tree);
        return output.join('');
    }
    $.$mol_tree2_to_string = $mol_tree2_to_string;
})($ || ($ = {}));
//mol/tree2/to/string/string.ts
;
"use strict";
var $;
(function ($) {
    class $mol_tree2 extends Object {
        type;
        value;
        kids;
        span;
        constructor(type, value, kids, span) {
            super();
            this.type = type;
            this.value = value;
            this.kids = kids;
            this.span = span;
            this[Symbol.toStringTag] = type || '\\' + value;
        }
        static list(kids, span = $mol_span.unknown) {
            return new $mol_tree2('', '', kids, span);
        }
        list(kids) {
            return $mol_tree2.list(kids, this.span);
        }
        static data(value, kids = [], span = $mol_span.unknown) {
            const chunks = value.split('\n');
            if (chunks.length > 1) {
                let kid_span = span.span(span.row, span.col, 0);
                const data = chunks.map(chunk => {
                    kid_span = kid_span.after(chunk.length);
                    return new $mol_tree2('', chunk, [], kid_span);
                });
                kids = [...data, ...kids];
                value = '';
            }
            return new $mol_tree2('', value, kids, span);
        }
        data(value, kids = []) {
            return $mol_tree2.data(value, kids, this.span);
        }
        static struct(type, kids = [], span = $mol_span.unknown) {
            if (/[ \n\t\\]/.test(type)) {
                $$.$mol_fail(span.error(`Wrong type ${JSON.stringify(type)}`));
            }
            return new $mol_tree2(type, '', kids, span);
        }
        struct(type, kids = []) {
            return $mol_tree2.struct(type, kids, this.span);
        }
        clone(kids, span = this.span) {
            return new $mol_tree2(this.type, this.value, kids, span);
        }
        text() {
            var values = [];
            for (var kid of this.kids) {
                if (kid.type)
                    continue;
                values.push(kid.value);
            }
            return this.value + values.join('\n');
        }
        static fromString(str, uri = 'unknown') {
            return $$.$mol_tree2_from_string(str, uri);
        }
        toString() {
            return $$.$mol_tree2_to_string(this);
        }
        insert(value, ...path) {
            if (path.length === 0)
                return value;
            const type = path[0];
            if (typeof type === 'string') {
                let replaced = false;
                const sub = this.kids.map((item, index) => {
                    if (item.type !== type)
                        return item;
                    replaced = true;
                    return item.insert(value, ...path.slice(1));
                }).filter(Boolean);
                if (!replaced && value) {
                    sub.push(this.struct(type, []).insert(value, ...path.slice(1)));
                }
                return this.clone(sub);
            }
            else if (typeof type === 'number') {
                const sub = this.kids.slice();
                sub[type] = (sub[type] || this.list([]))
                    .insert(value, ...path.slice(1));
                return this.clone(sub.filter(Boolean));
            }
            else {
                const kids = ((this.kids.length === 0) ? [this.list([])] : this.kids)
                    .map(item => item.insert(value, ...path.slice(1)))
                    .filter(Boolean);
                return this.clone(kids);
            }
        }
        select(...path) {
            let next = [this];
            for (const type of path) {
                if (!next.length)
                    break;
                const prev = next;
                next = [];
                for (var item of prev) {
                    switch (typeof (type)) {
                        case 'string':
                            for (var child of item.kids) {
                                if (child.type == type) {
                                    next.push(child);
                                }
                            }
                            break;
                        case 'number':
                            if (type < item.kids.length)
                                next.push(item.kids[type]);
                            break;
                        default: next.push(...item.kids);
                    }
                }
            }
            return this.list(next);
        }
        filter(path, value) {
            const sub = this.kids.filter(item => {
                var found = item.select(...path);
                if (value === undefined) {
                    return Boolean(found.kids.length);
                }
                else {
                    return found.kids.some(child => child.value == value);
                }
            });
            return this.clone(sub);
        }
        hack(belt, context = {}) {
            return [].concat(...this.kids.map(child => {
                let handle = belt[child.type] || belt[''];
                if (!handle || handle === Object.prototype[child.type]) {
                    handle = (input, belt, context) => [
                        input.clone(input.hack(belt, context), context.span)
                    ];
                }
                try {
                    return handle(child, belt, context);
                }
                catch (error) {
                    error.message += `\n${child.clone([])}${child.span}`;
                    $mol_fail_hidden(error);
                }
            }));
        }
        error(message, Class = Error) {
            return this.span.error(`${message}\n${this.clone([])}`, Class);
        }
    }
    $.$mol_tree2 = $mol_tree2;
    class $mol_tree2_empty extends $mol_tree2 {
        constructor() {
            super('', '', [], $mol_span.unknown);
        }
    }
    $.$mol_tree2_empty = $mol_tree2_empty;
})($ || ($ = {}));
//mol/tree2/tree2.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_syntax extends SyntaxError {
        reason;
        line;
        span;
        constructor(reason, line, span) {
            super(`${reason}\n${span}\n${line.substring(0, span.col - 1).replace(/\S/g, ' ')}${''.padEnd(span.length, '!')}\n${line}`);
            this.reason = reason;
            this.line = line;
            this.span = span;
        }
    }
    $.$mol_error_syntax = $mol_error_syntax;
})($ || ($ = {}));
//mol/error/syntax/syntax.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_string(str, uri = '?') {
        const span = $mol_span.entire(uri, str);
        var root = $mol_tree2.list([], span);
        var stack = [root];
        var pos = 0, row = 0, min_indent = 0;
        while (str.length > pos) {
            var indent = 0;
            var line_start = pos;
            row++;
            while (str.length > pos && str[pos] == '\t') {
                indent++;
                pos++;
            }
            if (!root.kids.length) {
                min_indent = indent;
            }
            indent -= min_indent;
            if (indent < 0 || indent >= stack.length) {
                const sp = span.span(row, 1, pos - line_start);
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                if (indent < 0) {
                    if (str.length > pos) {
                        this.$mol_fail(new this.$mol_error_syntax(`Too few tabs`, str.substring(line_start, pos), sp));
                    }
                }
                else {
                    this.$mol_fail(new this.$mol_error_syntax(`Too many tabs`, str.substring(line_start, pos), sp));
                }
            }
            stack.length = indent + 1;
            var parent = stack[indent];
            while (str.length > pos && str[pos] != '\\' && str[pos] != '\n') {
                var error_start = pos;
                while (str.length > pos && (str[pos] == ' ' || str[pos] == '\t')) {
                    pos++;
                }
                if (pos > error_start) {
                    let line_end = str.indexOf('\n', pos);
                    if (line_end === -1)
                        line_end = str.length;
                    const sp = span.span(row, error_start - line_start, pos - error_start + 1);
                    this.$mol_fail(new this.$mol_error_syntax(`Wrong nodes separator`, str.substring(line_start, line_end), sp));
                }
                var type_start = pos;
                while (str.length > pos &&
                    str[pos] != '\\' &&
                    str[pos] != ' ' &&
                    str[pos] != '\t' &&
                    str[pos] != '\n') {
                    pos++;
                }
                if (pos > type_start) {
                    let next = new $mol_tree2(str.slice(type_start, pos), '', [], span.span(row, type_start - line_start + 1, pos - type_start));
                    const parent_kids = parent.kids;
                    parent_kids.push(next);
                    parent = next;
                }
                if (str.length > pos && str[pos] == ' ') {
                    pos++;
                }
            }
            if (str.length > pos && str[pos] == '\\') {
                var data_start = pos;
                while (str.length > pos && str[pos] != '\n') {
                    pos++;
                }
                let next = new $mol_tree2('', str.slice(data_start + 1, pos), [], span.span(row, data_start - line_start + 2, pos - data_start - 1));
                const parent_kids = parent.kids;
                parent_kids.push(next);
                parent = next;
            }
            if (str.length === pos && stack.length > 0) {
                const sp = span.span(row, pos - line_start + 1, 1);
                this.$mol_fail(new this.$mol_error_syntax(`Unexpected EOF, LF required`, str.substring(line_start, str.length), sp));
            }
            stack.push(parent);
            pos++;
        }
        return root;
    }
    $.$mol_tree2_from_string = $mol_tree2_from_string;
})($ || ($ = {}));
//mol/tree2/from/string/string.ts
;
"use strict";
var $;
(function ($) {
    function $mol_tree2_from_json(json, span = $mol_span.unknown) {
        if (typeof json === 'boolean' || typeof json === 'number' || json === null) {
            return new $mol_tree2(String(json), '', [], span);
        }
        if (typeof json === 'string') {
            return $mol_tree2.data(json, [], span);
        }
        if (Array.isArray(json)) {
            const sub = json.map(json => $mol_tree2_from_json(json, span));
            return new $mol_tree2('/', '', sub, span);
        }
        if (ArrayBuffer.isView(json)) {
            const buf = new Uint8Array(json.buffer, json.byteOffset, json.byteLength);
            return $mol_tree2.data(String.fromCharCode(...buf), [], span);
        }
        if (json instanceof Date) {
            return new $mol_tree2('', json.toISOString(), [], span);
        }
        if (typeof json.toJSON === 'function') {
            return $mol_tree2_from_json(json.toJSON());
        }
        if (json instanceof Error) {
            const { name, message, stack } = json;
            json = { ...json, name, message, stack };
        }
        const sub = [];
        for (var key in json) {
            const val = json[key];
            if (val === undefined)
                continue;
            const subsub = $mol_tree2_from_json(val, span);
            if (/^[^\n\t\\ ]+$/.test(key)) {
                sub.push(new $mol_tree2(key, '', [subsub], span));
            }
            else {
                sub.push($mol_tree2.data(key, [subsub], span));
            }
        }
        return new $mol_tree2('*', '', sub, span);
    }
    $.$mol_tree2_from_json = $mol_tree2_from_json;
})($ || ($ = {}));
//mol/tree2/from/json/json.ts
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
            let tree = this.$mol_tree2_from_json(event);
            tree = tree.struct(type, tree.kids);
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
            $mol_fail(new Error('Atom is required for watching'));
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
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_satur: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n:where([mol_theme]) {\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 20% ), calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, calc( 40% - 40% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 30% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
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
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
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
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
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
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
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
                this.dom_node().scrollIntoView({ block: 'start', inline: 'end' });
                this.focused(true);
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
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
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n    justify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .75;\n\t}\n\t80% {\n\t\topacity: .25;\n\t}\n\tto {\n\t\topacity: .75;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tbackground-size: 200vmax 200vmax;\n\tanimation: mol_view_wait 1s steps( 10, end ) infinite;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
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
//mol/type/error/error.ts
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
    class $mol_book2 extends $mol_scroll {
        menu_title() {
            return "";
        }
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
        Gap(id) {
            const obj = new this.$.$mol_view();
            obj.title = () => "";
            return obj;
        }
        pages() {
            return [];
        }
    }
    __decorate([
        $mol_mem
    ], $mol_book2.prototype, "Placeholder", null);
    __decorate([
        $mol_mem_key
    ], $mol_book2.prototype, "Gap", null);
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
            menu_title() {
                return this.pages()[0]?.title() || this.title();
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
    $mol_style_attach("mol/book2/book2.view.css", "[mol_book2] {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\talign-items: stretch;\n\tflex: 1 1 auto;\n\talign-self: stretch;\n\tmargin: 0;\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_line); */\n\t/* transform: translateZ(0); */\n\ttransition: none;\n\toverflow: overlay;\n\tscroll-snap-type: x mandatory;\n\tpadding: 0 1px;\n\tscroll-padding: 0 1px;\n\tgap: 1px;\n}\n\n[mol_book2] > * {\n/* \tflex: none; */\n\tscroll-snap-stop: always;\n\tscroll-snap-align: end;\n\tposition: relative;\n\tmin-height: 100%;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tflex-shrink: 0;\n}\n\n[mol_book2] > *:not(:first-of-type):before {\n\tcontent: '';\n\twidth: 1px;\n\theight: 2rem;\n\ttop: 1rem;\n\tleft: -1px;\n\tposition: absolute;\n\tbackground: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_book2] > *:not(:last-of-type)::after {\n\tcontent: '';\n\twidth: 1px;\n\theight: 2rem;\n\ttop: 1rem;\n\tright: -1px;\n\tposition: absolute;\n\tbackground: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n:where([mol_book2]) > * {\n\tbackground-color: var(--mol_theme_card);\n\t/* box-shadow: 0 0 0 1px var(--mol_theme_back); */\n}\n\n[mol_book2] > [mol_book2] {\n\tdisplay: contents;\n}\n\n[mol_book2] > *:first-child {\n\tscroll-snap-align: start;\n}\n\n[mol_book2] > [mol_view] {\n\ttransform: none; /* prevent content clipping */\n}\n\n[mol_book2_placeholder] {\n\tflex: 1 1 0;\n\tbackground: none;\n}\n\n[mol_book2_gap] {\n\tbackground: none;\n\tflex-grow: 1;\n\tscroll-snap-align: none;\n\tmargin-right: -1px;\n\tbox-shadow: none;\n}\n\n[mol_book2_gap]::before,\n[mol_book2_gap]::after {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/book2/-css/book2.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_speck extends $mol_view {
        attr() {
            return {
                ...super.attr(),
                mol_theme: this.theme()
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
        theme() {
            return "$mol_theme_accent";
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
    $mol_style_attach("mol/layer/layer.css", ":root {\n\t--mol_layer_hover: 1;\n\t--mol_layer_focus: 2;\n\t--mol_layer_speck: 3;\n\t--mol_layer_float: 4;\n\t--mol_layer_popup: 5;\n}\n");
})($ || ($ = {}));
//mol/layer/-css/layer.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/speck/speck.view.css", "[mol_speck] {\n\tfont-size: .625rem;\n\tborder-radius: 1rem;\n\tmargin: -0.5rem -0.25rem;\n\talign-self: flex-start;\n\tmin-height: 1em;\n\tmin-width: .5em;\n\tvertical-align: sub;\n\tpadding: .25em .5em;\n\tposition: absolute;\n\tz-index: var(--mol_layer_speck);\n\ttext-align: center;\n\tline-height: 1;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tuser-select: none;\n}\n");
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
//mol/keyboard/code/code.ts
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
    $mol_style_attach("mol/button/button.view.css", "[mol_button] {\n\tborder: none;\n\tfont: inherit;\n\tdisplay: inline-flex;\n\tflex-shrink: 0;\n\ttext-decoration: inherit;\n\tcursor: inherit;\n\tposition: relative;\n\tbox-sizing: border-box;\n\tword-break: normal;\n\tcursor: default;\n\tuser-select: none;\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_button]:where(:not(:disabled)):hover {\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_button]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n}\n");
})($ || ($ = {}));
//mol/button/-css/button.view.css.ts
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
    $mol_style_attach("mol/button/typed/typed.view.css", "[mol_button_typed] {\n\talign-content: center;\n\talign-items: center;\n\tpadding: var(--mol_gap_text);\n\tborder-radius: var(--mol_gap_round);\n\tgap: var(--mol_gap_space);\n\tuser-select: none;\n\tcursor: pointer;\n}\n\n[mol_button_typed][disabled] {\n\tpointer-events: none;\n}\n\n[mol_button_typed]:hover ,\n[mol_button_typed]:focus {\n\tbackground-color: var(--mol_theme_hover);\n}\n\n[mol_button_typed]:active {\n\tcolor: var(--mol_theme_focus);\n}\n\n");
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
    $mol_style_attach("mol/icon/icon.view.css", "[mol_icon] {\n\tfill: currentColor;\n\tstroke: none;\n\twidth: 1em;\n\theight: 1.5em;\n\tflex: 0 0 auto;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tfilter: drop-shadow(0px 1px 1px var(--mol_theme_back));\n\ttransform-origin: center;\n}\n\n[mol_icon_path] {\n\ttransform-origin: center;\n}\n");
})($ || ($ = {}));
//mol/icon/-css/icon.view.css.ts
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
    $mol_style_attach("mol/button/open/open.view.css", "[mol_button_open_native] {\n\tposition: absolute;\n\tleft: 0;\n\ttop: -100%;\n\twidth: 100%;\n\theight: 200%;\n\tcursor: pointer;\n\topacity: 0;\n}\n");
})($ || ($ = {}));
//mol/button/open/-css/open.view.css.ts
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
//mol/state/arg/arg.ts
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
        static prolog = '';
        static separator = ' ';
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
        },
        ':focus': {
            outline: 'none',
            background: {
                color: $mol_theme.hover,
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
    class $mol_icon_delete extends $mol_icon {
        path() {
            return "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19C6,20.1 6.9,21 8,21H16C17.1,21 18,20.1 18,19V7H6V19Z";
        }
    }
    $.$mol_icon_delete = $mol_icon_delete;
})($ || ($ = {}));
//mol/icon/delete/-view.tree/delete.view.tree.ts
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
    $mol_style_attach("mol/list/list.view.css", "[mol_list] {\n\twill-change: contents;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-shrink: 0;\n\tmax-width: 100%;\n\t/* display: flex;\n\talign-items: stretch;\n\talign-content: stretch; */\n\ttransition: none;\n\tmin-height: .5rem;\n}\n\n[mol_list_gap_before] ,\n[mol_list_gap_after] {\n\tdisplay: block !important;\n\tflex: none;\n\ttransition: none;\n\toverflow-anchor: none;\n}\n");
})($ || ($ = {}));
//mol/list/-css/list.view.css.ts
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
    $mol_style_attach("mol/check/check.css", "[mol_check] {\n\tflex: 0 0 auto;\n\tjustify-content: flex-start;\n\talign-content: center;\n\talign-items: flex-start;\n\tborder: none;\n\tfont-weight: inherit;\n\tbox-shadow: none;\n\ttext-align: left;\n\tdisplay: inline-flex;\n\tflex-wrap: nowrap;\n}\n\n[mol_check_title] {\n\tflex-shrink: 1;\n}\n\n[mol_check_checked] {\n\tcolor: var(--mol_theme_current);\n}\n");
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
    $mol_style_attach("mol/check/list/list.view.css", "[mol_check_list] {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tflex: 1 1 auto;\n\tborder-radius: var(--mol_gap_round);\n\tgap: 1px;\n}\n\n[mol_check_list_option] {\n\tflex: 0 1 auto;\n}\n\n[mol_check_list_option][mol_check_checked=\"true\"] {\n\ttext-shadow: 0 0;\n\tcolor: var(--mol_theme_current);\n}\n\n[mol_check_list_option][mol_check_checked=\"true\"][disabled] {\n\tcolor: var(--mol_theme_text);\n}\n");
})($ || ($ = {}));
//mol/check/list/-css/list.view.css.ts
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
    class $mol_deck extends $mol_list {
        items() {
            return [];
        }
        rows() {
            return [
                this.Switch(),
                this.Content()
            ];
        }
        current(val) {
            if (val !== undefined)
                return val;
            return "0";
        }
        switch_options() {
            return {};
        }
        Switch() {
            const obj = new this.$.$mol_switch();
            obj.value = (val) => this.current(val);
            obj.options = () => this.switch_options();
            return obj;
        }
        Content() {
            const obj = new this.$.$mol_view();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "current", null);
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "Switch", null);
    __decorate([
        $mol_mem
    ], $mol_deck.prototype, "Content", null);
    $.$mol_deck = $mol_deck;
})($ || ($ = {}));
//mol/deck/-view.tree/deck.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_deck extends $.$mol_deck {
            current(next) {
                return $mol_state_session.value(`${this}.current()`, next) || '0';
            }
            switch_options() {
                let options = {};
                this.items().forEach((item, index) => {
                    options[String(index)] = item.title();
                });
                return options;
            }
            Content() {
                return this.items()[this.current()];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_deck.prototype, "Content", null);
        $$.$mol_deck = $mol_deck;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/deck/deck.view.ts
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
                padding: $mol_gap.block,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_store extends $mol_object2 {
        data_default;
        constructor(data_default) {
            super();
            this.data_default = data_default;
        }
        data(next) {
            return next === undefined ? this.data_default : next;
        }
        snapshot(next) {
            return JSON.stringify(this.data(next === undefined ? next : JSON.parse(next)));
        }
        value(key, next) {
            const data = this.data();
            if (next === undefined)
                return data && data[key];
            const Constr = Reflect.getPrototypeOf(data).constructor;
            this.data(Object.assign(new Constr, data, { [key]: next }));
            return next;
        }
        selection(key, next = [0, 0]) {
            return next;
        }
        sub(key, lens) {
            if (!lens)
                lens = new $mol_store();
            const data = lens.data;
            lens.data = next => {
                if (next == undefined) {
                    return this.value(key) ?? lens.data_default;
                }
                return this.value(key, next);
            };
            return lens;
        }
        reset() {
            this.data(this.data_default);
        }
        active() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_store.prototype, "data", null);
    __decorate([
        $mol_mem_key
    ], $mol_store.prototype, "selection", null);
    $.$mol_store = $mol_store;
})($ || ($ = {}));
//mol/store/store.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_plot extends $mol_store {
        id(next) {
            return this.value('id', next);
        }
        type() {
            return this.value('type');
        }
        json() {
            return this.value('json');
        }
    }
    $.$visavis_plot = $visavis_plot;
})($ || ($ = {}));
//visavis/plot/plot.ts
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
    $mol_style_attach("mol/check/box/box.view.css", "[mol_check_box_icon] {\n\tborder-radius: var(--mol_gap_round);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n\tcolor: var(--mol_theme_shade);\n\theight: 1rem;\n\talign-self: center;\n}\n\n[mol_check]:not([mol_check_checked]) > [mol_check_box_icon] {\n\tfill: transparent;\n}\n\n[mol_check]:not([disabled]) > [mol_check_box_icon] {\n\tbackground: var(--mol_theme_field);\n\tcolor: var(--mol_theme_text);\n}\n");
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
    $mol_style_attach("mol/labeler/labeler.view.css", "[mol_labeler] {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tcursor: inherit;\n}\n\n[mol_labeler_label] {\n\tmin-height: 2rem;\n\tcolor: var(--mol_theme_shade);\n\tpadding: .5rem .75rem 0;\n\tgap: 0 var(--mol_gap_block);\n\tflex-wrap: wrap;\n}\n\n[mol_labeler_content] {\n\tdisplay: flex;\n\tpadding: var(--mol_gap_text);\n}\n");
})($ || ($ = {}));
//mol/labeler/-css/labeler.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_matrix extends $mol_book2 {
        plot() {
            const obj = new this.$.$visavis_plot();
            return obj;
        }
        size() {
            return 0;
        }
        links_value_min(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        links_value_max(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        heatmap(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        matrix() {
            return [];
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
        plot_title() {
            return "";
        }
        Root() {
            const obj = new this.$.$mol_svg();
            return obj;
        }
        Heatmap_min() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.links_value_min()
            ];
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
        Heatmap_max() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.links_value_max()
            ];
            return obj;
        }
        heatmap_color_list() {
            return [
                this.Heatmap_min(),
                this.Heatmap_color("0"),
                this.Heatmap_max()
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
            obj.title = () => this.plot_title();
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
            obj.Content = () => this.Nonformers();
            return obj;
        }
        order_dict() {
            return {
                nump: this.$.$mol_locale.text('$visavis_matrix_order_dict_nump'),
                num: this.$.$mol_locale.text('$visavis_matrix_order_dict_num'),
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
            obj.Content = () => this.Order_switch();
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
    ], $visavis_matrix.prototype, "plot", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "links_value_min", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "links_value_max", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "heatmap", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "order_current", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Heatmap_min", null);
    __decorate([
        $mol_mem_key
    ], $visavis_matrix.prototype, "Heatmap_color", null);
    __decorate([
        $mol_mem
    ], $visavis_matrix.prototype, "Heatmap_max", null);
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
//mol/data/value/value.ts
;
"use strict";
//mol/type/equals/equals.ts
;
"use strict";
//mol/type/merge/merge.ts
;
"use strict";
//mol/type/partial/undefined/undefined.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_setup(value, config) {
        return Object.assign(value, {
            config,
            Value: null
        });
    }
    $.$mol_data_setup = $mol_data_setup;
})($ || ($ = {}));
//mol/data/setup/setup.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_record(sub) {
        return $mol_data_setup((val) => {
            let res = {};
            for (const field in sub) {
                try {
                    res[field] = sub[field](val[field]);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_record = $mol_data_record;
})($ || ($ = {}));
//mol/data/record/record.ts
;
"use strict";
var $;
(function ($) {
    function $mol_diff_path(...paths) {
        const limit = Math.min(...paths.map(path => path.length));
        lookup: for (var i = 0; i < limit; ++i) {
            const first = paths[0][i];
            for (let j = 1; j < paths.length; ++j) {
                if (paths[j][i] !== first)
                    break lookup;
            }
        }
        return {
            prefix: paths[0].slice(0, i),
            suffix: paths.map(path => path.slice(i)),
        };
    }
    $.$mol_diff_path = $mol_diff_path;
})($ || ($ = {}));
//mol/diff/path/path.ts
;
"use strict";
var $;
(function ($) {
    class $mol_error_mix extends Error {
        errors;
        constructor(message, ...errors) {
            super(message);
            this.errors = errors;
            if (errors.length) {
                const stacks = [...errors.map(error => error.stack), this.stack];
                const diff = $mol_diff_path(...stacks.map(stack => {
                    if (!stack)
                        return [];
                    return stack.split('\n').reverse();
                }));
                const head = diff.prefix.reverse().join('\n');
                const tails = diff.suffix.map(path => path.reverse().map(line => line.replace(/^(?!\s+at)/, '\tat (.) ')).join('\n')).join('\n\tat (.) -----\n');
                this.stack = `Error: ${this.constructor.name}\n\tat (.) /"""\\\n${tails}\n\tat (.) \\___/\n${head}`;
                this.message += errors.map(error => '\n' + error.message).join('');
            }
        }
        toJSON() {
            return this.message;
        }
    }
    $.$mol_error_mix = $mol_error_mix;
})($ || ($ = {}));
//mol/error/mix/mix.ts
;
"use strict";
var $;
(function ($) {
    class $mol_data_error extends $mol_error_mix {
    }
    $.$mol_data_error = $mol_data_error;
})($ || ($ = {}));
//mol/data/error/error.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_string = (val) => {
        if (typeof val === 'string')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a string`));
    };
})($ || ($ = {}));
//mol/data/string/string.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_number = (val) => {
        if (typeof val === 'number')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a number`));
    };
})($ || ($ = {}));
//mol/data/number/number.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_optional(sub, fallback) {
        return $mol_data_setup((val) => {
            if (val === undefined) {
                return fallback?.();
            }
            return sub(val);
        }, { sub, fallback });
    }
    $.$mol_data_optional = $mol_data_optional;
})($ || ($ = {}));
//mol/data/optional/optional.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_array(sub) {
        return $mol_data_setup((val) => {
            if (!Array.isArray(val))
                return $mol_fail(new $mol_data_error(`${val} is not an array`));
            return val.map((item, index) => {
                try {
                    return sub(item);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${index}] ${error.message}`;
                    return $mol_fail(error);
                }
            });
        }, sub);
    }
    $.$mol_data_array = $mol_data_array;
})($ || ($ = {}));
//mol/data/array/array.ts
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
    var $$;
    (function ($$) {
        const $visavis_matrix_json_node = $mol_data_record({
            name: $mol_data_string,
            num: $mol_data_number,
            nump: $mol_data_number,
            size: $mol_data_number,
            rea: $mol_data_number,
            rpp: $mol_data_number,
            rion: $mol_data_number,
            rcov: $mol_data_number,
            rmet: $mol_data_number,
            tmelt: $mol_data_number,
            eneg: $mol_data_number,
            count: $mol_data_optional($mol_data_number),
        });
        const $visavis_matrix_json_link = $mol_data_record({
            source: $mol_data_number,
            target: $mol_data_number,
            value: $mol_data_number,
            cmt: $mol_data_string,
            cmp: $mol_data_optional($mol_data_number),
        });
        const $visavis_matrix_json = $mol_data_record({
            payload: $mol_data_record({
                nodes: $mol_data_array($visavis_matrix_json_node),
                links: $mol_data_array($visavis_matrix_json_link)
            }),
        });
        class $visavis_matrix extends $.$visavis_matrix {
            json() {
                return $visavis_matrix_json(this.plot().json());
            }
            nodes() {
                return this.json().payload.nodes;
            }
            links() {
                return this.json().payload.links.slice().sort((a, b) => a.value - b.value);
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
            plot_title() {
                return this.plot().id();
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
                return [
                    this.Heatmap_min(),
                    ...this.heatmap_colors().map((_, index) => this.Heatmap_color(index)),
                    this.Heatmap_max(),
                ];
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
        ], $visavis_matrix.prototype, "json", null);
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
            $mol_mem_key
        ], $visavis_matrix.prototype, "draw_cells", null);
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
    $mol_style_attach("visavis/matrix/matrix.view.css", "[visavis_matrix_plot] rect.nonformer {\n\tfill:url(#nonformer) !important;\n\tfill-opacity:1.0 !important;\n}\n\n[visavis_matrix_plot] rect.visited{\n\tfill:#0f0 !important;\n\tfill-opacity:1.0 !important;\n}\n\n[visavis_matrix_plot] rect.bgmatrix {\n\tfill:#f6f6f6;\n}\n\n[visavis_matrix_plot] rect.bgmatrix.hidden {\n\tfill:#fff;\n}\n\n[visavis_matrix_plot] line {\n\tstroke:#fff;\n}\n\n[visavis_matrix_plot] text.active {\n\tfill:#f00;\n\tfont-weight:bold;\n}\n");
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
            Heatmap_legend: {
                alignItems: 'flex-end',
                flex: {
                    direction: 'column-reverse',
                },
            },
            Root: {
                margin: 'auto',
            },
            Order_switch: {
                flex: {
                    shrink: 1,
                },
            },
            Setup: {
                Body: {
                    padding: $mol_gap.block,
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
    class $mol_pop extends $mol_view {
        showed(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        align_vert() {
            return "";
        }
        align_hor() {
            return "";
        }
        prefer() {
            return "vert";
        }
        sub() {
            return [
                this.Anchor()
            ];
        }
        sub_visible() {
            return [
                this.Anchor(),
                this.Bubble()
            ];
        }
        Anchor() {
            return null;
        }
        align() {
            return "bottom_center";
        }
        bubble_content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        Bubble() {
            const obj = new this.$.$mol_pop_bubble();
            obj.align = () => this.align();
            obj.content = () => this.bubble_content();
            obj.height_max = () => this.height_max();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "showed", null);
    __decorate([
        $mol_mem
    ], $mol_pop.prototype, "Bubble", null);
    $.$mol_pop = $mol_pop;
    class $mol_pop_bubble extends $mol_view {
        sub() {
            return this.content();
        }
        style() {
            return {
                ...super.style(),
                maxHeight: this.height_max()
            };
        }
        attr() {
            return {
                ...super.attr(),
                mol_pop_align: this.align(),
                tabindex: 0
            };
        }
        content() {
            return [];
        }
        height_max() {
            return 9999;
        }
        align() {
            return "";
        }
    }
    $.$mol_pop_bubble = $mol_pop_bubble;
})($ || ($ = {}));
//mol/pop/-view.tree/pop.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pop extends $.$mol_pop {
            showed(next = false) {
                this.focused();
                return next;
            }
            sub_visible() {
                return [
                    this.Anchor(),
                    ...this.showed() ? [this.Bubble()] : [],
                ];
            }
            height_max() {
                const viewport = this.$.$mol_window.size();
                const rect_bubble = this.view_rect();
                const align = this.align_vert();
                if (align === 'bottom')
                    return (viewport.height - rect_bubble.bottom) * .66;
                if (align === 'top')
                    return rect_bubble.top * .66;
                return 0;
            }
            align() {
                switch (this.prefer()) {
                    case 'hor': return `${this.align_hor()}_${this.align_vert()}`;
                    case 'vert': return `${this.align_vert()}_${this.align_hor()}`;
                    default: return this.prefer();
                }
            }
            align_vert() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.top > (viewport.top + viewport.height / 2) ? 'top' : 'bottom';
            }
            align_hor() {
                const viewport = this.view_port();
                const rect_pop = this.view_rect();
                if (!rect_pop)
                    return 'suspense';
                return rect_pop.left > (viewport.left + viewport.width / 2) ? 'left' : 'right';
            }
            View_port() {
                const view = new $mol_view;
                view.dom_node = () => {
                    let node = this.dom_node();
                    while (node = node.offsetParent) {
                        if (this.$.$mol_dom_context.getComputedStyle(node).overflow !== 'visible')
                            return node;
                    }
                    return this.$.$mol_dom_context.document.documentElement;
                };
                return view;
            }
            view_port() {
                return this.View_port().view_rect() ?? { ...this.$.$mol_window.size(), left: 0, top: 0 };
            }
        }
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "showed", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "sub_visible", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "height_max", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_vert", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "align_hor", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "View_port", null);
        __decorate([
            $mol_mem
        ], $mol_pop.prototype, "view_port", null);
        $$.$mol_pop = $mol_pop;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pop/pop.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pop/pop.view.css", "[mol_pop] {\n\tposition: relative;\n\tdisplay: inline-flex;\n}\n\n[mol_pop_bubble] {\n\tbox-shadow: 0 0 1rem hsla(0,0%,0%,.5);\n\tborder-radius: var(--mol_gap_round);\n\tposition: absolute;\n\tz-index: var(--mol_layer_popup);\n\tbackground: var(--mol_theme_back);\n\tmax-width: none;\n\tmax-height: none;\n\t/* overflow: hidden;\n\toverflow-y: scroll;\n\toverflow-y: overlay; */\n\tword-break: normal;\n\twidth: max-content;\n\theight: max-content;\n\tflex-direction: column;\n\tmax-width: 80vw;\n\tmax-height: 80vw;\n}\n\n:where( [mol_pop_bubble] > * ) {\n\tbackground: var(--mol_theme_card);\n}\n\n[mol_pop_bubble][mol_scroll] {\n\tbackground: var(--mol_theme_back);\n}\n\n[mol_pop_bubble]:focus {\n\toutline: none;\n}\n\n[mol_pop_align=\"suspense_suspense\"] {\n\topacity: 0;\n}\n\n[mol_pop_align=\"left_top\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"left_center\"] {\n\ttransform: translate(-100%, -50%);\n\tleft: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"left_bottom\"] {\n\ttransform: translate(-100%);\n\tleft: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"right_top\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\tbottom: 0;\n}\n\n[mol_pop_align=\"right_center\"] {\n\ttransform: translate(100%, -50%);\n\tright: 0;\n\ttop: 50%;\n}\n\n[mol_pop_align=\"right_bottom\"] {\n\ttransform: translate(100%);\n\tright: 0;\n\ttop: 0;\n}\n\n[mol_pop_align=\"center\"] {\n\tleft: 50%;\n\ttop: 50%;\n\ttransform: translate(-50%, -50%);\n}\n\n[mol_pop_align=\"top_left\"] {\n\tright: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"top_right\"] {\n\tleft: 0;\n\tbottom: 100%;\n}\n\n[mol_pop_align=\"bottom_left\"] {\n\tright: 0;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_center\"] {\n\ttransform: translate(-50%);\n\tleft: 50%;\n\ttop: 100%;\n}\n\n[mol_pop_align=\"bottom_right\"] {\n\tleft: 0;\n\ttop: 100%;\n}\n");
})($ || ($ = {}));
//mol/pop/-css/pop.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_pick extends $mol_pop {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        Anchor() {
            return this.Trigger();
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        trigger_enabled() {
            return true;
        }
        trigger_content() {
            return [
                this.title()
            ];
        }
        hint() {
            return "";
        }
        Trigger() {
            const obj = new this.$.$mol_check();
            obj.minimal_width = () => 40;
            obj.minimal_height = () => 40;
            obj.enabled = () => this.trigger_enabled();
            obj.checked = (val) => this.showed(val);
            obj.sub = () => this.trigger_content();
            obj.hint = () => this.hint();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "keydown", null);
    __decorate([
        $mol_mem
    ], $mol_pick.prototype, "Trigger", null);
    $.$mol_pick = $mol_pick;
})($ || ($ = {}));
//mol/pick/-view.tree/pick.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_pick extends $.$mol_pick {
            keydown(event) {
                if (!this.trigger_enabled())
                    return;
                if (event.defaultPrevented)
                    return;
                if (event.keyCode === $mol_keyboard_code.escape) {
                    if (!this.showed())
                        return;
                    event.preventDefault();
                    this.showed(false);
                }
            }
        }
        $$.$mol_pick = $mol_pick;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/pick/pick.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/pick/pick.view.css", "[mol_pick_trigger] {\n\talign-items: center;\n\tflex-grow: 1;\n}\n");
})($ || ($ = {}));
//mol/pick/-css/pick.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_hotkey extends $mol_plugin {
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.keydown(event)
            };
        }
        key() {
            return {};
        }
        mod_ctrl() {
            return false;
        }
        mod_alt() {
            return false;
        }
        mod_shift() {
            return false;
        }
        keydown(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_hotkey.prototype, "keydown", null);
    $.$mol_hotkey = $mol_hotkey;
})($ || ($ = {}));
//mol/hotkey/-view.tree/hotkey.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_hotkey extends $.$mol_hotkey {
            key() {
                return super.key();
            }
            keydown(event) {
                if (!event)
                    return;
                if (event.defaultPrevented)
                    return;
                let name = $mol_keyboard_code[event.keyCode];
                if (this.mod_ctrl() !== event.ctrlKey)
                    return;
                if (this.mod_alt() !== event.altKey)
                    return;
                if (this.mod_shift() !== event.shiftKey)
                    return;
                const handle = this.key()[name];
                if (handle)
                    handle(event);
            }
        }
        $$.$mol_hotkey = $mol_hotkey;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/hotkey/hotkey.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_string extends $mol_view {
        dom_name() {
            return "input";
        }
        enabled() {
            return true;
        }
        minimal_height() {
            return 40;
        }
        autocomplete() {
            return false;
        }
        selection(val) {
            if (val !== undefined)
                return val;
            return [
                0,
                0
            ];
        }
        auto() {
            return [
                this.selection_watcher()
            ];
        }
        field() {
            return {
                ...super.field(),
                disabled: this.disabled(),
                value: this.value_changed(),
                placeholder: this.hint_visible(),
                spellcheck: this.spellcheck(),
                autocomplete: this.autocomplete_native(),
                selectionEnd: this.selection_end(),
                selectionStart: this.selection_start(),
                inputMode: this.keyboard(),
                enterkeyhint: this.enter()
            };
        }
        attr() {
            return {
                ...super.attr(),
                maxlength: this.length_max(),
                type: this.type()
            };
        }
        event() {
            return {
                ...super.event(),
                input: (event) => this.event_change(event)
            };
        }
        plugins() {
            return [
                this.Submit()
            ];
        }
        selection_watcher() {
            return null;
        }
        disabled() {
            return false;
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        value_changed(val) {
            return this.value(val);
        }
        hint() {
            return "";
        }
        hint_visible() {
            return this.hint();
        }
        spellcheck() {
            return true;
        }
        autocomplete_native() {
            return "";
        }
        selection_end() {
            return 0;
        }
        selection_start() {
            return 0;
        }
        keyboard() {
            return "text";
        }
        enter() {
            return "go";
        }
        length_max() {
            return +Infinity;
        }
        type(val) {
            if (val !== undefined)
                return val;
            return "text";
        }
        event_change(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        submit_with_ctrl() {
            return false;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        Submit() {
            const obj = new this.$.$mol_hotkey();
            obj.mod_ctrl = () => this.submit_with_ctrl();
            obj.key = () => ({
                enter: (event) => this.submit(event)
            });
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "selection", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "value", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "type", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "event_change", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "submit", null);
    __decorate([
        $mol_mem
    ], $mol_string.prototype, "Submit", null);
    $.$mol_string = $mol_string;
})($ || ($ = {}));
//mol/string/-view.tree/string.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_string extends $.$mol_string {
            event_change(next) {
                if (!next)
                    return;
                const el = next.target;
                const from = el.selectionStart;
                const to = el.selectionEnd;
                el.value = this.value_changed(el.value);
                if (to === null)
                    return;
                el.selectionEnd = to;
                el.selectionStart = from;
                this.selection_change(next);
            }
            hint_visible() {
                return (this.enabled() ? this.hint() : '') || ' ';
            }
            disabled() {
                return !this.enabled();
            }
            autocomplete_native() {
                return this.autocomplete() ? 'on' : 'off';
            }
            selection_watcher() {
                return new $mol_dom_listener(this.$.$mol_dom_context.document, 'selectionchange', $mol_wire_async(event => this.selection_change(event)));
            }
            selection_change(event) {
                const el = this.dom_node();
                if (el !== this.$.$mol_dom_context.document.activeElement)
                    return;
                const [from, to] = this.selection([
                    el.selectionStart,
                    el.selectionEnd,
                ]);
                el.selectionEnd = to;
                el.selectionStart = from;
            }
            selection_start() {
                const el = this.dom_node();
                if (el.selectionStart === null)
                    return undefined;
                return this.selection()[0];
            }
            selection_end() {
                const el = this.dom_node();
                if (el.selectionEnd === null)
                    return undefined;
                return this.selection()[1];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_string.prototype, "selection_watcher", null);
        $$.$mol_string = $mol_string;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/string/string.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/string/string.view.css", "[mol_string] {\n\tbox-sizing: border-box;\n\toutline-offset: 0;\n\tborder: none;\n\tborder-radius: var(--mol_gap_round);\n\twhite-space: pre-line;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tposition: relative;\n\tfont: inherit;\n\tflex: 1 1 auto;\n\tbackground: transparent;\n\tmin-width: 0;\n\tcolor: inherit;\n\tbackground: var(--mol_theme_field);\n}\n\n[mol_string]:disabled:not(:placeholder-shown) {\n\tbackground-color: transparent;\n\tcolor: var(--mol_theme_text);\n}\n\n[mol_string]:where(:not(:disabled)) {\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_line);\n}\n\n[mol_string]:where(:not(:disabled)):hover {\n\tbox-shadow: inset 0 0 0 2px var(--mol_theme_line);\n\tz-index: var(--mol_layer_hover);\n}\n\n[mol_string]:focus {\n\toutline: none;\n\tz-index: var(--mol_layer_focus);\n\tcolor: var(--mol_theme_text);\n\tbox-shadow: inset 0 0 0 1px var(--mol_theme_focus);\n}\n\n[mol_string]::placeholder {\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_string]::-ms-clear {\n\tdisplay: none;\n}\n");
})($ || ($ = {}));
//mol/string/-css/string.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_icon_dots_vertical extends $mol_icon {
        path() {
            return "M12,16C13.1,16 14,16.9 14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18C10,16.9 10.9,16 12,16M12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10M12,4C13.1,4 14,4.9 14,6C14,7.1 13.1,8 12,8C10.9,8 10,7.1 10,6C10,4.9 10.9,4 12,4Z";
        }
    }
    $.$mol_icon_dots_vertical = $mol_icon_dots_vertical;
})($ || ($ = {}));
//mol/icon/dots/vertical/-view.tree/vertical.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return +Infinity;
        }
        row_width() {
            return 0;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//mol/paragraph/-view.tree/paragraph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paragraph/paragraph.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/paragraph/-css/paragraph.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dimmer extends $mol_paragraph {
        haystack() {
            return "";
        }
        needle() {
            return "";
        }
        sub() {
            return this.parts();
        }
        Low(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        High(id) {
            const obj = new this.$.$mol_paragraph();
            obj.sub = () => [
                this.string(id)
            ];
            return obj;
        }
        parts() {
            return [];
        }
        string(id) {
            return "";
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "Low", null);
    __decorate([
        $mol_mem_key
    ], $mol_dimmer.prototype, "High", null);
    $.$mol_dimmer = $mol_dimmer;
})($ || ($ = {}));
//mol/dimmer/-view.tree/dimmer.view.tree.ts
;
"use strict";
//mol/type/intersect/intersect.ts
;
"use strict";
//mol/unicode/unicode.ts
;
"use strict";
var $;
(function ($) {
    class $mol_regexp extends RegExp {
        groups;
        constructor(source, flags = 'gsu', groups = []) {
            super(source, flags);
            this.groups = groups;
        }
        *[Symbol.matchAll](str) {
            const index = this.lastIndex;
            this.lastIndex = 0;
            try {
                while (this.lastIndex < str.length) {
                    const found = this.exec(str);
                    if (!found)
                        break;
                    yield found;
                }
            }
            finally {
                this.lastIndex = index;
            }
        }
        [Symbol.match](str) {
            const res = [...this[Symbol.matchAll](str)].filter(r => r.groups).map(r => r[0]);
            if (!res.length)
                return null;
            return res;
        }
        [Symbol.split](str) {
            const res = [];
            let token_last = null;
            for (let token of this[Symbol.matchAll](str)) {
                if (token.groups && (token_last ? token_last.groups : true))
                    res.push('');
                res.push(token[0]);
                token_last = token;
            }
            if (!res.length)
                res.push('');
            return res;
        }
        test(str) {
            return Boolean(str.match(this));
        }
        exec(str) {
            const from = this.lastIndex;
            if (from >= str.length)
                return null;
            const res = super.exec(str);
            if (res === null) {
                this.lastIndex = str.length;
                if (!str)
                    return null;
                return Object.assign([str.slice(from)], {
                    index: from,
                    input: str,
                });
            }
            if (from === this.lastIndex) {
                $mol_fail(new Error('Captured empty substring'));
            }
            const groups = {};
            const skipped = str.slice(from, this.lastIndex - res[0].length);
            if (skipped) {
                this.lastIndex = this.lastIndex - res[0].length;
                return Object.assign([skipped], {
                    index: from,
                    input: res.input,
                });
            }
            for (let i = 0; i < this.groups.length; ++i) {
                const group = this.groups[i];
                groups[group] = groups[group] || res[i + 1] || '';
            }
            return Object.assign(res, { groups });
        }
        generate(params) {
            return null;
        }
        get native() {
            return new RegExp(this.source, this.flags);
        }
        static repeat(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}?`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static repeat_greedy(source, min = 0, max = Number.POSITIVE_INFINITY) {
            const regexp = $mol_regexp.from(source);
            const upper = Number.isFinite(max) ? max : '';
            const str = `(?:${regexp.source}){${min},${upper}}`;
            const regexp2 = new $mol_regexp(str, regexp.flags, regexp.groups);
            regexp2.generate = params => {
                const res = regexp.generate(params);
                if (res)
                    return res;
                if (min > 0)
                    return res;
                return '';
            };
            return regexp2;
        }
        static vary(sources) {
            const groups = [];
            const chunks = sources.map(source => {
                const regexp = $mol_regexp.from(source);
                groups.push(...regexp.groups);
                return regexp.source;
            });
            return new $mol_regexp(`(?:${chunks.join('|')})`, '', groups);
        }
        static optional(source) {
            return $mol_regexp.repeat_greedy(source, 0, 1);
        }
        static force_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?=${regexp.source})`, regexp.flags, regexp.groups);
        }
        static forbid_after(source) {
            const regexp = $mol_regexp.from(source);
            return new $mol_regexp(`(?!${regexp.source})`, regexp.flags, regexp.groups);
        }
        static from(source, { ignoreCase, multiline } = {
            ignoreCase: false,
            multiline: false,
        }) {
            let flags = 'gsu';
            if (multiline)
                flags += 'm';
            if (ignoreCase)
                flags += 'i';
            if (typeof source === 'number') {
                const src = `\\u{${source.toString(16)}}`;
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => src;
                return regexp;
            }
            if (typeof source === 'string') {
                const src = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                const regexp = new $mol_regexp(src, flags);
                regexp.generate = () => source;
                return regexp;
            }
            else if (source instanceof $mol_regexp) {
                const regexp = new $mol_regexp(source.source, flags, source.groups);
                regexp.generate = params => source.generate(params);
                return regexp;
            }
            if (source instanceof RegExp) {
                const test = new RegExp('|' + source.source);
                const groups = Array.from({ length: test.exec('').length - 1 }, (_, i) => String(i + 1));
                const regexp = new $mol_regexp(source.source, source.flags, groups);
                regexp.generate = () => '';
                return regexp;
            }
            if (Array.isArray(source)) {
                const patterns = source.map(src => Array.isArray(src)
                    ? $mol_regexp.optional(src)
                    : $mol_regexp.from(src));
                const chunks = patterns.map(pattern => pattern.source);
                const groups = [];
                let index = 0;
                for (const pattern of patterns) {
                    for (let group of pattern.groups) {
                        if (Number(group) >= 0) {
                            groups.push(String(index++));
                        }
                        else {
                            groups.push(group);
                        }
                    }
                }
                const regexp = new $mol_regexp(chunks.join(''), flags, groups);
                regexp.generate = params => {
                    let res = '';
                    for (const pattern of patterns) {
                        let sub = pattern.generate(params);
                        if (sub === null)
                            return '';
                        res += sub;
                    }
                    return res;
                };
                return regexp;
            }
            else {
                const groups = [];
                const chunks = Object.keys(source).map(name => {
                    groups.push(name);
                    const regexp = $mol_regexp.from(source[name]);
                    groups.push(...regexp.groups);
                    return `(${regexp.source})`;
                });
                const regexp = new $mol_regexp(`(?:${chunks.join('|')})`, flags, groups);
                const validator = new RegExp('^' + regexp.source + '$', flags);
                regexp.generate = params => {
                    for (let option in source) {
                        if (option in params) {
                            if (typeof params[option] === 'boolean') {
                                if (!params[option])
                                    continue;
                            }
                            else {
                                const str = String(params[option]);
                                if (str.match(validator))
                                    return str;
                                $mol_fail(new Error(`Wrong param: ${option}=${str}`));
                            }
                        }
                        else {
                            if (typeof source[option] !== 'object')
                                continue;
                        }
                        const res = $mol_regexp.from(source[option]).generate(params);
                        if (res)
                            return res;
                    }
                    return null;
                };
                return regexp;
            }
        }
        static unicode_only(...category) {
            return new $mol_regexp(`\\p{${category.join('=')}}`);
        }
        static unicode_except(...category) {
            return new $mol_regexp(`\\P{${category.join('=')}}`);
        }
        static char_range(from, to) {
            return new $mol_regexp(`${$mol_regexp.from(from).source}-${$mol_regexp.from(to).source}`);
        }
        static char_only(...allowed) {
            const regexp = allowed.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[${regexp}]`);
        }
        static char_except(...forbidden) {
            const regexp = forbidden.map(f => $mol_regexp.from(f).source).join('');
            return new $mol_regexp(`[^${regexp}]`);
        }
        static decimal_only = $mol_regexp.from(/\d/gsu);
        static decimal_except = $mol_regexp.from(/\D/gsu);
        static latin_only = $mol_regexp.from(/\w/gsu);
        static latin_except = $mol_regexp.from(/\W/gsu);
        static space_only = $mol_regexp.from(/\s/gsu);
        static space_except = $mol_regexp.from(/\S/gsu);
        static word_break_only = $mol_regexp.from(/\b/gsu);
        static word_break_except = $mol_regexp.from(/\B/gsu);
        static tab = $mol_regexp.from(/\t/gsu);
        static slash_back = $mol_regexp.from(/\\/gsu);
        static nul = $mol_regexp.from(/\0/gsu);
        static char_any = $mol_regexp.from(/./gsu);
        static begin = $mol_regexp.from(/^/gsu);
        static end = $mol_regexp.from(/$/gsu);
        static or = $mol_regexp.from(/|/gsu);
        static line_end = $mol_regexp.from({
            win_end: [['\r'], '\n'],
            mac_end: '\r',
        });
    }
    $.$mol_regexp = $mol_regexp;
})($ || ($ = {}));
//mol/regexp/regexp.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_dimmer extends $.$mol_dimmer {
            parts() {
                const needle = this.needle();
                if (needle.length < 2)
                    return [this.haystack()];
                let chunks = [];
                let strings = this.strings();
                for (let index = 0; index < strings.length; index++) {
                    if (strings[index] === '')
                        continue;
                    chunks.push((index % 2) ? this.High(index) : this.Low(index));
                }
                return chunks;
            }
            strings() {
                const options = this.needle().split(/\s+/g).filter(Boolean);
                if (!options.length)
                    return [this.haystack()];
                const variants = { ...options };
                const regexp = $mol_regexp.from({ needle: variants }, { ignoreCase: true });
                return this.haystack().split(regexp);
            }
            string(index) {
                return this.strings()[index];
            }
            *view_find(check, path = []) {
                if (check(this, this.haystack())) {
                    yield [...path, this];
                }
            }
        }
        __decorate([
            $mol_mem
        ], $mol_dimmer.prototype, "strings", null);
        $$.$mol_dimmer = $mol_dimmer;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/dimmer/dimmer.view.css", "[mol_dimmer] {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n[mol_dimmer_low] {\n\tdisplay: inline;\n\topacity: 0.8;\n}\n\n[mol_dimmer_high] {\n\tdisplay: inline;\n\tcolor: var(--mol_theme_focus);\n\ttext-shadow: 0 0;\n}\n");
})($ || ($ = {}));
//mol/dimmer/-css/dimmer.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_nav extends $mol_plugin {
        cycle(val) {
            if (val !== undefined)
                return val;
            return false;
        }
        mod_ctrl() {
            return false;
        }
        mod_shift() {
            return false;
        }
        mod_alt() {
            return false;
        }
        keys_x(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        keys_y(val) {
            if (val !== undefined)
                return val;
            return [];
        }
        current_x(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        current_y(val) {
            if (val !== undefined)
                return val;
            return null;
        }
        event_up(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_down(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_left(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event_right(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        event() {
            return {
                ...super.event(),
                keydown: (event) => this.event_key(event)
            };
        }
        event_key(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "cycle", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "keys_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_x", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "current_y", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_up", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_down", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_left", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_right", null);
    __decorate([
        $mol_mem
    ], $mol_nav.prototype, "event_key", null);
    $.$mol_nav = $mol_nav;
})($ || ($ = {}));
//mol/nav/-view.tree/nav.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_nav extends $.$mol_nav {
            event_key(event) {
                if (!event)
                    return event;
                if (event.defaultPrevented)
                    return;
                if (this.mod_ctrl() && !event.ctrlKey)
                    return;
                if (this.mod_shift() && !event.shiftKey)
                    return;
                if (this.mod_alt() && !event.altKey)
                    return;
                switch (event.keyCode) {
                    case $mol_keyboard_code.up: return this.event_up(event);
                    case $mol_keyboard_code.down: return this.event_down(event);
                    case $mol_keyboard_code.left: return this.event_left(event);
                    case $mol_keyboard_code.right: return this.event_right(event);
                }
            }
            event_up(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? 0 : index_y;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_down(event) {
                if (!event)
                    return event;
                const keys = this.keys_y();
                if (keys.length < 1)
                    return;
                const index_y = this.index_y();
                const index_old = index_y === null ? keys.length - 1 : index_y;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_y(this.keys_y()[index_new]);
            }
            event_left(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? 0 : index_x;
                const index_new = (index_old + keys.length - 1) % keys.length;
                event.preventDefault();
                if (index_old === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            event_right(event) {
                if (!event)
                    return event;
                const keys = this.keys_x();
                if (keys.length < 1)
                    return;
                const index_x = this.index_x();
                const index_old = index_x === null ? keys.length - 1 : index_x;
                const index_new = (index_old + 1) % keys.length;
                event.preventDefault();
                if (index_new === 0 && !this.cycle())
                    return;
                this.current_x(this.keys_x()[index_new]);
            }
            index_y() {
                let index = this.keys_y().indexOf(this.current_y());
                if (index < 0)
                    return null;
                return index;
            }
            index_x() {
                let index = this.keys_x().indexOf(this.current_x());
                if (index < 0)
                    return null;
                return index;
            }
        }
        $$.$mol_nav = $mol_nav;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/nav/nav.view.ts
;
"use strict";
var $;
(function ($) {
    class $mol_select extends $mol_pick {
        dictionary(val) {
            if (val !== undefined)
                return val;
            return {};
        }
        options() {
            return [];
        }
        value(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        option_label_default() {
            return "";
        }
        Option_row(id) {
            const obj = new this.$.$mol_button_minor();
            obj.event_click = (event) => this.event_select(id, event);
            obj.sub = () => this.option_content(id);
            return obj;
        }
        No_options() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.no_options_message()
            ];
            return obj;
        }
        plugins() {
            return [
                ...super.plugins(),
                this.Nav()
            ];
        }
        hint() {
            return this.$.$mol_locale.text('$mol_select_hint');
        }
        bubble_content() {
            return [
                this.Filter(),
                this.Bubble_pane()
            ];
        }
        Filter() {
            const obj = new this.$.$mol_string();
            obj.value = (val) => this.filter_pattern(val);
            obj.hint = () => this.$.$mol_locale.text('$mol_select_Filter_hint');
            obj.submit = (event) => this.submit(event);
            obj.enabled = () => this.enabled();
            return obj;
        }
        Trigger_icon() {
            const obj = new this.$.$mol_icon_dots_vertical();
            return obj;
        }
        event_select(id, event) {
            if (event !== undefined)
                return event;
            return null;
        }
        option_label(id) {
            return "";
        }
        filter_pattern(val) {
            if (val !== undefined)
                return val;
            return "";
        }
        Option_label(id) {
            const obj = new this.$.$mol_dimmer();
            obj.haystack = () => this.option_label(id);
            obj.needle = () => this.filter_pattern();
            return obj;
        }
        option_content(id) {
            return [
                this.Option_label(id)
            ];
        }
        no_options_message() {
            return this.$.$mol_locale.text('$mol_select_no_options_message');
        }
        nav_components() {
            return [];
        }
        option_focused(component) {
            if (component !== undefined)
                return component;
            return null;
        }
        nav_cycle(val) {
            if (val !== undefined)
                return val;
            return true;
        }
        Nav() {
            const obj = new this.$.$mol_nav();
            obj.keys_y = () => this.nav_components();
            obj.current_y = (component) => this.option_focused(component);
            obj.cycle = (val) => this.nav_cycle(val);
            return obj;
        }
        menu_content() {
            return [];
        }
        Menu() {
            const obj = new this.$.$mol_list();
            obj.rows = () => this.menu_content();
            return obj;
        }
        Bubble_pane() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => [
                this.Menu()
            ];
            return obj;
        }
        submit(event) {
            if (event !== undefined)
                return event;
            return null;
        }
        enabled() {
            return true;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "dictionary", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "value", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_row", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "No_options", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Filter", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Trigger_icon", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "event_select", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "filter_pattern", null);
    __decorate([
        $mol_mem_key
    ], $mol_select.prototype, "Option_label", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "option_focused", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "nav_cycle", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Nav", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Menu", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "Bubble_pane", null);
    __decorate([
        $mol_mem
    ], $mol_select.prototype, "submit", null);
    $.$mol_select = $mol_select;
})($ || ($ = {}));
//mol/select/-view.tree/select.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_match_text(query, values) {
        const tags = query.toLowerCase().trim().split(/\s+/).filter(tag => tag);
        if (tags.length === 0)
            return () => true;
        return (variant) => {
            const vals = values(variant);
            return tags.every(tag => vals.some(val => val.toLowerCase().indexOf(tag) >= 0));
        };
    }
    $.$mol_match_text = $mol_match_text;
})($ || ($ = {}));
//mol/match/text.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_select extends $.$mol_select {
            filter_pattern(next) {
                this.focused();
                return next || '';
            }
            open() {
                this.showed(true);
            }
            options() {
                return Object.keys(this.dictionary());
            }
            options_filtered() {
                let options = this.options();
                options = options.filter($mol_match_text(this.filter_pattern(), (id) => [this.option_label(id)]));
                const index = options.indexOf(this.value());
                if (index >= 0)
                    options = [...options.slice(0, index), ...options.slice(index + 1)];
                return options;
            }
            option_label(id) {
                const value = this.dictionary()[id];
                return (value == null ? id : value) || this.option_label_default();
            }
            option_rows() {
                return this.options_filtered().map((option) => this.Option_row(option));
            }
            option_focused(component) {
                if (component == null) {
                    for (let comp of this.nav_components()) {
                        if (comp && comp.focused())
                            return comp;
                    }
                    return null;
                }
                if (this.showed()) {
                    component.focused(true);
                }
                return component;
            }
            event_select(id, event) {
                this.value(id);
                this.showed(false);
                event?.preventDefault();
            }
            nav_components() {
                if (this.options().length > 1 && this.Filter()) {
                    return [this.Filter(), ...this.option_rows()];
                }
                else {
                    return this.option_rows();
                }
            }
            trigger_content() {
                return [
                    ...this.option_content(this.value()),
                    this.Trigger_icon(),
                ];
            }
            menu_content() {
                return [
                    ...this.option_rows(),
                    ...(this.options_filtered().length === 0) ? [this.No_options()] : []
                ];
            }
        }
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "filter_pattern", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "options_filtered", null);
        __decorate([
            $mol_mem
        ], $mol_select.prototype, "option_focused", null);
        $$.$mol_select = $mol_select;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/select/select.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/select/select.view.css", "[mol_select] {\n\tdisplay: flex;\n\tword-break: normal;\n\talign-self: flex-start;\n}\n\n[mol_select_option_row] {\n\tmin-width: 100%;\n\tpadding: 0;\n\tjustify-content: flex-start;\n}\n\n[mol_select_bubble] {\n\tmin-width: 100%;\n}\n\n[mol_select_filter] {\n\tflex: 1 0 auto;\n\talign-self: stretch;\n}\n\n[mol_select_option_label] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tmin-height: 1.5em;\n\tdisplay: block;\n\twhite-space: nowrap;\n}\n\n[mol_select_clear_option_content] {\n\tpadding: .5em 1rem .5rem 0;\n\ttext-align: left;\n\tbox-shadow: var(--mol_theme_line);\n\tflex: 1 0 auto;\n}\n\n[mol_select_no_options] {\n\tpadding: var(--mol_gap_text);\n\ttext-align: left;\n\tdisplay: block;\n\tcolor: var(--mol_theme_shade);\n}\n\n[mol_select_trigger] {\n\tpadding: 0;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n}\n\n[mol_select_trigger] > * {\n\tmargin-right: -1rem;\n}\n\n[mol_select_trigger] > *:last-child {\n\tmargin-right: 0;\n}\n\n[mol_select_menu] {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n");
})($ || ($ = {}));
//mol/select/-css/select.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_cube extends $mol_book2 {
        plot() {
            const obj = new this.$.$visavis_plot();
            return obj;
        }
        heatmap(next) {
            if (next !== undefined)
                return next;
            return false;
        }
        order(id) {
            return [];
        }
        order_current(next) {
            if (next !== undefined)
                return next;
            return "nump";
        }
        x_op() {
            return false;
        }
        y_op() {
            return false;
        }
        z_op() {
            return false;
        }
        x_sort(next) {
            if (next !== undefined)
                return next;
            return "nump";
        }
        y_sort(next) {
            if (next !== undefined)
                return next;
            return "nump";
        }
        z_sort(next) {
            if (next !== undefined)
                return next;
            return "nump";
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
        pages() {
            return [
                this.Plot(),
                this.Setup()
            ];
        }
        plot_title() {
            return "";
        }
        Root() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        Heatmap_min() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.value_min()
            ];
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
        Heatmap_max() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.value_max()
            ];
            return obj;
        }
        heatmap_color_list() {
            return [
                this.Heatmap_min(),
                this.Heatmap_color("0"),
                this.Heatmap_max()
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
            obj.title = () => this.plot_title();
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
            obj.hint = () => this.$.$mol_locale.text('$visavis_cube_Nonformers_hint');
            obj.title = () => this.$.$mol_locale.text('$visavis_cube_Nonformers_title');
            obj.checked = (next) => this.nonformers(next);
            return obj;
        }
        Nonformers_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_cube_Nonformers_label_title');
            obj.Content = () => this.Nonformers();
            return obj;
        }
        order_dict() {
            return {
                nump: this.$.$mol_locale.text('$visavis_cube_order_dict_nump'),
                num: this.$.$mol_locale.text('$visavis_cube_order_dict_num'),
                size: this.$.$mol_locale.text('$visavis_cube_order_dict_size'),
                rea: this.$.$mol_locale.text('$visavis_cube_order_dict_rea'),
                rpp: this.$.$mol_locale.text('$visavis_cube_order_dict_rpp'),
                rion: this.$.$mol_locale.text('$visavis_cube_order_dict_rion'),
                rcov: this.$.$mol_locale.text('$visavis_cube_order_dict_rcov'),
                rmet: this.$.$mol_locale.text('$visavis_cube_order_dict_rmet'),
                tmelt: this.$.$mol_locale.text('$visavis_cube_order_dict_tmelt'),
                eneg: this.$.$mol_locale.text('$visavis_cube_order_dict_eneg')
            };
        }
        X_order_select() {
            const obj = new this.$.$mol_select();
            obj.value = (next) => this.x_sort(next);
            obj.dictionary = () => this.order_dict();
            return obj;
        }
        X_order_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_cube_X_order_label_title');
            obj.Content = () => this.X_order_select();
            return obj;
        }
        Y_order_select() {
            const obj = new this.$.$mol_select();
            obj.value = (next) => this.y_sort(next);
            obj.dictionary = () => this.order_dict();
            return obj;
        }
        Y_order_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_cube_Y_order_label_title');
            obj.Content = () => this.Y_order_select();
            return obj;
        }
        Z_order_select() {
            const obj = new this.$.$mol_select();
            obj.value = (next) => this.z_sort(next);
            obj.dictionary = () => this.order_dict();
            return obj;
        }
        Z_order_label() {
            const obj = new this.$.$mol_labeler();
            obj.title = () => this.$.$mol_locale.text('$visavis_cube_Z_order_label_title');
            obj.Content = () => this.Z_order_select();
            return obj;
        }
        Setup() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.$.$mol_locale.text('$visavis_cube_Setup_title');
            obj.body = () => [
                this.Nonformers_label(),
                this.X_order_label(),
                this.Y_order_label(),
                this.Z_order_label()
            ];
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "plot", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "heatmap", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "order_current", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "x_sort", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "y_sort", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "z_sort", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Heatmap_min", null);
    __decorate([
        $mol_mem_key
    ], $visavis_cube.prototype, "Heatmap_color", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Heatmap_max", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Heatmap_legend", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Side_right", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Plot", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "nonformers", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Nonformers", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Nonformers_label", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "X_order_select", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "X_order_label", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Y_order_select", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Y_order_label", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Z_order_select", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Z_order_label", null);
    __decorate([
        $mol_mem
    ], $visavis_cube.prototype, "Setup", null);
    $.$visavis_cube = $visavis_cube;
})($ || ($ = {}));
//visavis/cube/-view.tree/cube.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_data_boolean = (val) => {
        if (typeof val === 'boolean')
            return val;
        return $mol_fail(new $mol_data_error(`${val} is not a boolean`));
    };
})($ || ($ = {}));
//mol/data/boolean/boolean.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_nullable(sub) {
        return $mol_data_setup((val) => {
            if (val === null)
                return null;
            return sub(val);
        }, sub);
    }
    $.$mol_data_nullable = $mol_data_nullable;
})($ || ($ = {}));
//mol/data/nullable/nullable.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $$.$visavis_element_prop = {
            "num": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95],
            "nump": [0, 1, 112, 2, 8, 82, 88, 94, 100, 106, 113, 3, 9, 83, 89, 95, 101, 107, 114, 4, 10, 14, 46, 50, 54, 58, 62, 66, 70, 74, 78, 84, 90, 96, 102, 108, 115, 5, 11, 15, 47, 51, 55, 59, 63, 67, 71, 75, 79, 85, 91, 97, 103, 109, 116, 6, 12, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 86, 92, 98, 104, 110, 117, 7, 13, 17, 19, 21, 23, 25, 27, 29],
            "size": [0, 0.040000098, 0.05525814, 0.32352134, 0.149871021, 0.15316946, 0.152079019, 0.147837836, 0.141252647, 0.130400994, 0.118123987, 0.578463822, 0.235527361, 0.222322819, 0.208407341, 0.19392461, 0.178988166, 0.160596861, 0.14201091, 0.692195698, 0.671411055, 0.64709144, 0.440998616, 0.425579654, 0.410235863, 0.394967358, 0.379774576, 0.364658122, 0.349618659, 0.334656835, 0.310912262, 0.287688252, 0.264934676, 0.242609734, 0.220678182, 0.195297025, 0.170450145, 0.832019702, 0.797564264, 0.762242103, 0.515950935, 0.494387183, 0.473421463, 0.452993466, 0.433052136, 0.413553912, 0.394461351, 0.375742041, 0.347395886, 0.319938571, 0.293280312, 0.267345197, 0.242068451, 0.213172397, 0.185071259, 0.910157427, 0.868793456, 0.828185801, 0.810462652, 0.793233638, 0.776484764, 0.760190637, 0.744322073, 0.728849599, 0.713745039, 0.698982175, 0.684536953, 0.670387461, 0.65651381, 0.642897972, 0.629523601, 0.616375866, 0.588840308, 0.562314966, 0.536696361, 0.51189659, 0.487840384, 0.464462811, 0.441707474, 0.419525064, 0.386690726, 0.355029594, 0.324425963, 0.294781292, 0.266010922, 0.233351806, 0.201712905, 1.0, 0.952025289, 0.905996701, 0.885161237, 0.864979518, 0.845420273, 0.826445343, 0.808015348, 0.790092251],
            "rea": [0, 2.953092434, 2.137675759, 0.365119614, 0.788170962, 0.771198036, 0.776727701, 0.799010527, 0.836260342, 0.905851889, 0.999999998, 0.204202895, 0.501529786, 0.531317421, 0.56679379, 0.609123241, 0.659954172, 0.735531107, 0.831795156, 0.170651143, 0.175933932, 0.182546051, 0.267855686, 0.27756023, 0.28794164, 0.299072783, 0.311037111, 0.323930772, 0.337865225, 0.352970489, 0.379927077, 0.410597187, 0.445860802, 0.486888901, 0.535277144, 0.604842736, 0.693011946, 0.141972584, 0.148105917, 0.154969119, 0.228944225, 0.238930116, 0.249511262, 0.260763114, 0.272770822, 0.28563141, 0.299456427, 0.31437522, 0.340027017, 0.369208334, 0.402768213, 0.441840692, 0.487977621, 0.554124213, 0.63826219, 0.129784127, 0.135963256, 0.142629814, 0.145748835, 0.148914495, 0.1521266, 0.155387322, 0.158700099, 0.162069084, 0.165498855, 0.168994276, 0.172560424, 0.17620256, 0.179926127, 0.183736755, 0.187640284, 0.191642784, 0.200604451, 0.210067301, 0.22009463, 0.230757519, 0.242136549, 0.254323886, 0.267425828, 0.281565982, 0.305474062, 0.332715889, 0.364101522, 0.400717379, 0.444056906, 0.506205582, 0.58560451, 0.118123987, 0.124076522, 0.130380151, 0.133449119, 0.136562756, 0.139722208, 0.142930186, 0.146190276, 0.149506576],
            "rpp": [0, 1.25, 0, 1.61, 1.08, 0.795, 0.64, 0.54, 0.465, 0.405, 0, 2.65, 2.03, 1.675, 1.42, 1.24, 1.1, 1.01, 0, 3.69, 3.0, 2.75, 2.58, 2.43, 2.44, 2.22, 2.11, 2.02, 2.18, 2.04, 1.88, 1.695, 1.56, 1.415, 1.285, 1.2, 0, 4.1, 3.21, 2.94, 2.825, 2.76, 2.72, 2.65, 2.605, 2.52, 2.45, 2.375, 2.215, 2.05, 1.88, 1.765, 1.67, 1.585, 0, 4.31, 3.402, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2.91, 2.79, 2.735, 2.68, 2.65, 2.628, 2.7, 2.66, 2.41, 2.235, 2.09, 1.997, 1.9, 1.83, 0, 4.37, 3.53, 0, 0, 0, 0, 0, 0, 0],
            "rion": [0, 0, 0, 0.6, 0.3, 0.2, 0.15, 0.12, 0.1, 0.09, 0, 0.96, 0.63, 0.5, 0.42, 0.36, 0.32, 0.28, 0, 1.33, 0.96, 0.8, 0.68, 0.65, 0.62, 0.6, 0.59, 0.62, 0.59, 0.96, 0.78, 0.63, 0.53, 0.46, 0.41, 0.37, 0, 1.49, 1.11, 0.93, 0.8, 0.77, 0.75, 0.72, 0.69, 0.75, 0.85, 1.12, 0.93, 0.76, 0.65, 0.57, 0.51, 0.46, 0, 1.65, 1.26, 1.06, 1.05, 1.04, 1.03, 1.02, 1.01, 1.01, 1.0, 0.99, 0.98, 0.97, 0.96, 0.95, 0.94, 0.93, 0.8, 0.77, 0.75, 0.72, 0.69, 0.81, 0.9, 1.11, 0.97, 0.9, 0.83, 0.77, 0.56, 0.51, 0, 1.74, 1.34, 1.14, 1.11, 1.08, 1.05, 1.04, 1.03, 1.02],
            "rcov": [0, 30.0, 0, 123.0, 89.0, 88.0, 77.0, 70.0, 66.0, 58.0, 0, 0, 136.0, 125.0, 117.0, 110.0, 104.0, 99.0, 0, 203.0, 174.0, 144.0, 132.0, 0, 0, 117.0, 116.0, 116.0, 115.0, 117.0, 125.0, 125.0, 122.0, 121.0, 117.0, 114.0, 0, 217.0, 192.0, 162.0, 145.0, 134.0, 129.0, 0, 124.0, 125.0, 128.0, 134.0, 141.0, 150.0, 140.0, 141.0, 137.0, 133.0, 0, 235.0, 198.0, 169.0, 165.0, 165.0, 164.0, 0, 166.0, 185.0, 161.0, 159.0, 159.0, 158.0, 157.0, 156.0, 170.0, 156.0, 144.0, 134.0, 130.0, 128.0, 126.0, 126.0, 129.0, 134.0, 144.0, 155.0, 154.0, 152.0, 153.0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "rmet": [0, 0.78, 0, 1.562, 1.128, 0.98, 0.916, 0.88, 0.89, 0, 0, 1.911, 1.602, 1.432, 1.319, 1.28, 1.27, 0, 0, 2.376, 1.974, 1.941, 1.462, 1.346, 1.36, 1.304, 1.274, 1.252, 1.246, 1.278, 1.394, 1.411, 1.369, 1.39, 1.4, 0, 0, 2.546, 2.151, 1.801, 1.602, 1.468, 1.4, 1.36, 1.339, 1.345, 1.376, 1.445, 1.568, 1.663, 1.623, 1.59, 1.6, 0, 0, 2.731, 2.243, 1.877, 1.715, 1.828, 1.821, 1.81, 1.802, 1.799, 1.802, 1.782, 1.773, 1.766, 1.757, 1.746, 1.74, 1.734, 1.58, 1.467, 1.408, 1.375, 1.353, 1.357, 1.387, 1.442, 1.573, 1.716, 1.75, 1.7, 1.76, 0, 0, 2.8, 2.26, 1.878, 1.798, 1.63, 1.56, 1.555, 1.58, 1.81],
            "tmelt": [0, 0.003664921, 0.00026178, 0.118586387, 0.405759162, 0.673560209, 1.0, 0.016492147, 0.014397906, 0.014136126, 0.006544503, 0.097120419, 0.241361257, 0.244240838, 0.440575916, 0.082984293, 0.10104712, 0.045026178, 0.021989529, 0.088219895, 0.290837696, 0.47434555, 0.506020942, 0.566230366, 0.557591623, 0.397382199, 0.473298429, 0.462827225, 0.451832461, 0.354973822, 0.181413613, 0.079319372, 0.317015707, 0.285340314, 0.128272251, 0.069633508, 0.030628272, 0.081675393, 0.273036649, 0.470157068, 0.556282723, 0.717539267, 0.756544503, 0.640052356, 0.67617801, 0.586125654, 0.477748691, 0.323036649, 0.155497382, 0.112565445, 0.132198953, 0.236649215, 0.189267016, 0.101308901, 0.042146597, 0.079057592, 0.261256545, 0.312303665, 0.280366492, 0.315183246, 0.338743455, 0.377225131, 0.352094241, 0.286649215, 0.414921466, 0.427486911, 0.439790576, 0.456282723, 0.469895288, 0.47591623, 0.287172775, 0.504973822, 0.653141361, 0.856806283, 0.964136126, 0.903926702, 0.868586387, 0.702356021, 0.535340314, 0.35, 0.061256545, 0.15104712, 0.157329843, 0.142408377, 0.137958115, 0.15052356, 0.052879581, 0.078534031, 0.254712042, 0.346335079, 0.528795812, 0.553141361, 0.368062827, 0.239005236, 0.239267016, 0.331675393],
            "eneg": [0, 3.69, 6.29, 2.32, 3.71, 4.88, 6.08, 7.31, 8.5, 9.7, 10.92, 2.27, 3.37, 4.21, 5.08, 5.95, 6.79, 7.64, 8.5, 2.08, 3.0, 3.11, 3.19, 3.27, 3.41, 3.4, 3.47, 3.53, 3.59, 3.74, 3.7, 4.37, 5.09, 5.82, 6.53, 7.21, 7.93, 2.04, 2.89, 3.04, 3.14, 3.25, 3.41, 3.35, 3.47, 3.57, 3.73, 3.81, 3.6, 4.19, 4.83, 5.47, 6.08, 6.69, 7.29, 1.97, 2.76, 2.89, 2.86, 2.83, 2.85, 2.87, 2.89, 2.91, 3.02, 2.95, 2.97, 2.99, 3.0, 3.02, 3.04, 3.11, 3.3, 3.45, 3.48, 3.5, 3.57, 3.6, 3.71, 3.84, 3.82, 4.34, 4.92, 5.47, 6.01, 6.56, 7.12, 2.02, 2.78, 2.93, 3.02, 2.98, 2.98, 2.98, 2.96, 2.97]
        };
        $$.$visavis_element_list = [null, 'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am'];
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/element/element.ts
;
"use strict";
var $;
(function ($) {
    class $lib_plotly extends $mol_object2 {
        static all() {
            return $mol_import.script('https://cdn.plot.ly/plotly-2.16.1.min.js').Plotly;
        }
    }
    __decorate([
        $mol_mem
    ], $lib_plotly, "all", null);
    $.$lib_plotly = $lib_plotly;
})($ || ($ = {}));
//lib/plotly/plotly.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const $visavis_cube_json = $mol_data_record({
            payload: $mol_data_record({
                tcube: $mol_data_optional($mol_data_boolean),
                points: $mol_data_record({
                    x: $mol_data_array($mol_data_number),
                    y: $mol_data_array($mol_data_number),
                    z: $mol_data_array($mol_data_number),
                    v: $mol_data_array($mol_data_number),
                    labels: $mol_data_array($mol_data_string),
                }),
                fixel: $mol_data_nullable($mol_data_boolean),
                xtitle: $mol_data_optional($mol_data_string),
                ytitle: $mol_data_optional($mol_data_string),
                ztitle: $mol_data_optional($mol_data_string),
            }),
        });
        class $visavis_cube extends $.$visavis_cube {
            plot_body() {
                return [
                    this.Root(),
                    ...this.heatmap() ? [this.Side_right()] : [],
                ];
            }
            plot_title() {
                return this.plot().id();
            }
            json() {
                return $visavis_cube_json(this.plot().json());
            }
            value_list() {
                return this.json().payload.points.v.slice().sort((a, b) => a - b);
            }
            value_min() {
                return this.value_list()[0];
            }
            value_max() {
                return this.value_list().slice(-1)[0];
            }
            order(order) {
                return $lib_d3.all().range(95).sort((a, b) => $visavis_element_prop[order][a + 1] - $visavis_element_prop[order][b + 1]);
            }
            heatmap() {
                return this.json().payload.points.v.some(val => Math.floor(val) !== val);
            }
            heatmap_color(index) {
                return this.heatmap_colors()[index];
            }
            heatmap_color_list() {
                return [
                    this.Heatmap_min(),
                    ...this.heatmap_colors().map((_, index) => this.Heatmap_color(index)),
                    this.Heatmap_max(),
                ];
            }
            marker() {
                return {
                    color: this.heatmap() ? this.json().payload.points.v : this.colorset()[0],
                    ...this.heatmap() ? { colorscale: 'Rainbow' } : {},
                    size: 4,
                    opacity: 0.9
                };
            }
            data_nonformers() {
                const { x, y, z, labels } = $visavis_nonformer_pd_tri;
                return {
                    type: "scatter3d",
                    text: labels,
                    mode: "markers",
                    hoverinfo: "text",
                    marker: { color: "#ccc", size: 4, opacity: 0.9 },
                    projection: { x: { show: true, opacity: 0.25 }, y: { show: true, opacity: 0.25 }, z: { show: true, opacity: 0.25 } },
                    ...this.convert_to_axes(x, y, z, this.x_sort(), this.y_sort(), this.z_sort())
                };
            }
            data() {
                return {
                    type: "scatter3d",
                    text: this.json().payload.points.labels,
                    mode: "markers",
                    hoverinfo: "text",
                    marker: this.marker(),
                    projection: { x: { show: true, opacity: 0.05 }, y: { show: true, opacity: 0.05 }, z: { show: true, opacity: 0.05 } },
                    ...this.convert_to_axes(this.json().payload.points.x, this.json().payload.points.y, this.json().payload.points.z, this.x_sort(), this.y_sort(), this.z_sort())
                };
            }
            data_shown() {
                return [
                    ...this.nonformers() ? [this.data_nonformers()] : [],
                    this.data(),
                ];
            }
            scene() {
                return {
                    aspectmode: 'cube',
                    xaxis: {
                        title: 'x_sort',
                        range: [1, 95],
                        titlefont: { color: this.x_op() ? '#000' : '#fff', size: 10 },
                        backgroundcolor: '#fbfbfb',
                        gridcolor: '#fff',
                        showbackground: true,
                        showticklabels: !this.x_op(),
                        showline: false,
                        tickfont: { size: 11 },
                        ticktext: this.order_els(this.x_sort()).slice(0, 95).filter(function (el, idx) { return idx % 2 === 0; }),
                        tickvals: $lib_d3.all().range(1, 96, 2)
                    },
                    yaxis: {
                        title: 'y_sort',
                        range: [1, 95],
                        titlefont: { color: this.y_op() ? '#000' : '#fff', size: 10 },
                        backgroundcolor: '#f6f6f6',
                        gridcolor: '#fff',
                        showbackground: true,
                        showticklabels: !this.y_op(),
                        showline: false,
                        tickfont: { size: 11 },
                        ticktext: this.order_els(this.y_sort()).slice(0, 95).filter(function (el, idx) { return idx % 2 === 0; }),
                        tickvals: $lib_d3.all().range(1, 96, 2)
                    },
                    zaxis: {
                        title: 'z_sort',
                        range: [1, 95],
                        titlefont: { color: this.z_op() ? '#000' : '#fff', size: 10 },
                        backgroundcolor: '#eee',
                        gridcolor: '#fff',
                        showbackground: true,
                        showticklabels: !this.z_op(),
                        showline: false,
                        tickfont: { size: 11 },
                        ticktext: this.order_els(this.z_sort()).slice(0, 95).filter(function (el, idx) { return idx % 2 === 0; }),
                        tickvals: $lib_d3.all().range(1, 96, 2)
                    },
                    camera: { projection: { type: 'perspective' } },
                };
            }
            draw() {
                this.Root().view_rect();
                return $lib_plotly.all().react(this.Root().dom_node(), this.data_shown(), {
                    font: { family: "Exo2" },
                    showlegend: false,
                    scene: this.scene(),
                    margin: {
                        l: 0,
                        r: 0,
                        b: 0,
                        t: 0,
                        pad: 0
                    }
                }, { displaylogo: false, displayModeBar: false, staticPlot: false });
            }
            ter_op(op, a, b, c) {
                switch (op) {
                    case 'sum': return a + b + c;
                    case 'diff': return Math.abs(a - b) + Math.abs(a - c) + Math.abs(b - c);
                    case 'product': return (a * b) + (a * c) + (b * c);
                    case 'ratio': return (a / b) + (a / c) + (b / c);
                    case 'max': return ((a > b && a > c) ? a : ((b > a && b > c) ? b : c));
                    case 'min': return ((a < b && a < c) ? a : ((b < a && b < c) ? b : c));
                }
            }
            convert_to_axes(x_src, y_src, z_src, x_sort, y_sort, z_sort, x_op, y_op, z_op) {
                var converted = { 'x': [], 'y': [], 'z': [] };
                if (x_op) {
                    var x_temp = [];
                    for (var i = 0; i < x_src.length; i++) {
                        x_temp.push(this.ter_op(x_op, $visavis_element_prop[x_sort][x_src[i]], $visavis_element_prop[x_sort][y_src[i]], $visavis_element_prop[x_sort][z_src[i]]));
                    }
                    var x_renorm = $lib_d3.all().scaleQuantize().range($visavis_element_prop.num.slice(1)).domain([$lib_d3.all().min(x_temp), $lib_d3.all().max(x_temp)]);
                    converted['x'] = x_temp.map(x_renorm);
                }
                else {
                    for (var i = 0; i < x_src.length; i++) {
                        converted['x'].push((x_sort == 'num') ? x_src[i] : this.order(x_sort).indexOf(x_src[i] - 1) + 1);
                    }
                }
                if (y_op) {
                    var y_temp = [];
                    for (var i = 0; i < y_src.length; i++) {
                        y_temp.push(this.ter_op(y_op, $visavis_element_prop[y_sort][x_src[i]], $visavis_element_prop[y_sort][y_src[i]], $visavis_element_prop[y_sort][z_src[i]]));
                    }
                    var y_renorm = $lib_d3.all().scaleQuantize().range($visavis_element_prop.num.slice(1)).domain([$lib_d3.all().min(y_temp), $lib_d3.all().max(y_temp)]);
                    converted['y'] = y_temp.map(y_renorm);
                }
                else {
                    for (var i = 0; i < y_src.length; i++) {
                        converted['y'].push((y_sort == 'num') ? y_src[i] : this.order(y_sort).indexOf(y_src[i] - 1) + 1);
                    }
                }
                if (z_op) {
                    var z_temp = [];
                    for (var i = 0; i < z_src.length; i++) {
                        z_temp.push(this.ter_op(z_op, $visavis_element_prop[z_sort][x_src[i]], $visavis_element_prop[z_sort][y_src[i]], $visavis_element_prop[z_sort][z_src[i]]));
                    }
                    var z_renorm = $lib_d3.all().scaleQuantize().range($visavis_element_prop.num.slice(1)).domain([$lib_d3.all().min(z_temp), $lib_d3.all().max(z_temp)]);
                    converted['z'] = z_temp.map(z_renorm);
                }
                else {
                    for (var i = 0; i < z_src.length; i++) {
                        converted['z'].push((z_sort == 'num') ? z_src[i] : this.order(z_sort).indexOf(z_src[i] - 1) + 1);
                    }
                }
                return converted;
            }
            order_els(prop) {
                return $visavis_element_list.slice(1).sort(function (a, b) {
                    return $visavis_element_prop[prop][$visavis_element_list.indexOf(a)] - $visavis_element_prop[prop][$visavis_element_list.indexOf(b)];
                });
            }
        }
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "value_list", null);
        __decorate([
            $mol_mem_key
        ], $visavis_cube.prototype, "order", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "heatmap", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "marker", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "data_nonformers", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "data", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "data_shown", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "scene", null);
        __decorate([
            $mol_mem
        ], $visavis_cube.prototype, "draw", null);
        __decorate([
            $mol_mem_key
        ], $visavis_cube.prototype, "order_els", null);
        $$.$visavis_cube = $visavis_cube;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/cube/cube.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($visavis_cube, {
            Plot: {
                flex: {
                    basis: calc(`${per(100)} - ${rem(50)}`),
                    shrink: 0,
                },
            },
            Setup: {
                flex: {
                    basis: rem(25),
                    shrink: 0,
                },
                Body: {
                    padding: $mol_gap.block,
                },
            },
            Root: {
                width: $mol_style_unit.per(100),
                height: $mol_style_unit.per(100),
            },
            X_order_label: {
                zIndex: 3,
            },
            Y_order_label: {
                zIndex: 2,
            },
            Z_order_label: {
                zIndex: 1,
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
            Heatmap_legend: {
                alignItems: 'flex-end',
                flex: {
                    direction: 'column-reverse',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/cube/cube.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_phase extends $mol_book2 {
        plot() {
            const obj = new this.$.$visavis_plot();
            return obj;
        }
        colors_by_nphases() {
            return {
                1: "#d1cde6",
                alt_1: "#9cf",
                3: "#fc6",
                4: "#FCD3C2",
                5: "#CCE7D4",
                default: "#eee"
            };
        }
        line() {
            return {
                phase: {
                    width: 0.2
                },
                compound: {
                    width: 5,
                    color: "#d1cde6"
                },
                default: {
                    width: 0.5,
                    color: "#666"
                }
            };
        }
        is_triangle() {
            return false;
        }
        triangle() {
            return {
                datamock: [
                    {
                        a: [],
                        b: [],
                        c: [],
                        type: "scatterternary"
                    }
                ],
                layout: {
                    font: {
                        size: 20,
                        color: "#333",
                        family: "Exo2"
                    },
                    ternary: {
                        aaxis: {
                            title: this.json_title_a(),
                            ticks: "",
                            showline: true,
                            showgrid: false,
                            fixedrange: true,
                            linewidth: 1
                        },
                        baxis: {
                            title: this.json_title_b(),
                            ticks: "",
                            showline: true,
                            showgrid: false,
                            fixedrange: true,
                            linewidth: 1
                        },
                        caxis: {
                            title: this.json_title_c(),
                            ticks: "",
                            showline: true,
                            showgrid: false,
                            fixedrange: true,
                            linewidth: 1
                        }
                    },
                    shapes: this.layout_shapes(),
                    shape: {
                        type: "path",
                        path: "M 0,0 L 0.5,0.866 L 1,0",
                        line: {
                            width: 0
                        }
                    },
                    annotations: this.annotations()
                }
            };
        }
        triangle_annotations() {
            return [
                {
                    text: this.triangle_annotation_text(),
                    "x:": -0.25,
                    "y:": 0.96,
                    showarrow: false,
                    xref: "papper",
                    yref: "papper",
                    font: {
                        size: 15,
                        family: "Exo2"
                    }
                }
            ];
        }
        rectangle() {
            return {
                datamock: [
                    {
                        x: [],
                        y: [],
                        type: "scatter",
                        xaxis: "x",
                        yaxis: "y"
                    },
                    {
                        x: [],
                        y: [],
                        type: "scatter",
                        xaxis: "x2",
                        yaxis: "y2"
                    }
                ],
                layout: {
                    font: {
                        size: 16,
                        color: "#333",
                        family: "Exo2"
                    },
                    xaxis: {
                        title: "at. %",
                        range: this.json_comp_range(),
                        fixedrange: true,
                        showticks: this.show_ticks(),
                        showline: true,
                        zeroline: false,
                        showgrid: false,
                        ticklen: 4,
                        tickfont: {
                            size: 12
                        },
                        hoverformat: ".2r"
                    },
                    xaxis2: {
                        range: this.json_comp_range(),
                        fixedrange: true,
                        showticks: this.show_ticks(),
                        showline: true,
                        zeroline: false,
                        showgrid: false,
                        ticklen: 4,
                        tickfont: {
                            size: 12
                        },
                        side: "top",
                        overlaying: "x"
                    },
                    yaxis: {
                        title: "T, &deg;C",
                        range: this.json_temp(),
                        fixedrange: true,
                        showticks: this.show_ticks(),
                        showticklabels: this.data_demo(),
                        showline: true,
                        zeroline: false,
                        showgrid: false,
                        ticklen: 4,
                        tickfont: {
                            size: 12
                        },
                        hoverformat: ".2r"
                    },
                    yaxis2: {
                        range: this.json_temp(),
                        fixedrange: true,
                        showticks: this.show_ticks(),
                        showticklabels: this.data_demo(),
                        showline: true,
                        zeroline: false,
                        showgrid: false,
                        ticklen: 4,
                        tickfont: {
                            size: 12
                        },
                        side: "right",
                        overlaying: "y"
                    },
                    shapes: this.layout_shapes(),
                    annotations: this.annotations()
                }
            };
        }
        rectangle_annotations() {
            return [
                {
                    text: this.json_title_a(),
                    x: -0.03,
                    y: -0.11,
                    showarrow: false,
                    xref: "papper",
                    yref: "papper",
                    font: {
                        size: 20,
                        family: "Exo2"
                    }
                },
                {
                    text: this.json_title_b(),
                    x: 1.03,
                    y: -0.11,
                    showarrow: false,
                    xref: "papper",
                    yref: "papper",
                    font: {
                        size: 20,
                        family: "Exo2"
                    }
                }
            ];
        }
        annotation() {
            return {
                show_arrow: false,
                font: {
                    size: 13,
                    family: "Exo2"
                }
            };
        }
        annotation_textangle(id) {
            return 0;
        }
        pages() {
            return [
                this.Plot()
            ];
        }
        json_title_a() {
            return "";
        }
        json_title_b() {
            return "";
        }
        json_title_c() {
            return "";
        }
        layout_shapes() {
            return [];
        }
        annotations() {
            return [];
        }
        triangle_annotation_text() {
            return "";
        }
        json_comp_range() {
            return [];
        }
        show_ticks() {
            return false;
        }
        json_temp() {
            return [];
        }
        data_demo() {
            return false;
        }
        plot_title() {
            return "";
        }
        Root() {
            const obj = new this.$.$mol_view();
            return obj;
        }
        draw() {
            return null;
        }
        Plot() {
            const obj = new this.$.$mol_page();
            obj.title = () => this.plot_title();
            obj.body = () => [
                this.Root()
            ];
            obj.auto = () => this.draw();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_phase.prototype, "plot", null);
    __decorate([
        $mol_mem
    ], $visavis_phase.prototype, "Root", null);
    __decorate([
        $mol_mem
    ], $visavis_phase.prototype, "Plot", null);
    $.$visavis_phase = $visavis_phase;
})($ || ($ = {}));
//visavis/phase/-view.tree/phase.view.tree.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_dict(sub) {
        return $mol_data_setup((val) => {
            if (Object.getPrototypeOf(val) !== Object.prototype) {
                return $mol_fail(new $mol_data_error(`${val} is not an Object`));
            }
            const res = {};
            for (const field in val) {
                try {
                    res[field] = sub(val[field]);
                }
                catch (error) {
                    if (error instanceof Promise)
                        return $mol_fail_hidden(error);
                    error.message = `[${JSON.stringify(field)}] ${error.message}`;
                    return $mol_fail(error);
                }
            }
            return res;
        }, sub);
    }
    $.$mol_data_dict = $mol_data_dict;
})($ || ($ = {}));
//mol/data/dict/dict.ts
;
"use strict";
var $;
(function ($) {
    function $mol_data_const(ref) {
        return $mol_data_setup((val) => {
            if ($mol_compare_deep(val, ref))
                return ref;
            return $mol_fail(new $mol_data_error(`${JSON.stringify(val)} is not ${JSON.stringify(ref)}`));
        }, ref);
    }
    $.$mol_data_const = $mol_data_const;
})($ || ($ = {}));
//mol/data/const/const.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const Label = (val) => {
            if (!Array.isArray(val))
                return $mol_fail(new $mol_data_error(`${val} is not a array`));
            if (val.length < 2 || val.length > 3)
                return $mol_fail(new $mol_data_error(`${val} should have 2 or 3 items`));
            const check = { 0: val[0], 1: val[1], 2: val[2] };
            const obj = $mol_data_record({
                0: $mol_data_string,
                1: $mol_data_array($mol_data_number),
                2: $mol_data_nullable($mol_data_number),
            })(check);
            return Object.values(obj);
        };
        const $visavis_phase_json = $mol_data_record({
            temp: $mol_data_array($mol_data_number),
            arity: $mol_data_number,
            entry: $mol_data_string,
            naxes: $mol_data_number,
            labels: $mol_data_array(Label),
            shapes: $mol_data_array($mol_data_record({
                kind: $mol_data_string,
                svgpath: $mol_data_string,
                label: $mol_data_optional($mol_data_string),
                phase: $mol_data_optional($mol_data_string),
                nphases: $mol_data_optional($mol_data_number),
                is_solid: $mol_data_optional($mol_data_boolean),
                phase_id: $mol_data_optional($mol_data_number),
                reflabel: $mol_data_optional($mol_data_number),
                chemical_elements: $mol_data_optional($mol_data_array($mol_data_string)),
            })),
            diatype: $mol_data_string,
            title_a: $mol_data_string,
            title_b: $mol_data_string,
            title_c: $mol_data_optional($mol_data_string),
            comp_a: $mol_data_optional($mol_data_array($mol_data_number)),
            comp_end: $mol_data_dict($mol_data_number),
            comp_range: $mol_data_array($mol_data_number),
            comp_start: $mol_data_dict($mol_data_number),
            chemical_elements: $mol_data_array($mol_data_string),
            object_repr: $mol_data_string,
            object_type: $mol_data_string,
            use_visavis_type: $mol_data_const('pd'),
        });
        class $visavis_phase extends $.$visavis_phase {
            plot_title() {
                return this.plot().id();
            }
            json() {
                return $visavis_phase_json(this.plot().json());
            }
            json_title_b() {
                return this.json().title_b;
            }
            json_title_a() {
                return this.json().title_a;
            }
            json_title_c() {
                return this.json().title_c;
            }
            json_comp_range() {
                return this.json().comp_range;
            }
            json_temp() {
                return this.json().temp;
            }
            data_demo() {
                return !this.json().comp_a && !this.json().comp_start;
            }
            show_ticks() {
                return this.json().labels.length > 0;
            }
            is_triangle() {
                return this.json().naxes === 3;
            }
            layout_shapes() {
                const list = this.json().shapes.map(obj => ({
                    type: 'path',
                    path: obj.svgpath,
                    line: this.line()[obj.kind] ?? this.line().default,
                    ...obj.kind !== 'phase' && obj.kind !== 'compound' ? { fillOpacity: 0 } : {},
                    ...obj.kind === 'phase' ? {
                        fillcolor: !obj.is_solid && obj.nphases === 1 ? this.colors_by_nphases().alt_1 : this.colors_by_nphases()[obj.nphases] ?? this.colors_by_nphases().default
                    } : {},
                }));
                return this.is_triangle() ? [this.triangle().layout.shape, ...list] : list;
            }
            annotation_textangle(label) {
                return label[0].replace(/<\/?sub>/g, '').length > 10 ? -65 : 0;
            }
            annotations() {
                const list = this.json().labels.map(label => ({
                    x: label[1][0],
                    y: label[1][1],
                    text: label[0],
                    showarrow: this.annotation().show_arrow,
                    font: this.annotation().font,
                    textangle: this.annotation_textangle(label)
                }));
                return [
                    ...list,
                    ...this.json().title_c && this.json().arity > 2 && !this.data_demo() ? this.triangle_annotations() : [],
                    ...this.json().naxes === 2 ? this.rectangle_annotations() : [],
                ];
            }
            draw() {
                this.Root().view_rect();
                return $lib_plotly.all().react(this.Root().dom_node(), this.is_triangle() ? this.triangle().datamock : this.rectangle().datamock, this.is_triangle() ? this.triangle().layout : this.rectangle().layout, { displaylogo: false, displayModeBar: false, staticPlot: false });
            }
        }
        __decorate([
            $mol_mem
        ], $visavis_phase.prototype, "layout_shapes", null);
        __decorate([
            $mol_mem
        ], $visavis_phase.prototype, "annotations", null);
        __decorate([
            $mol_mem
        ], $visavis_phase.prototype, "draw", null);
        $$.$visavis_phase = $visavis_phase;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/phase/phase.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($visavis_phase, {
            Plot: {
                flex: {
                    basis: calc(`${per(100)} - ${rem(50)}`),
                    shrink: 0,
                },
            },
            Root: {
                width: $mol_style_unit.per(100),
                height: $mol_style_unit.per(100),
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/phase/phase.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $visavis_app extends $mol_book2 {
        attr() {
            return {
                mol_theme: "$mol_theme_light"
            };
        }
        pages() {
            return [
                this.Menu(),
                this.Matrix("plot"),
                this.Cube("plot"),
                this.Phase("plot")
            ];
        }
        files_read(next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Upload() {
            const obj = new this.$.$mol_button_open();
            obj.hint = () => this.$.$mol_locale.text('$visavis_app_Upload_hint');
            obj.accept = () => "application/json";
            obj.files = (next) => this.files_read(next);
            return obj;
        }
        plot_id(id) {
            return "";
        }
        Plot_link(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                file: this.plot_id(id)
            });
            obj.title = () => this.plot_id(id);
            return obj;
        }
        history_drop(id, next) {
            if (next !== undefined)
                return next;
            return null;
        }
        Plot_drop_icon(id) {
            const obj = new this.$.$mol_icon_delete();
            return obj;
        }
        Plot_drop(id) {
            const obj = new this.$.$mol_button_minor();
            obj.click = (next) => this.history_drop(id, next);
            obj.sub = () => [
                this.Plot_drop_icon(id)
            ];
            return obj;
        }
        Plot(id) {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Plot_link(id),
                this.Plot_drop(id)
            ];
            return obj;
        }
        history_rows() {
            return [
                this.Plot("0")
            ];
        }
        History() {
            const obj = new this.$.$mol_list();
            obj.title = () => this.$.$mol_locale.text('$visavis_app_History_title');
            obj.rows = () => this.history_rows();
            return obj;
        }
        example_title(id) {
            return "";
        }
        Example(id) {
            const obj = new this.$.$mol_link();
            obj.arg = () => ({
                file: this.example_title(id)
            });
            obj.title = () => this.example_title(id);
            return obj;
        }
        example_rows() {
            return [
                this.Example("0")
            ];
        }
        Examples() {
            const obj = new this.$.$mol_list();
            obj.title = () => this.$.$mol_locale.text('$visavis_app_Examples_title');
            obj.rows = () => this.example_rows();
            return obj;
        }
        Deck() {
            const obj = new this.$.$mol_deck();
            obj.items = () => [
                this.History(),
                this.Examples()
            ];
            return obj;
        }
        Source() {
            const obj = new this.$.$mol_link_source();
            obj.uri = () => "https://github.com/mpds-io/visavis";
            return obj;
        }
        Menu() {
            const obj = new this.$.$mol_page();
            obj.title = () => "Vis-a-vis";
            obj.tools = () => [
                this.Upload()
            ];
            obj.body = () => [
                this.Deck()
            ];
            obj.foot = () => [
                this.Source()
            ];
            return obj;
        }
        plot(id) {
            const obj = new this.$.$visavis_plot();
            return obj;
        }
        Matrix(id) {
            const obj = new this.$.$visavis_matrix();
            obj.plot = () => this.plot(id);
            return obj;
        }
        Cube(id) {
            const obj = new this.$.$visavis_cube();
            obj.plot = () => this.plot(id);
            return obj;
        }
        Phase(id) {
            const obj = new this.$.$visavis_phase();
            obj.plot = () => this.plot(id);
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "files_read", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Upload", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Plot_link", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "history_drop", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Plot_drop_icon", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Plot_drop", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Plot", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "History", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Example", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Examples", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Deck", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Source", null);
    __decorate([
        $mol_mem
    ], $visavis_app.prototype, "Menu", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "plot", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Matrix", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Cube", null);
    __decorate([
        $mol_mem_key
    ], $visavis_app.prototype, "Phase", null);
    $.$visavis_app = $visavis_app;
})($ || ($ = {}));
//visavis/app/-view.tree/app.view.tree.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_blob = ($node.buffer?.Blob ?? $mol_dom_context.Blob);
})($ || ($ = {}));
//mol/blob/blob.ts
;
"use strict";
var $;
(function ($) {
    function $mol_blob_text(blob) {
        return new Promise((done, fail) => {
            const reader = new FileReader;
            reader.onerror = fail;
            reader.onload = event => done(event.target.result);
            reader.readAsText(blob);
        });
    }
    $.$mol_blob_text = $mol_blob_text;
})($ || ($ = {}));
//mol/blob/text/text.ts
;
"use strict";
var $;
(function ($) {
    async function $mol_blob_json(blob) {
        const json = await $mol_blob_text(blob);
        return JSON.parse(json);
    }
    $.$mol_blob_json = $mol_blob_json;
})($ || ($ = {}));
//mol/blob/json/json.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $visavis_app extends $.$visavis_app {
            files_read(next) {
                const data = $mol_wire_sync($mol_blob_json)(next[0]);
                const plot = new $visavis_plot({
                    id: next[0].name,
                    type: data.use_visavis_type ?? 'unknown',
                    json: data,
                });
                this.history_add(plot);
            }
            history_add(plot) {
                const duplicates = this.history_plots().filter(id => id.replace(/\[\d+?\]/, '') === plot.id());
                const count = Math.max(...duplicates.map(id => Number(id.match(/\[(\d+?)\]$/)?.[1] ?? 0)));
                const postfix = duplicates.length ? `[${count + 1}]` : '';
                plot.id(`${plot.id()}${postfix}`);
                this.history_plot(plot.id(), plot);
                this.history_plots([...this.history_plots(), plot.id()]);
            }
            history_drop(id) {
                this.history_plot(id, null);
                this.history_plots(this.history_plots().filter(plot_id => plot_id !== id));
            }
            history_plots(next) {
                return this.$.$mol_state_local.value(`${this}.history_plots()`, next) ?? [];
            }
            history_plot(id, next) {
                const json = this.$.$mol_state_local.value(`${this}.history_plot('${id}')`, next && next.data());
                return json ? new $visavis_plot(json) : null;
            }
            history_rows() {
                return this.history_plots().map((id) => this.Plot(id)).reverse();
            }
            plot_id(id) {
                return id;
            }
            plot_opened(next) {
                return this.$.$mol_state_arg.value('file', next) ?? '';
            }
            Plot_opened() {
                const id = this.plot_opened();
                if (!id)
                    return [];
                const plot = this.history_plot(id);
                if (!plot)
                    return [];
                switch (plot.type()) {
                    case 'matrix': return this.Matrix(plot).pages();
                    case 'plot3d': return this.Cube(plot).pages();
                    case 'pd': return this.Phase(plot).pages();
                    default: return [];
                }
            }
            plot(plot) {
                return plot;
            }
            pages() {
                return [
                    this.Menu(),
                    ...this.Plot_opened(),
                ];
            }
        }
        __decorate([
            $mol_action
        ], $visavis_app.prototype, "files_read", null);
        __decorate([
            $mol_action
        ], $visavis_app.prototype, "history_add", null);
        __decorate([
            $mol_action
        ], $visavis_app.prototype, "history_drop", null);
        __decorate([
            $mol_mem_key
        ], $visavis_app.prototype, "history_plots", null);
        __decorate([
            $mol_mem_key
        ], $visavis_app.prototype, "history_plot", null);
        __decorate([
            $mol_mem
        ], $visavis_app.prototype, "history_rows", null);
        $$.$visavis_app = $visavis_app;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//visavis/app/app.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { rem, per } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($.$visavis_app, {
            Menu: {
                flex: {
                    basis: rem(25),
                    shrink: 0,
                },
                Body: {
                    padding: $mol_gap.block,
                },
                Foot: {
                    padding: $mol_gap.block,
                },
            },
            Plot_link: {
                flex: {
                    grow: 1,
                },
            },
            Matrix: {
                Plot: {
                    flex: {
                        basis: calc(`${per(100)} - ${rem(50)}`),
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
(function ($_1) {
    function $mol_test(set) {
        for (let name in set) {
            const code = set[name];
            const test = (typeof code === 'string') ? new Function('', code) : code;
            $_1.$mol_test_all.push(test);
        }
        $mol_test_schedule();
    }
    $_1.$mol_test = $mol_test;
    $_1.$mol_test_mocks = [];
    $_1.$mol_test_all = [];
    async function $mol_test_run() {
        for (var test of $_1.$mol_test_all) {
            let context = Object.create($$);
            for (let mock of $_1.$mol_test_mocks)
                await mock(context);
            const res = test(context);
            if (res instanceof Promise) {
                await new Promise((done, fail) => {
                    res.then(done, fail);
                    setTimeout(() => fail(new Error('Test timeout: ' + test.name)), 1000);
                });
            }
        }
        $$.$mol_log3_done({
            place: '$mol_test',
            message: 'All tests passed',
            count: $_1.$mol_test_all.length,
        });
    }
    $_1.$mol_test_run = $mol_test_run;
    let scheduled = false;
    function $mol_test_schedule() {
        if (scheduled)
            return;
        scheduled = true;
        setTimeout(async () => {
            scheduled = false;
            await $mol_test_run();
            $$.$mol_test_complete();
        }, 1000);
    }
    $_1.$mol_test_schedule = $mol_test_schedule;
    $_1.$mol_test_mocks.push(context => {
        let seed = 0;
        context.Math = Object.create(Math);
        context.Math.random = () => Math.sin(seed++);
        const forbidden = ['XMLHttpRequest', 'fetch'];
        for (let api of forbidden) {
            context[api] = new Proxy(function () { }, {
                get() {
                    $mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
                apply() {
                    $mol_fail_hidden(new Error(`${api} is forbidden in tests`));
                },
            });
        }
    });
    $mol_test({
        'mocked Math.random'($) {
            console.assert($.Math.random() === 0);
            console.assert($.Math.random() === Math.sin(1));
        },
        'forbidden XMLHttpRequest'($) {
            try {
                console.assert(void new $.XMLHttpRequest);
            }
            catch (error) {
                console.assert(error.message === 'XMLHttpRequest is forbidden in tests');
            }
        },
        'forbidden fetch'($) {
            try {
                console.assert(void $.fetch(''));
            }
            catch (error) {
                console.assert(error.message === 'fetch is forbidden in tests');
            }
        },
    });
})($ || ($ = {}));
//mol/test/test.test.ts
;
"use strict";
var $;
(function ($) {
    function $mol_test_complete() {
        process.exit(0);
    }
    $.$mol_test_complete = $mol_test_complete;
})($ || ($ = {}));
//mol/test/test.node.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_log3_come = () => { };
        $.$mol_log3_done = () => { };
        $.$mol_log3_fail = () => { };
        $.$mol_log3_warn = () => { };
        $.$mol_log3_rise = () => { };
        $.$mol_log3_area = () => () => { };
    });
})($ || ($ = {}));
//mol/log3/log3.test.ts
;
"use strict";
//mol/type/assert/assert.ts
;
"use strict";
//mol/type/assert/assert.test.ts
;
"use strict";
//mol/type/equals/equals.test.ts
;
"use strict";
//mol/type/partial/deep/deep.ts
;
"use strict";
//mol/type/partial/deep/deep.test.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_jsx_prefix = '';
    $.$mol_jsx_crumbs = '';
    $.$mol_jsx_booked = null;
    $.$mol_jsx_document = {
        getElementById: () => null,
        createElementNS: (space, name) => $mol_dom_context.document.createElementNS(space, name),
        createDocumentFragment: () => $mol_dom_context.document.createDocumentFragment(),
    };
    $.$mol_jsx_frag = '';
    function $mol_jsx(Elem, props, ...childNodes) {
        const id = props && props.id || '';
        const guid = id ? $.$mol_jsx_prefix ? $.$mol_jsx_prefix + '/' + id : id : $.$mol_jsx_prefix;
        const crumbs_self = id ? $.$mol_jsx_crumbs.replace(/(\S+)/g, `$1_${id.replace(/\/.*/i, '')}`) : $.$mol_jsx_crumbs;
        if (Elem && $.$mol_jsx_booked) {
            if ($.$mol_jsx_booked.has(id)) {
                $mol_fail(new Error(`JSX already has tag with id ${JSON.stringify(guid)}`));
            }
            else {
                $.$mol_jsx_booked.add(id);
            }
        }
        let node = guid ? $.$mol_jsx_document.getElementById(guid) : null;
        if ($.$mol_jsx_prefix) {
            const prefix_ext = $.$mol_jsx_prefix;
            const booked_ext = $.$mol_jsx_booked;
            const crumbs_ext = $.$mol_jsx_crumbs;
            for (const field in props) {
                const func = props[field];
                if (typeof func !== 'function')
                    continue;
                const wrapper = function (...args) {
                    const prefix = $.$mol_jsx_prefix;
                    const booked = $.$mol_jsx_booked;
                    const crumbs = $.$mol_jsx_crumbs;
                    try {
                        $.$mol_jsx_prefix = prefix_ext;
                        $.$mol_jsx_booked = booked_ext;
                        $.$mol_jsx_crumbs = crumbs_ext;
                        return func.call(this, ...args);
                    }
                    finally {
                        $.$mol_jsx_prefix = prefix;
                        $.$mol_jsx_booked = booked;
                        $.$mol_jsx_crumbs = crumbs;
                    }
                };
                $mol_func_name_from(wrapper, func);
                props[field] = wrapper;
            }
        }
        if (typeof Elem !== 'string') {
            if ('prototype' in Elem) {
                const view = node && node[Elem] || new Elem;
                Object.assign(view, props);
                view[Symbol.toStringTag] = guid;
                view.childNodes = childNodes;
                if (!view.ownerDocument)
                    view.ownerDocument = $.$mol_jsx_document;
                view.className = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                node = view.valueOf();
                node[Elem] = view;
                return node;
            }
            else {
                const prefix = $.$mol_jsx_prefix;
                const booked = $.$mol_jsx_booked;
                const crumbs = $.$mol_jsx_crumbs;
                try {
                    $.$mol_jsx_prefix = guid;
                    $.$mol_jsx_booked = new Set;
                    $.$mol_jsx_crumbs = (crumbs_self ? crumbs_self + ' ' : '') + (Elem['name'] || Elem);
                    return Elem(props, ...childNodes);
                }
                finally {
                    $.$mol_jsx_prefix = prefix;
                    $.$mol_jsx_booked = booked;
                    $.$mol_jsx_crumbs = crumbs;
                }
            }
        }
        if (!node) {
            node = Elem
                ? $.$mol_jsx_document.createElementNS(props?.xmlns ?? 'http://www.w3.org/1999/xhtml', Elem)
                : $.$mol_jsx_document.createDocumentFragment();
        }
        $mol_dom_render_children(node, [].concat(...childNodes));
        if (!Elem)
            return node;
        if (guid)
            node.id = guid;
        for (const key in props) {
            if (key === 'id')
                continue;
            if (typeof props[key] === 'string') {
                if (typeof node[key] === 'string')
                    node[key] = props[key];
                node.setAttribute(key, props[key]);
            }
            else if (props[key] &&
                typeof props[key] === 'object' &&
                Reflect.getPrototypeOf(props[key]) === Reflect.getPrototypeOf({})) {
                if (typeof node[key] === 'object') {
                    Object.assign(node[key], props[key]);
                    continue;
                }
            }
            else {
                node[key] = props[key];
            }
        }
        if ($.$mol_jsx_crumbs)
            node.className = (props?.['class'] ? props['class'] + ' ' : '') + crumbs_self;
        return node;
    }
    $.$mol_jsx = $mol_jsx;
})($ || ($ = {}));
//mol/jsx/jsx.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Make empty div'() {
            $mol_assert_equal(($mol_jsx("div", null)).outerHTML, '<div></div>');
        },
        'Define native field'() {
            const dom = $mol_jsx("input", { value: '123' });
            $mol_assert_equal(dom.outerHTML, '<input value="123">');
            $mol_assert_equal(dom.value, '123');
        },
        'Define classes'() {
            const dom = $mol_jsx("div", { class: 'foo bar' });
            $mol_assert_equal(dom.outerHTML, '<div class="foo bar"></div>');
        },
        'Define styles'() {
            const dom = $mol_jsx("div", { style: { color: 'red' } });
            $mol_assert_equal(dom.outerHTML, '<div style="color: red;"></div>');
        },
        'Define dataset'() {
            const dom = $mol_jsx("div", { dataset: { foo: 'bar' } });
            $mol_assert_equal(dom.outerHTML, '<div data-foo="bar"></div>');
        },
        'Define attributes'() {
            const dom = $mol_jsx("div", { lang: "ru", hidden: true });
            $mol_assert_equal(dom.outerHTML, '<div lang="ru" hidden=""></div>');
        },
        'Define child nodes'() {
            const dom = $mol_jsx("div", null,
                "hello",
                $mol_jsx("strong", null, "world"),
                "!");
            $mol_assert_equal(dom.outerHTML, '<div>hello<strong>world</strong>!</div>');
        },
        'Function as component'() {
            const Button = (props, target) => {
                return $mol_jsx("button", { title: props.hint }, target());
            };
            const dom = $mol_jsx(Button, { id: "foo", hint: "click me" }, () => 'hey!');
            $mol_assert_equal(dom.outerHTML, '<button id="foo" title="click me" class="Button">hey!</button>');
        },
        'Nested guid generation'() {
            const Foo = () => {
                return $mol_jsx("div", null,
                    $mol_jsx(Bar, { id: "bar" },
                        $mol_jsx("img", { id: "icon" })));
            };
            const Bar = (props, icon) => {
                return $mol_jsx("span", null,
                    icon,
                    $mol_jsx("i", { id: "label" }));
            };
            const dom = $mol_jsx(Foo, { id: "foo" });
            $mol_assert_equal(dom.outerHTML, '<div id="foo" class="Foo"><span id="foo/bar" class="Foo_bar Bar"><img id="foo/icon" class="Foo_icon"><i id="foo/bar/label" class="Foo_bar_label Bar_label"></i></span></div>');
        },
        'Fail on non unique ids'() {
            const App = () => {
                return $mol_jsx("div", null,
                    $mol_jsx("span", { id: "bar" }),
                    $mol_jsx("span", { id: "bar" }));
            };
            $mol_assert_fail(() => $mol_jsx(App, { id: "foo" }), 'JSX already has tag with id "foo/bar"');
        },
        'Owner based guid generationn'() {
            const Foo = () => {
                return $mol_jsx("div", null,
                    $mol_jsx(Bar, { id: "middle", icon: () => $mol_jsx("img", { id: "icon" }) }));
            };
            const Bar = (props) => {
                return $mol_jsx("span", null, props.icon());
            };
            const dom = $mol_jsx(Foo, { id: "app" });
            $mol_assert_equal(dom.outerHTML, '<div id="app" class="Foo"><span id="app/middle" class="Foo_middle Bar"><img id="app/icon" class="Foo_icon"></span></div>');
        },
        'Fail on same ids from different caller'() {
            const Foo = () => {
                return $mol_jsx("div", null,
                    $mol_jsx("img", { id: "icon" }),
                    $mol_jsx(Bar, { id: "bar", icon: () => $mol_jsx("img", { id: "icon" }) }));
            };
            const Bar = (props) => {
                return $mol_jsx("span", null, props.icon());
            };
            $mol_assert_fail(() => $mol_jsx(Foo, { id: "foo" }), 'JSX already has tag with id "foo/icon"');
        },
    });
})($ || ($ = {}));
//mol/jsx/jsx.test.tsx
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'nulls & undefineds'() {
            $mol_assert_ok($mol_compare_deep(null, null));
            $mol_assert_ok($mol_compare_deep(undefined, undefined));
            $mol_assert_not($mol_compare_deep(undefined, null));
            $mol_assert_not($mol_compare_deep({}, null));
        },
        'number'() {
            $mol_assert_ok($mol_compare_deep(1, 1));
            $mol_assert_ok($mol_compare_deep(Number.NaN, Number.NaN));
            $mol_assert_not($mol_compare_deep(1, 2));
            $mol_assert_ok($mol_compare_deep(Object(1), Object(1)));
            $mol_assert_not($mol_compare_deep(Object(1), Object(2)));
        },
        'POJO'() {
            $mol_assert_ok($mol_compare_deep({}, {}));
            $mol_assert_not($mol_compare_deep({ a: 1 }, { b: 2 }));
            $mol_assert_not($mol_compare_deep({ a: 1 }, { a: 2 }));
            $mol_assert_not($mol_compare_deep({}, { a: undefined }));
            $mol_assert_ok($mol_compare_deep({ a: 1, b: 2 }, { b: 2, a: 1 }));
            $mol_assert_ok($mol_compare_deep({ a: { b: 1 } }, { a: { b: 1 } }));
        },
        'Array'() {
            $mol_assert_ok($mol_compare_deep([], []));
            $mol_assert_ok($mol_compare_deep([1, [2]], [1, [2]]));
            $mol_assert_not($mol_compare_deep([1, 2], [1, 3]));
            $mol_assert_not($mol_compare_deep([1, 2,], [1, 3, undefined]));
        },
        'Non POJO are different'() {
            class Thing extends Object {
            }
            $mol_assert_not($mol_compare_deep(new Thing, new Thing));
            $mol_assert_not($mol_compare_deep(() => 1, () => 1));
            $mol_assert_not($mol_compare_deep(new RangeError('Test error'), new RangeError('Test error')));
        },
        'same POJOs with cyclic reference'() {
            const a = { foo: {} };
            a['self'] = a;
            const b = { foo: {} };
            b['self'] = b;
            $mol_assert_ok($mol_compare_deep(a, b));
        },
        'Date'() {
            $mol_assert_ok($mol_compare_deep(new Date(12345), new Date(12345)));
            $mol_assert_not($mol_compare_deep(new Date(12345), new Date(12346)));
        },
        'RegExp'() {
            $mol_assert_ok($mol_compare_deep(/\x22/mig, /\x22/mig));
            $mol_assert_not($mol_compare_deep(/\x22/mig, /\x21/mig));
            $mol_assert_not($mol_compare_deep(/\x22/mig, /\x22/mg));
        },
        'Error'() {
            $mol_assert_not($mol_compare_deep(new Error('xxx'), new Error('xxx')));
            const fail = (message) => new Error(message);
            $mol_assert_ok($mol_compare_deep(...['xxx', 'xxx'].map(msg => new Error(msg))));
            $mol_assert_not($mol_compare_deep(...['xxx', 'yyy'].map(msg => new Error(msg))));
        },
        'Map'() {
            $mol_assert_ok($mol_compare_deep(new Map, new Map));
            $mol_assert_ok($mol_compare_deep(new Map([[1, [2]]]), new Map([[1, [2]]])));
            $mol_assert_ok($mol_compare_deep(new Map([[[1], 2]]), new Map([[[1], 2]])));
            $mol_assert_not($mol_compare_deep(new Map([[1, 2]]), new Map([[1, 3]])));
            $mol_assert_not($mol_compare_deep(new Map([[[1], 2]]), new Map([[[3], 2]])));
        },
        'Set'() {
            $mol_assert_ok($mol_compare_deep(new Set, new Set));
            $mol_assert_ok($mol_compare_deep(new Set([1, [2]]), new Set([1, [2]])));
            $mol_assert_not($mol_compare_deep(new Set([1]), new Set([2])));
        },
        'Uint8Array'() {
            $mol_assert_ok($mol_compare_deep(new Uint8Array, new Uint8Array));
            $mol_assert_ok($mol_compare_deep(new Uint8Array([0]), new Uint8Array([0])));
            $mol_assert_not($mol_compare_deep(new Uint8Array([0]), new Uint8Array([1])));
        },
        'Custom comparator'() {
            class User {
                name;
                rand;
                constructor(name, rand = Math.random()) {
                    this.name = name;
                    this.rand = rand;
                }
                [Symbol.toPrimitive](mode) {
                    return this.name;
                }
            }
            $mol_assert_ok($mol_compare_deep(new User('Jin'), new User('Jin')));
            $mol_assert_not($mol_compare_deep(new User('Jin'), new User('John')));
        },
    });
})($ || ($ = {}));
//mol/compare/deep/deep.test.tsx
;
"use strict";
var $;
(function ($) {
    function $mol_dom_serialize(node) {
        const serializer = new $mol_dom_context.XMLSerializer;
        return serializer.serializeToString(node);
    }
    $.$mol_dom_serialize = $mol_dom_serialize;
})($ || ($ = {}));
//mol/dom/serialize/serialize.ts
;
"use strict";
var $;
(function ($) {
    function $mol_assert_ok(value) {
        if (value)
            return;
        $mol_fail(new Error(`${value} ≠ true`));
    }
    $.$mol_assert_ok = $mol_assert_ok;
    function $mol_assert_not(value) {
        if (!value)
            return;
        $mol_fail(new Error(`${value} ≠ false`));
    }
    $.$mol_assert_not = $mol_assert_not;
    function $mol_assert_fail(handler, ErrorRight) {
        const fail = $.$mol_fail;
        try {
            $.$mol_fail = $.$mol_fail_hidden;
            handler();
        }
        catch (error) {
            if (!ErrorRight)
                return error;
            $.$mol_fail = fail;
            if (typeof ErrorRight === 'string') {
                $mol_assert_equal(error.message, ErrorRight);
            }
            else {
                $mol_assert_ok(error instanceof ErrorRight);
            }
            return error;
        }
        finally {
            $.$mol_fail = fail;
        }
        $mol_fail(new Error('Not failed'));
    }
    $.$mol_assert_fail = $mol_assert_fail;
    function $mol_assert_equal(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (Number.isNaN(args[i]) && Number.isNaN(args[j]))
                    continue;
                if (args[i] !== args[j])
                    $mol_fail(new Error(`Not equal (${i + 1}:${j + 1})\n${args[i]}\n${args[j]}`));
            }
        }
    }
    $.$mol_assert_equal = $mol_assert_equal;
    function $mol_assert_unique(...args) {
        for (let i = 0; i < args.length; ++i) {
            for (let j = 0; j < args.length; ++j) {
                if (i === j)
                    continue;
                if (args[i] === args[j] || (Number.isNaN(args[i]) && Number.isNaN(args[j]))) {
                    $mol_fail(new Error(`args[${i}] = args[${j}] = ${args[i]}`));
                }
            }
        }
    }
    $.$mol_assert_unique = $mol_assert_unique;
    function $mol_assert_like(head, ...tail) {
        for (let [index, value] of Object.entries(tail)) {
            if (!$mol_compare_deep(value, head)) {
                const print = (val) => {
                    if (!val)
                        return val;
                    if (typeof val !== 'object')
                        return val;
                    if ('outerHTML' in val)
                        return val.outerHTML;
                    try {
                        return JSON.stringify(val);
                    }
                    catch (error) {
                        console.error(error);
                        return val;
                    }
                };
                return $mol_fail(new Error(`Not like (1:${+index + 2})\n${print(head)}\n---\n${print(value)}`));
            }
        }
    }
    $.$mol_assert_like = $mol_assert_like;
    function $mol_assert_dom(left, right) {
        $mol_assert_equal($mol_dom_serialize(left), $mol_dom_serialize(right));
    }
    $.$mol_assert_dom = $mol_assert_dom;
})($ || ($ = {}));
//mol/assert/assert.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'must be false'() {
            $mol_assert_not(0);
        },
        'must be true'() {
            $mol_assert_ok(1);
        },
        'two must be equal'() {
            $mol_assert_equal(2, 2);
        },
        'three must be equal'() {
            $mol_assert_equal(2, 2, 2);
        },
        'two must be unique'() {
            $mol_assert_unique([3], [3]);
        },
        'three must be unique'() {
            $mol_assert_unique([3], [3], [3]);
        },
        'two must be alike'() {
            $mol_assert_like([3], [3]);
        },
        'three must be alike'() {
            $mol_assert_like([3], [3], [3]);
        },
    });
})($ || ($ = {}));
//mol/assert/assert.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'FQN of anon function'($) {
            const $$ = Object.assign($, { $mol_func_name_test: (() => () => { })() });
            $mol_assert_equal($$.$mol_func_name_test.name, '');
            $mol_assert_equal($$.$mol_func_name($$.$mol_func_name_test), '$mol_func_name_test');
            $mol_assert_equal($$.$mol_func_name_test.name, '$mol_func_name_test');
        },
    });
})($ || ($ = {}));
//mol/func/name/name.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'get'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777 }));
            $mol_assert_equal(proxy.foo, 777);
        },
        'has'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777 }));
            $mol_assert_equal('foo' in proxy, true);
        },
        'set'() {
            const target = { foo: 777 };
            const proxy = $mol_delegate({}, () => target);
            proxy.foo = 123;
            $mol_assert_equal(target.foo, 123);
        },
        'getOwnPropertyDescriptor'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777 }));
            $mol_assert_like(Object.getOwnPropertyDescriptor(proxy, 'foo'), {
                value: 777,
                writable: true,
                enumerable: true,
                configurable: true,
            });
        },
        'ownKeys'() {
            const proxy = $mol_delegate({}, () => ({ foo: 777, [Symbol.toStringTag]: 'bar' }));
            $mol_assert_like(Reflect.ownKeys(proxy), ['foo', Symbol.toStringTag]);
        },
        'getPrototypeOf'() {
            class Foo {
            }
            const proxy = $mol_delegate({}, () => new Foo);
            $mol_assert_equal(Object.getPrototypeOf(proxy), Foo.prototype);
        },
        'setPrototypeOf'() {
            class Foo {
            }
            const target = {};
            const proxy = $mol_delegate({}, () => target);
            Object.setPrototypeOf(proxy, Foo.prototype);
            $mol_assert_equal(Object.getPrototypeOf(target), Foo.prototype);
        },
        'instanceof'() {
            class Foo {
            }
            const proxy = $mol_delegate({}, () => new Foo);
            $mol_assert_ok(proxy instanceof Foo);
            $mol_assert_ok(proxy instanceof $mol_delegate);
        },
        'autobind'() {
            class Foo {
            }
            const proxy = $mol_delegate({}, () => new Foo);
            $mol_assert_ok(proxy instanceof Foo);
            $mol_assert_ok(proxy instanceof $mol_delegate);
        },
    });
})($ || ($ = {}));
//mol/delegate/delegate.test.ts
;
"use strict";
//mol/type/writable/writable.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'init with overload'() {
            class X extends $mol_object {
                foo() {
                    return 1;
                }
            }
            var x = X.make({
                foo: () => 2,
            });
            $mol_assert_equal(x.foo(), 2);
        },
    });
})($ || ($ = {}));
//mol/object/object.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Collect deps'() {
            const pub1 = new $mol_wire_pub;
            const pub2 = new $mol_wire_pub;
            const sub = new $mol_wire_pub_sub;
            const bu1 = sub.track_on();
            try {
                pub1.promote();
                pub2.promote();
                pub2.promote();
            }
            finally {
                sub.track_cut();
                sub.track_off(bu1);
            }
            pub1.emit();
            pub2.emit();
            $mol_assert_like(sub.pub_list, [pub1, pub2, pub2]);
            const bu2 = sub.track_on();
            try {
                pub1.promote();
                pub1.promote();
                pub2.promote();
            }
            finally {
                sub.track_cut();
                sub.track_off(bu2);
            }
            pub1.emit();
            pub2.emit();
            $mol_assert_like(sub.pub_list, [pub1, pub1, pub2]);
        },
        'cyclic detection'($) {
            const sub1 = new $mol_wire_pub_sub;
            const sub2 = new $mol_wire_pub_sub;
            const bu1 = sub1.track_on();
            try {
                const bu2 = sub2.track_on();
                try {
                    $mol_assert_fail(() => sub1.promote(), 'Circular subscription');
                }
                finally {
                    sub2.track_cut();
                    sub2.track_off(bu2);
                }
            }
            finally {
                sub1.track_cut();
                sub1.track_off(bu1);
            }
        },
    });
})($ || ($ = {}));
//mol/wire/pub/sub/sub.test.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_after_mock_queue = [];
    function $mol_after_mock_warp() {
        const queue = $.$mol_after_mock_queue.splice(0);
        for (const task of queue)
            task();
    }
    $.$mol_after_mock_warp = $mol_after_mock_warp;
    class $mol_after_mock_commmon extends $mol_object2 {
        task;
        promise = Promise.resolve();
        cancelled = false;
        id;
        constructor(task) {
            super();
            this.task = task;
            $.$mol_after_mock_queue.push(task);
        }
        destructor() {
            const index = $.$mol_after_mock_queue.indexOf(this.task);
            if (index >= 0)
                $.$mol_after_mock_queue.splice(index, 1);
        }
    }
    $.$mol_after_mock_commmon = $mol_after_mock_commmon;
    class $mol_after_mock_timeout extends $mol_after_mock_commmon {
        delay;
        constructor(delay, task) {
            super(task);
            this.delay = delay;
        }
    }
    $.$mol_after_mock_timeout = $mol_after_mock_timeout;
})($ || ($ = {}));
//mol/after/mock/mock.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_timeout = $mol_after_mock_timeout;
    });
})($ || ($ = {}));
//mol/after/timeout/timeout.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_frame = $mol_after_mock_commmon;
    });
})($ || ($ = {}));
//mol/after/frame/frame.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Sync execution'() {
            class Sync extends $mol_object2 {
                static calc(a, b) {
                    return a + b;
                }
            }
            __decorate([
                $mol_wire_method
            ], Sync, "calc", null);
            $mol_assert_equal(Sync.calc(1, 2), 3);
        },
        async 'async <=> sync'() {
            class SyncAsync extends $mol_object2 {
                static async val(a) {
                    return a;
                }
                static sum(a, b) {
                    const syn = $mol_wire_sync(this);
                    return syn.val(a) + syn.val(b);
                }
                static async calc(a, b) {
                    return 5 + await $mol_wire_async(this).sum(a, b);
                }
            }
            $mol_assert_equal(await SyncAsync.calc(1, 2), 8);
        },
        async 'Idempotence control'() {
            class Idempotence extends $mol_object2 {
                static logs_idemp = 0;
                static logs_unidemp = 0;
                static log_idemp() {
                    this.logs_idemp += 1;
                }
                static log_unidemp() {
                    this.logs_unidemp += 1;
                }
                static async val(a) {
                    return a;
                }
                static sum(a, b) {
                    this.log_idemp();
                    this.log_unidemp();
                    const syn = $mol_wire_sync(this);
                    return syn.val(a) + syn.val(b);
                }
                static async calc(a, b) {
                    return 5 + await $mol_wire_async(this).sum(a, b);
                }
            }
            __decorate([
                $mol_wire_method
            ], Idempotence, "log_idemp", null);
            $mol_assert_equal(await Idempotence.calc(1, 2), 8);
            $mol_assert_equal(Idempotence.logs_idemp, 1);
            $mol_assert_equal(Idempotence.logs_unidemp, 3);
        },
        async 'Error handling'() {
            class Handle extends $mol_object2 {
                static async sum(a, b) {
                    $mol_fail(new Error('test error ' + (a + b)));
                }
                static check() {
                    try {
                        return $mol_wire_sync(Handle).sum(1, 2);
                    }
                    catch (error) {
                        if (error instanceof Promise)
                            $mol_fail_hidden(error);
                        $mol_assert_equal(error.message, 'test error 3');
                    }
                }
            }
            await $mol_wire_async(Handle).check();
        },
    });
})($ || ($ = {}));
//mol/wire/fiber/fiber.test.ts
;
"use strict";
//mol/type/tail/tail.test.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise() {
        let done;
        let fail;
        const promise = new Promise((d, f) => {
            done = d;
            fail = f;
        });
        return Object.assign(promise, {
            done,
            fail,
        });
    }
    $.$mol_promise = $mol_promise;
})($ || ($ = {}));
//mol/promise/promise.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wait_timeout_async(timeout) {
        const promise = $mol_promise();
        const task = new this.$mol_after_timeout(timeout, () => promise.done());
        return Object.assign(promise, {
            destructor: () => task.destructor()
        });
    }
    $.$mol_wait_timeout_async = $mol_wait_timeout_async;
    function $mol_wait_timeout(timeout) {
        return this.$mol_wire_sync(this).$mol_wait_timeout_async(timeout);
    }
    $.$mol_wait_timeout = $mol_wait_timeout;
})($ || ($ = {}));
//mol/wait/timeout/timeout.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        async 'Latest method calls wins'($) {
            class NameLogger extends $mol_object2 {
                static $ = $;
                static first = [];
                static last = [];
                static send(next) {
                    $mol_wire_sync(this.first).push(next);
                    this.$.$mol_wait_timeout(0);
                    this.last.push(next);
                }
            }
            const name = $mol_wire_async(NameLogger).send;
            name('john');
            const promise = name('jin');
            $.$mol_after_mock_warp();
            await promise;
            $mol_assert_like(NameLogger.first, ['john', 'jin']);
            $mol_assert_like(NameLogger.last, ['jin']);
        },
        async 'Latest function calls wins'($) {
            const first = [];
            const last = [];
            function send_name(next) {
                $mol_wire_sync(first).push(next);
                $.$mol_wait_timeout(0);
                last.push(next);
            }
            const name = $mol_wire_async(send_name);
            name('john');
            const promise = name('jin');
            $.$mol_after_mock_warp();
            await promise;
            $mol_assert_like(first, ['john', 'jin']);
            $mol_assert_like(last, ['jin']);
        },
    });
})($ || ($ = {}));
//mol/wire/async/async.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Cached channel'($) {
            class App extends $mol_object2 {
                static $ = $;
                static value(next = 1) {
                    return next + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            $mol_assert_equal(App.value(), 2);
            App.value(2);
            $mol_assert_equal(App.value(), 3);
        },
        'Read Pushed'($) {
            class App extends $mol_object2 {
                static $ = $;
                static value(next = 0) {
                    return next;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            $mol_assert_equal(App.value(1), 1);
            $mol_assert_equal(App.value(), 1);
        },
        'Mem overrides mem'($) {
            class Base extends $mol_object2 {
                static $ = $;
                static value(next = 1) {
                    return next + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], Base, "value", null);
            class Middle extends Base {
                static value(next) {
                    return super.value(next) + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], Middle, "value", null);
            class App extends Middle {
                static value(next) {
                    return super.value(next) * 3;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            $mol_assert_equal(App.value(), 9);
            $mol_assert_equal(App.value(5), 21);
            $mol_assert_equal(App.value(), 21);
        },
        'Auto recalculation of cached values'($) {
            class App extends $mol_object2 {
                static $ = $;
                static xxx(next) {
                    return next || 1;
                }
                static yyy() {
                    return this.xxx() + 1;
                }
                static zzz() {
                    return this.yyy() + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "xxx", null);
            __decorate([
                $mol_wire_solo
            ], App, "yyy", null);
            __decorate([
                $mol_wire_solo
            ], App, "zzz", null);
            $mol_assert_equal(App.yyy(), 2);
            $mol_assert_equal(App.zzz(), 3);
            App.xxx(5);
            $mol_assert_equal(App.zzz(), 7);
        },
        'Skip recalculation when actually no dependency changes'($) {
            const log = [];
            class App extends $mol_object2 {
                static $ = $;
                static xxx(next) {
                    log.push('xxx');
                    return next || 1;
                }
                static yyy() {
                    log.push('yyy');
                    return [Math.sign(this.xxx())];
                }
                static zzz() {
                    log.push('zzz');
                    return this.yyy()[0] + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "xxx", null);
            __decorate([
                $mol_wire_solo
            ], App, "yyy", null);
            __decorate([
                $mol_wire_solo
            ], App, "zzz", null);
            App.zzz();
            $mol_assert_like(log, ['zzz', 'yyy', 'xxx']);
            App.xxx(5);
            $mol_assert_like(log, ['zzz', 'yyy', 'xxx', 'xxx']);
            App.zzz();
            $mol_assert_like(log, ['zzz', 'yyy', 'xxx', 'xxx', 'yyy']);
        },
        'Flow: Auto'($) {
            class App extends $mol_object2 {
                static get $() { return $; }
                static source(next = 1) { return next; }
                static condition(next = true) { return next; }
                static counter = 0;
                static result() {
                    const res = this.condition() ? this.source() : 0;
                    return res + this.counter++;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "source", null);
            __decorate([
                $mol_wire_solo
            ], App, "condition", null);
            __decorate([
                $mol_wire_solo
            ], App, "result", null);
            $mol_assert_equal(App.result(), 1);
            $mol_assert_equal(App.counter, 1);
            App.source(10);
            $mol_assert_equal(App.result(), 11);
            $mol_assert_equal(App.counter, 2);
            App.condition(false);
            $mol_assert_equal(App.result(), 2);
            $mol_assert_equal(App.counter, 3);
            $mol_wire_fiber.sync();
            $mol_assert_equal(App.source(), 1);
            App.source(20);
            $mol_assert_equal(App.result(), 2);
            $mol_assert_equal(App.counter, 3);
            App.condition(true);
            $mol_assert_equal(App.result(), 23);
            $mol_assert_equal(App.counter, 4);
        },
        'Dupes: Equality'($) {
            let counter = 0;
            class App extends $mol_object2 {
                static $ = $;
                static foo(next) {
                    return next ?? { numbs: [1] };
                }
                static bar() {
                    return { ...this.foo(), count: ++counter };
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "foo", null);
            __decorate([
                $mol_wire_solo
            ], App, "bar", null);
            $mol_assert_like(App.bar(), { numbs: [1], count: 1 });
            App.foo({ numbs: [1] });
            $mol_assert_like(App.bar(), { numbs: [1], count: 1 });
            App.foo({ numbs: [2] });
            $mol_assert_like(App.bar(), { numbs: [2], count: 2 });
        },
        'Cycle: Fail'($) {
            class App extends $mol_object2 {
                static $ = $;
                static foo() {
                    return this.bar() + 1;
                }
                static bar() {
                    return this.foo() + 1;
                }
                static test() {
                    $mol_assert_fail(() => App.foo(), 'Circular subscription');
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "foo", null);
            __decorate([
                $mol_wire_solo
            ], App, "bar", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            App.test();
        },
        'Different order of pull and push'($) {
            class App extends $mol_object2 {
                static $ = $;
                static store(next = 0) {
                    return next;
                }
                static fast(next) {
                    return this.store(next);
                }
                static slow(next) {
                    if (next !== undefined)
                        this.slow();
                    return this.store(next);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "store", null);
            __decorate([
                $mol_wire_solo
            ], App, "fast", null);
            __decorate([
                $mol_wire_solo
            ], App, "slow", null);
            App.fast();
            $mol_assert_equal(App.slow(666), 666);
            $mol_assert_equal(App.fast(), App.slow(), 666);
            App.store(777);
            $mol_assert_equal(App.fast(), App.slow(), 777);
        },
        'Actions inside invariant'($) {
            class App extends $mol_object2 {
                static $ = $;
                static count(next = 0) {
                    return next;
                }
                static count2() {
                    return this.count();
                }
                static res() {
                    const count = this.count2();
                    if (!count)
                        this.count(count + 1);
                    return count + 1;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "count", null);
            __decorate([
                $mol_wire_solo
            ], App, "count2", null);
            __decorate([
                $mol_wire_solo
            ], App, "res", null);
            $mol_assert_like(App.res(), 1);
            App.count(5);
            $mol_assert_like(App.res(), 6);
        },
        async 'Toggle with async'($) {
            class App extends $mol_object2 {
                static $ = $;
                static checked(next = false) {
                    $$.$mol_wait_timeout(0);
                    return next;
                }
                static toggle() {
                    const prev = this.checked();
                    $mol_assert_unique(this.checked(!prev), prev);
                }
                static res() {
                    return this.checked();
                }
                static test() {
                    $mol_assert_equal(App.res(), false);
                    App.toggle();
                    $mol_assert_equal(App.res(), true);
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "checked", null);
            __decorate([
                $mol_wire_method
            ], App, "toggle", null);
            __decorate([
                $mol_wire_solo
            ], App, "res", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            await $mol_wire_async(App).test();
        },
        'Restore after error'($) {
            class App extends $mol_object2 {
                static get $() { return $; }
                static condition(next = false) { return next; }
                static broken() {
                    if (this.condition()) {
                        $mol_fail(new Error('test error'));
                    }
                    return 1;
                }
                static result() {
                    return this.broken();
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "condition", null);
            __decorate([
                $mol_wire_solo
            ], App, "broken", null);
            __decorate([
                $mol_wire_solo
            ], App, "result", null);
            $mol_assert_equal(App.result(), 1);
            App.condition(true);
            $mol_assert_fail(() => App.result());
            App.condition(false);
            $mol_assert_equal(App.result(), 1);
        },
        async 'Wait for data'($) {
            class App extends $mol_object2 {
                static $ = $;
                static async source() {
                    return 'Jin';
                }
                static middle() {
                    return $mol_wire_sync(this).source();
                }
                static target() {
                    return this.middle();
                }
                static test() {
                    $mol_assert_equal(App.target(), 'Jin');
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "middle", null);
            __decorate([
                $mol_wire_solo
            ], App, "target", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            await $mol_wire_async(App).test();
        },
        'Auto destroy on long alone'($) {
            let destroyed = false;
            class App extends $mol_object2 {
                static $ = $;
                static showing(next = true) {
                    return next;
                }
                static details() {
                    return {
                        destructor() {
                            destroyed = true;
                        }
                    };
                }
                static render() {
                    return this.showing() ? this.details() : null;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "showing", null);
            __decorate([
                $mol_wire_solo
            ], App, "details", null);
            __decorate([
                $mol_wire_solo
            ], App, "render", null);
            const details = App.render();
            $mol_assert_ok(details);
            App.showing(false);
            $mol_assert_not(App.render());
            App.showing(true);
            $mol_assert_equal(App.render(), details);
            $mol_wire_fiber.sync();
            $mol_assert_not(destroyed);
            App.showing(false);
            $mol_wire_fiber.sync();
            $mol_assert_ok(destroyed);
            App.showing(true);
            $mol_assert_unique(App.render(), details);
        },
        async 'Hold pubs while wait async task'($) {
            class App extends $mol_object2 {
                static $ = $;
                static counter = 0;
                static resets(next) {
                    return ($mol_wire_probe(() => this.resets()) ?? -1) + 1;
                }
                static async wait() { }
                static value() {
                    return ++this.counter;
                }
                static result() {
                    if (this.resets())
                        $mol_wire_sync(this).wait();
                    return this.value();
                }
                static test() {
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "resets", null);
            __decorate([
                $mol_wire_solo
            ], App, "value", null);
            __decorate([
                $mol_wire_solo
            ], App, "result", null);
            __decorate([
                $mol_wire_method
            ], App, "test", null);
            $mol_assert_equal(App.result(), 1);
            App.resets(null);
            $mol_wire_fiber.sync();
            $mol_assert_equal(await $mol_wire_async(App).result(), 1);
        },
        'Owned value has js-path name'() {
            class App extends $mol_object2 {
                static title() {
                    return new $mol_object2;
                }
            }
            __decorate([
                $mol_wire_solo
            ], App, "title", null);
            $mol_assert_equal(`${App.title()}`, 'App.title()');
        },
        'Unsubscribe from temp pubs on complete'($) {
            class Random extends $mol_object2 {
                static $ = $;
                static seed() {
                    return Math.random();
                }
                static resets(next) {
                    return Math.random();
                }
                static value() {
                    this.resets();
                    return this.seed();
                }
            }
            __decorate([
                $mol_wire_method
            ], Random, "seed", null);
            __decorate([
                $mol_wire_solo
            ], Random, "resets", null);
            __decorate([
                $mol_wire_solo
            ], Random, "value", null);
            const first = Random.value();
            Random.resets(null);
            $mol_assert_unique(Random.value(), first);
        },
    });
})($ || ($ = {}));
//mol/wire/solo/solo.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'Memoize by single simple key'($) {
            class Team extends $mol_object2 {
                static $ = $;
                static user_name(user, next) {
                    return next ?? user;
                }
                static user_names() {
                    return [
                        this.user_name('jin'),
                        this.user_name('john'),
                    ];
                }
            }
            __decorate([
                $mol_wire_plex
            ], Team, "user_name", null);
            __decorate([
                $mol_wire_solo
            ], Team, "user_names", null);
            $mol_assert_like(Team.user_names(), ['jin', 'john']);
            Team.user_name('jin', 'JIN');
            $mol_assert_like(Team.user_names(), ['JIN', 'john']);
        },
        'Memoize by single complex key'($) {
            class Map extends $mol_object2 {
                static $ = $;
                static tile(pos) {
                    return new String(`/tile=${pos}`);
                }
                static test() {
                    $mol_assert_like(this.tile([0, 1]), new String('/tile=0,1'));
                    $mol_assert_equal(this.tile([0, 1]), this.tile([0, 1]));
                }
            }
            __decorate([
                $mol_wire_plex
            ], Map, "tile", null);
            __decorate([
                $mol_wire_method
            ], Map, "test", null);
            Map.test();
        },
        'Owned value has js-path name'() {
            class App extends $mol_object2 {
                static like(friend) {
                    return new $mol_object2;
                }
                static relation([friend, props]) {
                    return new $mol_object2;
                }
            }
            __decorate([
                $mol_wire_plex
            ], App, "like", null);
            __decorate([
                $mol_wire_plex
            ], App, "relation", null);
            $mol_assert_equal(`${App.like(123)}`, 'App.like(123)');
            $mol_assert_equal(`${App.relation([123, [456]])}`, 'App.relation([123,[456]])');
        },
        'Deep deps'($) {
            class Fib extends $mol_object2 {
                static $ = $;
                static sums = 0;
                static value(index, next) {
                    if (next)
                        return next;
                    if (index < 2)
                        return 1;
                    ++this.sums;
                    return this.value(index - 1) + this.value(index - 2);
                }
            }
            __decorate([
                $mol_wire_plex
            ], Fib, "value", null);
            $mol_assert_equal(Fib.value(4), 5);
            $mol_assert_equal(Fib.sums, 3);
            Fib.value(1, 2);
            $mol_assert_equal(Fib.value(4), 8);
            $mol_assert_equal(Fib.sums, 6);
        },
    });
})($ || ($ = {}));
//mol/wire/plex/plex.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Previous value'() {
            class Cache extends $mol_object2 {
                static store(next) {
                    if (!next)
                        return {};
                    return {
                        ...$mol_wire_probe(() => this.store()) ?? {},
                        ...next,
                    };
                }
            }
            __decorate([
                $mol_wire_solo
            ], Cache, "store", null);
            $mol_assert_like(Cache.store(), {});
            $mol_assert_like(Cache.store({ foo: 666 }), { foo: 666 });
            $mol_assert_like(Cache.store({ bar: 777 }), { foo: 666, bar: 777 });
        },
    });
})($ || ($ = {}));
//mol/wire/probe/probe.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        $.$mol_after_tick = $mol_after_mock_commmon;
    });
})($ || ($ = {}));
//mol/after/tick/tick.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'run callback'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            $mol_assert_equal(Plus1.run(() => 2), 3);
        },
        'wrap function'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            const obj = {
                level: 2,
                pow: Plus1.func(function (a) {
                    return a ** this.level;
                })
            };
            $mol_assert_equal(obj.pow(2), 5);
        },
        'decorate field getter'() {
            class Plus1 extends $mol_wrapper {
                static last = 0;
                static wrap(task) {
                    return function (...args) {
                        return Plus1.last = (task.call(this, ...args) || 0) + 1;
                    };
                }
            }
            class Foo {
                static get two() {
                    return 1;
                }
                static set two(next) { }
            }
            __decorate([
                Plus1.field
            ], Foo, "two", null);
            $mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $mol_assert_equal(Plus1.last, 2);
            $mol_assert_equal(Foo.two, 2);
        },
        'decorate instance method'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo1 {
                level = 2;
                pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo1.prototype, "pow", null);
            const Foo2 = Foo1;
            const foo = new Foo2;
            $mol_assert_equal(foo.pow(2), 5);
        },
        'decorate static method'() {
            class Plus1 extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        return task.call(this, ...args) + 1;
                    };
                }
            }
            class Foo {
                static level = 2;
                static pow(a) {
                    return a ** this.level;
                }
            }
            __decorate([
                Plus1.method
            ], Foo, "pow", null);
            $mol_assert_equal(Foo.pow(2), 5);
        },
        'decorate class'() {
            class BarInc extends $mol_wrapper {
                static wrap(task) {
                    return function (...args) {
                        const foo = task.call(this, ...args);
                        foo.bar++;
                        return foo;
                    };
                }
            }
            let Foo = class Foo {
                bar;
                constructor(bar) {
                    this.bar = bar;
                }
            };
            Foo = __decorate([
                BarInc.class
            ], Foo);
            $mol_assert_equal(new Foo(2).bar, 3);
        },
    });
})($ || ($ = {}));
//mol/wrapper/wrapper.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'memoize field'() {
            class Foo {
                static one = 1;
                static get two() {
                    return ++this.one;
                }
                static set two(next) { }
            }
            __decorate([
                $mol_memo.field
            ], Foo, "two", null);
            $mol_assert_equal(Foo.two, 2);
            $mol_assert_equal(Foo.two, 2);
            Foo.two = 3;
            $mol_assert_equal(Foo.two, 3);
            $mol_assert_equal(Foo.two, 3);
        },
    });
})($ || ($ = {}));
//mol/memo/memo.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Primitives'() {
            $mol_assert_equal($mol_key(null), 'null');
            $mol_assert_equal($mol_key(false), 'false');
            $mol_assert_equal($mol_key(true), 'true');
            $mol_assert_equal($mol_key(0), '0');
            $mol_assert_equal($mol_key(''), '""');
        },
        'Array & POJO'() {
            $mol_assert_equal($mol_key([null]), '[null]');
            $mol_assert_equal($mol_key({ foo: 0 }), '{"foo":0}');
            $mol_assert_equal($mol_key({ foo: [false] }), '{"foo":[false]}');
        },
        'Function'() {
            const func = () => { };
            $mol_assert_equal($mol_key(func), $mol_key(func));
            $mol_assert_unique($mol_key(func), $mol_key(() => { }));
        },
        'Objects'() {
            class User {
            }
            const jin = new User();
            $mol_assert_equal($mol_key(jin), $mol_key(jin));
            $mol_assert_unique($mol_key(jin), $mol_key(new User()));
        },
        'Elements'() {
            const foo = $mol_jsx("div", null, "bar");
            $mol_assert_equal($mol_key(foo), $mol_key(foo));
            $mol_assert_unique($mol_key(foo), $mol_key($mol_jsx("div", null, "bar")));
        },
        'Custom JSON representation'() {
            class User {
                name;
                age;
                constructor(name, age) {
                    this.name = name;
                    this.age = age;
                }
                toJSON() { return { name: this.name }; }
            }
            $mol_assert_equal($mol_key(new User('jin', 18)), '{"name":"jin"}');
        },
        'Special native classes'() {
            $mol_assert_equal($mol_key(new Date('xyz')), 'null');
            $mol_assert_equal($mol_key(new Date('2001-01-02T03:04:05.678Z')), '"2001-01-02T03:04:05.678Z"');
            $mol_assert_equal($mol_key(/./), '"/./"');
            $mol_assert_equal($mol_key(/\./gimsu), '"/\\\\./gimsu"');
        },
    });
})($ || ($ = {}));
//mol/key/key.test.tsx
;
"use strict";
//mol/type/foot/foot.test.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_log extends $mol_object2 {
        static watch(task) {
            return task;
        }
        static track(fiber) {
            const prev = $mol_wire_probe(() => this.track(fiber));
            let next;
            try {
                next = fiber.sync();
            }
            finally {
                for (const pub of fiber.pub_list) {
                    if (pub instanceof $mol_wire_fiber) {
                        this.track(pub);
                    }
                }
            }
            if (fiber.host === this)
                return next;
            if ($mol_compare_deep(prev, next)) {
                this.$.$mol_log3_rise({
                    message: '💧 Same',
                    place: fiber,
                });
            }
            else if (prev !== undefined) {
                this.$.$mol_log3_rise({
                    message: '🔥 Next',
                    place: fiber,
                    prev,
                });
            }
            return next;
        }
        static active() {
            try {
                this.watch()?.();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            finally {
                for (const pub of $mol_wire_auto().pub_list) {
                    if (pub instanceof $mol_wire_fiber) {
                        this.track(pub);
                    }
                }
            }
        }
    }
    __decorate([
        $mol_mem
    ], $mol_wire_log, "watch", null);
    __decorate([
        $mol_mem_key
    ], $mol_wire_log, "track", null);
    __decorate([
        $mol_mem
    ], $mol_wire_log, "active", null);
    $.$mol_wire_log = $mol_wire_log;
})($ || ($ = {}));
//mol/wire/log/log.ts
;
"use strict";
var $;
(function ($) {
    $mol_wire_log.active();
})($ || ($ = {}));
//mol/wire/atom/atom.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'const returns stored value'() {
            const foo = { bar: $mol_const(Math.random()) };
            $mol_assert_equal(foo.bar(), foo.bar());
            $mol_assert_equal(foo.bar(), foo.bar['()']);
        },
    });
})($ || ($ = {}));
//mol/const/const.test.ts
;
"use strict";
//mol/type/keys/extract/extract.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'id auto generation'($) {
            class $mol_view_test_item extends $mol_view {
            }
            class $mol_view_test_block extends $mol_view {
                static $ = $;
                element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $mol_mem_key
            ], $mol_view_test_block.prototype, "element", null);
            var x = $mol_view_test_block.Root(0);
            $mol_assert_equal(x.dom_node().id, '$mol_view_test_block.Root(0)');
            $mol_assert_equal(x.element(0).dom_node().id, '$mol_view_test_block.Root(0).element(0)');
        },
        'caching ref to dom node'($) {
            var x = new class extends $mol_view {
            };
            x.$ = $;
            $mol_assert_equal(x.dom_node(), x.dom_node());
        },
        'content render'($) {
            class $mol_view_test extends $mol_view {
                sub() {
                    return ['lol', 5];
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $mol_assert_equal(node.innerHTML, 'lol5');
        },
        'bem attributes generation'($) {
            class $mol_view_test_item extends $mol_view {
            }
            class $mol_view_test_block extends $mol_view {
                Element(id) {
                    return new $mol_view_test_item();
                }
            }
            __decorate([
                $mol_mem_key
            ], $mol_view_test_block.prototype, "Element", null);
            var x = new $mol_view_test_block();
            x.$ = $;
            $mol_assert_equal(x.dom_node().getAttribute('mol_view_test_block'), '');
            $mol_assert_equal(x.dom_node().getAttribute('mol_view'), '');
            $mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_block_element'), '');
            $mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view_test_item'), '');
            $mol_assert_equal(x.Element(0).dom_node().getAttribute('mol_view'), '');
        },
        'render custom attributes'($) {
            class $mol_view_test extends $mol_view {
                attr() {
                    return {
                        'href': '#haha',
                        'required': true,
                        'hidden': false,
                    };
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $mol_assert_equal(node.getAttribute('href'), '#haha');
            $mol_assert_equal(node.getAttribute('required'), 'true');
            $mol_assert_equal(node.getAttribute('hidden'), null);
        },
        'render custom fields'($) {
            class $mol_view_test extends $mol_view {
                field() {
                    return {
                        'hidden': true
                    };
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_tree();
            $mol_assert_equal(node.hidden, true);
        },
        'attach event handlers'($) {
            var clicked = false;
            class $mol_view_test extends $mol_view {
                event() {
                    return {
                        'click': (next) => this.event_click(next)
                    };
                }
                event_click(next) {
                    clicked = true;
                }
            }
            var x = new $mol_view_test();
            x.$ = $;
            var node = x.dom_node();
            node.click();
            $mol_assert_ok(clicked);
        },
    });
})($ || ($ = {}));
//mol/view/view/view.test.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_simple extends $mol_view {
        some() {
            return 1;
        }
        bool() {
            return true;
        }
        str() {
            return "test";
        }
        arr() {
            return [];
        }
        arr_string() {
            return [];
        }
    }
    $.$mol_view_tree_test_simple = $mol_view_tree_test_simple;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/simple.test.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding extends $mol_view {
        value(val) {
            return this.task_title_new(val);
        }
        enabled() {
            return this.head_complete_enabled();
        }
        task_title_new(val) {
            if (val !== undefined)
                return val;
            return "123";
        }
        head_complete_enabled() {
            return false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_tree_test_binding.prototype, "task_title_new", null);
    $.$mol_view_tree_test_binding = $mol_view_tree_test_binding;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/binding.test.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_super extends $mol_view {
        some() {
            return {
                a: 0,
                b: 2
            };
        }
    }
    $.$mol_view_tree_test_attributes_super = $mol_view_tree_test_attributes_super;
    class $mol_view_tree_test_attributes extends $mol_view_tree_test_attributes_super {
        some() {
            return {
                ...super.some(),
                a: 1
            };
        }
    }
    $.$mol_view_tree_test_attributes = $mol_view_tree_test_attributes;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/attributes.test.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_attributes_subcomponent extends $mol_view {
        Page(id) {
            const obj = new this.$.$mol_view_tree_test_attributes_subcomponent_page();
            obj.Sub = () => this.page(id);
            return obj;
        }
        page(id) {
            return null;
        }
    }
    __decorate([
        $mol_mem_key
    ], $mol_view_tree_test_attributes_subcomponent.prototype, "Page", null);
    $.$mol_view_tree_test_attributes_subcomponent = $mol_view_tree_test_attributes_subcomponent;
    class $mol_view_tree_test_attributes_subcomponent_page extends $mol_view {
        Sub() {
            return null;
        }
    }
    $.$mol_view_tree_test_attributes_subcomponent_page = $mol_view_tree_test_attributes_subcomponent_page;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/subcomponent.test.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_tree_test_binding_right extends $mol_view {
        outer_width(v) {
            return this.Test().width(v);
        }
        Test() {
            const obj = new this.$.$mol_view_tree_test_binding_right_test();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_tree_test_binding_right.prototype, "Test", null);
    $.$mol_view_tree_test_binding_right = $mol_view_tree_test_binding_right;
    class $mol_view_tree_test_binding_right_test extends $mol_view {
        width(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_tree_test_binding_right_test.prototype, "width", null);
    $.$mol_view_tree_test_binding_right_test = $mol_view_tree_test_binding_right_test;
})($ || ($ = {}));
//mol/view/tree/test/-view.tree/binding_right.test.view.tree.ts
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            'simple props'($) {
                const app = $mol_view_tree_test_simple.make({ $ });
                $mol_assert_equal(app.some(), 1);
                $mol_assert_equal(app.bool(), true);
                $mol_assert_equal(app.str(), 'test');
                $mol_assert_ok(Array.isArray(app.arr()));
                $mol_assert_ok(Array.isArray(app.arr_string()));
            },
            'default value'($) {
                const app = $mol_view_tree_test_binding.make({ $ });
                $mol_assert_equal(app.value(), '123');
            },
            'both binding'($) {
                const app = $mol_view_tree_test_binding.make({ $ });
                $mol_assert_ok(app.value() !== '1');
                app.value('1');
                $mol_assert_equal(app.value(), '1');
            },
            'left binding'($) {
                const app = $mol_view_tree_test_binding.make({ $ });
                $mol_assert_not(app.head_complete_enabled());
                $mol_assert_not(app.enabled());
            },
            'sub component'($) {
                const app = $mol_view_tree_test_binding_right.make({ $ });
                $mol_assert_ok(app.Test() instanceof $mol_view_tree_test_binding_right_test);
            },
            'right binding - change owner property'($) {
                const app = $mol_view_tree_test_binding_right.make({ $ });
                const val = 123;
                $mol_assert_ok(app.outer_width() !== val);
                $mol_assert_ok(app.Test().width() !== val);
                app.outer_width(val);
                $mol_assert_equal(app.outer_width(), val);
                $mol_assert_equal(app.Test().width(), val);
            },
            'right binding - change part property'($) {
                const app = $mol_view_tree_test_binding_right.make({ $ });
                const val = 123;
                $mol_assert_ok(app.outer_width() !== val);
                $mol_assert_ok(app.Test().width() !== val);
                app.Test().width(val);
                $mol_assert_equal(app.Test().width(), val);
                $mol_assert_equal(app.outer_width(), val);
            },
            'attributes merging'($) {
                const app = $mol_view_tree_test_attributes.make({ $ });
                $mol_assert_like(app.some(), { a: 1, b: 2 });
            },
            'subcomponent indexed'($) {
                const app = $mol_view_tree_test_attributes_subcomponent.make({ $ });
                const val = 123;
                app.page = (index) => index;
                $mol_assert_equal(app.Page(val).Sub(), val);
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//mol/view/tree/test/tree.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'span for same uri'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 4);
            const child = span.span(4, 5, 8);
            $mol_assert_equal(child.uri, 'test.ts');
            $mol_assert_equal(child.row, 4);
            $mol_assert_equal(child.col, 5);
            $mol_assert_equal(child.length, 8);
        },
        'span after of given position'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 4);
            const child = span.after(11);
            $mol_assert_equal(child.uri, 'test.ts');
            $mol_assert_equal(child.row, 1);
            $mol_assert_equal(child.col, 7);
            $mol_assert_equal(child.length, 11);
        },
        'slice span - regular'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 5);
            const child = span.slice(1, 4);
            $mol_assert_equal(child.row, 1);
            $mol_assert_equal(child.col, 4);
            $mol_assert_equal(child.length, 3);
            const child2 = span.slice(2, 2);
            $mol_assert_equal(child2.col, 5);
            $mol_assert_equal(child2.length, 0);
        },
        'slice span - negative'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 5);
            const child = span.slice(-3, -1);
            $mol_assert_equal(child.row, 1);
            $mol_assert_equal(child.col, 5);
            $mol_assert_equal(child.length, 2);
        },
        'slice span - out of range'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 5);
            $mol_assert_fail(() => span.slice(-1, 3));
            $mol_assert_fail(() => span.slice(1, 6));
            $mol_assert_fail(() => span.slice(1, 10));
        },
        'error handling'($) {
            const span = new $mol_span('test.ts', '', 1, 3, 4);
            const error = span.error('Some error\n');
            $mol_assert_equal(error.message, 'Some error\ntest.ts#1:3/4');
        }
    });
})($ || ($ = {}));
//mol/span/span.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'inserting'($) {
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert($mol_tree2.struct('x'), 'a', 'b', 'c')
                .toString(), 'a b x\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b\n')
                .insert($mol_tree2.struct('x'), 'a', 'b', 'c', 'd')
                .toString(), 'a b c x\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert($mol_tree2.struct('x'), 0, 0, 0)
                .toString(), 'a b x\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b\n')
                .insert($mol_tree2.struct('x'), 0, 0, 0, 0)
                .toString(), 'a b \\\n\tx\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert($mol_tree2.struct('x'), null, null, null)
                .toString(), 'a b x\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b\n')
                .insert($mol_tree2.struct('x'), null, null, null, null)
                .toString(), 'a b \\\n\tx\n');
        },
        'deleting'($) {
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert(null, 'a', 'b', 'c')
                .toString(), 'a b\n');
            $mol_assert_equal($.$mol_tree2_from_string('a b c d\n')
                .insert(null, 0, 0, 0)
                .toString(), 'a b\n');
        },
        'hack'($) {
            const res = $.$mol_tree2_from_string(`foo bar xxx\n`)
                .hack({
                'bar': (input, belt) => [input.struct('777', input.hack(belt))],
            });
            $mol_assert_equal(res.toString(), 'foo 777 xxx\n');
        },
    });
})($ || ($ = {}));
//mol/tree2/tree2.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test({
        'tree parsing'($) {
            $mol_assert_equal($.$mol_tree2_from_string("foo\nbar\n").kids.length, 2);
            $mol_assert_equal($.$mol_tree2_from_string("foo\nbar\n").kids[1].type, "bar");
            $mol_assert_equal($.$mol_tree2_from_string("foo\n\n\n").kids.length, 1);
            $mol_assert_equal($.$mol_tree2_from_string("=foo\n\\bar\n").kids.length, 2);
            $mol_assert_equal($.$mol_tree2_from_string("=foo\n\\bar\n").kids[1].value, "bar");
            $mol_assert_equal($.$mol_tree2_from_string("foo bar \\pol\n").kids[0].kids[0].kids[0].value, "pol");
            $mol_assert_equal($.$mol_tree2_from_string("foo bar\n\t\\pol\n\t\\men\n").kids[0].kids[0].kids[1].value, "men");
            $mol_assert_equal($.$mol_tree2_from_string('foo bar \\text\n').toString(), 'foo bar \\text\n');
        },
        'Too many tabs'($) {
            const tree = `
				foo
						bar
			`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Too many tabs\ntest#3:1/6\n!!!!!!\n\t\t\t\t\t\tbar');
        },
        'Too few tabs'($) {
            const tree = `
					foo
				bar
			`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Too few tabs\ntest#3:1/4\n!!!!\n\t\t\t\tbar');
        },
        'Wrong nodes separator'($) {
            const tree = `foo  bar\n`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Wrong nodes separator\ntest#1:4/2\n   !!\nfoo  bar');
        },
        'Unexpected EOF, LF required'($) {
            const tree = `	foo`;
            $mol_assert_fail(() => {
                $.$mol_tree2_from_string(tree, 'test');
            }, 'Unexpected EOF, LF required\ntest#1:5/1\n	   !\n	foo');
        },
        'Errors skip and collect'($) {
            const tree = `foo  bar`;
            const errors = [];
            const $$ = $.$mol_ambient({
                $mol_fail: (error) => {
                    errors.push(error.message);
                    return null;
                }
            });
            const res = $$.$mol_tree2_from_string(tree, 'test');
            $mol_assert_like(errors, [
                'Wrong nodes separator\ntest#1:4/2\n   !!\nfoo  bar',
                'Unexpected EOF, LF required\ntest#1:9/1\n        !\nfoo  bar',
            ]);
            $mol_assert_equal(res.toString(), 'foo bar\n');
        },
    });
})($ || ($ = {}));
//mol/tree2/from/string/string.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'fromJSON'() {
            $mol_assert_equal($mol_tree2_from_json([]).toString(), '/\n');
            $mol_assert_equal($mol_tree2_from_json([false, true]).toString(), '/\n\tfalse\n\ttrue\n');
            $mol_assert_equal($mol_tree2_from_json([0, 1, 2.3]).toString(), '/\n\t0\n\t1\n\t2.3\n');
            $mol_assert_equal($mol_tree2_from_json(new Uint16Array([1, 10, 256])).toString(), '\\\x01\x00\n\\\x00\x00\x01\n');
            $mol_assert_equal($mol_tree2_from_json(['', 'foo', 'bar\nbaz']).toString(), '/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n');
            $mol_assert_equal($mol_tree2_from_json({ 'foo': false, 'bar\nbaz': 'lol' }).toString(), '*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n');
        },
    });
})($ || ($ = {}));
//mol/tree2/from/json/json.test.ts
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
(function ($_1) {
    $mol_test({
        'tree parsing'() {
            $mol_assert_equal($mol_tree.fromString("foo\nbar\n").sub.length, 2);
            $mol_assert_equal($mol_tree.fromString("foo\nbar\n").sub[1].type, "bar");
            $mol_assert_equal($mol_tree.fromString("foo\n\n\n").sub.length, 1);
            $mol_assert_equal($mol_tree.fromString("=foo\n\\bar\n").sub.length, 2);
            $mol_assert_equal($mol_tree.fromString("=foo\n\\bar\n").sub[1].data, "bar");
            $mol_assert_equal($mol_tree.fromString("foo bar \\pol").sub[0].sub[0].sub[0].data, "pol");
            $mol_assert_equal($mol_tree.fromString("foo bar\n\t\\pol\n\t\\men").sub[0].sub[0].sub[1].data, "men");
            $mol_assert_equal($mol_tree.fromString('foo bar \\text\n').toString(), 'foo bar \\text\n');
        },
        'inserting'() {
            $mol_assert_equal($mol_tree.fromString('a b c d').insert(new $mol_tree, 'a', 'b', 'c').toString(), 'a b \\\n');
            $mol_assert_equal($mol_tree.fromString('a b').insert(new $mol_tree, 'a', 'b', 'c', 'd').toString(), 'a b c \\\n');
            $mol_assert_equal($mol_tree.fromString('a b c d').insert(new $mol_tree, 0, 0, 0).toString(), 'a b \\\n');
            $mol_assert_equal($mol_tree.fromString('a b').insert(new $mol_tree, 0, 0, 0, 0).toString(), 'a b \\\n\t\\\n');
            $mol_assert_equal($mol_tree.fromString('a b c d').insert(new $mol_tree, null, null, null).toString(), 'a b \\\n');
            $mol_assert_equal($mol_tree.fromString('a b').insert(new $mol_tree, null, null, null, null).toString(), 'a b \\\n\t\\\n');
        },
        'fromJSON'() {
            $mol_assert_equal($mol_tree.fromJSON([]).toString(), '/\n');
            $mol_assert_equal($mol_tree.fromJSON([false, true]).toString(), '/\n\tfalse\n\ttrue\n');
            $mol_assert_equal($mol_tree.fromJSON([0, 1, 2.3]).toString(), '/\n\t0\n\t1\n\t2.3\n');
            $mol_assert_equal($mol_tree.fromJSON(['', 'foo', 'bar\nbaz']).toString(), '/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n');
            $mol_assert_equal($mol_tree.fromJSON({ 'foo': false, 'bar\nbaz': 'lol' }).toString(), '*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n');
        },
        'toJSON'() {
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('/\n').sub[0]), '[]');
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('/\n\tfalse\n\ttrue\n').sub[0]), '[false,true]');
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('/\n\t0\n\t1\n\t2.3\n').sub[0]), '[0,1,2.3]');
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('/\n\t\\\n\t\\foo\n\t\\\n\t\t\\bar\n\t\t\\baz\n').sub[0]), '["","foo","bar\\nbaz"]');
            $mol_assert_equal(JSON.stringify($mol_tree.fromString('*\n\tfoo false\n\t\\\n\t\t\\bar\n\t\t\\baz\n\t\t\\lol\n').sub[0]), '{"foo":false,"bar\\nbaz":"lol"}');
        },
        'hack'() {
            const res = $mol_tree.fromString(`foo bar xxx`).hack({
                '': (tree, context) => [tree.hack(context)],
                'bar': (tree, context) => [tree.hack(context).clone({ type: '777' })],
            });
            $mol_assert_equal(res.toString(), new $mol_tree({ type: 'foo 777 xxx' }).toString());
        },
        'errors handling'($) {
            const errors = [];
            class Tree extends $mol_tree {
                static $ = $.$mol_ambient({
                    $mol_fail: error => errors.push(error.message)
                });
            }
            Tree.fromString(`
				\t \tfoo
				bar \\data
			`, 'test');
            $mol_assert_like(errors, ['Syntax error at test:2\n \tfoo']);
        },
    });
})($ || ($ = {}));
//mol/tree/tree.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'local get set delete'() {
            var key = '$mol_state_local_test:' + Math.random();
            $mol_assert_equal($mol_state_local.value(key), null);
            $mol_state_local.value(key, 123);
            $mol_assert_equal($mol_state_local.value(key), 123);
            $mol_state_local.value(key, null);
            $mol_assert_equal($mol_state_local.value(key), null);
        },
    });
})($ || ($ = {}));
//mol/state/local/local.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test_mocks.push(context => {
        class $mol_state_local_mock extends $mol_state_local {
            static state = {};
            static value(key, next = this.state[key]) {
                return this.state[key] = (next || null);
            }
        }
        __decorate([
            $mol_mem_key
        ], $mol_state_local_mock, "value", null);
        context.$mol_state_local = $mol_state_local_mock;
    });
})($ || ($ = {}));
//mol/state/local/local.mock.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'decode utf8 string'() {
            const str = 'Hello, ΧΨΩЫ';
            const encoded = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 206, 167, 206, 168, 206, 169, 208, 171]);
            $mol_assert_equal($mol_charset_decode(encoded), str);
            $mol_assert_equal($mol_charset_decode(encoded, 'utf8'), str);
        },
        'decode empty string'() {
            const encoded = new Uint8Array([]);
            $mol_assert_equal($mol_charset_decode(encoded), '');
        },
    });
})($ || ($ = {}));
//mol/charset/decode/decode.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'encode utf8 string'() {
            const str = 'Hello, ΧΨΩЫ';
            const encoded = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 206, 167, 206, 168, 206, 169, 208, 171]);
            $mol_assert_like($mol_charset_encode(str), encoded);
        },
    });
})($ || ($ = {}));
//mol/charset/encode/encode.test.ts
;
"use strict";
var $;
(function ($) {
    class TestClass extends Uint8Array {
    }
    $mol_test({
        'Uint8Array vs itself'() {
            $mol_assert_ok($mol_compare_array(new Uint8Array, new Uint8Array));
            $mol_assert_ok($mol_compare_array(new Uint8Array([0]), new Uint8Array([0])));
            $mol_assert_not($mol_compare_array(new Uint8Array([0]), new Uint8Array([1])));
        },
        'Uint8Array vs subclassed array'() {
            $mol_assert_not($mol_compare_array(new Uint8Array, new TestClass));
        },
    });
})($ || ($ = {}));
//mol/compare/array/array.test.ts
;
"use strict";
var $;
(function ($_1) {
    $mol_test_mocks.push($ => {
        class $mol_locale_mock extends $mol_locale {
            lang(next = 'en') { return next; }
            static source(lang) {
                return {};
            }
        }
        __decorate([
            $mol_mem
        ], $mol_locale_mock.prototype, "lang", null);
        __decorate([
            $mol_mem_key
        ], $mol_locale_mock, "source", null);
        $.$mol_locale = $mol_locale_mock;
    });
})($ || ($ = {}));
//mol/locale/locale.test.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_tree_trim_remarks(def) {
        return def.transform(([node], sub) => (node.type === '-') ? null : node.clone({ sub: sub() }));
    }
    $.$mol_view_tree_trim_remarks = $mol_view_tree_trim_remarks;
    function $mol_view_tree_classes(defs) {
        return $mol_view_tree_trim_remarks(defs);
    }
    $.$mol_view_tree_classes = $mol_view_tree_classes;
    function $mol_view_tree_class_name(val) {
        return val.type;
    }
    $.$mol_view_tree_class_name = $mol_view_tree_class_name;
    function $mol_view_tree_super_name(val) {
        if (val.sub.length != 1)
            throw val.error('Wrong sub count');
        return val.sub[0].type;
    }
    $.$mol_view_tree_super_name = $mol_view_tree_super_name;
    function $mol_view_tree_class_props(def) {
        const props = {};
        const catch_prop = (prop, type = '') => {
            let def = prop;
            if (type === '=>') {
                if (prop.sub[0])
                    throw prop.error('Right binding can not have default value');
            }
            else {
                if (prop.sub.length === 0)
                    return;
                if (prop.sub[0].type === '-')
                    return;
                props[prop.type] = props[prop.type];
                def = prop.clone({
                    sub: [prop.sub[0].transform(([node, ...stack], sub) => {
                            if (['<=', '<=>', '=>'].indexOf(node.type) === -1)
                                return node.clone({ sub: sub() });
                            catch_prop(node.sub[0], node.type);
                            return node.clone({
                                sub: [node.sub[0].clone({
                                        sub: []
                                    })]
                            });
                        })]
                });
            }
            if (props[prop.type]) {
                if (props[prop.type].toString() !== def.toString()) {
                    throw def.error('Property already defined with another default value' + props[prop.type].error('').message + '\n---');
                }
            }
            else {
                props[prop.type] = def;
            }
        };
        def.sub[0].sub.map(sub => catch_prop(sub));
        return def.clone({
            type: '',
            sub: Object.keys(props).map(name => props[name]),
        });
    }
    $.$mol_view_tree_class_props = $mol_view_tree_class_props;
    function $mol_view_tree_prop_name(prop) {
        return (prop.type.match(/^\w+/) || [])[0] || '';
    }
    $.$mol_view_tree_prop_name = $mol_view_tree_prop_name;
    function $mol_view_tree_prop_key(prop) {
        return (prop.type.match(/!(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_key = $mol_view_tree_prop_key;
    function $mol_view_tree_prop_next(prop) {
        return (prop.type.match(/\?(\w+)$/) || [])[1] || '';
    }
    $.$mol_view_tree_prop_next = $mol_view_tree_prop_next;
    function $mol_view_tree_prop_value(prop) {
        if (prop.sub.length != 1)
            throw prop.error(`Wrong sub count (${prop.sub.length})`);
        return prop.sub[0];
    }
    $.$mol_view_tree_prop_value = $mol_view_tree_prop_value;
    function $mol_view_tree_value_type(val) {
        switch (val.type) {
            case 'true': return 'bool';
            case 'false': return 'bool';
            case 'null': return 'null';
            case '*': return 'dict';
            case '@': return 'locale';
            case '': return 'string';
            case '<=': return 'get';
            case '<=>': return 'bind';
            case '=>': return 'put';
        }
        switch (val.type[0]) {
            case '/': return 'list';
            case '$': return 'object';
        }
        if (Number(val.type).toString() == val.type)
            return 'number';
        throw val.error('Wrong value');
    }
    $.$mol_view_tree_value_type = $mol_view_tree_value_type;
    function $mol_view_tree_compile(tree) {
        const splittedUri = tree.uri.split(/[#\\\/]/);
        splittedUri.pop();
        const fileName = splittedUri.pop();
        const SourceNode = (row, col, fileName, text) => text;
        var content = [];
        var locales = {};
        for (let def of $mol_view_tree_classes(tree).sub) {
            if (!/^\$\w+$/.test(def.type))
                throw def.error('Wrong component name');
            var parent = def.sub[0];
            var members = {};
            for (let param of $mol_view_tree_class_props(def).sub) {
                try {
                    var needSet = false;
                    var needCache = false;
                    if (param.type === '<=>') {
                        param = param.sub[0];
                    }
                    if (param.type === '<=') {
                        param = param.sub[0];
                    }
                    var propName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(param.type);
                    if (propName[3]) {
                        needSet = true;
                        needCache = true;
                    }
                    const getValue = (value, definition) => {
                        try {
                            switch (true) {
                                case (value.type === ''):
                                    return [JSON.stringify(value.value)];
                                case (value.type === '@'):
                                    const key = `${def.type}_${param.type.replace(/[?!].*/, '')}`;
                                    locales[key] = value.value;
                                    return [`this.$.$mol_locale.text( ${JSON.stringify(key)} )`];
                                case (value.type === '-'):
                                    return null;
                                case (value.type[0] === '/'):
                                    const item_type = value.type.substring(1);
                                    var items = [];
                                    value.sub.forEach(item => {
                                        if (item.type === '-')
                                            return;
                                        if (item.type === '^') {
                                            items.push(`...super.${param.type}()`);
                                            return;
                                        }
                                        var val = getValue(item);
                                        if (val)
                                            items.push(val.join(""));
                                    });
                                    return [`[`, items.join(' , '), `]`, (item_type ? ` as readonly ( ${item_type} )[]` : ` as readonly any[]`)];
                                case (value.type[0] === '$'):
                                    if (!definition)
                                        throw value.error('Objects should be bound');
                                    needCache = true;
                                    var overs = [];
                                    value.sub.forEach(over => {
                                        if (/^[-\/]?$/.test(over.type))
                                            return '';
                                        var overName = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                        var ns = needSet;
                                        if (over.sub[0].type === '=>') {
                                            if (over.sub[0].sub.length === 1) {
                                                const [, own_name, own_key, own_next] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.sub[0].sub[0].type);
                                                let own_args = [];
                                                if (own_key)
                                                    own_args.push(` ${own_key} : any `);
                                                if (own_next)
                                                    own_args.push(` ${own_next}? : any `);
                                                let [, their_name, ...their_args] = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(over.type);
                                                their_args = their_args.filter(Boolean);
                                                members[own_name] = [`\t${own_name}(${own_args.join(',')}) {\n\t\treturn this.${propName[1]}(${propName[2] || ''}).${their_name}( ${their_args.join(' , ')} )\n\t}\n\n`];
                                                return;
                                            }
                                        }
                                        var v = getValue(over.sub[0]);
                                        let args = [];
                                        if (overName[2])
                                            args.push(` ${overName[2]} : any `);
                                        if (overName[3])
                                            args.push(` ${overName[3]}? : any `);
                                        overs.push(...['\t\t\tobj.', SourceNode(over.row, over.col, fileName, overName[1]), ' = (', args.join(','), ') => ', ...(v || []), '\n']);
                                        needSet = ns;
                                    });
                                    const object_args = value.select('/', '').sub.map(arg => getValue(arg)).join(' , ');
                                    return ['(( obj )=>{\n', ...overs, '\t\t\treturn obj\n\t\t})( new this.$.', SourceNode(value.row, value.col, fileName, value.type), '( ', object_args, ' ) )'];
                                case (value.type === '*'):
                                    var opts = [];
                                    value.sub.forEach(opt => {
                                        if (opt.type === '-')
                                            return '';
                                        if (opt.type === '^') {
                                            opts.push(`\t\t\t...super.${param.type}() ,\n`);
                                            return;
                                        }
                                        var key = /(.*?)(?:\?(\w+))?$/.exec(opt.type);
                                        var ns = needSet;
                                        var v = getValue(opt.sub[0]);
                                        var arg = key[2] ? ` ( ${key[2]}? : any )=> ` : '';
                                        opts.push(...['\t\t\t"', SourceNode(opt.row, opt.col, fileName, key[1] + '" : '), arg, ' ', ...(v || []), ' ,\n']);
                                        needSet = ns;
                                    });
                                    return ['({\n', opts.join(''), '\t\t})'];
                                case (value.type === '<=>'):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] + ' ,' : '') + ' ' + type[3] + ' )'];
                                    }
                                    break;
                                case (value.type === '<='):
                                    if (value.sub.length === 1) {
                                        var type = /(.*?)(?:\!(\w+))?(?:\?(\w+))?$/.exec(value.sub[0].type);
                                        return ['this.' + type[1] + '(' + (type[2] ? type[2] : '') + ')'];
                                    }
                                    break;
                            }
                            switch (value.type) {
                                case 'true':
                                case 'false':
                                    return [value.type];
                                case 'null':
                                    return ['null as any'];
                            }
                            if (Number(value.type).toString() == value.type)
                                return [value.type];
                            throw value.error('Wrong value');
                        }
                        catch (err) {
                            throw err;
                        }
                    };
                    if (param.sub.length > 1)
                        throw new Error('Too more sub');
                    param.sub.forEach(child => {
                        var val = getValue(child, true);
                        if (!val)
                            return;
                        var args = [];
                        if (propName[2])
                            args.push(` ${propName[2]} : any `);
                        if (propName[3])
                            args.push(` ${propName[3]}? : any , force? : $${''}mol_mem_force `);
                        if (needSet)
                            val = [
                                `( ${propName[3]} !== void 0 ) ? ${propName[3]} : `,
                                ...val
                            ];
                        val = ['return ', ...val];
                        var decl = ['\t', SourceNode(param.row, param.col, fileName, propName[1]), '(', args.join(','), ') {\n\t\t', ...val, '\n\t}\n\n'];
                        if (needCache) {
                            if (propName[2])
                                decl = ['\t@ $', 'mol_mem_key\n', ...decl];
                            else
                                decl = ['\t@ $', 'mol_mem\n', ...decl];
                        }
                        decl = ['\t/**\n\t *  ```\n', param.toString().trim().replace(/^/mg, '\t *  '), '\n\t *  ```\n\t **/\n', ...decl];
                        members[propName[1]] = decl;
                    });
                }
                catch (err) {
                    throw err;
                }
            }
            var body = Object.keys(members).reduce(function (acc, name) {
                const items = members[name] ? members[name] : ['\t', name, '() { return null as any }\n\t}\n'];
                return [...acc, ...items];
            }, []);
            var classes = ['namespace $ { export class ', SourceNode(def.row, def.col, fileName, def.type), ' extends ', SourceNode(parent.row, parent.col, fileName, parent.type), ' {\n\n', ...body, '} }\n'];
            content = [...content, ...classes];
        }
        return { script: content.join(''), locales };
    }
    $.$mol_view_tree_compile = $mol_view_tree_compile;
})($ || ($ = {}));
//mol/view/tree/tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_sheet_test1 extends $mol_view {
        Item() { return new $mol_view; }
    }
    $.$mol_style_sheet_test1 = $mol_style_sheet_test1;
    class $mol_style_sheet_test2 extends $mol_view {
        List() { return new $mol_style_sheet_test1; }
    }
    $.$mol_style_sheet_test2 = $mol_style_sheet_test2;
    $mol_test({
        'component block styles'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                display: 'block',
                zIndex: 1,
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tdisplay: block;\n\tz-index: 1;\n}\n');
        },
        'various units'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { px, per } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                width: per(50),
                height: px(50),
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: 50%;\n\theight: 50px;\n}\n');
        },
        'various functions'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { calc } = $mol_style_func;
            const { px, per } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                width: calc(`${per(100)} - ${px(1)}`),
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\twidth: calc(100% - 1px);\n}\n');
        },
        'property groups'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { px } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                flex: {
                    grow: 5
                }
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tflex-grow: 5;\n}\n');
        },
        'property shorthand'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { px } = $mol_style_unit;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                padding: [px(5), 'auto']
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tpadding: 5px auto;\n}\n');
        },
        'sequenced values'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { url } = $mol_style_func;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                background: {
                    image: [[url('foo')], [url('bar')]],
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbackground-image: url("foo"),url("bar");\n}\n');
        },
        'sequenced structs'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const { rem } = $mol_style_unit;
            const { hsla } = $mol_style_func;
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                box: {
                    shadow: [
                        {
                            inset: true,
                            x: 0,
                            y: 0,
                            blur: rem(.5),
                            spread: 0,
                            color: 'red',
                        },
                        {
                            inset: false,
                            x: 0,
                            y: 0,
                            blur: rem(.5),
                            spread: 0,
                            color: 'blue',
                        },
                    ],
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test] {\n\tbox-shadow: inset 0 0 0.5rem 0 red,0 0 0.5rem 0 blue;\n}\n');
        },
        'component block styles with pseudo class'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                ':focus': {
                    color: 'red',
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test]:focus {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component block styles with pseudo element'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '::first-line': {
                    color: 'red',
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test]::first-line {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component block styles with media query'() {
            class $mol_style_sheet_test extends $mol_view {
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '@media': {
                    'print': {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $mol_assert_equal(sheet, '@media print {\n[mol_style_sheet_test] {\n\tcolor: red;\n\tdisplay: block;\n}\n}\n');
        },
        'component block styles with attribute value'() {
            class $mol_style_sheet_test extends $mol_view {
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '@': {
                    mol_theme: {
                        '$mol_theme_dark': {
                            color: 'red',
                            display: 'block',
                        },
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test]:where([mol_theme="$mol_theme_dark"]) {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element styles'() {
            class $mol_style_sheet_test extends $mol_view {
                Item() { return new $mol_view; }
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                Item: {
                    color: 'red',
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test_item] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element of element styles'() {
            const sheet = $mol_style_sheet($mol_style_sheet_test2, {
                List: {
                    Item: {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test2_list_item] {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'component element styles with block attribute value'() {
            class $mol_style_sheet_test extends $mol_view {
                Item() { return new $mol_view; }
                attr() {
                    return {
                        mol_theme: '$mol_theme_dark'
                    };
                }
            }
            const sheet = $mol_style_sheet($mol_style_sheet_test, {
                '@': {
                    mol_theme: {
                        '$mol_theme_dark': {
                            Item: {
                                color: 'red',
                            },
                        },
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test]:where([mol_theme="$mol_theme_dark"]) :where([mol_style_sheet_test_item]) {\n\tcolor: red;\n}\n');
        },
        'inner component styles by class'() {
            const sheet = $mol_style_sheet($mol_style_sheet_test2, {
                $mol_style_sheet_test1: {
                    color: 'red',
                    display: 'block',
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test2] :where([mol_style_sheet_test1]) {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
        'child component styles by class'() {
            const sheet = $mol_style_sheet($mol_style_sheet_test2, {
                '>': {
                    $mol_style_sheet_test1: {
                        color: 'red',
                        display: 'block',
                    },
                },
            });
            $mol_assert_equal(sheet, '[mol_style_sheet_test2] > :where([mol_style_sheet_test1]) {\n\tcolor: red;\n\tdisplay: block;\n}\n');
        },
    });
})($ || ($ = {}));
//mol/style/sheet/sheet.test.ts
;
"use strict";
var $;
(function ($_1) {
    var $$;
    (function ($$) {
        $mol_test({
            'handle clicks by default'($) {
                let clicked = false;
                const clicker = $mol_button.make({
                    $,
                    click: (event) => { clicked = true; },
                });
                const element = clicker.dom_tree();
                const event = $mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $mol_assert_ok(clicked);
            },
            'no handle clicks if disabled'($) {
                let clicked = false;
                const clicker = $mol_button.make({
                    $,
                    click: (event) => { clicked = true; },
                    enabled: () => false,
                });
                const element = clicker.dom_tree();
                const event = $mol_dom_context.document.createEvent('mouseevent');
                event.initEvent('click', true, true);
                element.dispatchEvent(event);
                $mol_assert_not(clicked);
            },
            'Store error'($) {
                const clicker = $mol_button.make({
                    $,
                    click: (event) => $.$mol_fail(new Error('Test error')),
                });
                const event = $mol_dom_context.document.createEvent('mouseevent');
                $mol_assert_fail(() => clicker.event_activate(event), 'Test error');
                $mol_assert_equal(clicker.status()[0].message, 'Test error');
            },
        });
    })($$ = $_1.$$ || ($_1.$$ = {}));
})($ || ($ = {}));
//mol/button/button.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'all cases of using maybe'() {
            $mol_assert_equal($mol_maybe(0)[0], 0);
            $mol_assert_equal($mol_maybe(false)[0], false);
            $mol_assert_equal($mol_maybe(null)[0], void 0);
            $mol_assert_equal($mol_maybe(void 0)[0], void 0);
            $mol_assert_equal($mol_maybe(void 0).map(v => v.toString())[0], void 0);
            $mol_assert_equal($mol_maybe(0).map(v => v.toString())[0], '0');
        },
    });
})($ || ($ = {}));
//mol/maybe/maybe.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'null by default'() {
            const key = String(Math.random());
            $mol_assert_equal($mol_state_session.value(key), null);
        },
        'storing'() {
            const key = String(Math.random());
            $mol_state_session.value(key, '$mol_state_session_test');
            $mol_assert_equal($mol_state_session.value(key), '$mol_state_session_test');
            $mol_state_session.value(key, null);
            $mol_assert_equal($mol_state_session.value(key), null);
        },
    });
})($ || ($ = {}));
//mol/state/session/session.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'default data'() {
            const store = new $mol_store({
                foo: 1,
                bar: 2,
            });
            $mol_assert_equal(store.data().foo, 1);
            $mol_assert_equal(store.data().bar, 2);
        },
        'get and set by shapshot'() {
            const store = new $mol_store({
                foo: 1,
                bar: 2,
            });
            $mol_assert_equal(store.snapshot(), '{"foo":1,"bar":2}');
            store.snapshot('{"foo":2,"bar":1}');
            $mol_assert_equal(store.data().foo, 2);
            $mol_assert_equal(store.data().bar, 1);
        },
        'get and set by key'() {
            const store = new $mol_store({
                foo: 1,
            });
            $mol_assert_equal(store.value('foo'), 1);
            store.value('foo', 2);
            $mol_assert_equal(store.value('foo'), 2);
        },
        'get and set by lens'() {
            const store = new $mol_store({
                foo: 1,
            });
            const lens = store.sub('foo');
            $mol_assert_equal(lens.data(), 1);
            lens.data(2);
            $mol_assert_equal(lens.data(), 2);
        },
        'views and actions'() {
            const Person = class extends $mol_store {
                get full_name() {
                    const name = this.value('name');
                    return name.first + ' ' + name.last;
                }
                swap_names() {
                    const name = this.value('name');
                    this.value('name', {
                        first: name.last,
                        last: name.first,
                    });
                }
            };
            const store = new Person({
                name: {
                    first: 'Foo',
                    last: 'Bar',
                },
            });
            $mol_assert_equal(store.full_name, 'Foo Bar');
            store.swap_names();
            $mol_assert_equal(store.full_name, 'Bar Foo');
        },
        'nested views and actions'() {
            class Person extends $mol_store {
                get full_name() {
                    const name = this.value('name');
                    return name.first + ' ' + name.last;
                }
                swap_names() {
                    const name = this.value('name');
                    this.value('name', {
                        first: name.last,
                        last: name.first,
                    });
                }
            }
            class Band extends $mol_store {
                get members() {
                    const lens = this.sub('members');
                    return new Proxy({}, {
                        get: (_, id) => lens.sub(id, new Person),
                    });
                }
            }
            const band = new Band({
                name: 'Dream Team',
                members: {
                    foo: {
                        name: {
                            first: 'Foo',
                            last: 'Bar',
                        },
                    }
                }
            });
            const person = band.members['foo'];
            $mol_assert_equal(person.full_name, 'Foo Bar');
            person.swap_names();
            $mol_assert_equal(band.data().members['foo'].name.first, 'Bar');
            $mol_assert_equal(band.data().members['foo'].name.last, 'Foo');
        },
    });
})($ || ($ = {}));
//mol/store/store.test.ts
;
"use strict";
//mol/type/merge/merge.test.ts
;
"use strict";
//mol/type/partial/undefined/undefined.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'config by value'() {
            const N = $mol_data_setup((a) => a, 5);
            $mol_assert_equal(N.config, 5);
        },
    });
})($ || ($ = {}));
//mol/data/setup/setup.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'equal paths'() {
            const diff = $mol_diff_path([1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]);
            $mol_assert_like(diff, {
                prefix: [1, 2, 3, 4],
                suffix: [[], [], []],
            });
        },
        'different suffix'() {
            const diff = $mol_diff_path([1, 2, 3, 4], [1, 2, 3, 5], [1, 2, 5, 4]);
            $mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [3, 5], [5, 4]],
            });
        },
        'one contains other'() {
            const diff = $mol_diff_path([1, 2, 3, 4], [1, 2], [1, 2, 3]);
            $mol_assert_like(diff, {
                prefix: [1, 2],
                suffix: [[3, 4], [], [3]],
            });
        },
        'fully different'() {
            const diff = $mol_diff_path([1, 2], [3, 4], [5, 6]);
            $mol_assert_like(diff, {
                prefix: [],
                suffix: [[1, 2], [3, 4], [5, 6]],
            });
        },
    });
})($ || ($ = {}));
//mol/diff/path/path.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is number'() {
            $mol_data_number(0);
        },
        'Is not number'() {
            $mol_assert_fail(() => {
                $mol_data_number('x');
            }, 'x is not a number');
        },
        'Is object number'() {
            $mol_assert_fail(() => {
                $mol_data_number(new Number(''));
            }, '0 is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/number/number.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is string'() {
            $mol_data_string('');
        },
        'Is not string'() {
            $mol_assert_fail(() => {
                $mol_data_string(0);
            }, '0 is not a string');
        },
        'Is object string'() {
            $mol_assert_fail(() => {
                $mol_data_string(new String('x'));
            }, 'x is not a string');
        },
    });
})($ || ($ = {}));
//mol/data/string/string.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Fit to record'() {
            const User = $mol_data_record({ age: $mol_data_number });
            User({ age: 0 });
        },
        'Extends record'() {
            const User = $mol_data_record({ age: $mol_data_number });
            User({ age: 0, name: 'Jin' });
        },
        'Shrinks record'() {
            $mol_assert_fail(() => {
                const User = $mol_data_record({ age: $mol_data_number, name: $mol_data_string });
                User({ age: 0 });
            }, '["name"] undefined is not a string');
        },
        'Shrinks deep record'() {
            $mol_assert_fail(() => {
                const User = $mol_data_record({ wife: $mol_data_record({ age: $mol_data_number }) });
                User({ wife: {} });
            }, '["wife"] ["age"] undefined is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/record/record.test.ts
;
"use strict";
var $;
(function ($) {
    const Age = $mol_data_optional($mol_data_number);
    const Age_or_zero = $mol_data_optional($mol_data_number, () => 0);
    $mol_test({
        'Is not present'() {
            $mol_assert_equal(Age(undefined), undefined);
        },
        'Is present'() {
            $mol_assert_equal(Age(0), 0);
        },
        'Fallbacked'() {
            $mol_assert_equal(Age_or_zero(undefined), 0);
        },
        'Is null'() {
            $mol_assert_fail(() => Age(null), 'null is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/optional/optional.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is empty array'() {
            $mol_data_array($mol_data_number)([]);
        },
        'Is array'() {
            $mol_data_array($mol_data_number)([1, 2]);
        },
        'Is not array'() {
            $mol_assert_fail(() => {
                $mol_data_array($mol_data_number)({ [0]: 1, length: 1, map: () => { } });
            }, '[object Object] is not an array');
        },
        'Has wrong item'() {
            $mol_assert_fail(() => {
                $mol_data_array($mol_data_number)([1, '1']);
            }, '[1] 1 is not a number');
        },
        'Has wrong deep item'() {
            $mol_assert_fail(() => {
                $mol_data_array($mol_data_array($mol_data_number))([[], [0, 0, false]]);
            }, '[1] [2] false is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/array/array.test.ts
;
"use strict";
//mol/type/intersect/intersect.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'escape'() {
            const specials = $mol_regexp.from('.*+?^${}()|[]\\');
            $mol_assert_equal(specials.source, '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\');
        },
        'char code'() {
            const space = $mol_regexp.from(32);
            $mol_assert_like(' '.match(space), [' ']);
        },
        'repeat fixed'() {
            const { repeat, decimal_only: digit } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            $mol_assert_like('#2020#'.match(year), ['2020']);
        },
        'greedy repeat'() {
            const { repeat, repeat_greedy, latin_only: letter } = $mol_regexp;
            $mol_assert_like('abc'.match(repeat(letter, 1, 2)), ['a', 'b', 'c']);
            $mol_assert_like('abc'.match(repeat_greedy(letter, 1, 2)), ['ab', 'c']);
        },
        'repeat range'() {
            const { repeat_greedy, decimal_only: digit } = $mol_regexp;
            const year = repeat_greedy(digit, 2, 4);
            $mol_assert_like('#2#'.match(year), null);
            $mol_assert_like('#20#'.match(year), ['20']);
            $mol_assert_like('#2020#'.match(year), ['2020']);
            $mol_assert_like('#20201#'.match(year), ['2020']);
        },
        'repeat from'() {
            const { repeat_greedy, latin_only: letter } = $mol_regexp;
            const name = repeat_greedy(letter, 2);
            $mol_assert_like('##'.match(name), null);
            $mol_assert_like('#a#'.match(name), null);
            $mol_assert_like('#ab#'.match(name), ['ab']);
            $mol_assert_like('#abc#'.match(name), ['abc']);
        },
        'from string'() {
            const regexp = $mol_regexp.from('[\\d]');
            $mol_assert_equal(regexp.source, '\\[\\\\d\\]');
            $mol_assert_equal(regexp.flags, 'gsu');
        },
        'from regexp'() {
            const regexp = $mol_regexp.from(/[\d]/i);
            $mol_assert_equal(regexp.source, '[\\d]');
            $mol_assert_equal(regexp.flags, 'i');
        },
        'split'() {
            const regexp = $mol_regexp.from(';');
            $mol_assert_like('aaa;bbb;ccc'.split(regexp), ['aaa', ';', 'bbb', ';', 'ccc']);
            $mol_assert_like('aaa;;ccc'.split(regexp), ['aaa', ';', '', ';', 'ccc']);
            $mol_assert_like('aaa'.split(regexp), ['aaa']);
            $mol_assert_like(''.split(regexp), ['']);
        },
        'test for matching'() {
            const regexp = $mol_regexp.from('foo');
            $mol_assert_like(regexp.test(''), false);
            $mol_assert_like(regexp.test('fo'), false);
            $mol_assert_like(regexp.test('foo'), true);
            $mol_assert_like(regexp.test('foobar'), true);
            $mol_assert_like(regexp.test('barfoo'), true);
        },
        'case ignoring'() {
            const xxx = $mol_regexp.from('x', { ignoreCase: true });
            $mol_assert_like(xxx.flags, 'gisu');
            $mol_assert_like(xxx.exec('xx')[0], 'x');
            $mol_assert_like(xxx.exec('XX')[0], 'X');
        },
        'multiline mode'() {
            const { end, from } = $mol_regexp;
            const xxx = from(['x', end], { multiline: true });
            $mol_assert_like(xxx.exec('x\ny')[0], 'x');
            $mol_assert_like(xxx.flags, 'gmsu');
        },
        'flags override'() {
            const triplet = $mol_regexp.from($mol_regexp.from(/.../, { ignoreCase: true }), { multiline: true });
            $mol_assert_like(triplet.toString(), '/.../gmsu');
        },
        'sequence'() {
            const { begin, end, decimal_only: digit, repeat, from } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const date = from([begin, year, dash, month, dash, day, end]);
            $mol_assert_like(date.exec('2020-01-02')[0], '2020-01-02');
        },
        'optional'() {
            const name = $mol_regexp.from(['A', ['4']]);
            $mol_assert_equal('AB'.match(name)[0], 'A');
            $mol_assert_equal('A4'.match(name)[0], 'A4');
        },
        'anon variants'() {
            const name = $mol_regexp.from(['A', $mol_regexp.vary(['4', '5'])]);
            $mol_assert_equal('AB'.match(name), null);
            $mol_assert_equal('A4'.match(name)[0], 'A4');
            $mol_assert_equal('A5'.match(name)[0], 'A5');
        },
        'only groups'() {
            const regexp = $mol_regexp.from({ dog: '@' });
            $mol_assert_like([...'#'.matchAll(regexp)][0].groups, undefined);
            $mol_assert_like([...'@'.matchAll(regexp)][0].groups, { dog: '@' });
        },
        'catch skipped'() {
            const regexp = $mol_regexp.from(/(@)(\d?)/g);
            $mol_assert_like([...'[[@]]'.matchAll(regexp)].map(f => [...f]), [
                ['[['],
                ['@', '@', ''],
                [']]'],
            ]);
        },
        'enum variants'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $mol_regexp.from(Sex);
            $mol_assert_like([...''.matchAll(sexism)].length, 0);
            $mol_assert_like([...'trans'.matchAll(sexism)][0].groups, undefined);
            $mol_assert_like([...'male'.matchAll(sexism)][0].groups, { male: 'male', female: '' });
            $mol_assert_like([...'female'.matchAll(sexism)][0].groups, { male: '', female: 'female' });
        },
        'recursive only groups'() {
            let Sex;
            (function (Sex) {
                Sex["male"] = "male";
                Sex["female"] = "female";
            })(Sex || (Sex = {}));
            const sexism = $mol_regexp.from({ Sex });
            $mol_assert_like([...''.matchAll(sexism)].length, 0);
            $mol_assert_like([...'male'.matchAll(sexism)][0].groups, { Sex: 'male', male: 'male', female: '' });
            $mol_assert_like([...'female'.matchAll(sexism)][0].groups, { Sex: 'female', male: '', female: 'female' });
        },
        'sequence with groups'() {
            const { begin, end, decimal_only: digit, repeat, from } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = from([begin, { year }, dash, { month }, dash, { day }, end]);
            const found = [...'2020-01-02'.matchAll(regexp)];
            $mol_assert_like(found[0].groups, {
                year: '2020',
                month: '01',
                day: '02',
            });
        },
        'sequence with groups of mixed type'() {
            const prefix = '/';
            const postfix = '/';
            const regexp = $mol_regexp.from([{ prefix }, /(\w+)/, { postfix }, /([gumi]*)/]);
            $mol_assert_like([...'/foo/mi'.matchAll(regexp)], [
                Object.assign(["/foo/mi", "/", "foo", "/", "mi"], {
                    groups: {
                        prefix: '/',
                        postfix: '/',
                    },
                    index: 0,
                    input: "/",
                }),
            ]);
        },
        'recursive sequence with groups'() {
            const { begin, end, decimal_only: digit, repeat, from } = $mol_regexp;
            const year = repeat(digit, 4, 4);
            const dash = '-';
            const month = repeat(digit, 2, 2);
            const day = repeat(digit, 2, 2);
            const regexp = from([
                begin, { date: [{ year }, dash, { month }] }, dash, { day }, end
            ]);
            const found = [...'2020-01-02'.matchAll(regexp)];
            $mol_assert_like(found[0].groups, {
                date: '2020-01',
                year: '2020',
                month: '01',
                day: '02',
            });
        },
        'parse multiple'() {
            const { decimal_only: digit, from } = $mol_regexp;
            const regexp = from({ digit });
            $mol_assert_like([...'123'.matchAll(regexp)].map(f => f.groups), [
                { digit: '1' },
                { digit: '2' },
                { digit: '3' },
            ]);
        },
        'named variants'() {
            const { begin, or, end, from } = $mol_regexp;
            const sexism = from([
                begin, 'sex = ', { sex: ['male', or, 'female'] }, end
            ]);
            $mol_assert_like([...'sex = male'.matchAll(sexism)][0].groups, { sex: 'male' });
            $mol_assert_like([...'sex = female'.matchAll(sexism)][0].groups, { sex: 'female' });
            $mol_assert_like([...'sex = malefemale'.matchAll(sexism)][0].groups, undefined);
        },
        'force after'() {
            const { latin_only: letter, force_after, from } = $mol_regexp;
            const regexp = from([letter, force_after('.')]);
            $mol_assert_like('x.'.match(regexp), ['x']);
            $mol_assert_like('x,'.match(regexp), null);
        },
        'forbid after'() {
            const { latin_only: letter, forbid_after, from } = $mol_regexp;
            const regexp = from([letter, forbid_after('.')]);
            $mol_assert_like('x.'.match(regexp), null);
            $mol_assert_like('x,'.match(regexp), ['x']);
        },
        'char except'() {
            const { char_except, latin_only, tab } = $mol_regexp;
            const name = char_except(latin_only, tab);
            $mol_assert_like('a'.match(name), null);
            $mol_assert_like('\t'.match(name), null);
            $mol_assert_like('('.match(name), ['(']);
        },
        'unicode only'() {
            const { unicode_only, from } = $mol_regexp;
            const name = from([
                unicode_only('Script', 'Cyrillic'),
                unicode_only('Hex_Digit'),
            ]);
            $mol_assert_like('FF'.match(name), null);
            $mol_assert_like('ФG'.match(name), null);
            $mol_assert_like('ФF'.match(name), ['ФF']);
        },
        'generate by optional with inner group'() {
            const { begin, end, from } = $mol_regexp;
            const animals = from([begin, '#', ['^', { dog: '@' }], end]);
            $mol_assert_equal(animals.generate({}), '#');
            $mol_assert_equal(animals.generate({ dog: false }), '#');
            $mol_assert_equal(animals.generate({ dog: true }), '#^@');
            $mol_assert_fail(() => animals.generate({ dog: '$' }), 'Wrong param: dog=$');
        },
        'generate by optional with inner group with variants'() {
            const { begin, end, from } = $mol_regexp;
            const animals = from([begin, '#', ['^', { animal: { dog: '@', fox: '&' } }], end]);
            $mol_assert_equal(animals.generate({}), '#');
            $mol_assert_equal(animals.generate({ dog: true }), '#^@');
            $mol_assert_equal(animals.generate({ fox: true }), '#^&');
            $mol_assert_fail(() => animals.generate({ dog: '$' }), 'Wrong param: dog=$');
        },
        'complex example'() {
            const { begin, end, char_only, char_range, latin_only, slash_back, repeat_greedy, from, } = $mol_regexp;
            const atom_char = char_only(latin_only, "!#$%&'*+/=?^`{|}~-");
            const atom = repeat_greedy(atom_char, 1);
            const dot_atom = from([atom, repeat_greedy(['.', atom])]);
            const name_letter = char_only(char_range(0x01, 0x08), 0x0b, 0x0c, char_range(0x0e, 0x1f), 0x21, char_range(0x23, 0x5b), char_range(0x5d, 0x7f));
            const quoted_pair = from([
                slash_back,
                char_only(char_range(0x01, 0x09), 0x0b, 0x0c, char_range(0x0e, 0x7f))
            ]);
            const name = repeat_greedy({ name_letter, quoted_pair });
            const quoted_name = from(['"', { name }, '"']);
            const local_part = from({ dot_atom, quoted_name });
            const domain = dot_atom;
            const mail = from([begin, local_part, '@', { domain }, end]);
            $mol_assert_equal('foo..bar@example.org'.match(mail), null);
            $mol_assert_equal('foo..bar"@example.org'.match(mail), null);
            $mol_assert_like([...'foo.bar@example.org'.matchAll(mail)][0].groups, {
                domain: "example.org",
                dot_atom: "foo.bar",
                name: "",
                name_letter: "",
                quoted_name: "",
                quoted_pair: "",
            });
            $mol_assert_like([...'"foo..bar"@example.org'.matchAll(mail)][0].groups, {
                dot_atom: "",
                quoted_name: '"foo..bar"',
                name: "foo..bar",
                name_letter: "r",
                quoted_pair: "",
                domain: "example.org",
            });
            $mol_assert_equal(mail.generate({ dot_atom: 'foo.bar', domain: 'example.org' }), 'foo.bar@example.org');
            $mol_assert_equal(mail.generate({ name: 'foo..bar', domain: 'example.org' }), '"foo..bar"@example.org');
            $mol_assert_fail(() => mail.generate({ dot_atom: 'foo..bar', domain: 'example.org' }), 'Wrong param: dot_atom=foo..bar');
        },
    });
})($ || ($ = {}));
//mol/regexp/regexp.test.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        $mol_test({
            'Empty needle'() {
                const app = new $mol_dimmer;
                app.needle = () => '  ';
                app.haystack = () => 'foo  bar';
                $mol_assert_like(app.strings(), ['foo  bar']);
            },
            'Empty haystack'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo  bar';
                app.haystack = () => '';
                $mol_assert_like(app.strings(), ['']);
            },
            'Not found'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo';
                app.haystack = () => ' bar ';
                $mol_assert_like(app.strings(), [' bar ']);
            },
            'One found'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo';
                app.haystack = () => ' barfoo ';
                $mol_assert_like(app.strings(), [' bar', 'foo', ' ']);
            },
            'Multiple found'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo';
                app.haystack = () => ' foobarfoo foo';
                $mol_assert_like(app.strings(), [' ', 'foo', 'bar', 'foo', ' ', 'foo']);
            },
            'Fuzzy search'() {
                const app = new $mol_dimmer;
                app.needle = () => 'foo bar';
                app.haystack = () => ' barfoo ';
                $mol_assert_like(app.strings(), [' ', 'bar', '', 'foo', ' ']);
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/dimmer/dimmer.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is boolean - true'() {
            $mol_data_boolean(true);
        },
        'Is boolean - false'() {
            $mol_data_boolean(false);
        },
        'Is not boolean'() {
            $mol_assert_fail(() => {
                $mol_data_boolean('x');
            }, 'x is not a boolean');
        },
        'Is object boolean'() {
            $mol_assert_fail(() => {
                $mol_data_boolean(new Boolean(''));
            }, 'false is not a boolean');
        },
    });
})($ || ($ = {}));
//mol/data/boolean/boolean.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is null'() {
            $mol_data_nullable($mol_data_number)(null);
        },
        'Is not null'() {
            $mol_data_nullable($mol_data_number)(0);
        },
        'Is undefined'() {
            $mol_assert_fail(() => {
                const Type = $mol_data_nullable($mol_data_number);
                Type(undefined);
            }, 'undefined is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/nullable/nullable.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'Is empty dict'() {
            $mol_data_dict($mol_data_number)({});
        },
        'Is dict'() {
            $mol_data_dict($mol_data_number)({ foo: 123 });
        },
        'Is not dict'() {
            $mol_assert_fail(() => {
                $mol_data_dict($mol_data_number)([123]);
            }, '123 is not an Object');
        },
        'Has wrong item'() {
            $mol_assert_fail(() => {
                $mol_data_dict($mol_data_number)({ foo: 1, bar: '1' });
            }, '["bar"] 1 is not a number');
        },
        'Has wrong deep item'() {
            $mol_assert_fail(() => {
                $mol_data_dict($mol_data_dict($mol_data_number))({ foo: { bar: false } });
            }, '["foo"] ["bar"] false is not a number');
        },
    });
})($ || ($ = {}));
//mol/data/dict/dict.test.ts
;
"use strict";
var $;
(function ($) {
    $mol_test({
        'is same number'() {
            const Nan = $mol_data_const(Number.NaN);
            Nan(Number.NaN);
        },
        'is equal object'() {
            const Tags = $mol_data_const({ tags: ['deep', 'equals'] });
            Tags({ tags: ['deep', 'equals'] });
        },
        'is different number'() {
            const Five = $mol_data_const(5);
            $mol_assert_fail(() => Five(6), '6 is not 5');
        },
        'is different object'() {
            const Tags = $mol_data_const({ tags: ['deep', 'equals'] });
            $mol_assert_fail(() => Tags({ tags: ['shallow', 'equals'] }), `{"tags":["shallow","equals"]} is not {"tags":["deep","equals"]}`);
        },
    });
})($ || ($ = {}));
//mol/data/const/const.test.ts

//# sourceMappingURL=node.test.js.map
