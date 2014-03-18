build:
	@cat pesticide.js | sed -e 's/^ *//' | tr -d '\n' > pesticide.min.js
