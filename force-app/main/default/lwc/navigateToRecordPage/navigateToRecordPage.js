import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';


export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    recordViewMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0015g00001YfsrBAAR',
                objectApiName:'Account',
                actionName:'view'
            }
        })
    }

    recordEditMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0015g00001YfsrBAAR',
                objectApiName:'Account',
                actionName:'edit'
            }
        })
    }
}