const defaultConfig = {
  SERVER_PORT: '3009',
};

export default defaultConfig;

for (const key in defaultConfig) {
  const assertedKey = key as keyof typeof defaultConfig;
  const env = process.env[assertedKey];
  if (env !== undefined) {
    defaultConfig[assertedKey] = env;
  }
}
