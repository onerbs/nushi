# NUSHIヌシ

A delightful, classless stylesheet:sparkles:


## Usage

> This is still a work in progress

Clone this repository

	git clone https://github.com/onerbs/nushi

Link it as local dependency

	# With Yarn

	cd nushi
	yarn link

	cd /into/your/project
	yarn link @onerbs/nushi

	# With NPM

	cd /into/your/project
	npm link /path/to/nushi

So you can `git pull` whenever this repository gets updated


## Building

If you want a minified CSS file, run

	node build.mjs

This will create the file `nushi.min.css` in the `dist` folder


## Acknowledgments

This project was mainly inspired by [Basic.css](https://github.com/vladocar/Basic.css) :raised_hands:

Also, many thanks to:

- The [Inter font](https://github.com/rsms/inter)
- The [other classless stylesheets](https://github.com/dbohdan/classless-css)
