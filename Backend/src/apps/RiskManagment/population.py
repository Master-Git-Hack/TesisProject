import matplotlib.pyplot as plt
import numpy as np
from numpy import asarray, random, seterr

seterr(divide="ignore", invalid="ignore")
random.seed(42)


class Population:
    def __init__(self, bag, adjacencyMat):
        self.bag = bag
        self.parents = []
        self.score = 0
        self.best = None
        self.adjacencyMat = adjacencyMat

    def fitness(self, chromosome):
        return sum(
            [
                self.adjacencyMat[value, chromosome[index + 1]]
                for index, value in enumerate(chromosome)
                if len(chromosome) - 1 >= index + 1
            ]
        )

    def evaluate(self):
        distances = asarray([self.fitness(chromosome) for chromosome in self.bag])
        self.score = np.min(distances)
        self.best = self.bag[distances.tolist().index(self.score)]
        self.parents.append(self.best)
        if False in (distances[0] == distances):
            distances = np.max(distances) - distances
        return distances / np.sum(distances)

    def select(self, k=22):
        fit = self.evaluate()
        while len(self.parents) < k:
            idx = random.randint(0, len(fit))
            if fit[idx] > random.rand():
                self.parents.append(self.bag[idx])
        self.parents = asarray(self.parents)

    def crossover(self, pCross=0.7):
        children = []
        count, size = self.parents.shape
        for _ in range(len(self.bag)):
            if random.rand() > pCross:
                children.append(list(self.parents[random.randint(count, size=1)[0]]))
            else:
                parent1, parent2 = self.parents[random.randint(count, size=2), :]
                idx = random.choice(range(size), size=2, replace=False)
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

    def mutate(self, pCross=0.5, pMut=0.1):
        next_bag = []
        children = self.crossover(pCross)
        for child in children:
            if random.rand() < pMut:
                next_bag.append(swap(child))
            else:
                next_bag.append(child)
        return next_bag


def swap(chromosome):
    a, b = random.choice(len(chromosome, 2))
    chromosome[a], chromosome[b] = (chromosome[b], chromosome[a])
    return chromosome


def run(cities, adjacencyMat, nPopulation):
    pop = Population(
        asarray([random.permutation(cities) for _ in range(nPopulation)]), adjacencyMat
    )
    pop.evaluate()
    pop.select()
    pop.mutate()
    return pop
