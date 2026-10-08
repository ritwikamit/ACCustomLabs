# AC CUSTOM LABS --- BUG FIXES, QA & MAINTENANCE DOCUMENT

## 1. Purpose

This document defines how bugs are reported, prioritized, fixed, tested
and released.

------------------------------------------------------------------------

## 2. Bug Severity

### P0 --- Critical

Examples: - Website unavailable - Data breach - Payment/security
failure - Major production outage

Response: **Immediate**

------------------------------------------------------------------------

### P1 --- High

Examples: - Contact form completely broken - Major mobile navigation
failure - Core page inaccessible - Critical functionality broken

Response: **Priority fix**

------------------------------------------------------------------------

### P2 --- Medium

Examples: - Incorrect layout at a breakpoint - Broken animation -
Portfolio filter issue - Non-critical form validation bug

Response: **Next planned fix**

------------------------------------------------------------------------

### P3 --- Low

Examples: - Minor spacing - Small visual inconsistency - Non-critical
copy issue

Response: **Backlog**

------------------------------------------------------------------------

## 3. Bug Report Template

``` text
Bug ID:
Title:
Date:
Reporter:
Environment:
Browser:
Device:
URL:

Description:

Steps to reproduce:
1.
2.
3.

Expected result:

Actual result:

Severity:

Screenshots/video:

Console errors:

Network errors:

Related commit/PR:
```

------------------------------------------------------------------------

## 4. Development Workflow

``` text
Issue
 ↓
Reproduce
 ↓
Identify root cause
 ↓
Create fix
 ↓
Write/update test
 ↓
Run lint/typecheck
 ↓
Build
 ↓
Review
 ↓
Preview deployment
 ↓
QA
 ↓
Production
```

------------------------------------------------------------------------

## 5. Root Cause Categories

Classify bugs as:

``` text
UI
RESPONSIVE
ACCESSIBILITY
PERFORMANCE
DATA
API
SECURITY
SEO
CONTENT
DEPENDENCY
DEPLOYMENT
```

------------------------------------------------------------------------

## 6. Required Checks Before Merge

``` bash
npm run lint
npm run typecheck
npm run build
```

If tests exist:

``` bash
npm test
```

E2E:

``` bash
npm run test:e2e
```

------------------------------------------------------------------------

## 7. UI QA Checklist

### Desktop

-   Navigation
-   Hero
-   Services
-   Portfolio
-   About
-   CTA
-   Footer

Test: - 1280px - 1440px - 1920px

### Tablet

-   768px
-   1024px

### Mobile

-   320px
-   375px
-   390px
-   414px

------------------------------------------------------------------------

## 8. Browser QA

Check current: - Chrome - Edge - Firefox - Safari - Android Chrome - iOS
Safari

------------------------------------------------------------------------

## 9. Accessibility QA

Check:

-   Keyboard navigation
-   Focus state
-   Heading hierarchy
-   Form labels
-   Alt text
-   Color contrast
-   Screen-reader behavior
-   Reduced motion

------------------------------------------------------------------------

## 10. SEO QA

Verify:

-   Title
-   Meta description
-   Canonical
-   Open Graph
-   robots.txt
-   sitemap.xml
-   JSON-LD
-   404 behavior
-   No accidental `noindex`

------------------------------------------------------------------------

## 11. Performance QA

Check:

-   Lighthouse
-   Core Web Vitals
-   Image sizes
-   JavaScript bundle
-   Font loading
-   CLS
-   LCP
-   INP

Avoid optimizing based only on a single Lighthouse run.

------------------------------------------------------------------------

## 12. Contact Form QA

Test:

### Valid

-   Correct name
-   Correct email
-   Valid phone
-   Complete message

### Invalid

-   Empty name
-   Invalid email
-   Excessively long input
-   Spam
-   Special characters
-   Duplicate submission

Verify: - Success message - Error message - Email/CRM receipt -
Analytics event

------------------------------------------------------------------------

## 13. Regression Testing

Whenever a bug is fixed:

1.  Reproduce original bug.
2.  Add a test if practical.
3.  Apply fix.
4.  Confirm original bug is gone.
5.  Test related functionality.
6.  Test responsive layouts.
7.  Test production build.

------------------------------------------------------------------------

## 14. Release Checklist

``` text
[ ] TypeScript passes
[ ] ESLint passes
[ ] Build passes
[ ] Tests pass
[ ] Contact form tested
[ ] All links tested
[ ] Mobile tested
[ ] Desktop tested
[ ] Accessibility checked
[ ] SEO checked
[ ] Security checked
[ ] Images optimized
[ ] Production environment verified
```

------------------------------------------------------------------------

## 15. Production Monitoring

Monitor:

-   Availability
-   Form failures
-   JavaScript errors
-   API errors
-   Core Web Vitals
-   Search indexing
-   Security alerts

Recommended tools may include: - Vercel monitoring - Sentry - Google
Search Console - Analytics - GitHub security alerts

------------------------------------------------------------------------

## 16. Bug-Fix Rules

### Rule 1

Do not fix symptoms if the root cause is known.

### Rule 2

Do not introduce a large dependency for a small UI problem.

### Rule 3

Do not bypass TypeScript or security checks just to ship faster.

### Rule 4

Every production bug should have a clear reproduction case.

### Rule 5

Critical security bugs are handled separately from normal feature work.

------------------------------------------------------------------------

## 17. Definition of Done

A bug is done when:

-   Root cause is addressed.
-   Fix works in the affected environment.
-   Regression testing passes.
-   No new console/build errors exist.
-   Accessibility remains intact.
-   Production behavior is verified.
-   Issue is documented as resolved.
