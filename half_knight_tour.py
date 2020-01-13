#
#  Challenge from a Quora
# 
#  INPUT
#  None
# 
#  GOAL
#  Implement the Knight's Tour where the board size is 4x8
# 
 
 
import numpy as np

board = np.zeros((4, 8))
# board
# array([[0., 0., 0., 0., 0., 0., 0., 0.],
#        [0., 0., 0., 0., 0., 0., 0., 0.],
#        [0., 0., 0., 0., 0., 0., 0., 0.],
#        [0., 0., 0., 0., 0., 0., 0., 0.]])

possible_moves = {}

for x_coor, x_val in enumerate(board):
    for y_coor, y_val in enumerate(x_val):
        possible_moves[(x_coor, y_coor)] = []

# possible_moves
# (0, 0) : []
# (0, 1) : []
# (0, 2) : []
# (0, 3) : []
# (0, 4) : []
# (0, 5) : []
# (0, 6) : []
# (0, 7) : []
# (1, 0) : []
# (1, 1) : []
# (1, 2) : []
# (1, 3) : []
# (1, 4) : []
# (1, 5) : []
# (1, 6) : []
# (1, 7) : []
# (2, 0) : []
# (2, 1) : []
# (2, 2) : []
# (2, 3) : []
# (2, 4) : []
# (2, 5) : []
# (2, 6) : []
# (2, 7) : []
# (3, 0) : []
# (3, 1) : []
# (3, 2) : []
# (3, 3) : []
# (3, 4) : []
# (3, 5) : []
# (3, 6) : []
# (3, 7) : []

knight_moves = np.array(
    [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]])

for pos in possible_moves.keys():
    for moves in knight_moves:
        move = np.array(pos) + moves
        # kalau hasil move itu masih dalam board
        # tambahin koordinat baru ke dictionary possible_moves
        if(tuple(move) in possible_moves.keys()):
            possible_moves[pos].append(list(move))

# possible moves
# (0, 0) : [[1, 2], [2, 1]]
# (0, 1) : [[1, 3], [2, 2], [2, 0]]
# (0, 2) : [[1, 4], [1, 0], [2, 3], [2, 1]]
# (0, 3) : [[1, 5], [1, 1], [2, 4], [2, 2]]
# (0, 4) : [[1, 6], [1, 2], [2, 5], [2, 3]]
# (0, 5) : [[1, 7], [1, 3], [2, 6], [2, 4]]
# (0, 6) : [[1, 4], [2, 7], [2, 5]]
# (0, 7) : [[1, 5], [2, 6]]
# (1, 0) : [[2, 2], [0, 2], [3, 1]]
# (1, 1) : [[2, 3], [0, 3], [3, 2], [3, 0]]
# (1, 2) : [[2, 4], [2, 0], [0, 4], [0, 0], [3, 3], [3, 1]]
# (1, 3) : [[2, 5], [2, 1], [0, 5], [0, 1], [3, 4], [3, 2]]
# (1, 4) : [[2, 6], [2, 2], [0, 6], [0, 2], [3, 5], [3, 3]]
# (1, 5) : [[2, 7], [2, 3], [0, 7], [0, 3], [3, 6], [3, 4]]
# (1, 6) : [[2, 4], [0, 4], [3, 7], [3, 5]]
# (1, 7) : [[2, 5], [0, 5], [3, 6]]
# (2, 0) : [[3, 2], [1, 2], [0, 1]]
# (2, 1) : [[3, 3], [1, 3], [0, 2], [0, 0]]
# (2, 2) : [[3, 4], [3, 0], [1, 4], [1, 0], [0, 3], [0, 1]]
# (2, 3) : [[3, 5], [3, 1], [1, 5], [1, 1], [0, 4], [0, 2]]
# (2, 4) : [[3, 6], [3, 2], [1, 6], [1, 2], [0, 5], [0, 3]]
# (2, 5) : [[3, 7], [3, 3], [1, 7], [1, 3], [0, 6], [0, 4]]
# (2, 6) : [[3, 4], [1, 4], [0, 7], [0, 5]]
# (2, 7) : [[3, 5], [1, 5], [0, 6]]
# (3, 0) : [[2, 2], [1, 1]]
# (3, 1) : [[2, 3], [1, 2], [1, 0]]
# (3, 2) : [[2, 4], [2, 0], [1, 3], [1, 1]]
# (3, 3) : [[2, 5], [2, 1], [1, 4], [1, 2]]
# (3, 4) : [[2, 6], [2, 2], [1, 5], [1, 3]]
# (3, 5) : [[2, 7], [2, 3], [1, 6], [1, 4]]
# (3, 6) : [[2, 4], [1, 7], [1, 5]]
# (3, 7) : [[2, 5], [1, 6]]


def start_moving(initial_coor, count):

    # mark current coordinate
    board[initial_coor[0], initial_coor[1]] = count

    if count == 32:
        return 'success'

    for next_coor in possible_moves[initial_coor[0], initial_coor[1]]:
        if board[next_coor[0], next_coor[1]] == 0:
            possible = start_moving(next_coor, count + 1)

            if possible == 'success':
                return 'success'

    # if there are no valid move, unmark current coordinate
    board[initial_coor[0], initial_coor[1]] = 0
    return 'failed'


for initial_coor in possible_moves.keys():
    board = np.zeros((4, 8))

    result = start_moving(initial_coor, 1)

    if result == 'success':
        break

print(board)
