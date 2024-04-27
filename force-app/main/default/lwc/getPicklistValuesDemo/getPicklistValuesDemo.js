import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class GetPicklistValuesDemo extends LightningElement {

    @wire(getObjectInfo,{objectApiName:ACCOUNT_OBJECT})
    objectInfo

    selectedIndustry='';

    industryOptions=[]

    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:INDUSTRY_FIELD})
    industryPicklist({data,error}){
        if(data){
            console.log(data);
            this.generatePickList(data);
            this.industryOptions=[...this.generatePickList(data)]
        }
        if(error)
        {
            console.log(error);
        }
    }

    generatePickList(data){
        return data.values.map(item=>({label:item.label,value:item.value}))
    }

    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }
}