import {Injectable} from "@angular/core";
import {User} from "../../model/user";
import {SharedService} from "../share.service";

@Injectable()
export class UserService {

    private DEBUG: boolean;

    constructor(public shared: SharedService) {
        this.DEBUG = shared.DEBUG
    }



    login(user: User): boolean {
        if (this.DEBUG) {
            user.nickname = '华兰风';
            this.shared.setCurrentUser(user);
            return true;
        }
        //TODO 真实登录逻辑
        // throw new Error('do not have real logic')
        return false;
    }

}