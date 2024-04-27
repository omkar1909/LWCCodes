import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'

export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {
    navigateToNewRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'new'
            }
        })
    }

    navigateToNewRecordwithDefault(){
        const defaultValue=encodeDefaultFieldValues({
            Name:'TestDefault',
            AnnualRevenue:'51000',
            Industry:'Biotechnology'
        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'new'
            },
            state:{
                defaultFieldValues:defaultValue
            }
        })
    }
}