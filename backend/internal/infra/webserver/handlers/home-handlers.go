package handlers

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/google/uuid"
)

// Struct para representar o usuário
type User struct {
	ID    uuid.UUID `json:"id"`
	Name  string    `json:"name"`
	Email string    `json:"email"`
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body) // Use io.ReadAll no lugar de ioutil.ReadAll
	if err != nil {
		http.Error(w, "Erro ao ler o body da requisição", http.StatusBadRequest)
		return
	}

	id, err := uuid.NewRandom()
	if err != nil {
		http.Error(w, "Erro ao criar UUID", http.StatusInternalServerError)
		return
	}

	var user User
	if err := json.Unmarshal(body, &user); err != nil {
		http.Error(w, "Erro ao decodificar JSON", http.StatusBadRequest)
		return
	}

	user.ID = id

	fmt.Printf("Usuário criado: %+v\n", user) // Exemplo de output

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusBadRequest)

	response, _ := json.Marshal(user)
	w.Write(response)
}
