package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

// Load the index.html template.
var tmpl = template.Must(template.New("tmpl").ParseFiles("examplecalc.html"))

func main() {
	// Serve / with the index.html file.
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if err := tmpl.ExecuteTemplate(w, "examplecalc.html", nil); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	// Serve /callme with a text response.
	http.HandleFunc("/callme", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintln(w, "You called me!")
	})

	// Start the server at http://localhost:9000
	log.Fatal(http.ListenAndServe(":9000", nil))
}
