"""
ID: krishna96
LANG: PYTHON3
TASK: gift1
"""

numero = int(input(""))
people = []
indexGive = 0


class person:
    def __init__(self, name):
        self.name = name
        self.balance = 0

    def giveGift(self, amount, receiver):
        dividen, remainder = divmod(amount, len(receiver))
        self.balance = self.balance - amount + remainder

        for num in receiver:
            people[num].balance += dividen

for loop1 in range(numero):
    name = input("")
    people.append(person(name))

for loop5 in range(numero):
    indexReceive = []
    findName = input("")
    for loop2 in people:
        if loop2.name == findName:
            indexGive = people.index(loop2)
            break

    a = input("")
    amount, noOfReceiver = a.split(' ')

    if noOfReceiver!= '0':
        receive = []
        for loop3 in range(int(noOfReceiver)):
            findName = input("")
            for loop2 in people:
                if loop2.name == findName:
                    indexReceive.append(people.index(loop2))
                    break

        people[indexGive].giveGift(int(amount), indexReceive)

f= open("gift1.txt","w+")

for loop4 in range(numero):
    f.write((people[loop4].name + " " + str(people[loop4].balance)))

f.close()