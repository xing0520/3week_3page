var bs = require('browser-sync').create();
var gulp = require('gulp');

gulp.task('week1-server', function() {
  bs.init({
    server: {
      baseDir: "./week1"
    },
    port: 8001
  });
});

gulp.task('watch', function () {
  bs.watch('*/*.html').on('change', bs.reload);
  bs.watch('*/*.css').on('change', bs.reload);
})

gulp.task('week1', ['week1-server', 'watch']);
