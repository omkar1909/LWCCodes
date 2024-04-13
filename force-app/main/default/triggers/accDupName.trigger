trigger accDupName on Account (before insert, before update) {
    
    Set<String> accNames=new Set<String>();             //to store names of Accounts

    if(trigger.isBefore && (trigger.isInsert || trigger.isUpdate))
    {
        if(!trigger.new.isEmpty())
        {
            for(Account acc:trigger.new)
            {
                accNames.add(acc.Name);
            }
        }

        List<Account> accList=[SELECT ID, Name FROM Account WHERE Name IN : accNames];

        Map<String,Account> existAcc=new Map<String,Account>();
        
        if(!accList.isEmpty())
        {
            for(Account acc:accList)
            {
                existAcc.put(acc.Name,acc);
            }

            if(!trigger.new.isEmpty())
            {
                for(Account acc:trigger.new)
                {
                    if(existAcc.containsKey(acc.Name))
                    {
                        acc.addError('Account Name already exists!!');
                    }
                }
            }
        }
    }
}