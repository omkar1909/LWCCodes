trigger createRelatedCon on Account (after insert, after update) 
{
    if(trigger.isAfter && (trigger.isInsert || trigger.isUpdate))
    {
        List<Contact> conList=new List<Contact>();
        if(!trigger.new.isEmpty())
        {
            for(Account acc:trigger.new)
            {
                if(acc.Create_Contact__c==true)
                {
                    Contact con=new Contact();
                    con.FirstName='Test';
                    con.LastName=acc.Name;
                    con.Phone=acc.Phone;
                    con.AccountId=acc.ID;
                    conList.add(con);
                }
            }

            if(!conList.isEmpty())
            {
                insert conList;
            }
        }
    }
}