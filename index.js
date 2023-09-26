//inisiasi
var express = require('express')
var app = express()
const pool = require("./query")
var router = require("./router")

//utk routing endpoint
app.use("/", router)

//untuk connect DB 
pool.connect((err, res) => {
    if(err){
        console.log(err.message);
    } else {
        console.log('res - connected');
    }
})

// utk jalankan server
app.listen(3000, () => {
    console.log('server runed');
})



/*
PS A:\tugas\devs\september\hw8-haryomukti> npm install -g db-migrate-pg    

added 22 packages in 3s
PS A:\tugas\devs\september\hw8-haryomukti> dv-migrate-pg
dv-migrate-pg : The term 'dv-migrate-pg' is not recognized as the name of  
a cmdlet, function, script file, or operable program. Check the spelling   
of the name, or if a path was included, verify that the path is correct    
and try again.
+ dv-migrate-pg
+ ~~~~~~~~~~~~~
   CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 
PS A:\tugas\devs\september\hw8-haryomukti> db-migrate-pg
db-migrate-pg : The term 'db-migrate-pg' is not recognized as the name of  
of the name, or if a path was included, verify that the path is correct    
and try again.
At line:1 char:1
+ db-migrate-pg
+ ~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (db-migrate-pg:String) [],   
   CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 
PS A:\tugas\devs\september\hw8-haryomukti> npm uninstall -g db-migrate-pg  

removed 22 packages in 185ms
PS A:\tugas\devs\september\hw8-haryomukti> npm install -g db-migrate       

added 73 packages in 9s

7 packages are looking for funding
  run `npm fund` for details
PS A:\tugas\devs\september\hw8-haryomukti> db-migrate
Usage: db-migrate [up|down|check|reset|sync|create|db|transition]
[[dbname/]migrationName|all] [options]

Options:
  --dry-run                      Prints the SQL but doesn't run it.        
                                                                  [boolean]  --check                        Prints the migrations to be run without   
                                 running them.                    [boolean]  --force-exit                   Forcibly exit the migration process on    
                                 completion.     [boolean] [default: false]  --config                       Location of the database.json file.       
                                                         [string] [default:                    "A:\tugas\devs\september\hw8-haryomukti/database.json"]  --sql-file                     Automatically create two sql files for up 
                                 and down statements in /sqls and generate 
                                 the javascript code that loads them.      
                                                 [boolean] [default: false]  --coffee-file                  Create a coffeescript migration file      
                                                                  [boolean]  --ignore-on-init               Create files that will run only if        
                                 ignore-on-init in the env is set to false 
                                 (currently works only with SQL)  [boolean]  --seeds-table                  Set the name of the seeds table, which    
                                 stores the seed history.
                                                [string] [default: "seeds"]  --vcseeder-dir                 Set the path to the Version Controlled    
                                 Seeder directory.
      [string] [default: "A:\tugas\devs\september\hw8-haryomukti/VCSeeder"]        [string] [default: "A:\tugas\devs\september\hw8-haryomukti/Seeder"]  --non-transactional            Explicitly disable transactions
                                                 [boolean] [default: false]  --ignore-completed-migrations  Start at the first migration
                                                 [boolean] [default: false]  --log-level                    Set the log-level, for example sql|warn   
                                                                   [string]  -e, --env                      The environment to run the migrations     
                                 under (dev, test, prod).          [string]  -m, --migrations-dir           The directory containing your migration   
                                 files.                            [string]  -c, --count                    Max number of migrations to run.  [string]  -v, --verbose                  Verbose mode.                    [boolean]  -h, --help, -?                 Show help                        [boolean]  -i, --version                  Print version info.              [boolean]  -t, --table                    Set the name of the migration table, which                                 stores the migration history.     [string]PS A:\tugas\devs\september\hw8-haryomukti> db-migrate create initialization --sql-file
[INFO] Created migration at A:\tugas\devs\september\hw8-haryomukti\migrations\20230926082227-initialization.js
[INFO] Created migration up sql file at A:\tugas\devs\september\hw8-haryomukti\migrations\sqls\20230926082227-initialization-up.sql
[INFO] Created migration down sql file at A:\tugas\devs\september\hw8-haryomukti\migrations\sqls\20230926082227-initialization-down.sql
PS A:\tugas\devs\september\hw8-haryomukti> */