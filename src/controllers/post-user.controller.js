"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUserController = void 0;
var PostUserController = /** @class */ (function () {
    function PostUserController(getUserController) {
        this.getUserController = getUserController;
    }
    PostUserController.prototype.create = function (req, res) {
        var _a = req.body, id = _a.id, name = _a.name, age = _a.age, hobby = _a.hobby, isAlive = _a.isAlive;
        var newUser = { id: id, name: name, age: age, hobby: hobby, isAlive: isAlive };
        this.getUserController.addUser(newUser);
        res.json({ message: 'controllerPOST' });
        console.log(newUser, 'controllerPOST');
    };
    return PostUserController;
}());
exports.PostUserController = PostUserController;
exports.default = PostUserController;
