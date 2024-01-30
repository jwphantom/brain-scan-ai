"""
   Nom : OLONGO ONDIGUI JAMES WILLIAM
   Matricule : 2223M428 
   Niveau : Master II - DS
"""

import numpy as np


def verificationMatriceSym(A):
    """
    Vérifie si une matrice A est symétrique.
    """
    return np.allclose(A, A.T)


def gradient_conjuge(A, b, tol=1e-10):
    """
    Résout le système Ax = b en utilisant la méthode du gradient conjugué.

    :param A: Matrice carrée, symétrique et définie positive.
    :param b: Vecteur des termes constants.
    :param tol: Tolérance pour le critère d'arrêt basé sur la norme du résidu.
    :return: Solution approchée du système.
    """
    if not verificationMatriceSym(A):
        raise ValueError("La matrice A doit être symétrique.")

    x = np.zeros_like(b)  # Solution initiale (vecteur nul)
    r = b - np.dot(A, x)  # Résidu initial
    p = r.copy()  # Direction initiale

    while np.linalg.norm(r) > tol:
        Ap = np.dot(A, p)
        alpha = np.dot(r, r) / np.dot(p, Ap)
        x = x + alpha * p
        r_new = r - alpha * Ap

        if np.linalg.norm(r_new) < tol:
            break

        beta = np.dot(r_new, r_new) / np.dot(r, r)
        p = r_new + beta * p
        r = r_new

    return x


def print_system(A, b, x):
    """
    Affiche le système A, b et la solution x.
    """
    print("Matrice A:")
    print(A)
    print("\nVecteur b:")
    print(b)
    print("\nSolution x:")
    print(x)
    print("-" * 30)


# Exemple 1 : Matrice 3x3 Symétrique
A_sym = np.array([[2, -1, 0], [-1, 2, -1], [0, -1, 2]])
b_sym = np.array([1, 0, 3])

try:
    x_sym = gradient_conjuge(A_sym, b_sym)
    print_system(A_sym, b_sym, x_sym)
except ValueError as e:
    print(e)

# Exemple 2 : Matrice 3x3 Non Symétrique
A_non_sym = np.array([[2, -1, 0], [-1, 2, 3], [0, -1, 2]])
b_non_sym = np.array([1, 0, 3])

try:
    x_non_sym = gradient_conjuge(A_non_sym, b_non_sym)
    print_system(A_non_sym, b_non_sym, x_non_sym)
except ValueError as e:
    print(e)
