class Equipamentos:
    contador_id = 1
    def __init__(self, nome,marca,modelo,id, valor, fabricante):

        self.id = Equipamentos.contador_id
        Equipamentos.contador_id += 1
        self.nome = nome
        self.marca = marca
        self.modelo = modelo
        self.id = Equipamentos.contador_id
        self.valor = valor
        self.fabricante = fabricante
        Equipamentos.contador_id += 1


    def __repr__(self):
        return f'Equipamento: {self.nome}, Marca: {self.marca}, Modelo: {self.modelo}, ID: {self.id}, Valor: {self.valor}, Fabricante: {self.fabricante}'
    
# Lista de equipamentos em memória (simulação de um banco de dados).
EQUIPAMENTOS = []


def adicionar_equipamento(equipamento):
        EQUIPAMENTOS.append(equipamento)


#Lista EQUIPAMENTOS → é uma base de dados em memória, só para treinar sem depender de banco real.
def listar_equipamentos():
        return EQUIPAMENTOS

def buscar_equipamento_por_id(equipamento_id):
        for eq in EQUIPAMENTOS:
            if eq.id == equipamento_id:
                return eq
        return None

def remover_equipamento(equipamento):
        global EQUIPAMENTOS
        EQUIPAMENTOS = [eq for eq in EQUIPAMENTOS if eq.id !=equipamento.id]