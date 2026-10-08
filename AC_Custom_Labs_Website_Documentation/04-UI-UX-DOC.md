# AC CUSTOM LABS --- UI/UX DESIGN DOCUMENT

## 1. UX Objective

The user journey should be:

``` text
DISCOVER
  ↓
UNDERSTAND SERVICES
  ↓
SEE PROOF
  ↓
TRUST
  ↓
START A PROJECT
```

The interface must prioritize clarity over decoration.

------------------------------------------------------------------------

## 2. Desktop Layout

Maximum content width:

``` text
1200–1320px
```

Grid: - 12 columns - Generous spacing - Large margins - Strong vertical
rhythm

------------------------------------------------------------------------

## 3. Mobile

At mobile widths:

-   Single column
-   Large readable headings
-   Sticky/accessible CTA
-   Hamburger navigation
-   Horizontal service cards where useful
-   Portfolio images full width

------------------------------------------------------------------------

## 4. Header UX

Desktop:

``` text
[AC CUSTOM LABS]  Services Work About Process Contact  [START A PROJECT]
```

Mobile:

``` text
[LOGO]                    [MENU]
```

Menu should animate smoothly.

------------------------------------------------------------------------

## 5. Hero UX

First viewport should answer:

**What?** Digital development services.

**For whom?** Businesses/founders/organizations.

**Action?** Start a project.

Hero should not be overloaded with text.

------------------------------------------------------------------------

## 6. Services UX

Service card:

``` text
01

APP DEVELOPMENT

Native and cross-platform application
development for real business needs.

[Explore →]
```

On hover: - Red accent appears - Card shifts 2--4px - Arrow moves

On mobile: - No hover dependency.

------------------------------------------------------------------------

## 7. Portfolio UX

Cards should show:

``` text
PROJECT NAME
Industry
Service

[View Case Study →]
```

Case-study page:

``` text
Challenge
Solution
Build
Technology
Outcome
```

Only verified project information may be published.

------------------------------------------------------------------------

## 8. Contact UX

The contact page should feel simple.

### Step 1

**Tell us about your project.**

### Fields

-   Name
-   Email
-   Phone
-   Company
-   Service
-   Budget
-   Timeline
-   Message

### CTA

**SEND PROJECT BRIEF**

After submission:

**Thanks --- your project brief has been received.**

Do not claim a response time unless the company has defined one.

------------------------------------------------------------------------

## 9. CTA Hierarchy

### Primary

Red filled button:

`START A PROJECT`

### Secondary

White/transparent:

`VIEW OUR WORK`

### Tertiary

Text link:

`Explore Services →`

------------------------------------------------------------------------

## 10. Microinteractions

Buttons: - 150--250ms transition - Slight lift - Red glow only on
primary CTA

Cards: - Border transition - Image scale 1.02 - Accent line animation

Navigation: - Underline/indicator - Smooth active state

------------------------------------------------------------------------

## 11. Accessibility

Keyboard: - Full navigation - Focus rings

Forms: - Explicit labels - Clear errors - Correct autocomplete

Motion: - Reduced-motion mode

Color: - Do not use red alone to communicate errors/success.

------------------------------------------------------------------------

## 12. Responsive Breakpoints

Suggested:

``` text
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

------------------------------------------------------------------------

## 13. UI Components

Build reusable:

``` text
Navbar
MobileMenu
Button
SectionHeading
ServiceCard
ProjectCard
TechTag
ProcessStep
TestimonialCard
FAQ
ContactForm
Footer
```

------------------------------------------------------------------------

## 14. Loading States

Forms: - Submit spinner - Disabled button - Clear success/error state

Images: - Avoid layout shift - Skeleton only where necessary

------------------------------------------------------------------------

## 15. Empty States

Portfolio with no projects:

**WORK IS BEING PREPARED.**

Do not show fake projects.

------------------------------------------------------------------------

## 16. Error States

404:

**THIS PAGE DOESN'T EXIST.**

CTA:

**BACK TO HOME**

Contact submission error:

**Something went wrong. Please try again or contact us directly.**

------------------------------------------------------------------------

## 17. UX Quality Bar

The site should feel:

**fast + intentional + technical + premium**

Every animation must serve navigation, hierarchy or feedback.
