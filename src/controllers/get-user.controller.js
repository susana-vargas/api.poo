"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserController = void 0;
var GetUserController = /** @class */ (function () {
    function GetUserController() {
        this.users = [
            { id: 1, name: 'fatima', age: 25, hobby: 'teatro', isAlive: true },
            { id: 2, name: 'maria', age: 25, hobby: 'costura', isAlive: true },
            { id: 3, name: 'isack', age: 20, hobby: 'deportes', isAlive: true },
        ];
    }
    GetUserController.prototype.getAll = function (req, res) {
        res.json(this.users);
    };
    GetUserController.prototype.addUser = function (newUser) {
        this.users.push(newUser);
    };
    GetUserController.prototype.getId = function (req, res) {
        var userId = parseInt(req.params.id);
        var user = this.users.find(function (user) { return user.id === userId; });
        res.json(user);
    };
    return GetUserController;
}());
exports.GetUserController = GetUserController;
