# -*- coding: utf-8 -*-
"""ejemplo2.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1LB_G5VCPy9lAn1cfLYHals75mKeSkdDi

# **Librerias necesarias**
"""

import matplotlib.pyplot as plt

# Commented out IPython magic to ensure Python compatibility.
import numpy as np

np.seterr(divide="ignore", invalid="ignore")
# %matplotlib inline
# %config InlineBackend.figure_format = 'svg'
plt.style.use("seaborn")
np.random.seed(42)

"""# **Representación**

### **Destino - Origen**
"""

cities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

adjacency_mat = np.asarray(
    [
        [
            0,
            57,
            106,
            149,
            57,
            57,
            109,
            57,
            57,
            57,
            57,
            57,
            57,
            57,
            57,
            57,
            57,
            57,
            57,
            57,
            57,
            57,
        ],
        [
            105,
            0,
            97,
            140,
            48,
            79,
            48,
            48,
            48,
            60,
            48,
            48,
            48,
            119,
            48,
            48,
            48,
            48,
            48,
            61,
            48,
            48,
        ],
        [
            106,
            97,
            0,
            141,
            49,
            49,
            49,
            49,
            49,
            49,
            49,
            49,
            49,
            49,
            91,
            49,
            49,
            49,
            49,
            49,
            49,
            49,
        ],
        [
            92,
            140,
            92,
            0,
            92,
            123,
            144,
            92,
            92,
            92,
            92,
            92,
            92,
            92,
            92,
            92,
            92,
            92,
            92,
            92,
            92,
            92,
        ],
        [
            33,
            33,
            33,
            33,
            0,
            33,
            33,
            33,
            33,
            33,
            33,
            33,
            33,
            33,
            33,
            33,
            33,
            100,
            33,
            33,
            33,
            33,
        ],
        [
            88,
            31,
            80,
            123,
            31,
            0,
            31,
            31,
            31,
            31,
            31,
            31,
            31,
            102,
            31,
            100,
            31,
            31,
            31,
            31,
            31,
            31,
        ],
        [
            52,
            52,
            101,
            52,
            52,
            83,
            0,
            81,
            52,
            52,
            52,
            52,
            117,
            123,
            94,
            121,
            52,
            119,
            52,
            52,
            52,
            52,
        ],
        [
            29,
            29,
            29,
            29,
            29,
            29,
            29,
            0,
            32,
            29,
            29,
            29,
            29,
            29,
            71,
            29,
            29,
            29,
            29,
            29,
            29,
            29,
        ],
        [
            80,
            128,
            80,
            80,
            80,
            80,
            80,
            80,
            0,
            133,
            159,
            80,
            88,
            80,
            122,
            80,
            86,
            147,
            80,
            80,
            80,
            80,
        ],
        [
            53,
            101,
            53,
            53,
            53,
            53,
            53,
            53,
            53,
            0,
            132,
            53,
            53,
            53,
            53,
            53,
            53,
            120,
            53,
            53,
            53,
            53,
        ],
        [
            79,
            127,
            79,
            79,
            112,
            79,
            79,
            79,
            159,
            132,
            0,
            121,
            79,
            79,
            79,
            79,
            79,
            79,
            79,
            79,
            79,
            79,
        ],
        [
            42,
            42,
            42,
            134,
            42,
            42,
            42,
            71,
            42,
            95,
            42,
            0,
            42,
            42,
            42,
            42,
            42,
            42,
            42,
            42,
            42,
            42,
        ],
        [
            122,
            65,
            65,
            157,
            65,
            96,
            117,
            65,
            65,
            65,
            65,
            65,
            0,
            65,
            107,
            134,
            101,
            132,
            65,
            65,
            65,
            65,
        ],
        [
            128,
            119,
            71,
            71,
            71,
            102,
            71,
            71,
            71,
            71,
            71,
            71,
            136,
            0,
            113,
            140,
            71,
            138,
            71,
            71,
            71,
            71,
        ],
        [
            42,
            42,
            91,
            134,
            42,
            42,
            42,
            71,
            42,
            42,
            42,
            42,
            42,
            42,
            0,
            42,
            42,
            42,
            42,
            42,
            42,
            42,
        ],
        [
            69,
            69,
            69,
            69,
            69,
            100,
            121,
            98,
            69,
            122,
            69,
            69,
            134,
            140,
            69,
            0,
            69,
            136,
            69,
            69,
            69,
            146,
        ],
        [
            36,
            36,
            85,
            36,
            36,
            36,
            36,
            36,
            36,
            36,
            36,
            36,
            36,
            36,
            36,
            36,
            0,
            103,
            36,
            36,
            36,
            36,
        ],
        [
            67,
            115,
            116,
            67,
            67,
            72,
            67,
            67,
            67,
            67,
            67,
            67,
            67,
            67,
            67,
            67,
            67,
            0,
            67,
            67,
            67,
            67,
        ],
        [
            31,
            79,
            31,
            31,
            31,
            31,
            31,
            31,
            31,
            58,
            31,
            31,
            31,
            31,
            31,
            31,
            31,
            31,
            0,
            31,
            58,
            108,
        ],
        [
            63,
            111,
            74,
            63,
            63,
            63,
            115,
            63,
            63,
            63,
            63,
            63,
            63,
            63,
            63,
            63,
            63,
            63,
            63,
            0,
            90,
            63,
        ],
        [
            27,
            75,
            27,
            27,
            27,
            27,
            27,
            56,
            27,
            27,
            27,
            27,
            27,
            27,
            27,
            27,
            27,
            27,
            27,
            90,
            0,
            104,
        ],
        [
            77,
            125,
            77,
            77,
            77,
            77,
            77,
            106,
            77,
            104,
            156,
            119,
            77,
            77,
            77,
            77,
            77,
            77,
            108,
            77,
            77,
            0,
        ],
    ]
)

