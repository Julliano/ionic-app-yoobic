import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router'

export interface Items {
    author: string;
    url: string;
    download_url: string;
}

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})

@Injectable()
export class ListPage implements OnInit {
    items: Items;
    private API_URL = 'https://picsum.photos/v2/list';
    private selectedItem: any;
    public jokes: Items;

    constructor(
        private http: HttpClient,
        public router: Router) { }

    ngOnInit() {
        this.getInitialData();
    }

    async getInitialData() {
        this.http.get(this.API_URL, {})
            .subscribe((data: Items) => {
                this.jokes = data;
            });
    }
    // add back when alpha.4 is out
    navigate(itemSelected) {
        let navigationExtras: NavigationExtras = {
            state: {
              item: itemSelected
            }
        };
        this.router.navigate(['/detail'], navigationExtras);
    }

}
