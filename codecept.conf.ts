import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  name: 'automacao-codeceptjs-web',
  tests: './*_test.ts',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://automationpratice.com.br/',
      browser: 'chrome',
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {
          args: ["--headless"]
        }
      }
    }
  },
  include: {
    I: './steps_file'
  },
  bootstrap: null,
  teardown: null,
  mocha: {},
  plugins: {
    
    }
  }