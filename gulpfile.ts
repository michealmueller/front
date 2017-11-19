import * as gulp from 'gulp';
import {runSequence, task} from './tools/utils';

// --------------
// Prepare (AoT - Production)
gulp.task('prepare.prod', done =>
  runSequence(
    'build.plugins',
    'build.sass',
    'build.assets',
    done));

// --------------
// Build
gulp.task('build', done =>
  runSequence(
    //'clean.dist',
    //'tslint',
    'build.plugins',
    'build.sass',
    'build.assets',
    'build.js',
    'build.bundles',
    'build.bundles.app',
    //'build.index',
    done));

// --------------
// Build bundle (AoT - Production)
gulp.task('build.bundle.prod', done =>
  runSequence(
    'build.bundles',
    done));

// --------------
// Build bundle
gulp.task('build.bundle', done =>
  runSequence(
    'build.bundles',
    'build.bundles.app',
    done));

// --------------
// Build (SASS only)
gulp.task('build.sass', done =>
  runSequence(
    'build.plugins',
    'build.sass',
    'build.assets',
    done));

// --------------
// Build Index
gulp.task('build.index', done =>
  runSequence(
    'build.index',
    done));

// --------------
// Test.
gulp.task('test', done =>
  runSequence(
    //'clean.test',
    'tslint',
    //'build.test',
    //'karma.start',
    done));

// --------------
// Extract to XLF
gulp.task('extract.xlf', done =>
  runSequence(
    'extract.xlf',
    done));

// --------------
// Import XLF
gulp.task('import.xlf', done =>
  runSequence(
    'import.xlf',
    done));

// --------------
// Lint Source XLF
gulp.task('lint.source.xlf', done =>
  runSequence(
    'lint.source.xlf',
    done));

// --------------
// Lint Translated XLF
gulp.task('lint.translated.xlf', done =>
  runSequence(
    'lint.translated.xlf',
    done));

// --------------
// Build everything (Production)
gulp.task('build.all.prod', done =>
  runSequence(
    'build.all.prod',
    done));
