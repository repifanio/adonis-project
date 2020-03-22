# First App with Adonis

This is my first app make with Adonis!

It,s a sample app  with three small features. there are:

- Post a user
- Login with jws
- forgot a password with email send.

### This is my insomnia view if you interested:

    {
       "_type":"export",
       "__export_format":4,
       "__export_date":"2020-03-22T06:34:25.996Z",
       "__export_source":"insomnia.desktop.app:v7.1.1",
       "resources":[
          {
             "_id":"req_4191c7868604429890d2fc7346db6cc2",
             "authentication":{
    
             },
             "body":{
                "mimeType":"application/json",
                "text":"{\n   \"token\": \"d91ba2540d150ddcbb47\",\n\t \"password\":\"1231234\"\n}"
             },
             "created":1584857514241,
             "description":"",
             "headers":[
                {
                   "id":"pair_257a513fa82343bbab2e6671a412273c",
                   "name":"Content-Type",
                   "value":"application/json"
                }
             ],
             "isPrivate":false,
             "metaSortKey":-1584279302830.25,
             "method":"PUT",
             "modified":1584858810823,
             "name":"Set New Password",
             "parameters":[
    
             ],
             "parentId":"fld_711a6551453547248a32804b177a7d87",
             "settingDisableRenderRequestBody":false,
             "settingEncodeUrl":true,
             "settingFollowRedirects":"global",
             "settingRebuildPath":true,
             "settingSendCookies":true,
             "settingStoreCookies":true,
             "url":"http://localhost:3333/reset-password",
             "_type":"request"
          },
          {
             "_id":"fld_711a6551453547248a32804b177a7d87",
             "created":1584858766105,
             "description":"",
             "environment":{
    
             },
             "environmentPropertyOrder":null,
             "metaSortKey":-1584858766105,
             "modified":1584858766105,
             "name":"Forgot Password",
             "parentId":"wrk_9437b5b5fe1f4fa1a2cdd20e83b4a6e4",
             "_type":"request_group"
          },
          {
             "_id":"wrk_9437b5b5fe1f4fa1a2cdd20e83b4a6e4",
             "created":1583585257588,
             "description":"",
             "modified":1583585257588,
             "name":"Insomnia",
             "parentId":null,
             "_type":"workspace"
          },
          {
             "_id":"req_701f31befccf4f6881b17c2bd1f99f19",
             "authentication":{
    
             },
             "body":{
                "mimeType":"application/json",
                "text":"{\n   \"email\": \"repifanio@email.com\",\n\t \"redirect_url\":\"www.meuapp.com.br/forgot-password\"\n}"
             },
             "created":1584853761703,
             "description":"",
             "headers":[
                {
                   "id":"pair_257a513fa82343bbab2e6671a412273c",
                   "name":"Content-Type",
                   "value":"application/json"
                }
             ],
             "isPrivate":false,
             "metaSortKey":-1584279302780.25,
             "method":"POST",
             "modified":1584858797414,
             "name":"Request New Password",
             "parameters":[
    
             ],
             "parentId":"fld_711a6551453547248a32804b177a7d87",
             "settingDisableRenderRequestBody":false,
             "settingEncodeUrl":true,
             "settingFollowRedirects":"global",
             "settingRebuildPath":true,
             "settingSendCookies":true,
             "settingStoreCookies":true,
             "url":"http://localhost:3333/forgot-password",
             "_type":"request"
          },
          {
             "_id":"req_6a06b3aa96d64f66847189e11a8f81ab",
             "authentication":{
    
             },
             "body":{
                "mimeType":"application/json",
                "text":"{\n   \"email\": \"repifanio@email.com\",\n   \"password\": \"1231234\"\n}"
             },
             "created":1584852753120,
             "description":"",
             "headers":[
                {
                   "id":"pair_257a513fa82343bbab2e6671a412273c",
                   "name":"Content-Type",
                   "value":"application/json"
                }
             ],
             "isPrivate":false,
             "metaSortKey":-1584350189129.5,
             "method":"POST",
             "modified":1584858751403,
             "name":"Login Session",
             "parameters":[
    
             ],
             "parentId":"fld_8c7f48fb6f9e42f1915e0c8bfba9f7ab",
             "settingDisableRenderRequestBody":false,
             "settingEncodeUrl":true,
             "settingFollowRedirects":"global",
             "settingRebuildPath":true,
             "settingSendCookies":true,
             "settingStoreCookies":true,
             "url":"http://localhost:3333/session",
             "_type":"request"
          },
          {
             "_id":"fld_8c7f48fb6f9e42f1915e0c8bfba9f7ab",
             "created":1584858743723,
             "description":"",
             "environment":{
    
             },
             "environmentPropertyOrder":null,
             "metaSortKey":-1584858743723,
             "modified":1584858743723,
             "name":"Session",
             "parentId":"wrk_9437b5b5fe1f4fa1a2cdd20e83b4a6e4",
             "_type":"request_group"
          },
          {
             "_id":"req_1e074f5481364f3e9337e3c2d08e00fe",
             "authentication":{
    
             },
             "body":{
                "mimeType":"application/json",
                "text":"{\n\t \"username\": \"repifanio\",\n   \"email\": \"repifanio@email.com\",\n   \"password\": \"a.123456\"\n}"
             },
             "created":1584491961827,
             "description":"",
             "headers":[
                {
                   "id":"pair_257a513fa82343bbab2e6671a412273c",
                   "name":"Content-Type",
                   "value":"application/json"
                }
             ],
             "isPrivate":false,
             "metaSortKey":-1584675341225,
             "method":"POST",
             "modified":1584858739485,
             "name":"Insert User",
             "parameters":[
    
             ],
             "parentId":"fld_4b17c9cde36544a8bc5dc7e641fc466f",
             "settingDisableRenderRequestBody":false,
             "settingEncodeUrl":true,
             "settingFollowRedirects":"global",
             "settingRebuildPath":true,
             "settingSendCookies":true,
             "settingStoreCookies":true,
             "url":"http://localhost:3333/users",
             "_type":"request"
          },
          {
             "_id":"fld_4b17c9cde36544a8bc5dc7e641fc466f",
             "created":1584858720622,
             "description":"",
             "environment":{
    
             },
             "environmentPropertyOrder":null,
             "metaSortKey":-1584858720622,
             "modified":1584858720622,
             "name":"User",
             "parentId":"wrk_9437b5b5fe1f4fa1a2cdd20e83b4a6e4",
             "_type":"request_group"
          },
          {
             "_id":"env_66e65b4045de2642caa97db9ad7a3fb3f12df27e",
             "color":null,
             "created":1583585257700,
             "data":{
    
             },
             "dataPropertyOrder":null,
             "isPrivate":false,
             "metaSortKey":1583585257700,
             "modified":1583585257700,
             "name":"Base Environment",
             "parentId":"wrk_9437b5b5fe1f4fa1a2cdd20e83b4a6e4",
             "_type":"environment"
          },
          {
             "_id":"jar_66e65b4045de2642caa97db9ad7a3fb3f12df27e",
             "cookies":[
    
             ],
             "created":1583585257708,
             "modified":1583585257708,
             "name":"Default Jar",
             "parentId":"wrk_9437b5b5fe1f4fa1a2cdd20e83b4a6e4",
             "_type":"cookie_jar"
          }
       ]
    }