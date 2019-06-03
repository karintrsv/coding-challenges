#include<iostream>
using namespace std;

int main() {
    string input_string= "BA0A1AB4BA3BA4";  //output should be 12345
    short flag = 0;                         //defaults to 0, 1 for A, -1 for B
    for (auto i:input_string){              //iterate through elements in input string
        int x=i-'0';                        //conversion to integer
        if (isdigit(i)) {
            (x!=-1) ? cout<< x+flag : 1==1; //print if i is a digit > -1
            flag=0;                         //change value to default
        }
        else {
        i=='A' ? flag=1 : i=='B' ? flag=-1 : flag=0; //set value for flag based on character
        }
    }
    return 0;
}
