;/*FB_PKG_DELIM*/

__d("parseHeaders",[],(function(a,b,c,d,e,f){var g=/\r?\n[\t]+/g,h=/\r?\n/;function a(a){a=a.replace(g," ");var b={};a.split(h).forEach(function(a){a=a.split(":");var c=a.shift().trim();if(c){a=a.join(":").trim();b[c.toLowerCase()]=a}});return b}f["default"]=a}),66);