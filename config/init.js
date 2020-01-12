	/**********************************************************************
	*  Author: Balinder WALIA (balinder.walia@MatrixCX.org)
	*  Project Contributor: Neha Kapoor (neha@MatrixCX.org)
	*  Project Lead Twitter...: https://twitter.com/balinderwalia
	*  Name..: MatrixCX
	*  Desc..: MatrixCX (part of Tenthmatrix Suite of Apps)
	*  Web: https://MatrixCX.org
	*  License: http://MatrixCX.org/LICENSE.txt
	**/

	/**********************************************************************
	*  init.js
	**/

	// Init connection env variables

	const dashboardHost = process.env.MATRIXCX_DASHBOARD_HOST || 'localhost'
	const dashboardPort = process.env.MATRIXCX_DASHBOARD_PORT || 3015
	const dashboardDir = process.env.MATRIXCX_DASHBOARD_HOST || 'matrixcx-dashboard'

	const appHost = process.env.MATRIXCX_WEBSITE_HOST || 'localhost'
	const appPort = process.env.MATRIXCX_WEBSITE_PORT || 3005
	const systemSiteID = process.env.MATRIXCX_WEBSITE_GUID || "5947ccfb8b69ec720d5814d4"

	const mongoPort = process.env.MONGO_PORT || 27017
	const mongoDB = process.env.MONGO_DB || 'matrixcx'
	const mongoHistoryDB = process.env.MONGO_HISTORY_DB ||  mongoDB + '_history'
	const mongoHost = process.env.MONGO_HOST || 'localhost'
	const mongoURL = process.env.MONGO_URL || 'mongodb://' + mongoHost + ':' + mongoPort + '/' + mongoDB
	const mongoHistoryURL = process.env.MONGO_HISTORY_URL || 'mongodb://' + mongoHost + ':' + mongoPort + '/' + mongoHistoryDB

	var mongodbRe = require('mongodb')
	var MongoClient = mongodbRe.MongoClient;

	// Connection URL. This is where your mongodb server is running.
	var url = mongoURL;
	var _db;
	module.exports = {
    	mongodb : mongodbRe,
    	MongoClient : MongoClient,
    	mongoConnUrl : url,
    	port : appPort,
    	system_id : systemSiteID
	};
