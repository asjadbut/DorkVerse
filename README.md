# Advanced Google Dorks - Bug Bounty Hunter Tool

A comprehensive, interactive Google Dorks tool designed for bug bounty hunters and security researchers. This tool provides an extensive database of 150+ enhanced Google dorks with smart filtering capabilities and automatic domain insertion.

## 🌟 Features

- **Domain Input**: Automatically applies your target domain to all dorks with persistent storage
- **Smart Dropdown Filtering**: Streamlined dropdown menus for easy navigation
  - Select from 15+ technology stacks
  - Choose from 15+ vulnerability types
  - Clean, professional interface

- **Tech Stack Filtering**: Filter dorks by technology including:
  - PHP, ASP.NET, JSP/Java
  - WordPress, Drupal, Joomla
  - Laravel, Django, Node.js
  - Python, Ruby
  - Apache, Nginx, IIS

- **Vulnerability Type Filtering**: Filter by vulnerability categories:
  - SQL Injection, XSS, LFI/RFI
  - Open Redirect, SSRF, RCE
  - IDOR, Info Disclosure, File Upload
  - Backup Files, Config Files
  - Login Pages, Admin Panels, API Endpoints
  - Subdomains

- **Enhanced Dork Database**: 150+ comprehensive dorks with extensive pattern coverage
  - Multiple parameter variations per vulnerability type
  - Tech-specific patterns with backup/config variations
  - Extended file extensions and error patterns
  - Framework-specific detection patterns

- **Search Functionality**: Quick search across all dorks by keyword
- **Copy to Clipboard**: One-click copy for individual dorks
- **Direct Google Search**: Open dorks directly in Google with applied domain
- **Real-time Stats**: Dynamic counters showing total and filtered dork counts
- **Persistent Storage**: Your domain is automatically saved in localStorage
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Professional UI**: Clean, modern interface with intuitive controls

## 🚀 Usage

1. **Open `index.html` in your browser**

2. **Enter your target domain** (e.g., `example.com`)
   - Don't include `http://`, `https://`, or `www.`
   - Click "Apply Domain" or press Enter
   - Your domain is automatically saved for future sessions

3. **Filter by Tech Stack**
   - Use the "Tech Stack" dropdown to select a specific technology
   - Choose "All" to see dorks for all technologies

4. **Filter by Vulnerability Type**
   - Use the "Vulnerability Type" dropdown to focus on specific bug types
   - Select "All" to view all vulnerability categories

5. **Search** (optional)
   - Type keywords in the search box to filter dorks in real-time
   - Searches across dork titles and queries

6. **Copy or Search**
   - Click "📋 Copy" to copy a dork to your clipboard
   - Click "🔍 Search" to open the dork directly in Google with your domain applied
   - Toast notifications confirm successful actions

## 📦 File Structure

```
Dorker/
├── index.html          # Main HTML structure with dropdown filters
├── styles.css          # Professional styling with CSS Grid/Flexbox
├── app.js              # Application logic and event handlers
├── dorks-database.js   # Enhanced database of 150+ Google dorks
└── README.md           # Documentation
```

## 🎯 Dork Categories

### Tech Stacks (150+ dorks)
- **PHP**: Config files, phpinfo, backups, errors, database connections, shell detection, authentication
- **ASP.NET**: Config files, trace files, viewstate, SQL errors, stack traces, admin panels
- **JSP/Java**: Error pages, stack traces, admin consoles, Spring/Apache frameworks
- **WordPress**: Config backups, admin panels, plugins, themes, debug logs, user enumeration, wp-json API
- **Laravel**: Debug mode, .env files, logs, Telescope, AWS secrets, mail passwords
- **Django**: Debug mode, admin panel, settings variations, operational errors
- **Node.js**: Package files, environment vars, JWT secrets, MongoDB/Redis configs, error traces
- **Drupal**: Version detection, config files, node URLs, default directory structures
- **Joomla**: Components, modules, templates, config backups, joomla.xml
- **Python**: Requirements files (dev/prod/pip), pickle files, virtual environments
- **Ruby**: Gemfile.lock, Rails errors, ActionController, routing errors
- **Apache**: Server status, .htaccess, .htpasswd, httpd configs
- **Nginx**: Configuration files, server blocks
- **IIS**: web.config files, ASP.NET integration

