/**
 * Auto-generated action file for "Cloud Data Loss Prevention (DLP)" API.
 *
 * Generated at: 2019-05-07T14:41:35.146Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-dlp-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'dlp.projects.dlpJobs.create'
 * Endpoint Path: '/v2/{parent}/dlpJobs'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "parent",
    "access_token",
    "alt",
    "callback",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "parent": "parent",
    "access_token": "access_token",
    "alt": "alt",
    "callback": "callback",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "actions": "actions",
    "contentOptions": "contentOptions",
    "customInfoTypes": "customInfoTypes",
    "excludeInfoTypes": "excludeInfoTypes",
    "includeQuote": "includeQuote",
    "infoTypes": "infoTypes",
    "maxFindingsPerInfoType": "maxFindingsPerInfoType",
    "maxFindingsPerItem": "maxFindingsPerItem",
    "maxFindingsPerRequest": "maxFindingsPerRequest",
    "limits": "limits",
    "minLikelihood": "minLikelihood",
    "ruleSet": "ruleSet",
    "inspectConfig": "inspectConfig",
    "inspectTemplateName": "inspectTemplateName",
    "excludedFields": "excludedFields",
    "identifyingFields": "identifyingFields",
    "rowsLimit": "rowsLimit",
    "rowsLimitPercent": "rowsLimitPercent",
    "sampleMethod": "sampleMethod",
    "datasetId": "datasetId",
    "projectId": "projectId",
    "tableId": "tableId",
    "tableReference": "tableReference",
    "bigQueryOptions": "bigQueryOptions",
    "bytesLimitPerFile": "bytesLimitPerFile",
    "bytesLimitPerFilePercent": "bytesLimitPerFilePercent",
    "bucketName": "bucketName",
    "excludeRegex": "excludeRegex",
    "includeRegex": "includeRegex",
    "regexFileSet": "regexFileSet",
    "url": "url",
    "fileSet": "fileSet",
    "fileTypes": "fileTypes",
    "filesLimitPercent": "filesLimitPercent",
    "cloudStorageOptions": "cloudStorageOptions",
    "name": "name",
    "kind": "kind",
    "namespaceId": "namespaceId",
    "partitionId": "partitionId",
    "datastoreOptions": "datastoreOptions",
    "enableAutoPopulationOfTimespanConfig": "enableAutoPopulationOfTimespanConfig",
    "endTime": "endTime",
    "startTime": "startTime",
    "timestampField": "timestampField",
    "timespanConfig": "timespanConfig",
    "storageConfig": "storageConfig",
    "inspectJob": "inspectJob",
    "jobId": "jobId",
    "field": "field",
    "categoricalStatsConfig": "categoricalStatsConfig",
    "auxiliaryTables": "auxiliaryTables",
    "quasiIds": "quasiIds",
    "regionCode": "regionCode",
    "deltaPresenceEstimationConfig": "deltaPresenceEstimationConfig",
    "entityId": "entityId",
    "kAnonymityConfig": "kAnonymityConfig",
    "kMapEstimationConfig": "kMapEstimationConfig",
    "sensitiveAttribute": "sensitiveAttribute",
    "lDiversityConfig": "lDiversityConfig",
    "numericalStatsConfig": "numericalStatsConfig",
    "privacyMetric": "privacyMetric",
    "sourceTable": "sourceTable",
    "riskJob": "riskJob",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'dlp.projects.dlpJobs.create',
        pathName: '/v2/{parent}/dlpJobs',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}