import { LightningElement, api } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';


export default class NavigateToLWC extends NavigationMixin(LightningElement) {
    
    rcrd='test'
    changeHandler(event){
        this.rcrd=event.target.value;
    }

    navigateToLWC(){
     
        var defination={
            componentDef:'c:navigateToLWCTarget',
            attributes:{
                recordId:'21',
                olu:this.rcrd
            }
        }

        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'./one/one.app#'+btoa(JSON.stringify(defination))
            }
        })
    }
}