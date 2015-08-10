Mason is a new language compiling to JavaScript.

See the [guide](./ms) to start learning.

See [here](https://github.com/andy-hanson/mason) to view the source.


# use

To learn mason, use [mason-cli](https://github.com/andy-hanson/mason-cli) and the live editors on this site.

For projects, use [gulp-mason](https://github.com/andy-hanson/gulp-mason).

Sample projects: [thrifty-threesome-thriller](https://github.com/andy-hanson/thrifty-threesome-thriller),
[this site](https://github.com/andy-hanson/mason-online).


# setup

Currently, you'll need to install the latest io.js version.

* `mkdir ~/tmp; cd ~/tmp`
* `git clone https://github.com/nodejs/node.git`
* `cd node`
* `git checkout next+1`
* `./configure`
* `make`
* `sudo make install`
([nvm](https://github.com/creationix/nvm))
* `nvm alias default iojs`


# edit

## Sublime Text / TextMATE

A tmLanguage file is available [here](./editor/Mason.tmLanguage).

Sublime Text 3: `curl https://andy-hanson.github.io/mason/editor/Mason.tmLanguage > ~/.config/sublime-text-3/Packages/User/Mason.tmLanguage`


# contribute

There's lots of work do be done on mason. Current Mason projects are:

* [msl](https://github.com/andy-hanson/msl): Standard library
* [mason-compile](https://github.com/andy-hanson/mason-compile): Compiler
* [mason-cli](https://github.com/andy-hanson/mason-cli): CLI
* [gulp-mason](https://github.com/andy-hanson/gulp-mason): [Gulp](gulpjs.com) plugin

It would also be nice to have:

* grunt-contrib-mason: [Grunt](http://gruntjs.com) plugin
* broccoli-mason: [Broccoli](http://broccolijs.com) plugin
