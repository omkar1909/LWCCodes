import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
const fields=[NAME_FIELD,EMAIL_FIELD]

export default class WireDemoUserDetail extends LightningElement {
    userId=Id
    userDetail
    @wire(getRecord, {recordId:'$userId',fields})
    userDetailHandler({data,error}){
       if(data){
            this.userDetail=data.fields
       }
       if(error){
            console.log(error);
       }
    }

    @wire(getRecord, {recordId:'$userId',fields})
    userDetailProperty

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo({data,error}){
        if(data){
            console.log(data);
        }
        if(error){
            console.log(error);
        }
    }

}