import numpy as np


def gradient_conjuge(A, b, tol=1e-10):
    """
    Résout le système Ax = b en utilisant la méthode du gradient conjugué.

    :param A: Matrice carrée, symétrique et définie positive.
    :param b: Vecteur des termes constants.
    :param tol: Tolérance pour le critère d'arrêt basé sur la norme du résidu.
    :return: Solution approchée du système.
    """
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


# Exemple d'utilisation
if __name__ == "__main__":
    # Exemple de matrice A et vecteur b
    A = np.array([[4, 1], [1, 3]])
    b = np.array([1, 2])

    # Appel de la fonction
    x = gradient_conjuge(A, b)

    print("Solution:", x)
