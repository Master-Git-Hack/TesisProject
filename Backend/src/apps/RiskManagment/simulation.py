from numpy import asarray, random

from .objectives import adjacencyMat, cities
from .population import Population


class Simulation:
    def __init__(self, cities, adjacency_mat, nPopulation = 22, nIter = 20, selectivity = 0.15, pCross = 0.5, pMut=0.1,returnHistory=False,verbose=False):
        self.cities = cities
        self.adjacency_mat = adjacency_mat
        self.nPopulation = nPopulation
        self.nIter = nIter
        self.selectivity = selectivity
        self.pCross = pCross
        self.pMut = pMut
        self.returnHistory = returnHistory
        self.verbose = verbose
    
    def run(self):
        pop = Population(
            asarray([random.permutation(self.cities) for _ in range(self.nPopulation)]), 
            self.adjacency_mat
        )   

