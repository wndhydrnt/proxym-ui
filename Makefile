package: clean package_css package_js package_templates
	cp ./index.html ./dist/
	cp ./config.js ./dist/

clean:
	rm -r ./dist

package_css:
	mkdir -p ./dist/css
	cp ./css/*.* ./dist/css/

package_js:
	mkdir -p ./dist/js
	r.js -o ./build.js
	cp ./config.js ./dist/js/

package_templates:
	mkdir -p ./dist/templates
	cp -r ./templates/ ./dist/templates/
