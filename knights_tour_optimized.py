#
#  Just for Fun
#
#  INPUT
#  None
#
#  GOAL
#  Implement the Knight's Tour where the board size is 8x8
#

import numpy as np


def start(starting_point, board_size):

    board = np.full(board_size, (-1))

    # all valid knight's move
    knight_moves = [[1, 2], [-1, 2], [1, -2],
                    [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]]

    # mark initial coordinate
    board[starting_point[0], starting_point[1]] = 0

    # mulai rekursifnya
    if traverse(starting_point, board, knight_moves, 1):
        print(board)
    else:
        print("no solution")


def coorIsUnmarked(coor, board):
    # destructure the coordinate
    x, y = coor

    try:
        return board[x, y] == -1 and x >= 0 and y >= 0

    # if the coordinate is out of bound
    except IndexError:
        return False


def traverse(current_coor, board, moves, step):

    # get board size
    if step == board_size[0] * board_size[1]:
        return True

    # iterate through all knights moves
    for knight_move in moves:
        next_coor = np.array(current_coor) + np.array(knight_move)

        if coorIsUnmarked(next_coor, board):
            board[next_coor[0], next_coor[1]] = step

            # is the move a plausible?
            if traverse(next_coor, board, moves, step + 1):
                return True

            # unmark if it's not
            board[next_coor[0], next_coor[1]] = -1

    # kalau udah ngga ada move yg valid
    return False


if __name__ == "__main__":

    board_size = (8, 8)
    start([0, 0], board_size)
