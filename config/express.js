	/**********************************************************************
	*  Author: Neha Kapoor (neha@rootcrm.org)
	*  Project Lead: Balinder WALIA (bwalia@rootcrm.org)
	*  Project Lead Web...: https://twitter.com/balinderwalia
	*  Name..: ROOTCRM
	*  Desc..: Root CRM (part of RootCrm Suite of Apps)
	*  Web: http://rootcrm.org
	*  License: http://rootcrm.org/LICENSE.txt
	**/

	/**********************************************************************
	*  express.js
	**/
	
	'use strict';

/**
 * Module dependencies.
 */
var express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path');

module.exports = function(init) {
	// Initialize express app
	var app = express();
	
	// Set view engine
	app.set('view engine', 'ejs')
	
	//we need this for pm2
	app.set('views',__dirname + '/../views')
	
	// Request body parsing middleware should be above methodOverride
	app.use(bodyParser.urlencoded({extended: true}))
	
		/// Setting the app router and static folder
	app.use(express.static(path.resolve('./public')));
	
	// Return Express server instance
	return app;
};