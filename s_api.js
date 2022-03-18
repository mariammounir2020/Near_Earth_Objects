
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'mariammounir2020',
  applicationName: 'aws-node-express-api',
  appUid: '0vgpdG0PVhDp5b5c88',
  orgUid: '3ba6476f-70aa-4b93-a037-94bb165047f5',
  deploymentUid: '7b0f4a0b-8ec8-4ec7-8e77-cb21d21b5afe',
  serviceName: 'my-function',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '6.1.5',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'my-function', timeout: 6 };

try {
  const userHandler = require('./handler.js');
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}