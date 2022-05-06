GA-SDK-CONSTRUCT
==========

GameAnalytics Construct SDK.

Documentation can be found [here](https://gameanalytics.com/docs/construct-sdk).

If you have any issues or feedback regarding the SDK, please contact our friendly support team [here](https://gameanalytics.com/contact).

> :information_source:
> The Construct SDK includes support for **HTML5** and **Android** and **iOS** when doing an Cordova export    
> Requirements:<br/>
> **Construct 2 or 3**

Changelog
---------
<!--(CHANGELOG_TOP)-->
**3.0.14**
* added specific version for gameanalytics cordova dependency

**3.0.13**
* added event uuid for events sent

**3.0.12**
* added functionality to force a new user in a/b testing without having to uninstall app first, simply use custom user id function to set a new user id which hasn't been used yet

**3.0.11**
* updated client ts validator

**3.0.10**
* added support for module mode

**3.0.9**
* fixed bug for enabling (not breaking)  minify export

**3.0.8**
* fixed bug to not send stored events from previous sessions (offline events or session end events not sent yet) by games on the same domain
* this bug fix can potentially affect metrics slightly so be aware of this as old stored events (offline events and session end events not sent yet) in games will not be sent with this new fix because internal keys for storing events in localstorage have changed now

**3.0.7**
* cryptojs bug fix

**3.0.6**
* added session_num to init request

**3.0.5**
* logo updated

**3.0.4**
* removed facebook, gender and birtyear methods
* added auto detect app version for build field (only cordova export)

**3.0.3**
* A/B testing fixes

**3.0.2**
* remote configs fixes

**3.0.1**
* fixed events bug

**3.0.0**
* Remote Config calls have been updated and the old calls have deprecated. Please see GA documentation for the new SDK calls and migration guide
* A/B testing support added

**2.2.3**
* small fix to iscommandcenterready display text

**2.2.2**
* added missing code to c3 plugin

**2.2.1**
* fixes to how to use command center functions

**2.2.0**
* added enable/disable event submission function

**2.1.2**
* fixed missing c3runtime files

**2.1.1**
* fixed business event vlidation

**2.1.0**
* added support for c3 runtime

**2.0.7**
* fixed to be able to use minify script for cordova export

**2.0.3**
* added the possibility to set build number from actions

**2.0.2**
* added cordova dependencies

**2.0.1**
* fixes various bugs

**2.0.0**
* added command center functionality

**1.1.3**
* added custom dimensions to design and error events

**1.1.2**
* fixed session length bug
* fixed not allowing to add events when session is not started
* added categories for actions

**1.1.1**
* added support for seperate keys for each platform
* remember to call 'cordova plugin add cordova-plugin-device' when using cordova export

**1.1.0**
* added support for cordova export
* remember to call 'cordova plugin add cordova-plugin-gameanalytics' in exported cordova project

**1.0.3**
* added support for Construct 3

**1.0.2**
* fixed minify bug

**1.0.1**
* updated namespace used for accessing javascript library

**1.0.0**
* initial release
