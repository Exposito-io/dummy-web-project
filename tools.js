var bi = function (n, b) {
    return new BigInteger(n.toString(), b ? b : 10);
};
var bi2int = function (bi, b) {
    return parseInt(bi.toString(b ? b : 10));
};

var Pi = function (fn) {
    this.fn_ = fn || function (v) { console.log(v); };
    this.q_ = bi(1);
    this.r_ = bi(180);
    this.t_ = bi(60);
    this.i_ = bi(2);
};

Pi.prototype.next_ = function () {
    var q = this.q_, r = this.r_, t = this.t_, i = this.i_;
    var tmp = i.multiply(bi(3));
    var u = tmp.add(bi(1)).multiply(bi(3)).multiply(tmp.add(bi(2)));
    var y = i.multiply(bi(27)).subtract(bi(12)).multiply(q).add(r.multiply(bi(5))).divide(t.multiply(bi(5)));
    this.q_ = q.multiply(bi(10)).multiply(i).multiply(i.multiply(bi(2)).subtract(bi(1)));
    tmp = q.multiply(i.multiply(bi(5)).subtract(bi(2))).add(r).subtract(t.multiply(y));
    this.r_ = u.multiply(bi(10)).multiply(tmp);
    this.t_ = t.multiply(u);
    this.i_ = i.add(bi(1));
    this.fn_(bi2int(y));
};

Pi.prototype.step = function (n) {
    if (n > 0)
        for (var i = 0; i < n; ++i)
            this.next_();
    else
        this.next_();
};

Pi.prototype.setCallback = function (fn) {
    this.fn_ = fn;
};

Pi.prototype.digits = function () {
    var t = parseInt(this.i_.toString());
    return t - 3;
};

Pi.prototype.save = function () {
    return {
        q: this.q_.toString(16),
        r: this.r_.toString(16),
        t: this.t_.toString(16),
        i: this.i_.toString(16)
    };
};

Pi.prototype.load = function (d) {
    this.q_ = bi(d.q, 16);
    this.r_ = bi(d.r, 16);
    this.t_ = bi(d.t, 16);
    this.i_ = bi(d.i, 16);
};

//-----------------------------------

if (typeof exports !== "undefined")
    module.exports = Pi; // Node.js
else
    this.SpigotPi = Pi;