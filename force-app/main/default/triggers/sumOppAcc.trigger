trigger sumOppAcc on Opportunity (after insert, after update,after delete,after undelete) 
{
    Set<Id> accIds=new Set<Id>();

    // to fetch newly inserted opportunity amount
    if(trigger.isAfter && (trigger.isInsert || trigger.isUndelete))
    {
        if(!trigger.new.isEmpty())
        {
            for(Opportunity op:trigger.new)
            {
                if(op.AccountId!=null)
                {
                    accIds.add(op.AccountId);
                }
            }
        }
    }

    if(trigger.isAfter && trigger.isUpdate)
    {
        if(!trigger.new.isEmpty())
        {
            for(Opportunity op:trigger.new)
            {
                if(op.AccountId!=trigger.oldMap.get(op.ID).AccountId)
                {
                    accIds.add(op.AccountId);
                    accIds.add(trigger.oldMap.get(op.Id).AccountId);
                }
                else 
                {
                    accIds.add(op.AccountId);
                }
            }
        }
    }

    if(trigger.isAfter && trigger.isDelete)
    {
        if(!trigger.old.isEmpty())
        {
            for(Opportunity op:trigger.old)
            {
                if(op.AccountId!=null)
                {
                    accIds.add(op.AccountId);
                }
            }
        }
    }

    if(!accIds.isEmpty())
    {
        List<AggregateResult> aggList=[SELECT AccountId ids,sum(Amount) totalAmt 
        FROM Opportunity WHERE AccountId IN : accIds GROUP BY AccountId];

        Map<Id,Account> accMap=new Map<Id,Account>();

        if(!aggList.isEmpty())
        {
            for(AggregateResult ag:aggList)
            {
                Account ac=new Account();
                ac.Id=(Id)ag.get('ids');
                ac.Total_Opportunity_Amount__c=(Decimal)ag.get('totalAmt');
                accMap.put(ac.Id,ac);
            }
        }

        if(!accMap.isEmpty())
        {
            update accMap.values();
        }
    }
}