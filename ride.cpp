/*
 ID: krishna96
 LANG: C++11
 PROG: ride
 */

#include <iostream>
#include <fstream>
#include <string.h>
#include <stdio.h>

int main(int argc, const char * argv[]) {
    
    //Declare group name and UFO name
    //with array size 9 just in case of extra characters
    char groupName[9], ufoName[9];
    
    //Declare the products for group name and UFO name
    long sumProductU = 1, sumProductG = 1;
    
    //Take input from user
    //Input given in the problem was 2 lines of 6 uppercase letters
    std::cin >> groupName;
    std::cin >> ufoName;
    
    //For each letter in the names, take the ASCII value
    //and substract 64 to get this scheme (A=1, B=2, ... Z=26)
    for (int i=0;i<6; i++) {
        int a = groupName[i];
        sumProductG *= (a-64);
    }
    
    for (int i=0;i<6; i++) {
        int a = ufoName[i];
        sumProductU *= (a-64);
    }
    
    //Open/create file ride.txt
    std::ofstream outfile ("ride.txt");
    
    //If the products of the ASCII value - 64 matches,
    //Alert the group with a "GO", otherwise "STAY
    if (sumProductU%47 == sumProductG%47) {
        outfile << "GO" << std::endl;
    }
    else {
        outfile << "STAY" << std::endl;
    }
     //Close the file
    outfile.close();
    return 0;
}
