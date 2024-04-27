import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';


export default class NavigateToRelatedRelationship extends NavigationMixin(LightningElement) {

    navigateToRelatedRelation(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordRelationshipPage',
            attributes:{
                recordId:'0015g00001YfsrBAAR',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })
    }
}