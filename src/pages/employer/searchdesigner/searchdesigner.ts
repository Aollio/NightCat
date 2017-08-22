import {Component} from "@angular/core";
@Component({
    templateUrl: 'searchdesigner.html',
    selector:'page-searchdesigner'
})
export class SearchDesignerPage{

    items;


    getItems(ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })

        }

    }

    openOrderDetail(param){
    }
}