"""### **Origen - destino**

cities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

adjacency_mat = np.asarray(
    [
        [0,0,1517,1804,0,0,1312,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [164,0,222,220,0,85,0,0,0,32,0,0,0,200,0,0,0,0,0,9,0,0],
        [41,72,0,347,0,0,0,0,0,0,0,0,0,0,78,0,0,0,0,0,0,0],
        [0,1584,0,0,0,748,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,880,0,0,0,0],
        [164,0,222,748,0,0,0,0,0,0,0,0,0,680,0,765,0,0,0,0,0,0],
        [0,0,370,0,0,119,0,132,0,0,0,0,114,40,26,45,0,44,0,0,0,0],
        [0,0,0,0,0,0,0,0,51,0,0,0,0,0,78,0,0,0,0,0,0,0],
        [0,108,0,0,0,0,0,0,0,877,1150,0,0,0,156,0,20,148,0,0,0,0],
        [0,72,0,0,0,0,0,0,0,0,53,0,0,0,0,0,0,176,0,0,0,0],
        [0,72,0,0,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,132,0,0,0,132,0,1131,0,0,0,0,0,0,0,0,0,0,0,0],
        [123,0,0,264,0,51,416,0,0,0,0,0,0,0,156,735,160,624,0,0,0,0],
        [1640,36,0,0,0,68,0,0,0,0,0,0,76,0,29,298,0,264,0,0,0,0],
        [0,0,38,44,0,0,0,110,0,0,0,0,0,0,0,0,0,0,0,0,0,	0],
        [0,0,0,0,0,136,82,80,0,38,0,0,190,476,0,0,0,131,0,0,0,54],
        [0,0,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,831,0,0,0,0],
        [0,216,296,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,0],
        [0,684,0,0,0,0,1312,0,0,0,0,0,0,0,0,0,0,0,0,0,85,0],
        [0,612,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0,164,0,54],
        [0,108,0,0,0,0,0,154,0,40,424,29,0,0,0,0,0,0,100,0,0,0],
    ]
)
"""
"""# **Algoritmo Genetico**"""


class Population:
    def __init__(self, bag, adjacency_mat):
        self.bag = bag
        self.parents = []
        self.score = 0
        self.best = None
        self.adjacency_mat = adjacency_mat


def init_population(cities, adjacency_mat, n_population):
    return Population(
        np.asarray([np.random.permutation(cities) for _ in range(n_population)]),
        adjacency_mat,
    )


pop = init_population(cities, adjacency_mat, 22)
pop.bag

"""# **Fitness**"""


def fitness(self, chromosome):
    return sum(
        [
            self.adjacency_mat[chromosome[i], chromosome[i + 1]]
            for i in range(len(chromosome) - 1)
        ]
    )


Population.fitness = fitness

"""# **Evaluación**"""


def evaluate(self):
    distances = np.asarray([self.fitness(chromosome) for chromosome in self.bag])
    self.score = np.min(distances)
    self.best = self.bag[distances.tolist().index(self.score)]
    self.parents.append(self.best)
    if False in (distances[0] == distances):
        distances = np.max(distances) - distances
    return distances / np.sum(distances)


Population.evaluate = evaluate

pop.evaluate()

pop.best

pop.score


def select(self, k=22):
    fit = self.evaluate()
    while len(self.parents) < k:
        idx = np.random.randint(0, len(fit))
        if fit[idx] > np.random.rand():
            self.parents.append(self.bag[idx])
    self.parents = np.asarray(self.parents)


