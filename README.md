# elosu-web
A website for an elo based 1v1 leaderboard for osu!

## Test Environment Setup:

Requirements: 
  * Golang
  * Postgres (pgadmin suggested)
  * github.com/bmizerany/pq
  * github.com/kabukky/httpscerts
  
Process:
  * Take the elosuinfo.go file and move it to your go installation at /go/src/elosuinfo.go. This file contains all of the passwords needed to test on a local database. There will be instructions on how to create this database in the future. 
  * Change the blank password const to whatever password you chose when making the database. 
  * Point a command window to the directory containing the server.go file and type ```go run server.go```
