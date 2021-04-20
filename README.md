# Goals : #
1. use react
2. use CRA (create react app)
3. use https://material-ui.com/ as component library
4. All non transactional data must be editable
5. after refreshing, the changes made to the fields should persist

there is no backend, so just imagine there is an endpoint that returns you the following user structure:

{
     userId, (int)
     documentNumber, (string)
     firstName, (string)
     lastName, (string),
     email, (string)
     phoneNumber, (string)
     companyName, (string)
     session: {
         device, (string)
         deviceOS, (string)
         deviceId, (string)
         appVersion,(string)
     },
     salary, (int)
     bank: {
          accountNumber,
          name,
     }, 
     balance: (int),
     withdrawals:[
           { 
              type: always "NORMAL", (string)
              amount, (int),
              status, (string)
              createdAt, (date)
              paidAt, (date)
           }, {....}
     ],
     advance: {
         amount, (int)
         day, (int),
         withdrawals: [
                { 
                  type: always "ADVANCE", (string)
                  amount, (int)
                  tobePaidAt, (date)
                  paidAt, (date),
                  status, (string)
               }, {....}
         ]
     }
}
