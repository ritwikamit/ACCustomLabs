# AC CUSTOM LABS --- WEBSITE SECURITY DOCUMENT

## 1. Security Objective

Protect: - Website infrastructure - Contact/enquiry data - Client
information - API credentials - Admin systems - Future client portal

Security must be built into the architecture before dynamic features are
introduced.

------------------------------------------------------------------------

## 2. Phase 1 Threat Model

The marketing website primarily exposes:

-   Public pages
-   Images
-   Contact form
-   Analytics
-   External links

Main risks: - Spam - Malicious form input - XSS - Credential exposure -
Dependency vulnerabilities - Supply-chain attacks - Misconfigured
hosting

------------------------------------------------------------------------

## 3. Form Security

Validate all fields.

Server-side validation is mandatory once an API exists.

Controls:

-   Zod/schema validation
-   Length limits
-   Email validation
-   Phone validation
-   Rate limiting
-   CAPTCHA/Turnstile where appropriate
-   Spam detection

Never trust client-side validation alone.

------------------------------------------------------------------------

## 4. XSS Protection

Do not render raw HTML from users.

If rich text is required: - Sanitize HTML - Allowlist tags/attributes -
Escape output

Never use unsanitized:

``` ts
dangerouslySetInnerHTML
```

with user-controlled data.

------------------------------------------------------------------------

## 5. Secrets

Never commit:

``` text
API keys
database passwords
JWT secrets
email API keys
payment secrets
```

Use environment variables.

Private variables must never use:

``` text
NEXT_PUBLIC_
```

------------------------------------------------------------------------

## 6. Authentication --- Future

If an admin/client portal is added:

-   Secure password hashing
-   MFA where appropriate
-   Secure cookies
-   Session expiry
-   Role-based authorization
-   Login rate limiting
-   Account lockout/risk controls

Never implement authorization only in React.

------------------------------------------------------------------------

## 7. Authorization

Future roles:

``` text
ADMIN
STAFF
CLIENT
```

Every sensitive API endpoint must verify authorization server-side.

------------------------------------------------------------------------

## 8. Database Security

Future PostgreSQL:

-   Least-privilege database user
-   SSL/TLS
-   Backups
-   Encryption at rest where supported
-   Migration control
-   Indexed sensitive lookups
-   No public database access

------------------------------------------------------------------------

## 9. File Uploads

If project briefs allow attachments:

-   Restrict file types
-   Restrict file size
-   Rename files server-side
-   Virus/malware scanning where appropriate
-   Store outside executable web paths
-   Generate random object keys
-   Do not trust original filenames

------------------------------------------------------------------------

## 10. HTTP Security Headers

Configure:

-   Content-Security-Policy
-   Strict-Transport-Security
-   X-Content-Type-Options
-   Referrer-Policy
-   Permissions-Policy
-   Frame-ancestors through CSP

Do not copy an overly restrictive CSP without testing required
assets/services.

------------------------------------------------------------------------

## 11. Dependency Security

Use:

``` text
npm audit
```

and Dependabot/GitHub security alerts.

Keep: - Next.js - React - UI libraries - Auth libraries

patched.

------------------------------------------------------------------------

## 12. API Security --- Future

For every endpoint:

``` text
Authentication
↓
Authorization
↓
Validation
↓
Rate limit
↓
Business logic
↓
Database
```

Do not expose internal errors to users.

------------------------------------------------------------------------

## 13. Logging

Log: - Authentication events - Admin changes - API errors - Security
events

Do not log: - Passwords - API secrets - Full sensitive client data

------------------------------------------------------------------------

## 14. Backup

Future dynamic platform:

-   Automated database backups
-   Recovery testing
-   Retention policy
-   Off-site backup where appropriate

A backup is not useful unless restoration has been tested.

------------------------------------------------------------------------

## 15. Privacy

Collect only information necessary for:

-   Project enquiries
-   Communication
-   Analytics where consent/legal basis requires it

Add: - Privacy Policy - Cookie/analytics disclosure where applicable -
Data retention policy

------------------------------------------------------------------------

## 16. Security Testing

Before production:

-   Dependency audit
-   Secret scan
-   OWASP-oriented review
-   Form abuse testing
-   Authentication testing
-   Authorization testing
-   XSS testing
-   CSRF testing where relevant
-   Upload testing
-   Rate-limit testing

------------------------------------------------------------------------

## 17. Incident Response

Future process:

``` text
Detect
↓
Contain
↓
Investigate
↓
Fix
↓
Verify
↓
Document
```

Security incidents should be tracked separately from normal UI bugs.
