// Comprehensive Google Dorks Database
const dorksDatabase = [
    // PHP Dorks
    {
        title: "PHP Info Disclosure",
        query: 'site:{DOMAIN} ext:php inurl:phpinfo "PHP Version"',
        tech: ["php"],
        vuln: ["disclosure"]
    },
    {
        title: "PHP Configuration Files",
        query: 'site:{DOMAIN} ext:php inurl:config OR inurl:configuration OR inurl:settings OR inurl:setup OR inurl:conf',
        tech: ["php"],
        vuln: ["config", "disclosure"]
    },
    {
        title: "PHP Backup Files",
        query: 'site:{DOMAIN} ext:php.bak OR ext:php~ OR ext:php.old OR ext:php.backup OR ext:php.save OR ext:php.orig OR ext:php.swp',
        tech: ["php"],
        vuln: ["backup", "disclosure"]
    },
    {
        title: "PHP Error Messages with SQL",
        query: 'site:{DOMAIN} "SQL syntax" OR "mysql_fetch" OR "mysql_num_rows" ext:php',
        tech: ["php"],
        vuln: ["sqli", "disclosure"]
    },
    {
        title: "PHP Database Connection Files",
        query: 'site:{DOMAIN} ext:php inurl:db OR inurl:database OR inurl:conn OR inurl:connect OR inurl:connection OR inurl:mysql OR inurl:pdo OR inurl:mysqli',
        tech: ["php"],
        vuln: ["disclosure", "config"]
    },
    {
        title: "PHP Admin Panels",
        query: 'site:{DOMAIN} inurl:admin ext:php OR inurl:administrator ext:php OR inurl:adminpanel ext:php OR inurl:cpanel ext:php OR inurl:panel ext:php OR inurl:dashboard ext:php',
        tech: ["php"],
        vuln: ["admin"]
    },
    {
        title: "PHP File Upload Forms",
        query: 'site:{DOMAIN} inurl:upload ext:php OR inurl:file_upload ext:php OR inurl:uploader ext:php OR inurl:fileupload ext:php OR inurl:uploadfile ext:php OR inurl:attachment ext:php',
        tech: ["php"],
        vuln: ["upload"]
    },
    {
        title: "PHP Include Vulnerabilities",
        query: 'site:{DOMAIN} inurl:index.php?page= OR inurl:index.php?include= OR inurl:index.php?file= OR inurl:index.php?path= OR inurl:index.php?module= OR inurl:index.php?load= OR inurl:index.php?template=',
        tech: ["php"],
        vuln: ["lfi", "rce"]
    },
    {
        title: "PHP Shell Upload Paths",
        query: 'site:{DOMAIN} intext:"c99" OR intext:"r57" OR intext:"WSO" OR intext:"b374k" OR intext:"shell" OR intext:"FilesMan" OR intext:"webshell" ext:php',
        tech: ["php"],
        vuln: ["rce", "upload"]
    },
    {
        title: "PHP Login Pages",
        query: 'site:{DOMAIN} inurl:login ext:php OR inurl:signin ext:php OR inurl:sign-in ext:php OR inurl:auth ext:php OR inurl:authenticate ext:php OR inurl:user ext:php',
        tech: ["php"],
        vuln: ["login"]
    },

    // ASP.NET Dorks
    {
        title: "ASP.NET Error Pages",
        query: 'site:{DOMAIN} ext:asp OR ext:aspx "error" OR "exception" OR "stack trace" OR "server error" OR "runtime error"',
        tech: ["asp"],
        vuln: ["disclosure"]
    },
    {
        title: "ASP.NET Configuration Files",
        query: 'site:{DOMAIN} ext:config inurl:web.config',
        tech: ["asp"],
        vuln: ["config", "disclosure"]
    },
    {
        title: "ASP.NET Trace Files",
        query: 'site:{DOMAIN} ext:axd inurl:trace',
        tech: ["asp"],
        vuln: ["disclosure"]
    },
    {
        title: "ASP.NET ViewState",
        query: 'site:{DOMAIN} ext:aspx intext:"__VIEWSTATE"',
        tech: ["asp"],
        vuln: ["disclosure"]
    },
    {
        title: "ASP.NET Admin Panels",
        query: 'site:{DOMAIN} inurl:admin ext:aspx OR inurl:administrator ext:aspx OR inurl:adminpanel ext:aspx OR inurl:cpanel ext:aspx OR inurl:manage ext:aspx',
        tech: ["asp"],
        vuln: ["admin"]
    },
    {
        title: "ASP.NET Login Pages",
        query: 'site:{DOMAIN} inurl:login ext:aspx OR inurl:signin ext:aspx OR inurl:sign-in ext:aspx OR inurl:logon ext:aspx OR inurl:auth ext:aspx',
        tech: ["asp"],
        vuln: ["login"]
    },
    {
        title: "ASP.NET SQL Errors",
        query: 'site:{DOMAIN} "SqlException" OR "OleDbException" OR "SqlClient" OR "System.Data.SqlClient" OR "unclosed quotation mark" ext:aspx',
        tech: ["asp"],
        vuln: ["sqli", "disclosure"]
    },

    // JSP/Java Dorks
    {
        title: "JSP Error Pages",
        query: 'site:{DOMAIN} ext:jsp "exception" OR "error" OR "stack trace" OR "NullPointerException" OR "ClassNotFoundException"',
        tech: ["jsp"],
        vuln: ["disclosure"]
    },
    {
        title: "JSP Admin Consoles",
        query: 'site:{DOMAIN} inurl:admin ext:jsp OR inurl:manager ext:jsp OR inurl:console ext:jsp OR inurl:adminpanel ext:jsp OR inurl:management ext:jsp',
        tech: ["jsp"],
        vuln: ["admin"]
    },
    {
        title: "Java Stack Traces",
        query: 'site:{DOMAIN} "java.lang" OR "javax.servlet" OR "java.io" OR "java.sql" OR "org.apache" OR "org.springframework" ext:jsp',
        tech: ["jsp"],
        vuln: ["disclosure"]
    },
    {
        title: "JSP Upload Forms",
        query: 'site:{DOMAIN} inurl:upload ext:jsp OR inurl:file ext:jsp OR inurl:fileupload ext:jsp OR inurl:uploader ext:jsp OR inurl:attachment ext:jsp',
        tech: ["jsp"],
        vuln: ["upload"]
    },

    // WordPress Dorks
    {
        title: "WordPress Version",
        query: 'site:{DOMAIN} inurl:wp-content OR inurl:wp-includes OR inurl:wp-admin "WordPress" OR inurl:readme.html OR inurl:/feed/ OR inurl:/wp-json/',
        tech: ["wordpress"],
        vuln: ["disclosure"]
    },
    {
        title: "WordPress Config File",
        query: 'site:{DOMAIN} inurl:wp-config.php OR inurl:wp-config.bak OR inurl:wp-config.old OR inurl:wp-config.txt OR inurl:wp-config.php.bak OR inurl:wp-config.php~',
        tech: ["wordpress"],
        vuln: ["config", "disclosure"]
    },
    {
        title: "WordPress Admin Login",
        query: 'site:{DOMAIN} inurl:wp-admin OR inurl:wp-login.php OR inurl:wp-admin/admin-ajax.php OR inurl:wp-admin/admin-post.php',
        tech: ["wordpress"],
        vuln: ["login", "admin"]
    },
    {
        title: "WordPress Backup Files",
        query: 'site:{DOMAIN} ext:sql intext:"wp_users" OR ext:sql intext:"wp_options" OR ext:sql intext:"wp_posts" OR inurl:backup ext:sql OR inurl:dump ext:sql',
        tech: ["wordpress"],
        vuln: ["backup", "disclosure"]
    },
    {
        title: "WordPress Exposed Upload Directory",
        query: 'site:{DOMAIN} inurl:wp-content/uploads intitle:"Index of"',
        tech: ["wordpress"],
        vuln: ["disclosure"]
    },
    {
        title: "WordPress Plugin Vulnerabilities",
        query: 'site:{DOMAIN} inurl:wp-content/plugins/ OR inurl:/plugins/ intitle:"Index of" OR inurl:readme.txt',
        tech: ["wordpress"],
        vuln: ["disclosure"]
    },
    {
        title: "WordPress Debug Log",
        query: 'site:{DOMAIN} inurl:wp-content/debug.log',
        tech: ["wordpress"],
        vuln: ["disclosure"]
    },
    {
        title: "WordPress User Enumeration",
        query: 'site:{DOMAIN} inurl:?author=1 OR inurl:wp-json/wp/v2/users OR inurl:?author=2 OR inurl:?author=3 OR inurl:/author/',
        tech: ["wordpress"],
        vuln: ["disclosure", "idor"]
    },
    {
        title: "WordPress XML-RPC",
        query: 'site:{DOMAIN} inurl:xmlrpc.php',
        tech: ["wordpress"],
        vuln: ["rce", "disclosure"]
    },

    // Drupal Dorks
    {
        title: "Drupal Version",
        query: 'site:{DOMAIN} intext:"Powered by Drupal" OR inurl:CHANGELOG.txt "Drupal" OR inurl:README.txt "Drupal" OR inurl:/node/ OR inurl:/sites/default/',
        tech: ["drupal"],
        vuln: ["disclosure"]
    },
    {
        title: "Drupal Admin Panel",
        query: 'site:{DOMAIN} inurl:user/login "Drupal"',
        tech: ["drupal"],
        vuln: ["login", "admin"]
    },
    {
        title: "Drupal Config Files",
        query: 'site:{DOMAIN} inurl:sites/default/files OR inurl:settings.php OR inurl:sites/default/settings.php OR inurl:/sites/default/ intitle:"Index of"',
        tech: ["drupal"],
        vuln: ["config", "disclosure"]
    },

    // Joomla Dorks
    {
        title: "Joomla Version",
        query: 'site:{DOMAIN} inurl:administrator "Joomla" OR inurl:/components/ OR inurl:/modules/ OR inurl:/templates/ OR inurl:joomla.xml',
        tech: ["joomla"],
        vuln: ["disclosure"]
    },
    {
        title: "Joomla Admin Panel",
        query: 'site:{DOMAIN} inurl:administrator/index.php',
        tech: ["joomla"],
        vuln: ["admin", "login"]
    },
    {
        title: "Joomla Config Files",
        query: 'site:{DOMAIN} inurl:configuration.php OR inurl:configuration.php.bak OR inurl:configuration.php~ OR inurl:configuration.php.old OR inurl:configuration.php.txt',
        tech: ["joomla"],
        vuln: ["config", "disclosure"]
    },

    // Laravel Dorks
    {
        title: "Laravel Debug Mode",
        query: 'site:{DOMAIN} intext:"Laravel" intext:"APP_DEBUG" OR intext:"Whoops" OR intext:"RuntimeException" OR intext:"FatalErrorException"',
        tech: ["laravel"],
        vuln: ["disclosure"]
    },
    {
        title: "Laravel .env Files",
        query: 'site:{DOMAIN} ext:env "DB_PASSWORD" OR "APP_KEY" OR "AWS_SECRET" OR "MAIL_PASSWORD" OR "REDIS_PASSWORD" OR "SESSION_DRIVER"',
        tech: ["laravel", "php"],
        vuln: ["config", "disclosure"]
    },
    {
        title: "Laravel Log Files",
        query: 'site:{DOMAIN} inurl:storage/logs/ ext:log OR inurl:laravel.log OR inurl:lumen.log OR inurl:/logs/ "Laravel"',
        tech: ["laravel"],
        vuln: ["disclosure"]
    },
    {
        title: "Laravel Telescope",
        query: 'site:{DOMAIN} inurl:telescope',
        tech: ["laravel"],
        vuln: ["disclosure", "admin"]
    },

    // Django Dorks
    {
        title: "Django Debug Mode",
        query: 'site:{DOMAIN} intext:"RuntimeError at" "Django" OR intext:"DoesNotExist at" OR intext:"OperationalError at" OR intext:"ProgrammingError at" OR "DEBUG = True"',
        tech: ["django", "python"],
        vuln: ["disclosure"]
    },
    {
        title: "Django Admin Panel",
        query: 'site:{DOMAIN} inurl:admin/login "Django" OR inurl:/admin/ "Django administration" OR inurl:accounts/login',
        tech: ["django"],
        vuln: ["admin", "login"]
    },
    {
        title: "Django Settings Files",
        query: 'site:{DOMAIN} inurl:settings.py OR inurl:local_settings.py OR inurl:settings.pyc OR inurl:dev_settings.py OR inurl:production_settings.py',
        tech: ["django"],
        vuln: ["config", "disclosure"]
    },

    // Node.js Dorks
    {
        title: "Node.js Package Files",
        query: 'site:{DOMAIN} ext:json inurl:package.json OR inurl:package-lock.json OR inurl:yarn.lock OR inurl:npm-debug.log',
        tech: ["nodejs"],
        vuln: ["disclosure"]
    },
    {
        title: "Node.js Environment Files",
        query: 'site:{DOMAIN} ext:env intext:"NODE_ENV" OR intext:"PORT" OR intext:"JWT_SECRET" OR intext:"API_KEY" OR ext:env "mongodb" OR ext:env "redis"',
        tech: ["nodejs"],
        vuln: ["config", "disclosure"]
    },
    {
        title: "Node.js Error Stack Traces",
        query: 'site:{DOMAIN} intext:"at Module" OR intext:"at Function" OR intext:"at Object.Module" OR intext:"at process" OR intext:"at Server" OR "Error: Cannot find module"',
        tech: ["nodejs"],
        vuln: ["disclosure"]
    },

    // SQL Injection Dorks
    {
        title: "SQL Error Messages",
        query: 'site:{DOMAIN} intext:"SQL syntax" OR intext:"mysql_fetch_array()" OR intext:"mysql_num_rows()" OR intext:"mysqli_fetch" OR intext:"Warning: mysql" OR intext:"MySQLSyntaxErrorException" OR intext:"valid MySQL result" OR intext:"check the manual that corresponds to your"',
        tech: [],
        vuln: ["sqli", "disclosure"]
    },
    {
        title: "SQL Injection in URL Parameters",
        query: 'site:{DOMAIN} inurl:id= OR inurl:product= OR inurl:category= OR inurl:item= OR inurl:pid= OR inurl:cid= OR inurl:user= OR inurl:article= OR inurl:page_id= OR inurl:newsid= OR inurl:memberno=',
        tech: [],
        vuln: ["sqli"]
    },
    {
        title: "MSSQL Error Messages",
        query: 'site:{DOMAIN} "Microsoft OLE DB Provider for SQL Server" OR "ODBC SQL Server Driver"',
        tech: [],
        vuln: ["sqli", "disclosure"]
    },
    {
        title: "Oracle SQL Errors",
        query: 'site:{DOMAIN} "ORA-" OR "Oracle error"',
        tech: [],
        vuln: ["sqli", "disclosure"]
    },
    {
        title: "PostgreSQL Errors",
        query: 'site:{DOMAIN} "PostgreSQL query failed" OR "pg_query()"',
        tech: [],
        vuln: ["sqli", "disclosure"]
    },

    // XSS Dorks
    {
        title: "Reflected XSS Parameters",
        query: 'site:{DOMAIN} inurl:search= OR inurl:query= OR inurl:q= OR inurl:keyword= OR inurl:keywords= OR inurl:term= OR inurl:s= OR inurl:searchterm= OR inurl:name= OR inurl:lang= OR inurl:p=',
        tech: [],
        vuln: ["xss"]
    },
    {
        title: "XSS in URL Redirect",
        query: 'site:{DOMAIN} inurl:redirect= OR inurl:url= OR inurl:return= OR inurl:view= OR inurl:out= OR inurl:to= OR inurl:destination= OR inurl:rurl= OR inurl:redirect_uri= OR inurl:checkout_url=',
        tech: [],
        vuln: ["xss", "openredirect"]
    },
    {
        title: "XSS in Message Parameters",
        query: 'site:{DOMAIN} inurl:msg= OR inurl:message= OR inurl:error= OR inurl:warning= OR inurl:err= OR inurl:notice= OR inurl:alert= OR inurl:success= OR inurl:status= OR inurl:info=',
        tech: [],
        vuln: ["xss"]
    },

    // LFI/RFI Dorks
    {
        title: "Local File Inclusion",
        query: 'site:{DOMAIN} inurl:file= OR inurl:path= OR inurl:page= OR inurl:include= OR inurl:doc= OR inurl:folder= OR inurl:pg= OR inurl:style= OR inurl:pdf= OR inurl:template= OR inurl:php_path= OR inurl:document=',
        tech: [],
        vuln: ["lfi"]
    },
    {
        title: "Remote File Inclusion",
        query: 'site:{DOMAIN} inurl:url= OR inurl:link= OR inurl:src= OR inurl:uri= OR inurl:http= OR inurl:menu= OR inurl:navigation= OR inurl:open= OR inurl:feed=',
        tech: [],
        vuln: ["lfi"]
    },
    {
        title: "Directory Traversal",
        query: 'site:{DOMAIN} inurl:../ OR inurl:..../',
        tech: [],
        vuln: ["lfi"]
    },

    // Open Redirect Dorks
    {
        title: "Open Redirect Parameters",
        query: 'site:{DOMAIN} inurl:redirect= OR inurl:url= OR inurl:return= OR inurl:next= OR inurl:returnto= OR inurl:returnurl= OR inurl:redir= OR inurl:redirect_to= OR inurl:redirect_url= OR inurl:go= OR inurl:out=',
        tech: [],
        vuln: ["openredirect"]
    },
    {
        title: "Open Redirect in Links",
        query: 'site:{DOMAIN} inurl:goto= OR inurl:target= OR inurl:redir= OR inurl:link= OR inurl:forward= OR inurl:continue= OR inurl:dest= OR inurl:jump= OR inurl:navigate=',
        tech: [],
        vuln: ["openredirect"]
    },

    // SSRF Dorks
    {
        title: "SSRF URL Parameters",
        query: 'site:{DOMAIN} inurl:url= OR inurl:uri= OR inurl:path= OR inurl:dest= OR inurl:host= OR inurl:reference= OR inurl:page= OR inurl:site= OR inurl:http= OR inurl:port= OR inurl:target=',
        tech: [],
        vuln: ["ssrf"]
    },
    {
        title: "SSRF in Webhooks",
        query: 'site:{DOMAIN} inurl:webhook= OR inurl:callback= OR inurl:proxy= OR inurl:api_url= OR inurl:feed= OR inurl:fetch= OR inurl:validate= OR inurl:upload= OR inurl:import=',
        tech: [],
        vuln: ["ssrf"]
    },

    // RCE Dorks
    {
        title: "Command Injection Parameters",
        query: 'site:{DOMAIN} inurl:cmd= OR inurl:exec= OR inurl:command= OR inurl:execute= OR inurl:ping= OR inurl:query= OR inurl:jump= OR inurl:code= OR inurl:reg= OR inurl:do= OR inurl:func= OR inurl:run=',
        tech: [],
        vuln: ["rce"]
    },
    {
        title: "Shell Access Pages",
        query: 'site:{DOMAIN} inurl:shell OR inurl:terminal OR inurl:console OR inurl:cmd OR inurl:command OR inurl:execute OR inurl:webshell OR inurl:bash OR inurl:ssh',
        tech: [],
        vuln: ["rce", "admin"]
    },

    // IDOR Dorks
    {
        title: "IDOR User IDs",
        query: 'site:{DOMAIN} inurl:user= OR inurl:userid= OR inurl:profile= OR inurl:uid= OR inurl:member= OR inurl:memberid= OR inurl:customer= OR inurl:customerid= OR inurl:accountid= OR inurl:userno=',
        tech: [],
        vuln: ["idor"]
    },
    {
        title: "IDOR Document Access",
        query: 'site:{DOMAIN} inurl:doc= OR inurl:document= OR inurl:file= OR inurl:download= OR inurl:attachment= OR inurl:report= OR inurl:invoice= OR inurl:receipt= OR inurl:ticket= OR inurl:order=',
        tech: [],
        vuln: ["idor"]
    },
    {
        title: "IDOR Account Management",
        query: 'site:{DOMAIN} inurl:account= OR inurl:edit= OR inurl:delete= OR inurl:modify= OR inurl:update= OR inurl:change= OR inurl:remove= OR inurl:manage= OR inurl:view= OR inurl:details=',
        tech: [],
        vuln: ["idor"]
    },

    // Information Disclosure Dorks
    {
        title: "Directory Listing",
        query: 'site:{DOMAIN} intitle:"Index of"',
        tech: [],
        vuln: ["disclosure"]
    },
    {
        title: "Git Repositories",
        query: 'site:{DOMAIN} inurl:.git intitle:"Index of"',
        tech: [],
        vuln: ["disclosure"]
    },
    {
        title: "SVN Repositories",
        query: 'site:{DOMAIN} inurl:.svn intitle:"Index of"',
        tech: [],
        vuln: ["disclosure"]
    },
    {
        title: "Environment Files",
        query: 'site:{DOMAIN} ext:env OR ext:environment',
        tech: [],
        vuln: ["config", "disclosure"]
    },
    {
        title: "Log Files",
        query: 'site:{DOMAIN} ext:log OR ext:log.txt',
        tech: [],
        vuln: ["disclosure"]
    },
    {
        title: "Backup Files",
        query: 'site:{DOMAIN} ext:bak OR ext:backup OR ext:old OR ext:save',
        tech: [],
        vuln: ["backup", "disclosure"]
    },
    {
        title: "SQL Dump Files",
        query: 'site:{DOMAIN} ext:sql OR ext:dump',
        tech: [],
        vuln: ["backup", "disclosure"]
    },
    {
        title: "Password Files",
        query: 'site:{DOMAIN} inurl:password OR inurl:passwd OR inurl:pwd OR inurl:pass OR inurl:credentials OR inurl:auth OR inurl:secret OR inurl:token OR inurl:key',
        tech: [],
        vuln: ["disclosure", "secrets"]
    },
    {
        title: "Configuration Backup",
        query: 'site:{DOMAIN} ext:config OR ext:conf OR ext:cfg',
        tech: [],
        vuln: ["config", "disclosure"]
    },
    {
        title: "SSH Private Keys",
        query: 'site:{DOMAIN} ext:pem OR ext:key "PRIVATE KEY"',
        tech: [],
        vuln: ["disclosure", "secrets"]
    },
    {
        title: "API Keys and Tokens",
        query: 'site:{DOMAIN} intext:"api_key" OR intext:"apikey" OR intext:"token" OR intext:"access_key" OR intext:"secret_key" OR intext:"api_secret" OR intext:"client_secret" OR intext:"auth_token" OR intext:"bearer"',
        tech: [],
        vuln: ["disclosure", "secrets"]
    },
    {
        title: "Database Credentials",
        query: 'site:{DOMAIN} intext:"DB_PASSWORD" OR intext:"database_password" OR intext:"db_pass" OR intext:"mysql_password" OR intext:"db_user" OR intext:"DATABASE_URL" OR intext:"POSTGRES_PASSWORD" OR intext:"MONGODB_URI"',
        tech: [],
        vuln: ["disclosure", "config", "secrets"]
    },

    // File Upload Dorks
    {
        title: "Upload Directories",
        query: 'site:{DOMAIN} inurl:upload OR inurl:uploads OR inurl:uploadfiles OR inurl:fileupload OR inurl:uploader OR inurl:file_upload OR inurl:files OR inurl:attachments OR inurl:media',
        tech: [],
        vuln: ["upload", "disclosure"]
    },
    {
        title: "File Upload Forms",
        query: 'site:{DOMAIN} intext:"choose file" OR intext:"upload file"',
        tech: [],
        vuln: ["upload"]
    },

    // Backup File Dorks
    {
        title: "Website Backups",
        query: 'site:{DOMAIN} ext:tar OR ext:zip OR ext:gz OR ext:7z',
        tech: [],
        vuln: ["backup", "disclosure"]
    },
    {
        title: "Database Backups",
        query: 'site:{DOMAIN} inurl:backup ext:sql OR ext:dump',
        tech: [],
        vuln: ["backup", "disclosure"]
    },
    {
        title: "Compressed Backups",
        query: 'site:{DOMAIN} inurl:backup ext:tar.gz OR ext:zip',
        tech: [],
        vuln: ["backup", "disclosure"]
    },

    // Config File Dorks
    {
        title: "Configuration Files",
        query: 'site:{DOMAIN} ext:xml OR ext:yml OR ext:yaml OR ext:ini',
        tech: [],
        vuln: ["config", "disclosure"]
    },
    {
        title: "Apache Config",
        query: 'site:{DOMAIN} ext:conf inurl:apache OR inurl:httpd',
        tech: ["apache"],
        vuln: ["config", "disclosure"]
    },
    {
        title: "Nginx Config",
        query: 'site:{DOMAIN} ext:conf inurl:nginx',
        tech: ["nginx"],
        vuln: ["config", "disclosure"]
    },
    {
        title: "IIS Config",
        query: 'site:{DOMAIN} ext:config inurl:web.config',
        tech: ["iis"],
        vuln: ["config", "disclosure"]
    },

    // Login Page Dorks
    {
        title: "Login Pages",
        query: 'site:{DOMAIN} inurl:login OR inurl:signin OR inurl:auth OR inurl:sign_in OR inurl:sign-in OR inurl:logon OR inurl:authenticate OR inurl:authentication OR inurl:account/login OR inurl:user/login',
        tech: [],
        vuln: ["login"]
    },
    {
        title: "Authentication Pages",
        query: 'site:{DOMAIN} intitle:"login" OR intitle:"sign in" OR intitle:"log in" OR intitle:"member login" OR intitle:"user login" OR intitle:"authentication" OR intitle:"account login"',
        tech: [],
        vuln: ["login"]
    },
    {
        title: "SSO Login Pages",
        query: 'site:{DOMAIN} inurl:sso OR inurl:oauth OR inurl:saml',
        tech: [],
        vuln: ["login"]
    },

    // Admin Panel Dorks
    {
        title: "Admin Panels",
        query: 'site:{DOMAIN} inurl:admin OR inurl:administrator OR inurl:cpanel OR inurl:admin_panel OR inurl:adminpanel OR inurl:controlpanel OR inurl:control OR inurl:webadmin OR inurl:adminconsole OR inurl:siteadmin',
        tech: [],
        vuln: ["admin"]
    },
    {
        title: "Dashboard Pages",
        query: 'site:{DOMAIN} inurl:dashboard OR inurl:panel OR inurl:portal OR inurl:console OR inurl:overview OR inurl:admin/dashboard OR inurl:user/dashboard',
        tech: [],
        vuln: ["admin"]
    },
    {
        title: "Management Consoles",
        query: 'site:{DOMAIN} inurl:manager OR inurl:management OR inurl:manage OR inurl:backend OR inurl:backoffice OR inurl:controlcenter OR inurl:config OR inurl:settings',
        tech: [],
        vuln: ["admin"]
    },
    {
        title: "Control Panels",
        query: 'site:{DOMAIN} intitle:"admin panel" OR intitle:"control panel"',
        tech: [],
        vuln: ["admin"]
    },

    // API Endpoint Dorks
    {
        title: "API Endpoints",
        query: 'site:{DOMAIN} inurl:api OR inurl:/v1/ OR inurl:/v2/ OR inurl:/v3/ OR inurl:rest OR inurl:api/v1 OR inurl:api/v2 OR inurl:api/v3 OR inurl:webservice OR inurl:service',
        tech: [],
        vuln: ["api", "disclosure"]
    },
    {
        title: "REST API Documentation",
        query: 'site:{DOMAIN} inurl:api/docs OR inurl:swagger OR inurl:api-docs OR inurl:apidocs OR inurl:swagger-ui OR inurl:openapi OR inurl:redoc OR inurl:api/documentation OR inurl:docs/api',
        tech: [],
        vuln: ["api", "disclosure"]
    },
    {
        title: "GraphQL Endpoints",
        query: 'site:{DOMAIN} inurl:graphql OR inurl:graphiql OR inurl:graphql/console OR inurl:gql OR inurl:api/graphql OR inurl:v1/graphql OR inurl:query',
        tech: [],
        vuln: ["api", "disclosure"]
    },
    {
        title: "API Keys in URLs",
        query: 'site:{DOMAIN} inurl:apikey= OR inurl:api_key=',
        tech: [],
        vuln: ["api", "disclosure"]
    },
    {
        title: "API Tokens",
        query: 'site:{DOMAIN} inurl:token= OR inurl:access_token=',
        tech: [],
        vuln: ["api", "disclosure"]
    },

    // Subdomain Discovery Dorks
    {
        title: "Find Subdomains",
        query: 'site:*.{DOMAIN}',
        tech: [],
        vuln: ["subdomain"]
    },
    {
        title: "Development Subdomains",
        query: 'site:dev.{DOMAIN} OR site:test.{DOMAIN} OR site:staging.{DOMAIN}',
        tech: [],
        vuln: ["subdomain", "disclosure"]
    },
    {
        title: "Admin Subdomains",
        query: 'site:admin.{DOMAIN} OR site:portal.{DOMAIN} OR site:panel.{DOMAIN}',
        tech: [],
        vuln: ["subdomain", "admin"]
    },
    {
        title: "API Subdomains",
        query: 'site:api.{DOMAIN} OR site:api-*.{DOMAIN}',
        tech: [],
        vuln: ["subdomain", "api"]
    },

    // Apache Specific
    {
        title: "Apache Server Status",
        query: 'site:{DOMAIN} inurl:server-status',
        tech: ["apache"],
        vuln: ["disclosure"]
    },
    {
        title: "Apache Info Page",
        query: 'site:{DOMAIN} inurl:server-info',
        tech: ["apache"],
        vuln: ["disclosure"]
    },
    {
        title: "Apache .htaccess Files",
        query: 'site:{DOMAIN} ext:htaccess OR inurl:.htaccess OR inurl:htaccess.txt OR inurl:.htaccess.bak OR inurl:.htpasswd',
        tech: ["apache"],
        vuln: ["config", "disclosure"]
    },

    // Python Specific
    {
        title: "Python Requirements Files",
        query: 'site:{DOMAIN} ext:txt inurl:requirements.txt OR inurl:requirements-dev.txt OR inurl:requirements-prod.txt OR inurl:pip-requirements.txt OR inurl:dev-requirements.txt',
        tech: ["python"],
        vuln: ["disclosure"]
    },
    {
        title: "Python Pickle Files",
        query: 'site:{DOMAIN} ext:pkl OR ext:pickle',
        tech: ["python"],
        vuln: ["rce", "disclosure"]
    },

    // Ruby Specific
    {
        title: "Ruby Gemfile",
        query: 'site:{DOMAIN} inurl:Gemfile OR inurl:Gemfile.lock OR inurl:.bundle OR inurl:gems.rb OR inurl:gems.locked',
        tech: ["ruby"],
        vuln: ["disclosure"]
    },
    {
        title: "Ruby on Rails Errors",
        query: 'site:{DOMAIN} intext:"Rails Error" OR intext:"ActiveRecord" OR intext:"ActionController" OR intext:"Routing Error" OR "We\'re sorry, but something went wrong"',
        tech: ["ruby"],
        vuln: ["disclosure"]
    },

    // General Security
    {
        title: "robots.txt Disclosure",
        query: 'site:{DOMAIN} inurl:robots.txt',
        tech: [],
        vuln: ["disclosure"]
    },
    {
        title: "Sitemap Files",
        query: 'site:{DOMAIN} ext:xml inurl:sitemap',
        tech: [],
        vuln: ["disclosure"]
    },
    {
        title: "WADL Files",
        query: 'site:{DOMAIN} ext:wadl',
        tech: [],
        vuln: ["api", "disclosure"]
    },
    {
        title: "WSDL Files",
        query: 'site:{DOMAIN} ext:wsdl',
        tech: [],
        vuln: ["api", "disclosure"]
    },
    {
        title: "Test Pages",
        query: 'site:{DOMAIN} inurl:test OR inurl:demo OR inurl:sample',
        tech: [],
        vuln: ["disclosure"]
    },
    {
        title: "Source Code Files",
        query: 'site:{DOMAIN} ext:java OR ext:py OR ext:rb OR ext:pl OR ext:php OR ext:asp OR ext:aspx OR ext:jsp OR ext:js OR ext:ts OR ext:go OR ext:c OR ext:cpp OR ext:cs OR ext:scala OR ext:swift OR ext:kt',
        tech: [],
        vuln: ["disclosure"]
    },

    // AWS Cloud Dorks
    {
        title: "AWS S3 Buckets",
        query: 'site:s3.amazonaws.com "{DOMAIN}"',
        tech: ["aws"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "AWS S3 Bucket URLs in Domain",
        query: 'site:{DOMAIN} inurl:s3.amazonaws.com OR inurl:".s3." OR intext:"s3://"',
        tech: ["aws"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "AWS CloudFront Distribution",
        query: 'site:cloudfront.net "{DOMAIN}"',
        tech: ["aws"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "AWS Elastic Beanstalk",
        query: 'site:elasticbeanstalk.com "{DOMAIN}"',
        tech: ["aws"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "AWS API Gateway",
        query: 'site:execute-api.amazonaws.com "{DOMAIN}"',
        tech: ["aws"],
        vuln: ["cloud", "api"]
    },
    {
        title: "AWS Lambda Functions",
        query: 'site:{DOMAIN} inurl:lambda OR intext:"lambda.amazonaws.com" OR intext:".lambda-url."',
        tech: ["aws"],
        vuln: ["cloud", "api"]
    },
    {
        title: "AWS ECS/EKS Resources",
        query: 'site:{DOMAIN} intext:"eks.amazonaws.com" OR intext:"ecs.amazonaws.com" OR intext:".eks."',
        tech: ["aws"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "AWS Configuration Files",
        query: 'site:{DOMAIN} ext:pem OR ext:key intext:"BEGIN RSA PRIVATE KEY" OR intext:"aws_access_key" OR intext:"aws_secret"',
        tech: ["aws"],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "AWS Credentials in Code",
        query: 'site:{DOMAIN} "AKIA" OR "aws_access_key_id" OR "aws_secret_access_key"',
        tech: ["aws"],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "AWS RDS Endpoints",
        query: 'site:{DOMAIN} intext:".rds.amazonaws.com" OR intext:"rds." OR intext:"database."',
        tech: ["aws"],
        vuln: ["cloud", "disclosure"]
    },

    // Azure Cloud Dorks
    {
        title: "Azure Blob Storage",
        query: 'site:blob.core.windows.net "{DOMAIN}"',
        tech: ["azure"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "Azure Blob URLs in Domain",
        query: 'site:{DOMAIN} inurl:blob.core.windows.net OR intext:".blob." OR intext:"azure-storage"',
        tech: ["azure"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "Azure App Services",
        query: 'site:azurewebsites.net "{DOMAIN}"',
        tech: ["azure"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "Azure Functions",
        query: 'site:azurewebsites.net inurl:api OR site:{DOMAIN} intext:".azurewebsites.net"',
        tech: ["azure"],
        vuln: ["cloud", "api"]
    },
    {
        title: "Azure DevOps",
        query: 'site:dev.azure.com "{DOMAIN}" OR site:{DOMAIN} intext:"dev.azure.com" OR intext:"visualstudio.com"',
        tech: ["azure"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "Azure CDN Endpoints",
        query: 'site:azureedge.net "{DOMAIN}" OR site:{DOMAIN} intext:".azureedge.net"',
        tech: ["azure"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "Azure API Management",
        query: 'site:azure-api.net "{DOMAIN}" OR site:{DOMAIN} intext:".azure-api.net"',
        tech: ["azure"],
        vuln: ["cloud", "api"]
    },
    {
        title: "Azure Key Vault References",
        query: 'site:{DOMAIN} intext:"vault.azure.net" OR intext:"keyvault" OR intext:"@Microsoft.KeyVault"',
        tech: ["azure"],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "Azure Credentials",
        query: 'site:{DOMAIN} "azure_client_id" OR "azure_client_secret" OR "azure_tenant_id" OR "DefaultAzureCredential"',
        tech: ["azure"],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "Azure SQL Database",
        query: 'site:{DOMAIN} intext:".database.windows.net" OR intext:"azure-sql" OR intext:"sqlazure"',
        tech: ["azure"],
        vuln: ["cloud", "disclosure"]
    },

    // Google Cloud Platform Dorks
    {
        title: "GCP Storage Buckets",
        query: 'site:storage.googleapis.com "{DOMAIN}"',
        tech: ["gcp"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "GCP Storage URLs in Domain",
        query: 'site:{DOMAIN} inurl:storage.googleapis.com OR inurl:storage.cloud.google.com OR intext:"gs://"',
        tech: ["gcp"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "GCP App Engine",
        query: 'site:appspot.com "{DOMAIN}"',
        tech: ["gcp"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "GCP Cloud Functions",
        query: 'site:cloudfunctions.net "{DOMAIN}" OR site:{DOMAIN} intext:".cloudfunctions.net" OR intext:"cloud-function"',
        tech: ["gcp"],
        vuln: ["cloud", "api"]
    },
    {
        title: "GCP Cloud Run Services",
        query: 'site:run.app "{DOMAIN}" OR site:{DOMAIN} intext:".run.app" OR intext:"cloudrun"',
        tech: ["gcp"],
        vuln: ["cloud", "api"]
    },
    {
        title: "GCP Firebase",
        query: 'site:firebaseio.com "{DOMAIN}" OR site:firebaseapp.com "{DOMAIN}" OR site:{DOMAIN} intext:"firebase"',
        tech: ["gcp"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "GCP API Keys",
        query: 'site:{DOMAIN} "AIza" OR "google_api_key" OR "GOOGLE_APPLICATION_CREDENTIALS"',
        tech: ["gcp"],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "GCP Service Account Keys",
        query: 'site:{DOMAIN} ext:json intext:"type": "service_account" OR intext:"private_key_id"',
        tech: ["gcp"],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "GCP BigQuery Datasets",
        query: 'site:{DOMAIN} intext:"bigquery.googleapis.com" OR intext:"bq://" OR intext:"bigquery"',
        tech: ["gcp"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "GCP Cloud SQL",
        query: 'site:{DOMAIN} intext:".cloudsql." OR intext:"cloud-sql" OR intext:"cloudsql"',
        tech: ["gcp"],
        vuln: ["cloud", "disclosure"]
    },

    // Multi-Cloud & Container Dorks
    {
        title: "Docker Registry",
        query: 'site:{DOMAIN} inurl:"v2/_catalog" OR intext:"docker-registry" OR intext:"registry.hub.docker.com"',
        tech: ["docker"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "Kubernetes Dashboards",
        query: 'site:{DOMAIN} inurl:"kubernetes-dashboard" OR intext:"k8s" OR intext:"kubectl"',
        tech: ["kubernetes"],
        vuln: ["cloud", "admin"]
    },
    {
        title: "Cloud Configuration Files",
        query: 'site:{DOMAIN} ext:yaml OR ext:yml intext:"cloud" OR intext:"kubernetes" OR intext:"docker-compose"',
        tech: [],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "Terraform State Files",
        query: 'site:{DOMAIN} ext:tfstate OR intext:"terraform.tfstate" OR intext:"terraform_remote_state"',
        tech: [],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "Cloud Environment Variables",
        query: 'site:{DOMAIN} ext:env intext:"AWS" OR intext:"AZURE" OR intext:"GOOGLE" OR intext:"CLOUD" OR intext:"API_KEY"',
        tech: [],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "Cloud Metadata Endpoints",
        query: 'site:{DOMAIN} intext:"169.254.169.254" OR intext:"metadata.google.internal" OR intext:"metadata.azure.com"',
        tech: [],
        vuln: ["cloud", "ssrf", "disclosure"]
    },

    // PII (Personally Identifiable Information) Dorks
    {
        title: "Email Addresses Exposed",
        query: 'site:{DOMAIN} intext:"@" (inurl:email OR inurl:contacts OR inurl:users OR inurl:members OR inurl:customers)',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "Phone Numbers Exposed",
        query: 'site:{DOMAIN} intext:"phone" OR intext:"mobile" OR intext:"tel:" OR intext:"telephone" (inurl:contact OR inurl:user OR inurl:customer)',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "Social Security Numbers",
        query: 'site:{DOMAIN} intext:"SSN" OR intext:"social security" OR intext:"social_security_number" OR intext:"ssn:"',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "Credit Card Information",
        query: 'site:{DOMAIN} intext:"card number" OR intext:"credit card" OR intext:"cc:" OR intext:"cvv" OR intext:"card_number"',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "Personal Documents (Resumes/CVs)",
        query: 'site:{DOMAIN} ext:pdf OR ext:doc OR ext:docx (intext:"resume" OR intext:"curriculum vitae" OR intext:"CV" OR intext:"personal information")',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "ID Documents & Passports",
        query: 'site:{DOMAIN} intext:"passport" OR intext:"driver license" OR intext:"national id" OR intext:"identification" ext:pdf OR ext:jpg OR ext:png',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "User Database Exports",
        query: 'site:{DOMAIN} ext:sql OR ext:csv OR ext:xlsx (intext:"users" OR intext:"customers" OR intext:"members" OR intext:"employees")',
        tech: [],
        vuln: ["pii", "disclosure", "backup"]
    },
    {
        title: "Customer Information Files",
        query: 'site:{DOMAIN} inurl:customer OR inurl:client (ext:xls OR ext:xlsx OR ext:csv OR ext:txt OR ext:pdf)',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "Employee Information",
        query: 'site:{DOMAIN} intext:"employee id" OR intext:"employee_id" OR intext:"staff" OR intext:"payroll" (ext:xls OR ext:xlsx OR ext:csv OR ext:pdf)',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "Medical Records & Health Data",
        query: 'site:{DOMAIN} intext:"medical record" OR intext:"patient" OR intext:"health" OR intext:"diagnosis" OR intext:"prescription" ext:pdf OR ext:doc',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "Banking & Financial Documents",
        query: 'site:{DOMAIN} intext:"bank account" OR intext:"account number" OR intext:"routing number" OR intext:"IBAN" OR intext:"swift code"',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "Tax Documents",
        query: 'site:{DOMAIN} intext:"tax return" OR intext:"W-2" OR intext:"1099" OR intext:"tax id" OR intext:"EIN" ext:pdf',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "Address & Location Data",
        query: 'site:{DOMAIN} intext:"home address" OR intext:"street address" OR intext:"zip code" OR intext:"postal code" (inurl:user OR inurl:profile OR inurl:customer)',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "Date of Birth Information",
        query: 'site:{DOMAIN} intext:"date of birth" OR intext:"dob" OR intext:"birth date" OR intext:"birthday" (inurl:user OR inurl:profile OR inurl:member)',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "Private Messages & Communications",
        query: 'site:{DOMAIN} intext:"private message" OR intext:"confidential" OR inurl:inbox OR inurl:messages ext:txt OR ext:pdf OR ext:eml',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "User Registration Data",
        query: 'site:{DOMAIN} inurl:register OR inurl:signup OR inurl:registration (intext:"username" OR intext:"password" OR intext:"email")',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "API Keys with PII Access",
        query: 'site:{DOMAIN} intext:"api_key" OR intext:"apikey" OR intext:"api-key" (intext:"user" OR intext:"customer" OR intext:"profile")',
        tech: [],
        vuln: ["pii", "disclosure", "api"]
    },
    {
        title: "Biometric Data References",
        query: 'site:{DOMAIN} intext:"fingerprint" OR intext:"biometric" OR intext:"facial recognition" OR intext:"retina scan"',
        tech: [],
        vuln: ["pii", "disclosure"]
    },
    {
        title: "Login Credentials in Files",
        query: 'site:{DOMAIN} ext:txt OR ext:log OR ext:cfg (intext:"username" AND intext:"password") OR (intext:"user:" AND intext:"pass:")',
        tech: [],
        vuln: ["pii", "disclosure", "config"]
    },
    {
        title: "GDPR/Privacy Policy Violations",
        query: 'site:{DOMAIN} (inurl:export OR inurl:download OR inurl:data) (intext:"personal data" OR intext:"user data" OR intext:"customer data")',
        tech: [],
        vuln: ["pii", "disclosure"]
    },

    // Firebase Specific Dorks
    {
        title: "Firebase Realtime Database URLs",
        query: 'site:{DOMAIN} intext:".firebaseio.com" OR inurl:firebaseio.com',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "Open Firebase Databases (Domain-Specific)",
        query: 'site:{DOMAIN}.firebaseio.com "/.json"',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "disclosure", "config"]
    },
    {
        title: "Firebase Databases Mentioning Domain",
        query: 'site:firebaseio.com intext:"{DOMAIN}"',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "disclosure", "config"]
    },
    {
        title: "Firebase Configuration Files",
        query: 'site:{DOMAIN} ext:json (intext:"firebaseConfig" OR intext:"apiKey" OR intext:"authDomain" OR intext:"projectId" OR intext:"storageBucket")',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "Firebase API Keys Exposed",
        query: 'site:{DOMAIN} "AIza" AND ("firebase" OR "firebaseConfig" OR "apiKey")',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "Firebase Storage Buckets",
        query: 'site:{DOMAIN} intext:".appspot.com" OR intext:"firebasestorage.googleapis.com" OR intext:"storage.firebase.com"',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "Firebase Hosting Sites",
        query: 'site:firebaseapp.com "{DOMAIN}" OR site:web.app "{DOMAIN}"',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "Firebase Authentication Config",
        query: 'site:{DOMAIN} intext:"firebase.auth()" OR intext:"signInWithEmailAndPassword" OR intext:"createUserWithEmailAndPassword"',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "Firebase Cloud Messaging Tokens",
        query: 'site:{DOMAIN} intext:"FCM" OR intext:"firebase-messaging" OR intext:"messagingSenderId" OR intext:"fcm_token"',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "Firebase Security Rules",
        query: 'site:{DOMAIN} ext:json (intext:"rules" AND (intext:"read" OR intext:"write") AND intext:"firebase")',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "Firebase Admin SDK Credentials",
        query: 'site:{DOMAIN} ext:json (intext:"type": "service_account" AND (intext:"firebase" OR intext:"firebase-adminsdk"))',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "Firestore Database References",
        query: 'site:{DOMAIN} intext:"firestore" OR intext:".collection(" OR intext:"firebase.firestore()"',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "Firebase Functions Endpoints",
        query: 'site:{DOMAIN} inurl:"cloudfunctions.net" OR intext:"firebase functions" OR intext:"functions.https.onCall"',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "api"]
    },
    {
        title: "Firebase Project IDs",
        query: 'site:{DOMAIN} intext:"firebase-project-id" OR intext:"projectId:" OR intext:"project_id" (intext:"firebase" OR intext:"firebaseapp")',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "disclosure"]
    },
    {
        title: "Firebase Environment Files",
        query: 'site:{DOMAIN} ext:env OR ext:config (intext:"FIREBASE" OR intext:"REACT_APP_FIREBASE" OR intext:"NEXT_PUBLIC_FIREBASE")',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "config", "disclosure"]
    },
    {
        title: "Firebase Dynamic Links",
        query: 'site:{DOMAIN} intext:".page.link" OR intext:"firebase dynamic link" OR intext:"dynamicLinks"',
        tech: ["firebase", "gcp"],
        vuln: ["cloud", "disclosure"]
    },

    // Cloud Document Sharing & Access Control Dorks
    {
        title: "Google Drive Links",
        query: 'site:{DOMAIN} inurl:"drive.google.com" OR intext:"docs.google.com" OR intext:"drive.google.com"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Google Docs Shared Documents",
        query: 'site:{DOMAIN} inurl:"docs.google.com/document" OR intext:"docs.google.com/document/d/"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Google Sheets Shared Spreadsheets",
        query: 'site:{DOMAIN} inurl:"docs.google.com/spreadsheets" OR intext:"docs.google.com/spreadsheets/d/"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Google Slides Presentations",
        query: 'site:{DOMAIN} inurl:"docs.google.com/presentation" OR intext:"docs.google.com/presentation/d/"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Google Forms",
        query: 'site:{DOMAIN} inurl:"docs.google.com/forms" OR intext:"forms.gle" OR intext:"docs.google.com/forms/d/"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Google Drive Folders",
        query: 'site:{DOMAIN} inurl:"drive.google.com/drive/folders" OR intext:"drive.google.com/drive/folders/"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Publicly Editable Google Docs",
        query: 'site:docs.google.com intext:"{DOMAIN}" inurl:"/edit"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents", "idor"]
    },
    {
        title: "Microsoft OneDrive Links",
        query: 'site:{DOMAIN} inurl:"onedrive.live.com" OR intext:"1drv.ms" OR intext:"onedrive.live.com"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "SharePoint Documents",
        query: 'site:{DOMAIN} inurl:"sharepoint.com" OR intext:".sharepoint.com" OR intext:"sharepoint"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Office 365 Shared Documents",
        query: 'site:{DOMAIN} inurl:"office.com" OR intext:"office365" OR intext:"officeapps.live.com"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Dropbox Shared Links",
        query: 'site:{DOMAIN} inurl:"dropbox.com" OR intext:"dl.dropboxusercontent.com" OR intext:"dropbox.com/s/"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Dropbox Paper Documents",
        query: 'site:{DOMAIN} inurl:"paper.dropbox.com" OR intext:"paper.dropbox.com"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Box.com Shared Files",
        query: 'site:{DOMAIN} inurl:"box.com" OR intext:"app.box.com" OR intext:"box.com/s/"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "iCloud Drive Links",
        query: 'site:{DOMAIN} inurl:"icloud.com" OR intext:"icloud.com/iclouddrive" OR intext:"icloud.com/share"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Notion Shared Pages",
        query: 'site:{DOMAIN} inurl:"notion.so" OR intext:"notion.site" OR intext:"notion.so"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Airtable Shared Bases",
        query: 'site:{DOMAIN} inurl:"airtable.com" OR intext:"airtable.com/shr" OR intext:"airtable.com/app"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Trello Boards",
        query: 'site:{DOMAIN} inurl:"trello.com/b/" OR intext:"trello.com/b/" OR intext:"trello.com"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Confluence Pages",
        query: 'site:{DOMAIN} inurl:"atlassian.net" OR intext:"confluence" OR inurl:"/wiki/"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Jira Issues & Projects",
        query: 'site:{DOMAIN} inurl:"atlassian.net/browse" OR intext:"jira" OR inurl:"/jira/"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Figma Design Files",
        query: 'site:{DOMAIN} inurl:"figma.com/file" OR intext:"figma.com/file/" OR intext:"figma.com"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Miro Boards",
        query: 'site:{DOMAIN} inurl:"miro.com" OR intext:"miro.com/app/board/"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Shared PDF Documents",
        query: 'site:{DOMAIN} ext:pdf (inurl:"shared" OR inurl:"public" OR intext:"download")',
        tech: [],
        vuln: ["disclosure", "documents"]
    },
    {
        title: "WeTransfer Download Links",
        query: 'site:{DOMAIN} inurl:"wetransfer.com" OR intext:"we.tl" OR intext:"wetransfer.com"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Google Colab Notebooks",
        query: 'site:{DOMAIN} inurl:"colab.research.google.com" OR intext:"colab.research.google.com"',
        tech: [],
        vuln: ["cloud", "disclosure", "documents"]
    },
    {
        title: "Pastebin & Code Sharing Links",
        query: 'site:{DOMAIN} inurl:"pastebin.com" OR inurl:"gist.github.com" OR intext:"paste.ee" OR intext:"hastebin"',
        tech: [],
        vuln: ["disclosure", "documents"]
    },

    // Comprehensive Secrets & Credentials Dorks
    {
        title: "GitHub Personal Access Tokens",
        query: 'site:{DOMAIN} "ghp_" OR "github_pat_" OR "gho_" OR "ghu_" OR "ghs_" OR "ghr_"',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "GitLab Tokens",
        query: 'site:{DOMAIN} "glpat-" OR "gitlab" (intext:"token" OR intext:"api_key")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "GitHub OAuth Tokens",
        query: 'site:{DOMAIN} "github" (intext:"client_id" OR intext:"client_secret" OR intext:"access_token")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Slack Tokens & Webhooks",
        query: 'site:{DOMAIN} "xox" ("xoxb" OR "xoxa" OR "xoxp" OR "xoxr") OR intext:"slack.com/api/" OR intext:"hooks.slack.com"',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Slack Webhooks",
        query: 'site:{DOMAIN} inurl:"hooks.slack.com" OR intext:"hooks.slack.com/services/"',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Stripe API Keys",
        query: 'site:{DOMAIN} "sk_live_" OR "pk_live_" OR "sk_test_" OR "pk_test_" OR "rk_live_" OR "rk_test_"',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "PayPal Credentials",
        query: 'site:{DOMAIN} intext:"paypal" (intext:"api_key" OR intext:"client_id" OR intext:"secret" OR intext:"sandbox")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Twilio API Keys",
        query: 'site:{DOMAIN} "SK" (intext:"twilio" OR intext:"account_sid" OR intext:"auth_token")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "SendGrid API Keys",
        query: 'site:{DOMAIN} "SG." (intext:"sendgrid" OR intext:"api_key")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Mailgun API Keys",
        query: 'site:{DOMAIN} "key-" (intext:"mailgun" OR intext:"api_key")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "NPM Tokens",
        query: 'site:{DOMAIN} "npm_" OR ".npmrc" (intext:"_authToken" OR intext:"registry")',
        tech: ["nodejs"],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "PyPI Tokens",
        query: 'site:{DOMAIN} "pypi-" OR ".pypirc" (intext:"token" OR intext:"password")',
        tech: ["python"],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Docker Registry Credentials",
        query: 'site:{DOMAIN} ext:json intext:"auths" (intext:"docker.io" OR intext:"registry" OR intext:"auth")',
        tech: ["docker"],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Kubernetes Secrets",
        query: 'site:{DOMAIN} ext:yaml (intext:"kind: Secret" OR intext:"type: kubernetes.io")',
        tech: ["kubernetes"],
        vuln: ["secrets", "config", "disclosure"]
    },
    {
        title: "JWT Tokens",
        query: 'site:{DOMAIN} intext:"eyJ" (intext:"jwt" OR intext:"token" OR intext:"authorization")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "OAuth Client Secrets",
        query: 'site:{DOMAIN} intext:"client_secret" OR intext:"clientSecret" OR intext:"oauth_secret"',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "RSA Private Keys",
        query: 'site:{DOMAIN} "BEGIN RSA PRIVATE KEY" OR "BEGIN OPENSSH PRIVATE KEY" OR "BEGIN PRIVATE KEY"',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "PGP Private Keys",
        query: 'site:{DOMAIN} "BEGIN PGP PRIVATE KEY BLOCK"',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: ".env Files Exposed",
        query: 'site:{DOMAIN} ext:env OR inurl:".env" OR intext:"DB_PASSWORD" OR intext:"API_KEY"',
        tech: [],
        vuln: ["secrets", "config", "disclosure"]
    },
    {
        title: ".git Config Files",
        query: 'site:{DOMAIN} inurl:".git/config" OR inurl:".gitconfig"',
        tech: [],
        vuln: ["secrets", "config", "disclosure"]
    },
    {
        title: "Hard-Coded Passwords in Code",
        query: 'site:{DOMAIN} (ext:js OR ext:py OR ext:php OR ext:java) (intext:"password =" OR intext:"pwd =" OR intext:"passwd =")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Connection Strings",
        query: 'site:{DOMAIN} intext:"Server=" OR intext:"Data Source=" OR intext:"Initial Catalog=" (intext:"password" OR intext:"pwd")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Heroku API Keys",
        query: 'site:{DOMAIN} intext:"heroku" (intext:"api_key" OR intext:"HEROKU_API_KEY")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "DigitalOcean Tokens",
        query: 'site:{DOMAIN} intext:"digitalocean" (intext:"token" OR intext:"api_token" OR intext:"DIGITALOCEAN_TOKEN")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Cloudflare API Keys",
        query: 'site:{DOMAIN} intext:"cloudflare" (intext:"api_key" OR intext:"api_token" OR intext:"CF_API_KEY")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Telegram Bot Tokens",
        query: 'site:{DOMAIN} intext:"bot" (intext:"telegram" OR intext:"TELEGRAM_BOT_TOKEN")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Discord Bot Tokens",
        query: 'site:{DOMAIN} intext:"discord" (intext:"bot_token" OR intext:"DISCORD_TOKEN")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Square Access Tokens",
        query: 'site:{DOMAIN} "sq0atp-" OR "sq0csp-" OR intext:"square" (intext:"access_token" OR intext:"application_id")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Shopify Access Tokens",
        query: 'site:{DOMAIN} "shpat_" OR "shpss_" OR "shpca_" OR intext:"shopify" (intext:"access_token" OR intext:"api_key")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Algolia API Keys",
        query: 'site:{DOMAIN} intext:"algolia" (intext:"api_key" OR intext:"application_id" OR intext:"admin_api_key")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "MapBox Tokens",
        query: 'site:{DOMAIN} "pk.eyJ" OR intext:"mapbox" (intext:"access_token" OR intext:"api_key")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Auth0 Credentials",
        query: 'site:{DOMAIN} intext:"auth0" (intext:"client_secret" OR intext:"client_id" OR intext:"domain")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Okta API Tokens",
        query: 'site:{DOMAIN} intext:"okta" (intext:"api_token" OR intext:"client_secret")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Bitbucket Credentials",
        query: 'site:{DOMAIN} intext:"bitbucket" (intext:"app_password" OR intext:"access_token")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    },
    {
        title: "Credentials in Source Files",
        query: 'site:{DOMAIN} ext:log OR ext:txt (intext:"password" OR intext:"username") (intext:"login" OR intext:"admin")',
        tech: [],
        vuln: ["secrets", "disclosure"]
    }
];
