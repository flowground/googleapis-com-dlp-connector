# ![LOGO](logo.png) Cloud Data Loss Prevention (DLP) **flow**ground Connector

## Description

A generated **flow**ground connector for the Cloud Data Loss Prevention (DLP) API (version v2).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/dlp/v2/swagger.json<br/>
Generated at: 2019-05-07T17:41:35+03:00

## API Description

Provides methods for detection, risk analysis, and de-identification of privacy-sensitive fragments in text, images, and Google Cloud Platform storage repositories.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Returns a list of the sensitive information types that the DLP API<br/>
> supports. See https://cloud.google.com/dlp/docs/infotypes-reference to<br/>
> learn more.

*Tags:* `infoTypes`

#### Input Parameters
* `filter` - _optional_ - Optional filter to only return infoTypes supported by certain parts of the
API. Defaults to supported_by=INSPECT.
* `languageCode` - _optional_ - Optional BCP-47 language code for localized infoType friendly
names. If omitted, or if localized strings are not available,
en-US strings will be returned.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Deletes an InspectTemplate.<br/>
> See https://cloud.google.com/dlp/docs/creating-templates to learn more.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - Resource name of the organization and inspectTemplate to be deleted, for
example `organizations/433245324/inspectTemplates/432452342` or
projects/project-id/inspectTemplates/432452342.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets an InspectTemplate.<br/>
> See https://cloud.google.com/dlp/docs/creating-templates to learn more.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - Resource name of the organization and inspectTemplate to be read, for
example `organizations/433245324/inspectTemplates/432452342` or
projects/project-id/inspectTemplates/432452342.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Updates the InspectTemplate.<br/>
> See https://cloud.google.com/dlp/docs/creating-templates to learn more.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - Resource name of organization and inspectTemplate to be updated, for
example `organizations/433245324/inspectTemplates/432452342` or
projects/project-id/inspectTemplates/432452342.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Activate a job trigger. Causes the immediate execute of a trigger<br/>
> instead of waiting on the trigger event to occur.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - Resource name of the trigger to activate, for example
`projects/dlp-test-project/jobTriggers/53234423`.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Starts asynchronous cancellation on a long-running DlpJob. The server<br/>
> makes a best effort to cancel the DlpJob, but success is not<br/>
> guaranteed.<br/>
> See https://cloud.google.com/dlp/docs/inspecting-storage and<br/>
> https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.

*Tags:* `projects`

#### Input Parameters
* `name` - _required_ - The name of the DlpJob resource to be cancelled.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### De-identifies potentially sensitive info from a ContentItem.<br/>
> This method has limits on input size and output size.<br/>
> See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to<br/>
> learn more.<br/>
> <br/>
> When no InfoTypes or CustomInfoTypes are specified in this request, the<br/>
> system will automatically choose what detectors to run. By default this may<br/>
> be all types, but may change over time as detectors are updated.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The parent resource name, for example projects/my-project-id.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Finds potentially sensitive info in content.<br/>
> This method has limits on input size, processing time, and output size.<br/>
> <br/>
> When no InfoTypes or CustomInfoTypes are specified in this request, the<br/>
> system will automatically choose what detectors to run. By default this may<br/>
> be all types, but may change over time as detectors are updated.<br/>
> <br/>
> For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images<br/>
> and https://cloud.google.com/dlp/docs/inspecting-text,

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The parent resource name, for example projects/my-project-id.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Re-identifies content that has been de-identified.<br/>
> See<br/>
> https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example<br/>
> to learn more.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The parent resource name.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists DeidentifyTemplates.<br/>
> See https://cloud.google.com/dlp/docs/creating-templates-deid to learn<br/>
> more.

*Tags:* `projects`

#### Input Parameters
* `orderBy` - _optional_ - Optional comma separated list of fields to order by,
followed by `asc` or `desc` postfix. This list is case-insensitive,
default sorting order is ascending, redundant space characters are
insignificant.

Example: `name asc,update_time, create_time desc`

Supported fields are:

