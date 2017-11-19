import { APP_SRC } from '../config';
import { argv } from 'yargs';
import * as glob from 'glob';
import { execSync } from 'child_process';

export = (gulp, plugins) => {
  let run = (cmd: string, env: any = {}, outputAsResult: boolean = true) => {
    let shell = process.env.ComSpec || process.env.SHELL || false,
      opts = {
        env: {
          ...process.env,
          ...env
        },
        maxBuffer: 1024 * 1024,
        stdio: outputAsResult ? 'pipe' : 'inherit'
      };

    if (shell) {
      opts['shell'] = shell;
    }

    console.info(`[run] ${cmd} (${JSON.stringify(env)})`);

    let result = execSync(cmd, opts);

    if (result instanceof Buffer) {
      result = result.toString();
    }

    return result;
  };

  return function (done) {
    let release = argv['release'] || '';

    if (!release) {
      try {
        release = run('git rev-parse --short HEAD').trim();
      } catch (e) {
        return done('Cannot determine current release. Run it within the Git repository or use the --release flag');
      }
    }

    run(`npm run build`, {
      MINDS_RELEASE: release
    }, false);

    let files: string[] = glob.sync(`${APP_SRC}/locale/Minds.*.xliff`);

    files.forEach(file => {
      let lang = (/Minds\.([a-z\-_]+)\.xliff/g).exec(file)[1];
      run(`npm run build-i18n`, {
        MINDS_RELEASE: release,
        MINDS_LOCALE: lang
      }, false);
    });
  };
}
