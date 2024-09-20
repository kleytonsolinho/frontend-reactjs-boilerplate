run:
	cd backend && go run -tags dev cmd/server/main.go &
	yarn dev
