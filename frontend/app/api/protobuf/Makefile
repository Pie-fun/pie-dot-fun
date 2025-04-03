default: build

buf-lint:
	docker compose run --rm buf-lint

lint:
	docker compose run --rm lint

image:
	docker compose run --rm image

docker-image:
	docker build . -t spacebarapis-buildenv:latest --build-arg GITHUB_TOKEN=$(GITHUB_TOKEN)

build:
	docker compose run --rm buf-generate

go-mod:
	cd go && go mod tidy

openapi:
	$(eval SOURCES := $(shell find openapiv2 -name '*.json'))
	$(eval URLS := $(shell echo $(SOURCES) | sed -E "s/openapiv2\/([A-Za-z0-9/._]+).swagger.json/{ url: '\"'openapiv2\/\1.swagger.json'\"', name: '\"'\1'\"'}, /g"))
	$(eval URLS := $(subst '"','\"',$(URLS)))
	@echo $(URLS)

	docker run -p $(or $(PORT),8080):8080 \
	-e URLS="[$(shell echo $(URLS))]" \
	-v $(shell pwd)/openapiv2/:/usr/share/nginx/html/openapiv2 \
	pentusha/swagger-ui-crossbuild
