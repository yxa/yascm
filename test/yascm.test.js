var expect      = require('chai').expect,
    yascm       = require('../yascm'),
    colors      = require('../colors');


describe('Yet Another Shell Color Module', function() {
  it('should make the output colorized', function(done) {
    expect(yascm('red','Red')).to.eql(colors.escape + colors.open.red + 'Red' + colors.reset);
    done();
  });

  it('should throw error on no text supplied', function(done) {
    expect(function(){ yascm('red', undefined) }).to.throw(Error);
    done();
  });

  it('should throw error on no color supplied', function(done) {
    expect(function(){ yascm(undefined, 'foobar') }).to.throw(Error);
    done();
  });

  it('should throw error on color not exists', function(done) {
    expect(function(){ yascm('greengrayish', 'foobar') }).to.throw(Error);
    done();
  });

  it('should make the output underlined', function(done) {
    expect(yascm('u','underlined')).to.eql(colors.escape + colors.open.u + 'underlined' + colors.reset);
    done();
  });
  it('should make the output crossed out', function(done) {
    expect(yascm('crossed-out','foo@bar.com')).to.eql(colors.escape + colors.open['crossed-out'] + 'foo@bar.com' + colors.reset);
    done();
  });
  it('should create background color', function(done) {
    expect(yascm('bg-red','redbackground')).to.eql(colors.escape + colors.open['bg-red'] + 'redbackground' + colors.reset);
    done();
  });
});