Population.select = select

pop.select()
pop.parents


def swap(chromosome):
    a, b = np.random.choice(len(chromosome), 2)
    chromosome[a], chromosome[b] = (
        chromosome[b],
        chromosome[a],
    )
    return chromosome


def crossover(self, p_cross=0.7):
    children = []
    count, size = self.parents.shape
    for _ in range(len(self.bag)):
        if np.random.rand() > p_cross:
            children.append(list(self.parents[np.random.randint(count, size=1)[0]]))
        else:
            parent1, parent2 = self.parents[np.random.randint(count, size=2), :]
            idx = np.random.choice(range(size), size=2, replace=False)
            start, end = min(idx), max(idx)
            child = [None] * size
            for i in range(start, end + 1, 1):
                child[i] = parent1[i]
            pointer = 0
            for i in range(size):
                if child[i] is None:
                    while parent2[pointer] in child:
                        pointer += 1
                    child[i] = parent2[pointer]
            children.append(child)
    return children


Population.crossover = crossover

"""# **Mutación**"""


def mutate(self, p_cross=0.5, p_mut=0.1):
    next_bag = []
    children = self.crossover(p_cross)
    for child in children:
        if np.random.rand() < p_mut:
            next_bag.append(swap(child))
        else:
            next_bag.append(child)
    return next_bag


Population.mutate = mutate

pop.mutate()

"""## **Algoritmo genético**"""


def genetic_algorithm(
    cities,
    adjacency_mat,
    n_population=22,
    n_iter=20,
    selectivity=0.15,
    p_cross=0.5,
    p_mut=0.1,
    print_interval=100,
    return_history=False,
    verbose=False,
):
    pop = init_population(cities, adjacency_mat, n_population)
    best = pop.best
    score = float("inf")
    history = []
    for i in range(n_iter):
        pop.select(n_population * selectivity)
        history.append(pop.score)
        if verbose:
            print(f"Generation {i}: {pop.score}")
        elif i % print_interval == 0:
            print(f"Generation {i}: {pop.score}")
        if pop.score < score:
            best = pop.best
            score = pop.score
        children = pop.mutate(p_cross, p_mut)
        pop = Population(children, pop.adjacency_mat)
    if return_history:
        return best, history
    return best


genetic_algorithm(cities, adjacency_mat, verbose=True)

"""# **Geenerador de Grafos**"""

best, history = genetic_algorithm(
    cities,
    adjacency_mat,
    n_iter=20,
    verbose=False,
    print_interval=20,
    return_history=True,
)

plt.plot(range(len(history)), history, color="skyblue")
plt.show()
print(best)

"""# **Coordenadas**"""


def generate_cities(n_cities, factor=10):
    return np.random.rand(n_cities, 2) * n_cities * factor


def make_mat(coordinates):
    res = [
        [get_distance(city1, city2) for city2 in coordinates] for city1 in coordinates
    ]
    return np.asarray(res)


def get_distance(city1, city2):
    return np.sqrt((city1[0] - city2[0]) ** 2 + (city1[1] - city2[1]) ** 2)


test_coords = [[0, 0], [0, 1], [1, 1], [1, 0]]

make_mat(test_coords)

generate_cities(22)

cities = range(22)
city_coordinates = generate_cities(len(cities))
adjacency_mat = make_mat(city_coordinates)
best, history = genetic_algorithm(
    cities,
    adjacency_mat,
    n_population=22,
    n_iter=1000,
    verbose=False,
    return_history=True,
)
plt.plot(range(len(history)), history, color="skyblue")
plt.show()
print(best)


def print_path(best, city_coordinates):
    points = city_coordinates[best]
    x, y = zip(*points)
    plt.plot(x, y, color="skyblue", marker="o")


print_path(best, city_coordinates)


def better_generate_cities(n_cities, factor=0.2):
    x = np.asarray(range(int(-n_cities / 2), int(n_cities / 2) + 1, 1))
    y = np.sqrt(n_cities**2 / 4 - x**2)
    return np.asarray(list(zip(x, y)))


cities = range(22)
city_coordinates = better_generate_cities(len(cities))
adjacency_mat = make_mat(city_coordinates)
best, history = genetic_algorithm(
    cities,
    adjacency_mat,
    n_population=500,
    selectivity=0.05,
    p_mut=0.05,
    p_cross=0.7,
    n_iter=1000,
    print_interval=500,
    verbose=False,
    return_history=True,
)
plt.plot(range(len(history)), history, color="skyblue")
plt.show()
print(best)

print_path(best, city_coordinates)

print_path(sorted(best), city_coordinates)
