install: install-deps

install-deps:
	npm ci

run:
	npx babel-node 'src/bin/gendiff.js' --format plain __tests__/__fixtures__/json1.json __tests__/__fixtures__/json2.json

build:
	rm -rf dist
	npm run build

test:
	npm test

test-coverage:
	npm test -- --coverage

lint:
	npx eslint .

publish:
	npm publish

link:
	rm -rf dist
	npm publish --dry-run
	npm link

.PHONY: test