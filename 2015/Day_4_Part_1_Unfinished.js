/* DEPENDENCIES */

// Adisoreq/Hash.js
function rotateLeft(t,u,h=!1){return h?t<<u|t>>32-u:t<<u|t>>>32-u}function rotateRight(t,u){return t>>u|t<<32-u}function stringToBytes(t){const u=[];for(let h=0;h<t.length;h++){let s=t.charCodeAt(h);s<=127?u.push(s):s<=2047?(u.push(192|s>>6),u.push(128|63&s)):s<=65535?(u.push(224|s>>12),u.push(128|s>>6&63),u.push(128|63&s)):(u.push(240|s>>18),u.push(128|s>>12&63),u.push(128|s>>6&63),u.push(128|63&s))}return u}
const MD5={hash(t){const e=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,1362354941,464122806,506948616,1363796369,2357925446,242196408,1871824626,1537002063,1250783277,3655977863],h=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23];let s=1732584193,u=4023233417,l=2562383102,n=271733878,o=function(t){const e=[];for(let h=0;h<t.length;h++){let s=t.charCodeAt(h);s<=127?e.push(s):s<=2047?(e.push(192|s>>6),e.push(128|63&s)):s<=65535?(e.push(224|s>>12),e.push(128|s>>6&63),e.push(128|63&s)):(e.push(240|s>>18),e.push(128|s>>12&63),e.push(128|s>>6&63),e.push(128|63&s))}return e}(t);const r=8*o.length;for(o.push(128);o.length%64!=56;)o.push(0);for(let t=0;t<8;t++)o.push(r>>>8*t&255);for(let t=0;t<o.length;t+=64){let r=o.slice(t,t+64),p=[];for(let t=0;t<16;t++)p[t]=r[4*t]<<24|r[4*t+1]<<16|r[4*t+2]<<8|r[4*t+3];let[c,f,i,g]=[s,u,l,n];for(let t=0;t<64;t++){let s,u;t<16?(s=f&i|~f&g,u=t):t<32?(s=g&f|~g&i,u=(5*t+1)%16):t<48?(s=f^i^g,u=(3*t+5)%16):(s=i^(f|~g),u=7*t%16);let l=g;g=i,i=f,f=f+rotateLeft(c+s+e[t]+p[u],h[t])&4294967295,c=l}s=s+c&4294967295,u=u+f&4294967295,l=l+i&4294967295,n=n+g&4294967295}return[s,u,l,n].map((function(t){return("00000000"+t.toString(16)).slice(-8)})).join("")}};

/* CODE */

const input = 'pqrstuv'
const regex = /^00000.*/

let digits = -1
let hash = ''

while (!hash.match(regex)) {
    ++digits;
    hash = MD5.hash(input + String(digits))
}

console.log(`Result: ${digits}\nKey: ${input + String(digits)}\nHash: ${hash}`)
