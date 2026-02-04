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
        vuln: ["disclosure"]
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
        vuln: ["disclosure"]
    },
    {
        title: "API Keys and Tokens",
        query: 'site:{DOMAIN} intext:"api_key" OR intext:"apikey" OR intext:"token" OR intext:"access_key" OR intext:"secret_key" OR intext:"api_secret" OR intext:"client_secret" OR intext:"auth_token" OR intext:"bearer"',
        tech: [],
        vuln: ["disclosure"]
    },
    {
        title: "Database Credentials",
        query: 'site:{DOMAIN} intext:"DB_PASSWORD" OR intext:"database_password" OR intext:"db_pass" OR intext:"mysql_password" OR intext:"db_user" OR intext:"DATABASE_URL" OR intext:"POSTGRES_PASSWORD" OR intext:"MONGODB_URI"',
        tech: [],
        vuln: ["disclosure", "config"]
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
    }
];
