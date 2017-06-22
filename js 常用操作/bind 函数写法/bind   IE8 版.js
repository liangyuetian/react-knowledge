if (!Function.prototype.bind) {
    Function.prototype.bind = function(obj) {
        var _self = this
            ,args = arguments;
        return function() {
            _self.apply(obj, Array.prototype.slice.call(args, 1));
        }
    }
}