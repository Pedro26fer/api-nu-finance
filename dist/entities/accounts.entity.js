"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const transactions_entity_1 = require("./transactions.entity");
const user_entity_1 = require("./user.entity");
let Accounts = class Accounts {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Accounts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Accounts.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Accounts.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => user_entity_1.User, user => user.id, { eager: true }),
    __metadata("design:type", user_entity_1.User)
], Accounts.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transactions_entity_1.Transactions, transaction => transaction.id, { eager: true }),
    __metadata("design:type", Array)
], Accounts.prototype, "transactions", void 0);
Accounts = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [])
], Accounts);
exports.Accounts = Accounts;
