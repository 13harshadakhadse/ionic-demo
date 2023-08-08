import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(private http: HttpClient,
        private toast: ToastController) { }

    copyObject(object: any) {
        if (!!object) {
            return JSON.parse(JSON.stringify(object));
        }
        return null;
    }

    openToaster(message: string, cssClass: string = '') {
        this.toast.create({
            // header: 'Welcome!',
            message: message,
            position: 'bottom',
            cssClass: cssClass,
            duration: 5000
            // buttons: [
            //     {
            //         side: 'end',
            //         icon: 'person',
            //         handler: () => {
            //             console.log('');
            //         }
            //     }, {
            //         side: 'end',
            //         text: 'Close',
            //         role: 'cancel',
            //         handler: () => {
            //             console.log('');
            //         }
            //     }
            // ]
        }).then((toast: any) => {
            toast.present();
        });

    }
}
