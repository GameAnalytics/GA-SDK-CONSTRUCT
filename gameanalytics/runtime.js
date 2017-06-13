// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
// *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
//          vvvvvvvv
cr.plugins_.GameAnalytics = function(runtime)
{
    this.runtime = runtime;
};

(function ()
{
    /////////////////////////////////////
    // *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
    //                            vvvvvvvv
    var pluginProto = cr.plugins_.GameAnalytics.prototype;

    /////////////////////////////////////
    // Object type class
    pluginProto.Type = function(plugin)
    {
        this.plugin = plugin;
        this.runtime = plugin.runtime;
    };

    var typeProto = pluginProto.Type.prototype;

    // called on startup for each object type
    typeProto.onCreate = function()
    {
    };

    /////////////////////////////////////
    // Instance class
    pluginProto.Instance = function(type)
    {
        this.type = type;
        this.runtime = type.runtime;

        // any other properties you need, e.g...
        // this.myValue = 0;
    };

    var instanceProto = pluginProto.Instance.prototype;

    // called whenever an instance is created
    instanceProto.onCreate = function()
    {
        // note the object is sealed after this call; ensure any properties you'll ever need are set on the object
        // e.g...
        // this.myValue = 0;

        this.build = this.properties[0];
        this.customUserId = this.properties[1];
        this.enableManualSessionHandling = this.properties[2];
        this.enableInfoLog = this.properties[3];
        this.enableVerboseLog = this.properties[4];
        this.gameKey = this.properties[5];
        this.secretKey = this.properties[6];

        this.customDimensions01 = [];
        this.customDimensions02 = [];
        this.customDimensions03 = [];
        this.resourceCurrencies = [];
        this.resourceItemTypes = [];
    };

    // called whenever an instance is destroyed
    // note the runtime may keep the object after this call for recycling; be sure
    // to release/recycle/reset any references to other objects in this function.
    instanceProto.onDestroy = function ()
    {
    };

    // called when saving the full state of the game
    instanceProto.saveToJSON = function ()
    {
        // return a Javascript object containing information about your object's state
        // note you MUST use double-quote syntax (e.g. "property": value) to prevent
        // Closure Compiler renaming and breaking the save format
        return {
            // e.g.
            //"myValue": this.myValue
        };
    };

    // called when loading the full state of the game
    instanceProto.loadFromJSON = function (o)
    {
        // load from the state previously saved by saveToJSON
        // 'o' provides the same object that you saved, e.g.
        // this.myValue = o["myValue"];
        // note you MUST use double-quote syntax (e.g. o["property"]) to prevent
        // Closure Compiler renaming and breaking the save format
    };

    // only called if a layout object - draw to a canvas 2D context
    instanceProto.draw = function(ctx)
    {
    };

    // only called if a layout object in WebGL mode - draw to the WebGL context
    // 'glw' is not a WebGL context, it's a wrapper - you can find its methods in GLWrap.js in the install
    // directory or just copy what other plugins do.
    instanceProto.drawGL = function (glw)
    {
    };

    // The comments around these functions ensure they are removed when exporting, since the
    // debugger code is no longer relevant after publishing.
    /**BEGIN-PREVIEWONLY**/
    instanceProto.getDebuggerValues = function (propsections)
    {
        // Append to propsections any debugger sections you want to appear.
        // Each section is an object with two members: "title" and "properties".
        // "properties" is an array of individual debugger properties to display
        // with their name and value, and some other optional settings.

        var props = [
            {"name": "Build", "value": this.build},
            {"name": "Custom user ID", "value": this.customUserId},
            {"name": "Enable manual session handling", "value": this.enableManualSessionHandling},
            {"name": "Enable info log", "value": this.enableInfoLog},
            {"name": "Enable verbose log", "value": this.enableVerboseLog},
            {"name": "Game key", "value": this.gameKey},
            {"name": "Secret key", "value": this.secretKey},
        ];

        var x;

        for (x = 0; x < this.customDimensions01.length; x++)
        {
            props.push({"name": "Custom dimensions 01 index=" + x.toString(), "value": this.customDimensions01[x]});
        }
        for (x = 0; x < this.customDimensions02.length; x++)
        {
            props.push({"name": "Custom dimensions 02 index=" + x.toString(), "value": this.customDimensions02[x]});
        }
        for (x = 0; x < this.customDimensions03.length; x++)
        {
            props.push({"name": "Custom dimensions 03 index=" + x.toString(), "value": this.customDimensions03[x]});
        }
        for (x = 0; x < this.resourceCurrencies.length; x++)
        {
            props.push({"name": "Resource currencies index=" + x.toString(), "value": this.resourceCurrencies[x]});
        }
        for (x = 0; x < this.resourceItemTypes.length; x++)
        {
            props.push({"name": "Resource item types index=" + x.toString(), "value": this.resourceItemTypes[x]});
        }

        propsections.push({
            "title": "GameAnalytics",
            "properties": props
        });
    };

    instanceProto.onDebugValueEdited = function (header, name, value)
    {
        // Called when a non-readonly property has been edited in the debugger. Usually you only
        // will need 'name' (the property name) and 'value', but you can also use 'header' (the
        // header title for the section) to distinguish properties with the same name.
    };
    /**END-PREVIEWONLY**/

    //////////////////////////////////////
    // Conditions
    function Cnds() {};

    // ... other conditions here ...

    pluginProto.cnds = new Cnds();

    //////////////////////////////////////
    // Actions
    function Acts() {};

    Acts.prototype.addAvailableCustomDimension01 = function (dimension)
    {
        this.customDimensions01.push(dimension);
    };

    Acts.prototype.addAvailableCustomDimension02 = function (dimension)
    {
        this.customDimensions02.push(dimension);
    };

    Acts.prototype.addAvailableCustomDimension03 = function (dimension)
    {
        this.customDimensions03.push(dimension);
    };

    Acts.prototype.addAvailableResourceCurrency = function (currency)
    {
        this.resourceCurrencies.push(currency);
    };

    Acts.prototype.addAvailableResourceItemType = function (itemType)
    {
        this.resourceItemTypes.push(itemType);
    };

    Acts.prototype.initialize = function ()
    {
        if(this.enableInfoLog)
        {
            ga.GameAnalytics.setEnabledInfoLog(true);
        }
        if(this.enableVerboseLog)
        {
            ga.GameAnalytics.setEnabledVerboseLog(true);
        }
        if(this.enableManualSessionHandling)
        {
            ga.GameAnalytics.setEnabledManualSessionHandling(true);
        }

        if(this.customDimensions01.length > 0)
        {
            ga.GameAnalytics.configureAvailableCustomDimensions01(this.customDimensions01);
        }
        if(this.customDimensions02.length > 0)
        {
            ga.GameAnalytics.configureAvailableCustomDimensions02(this.customDimensions02);
        }
        if(this.customDimensions03.length > 0)
        {
            ga.GameAnalytics.configureAvailableCustomDimensions03(this.customDimensions03);
        }
        if(this.resourceCurrencies.length > 0)
        {
            ga.GameAnalytics.configureAvailableResourceCurrencies(this.resourceCurrencies);
        }
        if(this.resourceItemTypes.length > 0)
        {
            ga.GameAnalytics.configureAvailableResourceItemTypes(this.resourceItemTypes);
        }

        ga.GameAnalytics.configureBuild(this.build);

        var VERSION = "1.0.0";
        ga.GameAnalytics.configureSdkGameEngineVersion("construct " + VERSION);

        ga.GameAnalytics.initialize(this.gameKey, this.secretKey);
    };

    Acts.prototype.addBusinessEvent = function (currency, amount, itemType, itemId, cartType)
    {
        ga.GameAnalytics.addBusinessEvent(currency, amount, itemType, itemId, cartType);
    };

    Acts.prototype.addResourceEvent = function (flowType, currency, amount, itemType, itemId)
    {
        ga.GameAnalytics.addResourceEvent(flowType, currency, amount, itemType, itemId);
    };

    Acts.prototype.addProgressionEvent = function (progressionStatus, progression01, progression02, progression03)
    {
        ga.GameAnalytics.addProgressionEvent(progressionStatus, progression01, progression02, progression03);
    };

    Acts.prototype.addProgressionEventWithScore = function (progressionStatus, progression01, progression02, progression03, score)
    {
        ga.GameAnalytics.addProgressionEvent(progressionStatus, progression01, progression02, progression03, score);
    };

    Acts.prototype.addDesignEvent = function (eventId)
    {
        ga.GameAnalytics.addDesignEvent(eventId);
    };

    Acts.prototype.addDesignEventWithValue = function (eventId, value)
    {
        ga.GameAnalytics.addDesignEvent(eventId, value);
    };

    Acts.prototype.addErrorEvent = function (severity, message)
    {
        ga.GameAnalytics.addErrorEvent(severity, message);
    };

    Acts.prototype.setEnabledManualSessionHandling = function (flag)
    {
        ga.GameAnalytics.setEnabledManualSessionHandling(flag ? true : false);
    };

    Acts.prototype.setCustomDimension01 = function (dimension)
    {
        ga.GameAnalytics.setCustomDimension01(dimension);
    };

    Acts.prototype.setCustomDimension02 = function (dimension)
    {
        ga.GameAnalytics.setCustomDimension02(dimension);
    };

    Acts.prototype.setCustomDimension03 = function (dimension)
    {
        ga.GameAnalytics.setCustomDimension03(dimension);
    };

    Acts.prototype.setFacebookId = function (facebookId)
    {
        ga.GameAnalytics.setFacebookId(facebookId);
    };

    Acts.prototype.setGender = function (gender)
    {
        ga.GameAnalytics.setGender(gender);
    };

    Acts.prototype.setBirthYear = function (birthYear)
    {
        ga.GameAnalytics.setBirthYear(birthYear);
    };

    Acts.prototype.startSession = function ()
    {
        ga.GameAnalytics.startSession();
    };

    Acts.prototype.endSession = function ()
    {
        ga.GameAnalytics.endSession();
    };

    pluginProto.acts = new Acts();

    //////////////////////////////////////
    // Expressions
    function Exps() {};

    // ... other expressions here ...

    pluginProto.exps = new Exps();

}());
