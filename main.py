import numpy as np
import matplotlib.pyplot as plt

# Número de posições à esquerda e à direita do zero
L = 200  # tamanho total será 2*L+1
n_steps = 200  # número de passos

# Dimensão total: posições x coin (2)
dim = 2 * L + 1
state = np.zeros((dim, 2), dtype=complex)

# Inicializa no centro com coin "up"
state[L, 0] = 1 / np.sqrt(2)
state[L, 1] = 1j / np.sqrt(2)  # coin com fase para interferência interessante

# Operador de coin (Hadamard)
H = (1/np.sqrt(2)) * np.array([[1, 1],
                               [1, -1]], dtype=complex)

def apply_coin(state):
    new_state = np.zeros_like(state)
    for pos in range(dim):
        new_state[pos] = H @ state[pos]
    return new_state

def apply_shift(state):
    new_state = np.zeros_like(state)
    for pos in range(1, dim - 1):
        # Coin up → move para direita
        new_state[pos + 1, 0] += state[pos, 0]
        # Coin down → move para esquerda
        new_state[pos - 1, 1] += state[pos, 1]
    return new_state

# Evolução temporal
for _ in range(n_steps):
    state = apply_coin(state)
    state = apply_shift(state)

# Densidade de probabilidade final por posição (soma dos módulos quadrados das amplitudes)
# Cria arrays de posição e probabilidade
positions = np.arange(-L, L+1)
prob_dist = np.abs(state[:, 0])**2 + np.abs(state[:, 1])**2

# Filtrar apenas posições com probabilidade > 0
positions_nonzero = positions[prob_dist > 0]
prob_dist_nonzero = prob_dist[prob_dist > 0]

# Plot
plt.figure(figsize=(10, 5))
plt.plot(positions_nonzero, prob_dist_nonzero, label=f'{n_steps} passos')
plt.title('Distribuição de probabilidade - Caminhada Quântica 1D (sem zeros)')
plt.xlabel('Posição')
plt.ylabel('Probabilidade')
plt.grid(True)
plt.legend()
plt.show()