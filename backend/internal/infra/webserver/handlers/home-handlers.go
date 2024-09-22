package handlers

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"

	"github.com/google/uuid"
)

type User struct {
	ID                 uuid.UUID `json:"id"`
	Name               string    `json:"name"`
	Email              string    `json:"email"`
	Password           string    `json:"password"`
	CreatedAt          string    `json:"created_at"`
	UpdatedAt          string    `json:"updated_at"`
	ResponseStatusCode int       `json:"response_status_code"`
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	body, err := io.ReadAll(r.Body)
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

	if user.ResponseStatusCode == 400 {
		http.Error(w, "Erro ao criar usuário", http.StatusBadRequest)
		return
	}

	if user.ResponseStatusCode == 500 {
		http.Error(w, "Erro ao criar usuário", http.StatusInternalServerError)
		return
	}

	user.ID = id
	user.CreatedAt = time.Now().Format(time.RFC3339)
	user.UpdatedAt = time.Now().Format(time.RFC3339)

	fmt.Printf("Usuário criado: %+v\n", user) // Exemplo de output

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)

	response, _ := json.Marshal(user)
	w.Write(response)
}