### Vulnerability Types (150+ enhanced patterns)
- **SQL Injection**: MySQL/MSSQL/Oracle/PostgreSQL errors, 10+ URL parameters, syntax errors
- **XSS**: 11+ reflected parameters, redirect URLs, message fields, search terms
- **LFI/RFI**: 12+ file inclusion parameters, path traversal, template loading
- **Open Redirect**: 11+ redirect parameters, goto/forward/navigate patterns
- **SSRF**: 11+ URL parameters, webhooks, callbacks, fetch/import endpoints
- **RCE**: 12+ command injection parameters, shell access, terminal/console pages
- **IDOR**: 10+ user/document/account parameters, profile/invoice/receipt access
- **Info Disclosure**: Git/SVN repos, logs, backups, SSH keys, directory listings
- **File Upload**: 9+ upload directory patterns, file upload forms, attachment endpoints
- **Backup Files**: SQL dumps, compressed archives, config backups, old/save files
- **Config Files**: .env, web.config, settings.py, php.ini, yaml/xml/ini files
- **Login Pages**: 10+ login URL patterns, SSO/OAuth/SAML, authentication endpoints
- **Admin Panels**: 10+ admin URL patterns, dashboards, control panels, management consoles
- **API Endpoints**: REST v1/v2/v3, GraphQL, Swagger/OpenAPI, API documentation, WADL/WSDL
- **Subdomains**: Wildcard search, dev/test/staging, admin/api subdomains

## ⚠️ Disclaimer

This tool is designed for **authorized security testing only**. Always:

- Get explicit permission before testing any target
- Respect `robots.txt` and rate limits
- Follow responsible disclosure practices
- Comply with bug bounty program rules
- Never use for malicious purposes

**Unauthorized access to computer systems is illegal.**

## 🛠️ Customization

### Adding New Dorks

Edit `dorks-database.js` and add new entries:

```javascript
{
    title: "Your Dork Title",
    query: 'site:{DOMAIN} your dork query here',
    tech: ["php", "wordpress"],  // Tech stack tags (use [] for generic)
    vuln: ["sqli", "disclosure"]  // Vulnerability tags
}
```

**Available Tech Tags**: `php`, `asp`, `jsp`, `wordpress`, `drupal`, `joomla`, `laravel`, `django`, `nodejs`, `python`, `ruby`, `apache`, `nginx`, `iis`

**Available Vuln Tags**: `sqli`, `xss`, `lfi`, `openredirect`, `ssrf`, `rce`, `idor`, `disclosure`, `upload`, `backup`, `config`, `login`, `admin`, `api`, `subdomain`

### Modifying Filters

1. **Add new tech filter**: Edit the `#techFilter` select in `index.html`:
```html
<option value="yourtech">Your Technology</option>
```

2. **Add new vulnerability filter**: Edit the `#vulnFilter` select in `index.html`:
```html
<option value="yourvuln">Your Vulnerability</option>
```

3. **Update dorks**: Tag your dorks with the new filter values in `dorks-database.js`

### Styling

Modify `styles.css` to customize:
- **Colors**: Update CSS variables in `:root` section
  - `--primary-color`: Main accent color (currently #4CAF50)
  - `--accent-color`: Highlight color (currently #69f0ae)
  - `--background-color`: Main background (currently #111111)
- **Layout**: Adjust grid templates and spacing
- **Typography**: Change font families and sizes
- **Responsive breakpoints**: Modify media queries for different screen sizes

## 🌐 Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Upload all files
3. Go to Settings → Pages
4. Select branch and root folder
5. Your site will be live at `https://yourusername.github.io/reponame/`

### Local Server

```bash
# Python 3
python -m http.server 8000

# PHP
php -S localhost:8000

# Node.js (with http-server)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)
- ⚠️ IE11 (partial support)

## 🤝 Contributing

Contributions are welcome! You can:
- **Add more dorks**: Expand coverage for different technologies and vulnerabilities
- **Enhance queries**: Add more parameter variations to existing dorks
- **Improve filtering**: Add new filter categories or refine existing ones
- **UI/UX improvements**: Enhance the interface and user experience
- **Bug fixes**: Report and fix issues
- **Documentation**: Improve guides and examples

## 💡 Tips for Bug Bounty Hunters

- **Start broad**: Use "All" filters to see all available dorks for your target
- **Combine with recon**: Use subdomain dorks first to discover additional attack surface
- **Check for patterns**: Many parameters appear in multiple vulnerability types
- **Verify manually**: Always manually verify findings before reporting
- **Rate limiting**: Be respectful of target resources and Google's rate limits
- **Document findings**: Keep track of which dorks produced results

## 📄 License

This project is open source and available for educational and authorized security testing purposes.

## 🙏 Credits

Inspired by [TakSec's Google Dorks Bug Bounty](https://github.com/TakSec/google-dorks-bug-bounty/) project.

Enhanced and expanded for the bug bounty community with 150+ comprehensive dorks 🛡️

---

**Happy Hunting! 🔍**
