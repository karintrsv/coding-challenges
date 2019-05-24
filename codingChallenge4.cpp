#include<iostream>              //for printing the output
#include<stack>                 //built-in stack data structure
using namespace std;

int main() {
    string input = "{({[}]})";  //input string
    stack <int> brackets;       //stack to store the ASCII value of each character
    bool flag = true;           //default true for balanced; false for not balance
    
    for(auto i:input){          //iterate over each character in input string
        if (i==')' || i=='}' || i==']' || i=='>') { //if it's a close bracket
            if (int(i)-brackets.top() > 2)          //compare to the top of the stack
                flag = false;                       //if ASCII value is <=2, they're a match
            brackets.pop();}
        else {
            brackets.push(i);}                      //else push the open brackets to stack
    }
    if (input.length()%2!=0) flag=false;            //if the input string contains odd no. of char
                                                    //it is certainly not balanced

    cout << endl << endl << input << "\t|";
    flag==true ? cout<<"Balanced" : cout<<"Not balanced"; //print the output based on flag
    cout << endl << endl;

    return 0;
}