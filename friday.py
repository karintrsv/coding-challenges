"""
ID: krishna96
LANG: PYTHON3
TASK: friday
"""

from __future__ import print_function

#open the input file
fInput = open('friday.in', 'r')

#ask for the number of years
N = int(fInput.readline().rstrip('\n'))

#N = int(input("Enter N "))

#array of no. of days within each month
months = [31,28,31,30,31,30,31,31,30,31,30,31]

#initialize counters for each day
#count how many the 13th fall on each day
#days format [M,Tu,W,Th,F,Sa,Su]
days = [0,0,0,0,0,0,0]

#given from the problem, the start day is Monday January 1st, 1900.
#this is the index of the day in array "days"
currentDay = 0
currentYear = 1900

#iterate through the N times years
for loop1 in range(N):

    #This state means whether the current year is leap year or not
    leapYear = False

    #if the year is century years AND divisible by 400, it's a leap year
    if currentYear%100 == 0:
        if currentYear%400 ==0:
            leapYear = True

    #else if it's divisible by 4, it's a leap year
    elif currentYear%4 == 0:
        leapYear= True

    #if the current year is leap year, February becomes 29 days
    if leapYear==True:
        months[1] = 29
    if leapYear == False:
        months[1] = 28

    #iterate through the months in each year
    for month in months:
        currentDate = 1

        #iterate through days in each month
        for loop2 in range(month):

            #to keep the index within range,
            #when it reaches 7, just substract 7
            #to return to the same day a week before
            if currentDay == 7:
                currentDay -= 7

            if currentDate == 13:
                days[currentDay]+=1

            # increment the index of day and date
            currentDay += 1
            currentDate += 1

    #the next year won't be leap year
    #so return the days for February to 28
    currentYear += 1

#writing to the output file
fOut= open('friday.out', 'w+')

#the checker at USACO wants the output to be formatted
#in order of Saturday, Sunday, Monday, Tuesday ... Friday
for i in [5, 6, 0, 1, 2, 3, 4]:
    if i != 4:
        fOut.write(str(days[i])+  ' ')

    #the checker warned me to put a newline at the end of the line
    else:
        fOut.write(str(days[i]) + '\n')

fOut.close()