- `create_time`: corresponds to time the template was created.
- `update_time`: corresponds to time the template was last updated.
- `name`: corresponds to template's name.
- `display_name`: corresponds to template's display name.
* `pageSize` - _optional_ - Optional size of the page, can be limited by server. If zero server returns
a page of max size 100.
* `pageToken` - _optional_ - Optional page token to continue retrieval. Comes from previous call
to `ListDeidentifyTemplates`.
* `parent` - _required_ - The parent resource name, for example projects/my-project-id or
organizations/my-org-id.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a DeidentifyTemplate for re-using frequently used configuration<br/>
> for de-identifying content, images, and storage.<br/>
> See https://cloud.google.com/dlp/docs/creating-templates-deid to learn<br/>
> more.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The parent resource name, for example projects/my-project-id or
organizations/my-org-id.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists DlpJobs that match the specified filter in the request.<br/>
> See https://cloud.google.com/dlp/docs/inspecting-storage and<br/>
> https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.

*Tags:* `projects`

#### Input Parameters
* `filter` - _optional_ - Optional. Allows filtering.

Supported syntax:

* Filter expressions are made up of one or more restrictions.
* Restrictions can be combined by `AND` or `OR` logical operators. A
sequence of restrictions implicitly uses `AND`.
* A restriction has the form of `<field> <operator> <value>`.
* Supported fields/values for inspect jobs:
    - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED
    - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY
    - `trigger_name` - The resource name of the trigger that created job.
* Supported fields for risk analysis jobs:
    - `state` - RUNNING|CANCELED|FINISHED|FAILED
* The operator must be `=` or `!=`.

Examples:

* inspected_storage = cloud_storage AND state = done
* inspected_storage = cloud_storage OR inspected_storage = bigquery
* inspected_storage = cloud_storage AND (state = done OR state = canceled)

The length of this field should be no more than 500 characters.
* `orderBy` - _optional_ - Optional comma separated list of fields to order by,
followed by `asc` or `desc` postfix. This list is case-insensitive,
default sorting order is ascending, redundant space characters are
insignificant.

Example: `name asc, end_time asc, create_time desc`

Supported fields are:

- `create_time`: corresponds to time the job was created.
- `end_time`: corresponds to time the job ended.
- `name`: corresponds to job's name.
- `state`: corresponds to `state`
* `pageSize` - _optional_ - The standard list page size.
* `pageToken` - _optional_ - The standard list page token.
* `parent` - _required_ - The parent resource name, for example projects/my-project-id.
* `type` - _optional_ - The type of job. Defaults to `DlpJobType.INSPECT`
    Possible values: DLP_JOB_TYPE_UNSPECIFIED, INSPECT_JOB, RISK_ANALYSIS_JOB.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a new job to inspect storage or calculate risk metrics.<br/>
> See https://cloud.google.com/dlp/docs/inspecting-storage and<br/>
> https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.<br/>
> <br/>
> When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the<br/>
> system will automatically choose what detectors to run. By default this may<br/>
> be all types, but may change over time as detectors are updated.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The parent resource name, for example projects/my-project-id.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Redacts potentially sensitive info from an image.<br/>
> This method has limits on input size, processing time, and output size.<br/>
> See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to<br/>
> learn more.<br/>
> <br/>
> When no InfoTypes or CustomInfoTypes are specified in this request, the<br/>
> system will automatically choose what detectors to run. By default this may<br/>
> be all types, but may change over time as detectors are updated.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The parent resource name, for example projects/my-project-id.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists InspectTemplates.<br/>
> See https://cloud.google.com/dlp/docs/creating-templates to learn more.

*Tags:* `projects`

#### Input Parameters
* `orderBy` - _optional_ - Optional comma separated list of fields to order by,
followed by `asc` or `desc` postfix. This list is case-insensitive,
default sorting order is ascending, redundant space characters are
insignificant.

Example: `name asc,update_time, create_time desc`

Supported fields are:

