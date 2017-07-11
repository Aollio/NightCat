import {Injectable} from "@angular/core";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Injectable()
export class SharedService {


    DEBUG: boolean = true

    isDesigner: boolean = true;

    getNavColor() {
        if (this.isDesigner) {
            return 'nav-des-bg';
        } else {
            return 'nav-emp-bg';
        }
    }

}