#include <iostream>
using namespace std;

// declare function

/* ways to declare a varible

1. type identifier = initial_value;

2. type identifier (initial_value);

3. type identifier {intital_value};

*/


int main() {
    
    // declare variables
    int a, b;
    int result;

    int c (16);

    int x = 16;

    // process
    a = 5;
    b = 2;
    a = a + 1;
    result = a - b * c + x;

    cout << result;

    // terminate progrem
    return 0;
}