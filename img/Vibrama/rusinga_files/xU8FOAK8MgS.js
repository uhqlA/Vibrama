;/*FB_PKG_DELIM*/

__d("oz-player/shims/www/OzStreamsWWW",["cr:927622","cr:927623"],(function(a,b,c,d,e,f,g){"use strict";c=Boolean(b("cr:927622"));d=Boolean(b("cr:927623"));e=b("cr:927622")?b("cr:927622").ReadableStream:a.ReadableStream;f=b("cr:927623")?b("cr:927623").WritableStream:a.WritableStream;g.OzReadableStream=e;g.OzReadableStreamIsPolyfilled=c;g.OzWritableStream=f;g.OzWritableStreamIsPolyfilled=d}),98);
__d("oz-player/shims/OzStreams",["oz-player/shims/www/OzStreamsWWW"],(function(a,b,c,d,e,f,g){"use strict";g.OzReadableStream=d("oz-player/shims/www/OzStreamsWWW").OzReadableStream,g.OzReadableStreamIsPolyfilled=d("oz-player/shims/www/OzStreamsWWW").OzReadableStreamIsPolyfilled,g.OzWritableStream=d("oz-player/shims/www/OzStreamsWWW").OzWritableStream,g.OzWritableStreamIsPolyfilled=d("oz-player/shims/www/OzStreamsWWW").OzWritableStreamIsPolyfilled}),98);