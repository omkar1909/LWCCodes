import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class NavigateToTabPage extends NavigationMixin(LightningElement) {
    navigateToNavItem(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{
                apiName:'quizApp'
            }
        })
    }
}