- `create_time`: corresponds to time the template was created.
- `update_time`: corresponds to time the template was last updated.
- `name`: corresponds to template's name.
- `display_name`: corresponds to template's display name.
* `pageSize` - _optional_ - Optional size of the page, can be limited by server. If zero server returns
a page of max size 100.
* `pageToken` - _optional_ - Optional page token to continue retrieval. Comes from previous call
to `ListInspectTemplates`.
* `parent` - _required_ - The parent resource name, for example projects/my-project-id or
organizations/my-org-id.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates an InspectTemplate for re-using frequently used configuration<br/>
> for inspecting content, images, and storage.<br/>
> See https://cloud.google.com/dlp/docs/creating-templates to learn more.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The parent resource name, for example projects/my-project-id or
organizations/my-org-id.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists job triggers.<br/>
> See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.

*Tags:* `projects`

#### Input Parameters
* `filter` - _optional_ - Optional. Allows filtering.

Supported syntax:

* Filter expressions are made up of one or more restrictions.
* Restrictions can be combined by `AND` or `OR` logical operators. A
sequence of restrictions implicitly uses `AND`.
* A restriction has the form of `<field> <operator> <value>`.
* Supported fields/values for inspect jobs:
    - `status` - HEALTHY|PAUSED|CANCELLED
    - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY
    - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by
    quotation marks. Nanoseconds are ignored.
    - 'error_count' - Number of errors that have occurred while running.
* The operator must be `=` or `!=` for status and inspected_storage.

Examples:

* inspected_storage = cloud_storage AND status = HEALTHY
* inspected_storage = cloud_storage OR inspected_storage = bigquery
* inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY)
* last_run_time > \"2017-12-12T00:00:00+00:00\"

The length of this field should be no more than 500 characters.
* `orderBy` - _optional_ - Optional comma separated list of triggeredJob fields to order by,
followed by `asc` or `desc` postfix. This list is case-insensitive,
default sorting order is ascending, redundant space characters are
insignificant.

Example: `name asc,update_time, create_time desc`

Supported fields are:

- `create_time`: corresponds to time the JobTrigger was created.
- `update_time`: corresponds to time the JobTrigger was last updated.
- `last_run_time`: corresponds to the last time the JobTrigger ran.
- `name`: corresponds to JobTrigger's name.
- `display_name`: corresponds to JobTrigger's display name.
- `status`: corresponds to JobTrigger's status.
* `pageSize` - _optional_ - Optional size of the page, can be limited by a server.
* `pageToken` - _optional_ - Optional page token to continue retrieval. Comes from previous call
to ListJobTriggers. `order_by` field must not
change for subsequent calls.
* `parent` - _required_ - The parent resource name, for example `projects/my-project-id`.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a job trigger to run DLP actions such as scanning storage for<br/>
> sensitive information on a set schedule.<br/>
> See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The parent resource name, for example projects/my-project-id.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists stored infoTypes.<br/>
> See https://cloud.google.com/dlp/docs/creating-stored-infotypes to<br/>
> learn more.

*Tags:* `projects`

#### Input Parameters
* `orderBy` - _optional_ - Optional comma separated list of fields to order by,
followed by `asc` or `desc` postfix. This list is case-insensitive,
default sorting order is ascending, redundant space characters are
insignificant.

Example: `name asc, display_name, create_time desc`

Supported fields are:

- `create_time`: corresponds to time the most recent version of the
resource was created.
- `state`: corresponds to the state of the resource.
- `name`: corresponds to resource name.
- `display_name`: corresponds to info type's display name.
* `pageSize` - _optional_ - Optional size of the page, can be limited by server. If zero server returns
a page of max size 100.
* `pageToken` - _optional_ - Optional page token to continue retrieval. Comes from previous call
to `ListStoredInfoTypes`.
* `parent` - _required_ - The parent resource name, for example projects/my-project-id or
organizations/my-org-id.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a pre-built stored infoType to be used for inspection.<br/>
> See https://cloud.google.com/dlp/docs/creating-stored-infotypes to<br/>
> learn more.

*Tags:* `projects`

#### Input Parameters
* `parent` - _required_ - The parent resource name, for example projects/my-project-id or
organizations/my-org-id.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

## License

**flow**ground :- Telekom iPaaS / googleapis-com-dlp-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
