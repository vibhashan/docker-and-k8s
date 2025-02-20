const appName = process.env.APP_NAME ?? "unknown";
const environment = process.env.ENVIRONMENT ?? "unknown";

console.log(`Running ${appName} in ${environment} environment`);
