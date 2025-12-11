#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    // cout << "Start" << endl;
    // C++ 입출력 속도 향상 (Fast I/O)
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string a, b, c;

    // 입력받기 (문자열로 받는 것이 처리에 용이함)
    cin >> a >> b >> c;

    // 1. 수로 생각했을 때: A + B - C
    // stoi()를 사용하여 문자열을 정수로 변환하여 계산
    int res1 = stoi(a) + stoi(b) - stoi(c);
    cout << res1 << "\n";

    // 2. 문자열로 생각했을 때: (A + B) - C
    // A와 B를 문자열로 이어 붙인 후(concatenation), 정수로 변환하여 C를 뺌
    string ab = a + b; 
    int res2 = stoi(ab) - stoi(c);
    cout << res2 << "\n";

    return 0;
}