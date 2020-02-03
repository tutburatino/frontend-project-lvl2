update:
	make install

run:
	npx babel-node

install:
	npm install

build:
	rm -rf dist
	npm run build

test:
	npm test

lint:
	npx eslint .

publish:
	npm publish --dry-run

link:
	rm -rf dist
	npm publish --dry-run
	npm link
